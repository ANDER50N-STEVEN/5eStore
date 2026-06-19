// ===== SHOP.JS =====
// Shop generation, display, pricing, and inventory management

// ===== STATE =====
let mundaneCollapsed = false;

// ===== PRICE UTILITIES =====

function applyPriceModifier(baseCost, maxModifier) {
    const minModifier = maxModifier - 5;
    const randomModifier = Math.random() * (maxModifier - minModifier) + minModifier;
    const modifiedPrice = (baseCost * randomModifier) / 100;
    return {
        price: Math.round(modifiedPrice * 100) / 100,
        modifier: randomModifier.toFixed(1)
    };
}

function formatPrice(price) {
    if (price >= 1) {
        return `${Math.round(price)} gp`;
    } else if (price >= 0.1) {
        const silver = Math.round(price * 10);
        return `${silver} sp`;
    } else {
        const copper = Math.round(price * 100);
        return `${copper} cp`;
    }
}

function updatePriceModifierFromWealth() {
    const wealthLevel = document.getElementById('wealth-level').value;
    const sellModifier = wealthLevels[wealthLevel].sellModifier;
    const priceModifierInput = document.getElementById('price-modifier');
    priceModifierInput.value = Math.round(sellModifier * 100);
}

// ===== ITEM QUANTITY =====

function isHealingPotion(item) {
    const healingPotionNames = [
        'Potion of Healing',
        'Potion of Greater Healing',
        'Potion of Superior Healing',
        'Potion of Supreme Healing'
    ];
    return healingPotionNames.includes(item.name);
}

function getItemQuantity(item) {
    const consumables = {
        'Potion':     { min: 1, max: 4 },
        'Common':     { min: 1, max: 4 },
        'Ammunition': { min: 1, max: 3 },
        'Scroll':     { min: 1, max: 4 }
    };

    const tags = Array.isArray(item.type) ? item.type : [item.type];

    for (const tag of tags) {
        if (consumables[tag]) {
            const range = consumables[tag];
            return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        }
    }

    return 1;
}

// ===== SHOPKEEPER GENERATION =====

function generateShopkeeper(storeType, settlementSize, wealthLevel = 'common') {
    const race = shopkeeperData.races[Math.floor(Math.random() * shopkeeperData.races.length)];

    const names = shopkeeperData.namesByRace[race];
    const firstName = names.first[Math.floor(Math.random() * names.first.length)];
    const lastName = names.last[Math.floor(Math.random() * names.last.length)];
    const fullName = `${firstName} ${lastName}`;

    const quirks = shopkeeperData.quirks[storeType] || shopkeeperData.quirks.general;
    let quirk = quirks[Math.floor(Math.random() * quirks.length)];

    quirk = quirk.replace(/\{(\w+)\}/g, (match, key) => {
        const options = shopkeeperData.replacements[key];
        if (options) return options[Math.floor(Math.random() * options.length)];
        return match;
    });

    const descriptions = {
        hamlet:     ['runs this small shop alone', 'knows everyone in the hamlet', 'has been here for generations'],
        village:    ['is well-known in the village', 'takes pride in serving the community', 'has many regular customers'],
        town:       ['has built a solid reputation in town', 'trains a young apprentice', 'competes with a rival shop'],
        smallcity:  ['supplies the local garrison', 'has connections throughout the city', 'deals in bulk orders regularly'],
        city:       ['runs one of many shops in the city', 'has connections to merchant guilds', 'sees hundreds of customers weekly'],
        metropolis: ['operates in the busiest district', 'is part of a merchant consortium', 'deals with customers from across the realm']
    };

    const descOptions = descriptions[settlementSize] || descriptions.town;
    const description = descOptions[Math.floor(Math.random() * descOptions.length)];

    const wealthData = wealthLevels[wealthLevel];
    const goldAvailable = Math.floor(
        Math.random() * (wealthData.gold[1] - wealthData.gold[0] + 1)
    ) + wealthData.gold[0];

    return {
        race,
        name: fullName,
        description,
        quirk,
        wealthLevel,
        goldAvailable,
        sellModifier: wealthData.sellModifier
    };
}

// ===== INVENTORY FILTERING =====

function filterByStoreType(items, storeType) {
    const store = getStoreType(storeType);
    if (!store || store.isGeneral || !store.tags || store.tags.length === 0) {
        return items;
    }

    return items.filter(item => {
        const tags = Array.isArray(item.type) ? item.type : [item.type];
        if (storeType === 'curiosities') {
            return tags.some(t => store.tags.includes(t)) || Math.random() < 0.05;
        }
        return tags.some(t => store.tags.includes(t));
    });
}

// ===== INVENTORY SELECTION =====

function selectInventory(settlementSize, storeType) {
    const diceFormulas = {
        'mundane':   document.getElementById('max-mundane').value,
        'common':    document.getElementById('max-common').value,
        'uncommon':  document.getElementById('max-uncommon').value,
        'rare':      document.getElementById('max-rare').value,
        'veryrare':  document.getElementById('max-veryrare').value,
        'legendary': document.getElementById('max-legendary').value
    };

    for (const [rarity, formula] of Object.entries(diceFormulas)) {
        if (!validateDiceNotation(formula)) {
            throw new Error(`Invalid dice notation for ${rarity}: "${formula}"\n\nPlease use format like: 2d6+3, 1d8-2, 3d10, or 0`);
        }
    }

    const rarityTargets = {};
    for (const [rarity, formula] of Object.entries(diceFormulas)) {
        rarityTargets[rarity] = rollDice(formula);
    }

    console.log('Rolled item counts:', rarityTargets);

    const availableItems = filterByStoreType(itemDatabase, storeType);

    const itemsByRarity = {
        'mundane':   [],
        'common':    [],
        'uncommon':  [],
        'rare':      [],
        'veryrare':  [],
        'legendary': []
    };

    for (const item of availableItems) {
        const rarityKey = item.rarity.toLowerCase().replace(' ', '');
        if (itemsByRarity[rarityKey]) {
            itemsByRarity[rarityKey].push(item);
        }
    }

    for (const rarity in itemsByRarity) {
        itemsByRarity[rarity].sort(() => Math.random() - 0.5);
    }

    const inventory = [];

    for (const [rarity, target] of Object.entries(rarityTargets)) {
        if (target > 0 && itemsByRarity[rarity]) {
            const available = itemsByRarity[rarity];
            const numToAdd = Math.min(target, available.length);
            for (let i = 0; i < numToAdd; i++) {
                inventory.push(available[i]);
            }
        }
    }

    // Healing potion guarantee — roll 1d6, on 5+ guarantee at least one
    const healingPotions = inventory.filter(item => isHealingPotion(item));
    if (healingPotions.length === 0 && Math.floor(Math.random() * 6) + 1 >= 5) {
        const availableHealingPotions = availableItems.filter(item => isHealingPotion(item));
        if (availableHealingPotions.length > 0) {
            const guaranteedHealing = availableHealingPotions[
                Math.floor(Math.random() * availableHealingPotions.length)
            ];
            inventory.push({ ...guaranteedHealing, isGuaranteed: true });
        }
    }

    // Common item guarantee — 5% chance per eligible item, up to a quarter of inventory
    const maxCommonGuarantees = Math.floor(inventory.length / 4);
    let commonGuaranteeCount = 0;

    const availableCommonItems = availableItems.filter(item => {
        const tags = Array.isArray(item.type) ? item.type : [item.type];
        return tags.includes('Common');
    });

    const shuffledCommon = [...availableCommonItems].sort(() => Math.random() - 0.5);

    for (const item of shuffledCommon) {
        if (commonGuaranteeCount >= maxCommonGuarantees) break;

        if (Math.random() < 0.05) {
            const existingIdx = inventory.findIndex(i => i.name === item.name);

            if (existingIdx !== -1) {
                inventory[existingIdx].guaranteedQuantity =
                    (inventory[existingIdx].guaranteedQuantity || 1) + 1;
                commonGuaranteeCount++;
            } else {
                const quantity = Math.floor(Math.random() * 3) + 1;
                const guaranteedItem = {
                    ...item,
                    isGuaranteed: true,
                    guaranteedQuantity: Math.min(quantity, maxCommonGuarantees - commonGuaranteeCount)
                };
                inventory.push(guaranteedItem);
                commonGuaranteeCount += guaranteedItem.guaranteedQuantity;
            }
        }
    }

    return inventory;
}

// ===== GROUPING =====

function groupByType(inventory) {
    const grouped = {};
    for (const item of inventory) {
        const primaryType = Array.isArray(item.type)
            ? (item.type[0] || 'Misc')
            : (item.type || 'Misc');

        if (!grouped[primaryType]) {
            grouped[primaryType] = [];
        }
        grouped[primaryType].push(item);
    }
    return grouped;
}

// ===== ITEM HTML GENERATION =====

function generateItemHTML(item, maxModifier) {
    const quantity = item.guaranteedQuantity || getItemQuantity(item);
    const { price, modifier } = applyPriceModifier(item.cost, maxModifier);
    const formattedPrice = formatPrice(price);
    const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
    const luckyFindStar = item.isLuckyFind ? ' ⭐' : '';
    const quantityDisplay = quantity > 1 ? ` (×${quantity})` : '';

    const isHomebrew = homebrewItemDatabase.some(hbItem => hbItem.name === item.name);
    const homebrewBadge = isHomebrew
        ? ' <span class="homebrew-badge">🔮 Homebrew</span>'
        : '';

    const descriptor = getRandomDescriptor(item);
    const descriptorHTML = descriptor
        ? `<div class="item-descriptor" style="font-style: italic; color: #a89968; margin-top: 5px; font-size: 0.9em;">${descriptor}</div>`
        : '';

    const fullDescriptionHTML = item.fullDescription
        ? `<div class="item-full-description">${item.fullDescription}</div>`
        : '';

    const itemId = `shop-item-${item.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}-${Math.floor(Math.random() * 99999)}`;

    return `
        <div class="item" id="${itemId}">
            <div class="item-header">
                <div>
                    <span class="item-name">${item.name}${quantityDisplay}${luckyFindStar}${homebrewBadge}</span>
                    <span class="item-rarity ${rarityClass}">(${item.rarity})</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="item-price">${formattedPrice}</span>
                    <span class="price-modifier-display">(${modifier}%)</span>
                    <button class="item-action-btn sold-btn"
                        onclick="soldItem('${itemId}')"
                        title="Mark as sold and remove">🪙 Sold</button>
                    <button class="item-action-btn print-btn"
                        onclick="printItem('${itemId}', '${item.name.replace(/'/g, "\\'")}', '${item.rarity}')"
                        title="Print item card">🖨️ Print</button>
                </div>
            </div>
            <div class="item-description">${item.description || 'No description available.'}</div>
            ${descriptorHTML}
            ${fullDescriptionHTML}
        </div>
    `;
}

// ===== SHOP GENERATION =====

function generateShop() {
    const storeType = document.getElementById('store-type').value;
    const settlementSize = document.getElementById('settlement-size').value;
    const maxModifier = parseFloat(document.getElementById('price-modifier').value) + 5;
    const minModifier = parseFloat(document.getElementById('price-modifier').value) - 5;

    // Reset mundane collapsed state on new generation
    mundaneCollapsed = false;
    const btn = document.getElementById('toggle-mundane-btn');
    if (btn) btn.textContent = '🪨 Hide Mundane';

    // Apply store type default limits if custom limits not enabled
    const useCustom = document.getElementById('use-custom-limits').checked;
    if (!useCustom) {
        const store = getStoreType(storeType);
        if (store && store.limits) {
            document.getElementById('max-mundane').value   = store.limits.mundane;
            document.getElementById('max-common').value    = store.limits.common;
            document.getElementById('max-uncommon').value  = store.limits.uncommon;
            document.getElementById('max-rare').value      = store.limits.rare;
            document.getElementById('max-veryrare').value  = store.limits.veryrare;
            document.getElementById('max-legendary').value = store.limits.legendary;
        }
    }

    try {
        const inventory = selectInventory(settlementSize, storeType);

        if (inventory.length === 0) {
            document.getElementById('shop-content').innerHTML = `
                <div class="empty-state">
                    <p>The merchant has nothing in stock today. Try a larger settlement or regenerate!</p>
                </div>
            `;
            return;
        }

        const grouped = groupByType(inventory);
        const allTypes = getAllStoreTypes();
        const storeName = allTypes[storeType]?.name || storeType;

        const wealthLevel = document.getElementById('wealth-level').value;
        const shopkeeper = generateShopkeeper(storeType, settlementSize, wealthLevel);

        let html = `
            <div class="shop-info">
                <h2>${storeName} - ${settlementSize.charAt(0).toUpperCase() + settlementSize.slice(1)}</h2>
                <div style="margin-top: 15px; padding: 15px; background: rgba(139, 111, 71, 0.15); border-radius: 5px; border-left: 3px solid #d4af37;">
                    <p style="margin-bottom: 8px;"><strong style="color: #d4af37;">Proprietor:</strong> ${shopkeeper.name}, ${shopkeeper.race}</p>
                    <p style="margin-bottom: 8px;"><strong style="color: #d4af37;">Available Gold:</strong> ${shopkeeper.goldAvailable} gp</p>
                    <p style="margin-bottom: 8px; font-style: italic; color: #c4b591;">${shopkeeper.name} ${shopkeeper.description}.</p>
                    <p style="color: #a89968; font-size: 0.9em;"><em>Quirk:</em> ${shopkeeper.quirk}</p>
                </div>
                <p style="margin-top: 15px;">
                    <strong>Total Items:</strong> ${inventory.length} |
                    <strong>Price Variance:</strong> ${minModifier}% - ${maxModifier}%
                </p>
            </div>
            <div class="inventory">
        `;

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
                    html += generateItemHTML(item, maxModifier);
                }

                html += `</div></div>`;
            }

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
                    html += generateItemHTML(item, maxModifier);
                }

                html += `</div></div>`;
            }

            html += `</div></div>`;
        }

        html += '</div>';
        document.getElementById('shop-content').innerHTML = html;

    } catch (error) {
        alert(error.message);
        console.error('Error generating shop:', error);
    }
}

// ===== CATEGORY TOGGLING =====

function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    if (category) category.classList.toggle('collapsed');
}

function toggleMundaneItems() {
    mundaneCollapsed = !mundaneCollapsed;

    const mundaneSubcategories = document.querySelectorAll('[id$="-mundane"]');
    mundaneSubcategories.forEach(section => {
        if (mundaneCollapsed) {
            section.classList.add('collapsed');
        } else {
            section.classList.remove('collapsed');
        }
    });

    const btn = document.getElementById('toggle-mundane-btn');
    if (btn) {
        btn.textContent = mundaneCollapsed ? '🪨 Show Mundane' : '🪨 Hide Mundane';
    }
}

// ===== SOLD ITEM =====

function soldItem(itemId) {
    const el = document.getElementById(itemId);
    if (!el) return;

    const nameEl = el.querySelector('.item-name');
    if (!nameEl) return;

    const nameClone = nameEl.cloneNode(true);
    const badge = nameClone.querySelector('.homebrew-badge');
    if (badge) badge.remove();

    let fullText = nameClone.textContent.trim();

    const quantityMatch = fullText.match(/\(×(\d+)\)/);
    let currentQuantity = quantityMatch ? parseInt(quantityMatch[1]) : 1;

    let itemName = fullText
        .replace(/\s*\(×\d+\)\s*/g, '')
        .replace(/\s*⭐\s*/g, '')
        .trim();

    if (currentQuantity > 1) {
        const newQuantity = currentQuantity - 1;
        const newQuantityText = newQuantity > 1 ? ` (×${newQuantity})` : '';

        nameEl.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = itemName + newQuantityText;
            }
        });

        el.style.transition = 'background 0.2s ease';
        el.style.background = 'rgba(46, 204, 113, 0.15)';
        setTimeout(() => { el.style.background = ''; }, 300);
    } else {
        el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        el.style.opacity = '0';
        el.style.transform = 'translateX(-20px)';
        setTimeout(() => el.remove(), 300);
    }
}

// ===== REAPPLY PRICE MODIFIER =====

function reapplyPriceModifier() {
    const shopContent = document.getElementById('shop-content');
    if (!shopContent) {
        showSaveNotification('Generate a shop first!');
        return;
    }

    const generatorTab = document.getElementById('generator-tab');
    if (!generatorTab.classList.contains('active')) {
        showSaveNotification('Switch to the Shop Generator tab first!');
        return;
    }

    const itemEls = shopContent.querySelectorAll('.item');
    if (itemEls.length === 0) {
        showSaveNotification('Generate a shop first!');
        return;
    }

    const maxModifier = parseFloat(document.getElementById('price-modifier').value) + 5;
    let updatedCount = 0;

    itemEls.forEach(itemEl => {
        const nameEl = itemEl.querySelector('.item-name');
        const priceEl = itemEl.querySelector('.item-price');
        const modifierEl = itemEl.querySelector('.price-modifier-display');

        if (!nameEl || !priceEl) return;

        const nameClone = nameEl.cloneNode(true);
        Array.from(nameClone.children).forEach(child => child.remove());

        let itemName = nameClone.textContent.trim()
            .replace(/\s*\(×\d+\)\s*/g, '')
            .replace(/\s*⭐\s*/g, '')
            .trim();

        const dbItem = itemDatabase.find(i => i.name === itemName)
                    || officialItemDatabase.find(i => i.name === itemName)
                    || homebrewItemDatabase.find(i => i.name === itemName);

        if (!dbItem) {
            console.log('Item not found in database:', itemName);
            return;
        }

        const { price, modifier } = applyPriceModifier(dbItem.cost, maxModifier);
        const formattedPrice = formatPrice(price);

        priceEl.textContent = formattedPrice;
        if (modifierEl) modifierEl.textContent = '(' + modifier + '%)';

        updatedCount++;
    });

    showSaveNotification('Updated ' + updatedCount + ' item prices!');
}

// ===== PRINT ITEM =====

function printItem(itemId, itemName, itemRarity) {
    const el = document.getElementById(itemId);
    if (!el) return;

    const description = el.querySelector('.item-description')?.textContent?.trim()
                     || el.querySelector('.loot-item-description')?.textContent?.trim()
                     || '';
    const descriptor = el.querySelector('.item-descriptor')?.textContent?.trim() || '';
    const fullDescription = el.querySelector('.item-full-description')?.textContent?.trim() || '';

    const printWindow = window.open('', '_blank', 'width=500,height=400');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${itemName}</title>
            <style>
                body {
                    font-family: Georgia, serif;
                    padding: 40px;
                    max-width: 500px;
                    margin: 0 auto;
                    color: #1a0f08;
                }
                h2 {
                    font-size: 1.5em;
                    margin-bottom: 4px;
                    border-bottom: 2px solid #8b6f47;
                    padding-bottom: 6px;
                }
                .rarity {
                    font-size: 0.9em;
                    color: #6b5437;
                    font-style: italic;
                    margin-bottom: 16px;
                }
                .description {
                    font-size: 1em;
                    line-height: 1.6;
                    margin-bottom: 12px;
                }
                .descriptor {
                    font-style: italic;
                    color: #5a4a30;
                    font-size: 0.95em;
                    border-left: 3px solid #8b6f47;
                    padding-left: 10px;
                    margin-top: 10px;
                }
                @media print {
                    body { padding: 20px; }
                }
            </style>
        </head>
        <body>
            <h2>${itemName}</h2>
            <div class="rarity">${itemRarity}</div>
            ${fullDescription
                ? `<div class="description" style="white-space: pre-wrap;">${fullDescription}</div>`
                : `<div class="description">${description}</div>`
            }
            ${descriptor ? `<div class="descriptor">${descriptor}</div>` : ''}
            <script>window.onload = () => { window.print(); }<\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}
