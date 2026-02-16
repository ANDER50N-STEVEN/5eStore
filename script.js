// At the start of script.js
let officialItemDatabase = [];
let homebrewItemDatabase = [];

async function loadItemDatabases() {
    const [officialResponse, homebrewResponse] = await Promise.all([
        fetch('officialItems.json'),
        fetch('homebrewItems.json')
    ]);
    
    officialItemDatabase = await officialResponse.json();
    homebrewItemDatabase = await homebrewResponse.json();
    
    // Initialize after loading
    itemDatabase = [...officialItemDatabase];
    updateItemDatabase();
}

// Call on page load
window.addEventListener('DOMContentLoaded', async function() {
    await loadItemDatabases();
    loadItemEditsFromLocalStorage();
});
		
				const cityDefaults = {
		  village: {
			mundane: 15,
			common: 10,
			uncommon: 5,
			rare: 1,
			veryRare: 0,
			legendary: 0
		  },
		  town: {
			mundane: 20,
			common: 15,
			uncommon: 10,
			rare: 5,
			veryRare: 1,
			legendary: 1
		  },
		  city: {
			mundane: 25,
			common: 20,
			uncommon: 15,
			rare: 10,
			veryRare: 5,
			legendary: 2
		  },
		  metropolis: {
			mundane: 30,
			common: 25,
			uncommon: 20,
			rare: 15,
			veryRare: 10,
			legendary: 5
		  }
		};

		function applyCityDefaults(size) {
		  const config = cityDefaults[size];
		  if (!config) return;

		  document.getElementById("max-mundane").value = config.mundane;
		  document.getElementById("max-common").value = config.common;
		  document.getElementById("max-uncommon").value = config.uncommon;
		  document.getElementById("max-rare").value = config.rare;
		  document.getElementById("max-veryrare").value = config.veryRare;
		  document.getElementById("max-legendary").value = config.legendary;
		}

				const citySelect = document.getElementById("settlement-size");

		citySelect.addEventListener("change", (e) => {
		  applyCityDefaults(e.target.value);
		});

		applyCityDefaults(citySelect.value);

		// Initialize itemDatabase
		let itemDatabase = [...officialItemDatabase];

		function updateItemDatabase() {
			const allowHomebrew = document.getElementById('allow-homebrew').checked;
			
			if (allowHomebrew) {
				// Merge official and homebrew items
				itemDatabase = [...officialItemDatabase, ...homebrewItemDatabase];
			} else {
				// Use only official items
				itemDatabase = [...officialItemDatabase];
			}
			
			// If on item list tab, refresh the display
			if (document.getElementById('itemlist-tab').classList.contains('active')) {
				populateItemList();
			}
		}
		
				// Tab switching
		// Tab switching
		function switchTab(tabName) {
			// Hide all tabs
			document.querySelectorAll('.tab-content').forEach(tab => {
				tab.classList.remove('active');
			});
			document.querySelectorAll('.tab').forEach(tab => {
				tab.classList.remove('active');
			});
			
			// Show selected tab
			document.getElementById(tabName + '-tab').classList.add('active');
			event.target.classList.add('active');
			
			const shopContent = document.getElementById('shop-content');
			if (tabName === 'itemlist') {
				shopContent.style.display = 'none';
				populateItemList();
			} else if (tabName === 'homebrew') {
				shopContent.style.display = 'none';
				populateHomebrewList();
			} else if (tabName === 'savedstores') {
				shopContent.style.display = 'none';
				document.getElementById('savedstores-tab').innerHTML = displaySavedStores();
			} else {
				shopContent.style.display = 'block';
			}
			
			// If switching to item list, populate it
			if (tabName === 'itemlist') {
				populateItemList();
			} else if (tabName === 'homebrew') {
				populateHomebrewList();
			} else if (tabName === 'savedstores') {
				document.getElementById('savedstores-tab').innerHTML = displaySavedStores();
			}
		}
		
				// Populate the item list table
		function populateItemList(filteredItems = null) {
			const tbody = document.getElementById('item-table-body');
			const items = filteredItems || itemDatabase;
			
			tbody.innerHTML = '';
			
			items.forEach((item, index) => {
				const row = document.createElement('tr');
				row.id = `item-row-${index}`;
				
				const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
				
				row.innerHTML = `
					<td>${item.name}</td>
					<td>${item.cost}</td>
					<td>${item.type}</td>
					<td class="${rarityClass}">${item.rarity}</td>
					<td style="max-width: 400px;">${item.description || 'No description'}</td>
					<td>
						<button class="edit-btn" onclick="editItem(${index})">Edit</button>
					</td>
				`;
				
				tbody.appendChild(row);
			});
		}
		
		
				// Edit an item
		let currentlyEditingIndex = null;

		function editItem(index) {
			// If already editing another item, cancel that first
			if (currentlyEditingIndex !== null && currentlyEditingIndex !== index) {
				cancelEdit(currentlyEditingIndex);
			}
			
			currentlyEditingIndex = index;
			const item = itemDatabase[index];
			const row = document.getElementById('item-row-' + index);
			
			const rarityOptions = ['Mundane', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'];
			const typeOptions = ['Weapon', 'Armor', 'Ammunition', 'Apperal', 'Jewelry', 'Misc'];
			
			const typeOptionsHtml = typeOptions.map(function(type) {
				return '<option value="' + type + '" ' + (item.type === type ? 'selected' : '') + '>' + type + '</option>';
			}).join('');
			
			const rarityOptionsHtml = rarityOptions.map(function(rarity) {
				return '<option value="' + rarity + '" ' + (item.rarity === rarity ? 'selected' : '') + '>' + rarity + '</option>';
			}).join('');
			
			row.innerHTML = 
				'<td><input type="text" class="item-edit-input" id="edit-name-' + index + '" value="' + item.name + '"></td>' +
				'<td><input type="number" class="item-edit-input" id="edit-cost-' + index + '" value="' + item.cost + '" step="0.01"></td>' +
				'<td><select class="item-edit-select" id="edit-type-' + index + '">' + typeOptionsHtml + '</select></td>' +
				'<td><select class="item-edit-select" id="edit-rarity-' + index + '">' + rarityOptionsHtml + '</select></td>' +
				'<td><textarea class="item-edit-textarea" id="edit-desc-' + index + '">' + (item.description || '') + '</textarea></td>' +
				'<td><button class="save-btn" onclick="saveItem(' + index + ')">Save</button>' +
				'<button class="cancel-btn" onclick="cancelEdit(' + index + ')">Cancel</button></td>';
		}
		
		
			// Save edited item
		function saveItem(index) {
			const item = itemDatabase[index];
			
			item.name = document.getElementById(`edit-name-${index}`).value;
			item.cost = parseFloat(document.getElementById(`edit-cost-${index}`).value);
			item.type = document.getElementById(`edit-type-${index}`).value;
			item.rarity = document.getElementById(`edit-rarity-${index}`).value;
			item.description = document.getElementById(`edit-desc-${index}`).value;
			
			currentlyEditingIndex = null;
			populateItemList();
			
			// Save only this item's edit
			saveIndividualItemEdit(index, false);
		}

				// Cancel editing
		function cancelEdit(index) {
			currentlyEditingIndex = null;
			populateItemList();
		}

		// Filter items
		function applyItemFilters() {
			const searchTerm = document.getElementById('item-search').value.toLowerCase();
			const filterType = document.getElementById('filter-type').value;
			const filterRarity = document.getElementById('filter-rarity').value;
			
			const filtered = itemDatabase.filter(item => {
				const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
									(item.description && item.description.toLowerCase().includes(searchTerm));
				const matchesType = !filterType || item.type === filterType;
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

		// Load items from localStorage on page load
		window.addEventListener('load', function() {
			const savedItems = localStorage.getItem('dnd-items');
			if (savedItems) {
				try {
					const parsed = JSON.parse(savedItems);
					// Only load if it has items
					if (parsed.length > 0) {
						itemDatabase.length = 0; // Clear existing
						itemDatabase.push(...parsed); // Add saved items
					}
				} catch (e) {
					console.error('Error loading saved items:', e);
				}
			}
		});

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
    // Define consumable item types and their quantity ranges
    const consumables = {
        'Potion': { min: 1, max: 4 },           // 1-6 potions
		'Misc': { min:1, max: 4},
		'Common': { min:1, max: 4},
        'Ammunition': { min: 1, max: 3 },       // 1-3 bundles of ammunition
        'Scroll': { min: 1, max: 4 }       // 1-4 scrolls (if you want scrolls to have multiples)
    };
    
    // Check if item is consumable
    if (consumables[item.type]) {
        const range = consumables[item.type];
        return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    }
    
    // Non-consumable items always have quantity 1
    return 1;
}

        function getInventorySize(settlementSize) {
            const sizes = {
                'village': { common: 0.06, uncommon: 0.01, rare: 0.002, veryRare: 0.001, legendary: 0.0005 },
                'town': { common: 0.12, uncommon: 0.06, rare: 0.01, veryRare: 0.002, legendary: 0.001 },
                'city': { common: 0.25, uncommon: 0.12, rare: 0.06, veryRare: 0.03, legendary: 0.005 },
				'metropolis': { common: 0.25, uncommon: 0.2, rare: 0.1, veryRare: 0.05, legendary: 0.005 }
            };
            return sizes[settlementSize];
        }

        const rarityLevels = {
			'mundane': -1,
            'common': 0,
            'uncommon': 1,
            'rare': 2,
            'veryrare': 3,
            'legendary': 4
        };

        const rarityNames = ['Mundane','Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'];

        function updateRarityDefaults() {
            const settlementSize = document.getElementById('settlement-size').value;
            const maxRaritySelect = document.getElementById('max-rarity');
            
            // Set default max rarity based on settlement
            const defaults = {
                'village': 'uncommon',
                'town': 'rare',
                'city': 'veryrare',
				'metropolis': 'legendary'

            };
            
            maxRaritySelect.value = defaults[settlementSize];
        }
		


		function filterByStoreType(items, storeType) {
	if (storeType === 'general') {
		return items;
	}

	const filters = {
		'weaponsmith': (item) => 
			item.type === 'Weapon' || 
			item.type === 'Ammunition' || 
			item.type === 'Armor' ||
			item.type === 'Shield',
			
		'armorer': (item) => 
			item.type === 'Apparel' || 
			item.type === 'Armor' ||
			item.type === 'Shield' ||
			item.type === 'Cloak' ||
			item.type === 'Boots' ||
			item.type === 'Gloves' ||
			item.type === 'Headwear' ||
			item.type === 'Clothing',
			
		'outfitter': (item) => 
			(item.type === 'Misc' && (item.rarity === 'Common' || item.rarity === 'Mundane') ) ||
			(item.type === 'Potion' && (item.rarity === 'Common' || item.rarity === 'Mundane')) ||
			item.rarity === 'Common',
			
		'magic': (item) => 
			item.type === 'Wand/Staff/Rod' ||
			item.type === 'Book' || 
			item.type === 'Scroll' ||
			item.type === 'Amulet' ||
			item.type === 'Ring' ||
			(item.type === 'Jewelry' && item.rarity !== 'Mundane') ||
			(item.type === 'Potion' && item.rarity !== 'Mundane') ||
			(item.type === 'Cloak' && item.rarity !== 'Mundane') ||
			(item.type === 'Boots' && item.rarity !== 'Mundane') ||
			(item.type === 'Gloves' && item.rarity !== 'Mundane') ||
			(item.type === 'Headwear' && item.rarity !== 'Mundane'),
			
		'clothier': (item) => 
			item.type === 'Apparel' ||
			item.type === 'Clothing' ||
			item.type === 'Cloak' ||
			item.type === 'Boots' ||
			item.type === 'Gloves' ||
			item.type === 'Headwear',
			
		'apothecary': (item) => 
			item.type === 'Potion',
			
		'curiosities': (item) => {
			if ((item.type === 'Misc' && item.rarity !== 'Mundane') ||
			item.type === 'Jewelry' ||
			item.type === 'Amulet' ||
			item.type === 'Ring') return true;
			return Math.random() < 0.05;
			}
	};

	return items.filter(filters[storeType] || (() => true));
}
		function selectInventory(settlementSize, storeType, maxRarity) {
			const probabilities = getInventorySize(settlementSize);
			const maxRarityLevel = rarityLevels[maxRarity];
			
			// Get individual max limits from inputs
			const maxLimits = {
				'mundane': parseInt(document.getElementById('max-mundane').value),
				'common': parseInt(document.getElementById('max-common').value),
				'uncommon': parseInt(document.getElementById('max-uncommon').value),
				'rare': parseInt(document.getElementById('max-rare').value),
				'veryrare': parseInt(document.getElementById('max-veryrare').value),
				'legendary': parseInt(document.getElementById('max-legendary').value)
			};
			
			// Filter items by store type first
			const availableItems = filterByStoreType(itemDatabase, storeType);
			const inventory = [];
			
			availableItems.sort(() => Math.random() - 0.5);

			// Separate items by rarity level
			const regularItems = [];
			const luckyFindItems = [];
			const healingPotions = [];
			const mundaneItems = [];
			
			// Track count per rarity
			const rarityCount = {
				'mundane': 0,
				'common': 0,
				'uncommon': 0,
				'rare': 0,
				'veryrare': 0,
				'legendary': 0
			};
			
			for (const item of availableItems) {
				const itemRarityLevel = rarityLevels[item.rarity.toLowerCase().replace(' ', '')];
				
				// Separate healing potions for special handling
				if (isHealingPotion(item) && itemRarityLevel <= maxRarityLevel) {
					healingPotions.push(item);
				}
				
				if (itemRarityLevel === -1) {  // Mundane items
					mundaneItems.push(item);
				} else if (itemRarityLevel <= maxRarityLevel) {
					// Item is within allowed rarity
					regularItems.push(item);
				} else if (itemRarityLevel === maxRarityLevel + 1) {
					// Item is exactly one rarity level higher - potential lucky find
					luckyFindItems.push(item);
				}
			}
			
			// Add 50-100% of mundane items (with individual limit)
			const mundanePercentage = 0.1 + (Math.random() * 0.5);
			for (const item of mundaneItems) {
				if (rarityCount['mundane'] >= maxLimits['mundane']) break;
				if (Math.random() < mundanePercentage) {
					inventory.push(item);
					rarityCount['mundane']++;
				}
			}

			// 80% chance to guarantee at least one healing potion if any are available
			if (healingPotions.length > 0 && Math.random() < 0.8) {
				const guaranteedHealing = healingPotions[Math.floor(Math.random() * healingPotions.length)];
				const rarityKey = guaranteedHealing.rarity.toLowerCase().replace(' ', '');
				if (rarityCount[rarityKey] < maxLimits[rarityKey]) {
					inventory.push({...guaranteedHealing, isGuaranteed: true});
					rarityCount[rarityKey]++;
				}
			}

			// Select regular inventory (including healing potions through normal probability)
			for (const item of regularItems) {
				const rarityKey = item.rarity.toLowerCase().replace(' ', '');
				
				// Check if we've hit the individual limit for this rarity
				if (rarityCount[rarityKey] >= maxLimits[rarityKey]) continue;
				
				const prob = probabilities[rarityKey];
				
				// Boost healing potion probability by 3x
				const adjustedProb = isHealingPotion(item) ? prob * 3 : prob;
				
				if (adjustedProb && Math.random() < adjustedProb) {
					inventory.push(item);
					rarityCount[rarityKey]++;
				}
			}
			
			// 5% chance to add ONE lucky find item (one rarity above max)
			if (luckyFindItems.length > 0 && Math.random() < 0.05) {
				const luckyItem = luckyFindItems[Math.floor(Math.random() * luckyFindItems.length)];
				const rarityKey = luckyItem.rarity.toLowerCase().replace(' ', '');
				if (rarityCount[rarityKey] < maxLimits[rarityKey]) {
					inventory.push({...luckyItem, isLuckyFind: true});
					rarityCount[rarityKey]++;
				}
			}

			return inventory;
		}

        function applyPriceModifier(baseCost, maxModifier) {
            const minModifier = 100;
            const randomModifier = Math.random() * (maxModifier - minModifier) + minModifier;
            const modifiedPrice = (baseCost * randomModifier) / 100;
            return {
                price: Math.round(modifiedPrice * 100) / 100, // Keep decimals for copper/silver calculation
                modifier: randomModifier.toFixed(1)
            };
        }

        function formatPrice(price) {
            if (price >= 1) {
                // Gold pieces
                return `${Math.round(price)} gp`;
            } else if (price >= 0.1) {
                // Silver pieces (10 sp = 1 gp)
                const silver = Math.round(price * 10);
                return `${silver} sp`;
            } else {
                // Copper pieces (100 cp = 1 gp)
                const copper = Math.round(price * 100);
                return `${copper} cp`;
            }
        }

        function groupByType(inventory) {
            const grouped = {};
            for (const item of inventory) {
                if (!grouped[item.type]) {
                    grouped[item.type] = [];
                }
                grouped[item.type].push(item);
            }
            return grouped;
        }

        function toggleCategory(categoryId) {
            const category = document.getElementById(categoryId);
            category.classList.toggle('collapsed');
        }
		
		function generateItemHTML(item, maxModifier) {
	const quantity = getItemQuantity(item);
	const { price, modifier } = applyPriceModifier(item.cost, maxModifier);
	const formattedPrice = formatPrice(price);
	const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
	const luckyFindStar = item.isLuckyFind ? ' ⭐' : '';
	const quantityDisplay = quantity > 1 ? ` (×${quantity})` : '';
	
	// Check if item is homebrew
	const isHomebrew = homebrewItemDatabase.some(hbItem => hbItem.name === item.name);
	const homebrewBadge = isHomebrew ? ' <span class="homebrew-badge">🔮 Homebrew</span>' : '';
	
	return `
		<div class="item">
			<div class="item-header">
				<div>
					<span class="item-name">${item.name}${quantityDisplay}${luckyFindStar}${homebrewBadge}</span>
					<span class="item-rarity ${rarityClass}">(${item.rarity})</span>
				</div>
				<div>
					<span class="item-price">${formattedPrice}</span>
					<span class="price-modifier-display">(${modifier}%)</span>
				</div>
			</div>
			<div class="item-description">${item.description || 'No description available.'}</div>
		</div>
	`;
}

       function generateShop() {
			const storeType = document.getElementById('store-type').value;
			const settlementSize = document.getElementById('settlement-size').value;
			const maxModifier = parseFloat(document.getElementById('price-modifier').value);
			const maxRarity = document.getElementById('max-rarity').value;

			const inventory = selectInventory(settlementSize, storeType, maxRarity);
			
			if (inventory.length === 0) {
				document.getElementById('shop-content').innerHTML = `
					<div class="empty-state">
						<p>The merchant has nothing in stock today. Try a larger settlement or regenerate!</p>
					</div>
				`;
				return;
			}

			const grouped = groupByType(inventory);
			
			const storeNames = {
				'general': 'General Store',
				'weaponsmith': 'Weaponsmith',
				'outfitter': 'Outfitter',
				'apothecary': 'Apothecary',
				'armorer': 'Armorer',
				'magic': 'Magic Shop',
				'clothier': 'Clothier',
				'curiosities': 'Curiosities Shop'
			};

			const storeIcons = {
				'general': '🏪',
				'weaponsmith': '⚔️',
				'outfitter': '💼',
				'apothecary': '⚗️',
				'armorer': '🛡️',
				'magic': '🔮',
				'clothier': '👔',
				'curiosities': '🎭'
			};
			
			let html = `
				<div class="shop-info">
					<h2>${storeIcons[storeType]} ${storeNames[storeType]} - ${settlementSize.charAt(0).toUpperCase() + settlementSize.slice(1)}</h2>
					<p><strong>Total Items:</strong> ${inventory.length} | <strong>Price Variance:</strong> 100% - ${maxModifier}% | <strong>Max Rarity:</strong> ${rarityNames[rarityLevels[maxRarity]]}</p>
				</div>
				<div class="inventory">
			`;

			for (const [type, items] of Object.entries(grouped).sort()) {
				const categoryId = `category-${type.replace(/\s+/g, '-')}`;
				
				// Separate items into mundane and magic
				const mundaneItems = items.filter(item => item.rarity === 'Mundane');
				const magicItems = items.filter(item => item.rarity !== 'Mundane');
				
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
						html += generateItemHTML(item, maxModifier);
					}

					html += `
							</div>
						</div>
					`;
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
						html += generateItemHTML(item, maxModifier);
					}

					html += `
							</div>
						</div>
					`;
				}

				html += `
						</div>
					</div>
				`;
			}

			html += '</div>';
			document.getElementById('shop-content').innerHTML = html;
		}


// ===== HOMEBREW TAB FUNCTIONS =====

// Populate the homebrew item list table
function populateHomebrewList(filteredItems = null) {
	console.log('populateHomebrewList called');
	const tbody = document.getElementById('homebrew-table-body');
	console.log('tbody element:', tbody);
	
	if (!tbody) {
		console.error('Homebrew table body not found');
		return;
	}
	
	const items = filteredItems || homebrewItemDatabase;
	console.log('Items to display:', items.length);
	
	tbody.innerHTML = '';
	
	items.forEach((item, index) => {
		const row = document.createElement('tr');
		row.id = `homebrew-row-${index}`;
		
		const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
		
		row.innerHTML = `
			<td>${item.name}</td>
			<td>${item.cost}</td>
			<td>${item.type}</td>
			<td class="${rarityClass}">${item.rarity}</td>
			<td style="max-width: 400px;">${item.description || 'No description'}</td>
			<td>
				<button class="edit-btn" onclick="editHomebrewItem(${index})">Edit</button>
			</td>
		`;
		
		tbody.appendChild(row);
	});
	
	console.log('Rows added:', tbody.children.length);
}

// Edit a homebrew item
let currentlyEditingHomebrewIndex = null;

function editHomebrewItem(index) {
	if (currentlyEditingHomebrewIndex !== null && currentlyEditingHomebrewIndex !== index) {
		cancelHomebrewEdit(currentlyEditingHomebrewIndex);
	}
	
	currentlyEditingHomebrewIndex = index;
	const item = homebrewItemDatabase[index];
	const row = document.getElementById('homebrew-row-' + index);
	
	const rarityOptions = ['Mundane', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'];
	const typeOptions = ['Weapon', 'Armor', 'Ammunition', 'Apperal', 'Jewelry', 'Misc'];
	
	const typeOptionsHtml = typeOptions.map(function(type) {
		return '<option value="' + type + '" ' + (item.type === type ? 'selected' : '') + '>' + type + '</option>';
	}).join('');
	
	const rarityOptionsHtml = rarityOptions.map(function(rarity) {
		return '<option value="' + rarity + '" ' + (item.rarity === rarity ? 'selected' : '') + '>' + rarity + '</option>';
	}).join('');
	
	row.innerHTML = 
		'<td><input type="text" class="item-edit-input" id="edit-homebrew-name-' + index + '" value="' + item.name + '"></td>' +
		'<td><input type="number" class="item-edit-input" id="edit-homebrew-cost-' + index + '" value="' + item.cost + '" step="0.01"></td>' +
		'<td><select class="item-edit-select" id="edit-homebrew-type-' + index + '">' + typeOptionsHtml + '</select></td>' +
		'<td><select class="item-edit-select" id="edit-homebrew-rarity-' + index + '">' + rarityOptionsHtml + '</select></td>' +
		'<td><textarea class="item-edit-textarea" id="edit-homebrew-desc-' + index + '">' + (item.description || '') + '</textarea></td>' +
		'<td><button class="save-btn" onclick="saveHomebrewItem(' + index + ')">Save</button>' +
		'<button class="cancel-btn" onclick="cancelHomebrewEdit(' + index + ')">Cancel</button></td>';
}

		// Save edited homebrew item
		function saveHomebrewItem(index) {
			const item = homebrewItemDatabase[index];
			
			item.name = document.getElementById(`edit-homebrew-name-${index}`).value;
			item.cost = parseFloat(document.getElementById(`edit-homebrew-cost-${index}`).value);
			item.type = document.getElementById(`edit-homebrew-type-${index}`).value;
			item.rarity = document.getElementById(`edit-homebrew-rarity-${index}`).value;
			item.description = document.getElementById(`edit-homebrew-desc-${index}`).value;
			
			currentlyEditingHomebrewIndex = null;
			populateHomebrewList();
			
			// Update main item database if homebrew is enabled
			updateItemDatabase();
			
			// Save only this item's edit
			saveIndividualItemEdit(index, true);
		}

// Cancel homebrew edit
function cancelHomebrewEdit(index) {
	currentlyEditingHomebrewIndex = null;
	populateHomebrewList();
}

// Apply filters to homebrew list
function applyHomebrewFilters() {
	const searchTerm = document.getElementById('homebrew-search').value.toLowerCase();
	const filterType = document.getElementById('homebrew-filter-type').value;
	const filterRarity = document.getElementById('homebrew-filter-rarity').value;
	
	let filtered = homebrewItemDatabase.filter(function(item) {
		const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
							(item.description && item.description.toLowerCase().includes(searchTerm));
		const matchesType = !filterType || item.type === filterType;
		const matchesRarity = !filterRarity || item.rarity === filterRarity;
		
		return matchesSearch && matchesType && matchesRarity;
	});
	
	populateHomebrewList(filtered);
}

// Reset homebrew filters
function resetHomebrewFilters() {
	document.getElementById('homebrew-search').value = '';
	document.getElementById('homebrew-filter-type').value = '';
	document.getElementById('homebrew-filter-rarity').value = '';
	populateHomebrewList();
}
// ===== LOCALSTORAGE FUNCTIONS =====

// Save item edits to localStorage (only save changes, not entire database)
function saveItemEditsToLocalStorage() {
	// We don't save the entire databases anymore
	// Edits are tracked separately
	console.log('Item edits saved to localStorage');
}

// Load item edits from localStorage
function loadItemEditsFromLocalStorage() {
	const savedEdits = localStorage.getItem('dnd-item-edits');
	if (savedEdits) {
		try {
			const edits = JSON.parse(savedEdits);
			
			// Apply edits to official items
			if (edits.officialItems) {
				Object.entries(edits.officialItems).forEach(([index, changes]) => {
					if (officialItemDatabase[index]) {
						Object.assign(officialItemDatabase[index], changes);
					}
				});
			}
			
			// Apply edits to homebrew items
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

// Helper function to save individual item edit
function saveIndividualItemEdit(index, isHomebrew = false) {
	const savedEdits = JSON.parse(localStorage.getItem('dnd-item-edits') || '{"officialItems": {}, "homebrewItems": {}}');
	
	if (isHomebrew) {
		savedEdits.homebrewItems[index] = {...homebrewItemDatabase[index]};
	} else {
		savedEdits.officialItems[index] = {...itemDatabase[index]};
	}
	
	localStorage.setItem('dnd-item-edits', JSON.stringify(savedEdits));
	console.log('Individual item edit saved');
}

// ===== SAVED STORES FUNCTIONS =====

// Save current shop inventory
function saveCurrentStore() {
	console.log('saveCurrentStore called');
	
	// Debug: check what's in shop-content
	const shopContent = document.getElementById('shop-content');
	console.log('shopContent element:', shopContent);
	console.log('shopContent innerHTML:', shopContent ? shopContent.innerHTML.substring(0, 200) : 'null');
	
	// Check if there's actually inventory items in the DOM
	const inventoryDiv = document.querySelector('#shop-content .inventory');
	console.log('inventoryDiv found:', inventoryDiv);
	
	const itemElements = document.querySelectorAll('#shop-content .item');
	console.log('Number of items found:', itemElements.length);
	
	if (!inventoryDiv) {
		alert('Please generate a shop first before saving!');
		return;
	}
	
	const storeName = prompt('Enter a name for this store:');
	if (!storeName || storeName.trim() === '') {
		return;
	}
	
	const storeType = document.getElementById('store-type').value;
	const settlementSize = document.getElementById('settlement-size').value;
	const maxModifier = parseFloat(document.getElementById('price-modifier').value);
	const maxRarity = document.getElementById('max-rarity').value;
	
	// Get current inventory from the DOM
	const inventory = [];
	const itemElements2 = document.querySelectorAll('#shop-content .item');
	
	itemElements2.forEach(itemEl => {
		const nameEl = itemEl.querySelector('.item-name');
		const priceEl = itemEl.querySelector('.item-price');
		const rarityEl = itemEl.querySelector('.item-rarity');
		const descEl = itemEl.querySelector('.item-description');
		
		if (nameEl && priceEl) {
			// Extract item name (without quantity or stars)
			let itemName = nameEl.textContent.trim();
			itemName = itemName.replace(/\s*\(×\d+\)\s*/g, ''); // Remove quantity
			itemName = itemName.replace(/\s*⭐\s*/g, ''); // Remove lucky find star
			itemName = itemName.replace(/\s*🔮 Homebrew\s*/g, ''); // Remove homebrew badge
			
			// Find the original item from database
			const originalItem = itemDatabase.find(item => item.name === itemName);
			
			if (originalItem) {
				inventory.push({
					...originalItem,
					displayPrice: priceEl.textContent.trim()
				});
			}
		}
	});
	
	console.log('Inventory collected:', inventory.length, 'items');
	
	if (inventory.length === 0) {
		alert('No items found in the current shop!');
		return;
	}
	
	const savedStore = {
		name: storeName.trim(),
		timestamp: new Date().toISOString(),
		storeType: storeType,
		settlementSize: settlementSize,
		maxModifier: maxModifier,
		maxRarity: maxRarity,
		inventory: inventory
	};
	
	// Get existing saved stores
	const savedStores = JSON.parse(localStorage.getItem('dnd-saved-stores') || '[]');
	savedStores.push(savedStore);
	
	// Save to localStorage
	localStorage.setItem('dnd-saved-stores', JSON.stringify(savedStores));
	
	alert(`Store "${storeName}" saved successfully!`);
}

	
	

// Display saved stores list
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
		
		const storeNames = {
			'general': 'General Store',
			'weaponsmith': 'Weaponsmith',
			'outfitter': 'Outfitter',
			'apothecary': 'Apothecary',
			'armorer': 'Armorer',
			'magic': 'Magic Shop',
			'clothier': 'Clothier',
			'curiosities': 'Curiosities Shop'
		};
		
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
					<p><strong>Type:</strong> ${storeNames[store.storeType]}</p>
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

// Load a saved store
function loadSavedStore(index) {
	const savedStores = JSON.parse(localStorage.getItem('dnd-saved-stores') || '[]');
	const store = savedStores[index];
	
	if (!store) {
		alert('Store not found!');
		return;
	}
	
	// Switch to generator tab
	switchTab('generator');
	
	// Rebuild the shop display
	const storeNames = {
		'general': 'General Store',
		'weaponsmith': 'Weaponsmith',
		'outfitter': 'Outfitter',
		'apothecary': 'Apothecary',
		'armorer': 'Armorer',
		'magic': 'Magic Shop',
		'clothier': 'Clothier',
		'curiosities': 'Curiosities Shop'
	};
	
	const storeIcons = {
		'general': '🏪',
		'weaponsmith': '⚔️',
		'outfitter': '💼',
		'apothecary': '⚗️',
		'armorer': '🛡️',
		'magic': '🔮',
		'clothier': '👔',
		'curiosities': '🎭'
	};
	
	const rarityNames = ['Mundane','Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'];
	const rarityLevels = {
		'mundane': -1,
		'common': 0,
		'uncommon': 1,
		'rare': 2,
		'veryrare': 3,
		'legendary': 4
	};
	
	let html = `
		<div class="shop-info">
			<h2>${storeIcons[store.storeType]} ${storeNames[store.storeType]} - ${store.settlementSize.charAt(0).toUpperCase() + store.settlementSize.slice(1)}</h2>
			<p><strong>Saved Store:</strong> ${store.name} | <strong>Total Items:</strong> ${store.inventory.length} | <strong>Max Rarity:</strong> ${rarityNames[rarityLevels[store.maxRarity]]}</p>
		</div>
		<div class="inventory">
	`;
	
	// Group items by type
	const grouped = {};
	for (const item of store.inventory) {
		if (!grouped[item.type]) {
			grouped[item.type] = [];
		}
		grouped[item.type].push(item);
	}
	
	for (const [type, items] of Object.entries(grouped).sort()) {
		const categoryId = `category-${type.replace(/\s+/g, '-')}`;
		
		// Separate items into mundane and magic
		const mundaneItems = items.filter(item => item.rarity === 'Mundane');
		const magicItems = items.filter(item => item.rarity !== 'Mundane');
		
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
				const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
				const isHomebrew = homebrewItemDatabase.some(hbItem => hbItem.name === item.name);
				const homebrewBadge = isHomebrew ? ' <span class="homebrew-badge">🔮 Homebrew</span>' : '';
				
				html += `
					<div class="item">
						<div class="item-header">
							<div>
								<span class="item-name">${item.name}${homebrewBadge}</span>
								<span class="item-rarity ${rarityClass}">(${item.rarity})</span>
							</div>
							<div>
								<span class="item-price">${item.displayPrice}</span>
							</div>
						</div>
						<div class="item-description">${item.description || 'No description available.'}</div>
					</div>
				`;
			}
			
			html += `
					</div>
				</div>
			`;
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
				const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
				const isHomebrew = homebrewItemDatabase.some(hbItem => hbItem.name === item.name);
				const homebrewBadge = isHomebrew ? ' <span class="homebrew-badge">🔮 Homebrew</span>' : '';
				
				html += `
					<div class="item">
						<div class="item-header">
							<div>
								<span class="item-name">${item.name}${homebrewBadge}</span>
								<span class="item-rarity ${rarityClass}">(${item.rarity})</span>
							</div>
							<div>
								<span class="item-price">${item.displayPrice}</span>
							</div>
						</div>
						<div class="item-description">${item.description || 'No description available.'}</div>
					</div>
				`;
			}
			
			html += `
					</div>
				</div>
			`;
		}
		
		html += `
				</div>
			</div>
		`;
	}
	
	html += `</div>`;
	
	document.getElementById('shop-content').innerHTML = html;
}

// Delete a saved store
function deleteSavedStore(index) {
	if (!confirm('Are you sure you want to delete this saved store?')) {
		return;
	}
	
	const savedStores = JSON.parse(localStorage.getItem('dnd-saved-stores') || '[]');
	savedStores.splice(index, 1);
	localStorage.setItem('dnd-saved-stores', JSON.stringify(savedStores));
	
	// Refresh the saved stores tab if we're on it
	if (document.getElementById('savedstores-tab').classList.contains('active')) {
		document.getElementById('savedstores-tab').innerHTML = displaySavedStores();
	}
}

// Initialize - Load edits on page load
window.addEventListener('DOMContentLoaded', function() {
	loadItemEditsFromLocalStorage();
});
