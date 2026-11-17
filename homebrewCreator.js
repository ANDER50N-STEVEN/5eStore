// ===== HOMEBREWCREATOR.JS =====
// Create, edit, delete and export your own homebrew items.
// New items are saved in localStorage and added to the homebrew list on every
// page load, so they show up in future shops and loot. Use "Export" to download
// a homebrewItems.json that includes them, if you want to commit them to the repo.

const CUSTOM_HOMEBREW_KEY = 'dnd-custom-homebrew-items';
const RARITY_OPTIONS = ['Mundane', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'];

// ===== LOAD / SAVE =====

function loadCustomHomebrewItems() {
    try {
        const saved = JSON.parse(localStorage.getItem(CUSTOM_HOMEBREW_KEY) || '[]');
        const existingNames = new Set(homebrewItemDatabase.map(i => i.name));
        saved.forEach(item => {
            // If the item has since been added to homebrewItems.json, don't duplicate it
            if (existingNames.has(item.name)) return;
            homebrewItemDatabase.push({ ...item, isCustom: true });
        });
    } catch (e) {
        console.error('Error loading custom homebrew items:', e);
    }
}

function saveCustomHomebrewItems() {
    const custom = homebrewItemDatabase
        .filter(i => i.isCustom)
        .map(({ isCustom, ...rest }) => rest);
    localStorage.setItem(CUSTOM_HOMEBREW_KEY, JSON.stringify(custom));
}

// ===== EDITOR MODAL =====

function openHomebrewCreator(index = null) {
    const isNew = index === null;
    const item = isNew
        ? { name: '', cost: 100, rarity: 'Uncommon', type: [], description: '', fullDescription: '', descriptors: [] }
        : homebrewItemDatabase[index];

    const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'homebrew-creator-overlay';

    overlay.innerHTML = `
        <div class="modal-box" style="max-width: 700px; max-height: 90vh; overflow-y: auto;">
            <h3 style="color: #d4af37; margin-bottom: 20px;">
                ${isNew ? '✨ New Homebrew Item' : `✏️ Edit: ${esc(item.name)}`}
            </h3>

            <div class="modal-section custom-limits-grid">
                <div class="control-group" style="grid-column: span 3;">
                    <label>Name</label>
                    <input type="text" id="hbc-name" value="${esc(item.name)}" placeholder="e.g. Cloak of the Night Owl">
                </div>
                <div class="control-group">
                    <label>Cost (gp)</label>
                    <input type="number" id="hbc-cost" value="${esc(item.cost)}" min="0" step="0.01">
                </div>
                <div class="control-group">
                    <label>Rarity</label>
                    <select id="hbc-rarity">
                        ${RARITY_OPTIONS.map(r => `<option ${r === item.rarity ? 'selected' : ''}>${r}</option>`).join('')}
                    </select>
                </div>
            </div>

            <div class="modal-section">
                <label style="display: block; margin-bottom: 8px;">Tags (decide which stores carry it)</label>
                <div id="hbc-tags"></div>
            </div>

            <div class="modal-section">
                <div class="control-group">
                    <label>Short Description (shown in shops)</label>
                    <textarea id="hbc-desc" class="item-edit-textarea" rows="4">${esc(item.description)}</textarea>
                </div>
                <div class="control-group" style="margin-top: 12px;">
                    <label>Full Description (optional, used on printed cards)</label>
                    <textarea id="hbc-full" class="item-edit-textarea" rows="4">${esc(item.fullDescription)}</textarea>
                </div>
                <div class="control-group" style="margin-top: 12px;">
                    <label>Flavor Text (optional, one per line)</label>
                    <textarea id="hbc-descriptors" class="item-edit-textarea" rows="4"
                        placeholder="worn leather with silver stitching...">${esc((item.descriptors || []).join('\n'))}</textarea>
                </div>
            </div>

            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button class="cancel-btn" onclick="closeHomebrewCreator()">Cancel</button>
                <button class="save-btn" onclick="saveHomebrewFromCreator(${isNew ? 'null' : index})">💾 Save Item</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeHomebrewCreator(); });

    const tags = Array.isArray(item.type) ? item.type : (item.type ? [item.type] : []);
    createTagEditor('hbc-tags', tags);
    document.getElementById('hbc-name').focus();
}

function closeHomebrewCreator() {
    document.getElementById('homebrew-creator-overlay')?.remove();
}

function saveHomebrewFromCreator(index) {
    const name = document.getElementById('hbc-name').value.trim();
    const cost = parseFloat(document.getElementById('hbc-cost').value);
    const rarity = document.getElementById('hbc-rarity').value;
    const type = getTagsFromEditor('hbc-tags');
    const description = document.getElementById('hbc-desc').value.trim();
    const fullDescription = document.getElementById('hbc-full').value.trim();
    const descriptors = document.getElementById('hbc-descriptors').value
        .split('\n').map(s => s.trim()).filter(Boolean);

    if (!name) { alert('Please enter a name.'); return; }
    if (isNaN(cost) || cost < 0) { alert('Please enter a valid cost.'); return; }
    if (type.length === 0 && !confirm('This item has no tags, so only the General Store will stock it. Save anyway?')) return;

    const duplicate = [...officialItemDatabase, ...homebrewItemDatabase]
        .some((i, n) => i.name.toLowerCase() === name.toLowerCase()
            && !(index !== null && homebrewItemDatabase[index] === i));
    if (duplicate) { alert(`An item named "${name}" already exists. Please choose a different name.`); return; }

    const newItem = { name, cost, rarity, type, tags: type, description, descriptors, isCustom: true };
    if (fullDescription) newItem.fullDescription = fullDescription;

    if (index === null) {
        homebrewItemDatabase.push(newItem);
    } else {
        homebrewItemDatabase[index] = { ...homebrewItemDatabase[index], ...newItem };
    }

    saveCustomHomebrewItems();
    updateItemDatabase();
    closeHomebrewCreator();
    populateHomebrewList();
    showSaveNotification(`"${name}" saved — it can now appear in shops and loot.`);
}

// ===== DELETE =====

function deleteCustomHomebrewItem(index) {
    const item = homebrewItemDatabase[index];
    if (!item || !item.isCustom) return;
    if (!confirm(`Delete "${item.name}"? This cannot be undone.`)) return;

    homebrewItemDatabase.splice(index, 1);

    // Exclusions are stored by index; shift any that pointed past the deleted item
    excludedHomebrewItems = new Set(
        [...excludedHomebrewItems].filter(i => i !== index).map(i => (i > index ? i - 1 : i))
    );
    saveExcludedItems();

    saveCustomHomebrewItems();
    updateItemDatabase();
    populateHomebrewList();
    showSaveNotification(`"${item.name}" deleted.`);
}

// ===== EXPORT =====

function exportHomebrewJSON() {
    const data = homebrewItemDatabase.map(({ isCustom, tags, ...rest }) => rest);
    const blob = new Blob([JSON.stringify(data, null, 4)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'homebrewItems.json';
    a.click();
    URL.revokeObjectURL(url);
    showSaveNotification(`Exported ${data.length} homebrew items.`);
}
