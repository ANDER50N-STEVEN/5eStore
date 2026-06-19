// ===== ITEMS.JS =====
// Item database management, item list UI, editing, and tag editor

// ===== DATABASE STATE =====
let officialItemDatabase = [];
let homebrewItemDatabase = [];
let itemDatabase = [];

let officialSortColumn = 'name';
let officialSortDirection = 'asc';
let homebrewSortColumn = 'name';
let homebrewSortDirection = 'asc';

let excludedOfficialItems = new Set();
let excludedHomebrewItems = new Set();

let currentlyEditingIndex = null;
let currentlyEditingHomebrewIndex = null;
let descriptorEditingIndex = null;

// ===== DATABASE LOADING =====

async function loadItemDatabases() {
    try {
        const [officialResponse, homebrewResponse] = await Promise.all([
            fetch('officialItems.json'),
            fetch('homebrewItems.json')
        ]);

        officialItemDatabase = await officialResponse.json();
        homebrewItemDatabase = await homebrewResponse.json();

        console.log('Loaded official items:', officialItemDatabase.length);
        console.log('Loaded homebrew items:', homebrewItemDatabase.length);

        loadExcludedItems();
        itemDatabase = [...officialItemDatabase];
        updateItemDatabase();

    } catch (error) {
        console.error('Error loading item databases:', error);
        alert('Failed to load item databases. Please refresh the page.');
    }
}

function updateItemDatabase() {
    const allowHomebrew = document.getElementById('allow-homebrew').checked;

    const includedOfficialItems = officialItemDatabase.filter((item, index) =>
        !isItemExcluded(index, false)
    );

    if (allowHomebrew) {
        const includedHomebrewItems = homebrewItemDatabase.filter((item, index) =>
            !isItemExcluded(index, true)
        );
        itemDatabase = [...includedOfficialItems, ...includedHomebrewItems];
    } else {
        itemDatabase = [...includedOfficialItems];
    }
}

// ===== EXCLUDED ITEMS =====

function loadExcludedItems() {
    const saved = localStorage.getItem('dnd-excluded-items');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            excludedOfficialItems = new Set(data.official || []);
            excludedHomebrewItems = new Set(data.homebrew || []);
        } catch (e) {
            console.error('Error loading excluded items:', e);
        }
    }
}

function saveExcludedItems() {
    const data = {
        official: Array.from(excludedOfficialItems),
        homebrew: Array.from(excludedHomebrewItems)
    };
    localStorage.setItem('dnd-excluded-items', JSON.stringify(data));
}

function toggleItemExclusion(index, isHomebrew) {
    const excludedSet = isHomebrew ? excludedHomebrewItems : excludedOfficialItems;
    if (excludedSet.has(index)) {
        excludedSet.delete(index);
    } else {
        excludedSet.add(index);
    }
    saveExcludedItems();
}

function isItemExcluded(index, isHomebrew) {
    const excludedSet = isHomebrew ? excludedHomebrewItems : excludedOfficialItems;
    return excludedSet.has(index);
}

// ===== LOCALSTORAGE ITEM EDITS =====

function loadItemEditsFromLocalStorage() {
    const savedEdits = localStorage.getItem('dnd-item-edits');
    if (savedEdits) {
        try {
            const edits = JSON.parse(savedEdits);

            if (edits.officialItems) {
                Object.entries(edits.officialItems).forEach(([index, changes]) => {
                    if (officialItemDatabase[index]) {
                        Object.assign(officialItemDatabase[index], changes);
                    }
                });
            }

            if (edits.homebrewItems) {
                Object.entries(edits.homebrewItems).forEach(([index, changes]) => {
                    if (homebrewItemDatabase[index]) {
                        Object.assign(homebrewItemDatabase[index], changes);
                    }
                });
            }

            console.log('Item edits loaded from localStorage');
            updateItemDatabase();
        } catch (e) {
            console.error('Error loading item edits:', e);
        }
    }
}

function saveIndividualItemEdit(index, isHomebrew = false) {
    const savedEdits = JSON.parse(
        localStorage.getItem('dnd-item-edits') || '{"officialItems": {}, "homebrewItems": {}}'
    );

    if (isHomebrew) {
        savedEdits.homebrewItems[index] = { ...homebrewItemDatabase[index] };
    } else {
        savedEdits.officialItems[index] = { ...officialItemDatabase[index] };
    }

    localStorage.setItem('dnd-item-edits', JSON.stringify(savedEdits));
    console.log('Individual item edit saved');
}

// ===== OFFICIAL ITEM LIST =====

function sortItemList(column) {
    if (officialSortColumn === column) {
        officialSortDirection = officialSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        officialSortColumn = column;
        officialSortDirection = 'asc';
    }
    populateItemList();
}

function populateItemList(filteredItems = null) {
    const tbody = document.getElementById('item-table-body');
    if (!tbody) return;

    const items = (filteredItems || officialItemDatabase).slice().sort((a, b) => {
        let aVal, bVal;
        if (officialSortColumn === 'cost') {
            aVal = a.cost;
            bVal = b.cost;
        } else if (officialSortColumn === 'type') {
            aVal = Array.isArray(a.type) ? (a.type[0] || '').toLowerCase() : (a.type || '').toLowerCase();
            bVal = Array.isArray(b.type) ? (b.type[0] || '').toLowerCase() : (b.type || '').toLowerCase();
        } else {
            aVal = (a[officialSortColumn] || '').toString().toLowerCase();
            bVal = (b[officialSortColumn] || '').toString().toLowerCase();
        }

        if (officialSortColumn === 'cost') {
            return officialSortDirection === 'asc' ? aVal - bVal : bVal - aVal;
        } else {
            return officialSortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        }
    });

    tbody.innerHTML = '';

    items.forEach((item, index) => {
        const originalIndex = officialItemDatabase.findIndex(i => i.name === item.name);
        const isExcluded = isItemExcluded(originalIndex, false);
        const row = document.createElement('tr');
        row.id = `item-row-${originalIndex}`;

        const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
        const descriptorCount = (item.descriptors && item.descriptors.length) || 0;
        const tags = Array.isArray(item.type) ? item.type : [item.type];
        const tagsHTML = tags.map(tag => `<span class="item-tag">${tag}</span>`).join('');

        row.innerHTML = `
            <td>
                <input type="checkbox" ${isExcluded ? '' : 'checked'}
                    onchange="toggleItemExclusion(${originalIndex}, false); populateItemList();"
                    title="Include in shop generation">
            </td>
            <td>${item.name}</td>
            <td>${item.cost}</td>
            <td>
                <div class="item-tags">
                    ${tagsHTML || '<span style="color: #8b6f47; font-style: italic;">No tags</span>'}
                </div>
            </td>
            <td class="${rarityClass}">${item.rarity}</td>
            <td style="max-width: 400px;">${item.description || 'No description'}</td>
            <td>
                <button class="edit-btn" onclick="editItem(${originalIndex})">Edit</button>
            </td>
            <td>
                <button class="descriptor-btn"
                    onclick="toggleDescriptorEdit(${originalIndex}, false)"
                    title="Edit Flavor Text (${descriptorCount})">
                    Flavor Text (${descriptorCount})
                </button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function applyItemFilters() {
    const searchTerm = document.getElementById('item-search').value.toLowerCase();
    const filterType = document.getElementById('filter-type').value;
    const filterRarity = document.getElementById('filter-rarity').value;

    const filtered = officialItemDatabase.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm) ||
                              (item.description && item.description.toLowerCase().includes(searchTerm));
        const tags = Array.isArray(item.type) ? item.type : [item.type];
        const matchesType = !filterType || tags.includes(filterType);
        const matchesRarity = !filterRarity || item.rarity === filterRarity;
        return matchesSearch && matchesType && matchesRarity;
    });

    populateItemList(filtered);
}

function resetItemFilters() {
    document.getElementById('item-search').value = '';
    document.getElementById('filter-type').value = '';
    document.getElementById('filter-rarity').value = '';
    populateItemList();
}

// ===== OFFICIAL ITEM EDITING =====

function editItem(index) {
    const isExcluded = isItemExcluded(index, false);

    if (currentlyEditingIndex !== null && currentlyEditingIndex !== index) {
        cancelEdit(currentlyEditingIndex);
    }

    currentlyEditingIndex = index;
    const item = officialItemDatabase[index];
    const row = document.getElementById('item-row-' + index);

    const rarityOptions = ['Mundane', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'];
    const rarityOptionsHtml = rarityOptions.map(rarity =>
        `<option value="${rarity}" ${item.rarity === rarity ? 'selected' : ''}>${rarity}</option>`
    ).join('');

    const descriptorCount = (item.descriptors && item.descriptors.length) || 0;
    const itemTags = Array.isArray(item.type) ? item.type : (item.type ? [item.type] : []);

    row.innerHTML =
        '<td><input type="checkbox" ' + (isExcluded ? '' : 'checked') +
        ' onchange="toggleItemExclusion(' + index + ', false);" title="Include in shop generation"></td>' +
        '<td><input type="text" class="item-edit-input" id="edit-name-' + index + '" value="' + item.name + '"></td>' +
        '<td><input type="number" class="item-edit-input" id="edit-cost-' + index + '" value="' + item.cost + '" step="0.01"></td>' +
        '<td><div id="tag-editor-' + index + '"></div></td>' +
        '<td><select class="item-edit-select" id="edit-rarity-' + index + '">' + rarityOptionsHtml + '</select></td>' +
        '<td><textarea class="item-edit-textarea" id="edit-desc-' + index + '">' + (item.description || '') + '</textarea></td>' +
        '<td>' +
            '<button class="save-btn" onclick="saveItem(' + index + ')">Save</button>' +
            '<button class="cancel-btn" onclick="cancelEdit(' + index + ')">Cancel</button>' +
        '</td>' +
        '<td><button class="descriptor-btn" onclick="toggleDescriptorEdit(' + index + ', false)">Flavor Text (' + descriptorCount + ')</button></td>';

    createTagEditor('tag-editor-' + index, itemTags);
}

function saveItem(index) {
    const item = officialItemDatabase[index];

    item.name        = document.getElementById(`edit-name-${index}`).value;
    item.cost        = parseFloat(document.getElementById(`edit-cost-${index}`).value);
    item.type        = getTagsFromEditor(`tag-editor-${index}`);
    item.rarity      = document.getElementById(`edit-rarity-${index}`).value;
    item.description = document.getElementById(`edit-desc-${index}`).value;

    currentlyEditingIndex = null;
    populateItemList();
    saveIndividualItemEdit(index, false);
}

function cancelEdit(index) {
    currentlyEditingIndex = null;
    populateItemList();
}

// ===== HOMEBREW ITEM LIST =====

function sortHomebrewList(column) {
    if (homebrewSortColumn === column) {
        homebrewSortDirection = homebrewSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        homebrewSortColumn = column;
        homebrewSortDirection = 'asc';
    }
    populateHomebrewList();
}

function populateHomebrewList(filteredItems = null) {
    const tbody = document.getElementById('homebrew-table-body');
    if (!tbody) return;

    const items = (filteredItems || homebrewItemDatabase).slice().sort((a, b) => {
        let aVal, bVal;
        if (homebrewSortColumn === 'cost') {
            aVal = a.cost;
            bVal = b.cost;
        } else if (homebrewSortColumn === 'type') {
            aVal = (a.tags && a.tags[0]) ? a.tags[0].toLowerCase() : (a.type || '').toLowerCase();
            bVal = (b.tags && b.tags[0]) ? b.tags[0].toLowerCase() : (b.type || '').toLowerCase();
        } else {
            aVal = (a[homebrewSortColumn] || '').toString().toLowerCase();
            bVal = (b[homebrewSortColumn] || '').toString().toLowerCase();
        }

        if (homebrewSortColumn === 'cost') {
            return homebrewSortDirection === 'asc' ? aVal - bVal : bVal - aVal;
        } else {
            return homebrewSortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        }
    });

    tbody.innerHTML = '';

    items.forEach((item, index) => {
        const originalIndex = homebrewItemDatabase.findIndex(i => i.name === item.name);
        const isExcluded = isItemExcluded(originalIndex, true);
        const row = document.createElement('tr');
        row.id = `homebrew-row-${originalIndex}`;

        const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
        const descriptorCount = (item.descriptors && item.descriptors.length) || 0;

        if (!item.tags && item.type) item.tags = [item.type];
        const tags = item.tags || [];
        const tagsHTML = tags.map(tag => `<span class="item-tag">${tag}</span>`).join('');

        row.innerHTML = `
            <td>
                <input type="checkbox" ${isExcluded ? '' : 'checked'}
                    onchange="toggleItemExclusion(${originalIndex}, true); populateHomebrewList();"
                    title="Include in shop generation">
            </td>
            <td>${item.name}</td>
            <td>${item.cost}</td>
            <td>
                <div class="item-tags">
                    ${tagsHTML || '<span style="color: #8b6f47; font-style: italic;">No tags</span>'}
                </div>
            </td>
            <td class="${rarityClass}">${item.rarity}</td>
            <td style="max-width: 400px;">${item.description || 'No description'}</td>
            <td>
                <button class="edit-btn" onclick="editHomebrewItem(${originalIndex})">Edit</button>
                <button class="descriptor-btn"
                    onclick="toggleDescriptorEdit(${originalIndex}, true)"
                    title="Edit flavor text (${descriptorCount})">
                    📝 Flavor Text (${descriptorCount})
                </button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function applyHomebrewFilters() {
    const searchTerm = document.getElementById('homebrew-search').value.toLowerCase();
    const filterType = document.getElementById('homebrew-filter-type').value;
    const filterRarity = document.getElementById('homebrew-filter-rarity').value;

    const filtered = homebrewItemDatabase.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm) ||
                              (item.description && item.description.toLowerCase().includes(searchTerm));
        const tags = Array.isArray(item.type) ? item.type : [item.type];
        const matchesType = !filterType || tags.includes(filterType);
        const matchesRarity = !filterRarity || item.rarity === filterRarity;
        return matchesSearch && matchesType && matchesRarity;
    });

    populateHomebrewList(filtered);
}

function resetHomebrewFilters() {
    document.getElementById('homebrew-search').value = '';
    document.getElementById('homebrew-filter-type').value = '';
    document.getElementById('homebrew-filter-rarity').value = '';
    populateHomebrewList();
}

// ===== HOMEBREW ITEM EDITING =====

function editHomebrewItem(index) {
    const isExcluded = isItemExcluded(index, true);

    if (currentlyEditingHomebrewIndex !== null && currentlyEditingHomebrewIndex !== index) {
        cancelHomebrewEdit(currentlyEditingHomebrewIndex);
    }

    currentlyEditingHomebrewIndex = index;
    const item = homebrewItemDatabase[index];
    const row = document.getElementById('homebrew-row-' + index);

    const rarityOptions = ['Mundane', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'];
    const rarityOptionsHtml = rarityOptions.map(rarity =>
        `<option value="${rarity}" ${item.rarity === rarity ? 'selected' : ''}>${rarity}</option>`
    ).join('');

    const descriptorCount = (item.descriptors && item.descriptors.length) || 0;

    if (!item.tags && item.type) item.tags = [item.type];

    row.innerHTML =
        '<td><input type="checkbox" ' + (isExcluded ? '' : 'checked') +
        ' onchange="toggleItemExclusion(' + index + ', true);" title="Include in shop generation"></td>' +
        '<td><input type="text" class="item-edit-input" id="edit-homebrew-name-' + index + '" value="' + item.name + '"></td>' +
        '<td><input type="number" class="item-edit-input" id="edit-homebrew-cost-' + index + '" value="' + item.cost + '" step="0.01"></td>' +
        '<td><div id="tag-homebrew-editor-' + index + '"></div></td>' +
        '<td><select class="item-edit-select" id="edit-homebrew-rarity-' + index + '">' + rarityOptionsHtml + '</select></td>' +
        '<td><textarea class="item-edit-textarea" id="edit-homebrew-desc-' + index + '">' + (item.description || '') + '</textarea></td>' +
        '<td>' +
            '<button class="save-btn" onclick="saveHomebrewItem(' + index + ')">Save</button>' +
            '<button class="cancel-btn" onclick="cancelHomebrewEdit(' + index + ')">Cancel</button><br>' +
            '<button class="descriptor-btn" onclick="toggleDescriptorEdit(' + index + ', true)">📝 Flavor Text (' + descriptorCount + ')</button>' +
        '</td>';

    createTagEditor('tag-homebrew-editor-' + index, item.tags || []);
}

function saveHomebrewItem(index) {
    const item = homebrewItemDatabase[index];

    item.name        = document.getElementById(`edit-homebrew-name-${index}`).value;
    item.cost        = parseFloat(document.getElementById(`edit-homebrew-cost-${index}`).value);
    item.tags        = getTagsFromEditor(`tag-homebrew-editor-${index}`);
    item.type        = item.tags; // keep type in sync
    item.rarity      = document.getElementById(`edit-homebrew-rarity-${index}`).value;
    item.description = document.getElementById(`edit-homebrew-desc-${index}`).value;

    currentlyEditingHomebrewIndex = null;
    populateHomebrewList();
    updateItemDatabase();
    saveIndividualItemEdit(index, true);
}

function cancelHomebrewEdit(index) {
    currentlyEditingHomebrewIndex = null;
    populateHomebrewList();
}

// ===== TAG EDITOR =====

function createTagEditor(containerId, initialTags) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="tag-editor">
            <div class="tag-input-container" id="${containerId}-tags">
                <input type="text" class="tag-add-input" id="${containerId}-input" placeholder="Type to add tag...">
            </div>
            <div style="display: flex; gap: 10px; align-items: center; margin-top: 5px;">
                <button type="button" class="add-new-tag-btn" onclick="showNewTagDialog('${containerId}')">+</button>
                <span style="color: #8b6f47; font-size: 0.85em;">Press Enter or comma to add</span>
            </div>
            <div class="tag-suggestions" id="${containerId}-suggestions"></div>
        </div>
    `;

    const tagsContainer = document.getElementById(`${containerId}-tags`);
    const input = document.getElementById(`${containerId}-input`);

    initialTags.forEach(tag => addTagToEditor(containerId, tag));
    updateSuggestions(containerId, '');

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const value = input.value.trim().replace(/,/g, '');
            if (value) {
                addTagToEditor(containerId, value);
                input.value = '';
                updateSuggestions(containerId, '');
            }
        } else if (e.key === 'Backspace' && input.value === '') {
            const tags = tagsContainer.querySelectorAll('.tag-input-item');
            if (tags.length > 0) {
                tags[tags.length - 1].remove();
            }
        }
    });

    input.addEventListener('input', function() {
        updateSuggestions(containerId, input.value);
    });
}

function addTagToEditor(containerId, tagText) {
    const tagsContainer = document.getElementById(`${containerId}-tags`);
    const input = document.getElementById(`${containerId}-input`);
    if (!tagsContainer || !input) return;

    const existingTags = Array.from(tagsContainer.querySelectorAll('.tag-input-item'))
        .map(el => el.dataset.tag);
    if (existingTags.includes(tagText)) return;

    const tagElement = document.createElement('div');
    tagElement.className = 'tag-input-item';
    tagElement.dataset.tag = tagText;
    tagElement.innerHTML = `
        <span>${tagText}</span>
        <button type="button" class="tag-remove-btn" onclick="this.parentElement.remove()">×</button>
    `;

    tagsContainer.insertBefore(tagElement, input);
}

function updateSuggestions(containerId, searchTerm) {
    const suggestionsContainer = document.getElementById(`${containerId}-suggestions`);
    const tagsContainer = document.getElementById(`${containerId}-tags`);
    if (!suggestionsContainer || !tagsContainer) return;

    const existingTags = Array.from(tagsContainer.querySelectorAll('.tag-input-item'))
        .map(el => el.dataset.tag);

    const filtered = commonTags.filter(tag =>
        !existingTags.includes(tag) &&
        tag.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 10);

    suggestionsContainer.innerHTML = filtered.map(tag =>
        `<div class="tag-suggestion" onclick="addTagFromSuggestion('${containerId}', '${tag}')">${tag}</div>`
    ).join('');
}

function addTagFromSuggestion(containerId, tag) {
    addTagToEditor(containerId, tag);
    const input = document.getElementById(`${containerId}-input`);
    if (input) {
        input.value = '';
        input.focus();
    }
    updateSuggestions(containerId, '');
}

function getTagsFromEditor(containerId) {
    const tagsContainer = document.getElementById(`${containerId}-tags`);
    if (!tagsContainer) return [];
    return Array.from(tagsContainer.querySelectorAll('.tag-input-item'))
        .map(el => el.dataset.tag);
}

function showNewTagDialog(containerId) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
        background: linear-gradient(135deg, #2c1810 0%, #4a2c1a 100%);
        border: 3px solid #d4af37;
        border-radius: 10px;
        padding: 30px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
    `;

    modal.innerHTML = `
        <h3 style="color: #d4af37; margin-bottom: 20px; text-align: center;">Create New Tag</h3>
        <div style="margin-bottom: 20px;">
            <label style="display: block; color: #d4af37; margin-bottom: 8px;">Tag Name:</label>
            <input type="text" id="new-tag-name" style="
                width: 100%;
                padding: 10px;
                background: #1a0f08;
                border: 2px solid #8b6f47;
                border-radius: 5px;
                color: #f4e4c1;
                font-size: 1em;
                font-family: inherit;
            " placeholder="Enter tag name...">
        </div>
        <div style="margin-bottom: 20px;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: #c4b591;">
                <input type="checkbox" id="save-to-common" checked style="width: 20px; height: 20px; cursor: pointer;">
                <span>Save to common tags list (will appear in suggestions for all items)</span>
            </label>
        </div>
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="cancel-new-tag" style="
                padding: 10px 20px;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid #8b6f47;
                border-radius: 5px;
                color: #f4e4c1;
                cursor: pointer;
                font-weight: bold;
            ">Cancel</button>
            <button id="create-new-tag" style="
                padding: 10px 20px;
                background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
                border: none;
                border-radius: 5px;
                color: white;
                cursor: pointer;
                font-weight: bold;
            ">Create Tag</button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const input = document.getElementById('new-tag-name');
    setTimeout(() => input.focus(), 100);

    function createTag() {
        const tagName = input.value.trim();
        if (!tagName) {
            alert('Please enter a tag name');
            return;
        }

        const saveToCommon = document.getElementById('save-to-common').checked;

        if (saveToCommon && !commonTags.includes(tagName)) {
            commonTags.push(tagName);
            commonTags.sort();
            localStorage.setItem('dnd-custom-tags', JSON.stringify(commonTags));
            showSaveNotification(`Tag "${tagName}" added to common tags`);
        }

        addTagToEditor(containerId, tagName);

        const mainInput = document.getElementById(`${containerId}-input`);
        if (mainInput) {
            mainInput.value = '';
            mainInput.focus();
        }

        updateSuggestions(containerId, '');
        overlay.remove();
    }

    document.getElementById('create-new-tag').addEventListener('click', createTag);
    document.getElementById('cancel-new-tag').addEventListener('click', () => overlay.remove());

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            createTag();
        } else if (e.key === 'Escape') {
            overlay.remove();
        }
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) overlay.remove();
    });
}
