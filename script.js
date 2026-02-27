// At the start of script.js
let officialItemDatabase = [];
let homebrewItemDatabase = [];
let itemDatabase = []; // Initialize as empty

let officialSortColumn = 'name';
let officialSortDirection = 'asc';
let homebrewSortColumn = 'name';
let homebrewSortDirection = 'asc';

// Track excluded items
let excludedOfficialItems = new Set();
let excludedHomebrewItems = new Set();

const wealthLevels = {
    'squalid': { gold: [100, 500], sellModifier: 0.80, label: 'Squalid' },
    'common': { gold: [500, 2000], sellModifier: 1.00, label: 'Common' },
    'respectable': { gold: [2000, 5000], sellModifier: 1.10, label: 'Respectable' },
    'prosperous': { gold: [5000, 15000], sellModifier: 1.20, label: 'Prosperous' },
    'fortunate': { gold: [15000, 50000], sellModifier: 1.30, label: 'Fortunate' }
};

const shopkeeperData = {
    races: [
        'Human', 'Elf', 'Dwarf', 'Halfling', 'Gnome', 'Half-Elf', 'Half-Orc', 
        'Tiefling', 'Dragonborn', 'Tabaxi', 'Goliath', 'Firbolg', 'Kenku'
    ],
    
    namesByRace: {
		'Human': { 
		    first: ['Aldric', 'Brenna', 'Cedric', 'Delia', 'Edric', 'Fiona', 'Gareth', 'Helena', 'Alaric', 'Lyanna', 'Thaddeus', 'Rowena', 'Magnus', 'Isolde', 'Percival', 'Elspeth'], 
		    last: ['Ashwood', 'Blackthorn', 'Stormwind', 'Riverstone', 'Ironwood', 'Goldleaf', 'Whitehall', 'Ravencraft', 'Silverhand', 'Thornfield', 'Stonebridge', 'Fairwind'] 
		},        
		'Elf': { first: ['Elara', 'Theren', 'Silaqui', 'Laeroth', 'Isilme', 'Faelyn', 'Aerendyl', 'Miriel'], last: ['Moonwhisper', 'Starweaver', 'Silverleaf', 'Nightbreeze', 'Sunblade', 'Forestwarden'] },
        'Dwarf': { first: ['Thorin', 'Brunhilde', 'Balin', 'Nori', 'Helga', 'Gimli', 'Bombur', 'Dagna'], last: ['Ironforge', 'Stonehelm', 'Oakenshield', 'Firebeard', 'Bronzehammer', 'Golddelver'] },
        'Halfling': { first: ['Bilbo', 'Rosie', 'Merric', 'Portia', 'Willow', 'Finnan', 'Lidda', 'Osborn'], last: ['Goodbarrel', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough', 'Hilltopple'] },
        'Gnome': { first: ['Zook', 'Nissa', 'Boddynock', 'Caramip', 'Warryn', 'Bimpnottin', 'Kellen', 'Turen'], last: ['Tinkertop', 'Fizzlebang', 'Sparklegem', 'Nackle', 'Beren', 'Daergel'] },
        'Half-Elf': { first: ['Aramil', 'Liara', 'Davian', 'Seraphina', 'Kaelen', 'Melodia', 'Tharion', 'Sylvara'], last: ['Greywood', 'Ravenwood', 'Swiftbrook', 'Dawntracker', 'Shadowend', 'Brightwater'] },
        'Half-Orc': { first: ['Grak', 'Sharag', 'Korg', 'Mara', 'Thokk', 'Grisha', 'Dench', 'Ovak'], last: ['Strongarm', 'Ironfang', 'Bonecrusher', 'Steelgrip', 'Warhide', 'Stonefist'] },
        'Tiefling': { first: ['Crimson', 'Sorrow', 'Ash', 'Despair', 'Glory', 'Mercy', 'Torment', 'Hope'], last: ['Shadowflame', 'Nighthorn', 'Emberheart', 'Duskbane', 'Hellspark', 'Voidcaller'] },
        'Dragonborn': { first: ['Balasar', 'Akra', 'Torinn', 'Nala', 'Ghesh', 'Mishann', 'Donaar', 'Farideh'], last: ['Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kerrhylon'] },
        'Tabaxi': { first: ['Cloud', 'River', 'Mist', 'Shadow', 'Rain', 'Storm', 'Wind', 'Star'], last: ['on Mountain', 'in Forest', 'at Dawn', 'in Night', 'on Water', 'at Dusk'] },
        'Goliath': { first: ['Aukan', 'Ilikan', 'Keothi', 'Kuori', 'Manneo', 'Maveith', 'Nalla', 'Uthal'], last: ['Thuunlakalaga', 'Katho-Olavi', 'Elanithino', 'Gathakanathi', 'Kalagiano', 'Kolae-Gileana'] },
        'Firbolg': { first: ['Autumn', 'Blaze', 'Dew', 'Ember', 'Flint', 'Grove', 'Heath', 'Oak'], last: ['Leafwhisper', 'Rootwalker', 'Mossbeard', 'Treestrider', 'Fernheart', 'Branchbender'] },
        'Kenku': { first: ['Caw', 'Scratch', 'Whistle', 'Click', 'Rustle', 'Chime', 'Screech', 'Rattle'], last: ['Mimicsong', 'Echovoice', 'Copycall', 'Soundstealer', 'Repeatcry', 'Borrowword'] }
    },
    
    quirks: {
        general: [
            'Has a pet {animal} that sleeps on the counter',
            'Only speaks in rhymes on {day}s',
            'Collects unusual {item}s and displays them proudly',
            'Has an uncanny memory for every customer\'s face',
            'Never stops humming old tavern songs',
            'Insists on bartering before revealing prices',
            'Has lived in {count} different cities',
            'Was once an adventurer until {injury}',
            'Reads palms for free with every purchase',
            'Can\'t remember names but never forgets a face'
        ],
        weaponsmith: [
            'Tests every weapon personally before selling it',
            'Lost {bodypart} in a legendary duel',
            'Names every weapon they forge',
            'Has weapon diagrams tattooed on their arms',
            'Forged a blade for a famous {hero}',
            'Can identify any weapon by sound alone',
            'Only sells to those who can lift the {item}',
            'Sleeps in the forge to "keep it warm"',
            'Collects the first coin from every sale',
            'Refuses to sell weapons on {day}s'
        ],
        armorer: [
            'Wears armor made from {material} at all times',
            'Can size armor by sight alone',
            'Once armored an entire army in three days',
            'Has a superstition about {color} armor',
            'Polish obsessed - armor must shine',
            'Taps every piece three times for luck',
            'Only uses {metal} from a specific mine',
            'Was saved by their armor during {event}',
            'Keeps a piece of every armor set made',
            'Refuses to repair cursed equipment'
        ],
        magic: [
            'Eyes glow faintly when examining magical items',
            'Speaks to their familiar {animal} constantly',
            'Once accidentally turned themselves {color}',
            'Can sense magical auras within {distance} feet',
            'Collects stories about every magical item',
            'Uses only {material} for spell components',
            'Had an apprentice who became {title}',
            'Can\'t resist investigating any magical anomaly',
            'Keeps a journal of every spell they\'ve seen cast',
            'Refuses to sell items on nights of the full moon'
        ],
        apothecary: [
            'Taste-tests every potion personally',
            'Has {color} stains on their fingers permanently',
            'Grows rare herbs in a secret garden',
            'Once cured a {creature} of {disease}',
            'Can identify any plant by smell alone',
            'Labels everything in elaborate handwriting',
            'Has survived {count} poisonings',
            'Keeps antidotes for poisons that don\'t exist yet',
            'Talks to their plants and swears they grow better',
            'Has a superstition about mixing on {day}s'
        ],
        clothier: [
            'Never wears the same outfit twice in a week',
            'Can measure by eye with perfect accuracy',
            'Has a {color} thread always tucked behind their ear',
            'Once dressed {title} for a royal ball',
            'Sews a secret symbol into every garment',
            'Only works with fabrics from {location}',
            'Can tell your entire story from your clothes',
            'Keeps the first garment they ever made',
            'Refuses to make anything in {color}',
            'Hums different songs while working different fabrics'
        ],
        outfitter: [
            'Has personally tested every rope, torch, and bedroll',
            'Can pack a bag with perfect weight distribution',
            'Once survived {count} days with only basic supplies',
            'Gives {item}s to first-time adventurers for luck',
            'Has maps tattooed on their {bodypart}',
            'Keeps a log of what adventurers buy before their quests',
            'Was a {profession} before opening the shop',
            'Only sells torches they\'ve tested personally',
            'Can tie {count} different types of knots',
            'Has a sixth sense for what adventurers need'
        ],
        curiosities: [
            'Claims every item has a curse (but won\'t say what)',
            'Whispers to the items when no one is looking',
            'Has {count} eyes tattooed on their skin',
            'Can sense if an item "wants" to be sold',
            'Once traded a curiosity for a {title}\'s crown',
            'Knows the history of every item in the shop',
            'Only accepts payment in {item}s or gold',
            'Has been cursed {count} times',
            'Reads fortunes in the patterns of dust on items',
            'Never sells the same item to family members'
        ]
    },
    
    replacements: {
        animal: ['cat', 'crow', 'rat', 'parrot', 'ferret', 'toad', 'snake', 'owl'],
        day: ['Moonday', 'Godsday', 'Waterday', 'Earthday', 'Freeday'],
        item: ['spoons', 'buttons', 'bells', 'keys', 'coins', 'feathers', 'stones'],
        count: ['three', 'five', 'seven', 'ten', 'twelve', 'twenty'],
        injury: ['an arrow to the knee', 'a dragon attack', 'a curse', 'retirement'],
        bodypart: ['an eye', 'a finger', 'an arm', 'three fingers'],
        hero: ['king', 'hero', 'dragon slayer', 'champion'],
        material: ['dragon scales', 'adamantine', 'mithral', 'obsidian', 'iron'],
        color: ['blue', 'purple', 'green', 'silver', 'golden', 'crimson'],
        metal: ['iron', 'steel', 'silver', 'bronze', 'copper'],
        event: ['a siege', 'an ambush', 'a dragon attack', 'a cave-in'],
        distance: ['30', '20', '15', '10'],
        title: ['a noble', 'an archmage', 'a king', 'a hero', 'the villain'],
        creature: ['noble', 'king', 'dragon', 'demon', 'angel'],
        disease: ['lycanthropy', 'a curse', 'petrification', 'madness'],
        location: ['the East', 'across the sea', 'the mountains', 'a distant land'],
        profession: ['sailor', 'soldier', 'adventurer', 'merchant', 'scout']
    }
};

// Get random descriptor for an item
function getRandomDescriptor(item) {
    if (!item.descriptors || item.descriptors.length === 0) {
        return null;
    }
    return item.descriptors[Math.floor(Math.random() * item.descriptors.length)];
}

function generateShopkeeper(storeType, settlementSize, wealthLevel = 'common') {
    // Pick random race
    const race = shopkeeperData.races[Math.floor(Math.random() * shopkeeperData.races.length)];
    
    // Get name based on race
    const names = shopkeeperData.namesByRace[race];
    const firstName = names.first[Math.floor(Math.random() * names.first.length)];
    const lastName = names.last[Math.floor(Math.random() * names.last.length)];
    const fullName = `${firstName} ${lastName}`;
    
    // Get quirk based on store type
    const quirks = shopkeeperData.quirks[storeType] || shopkeeperData.quirks.general;
    let quirk = quirks[Math.floor(Math.random() * quirks.length)];
    
    // Replace placeholders in quirk
    quirk = quirk.replace(/\{(\w+)\}/g, (match, key) => {
        const options = shopkeeperData.replacements[key];
        if (options) {
            return options[Math.floor(Math.random() * options.length)];
        }
        return match;
    });
    
    // Generate description based on settlement size
    const descriptions = {
        hamlet: ['runs this small shop alone', 'knows everyone in the hamlet', 'has been here for generations'],
        village: ['is well-known in the village', 'takes pride in serving the community', 'has many regular customers'],
        town: ['has built a solid reputation in town', 'trains a young apprentice', 'competes with a rival shop'],
        smallcity: ['supplies the local garrison', 'has connections throughout the city', 'deals in bulk orders regularly'],
        city: ['runs one of many shops in the city', 'has connections to merchant guilds', 'sees hundreds of customers weekly'],
        metropolis: ['operates in the busiest district', 'is part of a merchant consortium', 'deals with customers from across the realm']
    };
    
    const descOptions = descriptions[settlementSize] || descriptions.town;
    const description = descOptions[Math.floor(Math.random() * descOptions.length)];
    
  // Generate gold based on wealth level
    const wealthData = wealthLevels[wealthLevel];
    const goldAvailable = Math.floor(Math.random() * (wealthData.gold[1] - wealthData.gold[0] + 1)) + wealthData.gold[0];
    
    return {
        race: race,
        name: fullName,
        description: description,
        quirk: quirk,
        wealthLevel: wealthLevel,
        goldAvailable: goldAvailable,
        sellModifier: wealthData.sellModifier
    };
}

function updatePriceModifierFromWealth() {
    const wealthLevel = document.getElementById('wealth-level').value;
    const sellModifier = wealthLevels[wealthLevel].sellModifier;
    const priceModifierInput = document.getElementById('price-modifier');
    
    // Convert sell modifier to percentage (e.g., 0.80 → 80, 1.30 → 130)
    priceModifierInput.value = Math.round(sellModifier * 100);
}

// Load excluded items from localStorage
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

// Save excluded items to localStorage
function saveExcludedItems() {
	const data = {
		official: Array.from(excludedOfficialItems),
		homebrew: Array.from(excludedHomebrewItems)
	};
	localStorage.setItem('dnd-excluded-items', JSON.stringify(data));
}

// Toggle item exclusion
function toggleItemExclusion(index, isHomebrew) {
	const excludedSet = isHomebrew ? excludedHomebrewItems : excludedOfficialItems;
	
	if (excludedSet.has(index)) {
		excludedSet.delete(index);
	} else {
		excludedSet.add(index);
	}
	
	saveExcludedItems();
}

// Check if item is excluded
function isItemExcluded(index, isHomebrew) {
	const excludedSet = isHomebrew ? excludedHomebrewItems : excludedOfficialItems;
	return excludedSet.has(index);
}



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

		        // Load excluded items
        loadExcludedItems();
        
        // Initialize after loading
        itemDatabase = [...officialItemDatabase];
        updateItemDatabase();
        
    } catch (error) {
        console.error('Error loading item databases:', error);
        alert('Failed to load item databases. Please refresh the page.');
    }
}

const cityDefaults = {
	hamlet: {
    mundane: 10,
    common: 5,
    uncommon: 2,
    rare: 0,
    veryRare: 0,
    legendary: 0
  },
  village: {
    mundane: 13,
    common: 8,
    uncommon: 5,
    rare: 1,
    veryRare: 0,
    legendary: 0
  },
  town: {
    mundane: 16,
    common: 11,
    uncommon: 8,
    rare: 5,
    veryRare: 1,
    legendary: 1
  },
	smallcity: {
    mundane: 20,
    common: 15,
    uncommon: 12,
    rare: 8,
    veryRare: 3,
    legendary: 2
  },
  city: {
    mundane: 22,
    common: 18,
    uncommon: 15,
    rare: 11,
    veryRare: 6,
    legendary: 2
  },
  metropolis: {
    mundane: 25,
    common: 20,
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

// Call on page load
window.addEventListener('DOMContentLoaded', async function() {
    await loadItemDatabases();
    loadItemEditsFromLocalStorage();
    
    // Set up city select event listener after DOM is ready
    const citySelect = document.getElementById("settlement-size");
    citySelect.addEventListener("change", (e) => {
      applyCityDefaults(e.target.value);
    });
    applyCityDefaults(citySelect.value);
});

		function updateItemDatabase() {
			const allowHomebrew = document.getElementById('allow-homebrew').checked;


						// Filter out excluded items from official database
			const includedOfficialItems = officialItemDatabase.filter((item, index) => !isItemExcluded(index, false));

			
			if (allowHomebrew) {
				// Filter out excluded items from homebrew database
				const includedHomebrewItems = homebrewItemDatabase.filter((item, index) => !isItemExcluded(index, true));
				// Merge official and homebrew items for shop generation
				itemDatabase = [...includedOfficialItems, ...includedHomebrewItems];
			} else {
				// Use only official items for shop generation
				itemDatabase = [...includedOfficialItems];
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

		function sortItemList(column) {
		    if (officialSortColumn === column) {
		        officialSortDirection = officialSortDirection === 'asc' ? 'desc' : 'asc';
		    } else {
		        officialSortColumn = column;
		        officialSortDirection = 'asc';
		    }
		    populateItemList();
		}
		
		function sortHomebrewList(column) {
		    if (homebrewSortColumn === column) {
		        homebrewSortDirection = homebrewSortDirection === 'asc' ? 'desc' : 'asc';
		    } else {
		        homebrewSortColumn = column;
		        homebrewSortDirection = 'asc';
		    }
		    populateHomebrewList();
		}



				// Populate the item list table
		function populateItemList(filteredItems = null) {
			const tbody = document.getElementById('item-table-body');
			// Always use officialItemDatabase only - never mix in homebrew here
			const items = (filteredItems || officialItemDatabase).slice().sort((a, b) => {
			    let aVal, bVal;
			    if (officialSortColumn === 'cost') {
			        aVal = a.cost;
			        bVal = b.cost;
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
				// Find the original index in officialItemDatabase
				const originalIndex = officialItemDatabase.findIndex(i => i.name === item.name);
				const isExcluded = isItemExcluded(originalIndex, false);
				const row = document.createElement('tr');
				row.id = `item-row-${originalIndex}`;
						
				const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
				
			const descriptorCount = (item.descriptors && item.descriptors.length) || 0;
			
			row.innerHTML = `
			    <td><input type="checkbox" ${isExcluded ? '' : 'checked'} onchange="toggleItemExclusion(${originalIndex}, false); populateItemList();" title="Include in shop generation"></td>
			    <td>${item.name}</td>
			    <td>${item.cost}</td>
			    <td>${item.type}</td>
			    <td class="${rarityClass}">${item.rarity}</td>
			    <td style="max-width: 400px;">${item.description || 'No description'}</td>
			    <td>
			        <button class="edit-btn" onclick="editItem(${originalIndex})">Edit</button>
			        <button class="descriptor-btn" onclick="toggleDescriptorEdit(${originalIndex}, false)" title="Edit Flavor Text (${descriptorCount})">📝 Flavor Text (${descriptorCount})</button>
			    </td>
			`;
				
				tbody.appendChild(row);
			});
		}
		
		
				// Edit an item
		let currentlyEditingIndex = null;
		let descriptorEditingIndex = null; 

		function editItem(index) {
			const isExcluded = isItemExcluded(index, false);

			// If already editing another item, cancel that first
			if (currentlyEditingIndex !== null && currentlyEditingIndex !== index) {
				cancelEdit(currentlyEditingIndex);
			}
			
			currentlyEditingIndex = index;
			const item = officialItemDatabase[index];
			const row = document.getElementById('item-row-' + index);
			
			const rarityOptions = ['Mundane', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'];
			const typeOptions = ['Weapon', 'Armor', 'Ammunition', 'Apperal', 'Jewelry', 'Misc'];
			
			const typeOptionsHtml = typeOptions.map(function(type) {
				return '<option value="' + type + '" ' + (item.type === type ? 'selected' : '') + '>' + type + '</option>';
			}).join('');
			
			const rarityOptionsHtml = rarityOptions.map(function(rarity) {
				return '<option value="' + rarity + '" ' + (item.rarity === rarity ? 'selected' : '') + '>' + rarity + '</option>';
			}).join('');
			
			const descriptorCount = (item.descriptors && item.descriptors.length) || 0;
			
			row.innerHTML = 
			    '<td><input type="checkbox" ' + (isExcluded ? '' : 'checked') + ' onchange="toggleItemExclusion(' + index + ', false);" title="Include in shop generation"></td>' +
			    '<td><input type="text" class="item-edit-input" id="edit-name-' + index + '" value="' + item.name + '"></td>' +
			    '<td><input type="number" class="item-edit-input" id="edit-cost-' + index + '" value="' + item.cost + '" step="0.01"></td>' +
			    '<td><select class="item-edit-select" id="edit-type-' + index + '">' + typeOptionsHtml + '</select></td>' +
			    '<td><select class="item-edit-select" id="edit-rarity-' + index + '">' + rarityOptionsHtml + '</select></td>' +
			    '<td><textarea class="item-edit-textarea" id="edit-desc-' + index + '">' + (item.description || '') + '</textarea></td>' +
			    '<td><button class="save-btn" onclick="saveItem(' + index + ')">Save</button>' +
			    '<button class="cancel-btn" onclick="cancelEdit(' + index + ')">Cancel</button><br>' +
			    '<button class="descriptor-btn" onclick="toggleDescriptorEdit(' + index + ', false)">📝 Flavor Text (' + descriptorCount + ')</button></td>';
		}
		
		
			// Save edited item
		function saveItem(index) {
			const item = officialItemDatabase[index];
			
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

// ===== DESCRIPTOR EDITOR FUNCTIONS =====

function toggleDescriptorEdit(index, isHomebrew) {
    const database = isHomebrew ? homebrewItemDatabase : officialItemDatabase;
    const item = database[index];
    const rowId = isHomebrew ? `homebrew-row-${index}` : `item-row-${index}`;
    const row = document.getElementById(rowId);
    
    let descriptorRow = document.getElementById(`descriptor-row-${isHomebrew ? 'hb-' : ''}${index}`);
    
    if (descriptorRow) {
        descriptorRow.remove();
        descriptorEditingIndex = null;
        return;
    }
    
    descriptorRow = document.createElement('tr');
    descriptorRow.id = `descriptor-row-${isHomebrew ? 'hb-' : ''}${index}`;
    descriptorRow.className = 'descriptor-editor-row';
    
    const descriptors = item.descriptors || [];
    
    let descriptorHTML = `
        <td colspan="7" class="descriptor-editor-cell">
            <div class="descriptor-editor">
                <h4>Flavor Text for: ${item.name}</h4>
                <p class="descriptor-help">Add flavor text descriptions that will be randomly shown when this item appears in shops or loot.</p>
                <div id="descriptor-list-${isHomebrew ? 'hb-' : ''}${index}" class="descriptor-list">
    `;
    
    descriptors.forEach((desc, descIndex) => {
        descriptorHTML += `
            <div class="descriptor-item" id="descriptor-${isHomebrew ? 'hb-' : ''}${index}-${descIndex}">
                <textarea class="descriptor-textarea" id="desc-text-${isHomebrew ? 'hb-' : ''}${index}-${descIndex}">${desc}</textarea>
                <button class="delete-descriptor-btn" onclick="deleteDescriptor(${index}, ${descIndex}, ${isHomebrew})">🗑️</button>
            </div>
        `;
    });
    
    if (descriptors.length === 0) {
        descriptorHTML += '<p class="no-descriptors">No flavor text yet. Click "Add Descriptor" to create one.</p>';
    }
    
    descriptorHTML += `
                </div>
                <div class="descriptor-actions">
                    <button class="add-descriptor-btn" onclick="addDescriptor(${index}, ${isHomebrew})">+ Add Flavor Text</button>
                    <button class="save-descriptors-btn" onclick="saveDescriptors(${index}, ${isHomebrew})">💾 Save All</button>
                    <button class="cancel-descriptors-btn" onclick="toggleDescriptorEdit(${index}, ${isHomebrew})">Close</button>
                </div>
            </div>
        </td>
    `;
    
    descriptorRow.innerHTML = descriptorHTML;
    row.parentNode.insertBefore(descriptorRow, row.nextSibling);
    descriptorEditingIndex = index;
}

function addDescriptor(index, isHomebrew) {
    const listId = `descriptor-list-${isHomebrew ? 'hb-' : ''}${index}`;
    const list = document.getElementById(listId);
    const database = isHomebrew ? homebrewItemDatabase : officialItemDatabase;
    const item = database[index];
    
    const noDescMsg = list.querySelector('.no-descriptors');
    if (noDescMsg) noDescMsg.remove();
    
    if (!item.descriptors) item.descriptors = [];
    
    const newIndex = list.querySelectorAll('.descriptor-item').length;
    
    const descriptorDiv = document.createElement('div');
    descriptorDiv.className = 'descriptor-item';
    descriptorDiv.id = `descriptor-${isHomebrew ? 'hb-' : ''}${index}-${newIndex}`;
    descriptorDiv.innerHTML = `
        <textarea class="descriptor-textarea" id="desc-text-${isHomebrew ? 'hb-' : ''}${index}-${newIndex}" placeholder="Enter flavor text..."></textarea>
        <button class="delete-descriptor-btn" onclick="deleteDescriptor(${index}, ${newIndex}, ${isHomebrew})">🗑️</button>
    `;
    
    list.appendChild(descriptorDiv);
    descriptorDiv.querySelector('textarea').focus();
}

function deleteDescriptor(index, descIndex, isHomebrew) {
    const descriptorId = `descriptor-${isHomebrew ? 'hb-' : ''}${index}-${descIndex}`;
    const descriptorDiv = document.getElementById(descriptorId);
    
    if (confirm('Delete this descriptor?')) {
        descriptorDiv.remove();
    }
}

function saveDescriptors(index, isHomebrew) {
    const database = isHomebrew ? homebrewItemDatabase : officialItemDatabase;
    const item = database[index];
    const listId = `descriptor-list-${isHomebrew ? 'hb-' : ''}${index}`;
    const list = document.getElementById(listId);
    
    const newDescriptors = [];
    const textareas = list.querySelectorAll('.descriptor-textarea');
    
    textareas.forEach(textarea => {
        const text = textarea.value.trim();
        if (text) newDescriptors.push(text);
    });
    
    item.descriptors = newDescriptors;
    saveIndividualItemEdit(index, isHomebrew);
    
    alert(`Saved ${newDescriptors.length} flavor text for ${item.name}`);
    toggleDescriptorEdit(index, isHomebrew);
    
    if (isHomebrew) {
        populateHomebrewList();
    } else {
        populateItemList();
    }
}

// ===== END DESCRIPTOR EDITOR FUNCTIONS =====

		// Filter items
		function applyItemFilters() {
			const searchTerm = document.getElementById('item-search').value.toLowerCase();
			const filterType = document.getElementById('filter-type').value;
			const filterRarity = document.getElementById('filter-rarity').value;
			
			const filtered = officialItemDatabase.filter(item => {
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
                'hamlet': { common: 0.04, uncommon: 0.008, rare: 0.0015, veryRare: 0.001, legendary: 0.0005 },				
                'village': { common: 0.06, uncommon: 0.01, rare: 0.002, veryRare: 0.001, legendary: 0.0005 },
                'town': { common: 0.12, uncommon: 0.06, rare: 0.01, veryRare: 0.002, legendary: 0.001 },
                'smallcity': { common: 0.20, uncommon: 0.1, rare: 0.03, veryRare: 0.015, legendary: 0.005 },
                'city': { common: 0.25, uncommon: 0.15, rare: 0.06, veryRare: 0.03, legendary: 0.005 },
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
                'hamlet': 'common',
                'village': 'uncommon',
                'town': 'rare',
                'smallcity': 'rare',
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
			
		// Add 20-70% of mundane items (with individual limit) - more variation
		const mundanePercentage = (Math.random() * 0.5);
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
			
			// Add randomization factor - multiply base probability by 0.2 to 1.5
			const randomFactor = (Math.random() * .8);
			const adjustedProb = isHealingPotion(item) ? prob * 3 * randomFactor : prob * randomFactor;
			
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
    
    const isHomebrew = homebrewItemDatabase.some(hbItem => hbItem.name === item.name);
    const homebrewBadge = isHomebrew ? ' <span class="homebrew-badge">🔮 Homebrew</span>' : '';
    
    // ADD THESE LINES:
    const descriptor = getRandomDescriptor(item);
    const descriptorHTML = descriptor ? `<div class="item-descriptor" style="font-style: italic; color: #a89968; margin-top: 5px; font-size: 0.9em;">${descriptor}</div>` : '';
    
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
            ${descriptorHTML}  <!-- ADD THIS LINE -->
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

			// Generate shopkeeper
			const wealthLevel = document.getElementById('wealth-level').value;
			const shopkeeper = generateShopkeeper(storeType, settlementSize, wealthLevel);
			
			let html = `
				<div class="shop-info">
					<h2>${storeIcons[storeType]} ${storeNames[storeType]} - ${settlementSize.charAt(0).toUpperCase() + settlementSize.slice(1)}</h2>
					<div style="margin-top: 15px; padding: 15px; background: rgba(139, 111, 71, 0.15); border-radius: 5px; border-left: 3px solid #d4af37;">
						<p style="margin-bottom: 8px;"><strong style="color: #d4af37;">Proprietor:</strong> ${shopkeeper.name}, ${shopkeeper.race}</p>
						<p style="margin-bottom: 8px;"><strong style="color: #d4af37;">Available Gold:</strong> ${shopkeeper.goldAvailable} gp </p>
						<p style="margin-bottom: 8px; font-style: italic; color: #c4b591;">${shopkeeper.name} ${shopkeeper.description}.</p>
						<p style="color: #a89968; font-size: 0.9em;"><em>Quirk:</em> ${shopkeeper.quirk}</p>
					</div>
					<p style="margin-top: 15px;"><strong>Total Items:</strong> ${inventory.length} | <strong>Price Variance:</strong> 100% - ${maxModifier}% | <strong>Max Rarity:</strong> ${rarityNames[rarityLevels[maxRarity]]}</p>
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
	
	const items = (filteredItems || homebrewItemDatabase).slice().sort((a, b) => {
	    let aVal, bVal;
	    if (homebrewSortColumn === 'cost') {
	        aVal = a.cost;
	        bVal = b.cost;
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
	console.log('Items to display:', items.length);
	
	tbody.innerHTML = '';
	
	items.forEach((item, index) => {
		// Find the original index in homebrewItemDatabase
		const originalIndex = homebrewItemDatabase.findIndex(i => i.name === item.name);
		const isExcluded = isItemExcluded(originalIndex, true);
		const row = document.createElement('tr');
		row.id = `homebrew-row-${originalIndex}`;
		
		const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;


const descriptorCount = (item.descriptors && item.descriptors.length) || 0;

row.innerHTML = `
    <td><input type="checkbox" ${isExcluded ? '' : 'checked'} onchange="toggleItemExclusion(${originalIndex}, false); populateHomebrewList();" title="Include in shop generation"></td>
    <td>${item.name}</td>
    <td>${item.cost}</td>
    <td>${item.type}</td>
    <td class="${rarityClass}">${item.rarity}</td>
    <td style="max-width: 400px;">${item.description || 'No description'}</td>
    <td>
        <button class="edit-btn" onclick="editHomebrewItem(${originalIndex})">Edit</button>
        <button class="descriptor-btn" onclick="toggleDescriptorEdit(${originalIndex}, false)" title="Edit flavor text (${descriptorCount})">📝 Flavor Text (${descriptorCount})</button>
    </td>
`;
		
		

		tbody.appendChild(row);
	});
	
	console.log('Rows added:', tbody.children.length);
}

// Edit a homebrew item
let currentlyEditingHomebrewIndex = null;

function editHomebrewItem(index) {
	const isExcluded = isItemExcluded(index, true);

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


const descriptorCount = (item.descriptors && item.descriptors.length) || 0;

row.innerHTML = 
    '<td><input type="checkbox" ' + (isExcluded ? '' : 'checked') + ' onchange="toggleItemExclusion(' + index + ', false);" title="Include in shop generation"></td>' +
    '<td><input type="text" class="item-edit-input" id="edit-homebrew-name-' + index + '" value="' + item.name + '"></td>' +
    '<td><input type="number" class="item-edit-input" id="edit-homebrew-cost-' + index + '" value="' + item.cost + '" step="0.01"></td>' +
    '<td><select class="item-edit-select" id="edit-homebrew-type-' + index + '">' + typeOptionsHtml + '</select></td>' +
    '<td><select class="item-edit-select" id="edit-homebrew-rarity-' + index + '">' + rarityOptionsHtml + '</select></td>' +
    '<td><textarea class="item-edit-textarea" id="edit-homebrew-desc-' + index + '">' + (item.description || '') + '</textarea></td>' +
    '<td><button class="save-btn" onclick="saveHomebrewItem(' + index + ')">Save</button>' +
    '<button class="cancel-btn" onclick="cancelHomebrewEdit(' + index + ')">Cancel</button><br>' +
    '<button class="descriptor-btn" onclick="toggleDescriptorEdit(' + index + ', false)">📝 Flavor Text (' + descriptorCount + ')</button></td>';
	
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

	const wealthLevel = document.getElementById('wealth-level').value;
	
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
    const descriptorEl = itemEl.querySelector('.item-descriptor'); // ADD THIS LINE
    
    if (nameEl && priceEl) {
        let itemName = nameEl.textContent.trim();
        itemName = itemName.replace(/\s*\(×\d+\)\s*/g, '');
        itemName = itemName.replace(/\s*⭐\s*/g, '');
        itemName = itemName.replace(/\s*🔮 Homebrew\s*/g, '');
        
        const originalItem = itemDatabase.find(item => item.name === itemName);
        
        if (originalItem) {
            inventory.push({
                ...originalItem,
                displayPrice: priceEl.textContent.trim(),
                savedDescriptor: descriptorEl ? descriptorEl.textContent.trim() : null  // ADD THIS LINE
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
	    wealthLevel: wealthLevel,  // Add this line
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

	const shopkeeper = generateShopkeeper(store.storeType, store.settlementSize, store.wealthLevel || 'common');
	
let html = `
    <div class="shop-info">
        <h2>${storeIcons[store.storeType]} ${storeNames[store.storeType]} - ${store.settlementSize.charAt(0).toUpperCase() + store.settlementSize.slice(1)}</h2>
        <div style="margin-top: 15px; padding: 15px; background: rgba(139, 111, 71, 0.15); border-radius: 5px; border-left: 3px solid #d4af37;">
            <p style="margin-bottom: 8px;"><strong style="color: #d4af37;">Proprietor:</strong> ${shopkeeper.name}, ${shopkeeper.race}</p>
            <p style="margin-bottom: 8px;"><strong style="color: #d4af37;">Available Gold:</strong> ${shopkeeper.goldAvailable} gp </p>
            <p style="margin-bottom: 8px; font-style: italic; color: #c4b591;">${shopkeeper.name} ${shopkeeper.description}.</p>
            <p style="color: #a89968; font-size: 0.9em;"><em>Quirk:</em> ${shopkeeper.quirk}</p>
        </div>
        <p style="margin-top: 15px;"><strong>Saved Store:</strong> ${store.name} | <strong>Total Items:</strong> ${store.inventory.length} | <strong>Max Rarity:</strong> ${rarityNames[rarityLevels[store.maxRarity]]}</p>
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
			
			// For Mundane Items:
			mundaneItems.sort((a, b) => a.name.localeCompare(b.name));
			for (const item of mundaneItems) {
			    const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
			    const isHomebrew = homebrewItemDatabase.some(hbItem => hbItem.name === item.name);
			    const homebrewBadge = isHomebrew ? ' <span class="homebrew-badge">🔮 Homebrew</span>' : '';
			    const descriptorHTML = item.savedDescriptor ? `<div class="item-descriptor" style="font-style: italic; color: #a89968; margin-top: 5px; font-size: 0.9em;">${item.savedDescriptor}</div>` : '';  // ADD THIS
			    
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
			            ${descriptorHTML}  <!-- ADD THIS LINE -->
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
			
			// For Magic Items (same pattern):
			magicItems.sort((a, b) => a.name.localeCompare(b.name));
			for (const item of magicItems) {
			    const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
			    const isHomebrew = homebrewItemDatabase.some(hbItem => hbItem.name === item.name);
			    const homebrewBadge = isHomebrew ? ' <span class="homebrew-badge">🔮 Homebrew</span>' : '';
			    const descriptorHTML = item.savedDescriptor ? `<div class="item-descriptor" style="font-style: italic; color: #a89968; margin-top: 5px; font-size: 0.9em;">${item.savedDescriptor}</div>` : '';  // ADD THIS
			    
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
			            ${descriptorHTML}  <!-- ADD THIS LINE -->
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

// ===== LOOT GENERATOR FUNCTIONS =====

function switchLootTab(tabName) {
    // Hide all loot sections
    document.querySelectorAll('.loot-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.loot-subtab').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(tabName + '-loot').classList.add('active');
    event.target.classList.add('active');
}

// Loot data tables
const lootTables = {
    currency: {
        '0-4': { cp: [0, 50], sp: [0, 50], gp: [2, 10], pp: [0, 0] },
        '5-10': { cp: [0, 0], sp: [10, 100], gp: [10, 50], pp: [1, 10] },
        '11-16': { cp: [0, 0], sp: [0, 0], gp: [50, 500], pp: [5, 50] },
        '17+': { cp: [0, 0], sp: [0, 0], gp: [500, 5000], pp: [50, 500] }
    },
    
    gems: {
        '10gp': ['Azurite', 'Banded agate', 'Blue quartz', 'Eye agate', 'Hematite', 'Lapis lazuli', 'Malachite', 'Moss agate', 'Obsidian', 'Rhodochrosite', 'Tiger eye', 'Turquoise'],
        '50gp': ['Bloodstone', 'Carnelian', 'Chalcedony', 'Chrysoprase', 'Citrine', 'Jasper', 'Moonstone', 'Onyx', 'Quartz', 'Sardonyx', 'Star rose quartz', 'Zircon'],
        '100gp': ['Amber', 'Amethyst', 'Chrysoberyl', 'Coral', 'Garnet', 'Jade', 'Jet', 'Pearl', 'Spinel', 'Tourmaline'],
        '500gp': ['Alexandrite', 'Aquamarine', 'Black pearl', 'Blue spinel', 'Peridot', 'Topaz'],
        '1000gp': ['Black opal', 'Blue sapphire', 'Emerald', 'Fire opal', 'Opal', 'Star ruby', 'Star sapphire', 'Yellow sapphire'],
        '5000gp': ['Black sapphire', 'Diamond', 'Jacinth', 'Ruby']
    },
    
    artObjects: {
        '25gp': ['Silver ewer', 'Carved bone statuette', 'Small gold bracelet', 'Cloth-of-gold vestments'],
        '250gp': ['Gold ring set with bloodstones', 'Carved ivory statuette', 'Large gold bracelet', 'Silver necklace with a gemstone pendant'],
        '750gp': ['Silver chalice with moonstones', 'Silver-plated steel longsword', 'Carved harp of exotic wood', 'Small gold idol'],
        '2500gp': ['Gold ring set with diamonds', 'Gold music box', 'Gold circlet with gems', 'Jeweled gold crown'],
        '7500gp': ['Jeweled platinum ring', 'Small mithral statue', 'Gold cup set with emeralds', 'Gold jewelry box with platinum filigree']
    },
    
creatureThemes: {
    humanoid: [
        { name: 'Worn leather pouch', value: '1-5 sp', description: 'Contains a few copper coins, lint, and a brass button' },
        { name: 'Silver signet ring', value: '10 gp', description: 'Bears an unfamiliar family crest' },
        { name: 'Love letter', value: '0 gp', description: 'Reveals a tragic romance or useful blackmail material' },
        { name: 'Wanted poster', value: '0 gp', description: 'Shows a bounty for someone the party might know' },
        { name: 'Iron rations (3 days)', value: '3 gp', description: 'Dried meat, hardtack, and stale cheese' },
        { name: 'Thieves\' tools', value: '25 gp', description: 'Well-used but functional lockpicks' },
        { name: 'Half-empty flask of cheap whiskey', value: '5 cp', description: 'Burns on the way down' },
        { name: 'Jade gambling die', value: '15 gp', description: 'Weighted - grants advantage on deception checks about gambling' },
        { name: 'Treasure map fragment', value: '??? gp', description: 'Shows 1/3 of a larger map to unknown riches' },
        { name: 'Identification papers', value: '0 gp', description: 'Could be useful for disguises or forging documents' }
    ],
    beast: [
        { name: 'Pristine wolf pelt', value: '5 gp', description: 'Can be sold to a furrier or worn as a cloak' },
        { name: 'Bear claws (4)', value: '8 gp', description: 'Trophy or crafting component for weapons' },
        { name: 'Dire boar tusks (pair)', value: '15 gp', description: 'Large enough to craft into daggers or decorations' },
        { name: 'Giant eagle feather', value: '10 gp', description: 'Sought by druids and arrow-crafters' },
        { name: 'Venomous snake fangs', value: '20 gp', description: 'Can be sold to alchemists or poisoners' },
        { name: 'Owl bear beak', value: '25 gp', description: 'Impressive trophy, intimidating when displayed' },
        { name: 'Phase spider silk gland', value: '50 gp', description: 'Valuable to wizards studying planar magic' },
        { name: 'Displacer beast tentacle', value: '75 gp', description: 'Still twitches occasionally, used in illusion magic' },
        { name: 'Basilisk eye', value: '100 gp', description: 'Intact and unpetrified - extremely valuable to alchemists' },
        { name: 'Perfectly preserved pelt', value: '30 gp', description: 'No damage, can fetch premium price' }
    ],
    dragon: [
        { name: 'Dragon scale (small)', value: '50 gp', description: 'Size of a dinner plate, shimmers in light' },
        { name: 'Dragon tooth', value: '75 gp', description: 'As long as a shortsword, can be carved into a weapon' },
        { name: 'Vial of dragon blood', value: '100 gp', description: 'Still warm, powerful potion ingredient' },
        { name: 'Broken dragon egg shell', value: '200 gp', description: 'Collectors and scholars pay well for these' },
        { name: 'Dragon claw', value: '150 gp', description: 'Could be mounted as a trophy or crafted into a weapon' },
        { name: 'Prismatic dragon scale', value: '500 gp', description: 'Shimmers with all colors, extremely rare' },
        { name: 'Ancient coin hoard (small)', value: '3d10×10 gp', description: 'Mix of old currencies from forgotten kingdoms' },
        { name: 'Gem-encrusted goblet', value: '250 gp', description: 'Part of a dragon\'s collected treasure' },
        { name: 'Dragon bone shard', value: '80 gp', description: 'Dense and magically resonant, crafting material' },
        { name: 'Scorched noble\'s crown', value: '300 gp', description: 'Melted gold with embedded rubies, sad trophy' }
    ],
    undead: [
        { name: 'Burial shroud', value: '5 gp', description: 'Ancient but intact, faint necromantic aura' },
        { name: 'Tarnished silver pendant', value: '15 gp', description: 'Shows a face the deceased loved in life' },
        { name: 'Funerary coins (2)', value: '10 gp', description: 'Placed over the eyes, from a forgotten civilization' },
        { name: 'Cracked burial urn', value: '20 gp', description: 'Contains ancient ash and bone fragments' },
        { name: 'Faded death certificate', value: '0 gp', description: 'Dated centuries ago, strange cause of death listed' },
        { name: 'Grave dust pouch', value: '25 gp', description: 'Valuable to necromancers and certain clerics' },
        { name: 'Cursed locket', value: '50 gp', description: 'Shows a different person each time it opens' },
        { name: 'Bone fragments', value: '15 gp', description: 'Can be used as necromancy components' },
        { name: 'Ancient burial jewelry', value: '75 gp', description: 'Corroded copper with semi-precious stones' },
        { name: 'Phylactery shard', value: '200 gp', description: 'Fragment of a destroyed lich\'s soul vessel' }
    ],
    fiend: [
        { name: 'Infernal contract', value: '0 gp', description: 'Names someone\'s sold soul, might be used to free them' },
        { name: 'Sulfur crystal', value: '25 gp', description: 'Smells terrible, component for summoning magic' },
        { name: 'Demon ichor vial', value: '75 gp', description: 'Corrosive black liquid, valuable and dangerous' },
        { name: 'Hellish coin', value: '50 gp', description: 'Burns to touch without protection, cursed currency' },
        { name: 'Soul gem shard', value: '100 gp', description: 'Whispers can be heard from within' },
        { name: 'Infernal iron spike', value: '40 gp', description: 'Always uncomfortably warm to touch' },
        { name: 'Scorched brimstone', value: '20 gp', description: 'Permanent ember glow, component for fire magic' },
        { name: 'Devil\'s tongue', value: '150 gp', description: 'Preserved, grants one who eats it the ability to speak Infernal' },
        { name: 'Corrupted holy symbol', value: '60 gp', description: 'Twisted mockery of a good deity\'s symbol' },
        { name: 'Contract fragment', value: '0 gp', description: 'Partial terms of a dark bargain, could be valuable information' }
    ],
    celestial: [
        { name: 'Angel feather', value: '100 gp', description: 'Pure white, provides light when held by the righteous' },
        { name: 'Holy water (2 vials)', value: '50 gp', description: 'Blessed in the Upper Planes' },
        { name: 'Sacred hymn sheet', value: '25 gp', description: 'Music that soothes the soul and repels undead' },
        { name: 'Celestial copper', value: '75 gp', description: 'Never tarnishes, warm to touch' },
        { name: 'Blessed chain links', value: '40 gp', description: 'From broken celestial chains, radiates goodness' },
        { name: 'Divinity shard', value: '200 gp', description: 'Crystallized fragment of divine essence' },
        { name: 'Halo fragment', value: '150 gp', description: 'Glows faintly, provides comfort to good creatures' },
        { name: 'Trumpet mouthpiece', value: '80 gp', description: 'From a celestial herald\'s horn' },
        { name: 'Blessed bandages', value: '30 gp', description: 'Provide advantage on Medicine checks' },
        { name: 'Prayer beads', value: '50 gp', description: 'Carved from celestial wood, enhance divine magic' }
    ],
    fey: [
        { name: 'Pixie dust pouch', value: '75 gp', description: 'Causes uncontrollable laughter when inhaled' },
        { name: 'Enchanted acorn', value: '25 gp', description: 'Grows into a full oak tree in 1 hour, lasts 1 day' },
        { name: 'Fey flower crown', value: '50 gp', description: 'Never wilts, makes wearer appear charming' },
        { name: 'Glamoured mirror shard', value: '100 gp', description: 'Shows your idealized reflection' },
        { name: 'Sprite wings (pair)', value: '60 gp', description: 'Iridescent, valuable to fey scholars' },
        { name: 'Moonlight captured in a bottle', value: '150 gp', description: 'Glows with silvery light, doesn\'t expire' },
        { name: 'Satyr\'s pipes', value: '80 gp', description: 'Cracked but playable, music causes dancing' },
        { name: 'Wild fey honey', value: '40 gp', description: 'Tastes of dreams, mild psychedelic effect' },
        { name: 'Dryad\'s bark piece', value: '35 gp', description: 'Still living, speaks to druids' },
        { name: 'Fey pact token', value: '??? gp', description: 'Bearer is owed a favor by a powerful fey' }
    ],
    elemental: [
        { name: 'Fire elemental ember', value: '50 gp', description: 'Never goes out, provides heat and light' },
        { name: 'Bottled storm', value: '75 gp', description: 'Vial of swirling clouds, lightning flickers inside' },
        { name: 'Earth elemental core', value: '100 gp', description: 'Dense stone that feels alive' },
        { name: 'Frozen wind sample', value: '60 gp', description: 'Solid air that gradually sublimates' },
        { name: 'Living water flask', value: '45 gp', description: 'Water that moves on its own' },
        { name: 'Magma glass', value: '80 gp', description: 'Obsidian that\'s still warm from the Plane of Fire' },
        { name: 'Solidified smoke', value: '40 gp', description: 'Wispy but tangible, used in illusion magic' },
        { name: 'Lightning in a bottle', value: '150 gp', description: 'Crackles constantly, dangerous to open' },
        { name: 'Elemental salt', value: '30 gp', description: 'From the Plane of Earth, enhances transmutation magic' },
        { name: 'Prismatic dust', value: '200 gp', description: 'Contains essence from all elemental planes' }
    ],
    aberration: [
        { name: 'Mind flayer tentacle', value: '100 gp', description: 'Preserved, still psychically active' },
        { name: 'Beholder eye stalk', value: '150 gp', description: 'Retains a trace of its antimagic properties' },
        { name: 'Gibbering mouther tooth', value: '25 gp', description: 'Whispers nonsense when held' },
        { name: 'Void crystal', value: '200 gp', description: 'Hurts to look at, from the Far Realm' },
        { name: 'Aberrant brain matter', value: '75 gp', description: 'Still thinking terrible thoughts' },
        { name: 'Alien metal fragment', value: '80 gp', description: 'Not from this plane, impossibly light' },
        { name: 'Psychic residue', value: '50 gp', description: 'Crystallized nightmare, component for mind magic' },
        { name: 'Star spawn ichor', value: '120 gp', description: 'Glows with unnatural light, corrupting influence' },
        { name: 'Impossible geometry diagram', value: '0 gp', description: 'Studying it grants insight into alien mathematics' },
        { name: 'Madness stone', value: '60 gp', description: 'Whispers secrets that shouldn\'t be known' }
    ],
    monstrosity: [
        { name: 'Chimera horn', value: '80 gp', description: 'From the goat head, spiraled and impressive' },
        { name: 'Gorgon plate', value: '100 gp', description: 'Metallic scale, extremely durable' },
        { name: 'Manticore tail spike', value: '25 gp', description: 'Poisonous, can be used as an arrow' },
        { name: 'Hydra tooth', value: '50 gp', description: 'Constantly trying to regenerate' },
        { name: 'Cockatrice beak', value: '75 gp', description: 'Retains petrification magic residue' },
        { name: 'Griffin feather', value: '40 gp', description: 'Sought by nobles for decorations' },
        { name: 'Wyvern stinger', value: '90 gp', description: 'Size of a shortsword, extremely toxic' },
        { name: 'Roper tentacle', value: '60 gp', description: 'Sticky even in death' },
        { name: 'Rust monster antenna', value: '150 gp', description: 'Ironically valuable despite rusting metal' },
        { name: 'Behir scale', value: '120 gp', description: 'Crackles with residual lightning' }
    ],
    giant: [
        { name: 'Giant\'s tooth', value: '30 gp', description: 'Size of a fist, can be carved into dice' },
        { name: 'Oversized ring', value: '50 gp', description: 'Sized for a giant, worth melting down' },
        { name: 'Crude tribal necklace', value: '40 gp', description: 'Bones, stones, and scrap metal' },
        { name: 'Giant\'s belt', value: '25 gp', description: 'Can be cut into high-quality leather straps' },
        { name: 'Stone-tipped spear', value: '15 gp', description: 'Giant-sized, crude but effective' },
        { name: 'Tribal banner', value: '20 gp', description: 'Shows allegiance, intelligence gathering' },
        { name: 'Mammoth tusk carving', value: '75 gp', description: 'Giant art, depicts their history' },
        { name: 'Giant beer mug', value: '10 gp', description: 'Holds 2 gallons, poorly crafted' },
        { name: 'Cloud giant silk scarf', value: '200 gp', description: 'Massive but incredibly fine' },
        { name: 'Rune-carved stone', value: '100 gp', description: 'Giant language, might contain magic' }
    ],
    construct: [
        { name: 'Clockwork gears (set)', value: '50 gp', description: 'Precision-made, valuable to tinkers' },
        { name: 'Arcane battery', value: '100 gp', description: 'Holds residual magical charge' },
        { name: 'Mithral spring', value: '150 gp', description: 'From a destroyed construct\'s core' },
        { name: 'Runic circuitry', value: '80 gp', description: 'Magical wiring, can be studied or repurposed' },
        { name: 'Animation crystal', value: '200 gp', description: 'Cracked but still resonating with magic' },
        { name: 'Golem clay', value: '60 gp', description: 'Enchanted, never fully hardens' },
        { name: 'Mechanical eye lens', value: '75 gp', description: 'See-through crystal with perfect clarity' },
        { name: 'Animated armor plates', value: '90 gp', description: 'Still trying to move on their own' },
        { name: 'Homunculus wing', value: '40 gp', description: 'Delicate mechanical marvel' },
        { name: 'Core gem fragment', value: '250 gp', description: 'Contains the construct\'s former consciousness' }
    ]
}
};

function generateCombatLoot() {
    const partyLevel = parseInt(document.getElementById('party-level').value);
    const encounterCR = parseFloat(document.getElementById('encounter-cr').value);
    const numCreatures = parseInt(document.getElementById('num-creatures').value);
    const creatureType = document.getElementById('creature-type').value;
    const includeBoss = document.getElementById('boss-loot').checked;
    const includeMagic = document.getElementById('combat-include-magic').checked;
    const includeHomebrew = document.getElementById('combat-include-homebrew').checked;
    
    // Determine CR tier
    let crTier = '0-4';
    if (encounterCR >= 17) crTier = '17+';
    else if (encounterCR >= 11) crTier = '11-16';
    else if (encounterCR >= 5) crTier = '5-10';
    
    const loot = {
        currency: generateCurrency(crTier, numCreatures, 0.3),
        items: [],
        magicItems: [],
        specialDrops: []
    };
    
    // Add creature-specific drops
    const themes = lootTables.creatureThemes[creatureType] || [];
    themes.forEach(theme => {
        if (Math.random() < 0.4) {
            loot.specialDrops.push(generateThemeItem(theme, creatureType));
        }
    });
    
	// Add equipment from humanoids
	if (creatureType === 'humanoid') {
	    const numCreatures = parseInt(document.getElementById('num-creatures').value);
	    
	    // Calculate variety: square root of enemies + 1, minimum 1
	    const weaponVariety = Math.max(1, Math.floor(Math.sqrt(numCreatures)) + 1);
	    const armorVariety = Math.max(1, Math.floor(Math.sqrt(numCreatures)) + 1);
	    
	    // Get all available weapons and armor
	    const allWeapons = officialItemDatabase.filter(item => item.type === 'Weapon' && item.rarity === 'Mundane');
	    const allArmor = officialItemDatabase.filter(item => item.type === 'Armor' && item.rarity === 'Mundane');
	    
	    // Pick random weapon types (limited variety)
	    const weaponTypes = [];
	    for (let i = 0; i < Math.min(weaponVariety, allWeapons.length); i++) {
	        const randomWeapon = allWeapons[Math.floor(Math.random() * allWeapons.length)];
	        if (!weaponTypes.find(w => w.name === randomWeapon.name)) {
	            weaponTypes.push(randomWeapon);
	        }
	    }
	    
	    // Pick random armor types (limited variety)
	    const armorTypes = [];
	    for (let i = 0; i < Math.min(armorVariety, allArmor.length); i++) {
	        const randomArmor = allArmor[Math.floor(Math.random() * allArmor.length)];
	        if (!armorTypes.find(a => a.name === randomArmor.name)) {
	            armorTypes.push(randomArmor);
	        }
	    }
	    
	    // Distribute weapons among enemies (60% of enemies have weapons)
	    const numWeapons = Math.floor(numCreatures * 0.6);
	    for (let i = 0; i < numWeapons; i++) {
	        const weapon = weaponTypes[Math.floor(Math.random() * weaponTypes.length)];
	        loot.items.push({...weapon});
	    }
	    
	    // Distribute armor among enemies (40% of enemies have armor worth taking)
	    const numArmor = Math.floor(numCreatures * 0.4);
	    for (let i = 0; i < numArmor; i++) {
	        const armor = armorTypes[Math.floor(Math.random() * armorTypes.length)];
	        loot.items.push({...armor});
	    }
	}
    
    // Add magic items if enabled
    if (includeMagic) {
        loot.magicItems.push(...generateMagicItems(crTier, 0.5, includeHomebrew));
    }
    
    // Boss loot
    if (includeBoss) {
        loot.magicItems.push(...generateBossLoot(encounterCR, includeHomebrew));
    }
    
    displayLoot(loot, 'Combat Loot');
}

function generateTreasureHoard() {
    const crTier = document.getElementById('hoard-cr-tier').value;
    const hoardSize = document.getElementById('hoard-size').value;
    const theme = document.getElementById('hoard-theme').value;
    
    const sizeMultiplier = {
        'small': 0.5,
        'medium': 1,
        'large': 2,
        'legendary': 4
    };
    
    const loot = {
        currency: generateCurrency(crTier, 1, sizeMultiplier[hoardSize]),
        gems: generateGems(crTier, sizeMultiplier[hoardSize]),
        artObjects: generateArtObjects(crTier, sizeMultiplier[hoardSize]),
        magicItems: generateMagicItems(crTier, sizeMultiplier[hoardSize]),
        themeItems: generateThemedTreasure(theme, sizeMultiplier[hoardSize])
    };
    
    displayLoot(loot, `${theme.charAt(0).toUpperCase() + theme.slice(1)} Treasure Hoard`);
}

function generateCurrency(crTier, multiplier = 1, sizeMultiplier = 1) {
    const ranges = lootTables.currency[crTier];
    const currency = {};
   // console.log('Range00:', range[0].value);
    for (const [type, range] of Object.entries(ranges)) {
        if (range[1] > 0) {
//			        console.log('Range0:', range[0].value);
	//		console.log('Range1:', range[1].value);
            const amount = Math.floor((Math.random() * (range[1] - range[0]) + range[0]) * multiplier * sizeMultiplier);
            if (amount > 0) currency[type] = amount;
        }
    }
    
    return currency;
}

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

function generateMagicItems(crTier, sizeMultiplier, includeHomebrew = false) {
    const items = [];
    const crIndex = ['0-4', '5-10', '11-16', '17+'].indexOf(crTier);
    const numItems = Math.floor((Math.random() * 2 + crIndex) * sizeMultiplier);
    
    const rarities = [
        ['Common', 'Uncommon'],
        ['Uncommon', 'Rare'],
        ['Rare', 'Very Rare'],
        ['Very Rare', 'Legendary']
    ];
    
    const allowedRarities = rarities[crIndex];
    
    // Build item pool based on homebrew setting
    let itemPool = [...officialItemDatabase];
    if (includeHomebrew) {
        itemPool = [...itemPool, ...homebrewItemDatabase];
    }
    
    const availableItems = itemPool.filter(item => 
        allowedRarities.includes(item.rarity) && item.rarity !== 'Mundane'
    );
    
    for (let i = 0; i < numItems && availableItems.length > 0; i++) {
        const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
        items.push(randomItem);
    }
    
    return items;
}

function generateThemedTreasure(theme, sizeMultiplier) {
    const themedItems = {
        dragon: ['Ancient dragon scale', 'Hoarded gold statue', 'Gem-encrusted skull'],
        undead: ['Cursed burial shroud', 'Ancient burial urn', 'Necromantic tome fragment'],
        fey: ['Pixie dust vial', 'Enchanted flower crown', 'Fey-touched mirror'],
        elemental: ['Elemental core shard', 'Prismatic crystal', 'Bottled storm'],
        planar: ['Planar tuning fork', 'Astral compass', 'Void-touched amulet'],
        pirate: ['Treasure map fragment', 'Barnacle-covered chest', 'Captain\'s spyglass'],
        noble: ['Family seal ring', 'Ornate portrait', 'Deed to property'],
        ancient: ['Crumbling scroll', 'Worn statue fragment', 'Ancient coins'],
        generic: ['Mysterious trinket', 'Ornate key', 'Faded letter']
    };
    
    const items = themedItems[theme] || themedItems.generic;
    const numItems = Math.floor((Math.random() * 3 + 1) * sizeMultiplier);
    const selected = [];
    
    for (let i = 0; i < numItems; i++) {
        selected.push(items[Math.floor(Math.random() * items.length)]);
    }
    
    return selected;
}

function generateThemeItem(theme, creatureType) {
    const themeItems = lootTables.creatureThemes[creatureType];
    if (!themeItems || themeItems.length === 0) {
        return 'Strange item';
    }
    
    const item = themeItems[Math.floor(Math.random() * themeItems.length)];
    return item; // Return the full object with name, value, and description
}

function generateBossLoot(cr, includeHomebrew = false) {
    const items = [];
    const numItems = Math.max(1, Math.floor(cr / 5));
    
    const rarities = cr < 5 ? ['Uncommon'] : cr < 11 ? ['Uncommon', 'Rare'] : cr < 17 ? ['Rare', 'Very Rare'] : ['Very Rare', 'Legendary'];
    
    // Build item pool based on homebrew setting
    let itemPool = [...officialItemDatabase];
    if (includeHomebrew) {
        itemPool = [...itemPool, ...homebrewItemDatabase];
    }
    
    const availableItems = itemPool.filter(item => 
        rarities.includes(item.rarity)
    );
    
    for (let i = 0; i < numItems && availableItems.length > 0; i++) {
        const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
        items.push({ ...randomItem, isBossLoot: true });
    }
    
    return items;
}

function getRandomWeapon() {
    const weapons = officialItemDatabase.filter(item => item.type === 'Weapon' && item.rarity === 'Mundane');
    if (weapons.length === 0) return null;
    return weapons[Math.floor(Math.random() * weapons.length)];
}

function displayLoot(loot, title) {
    let html = `
        <div class="loot-summary">
            <h2>${title}</h2>
    `;
    
    // Calculate total value
    let totalValue = 0;
    if (loot.currency) {
        const currencyValues = { cp: 0.01, sp: 0.1, gp: 1, pp: 10 };
        for (const [type, amount] of Object.entries(loot.currency)) {
            totalValue += amount * currencyValues[type];
        }
    }
    
    html += `<div class="loot-total">Estimated Total Value: ${Math.round(totalValue)} gp</div>`;
    html += `</div>`;
    
    // Currency
    if (loot.currency && Object.keys(loot.currency).length > 0) {
        html += `
            <div class="loot-category" id="cat-currency">
                <div class="loot-category-header" onclick="toggleLootCategory('cat-currency')">
                    <h3>💰 Currency</h3>
                    <span class="collapse-icon">▼</span>
                </div>
                <div class="loot-items">
        `;
        
        for (const [type, amount] of Object.entries(loot.currency)) {
            html += `
                <div class="loot-item">
                    <div class="loot-item-name">${amount} ${type.toUpperCase()}</div>
                </div>
            `;
        }
        
        html += `</div></div>`;
    }
    
    // Gems
    if (loot.gems && loot.gems.length > 0) {
        html += `
            <div class="loot-category" id="cat-gems">
                <div class="loot-category-header" onclick="toggleLootCategory('cat-gems')">
                    <h3>💎 Gems (${loot.gems.length})</h3>
                    <span class="collapse-icon">▼</span>
                </div>
                <div class="loot-items">
        `;
        
        // Consolidate gems
        const gemCounts = {};
        loot.gems.forEach(gem => {
            const key = `${gem.name}|${gem.value}`;
            gemCounts[key] = (gemCounts[key] || 0) + 1;
        });
        
        Object.entries(gemCounts).forEach(([key, count]) => {
            const [name, value] = key.split('|');
            const displayName = count > 1 ? `${name} (×${count})` : name;
            html += `
                <div class="loot-item">
                    <div class="loot-item-name">${displayName}</div>
                    <div class="loot-item-value">${value}</div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Art Objects
    if (loot.artObjects && loot.artObjects.length > 0) {
        html += `
            <div class="loot-category" id="cat-art">
                <div class="loot-category-header" onclick="toggleLootCategory('cat-art')">
                    <h3>🎨 Art Objects (${loot.artObjects.length})</h3>
                    <span class="collapse-icon">▼</span>
                </div>
                <div class="loot-items">
        `;
        
        // Consolidate art objects
        const artCounts = {};
        loot.artObjects.forEach(obj => {
            const key = `${obj.name}|${obj.value}`;
            artCounts[key] = (artCounts[key] || 0) + 1;
        });
        
        Object.entries(artCounts).forEach(([key, count]) => {
            const [name, value] = key.split('|');
            const displayName = count > 1 ? `${name} (×${count})` : name;
            html += `
                <div class="loot-item">
                    <div class="loot-item-name">${displayName}</div>
                    <div class="loot-item-value">${value}</div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
   // Magic Items
if (loot.magicItems && loot.magicItems.length > 0) {
    html += `
        <div class="loot-category" id="cat-magic">
            <div class="loot-category-header" onclick="toggleLootCategory('cat-magic')">
                <h3>✨ Magic Items (${loot.magicItems.length})</h3>
                <span class="collapse-icon">▼</span>
            </div>
            <div class="loot-items">
    `;
    
    // Consolidate magic items
    const magicCounts = {};
    loot.magicItems.forEach(item => {
        const key = item.name;
        if (!magicCounts[key]) {
            magicCounts[key] = { count: 0, item: item };
        }
        magicCounts[key].count++;
    });
    
		Object.entries(magicCounts).forEach(([name, data]) => {
		    const { count, item } = data;
		    const rarityClass = `rarity-${item.rarity.toLowerCase().replace(' ', '-')}`;
		    const displayName = count > 1 ? `${item.name} (×${count})` : item.name;
		    const bossTag = item.isBossLoot ? ' ⭐' : '';
		    
		    // ADD THESE LINES:
		    const descriptor = getRandomDescriptor(item);
		    const descriptorHTML = descriptor ? `<div class="item-descriptor" style="font-style: italic; color: #a89968; margin-top: 5px; font-size: 0.9em;">${descriptor}</div>` : '';
		    
		    html += `
		        <div class="loot-item">
		            <div class="loot-item-header">
		                <div class="loot-item-name">${displayName}${bossTag}</div>
		                <div class="loot-item-value">
		                    <span class="${rarityClass}">${item.rarity}</span>
		                </div>
		            </div>
		            <div class="loot-item-description">${item.description || ''}</div>
		            ${descriptorHTML}  <!-- ADD THIS LINE -->
		        </div>
		    `;
		});
    
    html += `</div></div>`;
}

	
// Regular Items
if (loot.items && loot.items.length > 0) {
    html += `
        <div class="loot-category" id="cat-items">
            <div class="loot-category-header" onclick="toggleLootCategory('cat-items')">
                <h3>⚔️ Equipment & Items (${loot.items.length})</h3>
                <span class="collapse-icon">▼</span>
            </div>
            <div class="loot-items">
    `;
    
    // Consolidate items
    const itemCounts = {};
    loot.items.forEach(item => {
        const key = item.name;
        if (!itemCounts[key]) {
            itemCounts[key] = { count: 0, item: item };
        }
        itemCounts[key].count++;
    });
    
Object.entries(itemCounts).forEach(([name, data]) => {
    const { count, item } = data;
    const displayName = count > 1 ? `${item.name} (×${count})` : item.name;
    
    // ADD THESE LINES:
    const descriptor = getRandomDescriptor(item);
    const descriptorHTML = descriptor ? `<div class="item-descriptor" style="font-style: italic; color: #a89968; margin-top: 5px; font-size: 0.9em;">${descriptor}</div>` : '';
    
    html += `
        <div class="loot-item">
            <div class="loot-item-header">
                <div class="loot-item-name">${displayName}</div>
                <div class="loot-item-value">${item.cost} gp</div>
            </div>
            <div class="loot-item-description">${item.description || ''}</div>
            ${descriptorHTML}  <!-- ADD THIS LINE -->
        </div>
    `;
});
    
    html += `</div></div>`;
}
    
// Special Drops
if (loot.specialDrops && loot.specialDrops.length > 0) {
    html += `
        <div class="loot-category" id="cat-special">
            <div class="loot-category-header" onclick="toggleLootCategory('cat-special')">
                <h3>🎁 Special Drops (${loot.specialDrops.length})</h3>
                <span class="collapse-icon">▼</span>
            </div>
            <div class="loot-items">
    `;
    
    // Consolidate special drops
    const specialCounts = {};
    loot.specialDrops.forEach(item => {
        const key = typeof item === 'string' ? item : item.name;
        if (!specialCounts[key]) {
            specialCounts[key] = { count: 0, item: item };
        }
        specialCounts[key].count++;
    });
    
    Object.entries(specialCounts).forEach(([key, data]) => {
        const { count, item } = data;
        const displayName = count > 1 ? `${key} (×${count})` : key;
        
        if (typeof item === 'object') {
            html += `
                <div class="loot-item">
                    <div class="loot-item-header">
                        <div class="loot-item-name">${displayName}</div>
                        <div class="loot-item-value">${item.value}</div>
                    </div>
                    <div class="loot-item-description">${item.description}</div>
                </div>
            `;
        } else {
            html += `
                <div class="loot-item">
                    <div class="loot-item-name">${displayName}</div>
                </div>
            `;
        }
    });
    
    html += `</div></div>`;
}
    
    // Theme Items
    if (loot.themeItems && loot.themeItems.length > 0) {
        html += `
            <div class="loot-category" id="cat-theme">
                <div class="loot-category-header" onclick="toggleLootCategory('cat-theme')">
                    <h3>🏺 Themed Treasures (${loot.themeItems.length})</h3>
                    <span class="collapse-icon">▼</span>
                </div>
                <div class="loot-items">
        `;
        
        // Consolidate themed items
        const themeCounts = {};
        loot.themeItems.forEach(item => {
            themeCounts[item] = (themeCounts[item] || 0) + 1;
        });
        
        Object.entries(themeCounts).forEach(([item, count]) => {
            const displayName = count > 1 ? `${item} (×${count})` : item;
            html += `
                <div class="loot-item">
                    <div class="loot-item-name">${displayName}</div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    document.getElementById('loot-content').innerHTML = html;
}

function toggleLootCategory(categoryId) {
    const category = document.getElementById(categoryId);
    category.classList.toggle('collapsed');
}
