// ===== LOOT.JS =====
// Loot generation, display, and combat encounter management

// ===== DIFFICULTY CALCULATIONS =====

function getEncounterDifficulty(partyLevel, partySize, roster) {
    const level = Math.min(Math.max(partyLevel, 1), 20);
    const thresholds = encounterXPThresholds[level];

    const partyThresholds = {
        easy:   thresholds.easy   * partySize,
        medium: thresholds.medium * partySize,
        hard:   thresholds.hard   * partySize,
        deadly: thresholds.deadly * partySize
    };

    let rawXP = 0;
    let totalCreatures = 0;

    roster.forEach(row => {
        const crXP = crXPValues[row.cr] || crXPValues[Math.floor(row.cr)] || 10;
        rawXP += crXP * row.count;
        totalCreatures += row.count;
    });

    // DMG creature count multiplier
    let countMultiplier = 1;
    if (totalCreatures === 2)       countMultiplier = 1.5;
    else if (totalCreatures <= 6)   countMultiplier = 2;
    else if (totalCreatures <= 10)  countMultiplier = 2.5;
    else if (totalCreatures <= 14)  countMultiplier = 3;
    else                            countMultiplier = 4;

    const adjustedXP = rawXP * countMultiplier;

    let difficulty = 'easy';
    if (adjustedXP >= partyThresholds.deadly)      difficulty = 'deadly';
    else if (adjustedXP >= partyThresholds.hard)   difficulty = 'hard';
    else if (adjustedXP >= partyThresholds.medium) difficulty = 'medium';

    return {
        difficulty,
        adjustedXP,
        rawXP,
        totalCreatures,
        partyThresholds
    };
}

function getLootMultiplierFromDifficulty(difficulty) {
    switch (difficulty) {
        case 'easy':   return 0.75;
        case 'medium': return 1.0;
        case 'hard':   return 1.5;
        case 'deadly': return 2.0;
        default:       return 1.0;
    }
}

function getGoldModifier(radioName) {
    const selected = document.querySelector(`input[name="${radioName}"]:checked`);
    const value = selected ? selected.value : 'medium';

    switch (value) {
        case 'low':    return 2;
        case 'medium': return 6;
        case 'high':   return 12;
        default:       return 6;
    }
}

// ===== CURRENCY GENERATION =====

function generateCurrency(crTier, multiplier = 1, sizeMultiplier = 1) {
    const crValue = crTier === '17+'   ? 20
                  : crTier === '11-16' ? 13
                  : crTier === '5-10'  ? 7
                  : 2;

    const t = Math.min(crValue / 30, 1);

    const minGP = Math.floor(2 * Math.pow(100, t));
    const maxGP = Math.floor(5 * Math.pow(400, t));

    const currency = {};
    const goldAmount = Math.floor(
        (Math.random() * (maxGP - minGP) + minGP) * multiplier * sizeMultiplier
    );

    if (goldAmount > 0) {
        if (crValue <= 2) {
            const cp = Math.floor(goldAmount * 0.3 * 100);
            const sp = Math.floor(goldAmount * 0.4 * 10);
            const gp = Math.floor(goldAmount * 0.3);
            if (cp > 0) currency.cp = cp;
            if (sp > 0) currency.sp = sp;
            if (gp > 0) currency.gp = gp;
        } else if (crValue <= 5) {
            const sp = Math.floor(goldAmount * 0.3 * 10);
            const gp = Math.floor(goldAmount * 0.7);
            if (sp > 0) currency.sp = sp;
            if (gp > 0) currency.gp = gp;
        } else if (crValue <= 10) {
            const gp = Math.floor(goldAmount * 0.85);
            const pp = Math.floor(goldAmount * 0.015);
            if (gp > 0) currency.gp = gp;
            if (pp > 0) currency.pp = pp;
        } else if (crValue <= 16) {
            const gp = Math.floor(goldAmount * 0.7);
            const pp = Math.floor(goldAmount * 0.03);
            if (gp > 0) currency.gp = gp;
            if (pp > 0) currency.pp = pp;
        } else {
            const gp = Math.floor(goldAmount * 0.5);
            const pp = Math.floor(goldAmount * 0.05);
            if (gp > 0) currency.gp = gp;
            if (pp > 0) currency.pp = pp;
        }
    }

    return currency;
}

// ===== GEMS =====

function generateGems(crTier, sizeMultiplier) {
    const gems = [];
    const numGems = Math.floor((Math.random() * 5 + 2) * sizeMultiplier);

    const valueOptions = ['10gp', '50gp', '100gp', '500gp', '1000gp', '5000gp'];
    const crIndex = ['0-4', '5-10', '11-16', '17+'].indexOf(crTier);
    const maxValueIndex = Math.min(crIndex + 2, valueOptions.length - 1);

    for (let i = 0; i < numGems; i++) {
        const valueType = valueOptions[Math.floor(Math.random() * (maxValueIndex + 1))];
        const gemList = lootTables.gems[valueType];
        const gemName = gemList[Math.floor(Math.random() * gemList.length)];
        gems.push({ name: gemName, value: valueType });
    }

    return gems;
}

// ===== ART OBJECTS =====

function generateArtObjects(crTier, sizeMultiplier) {
    const artObjects = [];
    const numObjects = Math.floor((Math.random() * 3 + 1) * sizeMultiplier);

    const valueOptions = ['25gp', '250gp', '750gp', '2500gp', '7500gp'];
    const crIndex = ['0-4', '5-10', '11-16', '17+'].indexOf(crTier);
    const maxValueIndex = Math.min(crIndex + 1, valueOptions.length - 1);

    for (let i = 0; i < numObjects; i++) {
        const valueType = valueOptions[Math.floor(Math.random() * (maxValueIndex + 1))];
        const objList = lootTables.artObjects[valueType];
        const objName = objList[Math.floor(Math.random() * objList.length)];
        artObjects.push({ name: objName, value: valueType });
    }

    return artObjects;
}

// ===== MAGIC ITEMS =====

function generateMagicItems(crTier, sizeMultiplier, includeHomebrew = false, creatureType = null) {
    const items = [];
    const crIndex = ['0-4', '5-10', '11-16', '17+'].indexOf(crTier);
    const numItems = Math.max(0, Math.round((crIndex + 1) * sizeMultiplier));

    const rarities = [
        ['Common', 'Uncommon'],
        ['Uncommon', 'Rare'],
        ['Rare', 'Very Rare'],
        ['Very Rare', 'Legendary']
    ];

    const allowedRarities = rarities[crIndex];

    let itemPool = [...officialItemDatabase];
    if (includeHomebrew) {
        itemPool = [...itemPool, ...homebrewItemDatabase];
    }

    const allowedTags = creatureType ? getCreatureTypeTags(creatureType) : null;

    let availableItems = itemPool.filter(item => {
        if (!allowedRarities.includes(item.rarity) || item.rarity === 'Mundane') return false;
        if (!allowedTags) return true;
        const itemTags = Array.isArray(item.type) ? item.type : [item.type];
        return itemTags.some(t => allowedTags.includes(t));
    });

    // Fall back to unrestricted pool if tag filter yields nothing
    if (availableItems.length === 0) {
        console.warn(`No magic items found for creature type ${creatureType}, falling back to unrestricted pool`);
        availableItems = itemPool.filter(item =>
            allowedRarities.includes(item.rarity) && item.rarity !== 'Mundane'
        );
    }

    const shuffled = [...availableItems].sort(() => Math.random() - 0.5);

    for (let i = 0; i < numItems && i < shuffled.length; i++) {
        items.push(shuffled[i]);
    }

    return items;
}

// ===== THEMED TREASURE =====

function generateThemedTreasure(theme, sizeMultiplier) {
    const themedItems = {
        dragon:   ['Ancient dragon scale', 'Hoarded gold statue', 'Gem-encrusted skull'],
        undead:   ['Cursed burial shroud', 'Ancient burial urn', 'Necromantic tome fragment'],
        fey:      ['Pixie dust vial', 'Enchanted flower crown', 'Fey-touched mirror'],
        elemental:['Elemental core shard', 'Prismatic crystal', 'Bottled storm'],
        planar:   ['Planar tuning fork', 'Astral compass', 'Void-touched amulet'],
        pirate:   ['Treasure map fragment', 'Barnacle-covered chest', 'Captain\'s spyglass'],
        noble:    ['Family seal ring', 'Ornate portrait', 'Deed to property'],
        ancient:  ['Crumbling scroll', 'Worn statue fragment', 'Ancient coins'],
        generic:  ['Mysterious trinket', 'Ornate key', 'Faded letter']
    };

    const items = themedItems[theme] || themedItems.generic;
    const numItems = Math.floor((Math.random() * 3 + 1) * sizeMultiplier);
    const selected = [];

    for (let i = 0; i < numItems; i++) {
        selected.push(items[Math.floor(Math.random() * items.length)]);
    }

    return selected;
}

// ===== BOSS LOOT =====

function generateBossLoot(cr, includeHomebrew = false) {
    const items = [];
    const numItems = Math.max(1, Math.floor(cr / 5));

    const rarities = cr < 5  ? ['Uncommon']
                  : cr < 11  ? ['Uncommon', 'Rare']
                  : cr < 17  ? ['Rare', 'Very Rare']
                  : ['Very Rare', 'Legendary'];

    let itemPool = [...officialItemDatabase];
    if (includeHomebrew) {
        itemPool = [...itemPool, ...homebrewItemDatabase];
    }

    const availableItems = itemPool.filter(item => rarities.includes(item.rarity));

    for (let i = 0; i < numItems && availableItems.length > 0; i++) {
        const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
        items.push({ ...randomItem, isBossLoot: true });
    }

    return items;
}

// ===== COMBAT LOOT GENERATION =====

function generateCombatLoot() {
    const partyLevel     = parseInt(document.getElementById('party-level').value);
    const partySize      = parseInt(document.getElementById('party-size').value);
    const includeBoss    = document.getElementById('boss-loot').checked;
    const includeMagic   = document.getElementById('combat-include-magic').checked;
    const includeHomebrew = document.getElementById('combat-include-homebrew').checked;

    const roster = getCreatureRoster();
    if (roster.length === 0) {
        alert('Please add at least one creature type.');
        return;
    }

    const totalCreatures = roster.reduce((sum, r) => sum + r.count, 0);

    const highestCR = Math.max(...roster.map(r => r.cr));
    let crTier = '0-4';
    if (highestCR >= 17)      crTier = '17+';
    else if (highestCR >= 11) crTier = '11-16';
    else if (highestCR >= 5)  crTier = '5-10';

    const { difficulty, adjustedXP, rawXP, partyThresholds } =
        getEncounterDifficulty(partyLevel, partySize, roster);

    const lootMultiplier  = getLootMultiplierFromDifficulty(difficulty);
    const creatureScale   = Math.sqrt(totalCreatures);
    const goldModifier    = getGoldModifier('loot-gold-modifier');

    const loot = {
        currency:       generateCurrency(crTier, totalCreatures, 0.3 * lootMultiplier * creatureScale * goldModifier),
        items:          [],
        magicItems:     [],
        specialDrops:   [],
        difficulty:     difficulty,
        adjustedXP:     adjustedXP,
        rawXP:          rawXP,
        partySize:      partySize,
        partyThresholds: partyThresholds
    };

    // Process each creature row independently
    roster.forEach(row => {
        const rowScale  = Math.sqrt(row.count);
        const rowWeight = row.count / totalCreatures;

        // Special drops per creature type
        const themes = lootTables.creatureThemes[row.type] || [];
        if (themes.length > 0) {
            const numRolls = Math.floor(Math.sqrt(row.count));
            const alreadyDropped = new Set();

            for (let i = 0; i < numRolls; i++) {
                if (Math.random() < 0.25) {
                    const available = themes.filter((_, idx) => !alreadyDropped.has(idx));
                    if (available.length > 0) {
                        const idx = Math.floor(Math.random() * available.length);
                        const originalIdx = themes.indexOf(available[idx]);
                        alreadyDropped.add(originalIdx);
                        loot.specialDrops.push({
                            ...available[idx],
                            sourceType: row.type
                        });
                    }
                }
            }
        }

        // Humanoid equipment per row
        if (row.type === 'humanoid') {
            const weaponVariety = Math.max(1, Math.floor(Math.sqrt(row.count)) + 1);
            const armorVariety  = Math.max(1, Math.floor(Math.sqrt(row.count)) + 1);

            const allWeapons = officialItemDatabase.filter(item => {
                if (!item || !item.name) return false;
                const tags = Array.isArray(item.type) ? item.type : [item.type];
                return tags.some(t => ['Weapon', 'Sword', 'Axe', 'Hammer/Mace', 'Polearm', 'Dagger'].includes(t))
                    && item.rarity === 'Mundane';
            });

            const allArmor = officialItemDatabase.filter(item => {
                if (!item || !item.name) return false;
                const tags = Array.isArray(item.type) ? item.type : [item.type];
                return tags.some(t => t === 'Armor') && item.rarity === 'Mundane';
            });

            const weaponPool = [...allWeapons]
                .sort(() => Math.random() - 0.5)
                .slice(0, weaponVariety)
                .filter(w => w && w.name);

            const armorPool = [...allArmor]
                .sort(() => Math.random() - 0.5)
                .slice(0, armorVariety)
                .filter(a => a && a.name);

            if (weaponPool.length > 0) {
                const numWeapons = Math.floor(row.count * 0.6);
                for (let i = 0; i < numWeapons; i++) {
                    const weapon = weaponPool[Math.floor(Math.random() * weaponPool.length)];
                    if (weapon && weapon.name) loot.items.push({ ...weapon });
                }
            }

            if (armorPool.length > 0) {
                const numArmor = Math.floor(row.count * 0.4);
                for (let i = 0; i < numArmor; i++) {
                    const armor = armorPool[Math.floor(Math.random() * armorPool.length)];
                    if (armor && armor.name) loot.items.push({ ...armor });
                }
            }
        }

        // Magic items per creature type, weighted by proportion
        if (includeMagic) {
            const magicScale = ((0.5 * lootMultiplier * rowScale) / 2) * rowWeight;
            const rowCRTier  = row.cr >= 17 ? '17+'
                             : row.cr >= 11 ? '11-16'
                             : row.cr >= 5  ? '5-10'
                             : '0-4';
            loot.magicItems.push(
                ...generateMagicItems(rowCRTier, magicScale, includeHomebrew, row.type)
            );
        }

        // Boss loot from highest CR row only
        if (includeBoss && row.cr === highestCR) {
            loot.magicItems.push(...generateBossLoot(row.cr, includeHomebrew));
        }
    });

    displayLoot(loot, 'Combat Loot');
}

// ===== TREASURE HOARD GENERATION =====

function generateTreasureHoard() {
    const crTier      = document.getElementById('hoard-cr-tier').value;
    const hoardSize   = document.getElementById('hoard-size').value;
    const theme       = document.getElementById('hoard-theme').value;
    const goldModifier = getGoldModifier('hoard-gold-modifier');

    const sizeMultiplier = {
        'small':     0.5,
        'medium':    1,
        'large':     2,
        'legendary': 4
    };

    const loot = {
        currency:    generateCurrency(crTier, 1, sizeMultiplier[hoardSize] * goldModifier),
        gems:        generateGems(crTier, sizeMultiplier[hoardSize]),
        artObjects:  generateArtObjects(crTier, sizeMultiplier[hoardSize]),
        magicItems:  generateMagicItems(crTier, sizeMultiplier[hoardSize]),
        themeItems:  generateThemedTreasure(theme, sizeMultiplier[hoardSize])
    };

    displayLoot(loot, `${theme.charAt(0).toUpperCase() + theme.slice(1)} Treasure Hoard`);
}

// ===== LOOT DISPLAY =====

function displayLoot(loot, title) {
    let html = `
        <div class="loot-summary">
            <h2>${title}</h2>
    `;

    // Calculate total value from currency only
    let totalValue = 0;
    if (loot.currency) {
        const currencyValues = { cp: 0.01, sp: 0.1, gp: 1, pp: 10 };
        for (const [type, amount] of Object.entries(loot.currency)) {
            totalValue += amount * currencyValues[type];
        }
    }

    const difficultyColors = {
        easy:   '#2ecc71',
        medium: '#f39c12',
        hard:   '#e67e22',
        deadly: '#e74c3c'
    };

    const difficultyLabel = loot.difficulty
        ? `<span style="color: ${difficultyColors[loot.difficulty]}; font-weight: bold; text-transform: capitalize;">${loot.difficulty} Encounter</span>`
        : '';

    const xpPerPlayer = loot.partySize && loot.rawXP
        ? Math.round(loot.rawXP / loot.partySize)
        : null;

    const xpLabel = xpPerPlayer
        ? `<span style="color: #c4b591;"><strong style="color: #d4af37;">XP:</strong> ${xpPerPlayer.toLocaleString()} per player (${loot.rawXP.toLocaleString()} total)</span>`
        : '';

    html += `
        <div class="loot-total" style="display: flex; flex-direction: column; gap: 6px;">
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                ${difficultyLabel}
                ${loot.difficulty ? '<span style="color: #8b6f47;">|</span>' : ''}
                ${xpLabel}
            </div>
            <div>
                <span style="color: #c4b591;">
                    <strong style="color: #d4af37;">Est. Value:</strong>
                    ${Math.round(totalValue).toLocaleString()} gp
                </span>
            </div>
        </div>
    `;
    html += '</div>';

    // ===== CURRENCY =====
    if (loot.currency && Object.keys(loot.currency).length > 0) {
        html += '<div class="loot-category" id="cat-currency">';
        html += '<div class="loot-category-header" onclick="toggleLootCategory(\'cat-currency\')">';
        html += '<h3>💰 Currency</h3>';
        html += '<span class="collapse-icon">▼</span>';
        html += '</div>';
        html += '<div class="loot-items">';

        for (const [type, amount] of Object.entries(loot.currency)) {
            const currencyId = 'loot-currency-' + type + '-' + Math.floor(Math.random() * 99999);
            html += '<div class="loot-item" id="' + currencyId + '">';
            html += '<div class="loot-item-header">';
            html += '<div class="loot-item-name">' + amount + ' ' + type.toUpperCase() + '</div>';
            html += '<button class="item-action-btn sold-btn" onclick="deleteLootItem(\'' + currencyId + '\')" title="Remove">🗑️</button>';
            html += '</div>';
            html += '</div>';
        }

        html += '</div></div>';
    }

    // ===== GEMS =====
    if (loot.gems && loot.gems.length > 0) {
        html += '<div class="loot-category" id="cat-gems">';
        html += '<div class="loot-category-header" onclick="toggleLootCategory(\'cat-gems\')">';
        html += '<h3>💎 Gems (' + loot.gems.length + ')</h3>';
        html += '<span class="collapse-icon">▼</span>';
        html += '</div>';
        html += '<div class="loot-items">';

        const gemCounts = {};
        loot.gems.forEach(gem => {
            const key = gem.name + '|' + gem.value;
            gemCounts[key] = (gemCounts[key] || 0) + 1;
        });

        Object.entries(gemCounts).forEach(([key, count]) => {
            const [name, value] = key.split('|');
            const displayName = count > 1 ? name + ' (×' + count + ')' : name;
            const gemId = 'loot-gem-' + name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '') + '-' + Math.floor(Math.random() * 99999);
            html += '<div class="loot-item" id="' + gemId + '">';
            html += '<div class="loot-item-header">';
            html += '<div class="loot-item-name">' + displayName + '</div>';
            html += '<div style="display: flex; align-items: center; gap: 8px;">';
            html += '<span class="loot-item-value">' + value + '</span>';
            html += '<button class="item-action-btn sold-btn" onclick="deleteLootItem(\'' + gemId + '\')" title="Remove">🗑️</button>';
            html += '</div></div></div>';
        });

        html += '</div></div>';
    }

    // ===== ART OBJECTS =====
    if (loot.artObjects && loot.artObjects.length > 0) {
        html += '<div class="loot-category" id="cat-art">';
        html += '<div class="loot-category-header" onclick="toggleLootCategory(\'cat-art\')">';
        html += '<h3>🎨 Art Objects (' + loot.artObjects.length + ')</h3>';
        html += '<span class="collapse-icon">▼</span>';
        html += '</div>';
        html += '<div class="loot-items">';

        const artCounts = {};
        loot.artObjects.forEach(obj => {
            const key = obj.name + '|' + obj.value;
            artCounts[key] = (artCounts[key] || 0) + 1;
        });

        Object.entries(artCounts).forEach(([key, count]) => {
            const [name, value] = key.split('|');
            const displayName = count > 1 ? name + ' (×' + count + ')' : name;
            const artId = 'loot-art-' + name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '') + '-' + Math.floor(Math.random() * 99999);
            html += '<div class="loot-item" id="' + artId + '">';
            html += '<div class="loot-item-header">';
            html += '<div class="loot-item-name">' + displayName + '</div>';
            html += '<div style="display: flex; align-items: center; gap: 8px;">';
            html += '<span class="loot-item-value">' + value + '</span>';
            html += '<button class="item-action-btn sold-btn" onclick="deleteLootItem(\'' + artId + '\')" title="Remove">🗑️</button>';
            html += '</div></div></div>';
        });

        html += '</div></div>';
    }

    // ===== MAGIC ITEMS =====
    if (loot.magicItems && loot.magicItems.length > 0) {
        html += '<div class="loot-category" id="cat-magic">';
        html += '<div class="loot-category-header" onclick="toggleLootCategory(\'cat-magic\')">';
        html += '<h3>✨ Magic Items (' + loot.magicItems.length + ')</h3>';
        html += '<span class="collapse-icon">▼</span>';
        html += '</div>';
        html += '<div class="loot-items">';

        const magicCounts = {};
        loot.magicItems.forEach(item => {
            const key = item.name;
            if (!magicCounts[key]) magicCounts[key] = { count: 0, item: item };
            magicCounts[key].count++;
        });

        Object.entries(magicCounts).forEach(([name, data]) => {
            const { count, item } = data;
            const rarityClass   = 'rarity-' + item.rarity.toLowerCase().replace(' ', '-');
            const displayName   = count > 1 ? item.name + ' (×' + count + ')' : item.name;
            const bossTag       = item.isBossLoot ? ' ⭐' : '';
            const descriptor    = getRandomDescriptor(item);
            const descriptorHTML = descriptor
                ? '<div class="item-descriptor" style="font-style: italic; color: #a89968; margin-top: 5px; font-size: 0.9em;">' + descriptor + '</div>'
                : '';
            const safeName    = item.name.replace(/'/g, "\\'");
            const magicItemId = 'loot-magic-' + item.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '') + '-' + Math.floor(Math.random() * 99999);

            html += '<div class="loot-item" id="' + magicItemId + '">';
            html += '<div class="loot-item-header">';
            html += '<div class="loot-item-name">' + displayName + bossTag + '</div>';
            html += '<div style="display: flex; align-items: center; gap: 8px;">';
            html += '<span class="' + rarityClass + '">' + item.rarity + '</span>';
            html += '<button class="item-action-btn print-btn" onclick="printItem(\'' + magicItemId + '\', \'' + safeName + '\', \'' + item.rarity + '\')" title="Print item card">🖨️ Print</button>';
            html += '<button class="item-action-btn sold-btn" onclick="deleteLootItem(\'' + magicItemId + '\')" title="Remove item">🗑️</button>';
            html += '</div></div>';
            html += '<div class="loot-item-description">' + (item.description || '') + '</div>';
            html += descriptorHTML;
            html += '</div>';
        });

        html += '</div></div>';
    }

    // ===== REGULAR ITEMS =====
    if (loot.items && loot.items.length > 0) {
        html += '<div class="loot-category" id="cat-items">';
        html += '<div class="loot-category-header" onclick="toggleLootCategory(\'cat-items\')">';
        html += '<h3>⚔️ Equipment & Items (' + loot.items.length + ')</h3>';
        html += '<span class="collapse-icon">▼</span>';
        html += '</div>';
        html += '<div class="loot-items">';

        const itemCounts = {};
        loot.items.forEach(item => {
            const key = item.name;
            if (!itemCounts[key]) itemCounts[key] = { count: 0, item: item };
            itemCounts[key].count++;
        });

        Object.entries(itemCounts).forEach(([name, data]) => {
            const { count, item } = data;
            const displayName    = count > 1 ? item.name + ' (×' + count + ')' : item.name;
            const descriptor     = getRandomDescriptor(item);
            const descriptorHTML = descriptor
                ? '<div class="item-descriptor" style="font-style: italic; color: #a89968; margin-top: 5px; font-size: 0.9em;">' + descriptor + '</div>'
                : '';
            const safeName      = item.name.replace(/'/g, "\\'");
            const regularItemId = 'loot-item-' + item.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '') + '-' + Math.floor(Math.random() * 99999);

            html += '<div class="loot-item" id="' + regularItemId + '">';
            html += '<div class="loot-item-header">';
            html += '<div class="loot-item-name">' + displayName + '</div>';
            html += '<div style="display: flex; align-items: center; gap: 8px;">';
            html += '<span class="loot-item-value">' + item.cost + ' gp</span>';
            html += '<button class="item-action-btn print-btn" onclick="printItem(\'' + regularItemId + '\', \'' + safeName + '\', \'' + item.rarity + '\')" title="Print item card">🖨️ Print</button>';
            html += '<button class="item-action-btn sold-btn" onclick="deleteLootItem(\'' + regularItemId + '\')" title="Remove item">🗑️</button>';
            html += '</div></div>';
            html += '<div class="loot-item-description">' + (item.description || '') + '</div>';
            html += descriptorHTML;
            html += '</div>';
        });

        html += '</div></div>';
    }

    // ===== SPECIAL DROPS =====
    if (loot.specialDrops && loot.specialDrops.length > 0) {
        html += '<div class="loot-category" id="cat-special">';
        html += '<div class="loot-category-header" onclick="toggleLootCategory(\'cat-special\')">';
        html += '<h3>🎁 Special Drops (' + loot.specialDrops.length + ')</h3>';
        html += '<span class="collapse-icon">▼</span>';
        html += '</div>';
        html += '<div class="loot-items">';

        const specialCounts = {};
        loot.specialDrops.forEach(item => {
            const key = typeof item === 'string' ? item : item.name;
            if (!specialCounts[key]) specialCounts[key] = { count: 0, item: item };
            specialCounts[key].count++;
        });

        Object.entries(specialCounts).forEach(([key, data]) => {
            const { count, item } = data;
            const displayName   = count > 1 ? key + ' (×' + count + ')' : key;
            const specialItemId = 'loot-special-' + key.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '') + '-' + Math.floor(Math.random() * 99999);

            html += '<div class="loot-item" id="' + specialItemId + '">';
            html += '<div class="loot-item-header">';
            html += '<div class="loot-item-name">' + displayName + '</div>';

            if (typeof item === 'object') {
                html += '<div style="display: flex; align-items: center; gap: 8px;">';
                html += '<span class="loot-item-value">' + item.value + '</span>';
                html += '<button class="item-action-btn sold-btn" onclick="deleteLootItem(\'' + specialItemId + '\')" title="Remove item">🗑️</button>';
                html += '</div>';
                html += '</div>';
                html += '<div class="loot-item-description">' + item.description + '</div>';
            } else {
                html += '<button class="item-action-btn sold-btn" onclick="deleteLootItem(\'' + specialItemId + '\')" title="Remove item">🗑️</button>';
                html += '</div>';
            }

            html += '</div>';
        });

        html += '</div></div>';
    }

    // ===== THEME ITEMS =====
    if (loot.themeItems && loot.themeItems.length > 0) {
        html += '<div class="loot-category" id="cat-theme">';
        html += '<div class="loot-category-header" onclick="toggleLootCategory(\'cat-theme\')">';
        html += '<h3>🏺 Themed Treasures (' + loot.themeItems.length + ')</h3>';
        html += '<span class="collapse-icon">▼</span>';
        html += '</div>';
        html += '<div class="loot-items">';

        const themeCounts = {};
        loot.themeItems.forEach(item => {
            themeCounts[item] = (themeCounts[item] || 0) + 1;
        });

        Object.entries(themeCounts).forEach(([item, count]) => {
            const displayName = count > 1 ? item + ' (×' + count + ')' : item;
            const themeId = 'loot-theme-' + item.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '') + '-' + Math.floor(Math.random() * 99999);
            html += '<div class="loot-item" id="' + themeId + '">';
            html += '<div class="loot-item-header">';
            html += '<div class="loot-item-name">' + displayName + '</div>';
            html += '<button class="item-action-btn sold-btn" onclick="deleteLootItem(\'' + themeId + '\')" title="Remove item">🗑️</button>';
            html += '</div></div>';
        });

        html += '</div></div>';
    }

    document.getElementById('loot-content').innerHTML = html;
}

// ===== LOOT CATEGORY TOGGLE =====

function toggleLootCategory(categoryId) {
    const category = document.getElementById(categoryId);
    if (category) category.classList.toggle('collapsed');
}

// ===== DELETE LOOT ITEM =====

function deleteLootItem(itemId) {
    const el = document.getElementById(itemId);
    if (!el) return;
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateX(-20px)';
    setTimeout(() => el.remove(), 300);
}

// ===== LOOT TAB SWITCHING =====

function switchLootTab(tabName) {
    document.querySelectorAll('.loot-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.loot-subtab').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabName + '-loot').classList.add('active');
    event.target.classList.add('active');

    if (tabName === 'creaturetypes') {
        populateCreatureTypesList();
    }
}
