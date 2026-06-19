// ===== DESCRIPTORS.JS =====
// Flavor text descriptor editor for items

// ===== STATE =====
const openDescriptorEditors = new Map();
let descriptorSaveQueue = new Map();
let descriptorSaveTimer = null;

// ===== RANDOM DESCRIPTOR =====

function getRandomDescriptor(item) {
    if (!item.descriptors || item.descriptors.length === 0) return null;
    return item.descriptors[Math.floor(Math.random() * item.descriptors.length)];
}

// ===== TOGGLE DESCRIPTOR EDITOR =====

function toggleDescriptorEdit(index, isHomebrew) {
    const editorKey = `${isHomebrew ? 'hb' : 'off'}-${index}`;
    const rowId = isHomebrew ? `homebrew-row-${index}` : `item-row-${index}`;
    const descriptorRowId = `descriptor-row-${editorKey}`;

    const existingRow = document.getElementById(descriptorRowId);
    if (existingRow) {
        existingRow.remove();
        openDescriptorEditors.delete(editorKey);
        descriptorEditingIndex = null;
        return;
    }

    // Chrome-specific fix: detect Chrome and skip requestAnimationFrame
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (isChrome) {
        const row = document.getElementById(rowId);
        if (!row) return;

        const database = isHomebrew ? homebrewItemDatabase : officialItemDatabase;
        const item = database[index];
        const descriptorRow = createDescriptorEditorRow(index, isHomebrew, item);

        row.parentNode.insertBefore(descriptorRow, row.nextSibling);
        openDescriptorEditors.set(editorKey, descriptorRow);
        descriptorEditingIndex = index;
    } else {
        requestAnimationFrame(() => {
            const row = document.getElementById(rowId);
            if (!row) return;

            const database = isHomebrew ? homebrewItemDatabase : officialItemDatabase;
            const item = database[index];
            const descriptorRow = createDescriptorEditorRow(index, isHomebrew, item);

            row.parentNode.insertBefore(descriptorRow, row.nextSibling);
            openDescriptorEditors.set(editorKey, descriptorRow);
            descriptorEditingIndex = index;
        });
    }
}

// ===== CREATE DESCRIPTOR EDITOR ROW =====

function createDescriptorEditorRow(index, isHomebrew, item) {
    const editorKey = `${isHomebrew ? 'hb' : 'off'}-${index}`;
    const descriptors = item.descriptors || [];

    const row = document.createElement('tr');
    row.id = `descriptor-row-${editorKey}`;
    row.className = 'descriptor-editor-row';

    const cell = document.createElement('td');
    cell.colSpan = 8;
    cell.className = 'descriptor-editor-cell';

    const editor = document.createElement('div');
    editor.className = 'descriptor-editor';

    const h4 = document.createElement('h4');
    h4.textContent = `Flavor Text for: ${item.name}`;

    const help = document.createElement('p');
    help.className = 'descriptor-help';
    help.textContent = 'Add flavor text descriptions that will be randomly shown when this item appears in shops or loot.';

    const listContainer = document.createElement('div');
    listContainer.id = `descriptor-list-${editorKey}`;
    listContainer.className = 'descriptor-list';

    if (descriptors.length === 0) {
        const noDesc = document.createElement('p');
        noDesc.className = 'no-descriptors';
        noDesc.textContent = 'No flavor text yet. Click "Add Flavor Text" to create one.';
        listContainer.appendChild(noDesc);
    } else {
        let descriptorsHTML = '';
        descriptors.forEach((desc, descIndex) => {
            descriptorsHTML += `
                <div class="descriptor-item" id="descriptor-${editorKey}-${descIndex}">
                    <textarea class="descriptor-textarea"
                        id="desc-text-${editorKey}-${descIndex}">${desc}</textarea>
                    <button class="delete-descriptor-btn"
                        onclick="deleteDescriptor(${index}, ${descIndex}, ${isHomebrew})">🗑️</button>
                </div>
            `;
        });
        listContainer.innerHTML = descriptorsHTML;
    }

    const actions = document.createElement('div');
    actions.className = 'descriptor-actions';

    const addBtn = document.createElement('button');
    addBtn.className = 'add-descriptor-btn';
    addBtn.textContent = '+ Add Flavor Text';
    addBtn.onclick = () => addDescriptor(index, isHomebrew);

    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-descriptors-btn';
    saveBtn.textContent = '💾 Save All';
    saveBtn.onclick = () => saveDescriptors(index, isHomebrew);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'cancel-descriptors-btn';
    closeBtn.textContent = 'Close';
    closeBtn.onclick = () => toggleDescriptorEdit(index, isHomebrew);

    actions.appendChild(addBtn);
    actions.appendChild(saveBtn);
    actions.appendChild(closeBtn);

    editor.appendChild(h4);
    editor.appendChild(help);
    editor.appendChild(listContainer);
    editor.appendChild(actions);
    cell.appendChild(editor);
    row.appendChild(cell);

    return row;
}

// ===== ADD DESCRIPTOR =====

function addDescriptor(index, isHomebrew) {
    const editorKey = `${isHomebrew ? 'hb' : 'off'}-${index}`;
    const listId = `descriptor-list-${editorKey}`;
    const list = document.getElementById(listId);
    if (!list) return;

    const noDescMsg = list.querySelector('.no-descriptors');
    if (noDescMsg) noDescMsg.remove();

    const newIndex = list.querySelectorAll('.descriptor-item').length;

    const newElement = document.createElement('div');
    newElement.className = 'descriptor-item';
    newElement.id = `descriptor-${editorKey}-${newIndex}`;
    newElement.innerHTML = `
        <textarea class="descriptor-textarea"
            id="desc-text-${editorKey}-${newIndex}"
            placeholder="Enter flavor text..."></textarea>
        <button class="delete-descriptor-btn"
            onclick="deleteDescriptor(${index}, ${newIndex}, ${isHomebrew})">🗑️</button>
    `;

    list.appendChild(newElement);
    newElement.querySelector('textarea').focus();
}

// ===== DELETE DESCRIPTOR =====

function deleteDescriptor(index, descIndex, isHomebrew) {
    const editorKey = `${isHomebrew ? 'hb' : 'off'}-${index}`;
    const descriptorId = `descriptor-${editorKey}-${descIndex}`;
    const element = document.getElementById(descriptorId);

    if (element && confirm('Delete this flavor text?')) {
        element.remove();
    }
}

// ===== SAVE DESCRIPTORS =====

function saveDescriptors(index, isHomebrew) {
    const database = isHomebrew ? homebrewItemDatabase : officialItemDatabase;
    const item = database[index];
    const editorKey = `${isHomebrew ? 'hb' : 'off'}-${index}`;
    const listId = `descriptor-list-${editorKey}`;
    const list = document.getElementById(listId);
    if (!list) return;

    const textareas = list.querySelectorAll('.descriptor-textarea');
    const newDescriptors = Array.from(textareas)
        .map(ta => ta.value.trim())
        .filter(text => text.length > 0);

    item.descriptors = newDescriptors;

    // Close immediately
    toggleDescriptorEdit(index, isHomebrew);

    // Update button count
    updateSingleItemRow(index, isHomebrew);

    // Save in background
    setTimeout(() => {
        const savedEdits = JSON.parse(
            localStorage.getItem('dnd-item-edits') || '{"officialItems": {}, "homebrewItems": {}}'
        );

        if (isHomebrew) {
            savedEdits.homebrewItems[index] = { ...item };
        } else {
            savedEdits.officialItems[index] = { ...item };
        }

        localStorage.setItem('dnd-item-edits', JSON.stringify(savedEdits));
    }, 0);

    showSaveNotification(`Saved ${newDescriptors.length} flavor text entries for ${item.name}`);
}

// ===== UPDATE SINGLE ITEM ROW BUTTON =====

function updateSingleItemRow(index, isHomebrew) {
    const rowId = isHomebrew ? `homebrew-row-${index}` : `item-row-${index}`;
    const row = document.getElementById(rowId);
    if (!row) return;

    const database = isHomebrew ? homebrewItemDatabase : officialItemDatabase;
    const item = database[index];

    const descriptorBtn = row.querySelector('.descriptor-btn');
    if (descriptorBtn) {
        const count = item.descriptors ? item.descriptors.length : 0;
        descriptorBtn.textContent = count > 0 ? `Flavor Text (${count})` : 'Flavor Text';
    }
}
