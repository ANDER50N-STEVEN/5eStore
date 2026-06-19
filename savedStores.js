// ===== SAVEDSTORES.JS =====
// Saving, loading, restocking, and managing saved store inventories

// ===== STATE =====
let currentLoadedStoreIndex = null;

// ===== SAVE CURRENT STORE =====

function saveCurrentStore() {
    const shopContent = document.getElementById('shop-content');
    const inventoryDiv = document.querySelector('#shop-content .inventory');

    if (!inventoryDiv) {
        alert('Please generate a shop first before saving!');
        return;
    }

    const storeName = prompt('Enter a name for this store:');
    if (!storeName || storeName.trim() === '') return;

    const storeType     = document.getElementById('store-type').value;
    const settlementSize = document.getElementById('settlement-size').value;
    const wealthLevel   = document.getElementById('wealth-level').value;
    const maxModifier   = parseFloat(document.getElementById('price-modifier').value) + 5;

    const inventory = [];
    const itemElements = document.querySelectorAll('#shop-content .item');

    itemElements.forEach(itemEl => {
        const nameEl       = itemEl.querySelector('.item-name');
        const priceEl      = itemEl.querySelector('.item-price');
        const descriptorEl = itemEl.querySelector('.item-descriptor');

        if (!nameEl || !priceEl) return;

        // Clean item name
        let itemName = nameEl.textContent.trim();
        itemName = itemName.replace(/\s*\(×\d+\)\s*/g, '');
        itemName = itemName.replace(/\s*⭐\s*/g, '');
        itemName = itemName.replace(/\s*🔮 Homebrew\s*/g, '');

        const originalItem = itemDatabase.find(item => item.name === itemName);

        if (originalItem) {
            inventory.push({
                ...originalItem,
                displayPrice:   priceEl.textContent.trim(),
                savedDescriptor: descriptorEl ? descriptorEl.textContent.trim() : null
            });
        }
    });

    if (inventory.length === 0) {
        alert('No items found in the current shop!');
        return;
    }

    const savedStore = {
        name:           storeName.trim(),
        timestamp:      new Date().toISOString(),
        storeType:      storeType,
        settlementSize: settlementSize,
        maxModifier:    maxModifier,
        wealthLevel:    wealthLevel,
        inventory:      inventory
    };

    const savedStores = JSON.parse(localStorage.getItem('dnd-saved-stores') || '[]');
    savedStores.push(savedStore);
    localStorage.setItem('dnd-saved-stores', JSON.stringify(savedStores));

    showSaveNotification(`Store "${storeName}" saved successfully!`);
}

// ===== DISPLAY SAVED STORES LIST =====

function displaySavedStores() {
    const savedStores = JSON.parse(localStorage.getItem('dnd-saved-stores') || '[]');

    if (savedStores.length === 0) {
        return '<div class="empty-state"><p>No saved stores yet. Generate and save a store to see it here!</p></div>';
    }

    let html = '<div class="saved-stores-container">';
    html += '<h3 style="color: #d4af37; margin-bottom: 20px;">📚 Saved Stores</h3>';

    savedStores.forEach((store, index) => {
        const date = new Date(store.timestamp);
        const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

        // Use getAllStoreTypes so custom types show correct names
        const allTypes = getAllStoreTypes();
        const typeName = allTypes[store.storeType]?.name || store.storeType;

        html += `
            <div class="saved-store-card">
                <div class="saved-store-header">
                    <h4>${store.name}</h4>
                    <div class="saved-store-actions">
                        <button class="load-btn" onclick="loadSavedStore(${index})">Load</button>
                        <button class="delete-btn" onclick="deleteSavedStore(${index})">Delete</button>
                    </div>
                </div>
                <div class="saved-store-info">
                    <p><strong>Type:</strong> ${typeName}</p>
                    <p><strong>Settlement:</strong> ${store.settlementSize}</p>
                    <p><strong>Items:</strong> ${store.inventory.length}</p>
                    <p><strong>Saved:</strong> ${formattedDate}</p>
                </div>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

// ===== LOAD SAVED STORE =====

function loadSavedStore(index) {
    const savedStores = JSON.parse(localStorage.getItem('dnd-saved-stores') || '[]');
    const store = savedStores[index];

    if (!store) {
        alert('Store not found!');
        return;
    }

    currentLoadedStoreIndex = index;

    // Switch to generator tab
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById('generator-tab').classList.add('active');
    document.querySelector('.tab').classList.add('active');
    document.getElementById('shop-content').style.display = 'block';

    const allTypes = getAllStoreTypes();
    const storeName = allTypes[store.storeType]?.name || store.storeType;

    const shopkeeper = generateShopkeeper(
        store.storeType,
        store.settlementSize,
        store.wealthLevel || 'common'
    );

    let html = `
        <div class="shop-info">
            <h2>${storeName} - ${store.settlementSize.charAt(0).toUpperCase() + store.settlementSize.slice(1)}</h2>
            <div style="margin-top: 15px; padding: 15px; background: rgba(139, 111, 71, 0.15); border-radius: 5px; border-left: 3px solid #d4af37;">
                <p style="margin-bottom: 8px;"><strong style="color: #d4af37;">Proprietor:</strong> ${shopkeeper.name}, ${shopkeeper.race}</p>
                <p style="margin-bottom: 8px;"><strong style="color: #d4af37;">Available Gold:</strong> ${shopkeeper.goldAvailable} gp</p>
                <p style="margin-bottom: 8px; font-style: italic; color: #c4b591;">${shopkeeper.name} ${shopkeeper.description}.</p>
                <p style="color: #a89968; font-size: 0.9em;"><em>Quirk:</em> ${shopkeeper.quirk}</p>
            </div>
            <p style="margin-top: 15px; display: flex; align-items: center; gap: 15px; flex-wrap: wrap;">
                <span>
                    <strong>Saved Store:</strong> ${store.name} |
                    <strong>Total Items:</strong>
                    <span id="saved-store-item-count">${store.inventory.length}</span>
                </span>
                <button onclick="restockSavedStore(${index})"
                    style="background: linear-gradient(135deg, #2c6b4f 0%, #1a4a37 100%);">
                    🔄 Restock
                </button>
            </p>
        </div>
        <div class="inventory">
    `;

    // Group items by type
    const grouped = {};
    for (const item of store.inventory) {
        const primaryType = Array.isArray(item.type)
            ? (item.type[0] || 'Misc')
            : (item.type || 'Misc');

        if (!grouped[primaryType]) grouped[primaryType] = [];
        grouped[primaryType].push(item);
    }

    for (const [type, items] of Object.entries(grouped).sort()) {
        const categoryId = `category-${type.replace(/\s+/g, '-')}`;
        const mundaneItems = items.filter(item => item.rarity === 'Mundane');
        const magicItems   = items.filter(item => item.rarity !== 'Mundane');

        html += `
            <div class="category" id="${categoryId}">
                <div class="category-header" onclick="toggleCategory('${categoryId}')">
                    <h3>📦 ${type}</h3>
                    <span class="category-count">${items.length} items <span class="collapse-icon">▼</span></span>
                </div>
                <div class="items">
        `;

        // Mundane subcategory
        if (mundaneItems.length > 0) {
            const mundaneSubcategoryId = `${categoryId}-mundane`;
            html += `
                <div class="subcategory" id="${mundaneSubcategoryId}">
                    <div class="subcategory-header" onclick="toggleCategory('${mundaneSubcategoryId}')">
                        <h4>⚒️ Mundane Items</h4>
                        <span class="subcategory-count">${mundaneItems.length} items <span class="collapse-icon">▼</span></span>
                    </div>
                    <div class="subcategory-items">
            `;

            mundaneItems.sort((a, b) => a.name.localeCompare(b.name));
            for (const item of mundaneItems) {
                html += buildSavedItemHTML(item, index);
            }

            html += `</div></div>`;
        }

        // Magic subcategory
        if (magicItems.length > 0) {
            const magicSubcategoryId = `${categoryId}-magic`;
            html += `
                <div class="subcategory" id="${magicSubcategoryId}">
                    <div class="subcategory-header" onclick="toggleCategory('${magicSubcategoryId}')">
                        <h4>✨ Magic Items</h4>
                        <span class="subcategory-count">${magicItems.length} items <span class="collapse-icon">▼</span></span>
                    </div>
                    <div class="subcategory-items">
            `;

            magicItems.sort((a, b) => a.name.localeCompare(b.name));
            for (const item of magicItems) {
                html += buildSavedItemHTML(item, index);
            }

            html += `</div></div>`;
        }

        html += `</div></div>`;
    }

    html += '</div>';
    document.getElementById('shop-content').innerHTML = html;
}

// ===== BUILD SAVED ITEM HTML =====
// Shared between mundane and magic items in saved stores

function buildSavedItemHTML(item, storeIndex) {
    const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
    const isHomebrew = homebrewItemDatabase.some(hbItem => hbItem.name === item.name);
    const homebrewBadge = isHomebrew
        ? ' <span class="homebrew-badge">🔮 Homebrew</span>'
        : '';
    const descriptorHTML = item.savedDescriptor
        ? `<div class="item-descriptor" style="font-style: italic; color: #a89968; margin-top: 5px; font-size: 0.9em;">${item.savedDescriptor}</div>`
        : '';
    const itemId = `saved-item-${item.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}-${Math.floor(Math.random() * 99999)}`;

    return `
        <div class="item" id="${itemId}">
            <div class="item-header">
                <div>
                    <span class="item-name">${item.name}${homebrewBadge}</span>
                    <span class="item-rarity ${rarityClass}">(${item.rarity})</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="item-price">${item.displayPrice}</span>
                    <button class="item-action-btn sold-btn"
                        onclick="soldSavedItem('${itemId}', ${storeIndex})"
                        title="Mark as sold">🪙 Sold</button>
                    <button class="item-action-btn print-btn"
                        onclick="printItem('${itemId}', '${item.name.replace(/'/g, "\\'")}', '${item.rarity}')"
                        title="Print item card">🖨️ Print</button>
                </div>
            </div>
            <div class="item-description">${item.description || 'No description available.'}</div>
            ${descriptorHTML}
        </div>
    `;
}

// ===== SOLD SAVED ITEM =====

function soldSavedItem(itemId, storeIndex) {
    const el = document.getElementById(itemId);
    if (!el) return;

    const nameEl = el.querySelector('.item-name');
    if (!nameEl) return;

    const nameClone = nameEl.cloneNode(true);
    const badge = nameClone.querySelector('.homebrew-badge');
    if (badge) badge.remove();

    let itemName = nameClone.textContent.trim()
        .replace(/\s*\(×\d+\)\s*/g, '')
        .replace(/\s*⭐\s*/g, '')
        .trim();

    console.log('Attempting to sell item:', itemName, 'from store index:', storeIndex);

    const savedStores = JSON.parse(localStorage.getItem('dnd-saved-stores') || '[]');
    const store = savedStores[storeIndex];

    if (!store) {
        console.error('Store not found at index:', storeIndex);
        return;
    }

    const itemIdx = store.inventory.findIndex(i => i.name === itemName);

    if (itemIdx === -1) {
        console.error('Item not found in inventory:', itemName);
    } else {
        store.inventory.splice(itemIdx, 1);
        localStorage.setItem('dnd-saved-stores', JSON.stringify(savedStores));
        console.log('Item removed. Remaining inventory:', store.inventory.length);

        const countEl = document.getElementById('saved-store-item-count');
        if (countEl) countEl.textContent = store.inventory.length;
    }

    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateX(-20px)';
    setTimeout(() => el.remove(), 300);
}

// ===== DELETE SAVED STORE =====

function deleteSavedStore(index) {
    if (!confirm('Are you sure you want to delete this saved store?')) return;

    const savedStores = JSON.parse(localStorage.getItem('dnd-saved-stores') || '[]');
    savedStores.splice(index, 1);
    localStorage.setItem('dnd-saved-stores', JSON.stringify(savedStores));

    if (document.getElementById('savedstores-tab').classList.contains('active')) {
        document.getElementById('savedstores-tab').innerHTML = displaySavedStores();
    }
}

// ===== RESTOCK SAVED STORE =====

function restockSavedStore(storeIndex) {
    const savedStores = JSON.parse(localStorage.getItem('dnd-saved-stores') || '[]');
    const store = savedStores[storeIndex];

    if (!store) return;

    if (!confirm(`Restock "${store.name}"?\n\nBetween 25-75% of current items will be removed and the store will be restocked to full capacity.`)) return;

    // Step 1: Remove 25-75% of existing items randomly
    const removePercent = 0.25 + Math.random() * 0.50;
    const numToRemove = Math.round(store.inventory.length * removePercent);
    const shuffled = [...store.inventory].sort(() => Math.random() - 0.5);
    const kept = shuffled.slice(numToRemove);

    console.log(`Keeping ${kept.length} items, removed ${numToRemove}`);

    // Step 2: Apply store type limits to the inputs
    const storeTypeData = getStoreType(store.storeType);
    if (storeTypeData && storeTypeData.limits) {
        document.getElementById('max-mundane').value   = storeTypeData.limits.mundane;
        document.getElementById('max-common').value    = storeTypeData.limits.common;
        document.getElementById('max-uncommon').value  = storeTypeData.limits.uncommon;
        document.getElementById('max-rare').value      = storeTypeData.limits.rare;
        document.getElementById('max-veryrare').value  = storeTypeData.limits.veryrare;
        document.getElementById('max-legendary').value = storeTypeData.limits.legendary;
    }

    // Step 3: Generate a full new inventory
    let newInventory = [];
    try {
        newInventory = selectInventory(store.settlementSize, store.storeType);
    } catch (e) {
        console.error('Error generating restock inventory:', e);
        alert('Error generating new stock. Please try again.');
        return;
    }

    // Step 4: Filter out items already kept to avoid duplicates
    const keptNames = new Set(kept.map(i => i.name));
    const freshItems = newInventory.filter(i => !keptNames.has(i.name));

    // Step 5: Add display prices and descriptors to new items
    const maxModifier = store.maxModifier || 105;
    const pricedFreshItems = freshItems.map(item => {
        const { price } = applyPriceModifier(item.cost, maxModifier);
        const descriptor = getRandomDescriptor(item);
        return {
            ...item,
            displayPrice:    formatPrice(price),
            savedDescriptor: descriptor || null
        };
    });

    // Step 6: Merge kept items with fresh items
    store.inventory = [...kept, ...pricedFreshItems];

    console.log(`Restock complete. Total items: ${store.inventory.length}`);

    localStorage.setItem('dnd-saved-stores', JSON.stringify(savedStores));
    loadSavedStore(storeIndex);
    showSaveNotification(`Restocked! Kept ${kept.length} items, added ${pricedFreshItems.length} new items.`);
}
