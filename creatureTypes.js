// ===== CREATURETYPES.JS =====
// Creature type definitions, management, and editor UI

// ===== DEFAULT CREATURE TYPE TAG RESTRICTIONS =====
const defaultCreatureTypeTags = {
    humanoid:    { name: 'Humanoid',    tags: null },  // null = any items allowed
    dragon:      { name: 'Dragon',      tags: null },
    beast:       { name: 'Beast',       tags: ['Jewelry', 'Gem'] },
    undead:      { name: 'Undead',      tags: ['Necromancy', 'Abjuration', 'Divine', 'Religious', 'Jewelry', 'Scroll', 'Wand/Staff/Rod'] },
    fiend:       { name: 'Fiend',       tags: ['Evil', 'Summoning', 'Necromancy', 'Enchantment', 'Wand/Staff/Rod', 'Jewelry'] },
    celestial:   { name: 'Celestial',   tags: ['Divine', 'Religious', 'Healing', 'Abjuration', 'Conjuration', 'Jewelry'] },
    fey:         { name: 'Fey',         tags: ['Enchantment', 'Nature', 'Jewelry', 'Gem', 'Instrument', 'Scroll'] },
    elemental:   { name: 'Elemental',   tags: ['Transmutation', 'Arcane', 'Evocation'] },
    aberration:  { name: 'Aberration',  tags: ['Divination', 'Transmutation', 'Arcane', 'Wand/Staff/Rod', 'Book'] },
    monstrosity: { name: 'Monstrosity', tags: ['Weapon', 'Armor', 'Jewelry', 'Gem'] },
    giant:       { name: 'Giant',       tags: ['Weapon', 'Armor', 'Gem', 'Jewelry'] },
    construct:   { name: 'Construct',   tags: ['Arcane', 'Transmutation', 'Wand/Staff/Rod', 'Book'] }
};

// ===== CUSTOM CREATURE TYPES =====
// Loaded from localStorage, overlays defaultCreatureTypeTags
let customCreatureTypes = {};

function loadCustomCreatureTypes() {
    try {
        const saved = localStorage.getItem('dnd-custom-creature-types');
        if (saved) customCreatureTypes = JSON.parse(saved);
    } catch(e) {
        console.error('Error loading custom creature types:', e);
        customCreatureTypes = {};
    }
}

function saveCustomCreatureTypes() {
    localStorage.setItem('dnd-custom-creature-types', JSON.stringify(customCreatureTypes));
}

// ===== CREATURE TYPE ACCESSORS =====

function getAllCreatureTypes() {
    const merged = {};
    for (const [key, val] of Object.entries(defaultCreatureTypeTags)) {
        merged[key] = { ...val };
    }
    for (const [key, val] of Object.entries(customCreatureTypes)) {
        merged[key] = { ...val };
    }
    return merged;
}

function isBuiltInCreatureType(key) {
    return !!defaultCreatureTypeTags[key];
}

function getCreatureTypeTags(creatureType) {
    const all = getAllCreatureTypes();
    return all[creatureType]?.tags ?? null;
}

// ===== CREATURE TYPE DROPDOWN REBUILD =====

function rebuildCreatureTypeDropdowns() {
    const allTypes = getAllCreatureTypes();
    const selects = document.querySelectorAll('.creature-type-select');

    selects.forEach(select => {
        const currentValue = select.value;
        select.innerHTML = '';
        for (const [key, type] of Object.entries(allTypes)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = type.name;
            select.appendChild(option);
        }
        if (allTypes[currentValue]) select.value = currentValue;
    });
}

// ===== CREATURE TYPES LIST UI =====

function populateCreatureTypesList() {
    const container = document.getElementById('creature-types-list');
    if (!container) return;

    const allTypes = getAllCreatureTypes();
    let html = '<div class="store-types-grid">';

    for (const [key, type] of Object.entries(allTypes)) {
        const isEdited = isBuiltInCreatureType(key) && customCreatureTypes[key];
        const isCustom = !isBuiltInCreatureType(key);

        const tagBadges = type.tags === null
            ? '<span class="store-type-tag">Any Items</span>'
            : type.tags.length > 0
                ? type.tags.map(t => `<span class="store-type-tag">${t}</span>`).join('')
                : '<span class="store-type-tag" style="color:#8b6f47;">No tags set</span>';

        html += `
            <div class="store-type-card">
                <div class="store-type-card-header">
                    <span class="store-type-name">${type.name}</span>
                    ${isEdited ? '<span class="store-type-badge edited">Edited</span>' : ''}
                    ${isCustom ? '<span class="store-type-badge custom">Custom</span>' : ''}
                </div>
                <div class="store-type-tags-preview">${tagBadges}</div>
                <div class="store-type-card-actions">
                    <button class="edit-btn" onclick="openCreatureTypeEditor('${key}')">Edit</button>
                    ${isEdited ? `<button class="cancel-btn" onclick="resetCreatureType('${key}')">Reset</button>` : ''}
                    ${isCustom ? `<button class="delete-btn" onclick="deleteCreatureType('${key}')">Delete</button>` : ''}
                </div>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;
}

// ===== CREATURE TYPE EDITOR =====

function openCreatureTypeEditor(key) {
    const isNew = key === null;
    const allTypes = getAllCreatureTypes();
    const type = isNew ? {
        name: '',
        tags: []
    } : { ...allTypes[key] };

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'creature-type-editor-overlay';

    const tagCheckboxes = allKnownTags.map(tag => {
        const checked = type.tags && type.tags.includes(tag) ? 'checked' : '';
        return `
            <label class="tag-checkbox-label">
                <input type="checkbox" value="${tag}" ${checked} class="creature-type-tag-check">
                <span>${tag}</span>
            </label>
        `;
    }).join('');

    overlay.innerHTML = `
        <div class="modal-box" style="max-width: 650px; max-height: 90vh; overflow-y: auto;">
            <h3 style="color: #d4af37; margin-bottom: 20px;">
                ${isNew ? '✨ New Creature Type' : `✏️ Edit: ${type.name}`}
            </h3>

            <div class="modal-section">
                <div class="control-group">
                    <label>Creature Type Name</label>
                    <input type="text" id="ct-name" value="${type.name}" placeholder="e.g. Ooze">
                </div>
            </div>

            <div class="modal-section">
                <label style="color: #d4af37; font-weight: bold; display: block; margin-bottom: 10px;">
                    Allowed Magic Item Tags
                </label>
                <label class="tag-checkbox-label" style="margin-bottom: 10px;">
                    <input type="checkbox" id="ct-is-any"
                        ${type.tags === null ? 'checked' : ''}
                        onchange="toggleAnyCreatureType(this)">
                    <span style="color: #d4af37;">No Restriction (can drop any magic item)</span>
                </label>
                <div id="ct-tags-grid" class="tag-checkbox-grid"
                    style="${type.tags === null ? 'opacity:0.4; pointer-events:none;' : ''}">
                    ${tagCheckboxes}
                </div>
            </div>

            <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                <button class="cancel-btn" onclick="closeCreatureTypeEditor()">Cancel</button>
                <button class="save-btn" onclick="saveCreatureTypeFromEditor('${key}', ${isNew})">💾 Save</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeCreatureTypeEditor();
    });
}

function toggleAnyCreatureType(checkbox) {
    const grid = document.getElementById('ct-tags-grid');
    grid.style.opacity = checkbox.checked ? '0.4' : '1';
    grid.style.pointerEvents = checkbox.checked ? 'none' : '';
}

function closeCreatureTypeEditor() {
    const overlay = document.getElementById('creature-type-editor-overlay');
    if (overlay) overlay.remove();
}

function saveCreatureTypeFromEditor(originalKey, isNew) {
    const name = document.getElementById('ct-name').value.trim();
    const isAny = document.getElementById('ct-is-any').checked;

    if (!name) {
        alert('Please enter a creature type name.');
        return;
    }

    const tags = isAny ? null : Array.from(
        document.querySelectorAll('.creature-type-tag-check:checked')
    ).map(cb => cb.value);

    const key = isNew
        ? 'custom_' + name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '') + '_' + Date.now()
        : originalKey;

    customCreatureTypes[key] = { name, tags };
    saveCustomCreatureTypes();
    rebuildCreatureTypeDropdowns();
    closeCreatureTypeEditor();
    populateCreatureTypesList();
    showSaveNotification(`Creature type "${name}" saved!`);
}

function resetCreatureType(key) {
    if (!confirm(`Reset "${defaultCreatureTypeTags[key].name}" to its default settings?`)) return;
    delete customCreatureTypes[key];
    saveCustomCreatureTypes();
    rebuildCreatureTypeDropdowns();
    populateCreatureTypesList();
    showSaveNotification(`"${defaultCreatureTypeTags[key].name}" reset to defaults.`);
}

function deleteCreatureType(key) {
    const name = customCreatureTypes[key]?.name || key;
    if (!confirm(`Delete creature type "${name}"? This cannot be undone.`)) return;
    delete customCreatureTypes[key];
    saveCustomCreatureTypes();
    rebuildCreatureTypeDropdowns();
    populateCreatureTypesList();
    showSaveNotification(`"${name}" deleted.`);
}

// ===== CREATURE ROSTER UI =====

let creatureRowCount = 0;

function addCreatureRow() {
    creatureRowCount++;
    const roster = document.getElementById('creature-roster');
    if (!roster) return;

    const rowId = `creature-row-${creatureRowCount}`;
    const allTypes = getAllCreatureTypes();

    const typeOptions = Object.entries(allTypes)
        .map(([key, type]) => `<option value="${key}">${type.name}</option>`)
        .join('');

    const row = document.createElement('div');
    row.className = 'creature-row';
    row.id = rowId;

    row.innerHTML = `
        <div>
            <label>Count</label>
            <input type="number" min="1" max="100" value="1" class="creature-count">
        </div>
        <div>
            <label>CR</label>
            <input type="number" min="0" max="30" value="1" step="0.25" class="creature-cr">
        </div>
        <div>
            <label>Creature Type</label>
            <select class="creature-type-select">
                ${typeOptions}
            </select>
        </div>
        <button class="creature-row-remove" onclick="removeCreatureRow('${rowId}')" title="Remove">✕</button>
    `;

    roster.appendChild(row);
}

function removeCreatureRow(rowId) {
    const allRows = document.querySelectorAll('.creature-row');
    if (allRows.length === 1) {
        showSaveNotification('You need at least one creature type!');
        return;
    }
    const row = document.getElementById(rowId);
    if (row) row.remove();
}

function getCreatureRoster() {
    const rows = document.querySelectorAll('.creature-row');
    const roster = [];

    rows.forEach(row => {
        const count = parseInt(row.querySelector('.creature-count').value) || 1;
        const cr    = parseFloat(row.querySelector('.creature-cr').value) || 0;
        const type  = row.querySelector('.creature-type-select').value;
        roster.push({ count, cr, type });
    });

    return roster;
}
