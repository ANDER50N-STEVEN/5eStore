// ===== MANUALADD.JS =====
// Manually add any item to the shop that's on screen.
// Works for a freshly generated shop and for a loaded saved store
// (saved stores are updated in localStorage right away).

function getShopItemPool() {
    // Every item, including ones excluded from random generation
    return [
        ...officialItemDatabase.map(i => ({ item: i, source: 'Official' })),
        ...homebrewItemDatabase.map(i => ({ item: i, source: 'Homebrew' }))
    ];
}

// ===== PICKER MODAL =====

function openAddItemToStore() {
    if (!document.querySelector('#shop-content .inventory')) {
        showSaveNotification('Generate or load a shop first!');
        return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'add-item-overlay';
    overlay.innerHTML = `
        <div class="modal-box" style="max-width: 800px; max-height: 90vh; display: flex; flex-direction: column;">
            <h3 style="color: #d4af37; margin-bottom: 15px;">➕ Add Item to Store</h3>
            <div class="search-filter-bar" style="margin-bottom: 10px;">
                <input type="text" id="add-item-search" placeholder="Search by name, tag or description..." style="flex: 1; min-width: 200px;">
                <select id="add-item-rarity">
                    <option value="">All Rarities</option>
                    ${RARITY_OPTIONS.map(r => `<option>${r}</option>`).join('')}
                </select>
                <select id="add-item-source">
                    <option value="">Official + Homebrew</option>
                    <option>Official</option>
                    <option>Homebrew</option>
                </select>
            </div>
            <div style="display: flex; gap: 15px; align-items: center; margin-bottom: 10px; flex-wrap: wrap; color: #c4b591; font-size: 0.9em;">
                <label style="text-transform: none; letter-spacing: normal;">Quantity
                    <input type="number" id="add-item-qty" value="1" min="1" max="99" style="width: 70px; margin-left: 6px;">
                </label>
                <label style="text-transform: none; letter-spacing: normal;">Price override (gp, optional)
                    <input type="number" id="add-item-price" min="0" step="0.01" placeholder="auto" style="width: 110px; margin-left: 6px;">
                </label>
            </div>
            <div id="add-item-results" style="overflow-y: auto; flex: 1; min-height: 200px;"></div>
            <div style="display: flex; justify-content: flex-end; margin-top: 15px;">
                <button class="cancel-btn" onclick="closeAddItemToStore()">Done</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeAddItemToStore(); });

    ['add-item-search', 'add-item-rarity', 'add-item-source'].forEach(id => {
        document.getElementById(id).addEventListener('input', renderAddItemResults);
    });
    renderAddItemResults();
    document.getElementById('add-item-search').focus();
}

function closeAddItemToStore() {
    document.getElementById('add-item-overlay')?.remove();
}

function renderAddItemResults() {
    const term = document.getElementById('add-item-search').value.trim().toLowerCase();
    const rarity = document.getElementById('add-item-rarity').value;
    const source = document.getElementById('add-item-source').value;

    const matches = getShopItemPool().filter(({ item, source: src }) => {
        if (rarity && item.rarity !== rarity) return false;
        if (source && src !== source) return false;
        if (!term) return true;
        const tags = Array.isArray(item.type) ? item.type.join(' ') : (item.type || '');
        return item.name.toLowerCase().includes(term)
            || tags.toLowerCase().includes(term)
            || (item.description || '').toLowerCase().includes(term);
    });

    const shown = matches.slice(0, 60);
    const container = document.getElementById('add-item-results');
    if (shown.length === 0) {
        container.innerHTML = '<p class="empty-state" style="padding: 30px;">No matching items.</p>';
        return;
    }

    window._addItemMatches = shown; // referenced by index from the buttons below
    container.innerHTML = shown.map(({ item, source: src }, n) => {
        const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
        return `
            <div class="item" style="margin-bottom: 8px;">
                <div class="item-header">
                    <div>
                        <span class="item-name">${item.name}</span>
                        ${src === 'Homebrew' ? '<span class="homebrew-badge">🔮 Homebrew</span>' : ''}
                        <span class="item-rarity ${rarityClass}">(${item.rarity})</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span class="item-price">${formatPrice(item.cost)}</span>
                        <button class="item-action-btn print-btn" onclick="addItemToStore(${n})">➕ Add</button>
                    </div>
                </div>
                <div class="item-description">${item.description || ''}</div>
            </div>`;
    }).join('') + (matches.length > shown.length
        ? `<p style="color: #8b6f47; text-align: center; padding: 10px;">Showing 60 of ${matches.length} — narrow your search to see more.</p>`
        : '');
}

// ===== ADD =====

function addItemToStore(matchIndex) {
    const { item } = window._addItemMatches[matchIndex];
    const qty = Math.max(1, parseInt(document.getElementById('add-item-qty').value) || 1);
    const priceInput = document.getElementById('add-item-price').value;
    const overridePrice = priceInput === '' ? null : parseFloat(priceInput);

    if (currentLoadedStoreIndex !== null) {
        addItemToSavedStore(item, qty, overridePrice);
    } else {
        addItemToLiveShop(item, qty, overridePrice);
    }
    showSaveNotification(`Added ${qty > 1 ? qty + '× ' : ''}${item.name}`);
}

function addItemToLiveShop(item, qty, overridePrice) {
    const maxModifier = parseFloat(document.getElementById('price-modifier').value) + 5;
    const copy = { ...item, guaranteedQuantity: qty };

    const wrapper = document.createElement('div');
    wrapper.innerHTML = generateItemHTML(copy, maxModifier).trim();
    const itemEl = wrapper.firstElementChild;

    if (overridePrice !== null && !isNaN(overridePrice)) {
        itemEl.querySelector('.item-price').textContent = formatPrice(overridePrice);
        const mod = itemEl.querySelector('.price-modifier-display');
        if (mod) mod.textContent = '(set)';
    }

    getOrCreateSubcategory(item).appendChild(itemEl);
    updateTotalItemCount();
}

function addItemToSavedStore(item, qty, overridePrice) {
    const savedStores = JSON.parse(localStorage.getItem('dnd-saved-stores') || '[]');
    const store = savedStores[currentLoadedStoreIndex];
    if (!store) return;

    const maxModifier = store.maxModifier || 105;
    for (let i = 0; i < qty; i++) {
        const price = overridePrice !== null && !isNaN(overridePrice)
            ? overridePrice
            : applyPriceModifier(item.cost, maxModifier).price;
        store.inventory.push({
            ...item,
            displayPrice: formatPrice(price),
            savedDescriptor: getRandomDescriptor(item) || null
        });
    }

    localStorage.setItem('dnd-saved-stores', JSON.stringify(savedStores));
    loadSavedStore(currentLoadedStoreIndex);
}

// ===== DOM HELPERS =====

function getOrCreateSubcategory(item) {
    const inventory = document.querySelector('#shop-content .inventory');
    const type = Array.isArray(item.type) ? (item.type[0] || 'Misc') : (item.type || 'Misc');
    const categoryId = `category-${type.replace(/\s+/g, '-')}`;
    const isMundane = item.rarity === 'Mundane';
    const subId = `${categoryId}-${isMundane ? 'mundane' : 'magic'}`;

    let category = document.getElementById(categoryId);
    if (!category) {
        category = document.createElement('div');
        category.className = 'category';
        category.id = categoryId;
        category.innerHTML = `
            <div class="category-header" onclick="toggleCategory('${categoryId}')">
                <h3>📦 ${type}</h3>
                <span class="category-count"><span class="count-num">0</span> items <span class="collapse-icon">▼</span></span>
            </div>
            <div class="items"></div>`;
        inventory.appendChild(category);
    }

    let sub = document.getElementById(subId);
    if (!sub) {
        sub = document.createElement('div');
        sub.className = 'subcategory';
        sub.id = subId;
        sub.innerHTML = `
            <div class="subcategory-header" onclick="toggleCategory('${subId}')">
                <h4>${isMundane ? '⚒️ Mundane Items' : '✨ Magic Items'}</h4>
                <span class="subcategory-count"></span>
            </div>
            <div class="subcategory-items"></div>`;
        const items = category.querySelector('.items');
        isMundane ? items.prepend(sub) : items.appendChild(sub);
    }

    // Refresh the visible counts
    setTimeout(() => {
        const subCount = sub.querySelectorAll('.item').length;
        sub.querySelector('.subcategory-count').innerHTML = `${subCount} items <span class="collapse-icon">▼</span>`;
        const catCount = category.querySelectorAll('.item').length;
        category.querySelector('.category-count').innerHTML = `${catCount} items <span class="collapse-icon">▼</span>`;
    }, 0);

    return sub.querySelector('.subcategory-items');
}

function updateTotalItemCount() {
    const strongs = document.querySelectorAll('#shop-content .shop-info strong');
    strongs.forEach(s => {
        if (s.textContent.startsWith('Total Items') && s.nextSibling) {
            const count = document.querySelectorAll('#shop-content .inventory .item').length;
            s.nextSibling.textContent = ` ${count} | `;
        }
    });
}
