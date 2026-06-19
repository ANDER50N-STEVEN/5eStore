// ===== DATA.JS =====
// Static data tables and configuration - no functions

// ===== WEALTH LEVELS =====
const wealthLevels = {
    'squalid':     { gold: [100, 500],     sellModifier: 0.80, label: 'Squalid' },
    'common':      { gold: [500, 2000],    sellModifier: 1.00, label: 'Common' },
    'respectable': { gold: [2000, 5000],   sellModifier: 1.10, label: 'Respectable' },
    'prosperous':  { gold: [5000, 15000],  sellModifier: 1.20, label: 'Prosperous' },
    'fortunate':   { gold: [15000, 50000], sellModifier: 1.30, label: 'Fortunate' }
};

// ===== SHOPKEEPER DATA =====
const shopkeeperData = {
    races: [
        'Human', 'Elf', 'Dwarf', 'Halfling', 'Gnome', 'Half-Elf', 'Half-Orc',
        'Tiefling', 'Dragonborn', 'Tabaxi', 'Goliath', 'Firbolg', 'Kenku'
    ],

    namesByRace: {
        'Human': {
            first: ['Aldric', 'Brenna', 'Cedric', 'Delia', 'Edric', 'Fiona', 'Gareth', 'Helena', 'Alaric', 'Lyanna', 'Thaddeus', 'Rowena', 'Magnus', 'Isolde', 'Percival', 'Elspeth'],
            last:  ['Ashwood', 'Blackthorn', 'Stormwind', 'Riverstone', 'Ironwood', 'Goldleaf', 'Whitehall', 'Ravencraft', 'Silverhand', 'Thornfield', 'Stonebridge', 'Fairwind']
        },
        'Elf': {
            first: ['Elara', 'Theren', 'Silaqui', 'Laeroth', 'Isilme', 'Faelyn', 'Aerendyl', 'Miriel'],
            last:  ['Moonwhisper', 'Starweaver', 'Silverleaf', 'Nightbreeze', 'Sunblade', 'Forestwarden']
        },
        'Dwarf': {
            first: ['Thorin', 'Brunhilde', 'Balin', 'Nori', 'Helga', 'Gimli', 'Bombur', 'Dagna'],
            last:  ['Ironforge', 'Stonehelm', 'Oakenshield', 'Firebeard', 'Bronzehammer', 'Golddelver']
        },
        'Halfling': {
            first: ['Bilbo', 'Rosie', 'Merric', 'Portia', 'Willow', 'Finnan', 'Lidda', 'Osborn'],
            last:  ['Goodbarrel', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough', 'Hilltopple']
        },
        'Gnome': {
            first: ['Zook', 'Nissa', 'Boddynock', 'Caramip', 'Warryn', 'Bimpnottin', 'Kellen', 'Turen'],
            last:  ['Tinkertop', 'Fizzlebang', 'Sparklegem', 'Nackle', 'Beren', 'Daergel']
        },
        'Half-Elf': {
            first: ['Aramil', 'Liara', 'Davian', 'Seraphina', 'Kaelen', 'Melodia', 'Tharion', 'Sylvara'],
            last:  ['Greywood', 'Ravenwood', 'Swiftbrook', 'Dawntracker', 'Shadowend', 'Brightwater']
        },
        'Half-Orc': {
            first: ['Grak', 'Sharag', 'Korg', 'Mara', 'Thokk', 'Grisha', 'Dench', 'Ovak'],
            last:  ['Strongarm', 'Ironfang', 'Bonecrusher', 'Steelgrip', 'Warhide', 'Stonefist']
        },
        'Tiefling': {
            first: ['Crimson', 'Sorrow', 'Ash', 'Despair', 'Glory', 'Mercy', 'Torment', 'Hope'],
            last:  ['Shadowflame', 'Nighthorn', 'Emberheart', 'Duskbane', 'Hellspark', 'Voidcaller']
        },
        'Dragonborn': {
            first: ['Balasar', 'Akra', 'Torinn', 'Nala', 'Ghesh', 'Mishann', 'Donaar', 'Farideh'],
            last:  ['Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kerrhylon']
        },
        'Tabaxi': {
            first: ['Cloud', 'River', 'Mist', 'Shadow', 'Rain', 'Storm', 'Wind', 'Star'],
            last:  ['on Mountain', 'in Forest', 'at Dawn', 'in Night', 'on Water', 'at Dusk']
        },
        'Goliath': {
            first: ['Aukan', 'Ilikan', 'Keothi', 'Kuori', 'Manneo', 'Maveith', 'Nalla', 'Uthal'],
            last:  ['Thuunlakalaga', 'Katho-Olavi', 'Elanithino', 'Gathakanathi', 'Kalagiano', 'Kolae-Gileana']
        },
        'Firbolg': {
            first: ['Autumn', 'Blaze', 'Dew', 'Ember', 'Flint', 'Grove', 'Heath', 'Oak'],
            last:  ['Leafwhisper', 'Rootwalker', 'Mossbeard', 'Treestrider', 'Fernheart', 'Branchbender']
        },
        'Kenku': {
            first: ['Caw', 'Scratch', 'Whistle', 'Click', 'Rustle', 'Chime', 'Screech', 'Rattle'],
            last:  ['Mimicsong', 'Echovoice', 'Copycall', 'Soundstealer', 'Repeatcry', 'Borrowword']
        }
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
        scribe: [
            'Has {color} ink stains on their fingers that never fully wash out',
            'Reads every document placed before them before helping a customer',
            'Speaks in an unusually precise and formal manner at all times',
            'Has memorized the contents of every scroll they have ever copied',
            'Keeps a personal journal that they write in obsessively between customers',
            'Corrects the grammar of everyone they speak to without apology',
            'Has copied so many spellbooks their hands shake with residual magic',
            'Once transcribed a {title}\'s entire library in {count} months',
            'Refuses to sell any scroll they consider poorly written or smudged',
            'Can write perfectly with both hands simultaneously',
            'Mutters the words of scrolls under their breath while working',
            'Has a {animal} that knocks over ink pots and blames the customers',
            'Keeps every failed transcription in a massive pile they call "the archive"',
            'Insists on reading the contents aloud before sealing any scroll',
            'Claims they once copied a scroll that rewrote itself overnight',
            'Has strong opinions about which {material} makes the best parchment',
            'Numbers every item in the shop in an elaborate cataloguing system',
            'Refuses to write anything they consider historically inaccurate',
            'Has gone blind in one eye from {count} years of close detail work',
            'Speaks of famous wizards and their writing styles like old personal friends'
        ],
        fletcher: [
            'Carved their first bow at age {count}',
            'Can identify any arrow by its fletching alone',
            'Tests every bow with a blindfolded shot',
            'Has a superstition about selling on {day}s',
            'Lost {bodypart} in an archery tournament',
            'Once shot an arrow through a {item} at 200 yards',
            'Names every bow they craft',
            'Collects arrows from famous battles',
            'Has {animal} feathers saved for special orders',
            'Refuses to sell to anyone who can\'t draw the bow'
        ],
        stable: [
            'Knows every horse by name and temperament',
            'Talks to the animals more than to customers',
            'Has a {animal} that follows them everywhere',
            'Once rode {count} days without stopping',
            'Can calm any spooked animal with a single word',
            'Keeps a lucky horseshoe from a legendary mount',
            'Smells faintly of hay no matter how recently they bathed',
            'Was kicked by a horse {count} times and still loves them',
            'Has a sixth sense for a horse\'s true value',
            'Refuses to sell any animal they don\'t trust'
        ],
        tattoo: [
            'Every tattoo on their body tells a story',
            'Can see magical auras around their own tattoos',
            'Speaks only in metaphors about the art',
            'Has tattooed {title}s and beggars alike',
            'Once accidentally made a tattoo sentient',
            'Collects rare {material} inks from across the realm',
            'Insists on knowing your story before starting work',
            'Has a {color} ink that only they know how to make',
            'Claims their needles never hurt the worthy',
            'Refuses to tattoo anyone who fears pain'
        ],
        jeweler: [
            'Examines every gem with a jeweler\'s loupe constantly',
            'Has {color} stains on their fingers from gem polishing',
            'Once appraised the crown jewels of {title}',
            'Can identify any gem by taste alone',
            'Keeps the first gem they ever cut on a chain',
            'Has a superstition about {color} stones bringing bad luck',
            'Names every exceptional gem that passes through the shop',
            'Was robbed {count} times and never lost their finest pieces',
            'Only works by candlelight for precision cutting',
            'Refuses to sell anything they consider poorly cut'
        ],
        tavern: [
            'Knows every regular customer\'s usual order by heart',
            'Has a recipe for {count} different house specials',
            'Was once a traveling {profession} before settling down',
            'Waters down drinks for anyone they deem untrustworthy',
            'Keeps a {animal} that steals food from distracted patrons',
            'Has heard every secret in this town at least twice',
            'Never forgets a tab, even years later',
            'Brews a house ale with a secret {item} ingredient',
            'Once served drinks to {title} and never lets anyone forget it',
            'Cuts off customers with a look before they even ask'
        ],
        temple: [
            'Prays audibly over every item before selling it',
            'Gives a blessing with every purchase whether asked or not',
            'Has served the temple for {count} decades',
            'Can identify divine magic by the feel of it',
            'Refuses to sell to anyone with obvious evil intent',
            'Once received a vision while handling a {item}',
            'Keeps a relic from a fallen {hero} behind the counter',
            'Donates a portion of every sale to the poor',
            'Speaks in formal religious language at all times',
            'Has been miraculously healed {count} times in the line of duty'
        ],
        thievesguild: [
            'Never makes direct eye contact with guards',
            'Speaks entirely in guild cant to new customers',
            'Has {count} different exit routes memorized from any room',
            'Was caught only once and never says how they escaped',
            'Keeps their real name an absolute secret',
            'Has a {animal} trained to warn of approaching watch',
            'Once pickpocketed {title} just to prove they could',
            'Taps fingers on the counter in a coded rhythm',
            'Prices change depending on how much they like your face',
            'Knows something embarrassing about every guard in the city'
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
        animal:     ['cat', 'crow', 'rat', 'parrot', 'ferret', 'toad', 'snake', 'owl'],
        day:        ['Moonday', 'Godsday', 'Waterday', 'Earthday', 'Freeday'],
        item:       ['spoons', 'buttons', 'bells', 'keys', 'coins', 'feathers', 'stones'],
        count:      ['three', 'five', 'seven', 'ten', 'twelve', 'twenty'],
        injury:     ['an arrow to the knee', 'a dragon attack', 'a curse', 'retirement'],
        bodypart:   ['an eye', 'a finger', 'an arm', 'three fingers'],
        hero:       ['king', 'hero', 'dragon slayer', 'champion'],
        material:   ['dragon scales', 'adamantine', 'mithral', 'obsidian', 'iron'],
        color:      ['blue', 'purple', 'green', 'silver', 'golden', 'crimson'],
        metal:      ['iron', 'steel', 'silver', 'bronze', 'copper'],
        event:      ['a siege', 'an ambush', 'a dragon attack', 'a cave-in'],
        distance:   ['30', '20', '15', '10'],
        title:      ['a noble', 'an archmage', 'a king', 'a hero', 'the villain'],
        creature:   ['noble', 'king', 'dragon', 'demon', 'angel'],
        disease:    ['lycanthropy', 'a curse', 'petrification', 'madness'],
        location:   ['the East', 'across the sea', 'the mountains', 'a distant land'],
        profession: ['sailor', 'soldier', 'adventurer', 'merchant', 'scout']
    }
};

// ===== TAGS =====
const commonTags = [
    'Abjuration', 'Alchemy', 'Ammunition', 'Animal', 'Apparel', 'Arcane', 'Armor',
    'Axe', 'Bard', 'Blowgun', 'Book', 'Bow', 'Bracer', 'Cleric', 'Conjuration',
    'Consumable', 'Crossbow', 'Dagger', 'Divination', 'Divine', 'Druid', 'Dwarf',
    'Elf', 'Enchantment', 'Evil', 'Evocation', 'Food', 'Gauntlet', 'Gem',
    'Hammer/Mace', 'Healing', 'Helmet', 'Instrument', 'Jewelry', 'Misc', 'Nature',
    'Necromancy', 'Poison', 'Polearm', 'Potion', 'Ranged', 'Religious', 'Scroll',
    'Shield', 'Sling', 'Sorcerer', 'Spellcasting Focus', 'Staff/Club', 'Stealth',
    'Summoning', 'Sword', 'Tattoo', 'Transmutation', 'Travel', 'Wand/Staff/Rod',
    'Warlock', 'Weapon', 'Whip', 'Wizard'
];

const allKnownTags = [
    'Abjuration', 'Alchemy', 'Ammunition', 'Animal', 'Apparel', 'Arcane', 'Armor',
    'Axe', 'Bard', 'Blowgun', 'Book', 'Bow', 'Bracer', 'Cleric', 'Conjuration',
    'Consumable', 'Crossbow', 'Dagger', 'Divination', 'Divine', 'Druid', 'Dwarf',
    'Elf', 'Enchantment', 'Evil', 'Evocation', 'Food', 'Gauntlet', 'Gem',
    'Hammer/Mace', 'Healing', 'Helmet', 'Instrument', 'Jewelry', 'Misc', 'Nature',
    'Necromancy', 'Poison', 'Polearm', 'Potion', 'Ranged', 'Religious', 'Scroll',
    'Shield', 'Sling', 'Sorcerer', 'Spellcasting Focus', 'Staff/Club', 'Stealth',
    'Summoning', 'Sword', 'Tattoo', 'Transmutation', 'Travel', 'Wand/Staff/Rod',
    'Warlock', 'Weapon', 'Whip', 'Wizard'
];

// ===== CITY DICE DEFAULTS =====
const cityDiceDefaults = {
    hamlet: {
        mundane:  '3d6+6',
        common:   '2d4+1',
        uncommon: '1d6-4',
        rare:     '1d4-3',
        veryRare: '0',
        legendary: '0'
    },
    village: {
        mundane:  '4d6+8',
        common:   '2d6+2',
        uncommon: '1d8-2',
        rare:     '1d6-3',
        veryRare: '1d4-3',
        legendary: '0'
    },
    town: {
        mundane:  '5d6+10',
        common:   '2d8+3',
        uncommon: '2d6',
        rare:     '1d8-2',
        veryRare: '1d6-3',
        legendary: '1d4-3'
    },
    smallcity: {
        mundane:  '6d6+12',
        common:   '2d10+2',
        uncommon: '2d8+1',
        rare:     '2d6-1',
        veryRare: '1d8-2',
        legendary: '1d6-4'
    },
    city: {
        mundane:  '7d6+14',
        common:   '2d12+1',
        uncommon: '3d6+2',
        rare:     '2d8',
        veryRare: '2d6-1',
        legendary: '1d6-2'
    },
    metropolis: {
        mundane:  '8d6+16',
        common:   '3d10',
        uncommon: '3d8+2',
        rare:     '3d6+3',
        veryRare: '2d8',
        legendary: '1d8-2'
    }
};

// ===== RARITY LEVELS =====
const rarityLevels = {
    'mundane':   -1,
    'common':     0,
    'uncommon':   1,
    'rare':       2,
    'veryrare':   3,
    'legendary':  4
};

const rarityNames = ['Mundane', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'];

// ===== ENCOUNTER XP THRESHOLDS =====
const encounterXPThresholds = {
    1:  { easy: 25,   medium: 50,   hard: 75,   deadly: 100  },
    2:  { easy: 50,   medium: 100,  hard: 150,  deadly: 200  },
    3:  { easy: 75,   medium: 150,  hard: 225,  deadly: 400  },
    4:  { easy: 125,  medium: 250,  hard: 375,  deadly: 500  },
    5:  { easy: 250,  medium: 500,  hard: 750,  deadly: 1100 },
    6:  { easy: 300,  medium: 600,  hard: 900,  deadly: 1400 },
    7:  { easy: 350,  medium: 750,  hard: 1100, deadly: 1700 },
    8:  { easy: 400,  medium: 900,  hard: 1400, deadly: 2100 },
    9:  { easy: 450,  medium: 1000, hard: 1500, deadly: 2200 },
    10: { easy: 500,  medium: 1100, hard: 1600, deadly: 2300 },
    11: { easy: 600,  medium: 1200, hard: 1800, deadly: 2800 },
    12: { easy: 650,  medium: 1400, hard: 2100, deadly: 3200 },
    13: { easy: 700,  medium: 1500, hard: 2200, deadly: 3400 },
    14: { easy: 800,  medium: 1600, hard: 2300, deadly: 3800 },
    15: { easy: 1000, medium: 2000, hard: 3000, deadly: 4500 },
    16: { easy: 1100, medium: 2200, hard: 3400, deadly: 5100 },
    17: { easy: 1300, medium: 2600, hard: 3900, deadly: 5900 },
    18: { easy: 1400, medium: 2800, hard: 4200, deadly: 6300 },
    19: { easy: 1600, medium: 3200, hard: 4900, deadly: 7300 },
    20: { easy: 2000, medium: 3900, hard: 5900, deadly: 8800 }
};

// ===== CR XP VALUES =====
const crXPValues = {
    0: 10, 0.125: 25, 0.25: 50, 0.5: 100,
    1: 200, 2: 450, 3: 700, 4: 1100, 5: 1800,
    6: 2300, 7: 2900, 8: 3900, 9: 5000, 10: 5900,
    11: 7200, 12: 8400, 13: 10000, 14: 11500, 15: 13000,
    16: 15000, 17: 18000, 18: 20000, 19: 22000, 20: 25000,
    21: 33000, 22: 41000, 23: 50000, 24: 62000, 25: 75000,
    26: 90000, 27: 105000, 28: 125000, 29: 150000, 30: 155000
};

// ===== LOOT TABLES =====
const lootTables = {
    gems: {
        '10gp':   ['Azurite', 'Banded agate', 'Blue quartz', 'Eye agate', 'Hematite', 'Lapis lazuli', 'Malachite', 'Moss agate', 'Obsidian', 'Rhodochrosite', 'Tiger eye', 'Turquoise'],
        '50gp':   ['Bloodstone', 'Carnelian', 'Chalcedony', 'Chrysoprase', 'Citrine', 'Jasper', 'Moonstone', 'Onyx', 'Quartz', 'Sardonyx', 'Star rose quartz', 'Zircon'],
        '100gp':  ['Amber', 'Amethyst', 'Chrysoberyl', 'Coral', 'Garnet', 'Jade', 'Jet', 'Pearl', 'Spinel', 'Tourmaline'],
        '500gp':  ['Alexandrite', 'Aquamarine', 'Black pearl', 'Blue spinel', 'Peridot', 'Topaz'],
        '1000gp': ['Black opal', 'Blue sapphire', 'Emerald', 'Fire opal', 'Opal', 'Star ruby', 'Star sapphire', 'Yellow sapphire'],
        '5000gp': ['Black sapphire', 'Diamond', 'Jacinth', 'Ruby']
    },

    artObjects: {
        '25gp':   ['Silver ewer', 'Carved bone statuette', 'Small gold bracelet', 'Cloth-of-gold vestments'],
        '250gp':  ['Gold ring set with bloodstones', 'Carved ivory statuette', 'Large gold bracelet', 'Silver necklace with a gemstone pendant'],
        '750gp':  ['Silver chalice with moonstones', 'Silver-plated steel longsword', 'Carved harp of exotic wood', 'Small gold idol'],
        '2500gp': ['Gold ring set with diamonds', 'Gold music box', 'Gold circlet with gems', 'Jeweled gold crown'],
        '7500gp': ['Jeweled platinum ring', 'Small mithral statue', 'Gold cup set with emeralds', 'Gold jewelry box with platinum filigree']
    },

    creatureThemes: {
        humanoid: [
            { name: 'Worn leather pouch',              value: '1-5 sp',  description: 'Contains a few copper coins, lint, and a brass button' },
            { name: 'Silver signet ring',              value: '10 gp',   description: 'Bears an unfamiliar family crest' },
            { name: 'Love letter',                     value: '0 gp',    description: 'Reveals a tragic romance or useful blackmail material' },
            { name: 'Wanted poster',                   value: '0 gp',    description: 'Shows a bounty for someone the party might know' },
            { name: 'Rations (3 days)',                value: '3 gp',    description: 'Dried meat, hardtack, and stale cheese' },
            { name: 'Thieves\' tools',                 value: '25 gp',   description: 'Well-used but functional lockpicks' },
            { name: 'Half-empty flask of cheap whiskey', value: '5 cp', description: 'Burns on the way down' },
            { name: 'Jade gambling die',               value: '15 gp',   description: 'Weighted - grants advantage on deception checks about gambling' },
            { name: 'Treasure map fragment',           value: '??? gp',  description: 'Shows 1/3 of a larger map to unknown riches' },
            { name: 'Identification papers',           value: '0 gp',    description: 'Could be useful for disguises or forging documents' }
        ],
        beast: [
            { name: 'Pristine pelt/skin',              value: '5 gp',    description: 'Can be sold to a furrier or worn as a cloak' },
            { name: 'Claws/Teeth (4)',                 value: '8 gp',    description: 'Trophy or crafting component for weapons' },
            { name: 'Dire boar tusks (pair)',          value: '15 gp',   description: 'Large enough to craft into daggers or decorations' },
            { name: 'Giant eagle feather',             value: '10 gp',   description: 'Sought by druids and arrow-crafters' },
            { name: 'Venomous snake fangs',            value: '20 gp',   description: 'Can be sold to alchemists or poisoners' },
            { name: 'Owl bear beak',                   value: '25 gp',   description: 'Impressive trophy, intimidating when displayed' },
            { name: 'Phase spider silk gland',         value: '50 gp',   description: 'Valuable to wizards studying planar magic' },
            { name: 'Displacer beast tentacle',        value: '75 gp',   description: 'Still twitches occasionally, used in illusion magic' },
            { name: 'Basilisk eye',                    value: '100 gp',  description: 'Intact and unpetrified - extremely valuable to alchemists' },
            { name: 'Perfectly preserved pelt',        value: '30 gp',   description: 'No damage, can fetch premium price' }
        ],
        dragon: [
            { name: 'Dragon scale (small)',            value: '50 gp',   description: 'Size of a dinner plate, shimmers in light' },
            { name: 'Dragon tooth',                    value: '75 gp',   description: 'As long as a shortsword, can be carved into a weapon' },
            { name: 'Vial of dragon blood',            value: '100 gp',  description: 'Still warm, powerful potion ingredient' },
            { name: 'Broken dragon egg shell',         value: '200 gp',  description: 'Collectors and scholars pay well for these' },
            { name: 'Dragon claw',                     value: '150 gp',  description: 'Could be mounted as a trophy or crafted into a weapon' },
            { name: 'Prismatic dragon scale',          value: '500 gp',  description: 'Shimmers with all colors, extremely rare' },
            { name: 'Ancient coin hoard (small)',      value: '3d10×10 gp', description: 'Mix of old currencies from forgotten kingdoms' },
            { name: 'Gem-encrusted goblet',            value: '250 gp',  description: 'Part of a dragon\'s collected treasure' },
            { name: 'Dragon bone shard',               value: '80 gp',   description: 'Dense and magically resonant, crafting material' },
            { name: 'Scorched noble\'s crown',         value: '300 gp',  description: 'Melted gold with embedded rubies, sad trophy' }
        ],
        undead: [
            { name: 'Burial shroud',                   value: '5 gp',    description: 'Ancient but intact, faint necromantic aura' },
            { name: 'Tarnished silver pendant',        value: '15 gp',   description: 'Shows a face the deceased loved in life' },
            { name: 'Funerary coins (2)',              value: '10 gp',   description: 'Placed over the eyes, from a forgotten civilization' },
            { name: 'Cracked burial urn',              value: '20 gp',   description: 'Contains ancient ash and bone fragments' },
            { name: 'Faded death certificate',         value: '0 gp',    description: 'Dated centuries ago, strange cause of death listed' },
            { name: 'Grave dust pouch',                value: '25 gp',   description: 'Valuable to necromancers and certain clerics' },
            { name: 'Cursed locket',                   value: '50 gp',   description: 'Shows a different person each time it opens' },
            { name: 'Bone fragments',                  value: '15 gp',   description: 'Can be used as necromancy components' },
            { name: 'Ancient burial jewelry',          value: '75 gp',   description: 'Corroded copper with semi-precious stones' },
            { name: 'Phylactery shard',                value: '200 gp',  description: 'Fragment of a destroyed lich\'s soul vessel' }
        ],
        fiend: [
            { name: 'Infernal contract',               value: '0 gp',    description: 'Names someone\'s sold soul, might be used to free them' },
            { name: 'Sulfur crystal',                  value: '25 gp',   description: 'Smells terrible, component for summoning magic' },
            { name: 'Demon ichor vial',                value: '75 gp',   description: 'Corrosive black liquid, valuable and dangerous' },
            { name: 'Hellish coin',                    value: '50 gp',   description: 'Burns to touch without protection, cursed currency' },
            { name: 'Soul gem shard',                  value: '100 gp',  description: 'Whispers can be heard from within' },
            { name: 'Infernal iron spike',             value: '40 gp',   description: 'Always uncomfortably warm to touch' },
            { name: 'Scorched brimstone',              value: '20 gp',   description: 'Permanent ember glow, component for fire magic' },
            { name: 'Devil\'s tongue',                 value: '150 gp',  description: 'Preserved, grants one who eats it the ability to speak Infernal' },
            { name: 'Corrupted holy symbol',           value: '60 gp',   description: 'Twisted mockery of a good deity\'s symbol' },
            { name: 'Contract fragment',               value: '0 gp',    description: 'Partial terms of a dark bargain, could be valuable information' }
        ],
        celestial: [
            { name: 'Angel feather',                   value: '100 gp',  description: 'Pure white, provides light when held by the righteous' },
            { name: 'Holy water (2 vials)',             value: '50 gp',   description: 'Blessed in the Upper Planes' },
            { name: 'Sacred hymn sheet',               value: '25 gp',   description: 'Music that soothes the soul and repels undead' },
            { name: 'Celestial copper',                value: '75 gp',   description: 'Never tarnishes, warm to touch' },
            { name: 'Blessed chain links',             value: '40 gp',   description: 'From broken celestial chains, radiates goodness' },
            { name: 'Divinity shard',                  value: '200 gp',  description: 'Crystallized fragment of divine essence' },
            { name: 'Halo fragment',                   value: '150 gp',  description: 'Glows faintly, provides comfort to good creatures' },
            { name: 'Trumpet mouthpiece',              value: '80 gp',   description: 'From a celestial herald\'s horn' },
            { name: 'Blessed bandages',                value: '30 gp',   description: 'Provide advantage on Medicine checks' },
            { name: 'Prayer beads',                    value: '50 gp',   description: 'Carved from celestial wood, enhance divine magic' }
        ],
        fey: [
            { name: 'Pixie dust pouch',                value: '75 gp',   description: 'Causes uncontrollable laughter when inhaled' },
            { name: 'Enchanted acorn',                 value: '25 gp',   description: 'Grows into a full oak tree in 1 hour, lasts 1 day' },
            { name: 'Fey flower crown',                value: '50 gp',   description: 'Never wilts, makes wearer appear charming' },
            { name: 'Glamoured mirror shard',          value: '100 gp',  description: 'Shows your idealized reflection' },
            { name: 'Sprite wings (pair)',             value: '60 gp',   description: 'Iridescent, valuable to fey scholars' },
            { name: 'Moonlight captured in a bottle',  value: '150 gp',  description: 'Glows with silvery light, doesn\'t expire' },
            { name: 'Satyr\'s pipes',                  value: '80 gp',   description: 'Cracked but playable, music causes dancing' },
            { name: 'Wild fey honey',                  value: '40 gp',   description: 'Tastes of dreams, mild psychedelic effect' },
            { name: 'Dryad\'s bark piece',             value: '35 gp',   description: 'Still living, speaks to druids' },
            { name: 'Fey pact token',                  value: '??? gp',  description: 'Bearer is owed a favor by a powerful fey' }
        ],
        elemental: [
            { name: 'Fire elemental ember',            value: '50 gp',   description: 'Never goes out, provides heat and light' },
            { name: 'Bottled storm',                   value: '75 gp',   description: 'Vial of swirling clouds, lightning flickers inside' },
            { name: 'Earth elemental core',            value: '100 gp',  description: 'Dense stone that feels alive' },
            { name: 'Frozen wind sample',              value: '60 gp',   description: 'Solid air that gradually sublimates' },
            { name: 'Living water flask',              value: '45 gp',   description: 'Water that moves on its own' },
            { name: 'Magma glass',                     value: '80 gp',   description: 'Obsidian that\'s still warm from the Plane of Fire' },
            { name: 'Solidified smoke',                value: '40 gp',   description: 'Wispy but tangible, used in illusion magic' },
            { name: 'Lightning in a bottle',           value: '150 gp',  description: 'Crackles constantly, dangerous to open' },
            { name: 'Elemental salt',                  value: '30 gp',   description: 'From the Plane of Earth, enhances transmutation magic' },
            { name: 'Prismatic dust',                  value: '200 gp',  description: 'Contains essence from all elemental planes' }
        ],
        aberration: [
            { name: 'Mind flayer tentacle',            value: '100 gp',  description: 'Preserved, still psychically active' },
            { name: 'Beholder eye stalk',              value: '150 gp',  description: 'Retains a trace of its antimagic properties' },
            { name: 'Gibbering mouther tooth',         value: '25 gp',   description: 'Whispers nonsense when held' },
            { name: 'Void crystal',                    value: '200 gp',  description: 'Hurts to look at, from the Far Realm' },
            { name: 'Aberrant brain matter',           value: '75 gp',   description: 'Still thinking terrible thoughts' },
            { name: 'Alien metal fragment',            value: '80 gp',   description: 'Not from this plane, impossibly light' },
            { name: 'Psychic residue',                 value: '50 gp',   description: 'Crystallized nightmare, component for mind magic' },
            { name: 'Star spawn ichor',                value: '120 gp',  description: 'Glows with unnatural light, corrupting influence' },
            { name: 'Impossible geometry diagram',     value: '0 gp',    description: 'Studying it grants insight into alien mathematics' },
            { name: 'Madness stone',                   value: '60 gp',   description: 'Whispers secrets that shouldn\'t be known' }
        ],
        monstrosity: [
            { name: 'Chimera horn',                    value: '80 gp',   description: 'From the goat head, spiraled and impressive' },
            { name: 'Gorgon plate',                    value: '100 gp',  description: 'Metallic scale, extremely durable' },
            { name: 'Manticore tail spike',            value: '25 gp',   description: 'Poisonous, can be used as an arrow' },
            { name: 'Hydra tooth',                     value: '50 gp',   description: 'Constantly trying to regenerate' },
            { name: 'Cockatrice beak',                 value: '75 gp',   description: 'Retains petrification magic residue' },
            { name: 'Griffin feather',                 value: '40 gp',   description: 'Sought by nobles for decorations' },
            { name: 'Wyvern stinger',                  value: '90 gp',   description: 'Size of a shortsword, extremely toxic' },
            { name: 'Roper tentacle',                  value: '60 gp',   description: 'Sticky even in death' },
            { name: 'Rust monster antenna',            value: '150 gp',  description: 'Ironically valuable despite rusting metal' },
            { name: 'Behir scale',                     value: '120 gp',  description: 'Crackles with residual lightning' }
        ],
        giant: [
            { name: 'Giant\'s tooth',                  value: '30 gp',   description: 'Size of a fist, can be carved into dice' },
            { name: 'Oversized ring',                  value: '50 gp',   description: 'Sized for a giant, worth melting down' },
            { name: 'Crude tribal necklace',           value: '40 gp',   description: 'Bones, stones, and scrap metal' },
            { name: 'Giant\'s belt',                   value: '25 gp',   description: 'Can be cut into high-quality leather straps' },
            { name: 'Stone-tipped spear',              value: '15 gp',   description: 'Giant-sized, crude but effective' },
            { name: 'Tribal banner',                   value: '20 gp',   description: 'Shows allegiance, intelligence gathering' },
            { name: 'Mammoth tusk carving',            value: '75 gp',   description: 'Giant art, depicts their history' },
            { name: 'Giant beer mug',                  value: '10 gp',   description: 'Holds 2 gallons, poorly crafted' },
            { name: 'Cloud giant silk scarf',          value: '200 gp',  description: 'Massive but incredibly fine' },
            { name: 'Rune-carved stone',               value: '100 gp',  description: 'Giant language, might contain magic' }
        ],
        construct: [
            { name: 'Clockwork gears (set)',           value: '50 gp',   description: 'Precision-made, valuable to tinkers' },
            { name: 'Arcane battery',                  value: '100 gp',  description: 'Holds residual magical charge' },
            { name: 'Mithral spring',                  value: '150 gp',  description: 'From a destroyed construct\'s core' },
            { name: 'Runic circuitry',                 value: '80 gp',   description: 'Magical wiring, can be studied or repurposed' },
            { name: 'Animation crystal',               value: '200 gp',  description: 'Cracked but still resonating with magic' },
            { name: 'Golem clay',                      value: '60 gp',   description: 'Enchanted, never fully hardens' },
            { name: 'Mechanical eye lens',             value: '75 gp',   description: 'See-through crystal with perfect clarity' },
            { name: 'Animated armor plates',           value: '90 gp',   description: 'Still trying to move on their own' },
            { name: 'Homunculus wing',                 value: '40 gp',   description: 'Delicate mechanical marvel' },
            { name: 'Core gem fragment',               value: '250 gp',  description: 'Contains the construct\'s former consciousness' }
        ]
    }
};

// ===== CREATURE TYPE MAGIC ITEM TAG RESTRICTIONS =====
// Kept here as a legacy reference — the live version is managed via defaultCreatureTypeTags in creatureTypes.js
const creatureTypeMagicItemTags = {
    humanoid:    null,
    dragon:      null,
    beast:       ['Jewelry', 'Gem'],
    undead:      ['Necromancy', 'Abjuration', 'Divine', 'Religious', 'Jewelry', 'Scroll', 'Wand/Staff/Rod', 'Misc'],
    fiend:       ['Evil', 'Summoning', 'Necromancy', 'Enchantment', 'Wand/Staff/Rod', 'Jewelry'],
    celestial:   ['Divine', 'Religious', 'Healing', 'Abjuration', 'Conjuration', 'Jewelry'],
    fey:         ['Enchantment', 'Nature', 'Jewelry', 'Gem', 'Instrument', 'Scroll', 'Misc'],
    elemental:   ['Transmutation', 'Arcane', 'Evocation'],
    aberration:  ['Divination', 'Transmutation', 'Arcane', 'Wand/Staff/Rod', 'Book', 'Misc'],
    monstrosity: ['Weapon', 'Armor', 'Jewelry', 'Gem'],
    giant:       ['Weapon', 'Armor', 'Gem', 'Jewelry', 'Misc'],
    construct:   ['Arcane', 'Transmutation', 'Wand/Staff/Rod', 'Book']
};
