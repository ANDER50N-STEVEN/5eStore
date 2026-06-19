// ===== STORETYPES.JS =====
// Store type definitions, management, and editor UI

// ===== DEFAULT STORE TYPES =====
const defaultStoreTypes = {
    general: {
        name: 'General Store',
        tags: [],
        isGeneral: true,
        limits: { mundane: '3d6+6', common: '1d6+2', uncommon: '1d4-1', rare: '1d4-3', veryrare: '0', legendary: '0' }
    },
    weaponsmith: {
        name: 'Weaponsmith',
        tags: ['Weapon', 'Sword', 'Axe', 'Hammer/Mace', 'Polearm', 'Dagger', 'Whip', 'Staff/Club', 'Ammunition', 'Armor', 'Shield'],
        limits: { mundane: '3d6+4', common: '1d6+1', uncommon: '1d4-1', rare: '1d4-3', veryrare: '0', legendary: '0' }
    },
    outfitter: {
        name: 'Outfitter',
        tags: ['Misc', 'Ammunition', 'Travel', 'Food'],
        limits: { mundane: '2d6+6', common: '1d6+1', uncommon: '1d4-2', rare: '0', veryrare: '0', legendary: '0' }
    },
    armorer: {
        name: 'Armorer',
        tags: ['Armor', 'Shield', 'Bracer', 'Gauntlet', 'Helmet'],
        limits: { mundane: '2d6+2', common: '1d6', uncommon: '1d4-1', rare: '1d4-3', veryrare: '0', legendary: '0' }
    },
    magic: {
        name: 'Magic Shop',
        tags: ['Wand/Staff/Rod', 'Book', 'Scroll', 'Jewelry', 'Potion', 'Spellcasting Focus',
               'Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation',
               'Necromancy', 'Transmutation', 'Arcane'],
        limits: { mundane: '1d4-1', common: '1d6+1', uncommon: '1d6', rare: '1d4-1', veryrare: '1d4-2', legendary: '1d4-3' }
    },
    apothecary: {
        name: 'Apothecary',
        tags: ['Potion', 'Alchemy', 'Healing', 'Poison'],
        limits: { mundane: '1d6+2', common: '1d6+2', uncommon: '1d6-1', rare: '1d4-2', veryrare: '0', legendary: '0' }
    },
    clothier: {
        name: 'Clothier',
        tags: ['Apparel', 'Bracer'],
        limits: { mundane: '2d6+4', common: '1d6+1', uncommon: '1d4-1', rare: '1d4-3', veryrare: '0', legendary: '0' }
    },
    scribe: {
        name: 'Scribe',
        tags: ['Scroll', 'Book'],
        limits: { mundane: '1d6+2', common: '1d6+1', uncommon: '1d6', rare: '1d4-2', veryrare: '1d4-3', legendary: '0' }
    },
    fletcher: {
        name: 'Fletcher',
        tags: ['Bow', 'Crossbow', 'Blowgun', 'Sling', 'Ammunition', 'Ranged'],
        limits: { mundane: '2d6+4', common: '1d6+1', uncommon: '1d4-1', rare: '1d4-3', veryrare: '0', legendary: '0' }
    },
    stable: {
        name: 'Stable & Tack',
        tags: ['Animal', 'Travel'],
        limits: { mundane: '2d6+4', common: '1d4+1', uncommon: '1d4-2', rare: '0', veryrare: '0', legendary: '0' }
    },
    tattoo: {
        name: 'Tattoo Parlor',
        tags: ['Tattoo'],
        limits: { mundane: '0', common: '1d4+1', uncommon: '1d6', rare: '1d4-1', veryrare: '1d4-2', legendary: '1d4-3' }
    },
    jeweler: {
        name: 'Jeweler',
        tags: ['Jewelry', 'Gem'],
        limits: { mundane: '1d6+4', common: '1d6+2', uncommon: '1d6-1', rare: '1d4-2', veryrare: '1d4-3', legendary: '0' }
    },
    tavern: {
        name: 'Tavern & Inn',
        tags: ['Food'],
        limits: { mundane: '2d6+6', common: '1d4+1', uncommon: '1d4-2', rare: '0', veryrare: '0', legendary: '0' }
    },
    temple: {
        name: 'Temple Store',
        tags: ['Divine', 'Religious', 'Healing', 'Abjuration', 'Divination', 'Cleric', 'Potion'],
        limits: { mundane: '1d6+2', common: '1d6+2', uncommon: '1d6-1', rare: '1d4-2', veryrare: '1d4-3', legendary: '1d4-3' }
    },
    thievesguild: {
        name: "Thieves' Guild",
        tags: ['Dagger', 'Poison', 'Stealth', 'Misc', 'Consumable', 'Scroll', 'Alchemy'],
        limits: { mundane: '1d6+2', common: '1d6+1', uncommon: '1d6-1', rare: '1d4-2', veryrare: '1d4-3', legendary: '0' }
    },
    curiosities: {
        name: 'Curiosities Shop',
        tags: ['Jewelry', 'Gem', 'Tattoo', 'Summoning', 'Evil', 'Religious'],
        limits: { mundane: '1d4', common: '1d6+1', uncommon: '1d6', rare: '1d4-1', veryrare: '1d4-2', legendary: '1d4-3' }
    }
};

// ===== CUSTOM STORE TYPES =====
// Loaded from localStorage, overlays defaultStoreTypes
let customStoreTypes = {};

function loadCustomStoreTypes() {
    try {
        const saved = localStorage.getItem('dnd-custom-store-types');
        if (saved) customStoreTypes = JSON.parse(saved);
    } catch(e) {
        console.error('Error loading custom store types:', e);
        customStoreTypes = {};
    }
}

function saveCustomStoreTypes() {
    localStorage.setItem('dnd-custom-store-types', JSON.stringify(customStoreTypes));
}

// ===== STORE TYPE ACCESSORS =====

function getAllStoreTypes() {
    const merged = {};
    for (const [key, val] of Object.entries(defaultStoreTypes)) {
        merged[key] = { ...val };
    }
    for (const [key, val] of Object.entries(customStoreTypes)) {
        merged[key] = { ...val };
    }
    return merged;
}

function getStoreType(key) {
    return customStoreTypes[key] || defaultStoreTypes[key] || null;
}

function isBuiltIn(key) {
    return !!defaultStoreTypes[key];
}

// ===== STORE TYPE DROPDOWN =====

function rebuildStoreTypeDropdown() {
    const select = document.getElementById('store-type');
    if (!select) return;

    const currentValue = select.value;
    const allTypes = getAllStoreTypes();

    select.innerHTML = '';
    for (const [key, store] of Object.entries(allTypes)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = store.name;
        select.appendChild(option);
    }

    if (allTypes[currentValue]) select.value = currentValue;
}

// ===== STORE TYPES LIST UI =====

function populateStoreTypesList() {
    const container = document.getElementById('store-types-list');
    if (!container) return;

    const allTypes = getAllStoreTypes();
    let html = '<div class="store-types-grid">';

    for (const [key, store] of Object.entries(allTypes)) {
        const isEdited = isBuiltIn(key) && customStoreTypes[key];
        const isCustom = !isBuiltIn(key);

        const tagBadges = store.isGeneral
            ? '<span class="store-type-tag">Everything</span>'
            : (store.tags && store.tags.length > 0
                ? store.tags.map(t => `<span class="store-type-tag">${t}</span>`).join('')
                : '<span class="store-type-tag" style="color:#8b6f47;">No tags set</span>');

        html += `
            <div class="store-type-card">
                <div class="store-type-card-header">
                    <span class="store-type-name">${store.name}</span>
                    ${isEdited ? '<span class="store-type-badge edited">Edited</span>' : ''}
                    ${isCustom ? '<span class="store-type-badge custom">Custom</span>' : ''}
                </div>
                <div class="store-type-tags-preview">${tagBadges}</div>
                <div class="store-type-limits-preview">
                    <span>Mundane: ${store.limits.mundane}</span>
                    <span>Common: ${store.limits.common}</span>
                    <span>Uncommon: ${store.limits.uncommon}</span>
                    <span>Rare: ${store.limits.rare}</span>
                    <span>Very Rare: ${store.limits.veryrare}</span>
                    <span>Legendary: ${store.limits.legendary}</span>
                </div>
                <div class="store-type-card-actions">
                    <button class="edit-btn" onclick="openStoreTypeEditor('${key}')">Edit</button>
                    ${isEdited ? `<button class="cancel-btn" onclick="resetStoreType('${key}')">Reset</button>` : ''}
                    ${isCustom ? `<button class="delete-btn" onclick="deleteStoreType('${key}')">Delete</button>` : ''}
                </div>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;
}

// ===== STORE TYPE EDITOR =====

function openStoreTypeEditor(key) {
    const isNew = key === null;
    const allTypes = getAllStoreTypes();
    const store = isNew ? {
        name: '',
        tags: [],
        isGeneral: false,
        limits: { mundane: '3d6+6', common: '2d4+1', uncommon: '1d6-4', rare: '1d4-3', veryrare: '0', legendary: '0' }
    } : { ...allTypes[key] };

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'store-type-editor-overlay';

    const tagCheckboxes = allKnownTags.map(tag => {
        const checked = store.tags && store.tags.includes(tag) ? 'checked' : '';
        return `
            <label class="tag-checkbox-label">
                <input type="checkbox" value="${tag}" ${checked} class="store-type-tag-check">
                <span>${tag}</span>
            </label>
        `;
    }).join('');

    overlay.innerHTML = `
        <div class="modal-box" style="max-width: 650px; max-height: 90vh; overflow-y: auto;">
            <h3 style="color: #d4af37; margin-bottom: 20px;">
                ${isNew ? '✨ New Store Type' : `✏️ Edit: ${store.name}`}
            </h3>

            <div class="modal-section">
                <div class="control-group">
                    <label>Store Name</label>
                    <input type="text" id="st-name" value="${store.name}" placeholder="e.g. Blacksmith">
                </div>
            </div>

            <div class="modal-section">
                <label style="color: #d4af37; font-weight: bold; display: block; margin-bottom: 10px;">
                    Item Tags This Store Carries
                </label>
                <label class="tag-checkbox-label" style="margin-bottom: 10px;">
                    <input type="checkbox" id="st-is-general" ${store.isGeneral ? 'checked' : ''}
                        onchange="toggleGeneralStore(this)">
                    <span style="color: #d4af37;">General Store (carries everything)</span>
                </label>
                <div id="st-tags-grid" class="tag-checkbox-grid"
                    style="${store.isGeneral ? 'opacity:0.4; pointer-events:none;' : ''}">
                    ${tagCheckboxes}
                </div>
            </div>

            <div class="modal-section">
                <label style="color: #d4af37; font-weight: bold; display: block; margin-bottom: 10px;">
                    Default Item Limits (dice notation)
                </label>
                <div class="custom-limits-grid">
                    <div class="control-group">
                        <label>Mundane</label>
                        <input type="text" id="st-mundane" value="${store.limits.mundane}">
                    </div>
                    <div class="control-group">
                        <label>Common</label>
                        <input type="text" id="st-common" value="${store.limits.common}">
                    </div>
                    <div class="control-group">
                        <label>Uncommon</label>
                        <input type="text" id="st-uncommon" value="${store.limits.uncommon}">
                    </div>
                    <div class="control-group">
                        <label>Rare</label>
                        <input type="text" id="st-rare" value="${store.limits.rare}">
                    </div>
                    <div class="control-group">
                        <label>Very Rare</label>
                        <input type="text" id="st-veryrare" value="${store.limits.veryrare}">
                    </div>
                    <div class="control-group">
                        <label>Legendary</label>
                        <input type="text" id="st-legendary" value="${store.limits.legendary}">
                    </div>
                </div>
            </div>

            <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                <button class="cancel-btn" onclick="closeStoreTypeEditor()">Cancel</button>
                <button class="save-btn" onclick="saveStoreTypeFromEditor('${key}', ${isNew})">💾 Save</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeStoreTypeEditor();
    });
}

function toggleGeneralStore(checkbox) {
    const grid = document.getElementById('st-tags-grid');
    grid.style.opacity = checkbox.checked ? '0.4' : '1';
    grid.style.pointerEvents = checkbox.checked ? 'none' : '';
}

function closeStoreTypeEditor() {
    const overlay = document.getElementById('store-type-editor-overlay');
    if (overlay) overlay.remove();
}

function saveStoreTypeFromEditor(originalKey, isNew) {
    const name = document.getElementById('st-name').value.trim();
    const isGeneral = document.getElementById('st-is-general').checked;

    if (!name) {
        alert('Please enter a store name.');
        return;
    }

    const limits = {
        mundane:   document.getElementById('st-mundane').value.trim(),
        common:    document.getElementById('st-common').value.trim(),
        uncommon:  document.getElementById('st-uncommon').value.trim(),
        rare:      document.getElementById('st-rare').value.trim(),
        veryrare:  document.getElementById('st-veryrare').value.trim(),
        legendary: document.getElementById('st-legendary').value.trim()
    };

    for (const [rarity, formula] of Object.entries(limits)) {
        if (!validateDiceNotation(formula)) {
            alert(`Invalid dice notation for ${rarity}: "${formula}"\n\nUse format like: 2d6+3, 1d8-2, or 0`);
            return;
        }
    }

    const tags = isGeneral ? [] : Array.from(
        document.querySelectorAll('.store-type-tag-check:checked')
    ).map(cb => cb.value);

    const key = isNew
        ? 'custom_' + name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '') + '_' + Date.now()
        : originalKey;

    customStoreTypes[key] = { name, tags, isGeneral, limits };
    saveCustomStoreTypes();
    rebuildStoreTypeDropdown();
    closeStoreTypeEditor();
    populateStoreTypesList();
    showSaveNotification(`Store type "${name}" saved!`);
}

function resetStoreType(key) {
    if (!confirm(`Reset "${defaultStoreTypes[key].name}" to its default settings?`)) return;
    delete customStoreTypes[key];
    saveCustomStoreTypes();
    rebuildStoreTypeDropdown();
    populateStoreTypesList();
    showSaveNotification(`"${defaultStoreTypes[key].name}" reset to defaults.`);
}

function deleteStoreType(key) {
    const name = customStoreTypes[key]?.name || key;
    if (!confirm(`Delete store type "${name}"? This cannot be undone.`)) return;
    delete customStoreTypes[key];
    saveCustomStoreTypes();
    rebuildStoreTypeDropdown();
    populateStoreTypesList();
    showSaveNotification(`"${name}" deleted.`);
}
