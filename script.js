// Item database from the provided CSV
        const officialItemDatabase = [
		
            {name: "Club", cost: 0.1, type: "Weapon", rarity: "Mundane", description: "A simple wooden club, often fashioned from a sturdy branch. Deals 1d4 bludgeoning damage."},
            {name: "Dagger", cost: 2, type: "Weapon", rarity: "Mundane", description: "A short blade used for close combat or throwing. Light and finesse weapon dealing 1d4 piercing damage."},
            {name: "Greatclub", cost: 0.2, type: "Weapon", rarity: "Mundane", description: "A larger, heavier version of a club. Two-handed weapon dealing 1d8 bludgeoning damage."},
            {name: "Handaxe", cost: 5, type: "Weapon", rarity: "Mundane", description: "A small axe designed for one-handed use or throwing. Deals 1d6 slashing damage."},
            {name: "Javelin", cost: 0.5, type: "Weapon", rarity: "Mundane", description: "A light spear designed for throwing. Can be used as both melee and ranged weapon, dealing 1d6 piercing damage."},
            {name: "Light hammer", cost: 2, type: "Weapon", rarity: "Mundane", description: "A small hammer that can be wielded or thrown. Light weapon dealing 1d4 bludgeoning damage."},
            {name: "Mace", cost: 5, type: "Weapon", rarity: "Mundane", description: "A blunt weapon with a heavy head on a solid shaft. Deals 1d6 bludgeoning damage."},
            {name: "Quarterstaff", cost: 0.2, type: "Weapon", rarity: "Mundane", description: "A simple wooden staff. Versatile weapon dealing 1d6 (1d8 two-handed) bludgeoning damage."},
            {name: "Sickle", cost: 1, type: "Weapon", rarity: "Mundane", description: "A curved blade on a short handle, originally used for harvesting. Light weapon dealing 1d4 slashing damage."},
            {name: "Spear", cost: 1, type: "Weapon", rarity: "Mundane", description: "A shaft with a pointed head. Versatile and can be thrown, dealing 1d6 (1d8 two-handed) piercing damage."},
            {name: "Crossbow, light", cost: 25, type: "Weapon", rarity: "Mundane", description: "A small crossbow that can be fired with one hand. Ranged weapon dealing 1d8 piercing damage. Range 80/320."},
            {name: "Dart", cost: 0.05, type: "Weapon", rarity: "Mundane", description: "A small throwing projectile. Finesse ranged weapon dealing 1d4 piercing damage. Range 20/60."},
            {name: "Shortbow", cost: 25, type: "Weapon", rarity: "Mundane", description: "A compact bow for ranged attacks. Two-handed weapon dealing 1d6 piercing damage. Range 80/320."},
            {name: "Sling", cost: 0.1, type: "Weapon", rarity: "Mundane", description: "A strap used to hurl stones or bullets. Ranged weapon dealing 1d4 bludgeoning damage. Range 30/120."},
            {name: "Battleaxe", cost: 10, type: "Weapon", rarity: "Mundane", description: "A large single-bladed axe. Versatile weapon dealing 1d8 (1d10 two-handed) slashing damage."},
            {name: "Flail", cost: 10, type: "Weapon", rarity: "Mundane", description: "A spiked ball attached to a handle by a chain. Deals 1d8 bludgeoning damage."},
            {name: "Glaive", cost: 20, type: "Weapon", rarity: "Mundane", description: "A blade mounted on the end of a long pole. Two-handed weapon with reach, dealing 1d10 slashing damage."},
            {name: "Greataxe", cost: 30, type: "Weapon", rarity: "Mundane", description: "A massive double-bladed axe. Heavy two-handed weapon dealing 1d12 slashing damage."},
            {name: "Greatsword", cost: 50, type: "Weapon", rarity: "Mundane", description: "A large two-handed sword. Heavy weapon dealing 2d6 slashing damage."},
            {name: "Halberd", cost: 20, type: "Weapon", rarity: "Mundane", description: "A combination of axe and spear mounted on a long pole. Two-handed weapon with reach, dealing 1d10 slashing damage."},
            {name: "Lance", cost: 10, type: "Weapon", rarity: "Mundane", description: "A long spear designed for mounted combat. Reach weapon dealing 1d12 piercing damage, disadvantage when used against targets within 5 feet."},
            {name: "Longsword", cost: 15, type: "Weapon", rarity: "Mundane", description: "A classic balanced blade. Versatile weapon dealing 1d8 (1d10 two-handed) slashing damage."},
            {name: "Maul", cost: 10, type: "Weapon", rarity: "Mundane", description: "A massive two-handed hammer. Heavy weapon dealing 2d6 bludgeoning damage."},
            {name: "Morningstar", cost: 15, type: "Weapon", rarity: "Mundane", description: "A club with a spiked metal head. Deals 1d8 piercing damage."},
            {name: "Pike", cost: 5, type: "Weapon", rarity: "Mundane", description: "A very long spear. Two-handed weapon with reach, dealing 1d10 piercing damage."},
            {name: "Rapier", cost: 25, type: "Weapon", rarity: "Mundane", description: "A slender, sharply pointed sword. Finesse weapon dealing 1d8 piercing damage."},
            {name: "Scimitar", cost: 25, type: "Weapon", rarity: "Mundane", description: "A curved single-edged blade. Finesse and light weapon dealing 1d6 slashing damage."},
            {name: "Shortsword", cost: 10, type: "Weapon", rarity: "Mundane", description: "A short blade ideal for quick strikes. Finesse and light weapon dealing 1d6 piercing damage."},
            {name: "Trident", cost: 5, type: "Weapon", rarity: "Mundane", description: "A three-pronged spear. Versatile and can be thrown, dealing 1d6 (1d8 two-handed) piercing damage."},
            {name: "Warpick", cost: 5, type: "Weapon", rarity: "Mundane", description: "A pick designed for piercing armor. Deals 1d8 piercing damage."},
            {name: "Warhammer", cost: 15, type: "Weapon", rarity: "Mundane", description: "A hammer designed for battle. Versatile weapon dealing 1d8 (1d10 two-handed) bludgeoning damage."},
            {name: "Whip", cost: 2, type: "Weapon", rarity: "Mundane", description: "A flexible leather weapon. Finesse weapon with reach, dealing 1d4 slashing damage."},
            {name: "Blowgun", cost: 10, type: "Weapon", rarity: "Mundane", description: "A tube for propelling poisoned darts with your breath. Ranged weapon dealing 1 piercing damage. Range 25/100."},
            {name: "Crossbow, hand", cost: 75, type: "Weapon", rarity: "Mundane", description: "A miniature crossbow that fits in one hand. Light ranged weapon dealing 1d6 piercing damage. Range 30/120."},
            {name: "Crossbow, heavy", cost: 50, type: "Weapon", rarity: "Mundane", description: "A powerful crossbow requiring two hands. Heavy ranged weapon dealing 1d10 piercing damage. Range 100/400."},
            {name: "Longbow", cost: 50, type: "Weapon", rarity: "Mundane", description: "A tall bow with exceptional range. Two-handed heavy weapon dealing 1d8 piercing damage. Range 150/600."},
            {name: "Net", cost: 1, type: "Weapon", rarity: "Mundane", description: "A weighted net for restraining enemies. No damage, but on hit target is restrained. Range 5/15."},
            {name: "Arrows (20)", cost: 1, type: "Ammunition", rarity: "Mundane", description: "A bundle of arrows for use with bows. Standard ammunition."},
            {name: "Blowgun needles (50)", cost: 1, type: "Ammunition", rarity: "Mundane", description: "Tiny needles for blowguns, often coated with poison. Pack of 50 needles."},
            {name: "Crossbow bolts (20)", cost: 1, type: "Ammunition", rarity: "Mundane", description: "A bundle of bolts for crossbows. Standard ammunition."},
            {name: "Sling bullets (20)", cost: 0.04, type: "Ammunition", rarity: "Mundane", description: "A pouch of smooth stones or lead bullets for slings. Pack of 20 bullets."},
            {name: "Padded Armor", cost: 5, type: "Armor", rarity: "Mundane", description: "Quilted layers of cloth and batting. Light armor, AC 11 + Dex modifier, disadvantage on Stealth."},
            {name: "Leather Armor", cost: 10, type: "Armor", rarity: "Mundane", description: "Chest protection made of tough, hardened leather. Light armor, AC 11 + Dex modifier."},
            {name: "Studded Leather Armor", cost: 45, type: "Armor", rarity: "Mundane", description: "Leather reinforced with close-set rivets or spikes. Light armor, AC 12 + Dex modifier."},
            {name: "Hide Armor", cost: 10, type: "Armor", rarity: "Mundane", description: "Crude armor made from thick furs and pelts. Medium armor, AC 12 + Dex modifier (max 2)."},
            {name: "Chain Shirt", cost: 50, type: "Armor", rarity: "Mundane", description: "A shirt made of interlocking metal rings. Medium armor, AC 13 + Dex modifier (max 2)."},
            {name: "Scale Mail", cost: 50, type: "Armor", rarity: "Mundane", description: "Overlapping pieces of metal affixed to a backing. Medium armor, AC 14 + Dex modifier (max 2), disadvantage on Stealth."},
            {name: "Spiked Armor", cost: 75, type: "Armor", rarity: "Mundane", description: "Leather armor with metal spikes. Medium armor, AC 14 + Dex modifier (max 2), deals 1d4 piercing damage to grapplers. Disadvantage on Stealth."},
            {name: "Breastplate", cost: 400, type: "Armor", rarity: "Mundane", description: "Fitted metal chest plate worn over flexible leather. Medium armor, AC 14 + Dex modifier (max 2)."},
            {name: "Halfplate", cost: 750, type: "Armor", rarity: "Mundane", description: "Plate armor covering most of the body. Medium armor, AC 15 + Dex modifier (max 2), disadvantage on Stealth."},
            {name: "Ring Mail", cost: 30, type: "Armor", rarity: "Mundane", description: "Leather armor with heavy rings sewn into it. Heavy armor, AC 14, disadvantage on Stealth."},
            {name: "Chain Mail", cost: 75, type: "Armor", rarity: "Mundane", description: "Interlocking metal rings covering the entire body. Heavy armor, AC 16, requires Str 13, disadvantage on Stealth."},
            {name: "Splint", cost: 200, type: "Armor", rarity: "Mundane", description: "Narrow vertical metal strips riveted to a backing. Heavy armor, AC 17, requires Str 15, disadvantage on Stealth."},
            {name: "Plate", cost: 1500, type: "Armor", rarity: "Mundane", description: "Interlocking metal plates covering the entire body. Heavy armor, AC 18, requires Str 15, disadvantage on Stealth."},
            {name: "Alchemy Jug", cost: 3023, type: "Misc", rarity: "Uncommon", description: "This ceramic jug can produce 2 gallons of liquid per day. It can create mayonnaise, vinegar, fresh water, salt water, beer, wine, honey, or oil."},
			{name: "Amulet of Health", cost: 8200, type: "Jewelry", rarity: "Rare", description: "Your Constitution score is 19 while you wear this amulet. It has no effect if your Constitution is already 19 or higher."},
            {name: "Amulet of Proof Against Detect and Location", cost: 7700, type: "Jewelry", rarity: "Uncommon", description: "While wearing this amulet, you are hidden from divination magic. You can't be targeted by such magic or perceived through magical scrying sensors."},
            {name: "Amulet of the Planes", cost: 77667, type: "Jewelry", rarity: "Very Rare", description: "While wearing this amulet, you can use an action to name a location on another plane of existence and make a DC 15 Intelligence check. On success, you cast plane shift. On failure, everyone within 15 feet is transported to a random location."},
            {name: "Animated Shield", cost: 6700, type: "Armor", rarity: "Very Rare", description: "As a bonus action, you can animate this shield to hover and defend you, granting +2 AC while leaving your hands free. It remains animated for 1 minute. Recharges after a long rest."},
            {name: "Apparatus of Kwalish", cost: 37917, type: "Misc", rarity: "Legendary", description: "This iron vehicle resembles a giant lobster. It's airtight and watertight, providing air for 10 hours. It has underwater movement and powerful claws for attacks."},
            {name: "Armor of Invulnerability", cost: 42667, type: "Armor", rarity: "Legendary", description: "You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can't be used again until the next dawn."},
            {name: "Arrow-Catching Shield", cost: 5700, type: "Armor", rarity: "Rare", description: "You gain a +2 bonus to AC against ranged attacks while wielding this shield. As a reaction when hit by a ranged weapon attack, you can catch the ammunition if you have a free hand."},
            {name: "Bag of Beans", cost: 2100, type: "Misc", rarity: "Rare", description: "Inside this bag are 3d4 magical beans. Plant one and roll on a table to determine what sprouts, ranging from useful plants to dangerous monsters."},
            {name: "Bag of Holding", cost: 2490, type: "Misc", rarity: "Uncommon", description: "This bag has an interior space larger than its outside dimensions. It can hold up to 500 pounds, not exceeding 64 cubic feet. Weighs only 15 pounds regardless of contents."},
            {name: "Bag of Tricks", cost: 1660, type: "Misc", rarity: "Uncommon", description: "You can use an action to pull a fuzzy object from this bag and throw it. It transforms into a random creature determined by the bag's color. The creature vanishes at the next dawn or when reduced to 0 hit points."},
            {name: "Bead of Force", cost: 2334, type: "Misc", rarity: "Rare", description: "A bead of force is a throwable item that explodes in a 10-foot radius for 5d4 force damage, then creates an impenetrable sphere for 1 minute. Creatures that fail the Dex save are trapped inside, while others are pushed out, and the sphere can be moved or carried despite containing creatures."},
            {name: "Belt of Dwarvenkind", cost: 5687, type: "Apparel", rarity: "Rare", description: "This belt boosts your Constitution by 2 (up to 20) and gives advantage on Persuasion checks with dwarves, plus a daily chance to grow a magnificent beard. If you’re not a dwarf, it also grants poison resistance and save advantage, 60-foot darkvision, and the ability to speak Dwarvish."},
            {name: "Belt of Giant Strength, Cloud", cost: 89700, type: "Apparel", rarity: "Legendary", description: "While wearing this belt, your Strength score changes to 27. It has no effect if your Strength is already 27 or higher."},
            {name: "Belt of Giant Strength, Fire", cost: 44460, type: "Apparel", rarity: "Very Rare", description: "While wearing this belt, your Strength score changes to 25. It has no effect if your Strength is already 25 or higher."},
            {name: "Belt of Giant Strength, Hill", cost: 11950, type: "Apparel", rarity: "Rare", description: "While wearing this belt, your Strength score changes to 21. It has no effect if your Strength is already 21 or higher."},
            {name: "Belt of Giant Strength, Stone/Frost", cost: 25845, type: "Apparel", rarity: "Very Rare", description: "While wearing this belt, your Strength score changes to 23. It has no effect if your Strength is already 23 or higher."},
            {name: "Belt of Giant Strength, Storm", cost: 120875, type: "Apparel", rarity: "Legendary", description: "While wearing this belt, your Strength score changes to 29. It has no effect if your Strength is already 29 or higher."},
            {name: "Boots of Elvenkind", cost: 1627, type: "Apparel", rarity: "Uncommon", description: "While wearing these boots, your steps make no sound, regardless of the surface you're moving across. You also have advantage on Stealth checks that rely on moving silently."},
            {name: "Boots of Levitation", cost: 3633, type: "Apparel", rarity: "Rare", description: "While wearing these boots, you can cast levitate on yourself at will."},
            {name: "Boots of Speed", cost: 2733, type: "Apparel", rarity: "Rare", description: "These boots let you use a bonus action to double your walking speed and impose disadvantage on opportunity attacks against you, lasting until you deactivate them. The magic works for up to 10 minutes total per long rest."},
            {name: "Boots of Striding and Springing", cost: 2033, type: "Apparel", rarity: "Uncommon", description: "While wearing these boots, your walking speed becomes 30 feet (unless it's higher), and your jump distance is tripled."},
            {name: "Boots of the Winterlands", cost: 4333, type: "Apparel", rarity: "Uncommon", description: "While wearing these boots, you have resistance to cold damage and ignore difficult terrain created by ice or snow. You can tolerate temperatures as low as -50°F without any additional protection."},
            {name: "Bowl of Commanding Water Elementals", cost: 6287, type: "Misc", rarity: "Rare", description: "While this bowl is filled with water, you can speak its command word to summon a water elemental. Once used, it can't be used again until the next dawn."},
            {name: "Bracers of Archery", cost: 1367, type: "Armor", rarity: "Uncommon", description: "While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons."},
            {name: "Bracers of Defense", cost: 5133, type: "Armor", rarity: "Rare", description: "While wearing these bracers and not wearing armor or wielding a shield, you gain a +2 bonus to AC."},
            {name: "Brazier of Commanding Fire Elementals", cost: 6287, type: "Misc", rarity: "Rare", description: "While a fire burns in this brazier, you can speak its command word to summon a fire elemental. Once used, it can't be used again until the next dawn."},
            {name: "Brooch of Shielding", cost: 3225, type: "Jewelry", rarity: "Uncommon", description: "While wearing this brooch, you have resistance to force damage and immunity to damage from the magic missile spell."},
            {name: "Broom of Flying", cost: 3807, type: "Misc", rarity: "Uncommon", description: "This wooden broom can fly. It has a flying speed of 50 feet and can carry up to 200 pounds. If more weight is added, it reduces speed by 10 feet per 50 pounds over."},
            {name: "Candle of Invocation", cost: 16125, type: "Misc", rarity: "Very Rare", description: "This slender taper is dedicated to a deity and shares that deity's alignment. While lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack rolls, saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose alignment matches the candle's can cast 1st-level spells he or she has prepared without expending spell slots, though the spell's effect is as if cast with a 1st-level slot.  Alternatively, when you light the candle for the first time, you can cast the Gate spell with it. Doing so destroys the candle."},
            {name: "Cap of Water Breathing", cost: 1473, type: "Apparel", rarity: "Uncommon", description: "While wearing this cap underwater, you can speak its command word as an action to create a bubble of air around your head. It allows you to breathe normally underwater."},
            {name: "Cape of the Mountebank", cost: 4847, type: "Apparel", rarity: "Rare", description: "This cape lets you cast dimension door once per day. When you disappear, you leave behind a cloud of smoke and reappear in a similar cloud at your destination."},
            {name: "Carpet of Flying, 3x5", cost: 21967, type: "Misc", rarity: "Very Rare", description: "You can speak the command word to make this carpet hover and fly. It has a flying speed of 80 feet and can carry up to 200 pounds. Dimensions: 3 feet by 5 feet."},
            {name: "Carpet of Flying, 4x6", cost: 25267, type: "Misc", rarity: "Very Rare", description: "You can speak the command word to make this carpet hover and fly. It has a flying speed of 80 feet and can carry up to 400 pounds. Dimensions: 4 feet by 6 feet."},
            {name: "Carpet of Flying, 5x7", cost: 28567, type: "Misc", rarity: "Very Rare", description: "You can speak the command word to make this carpet hover and fly. It has a flying speed of 80 feet and can carry up to 600 pounds. Dimensions: 5 feet by 7 feet."},
            {name: "Carpet of Flying, 6x9", cost: 33517, type: "Misc", rarity: "Very Rare", description: "You can speak the command word to make this carpet hover and fly. It has a flying speed of 80 feet and can carry up to 800 pounds. Dimensions: 6 feet by 9 feet."},
            {name: "Censer of Controlling Air Elementals", cost: 6287, type: "Misc", rarity: "Rare", description: "While incense burns in this censer, you can speak its command word to summon an air elemental. Once used, it can't be used again until the next dawn."},
            {name: "Chime of Opening", cost: 2460, type: "Misc", rarity: "Rare", description: "You can strike this chime as an action to cast knock. It can be used 10 times, after which it cracks and becomes useless."},
            {name: "Circlet of Blasting", cost: 881, type: "Jewelry", rarity: "Uncommon", description: "While wearing this circlet, you can use an action to cast scorching ray with it. Once used, the property can't be used again until the next dawn."},
            {name: "Cloak of Arachnida", cost: 8973, type: "Apparel", rarity: "Very Rare", description: "This cloak grants you resistance to poison damage, immunity to being poisoned, walking speed equal to your climbing speed, and the ability to move on vertical surfaces and ceilings. You can also cast web once per day."},
            {name: "Cloak of Displacement", cost: 22400, type: "Apparel", rarity: "Rare", description: "While wearing this cloak, creatures have disadvantage on attack rolls against you. If you take damage, this property ceases to function until the start of your next turn."},
            {name: "Cloak of Elvenkind", cost: 3550, type: "Apparel", rarity: "Uncommon", description: "While wearing this cloak with the hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Stealth checks since the cloak's color shifts to camouflage you."},
            {name: "Cloak of Invisibility", cost: 56333, type: "Apparel", rarity: "Legendary", description: "While wearing this cloak, you can pull its hood over your head to cause yourself to become invisible. While you are invisible, anything you are carrying or wearing is invisible with you. You become visible when you cease wearing the hood. Pulling the hood up or down requires an action.  Deduct the time you are invisible, in increments of 1 minute, from the cloak's maximum duration of 2 hours. After 2 hours of use, the cloak ceases to function. For every uninterrupted period of 12 hours, the cloak goes unused, it regains 1 hour of duration."},
            {name: "Cloak of Protection", cost: 2200, type: "Apparel", rarity: "Uncommon", description: "You gain a +1 bonus to AC and saving throws while wearing this cloak."},
            {name: "Cloak of the Bat", cost: 6733, type: "Apparel", rarity: "Rare", description: "While wearing this cloak, you have advantage on Stealth checks. You can use it to cast polymorph on yourself, transforming into a bat. You can also use it to fly in dim light or darkness."},
            {name: "Cloak of the Manta Ray", cost: 4097, type: "Apparel", rarity: "Uncommon", description: "While wearing this cloak with its hood up, you can breathe underwater and have a swimming speed of 60 feet. You can also pull the hood up or down as a bonus action."},
            {name: "Crystal Ball", cost: 35167, type: "Misc", rarity: "Very Rare", description: "You can cast scrying with this crystal ball."},
            {name: "Crystal Ball of Mind Reading", cost: 38250, type: "Misc", rarity: "Legendary", description: "Functions as a Crystal Ball. Additionally, while scrying with it, you can cast detect thoughts targeting creatures you can see within the spell's sensor."},
            {name: "Crystal Ball of Telepathy", cost: 46850, type: "Misc", rarity: "Legendary", description: "Functions as a Crystal Ball. Additionally, while scrying with it, you can communicate telepathically with creatures you can see within the spell's sensor."},
            {name: "Crystal Ball of True Seeing", cost: 68750, type: "Misc", rarity: "Legendary", description: "Functions as a Crystal Ball. Additionally, while scrying with it, you have truesight with a radius of 120 feet centered on the spell's sensor."},
            {name: "Cube of Force", cost: 10000, type: "Misc", rarity: "Rare", description: "This cube has 36 charges. You can use an action to press one of the cube's faces and expend charges to create a barrier around you. Different faces create different effects."},
            {name: "Cubic Gate", cost: 87983, type: "Misc", rarity: "Legendary", description: "This cube has 6 sides, each linked to a different plane of existence. You can use an action to press one side and cast gate, opening a portal to that plane."},
            {name: "Daern's Instant Fortress", cost: 31800, type: "Misc", rarity: "Rare", description: "A 1-inch metal cube that transforms into a square tower 20 feet on each side and 30 feet high when activated. Has arrow slits, a battlement, and a ladder inside. Can be commanded to return to cube form."},
    {name: "Dagger of Venom", cost: 2117, type: "Weapon", rarity: "Rare", description: "A +1 dagger. You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn."},
    {name: "Dancing Sword", cost: 5200, type: "Weapon", rarity: "Very Rare", description: "A sword that can be commanded to fight on its own as a bonus action, hovering and attacking independently for up to 1 minute. It has the same attack bonus as you."},
    {name: "Decanter of Endless Water", cost: 12125, type: "Misc", rarity: "Uncommon", description: "Produces unlimited water in three modes: stream (1 gallon), fountain (5 gallons), or geyser (30 gallons that can push creatures). The geyser mode can deal 1d4 bludgeoning damage and push targets."},
    {name: "Deck of Illusions", cost: 5430, type: "Misc", rarity: "Uncommon", description: "A box containing 34 cards. Drawing a card creates an illusory creature that lasts until dispelled or you use an action to dismiss it. The illusion looks and sounds real but cannot deal damage."},
    {name: "Defender", cost: 31333, type: "Weapon", rarity: "Legendary", description: "A +3 sword that allows you to transfer up to +3 of its bonus to your AC instead of attack and damage as a bonus action. You can change the distribution each round."},
    {name: "Demon Armor", cost: 10350, type: "Armor", rarity: "Very Rare", description: "Cursed plate armor (AC 18) that gives +1 AC but cannot be removed once worn. Increases attack rolls by 1 but disadvantage on attacks against demons. Wearer is vulnerable to influence from fiends."},
    {name: "Dimensional Shackles", cost: 4133, type: "Misc", rarity: "Rare", description: "Restraints that prevent a bound creature from using teleportation, planar travel, or any extradimensional movement. Escape requires a DC 30 Dexterity or Strength check."},
    {name: "Dragon Scale Mail", cost: 11533, type: "Armor", rarity: "Very Rare", description: "AC 14 + Dex modifier (max 2) armor that grants advantage on saving throws against dragon breath weapons and resistance to one damage type based on the dragon's color."},
    {name: "Dragon Slayer", cost: 4962, type: "Weapon", rarity: "Rare", description: "A +1 weapon that deals an extra 3d6 damage against creatures of the dragon type, making it particularly effective against dragons and dragonborn."},
    {name: "Driftglobe", cost: 844, type: "Misc", rarity: "Uncommon", description: "A glass sphere that sheds bright light in a 60-foot radius (and dim light for another 60 feet) when commanded. Can cast Daylight once per day and floats within 5 feet of you."},
    {name: "Dust of Disappearance", cost: 827, type: "Misc", rarity: "Uncommon", description: "When scattered, makes all creatures and objects within a 10-foot cube invisible for 2d4 minutes. Anything moving out of the area becomes visible. Found in small packets."},
    {name: "Dust of Dryness", cost: 209, type: "Misc", rarity: "Uncommon", description: "One pinch transforms 15 cubic feet of water into a marble-sized pellet. Breaking the pellet releases the water. Contains 1d6+4 pinches. Can also dry other liquids."},
    {name: "Dwarven Plate", cost: 17603, type: "Armor", rarity: "Very Rare", description: "Plate armor (AC 18) that doesn't impose disadvantage on Stealth checks. While wearing it, you gain +2 to AC and are immune to effects that would push you or knock you prone."},
    {name: "Dwarven Thrower", cost: 18855, type: "Weapon", rarity: "Very Rare", description: "A +3 warhammer with the thrown property (range 20/60) that returns to your hand after being thrown. Deals an extra 1d8 damage to giants (2d8 when thrown)."},
    {name: "Efreeti Bottle", cost: 38835, type: "Jewelry", rarity: "Very Rare", description: "Contains an efreeti that serves you for 1 hour when released, granting up to 3 wishes or performing other services. 10% chance it attacks you instead."},
    {name: "Efreeti Chain", cost: 59250, type: "Armor", rarity: "Legendary", description: "While wearing this armor, you gain a +3 bonus to AC, you are immune to fire damage, and you can understand and speak Primordial. In addition, you can stand on and walk across molten rock as if it were solid ground."},
    {name: "Elemental Gem", cost: 788, type: "Jewelry", rarity: "Uncommon", description: "Breaking the gem summons an elemental from the appropriate plane that is friendly to you and your companions for 1 hour. The elemental then returns to its home plane."},
    {name: "Elixir of Health", cost: 795, type: "Potion", rarity: "Rare", description: "Drinking this potion cures any disease affecting you and removes the blinded, deafened, paralyzed, and poisoned conditions."},
    {name: "Elven Chain", cost: 3567, type: "Armor", rarity: "Rare", description: "A +1 chain shirt that can be worn by anyone regardless of armor proficiency. AC 13 + Dex modifier. Exceptionally light and quiet."},
    {name: "Eversmoking Bottle", cost: 1083, type: "Misc", rarity: "Uncommon", description: "Creates a 60-foot radius cloud of thick smoke when unplugged. The cloud spreads around corners and its area is heavily obscured. Lasts 10 minutes or until a strong wind disperses it."},
    {name: "Eyes of Charming", cost: 1280, type: "Jewelry", rarity: "Uncommon", description: "Lenses that let you cast Charm Person (DC 13) on a creature within 30 feet. 3 charges, regains all charges daily at dawn. Target must be able to see you."},
    {name: "Eyes of Minute Seeing", cost: 1873, type: "Jewelry", rarity: "Uncommon", description: "These lenses grant advantage on Intelligence (Investigation) checks to examine objects within 1 foot of you. In close examination, you can see things as if using a magnifying glass."},
    {name: "Eyes of the Eagle", cost: 1867, type: "Jewelry", rarity: "Uncommon", description: "Crystal lenses that grant advantage on Wisdom (Perception) checks that rely on sight. In clear conditions outdoors, you can see details of distant creatures and objects as small as 2 feet across."},
    {name: "Figurine of Wondrous Power, Dog", cost: 2419, type: "Misc", rarity: "Rare", description: "An onyx statuette that becomes a mastiff for up to 6 hours. It obeys your commands and fights for you. Can be used once per week. The mastiff disappears if reduced to 0 hit points."},
    {name: "Figurine of Wondrous Power, Elephant", cost: 5720, type: "Misc", rarity: "Rare", description: "A marble elephant that transforms into a living elephant for up to 24 hours. Can be used once per week. Stats as per the elephant creature, obeying your commands."},
    {name: "Figurine of Wondrous Power, Fly", cost: 3552, type: "Misc", rarity: "Rare", description: "A small lapislazuli statue that becomes a giant fly for up to 12 hours, serving as a mount. Can be used again after 2 days."},
    {name: "Figurine of Wondrous Power, Goats", cost: 8861, type: "Misc", rarity: "Rare", description: "Three ivory goat figurines. One becomes a riding goat for 24 hours (1/week), one a giant goat for 3 hours (1/month), and one a nightmare-like goat for 3 hours (1/15 days)."},
    {name: "Figurine of Wondrous Power, Griffon", cost: 4747, type: "Misc", rarity: "Rare", description: "A bronze griffon that transforms into a living griffon for up to 6 hours, serving as a loyal mount. Can be used again after 5 days."},
    {name: "Figurine of Wondrous Power, Lions", cost: 2527, type: "Misc", rarity: "Rare", description: "Two golden lion figurines that can each become a lion for up to 1 hour. Can be used simultaneously. Usable once per week. The lions obey your commands and fight for you."},
    {name: "Figurine of Wondrous Power, Owl", cost: 4019, type: "Misc", rarity: "Rare", description: "A serpentine owl figurine that becomes a giant owl for up to 8 hours. Can be used again after 2 says. The owl is friendly, obeys commands, and can communicate telepathically to you."},
    {name: "Figurine of Wondrous Power, Raven", cost: 2057, type: "Misc", rarity: "Uncommon", description: "A silver raven that transforms into a living raven for up to 12 hours. Can be used again after 2 days. The raven obeys simple commands and can deliver messages."},
    {name: "Figurine of Wondrous Power, Steed", cost: 44813, type: "Misc", rarity: "Very Rare", description: "An obsidian horse that becomes a Nightmare (24 hours, 1/5 days). The mount is friendly, unless you are of good alignment, in which case it has a 10% of disobeying you."},
    {name: "Flame Tongue", cost: 3867, type: "Weapon", rarity: "Rare", description: "A sword that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
    {name: "Folding Boat", cost: 7850, type: "Misc", rarity: "Rare", description: "A wooden box that unfolds into either a rowboat (10x4 feet) or a ship (24x8 feet) on command. Takes 1 action to transform. Can hold up to 4 people as a boat or 15 as a ship."},
    {name: "Frost Brand", cost: 5214, type: "Weapon", rarity: "Very Rare", description: "A +1 sword that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
    {name: "Gauntlets of Ogre Power", cost: 5967, type: "Armor", rarity: "Uncommon", description: "While wearing these gauntlets, your Strength score becomes 19 if it was lower. They have no effect if your Strength is already 19 or higher."},
    {name: "Gem of Brightness", cost: 3202, type: "Jewelry", rarity: "Uncommon", description: "Has 50 charges. Can spend charges to shed light (1), blind creatures (5), or cast Daylight (10). Regains 1d12 charges daily. Crumbles to dust when empty."},
    {name: "Gem of Seeing", cost: 15133, type: "Jewelry", rarity: "Rare", description: "Looking through this gem grants truesight out to 120 feet for 10 minutes. Has 3 charges, regaining all charges daily at dawn. See through illusions and invisible creatures."},
    {name: "Giant Slayer", cost: 4439, type: "Weapon", rarity: "Rare", description: "A +1 weapon that deals an extra 2d6 damage to creatures with the giant type. When you hit a giant, the giant must succeed on a DC 15 Strength save or fall prone."},
    {name: "Glamoured Studded Leather", cost: 3433, type: "Armor", rarity: "Rare", description: "AC 12 + Dex modifier armor that grants +1 to AC. As a bonus action, you can change its appearance to look like different clothes or armor, though it functions the same."},
    {name: "Gloves of Missile Snaring", cost: 1708, type: "Apparel", rarity: "Uncommon", description: "When hit by a ranged weapon attack, you can use your reaction to reduce damage by 1d10 + your Dexterity modifier. If reduced to 0, you catch the projectile if you have a free hand."},
    {name: "Gloves of Swimming and Climbing", cost: 1650, type: "Apparel", rarity: "Uncommon", description: "While wearing these gloves, you gain a climbing speed and swimming speed equal to your walking speed, and you gain +5 to Strength (Athletics) checks for climbing or swimming."},
    {name: "Gloves of Thievery", cost: 2757, type: "Apparel", rarity: "Uncommon", description: "While wearing these gloves, you gain +5 to Dexterity (Sleight of Hand) checks and Dexterity checks to pick locks."},
    {name: "Goggles of Night", cost: 1260, type: "Misc", rarity: "Uncommon", description: "While wearing these dark lenses, you have darkvision out to 60 feet. If you already have darkvision, its range increases by 60 feet."},
    {name: "Hammer of Thunderbolts", cost: 46515, type: "Weapon", rarity: "Legendary", description: "It’s a +1 magic hammer that requires attunement with a Belt of Giant Strength and Gauntlets of Ogre Power, boosting your Strength by 4 (up to 30). It’s especially deadly to giants—instantly killing them on a nat 20—and can be thrown using charges to unleash a massive thunderclap that stuns nearby creatures."},
    {name: "Hat of Disguise", cost: 2933, type: "Apparel", rarity: "Uncommon", description: "While wearing this hat, you can cast Disguise Self at will. The spell ends if the hat is removed. Change your appearance including clothing, armor, weapons, and other items."},
    {name: "Headband of Intellect", cost: 4975, type: "Jewelry", rarity: "Uncommon", description: "While wearing this headband, your Intelligence score becomes 19 if it was lower. It has no effect if your Intelligence is already 19 or higher."},
    {name: "Helm of Brilliance", cost: 43667, type: "Armor", rarity: "Very Rare", description: "Set with gems that grant various benefits: resistance to fire, bright light emission, gem-powered spells (10 diamonds, 20 rubies, 30 fire opals, 40 opals). Devastating when destroyed by fire."},
    {name: "Helm of Comprehending Languages", cost: 16495, type: "Armor", rarity: "Uncommon", description: "While wearing this helm, you can cast Comprehend Languages at will, allowing you to understand any spoken or written language."},
    {name: "Helm of Telepathy", cost: 773, type: "Armor", rarity: "Uncommon", description: "Grants the ability to cast Detect Thoughts (DC 13) at will while wearing it. Also lets you cast Suggestion (DC 13) once per day. Regains use of Suggestion at dawn."},
    {name: "Helm of Teleportation", cost: 8100, type: "Armor", rarity: "Rare", description: "This helm has 3 charges. You can expend 1 charge to cast Teleport from it. Regains 1d3 charges daily at dawn. Navigate through familiar and unfamiliar locations."},
    {name: "Heward's Handy Haversack", cost: 2303, type: "Misc", rarity: "Rare", description: "A backpack with three compartments: two hold 8 cubic feet/80 pounds each, one holds 2 cubic feet/20 pounds. Always weighs 5 pounds. Retrieving an item is an action. Holds much more than it appears."},
    {name: "Holy Avenger", cost: 87321, type: "Weapon", rarity: "Legendary", description: "(Requires Atunement by a Paladin) A +3 magic sword that deals an extra 2d10 radiant damage to fiends and undead. While drawn, it creates a 10-foot aura granting you and allies advantage on saves against spells and magical effects, expanding to 30 feet if you’re a 17th-level paladin."},
    {name: "Horn of Blasting", cost: 1652, type: "Misc", rarity: "Rare", description: "Deals 5d6 thunder damage in a 30-foot cone (DC 15 Constitution save for half). Objects take double damage. 20% chance it explodes, dealing 10d6 damage to the user. Has charges for uses."},
    {name: "Horn of Valhalla, Brass", cost: 11727, type: "Misc", rarity: "Rare", description: "Summons 2d4+2 warrior spirits (as berserkers) that fight for you for 1 hour. Usable once per 7 days. Nonbarbarians who blow it take 3d6 psychic damage."},
    {name: "Horn of Valhalla, Bronze", cost: 23105, type: "Misc", rarity: "Very Rare", description: "Summons 3d4+3 warrior spirits (as berserkers) that fight for you for 1 hour. Usable once per 7 days. Requires proficiency with all martial weapons. 6d6 psychic damage if unqualified."},
    {name: "Horn of Valhalla, Iron", cost: 45533, type: "Misc", rarity: "Legendary", description: "Summons 5d4+5 warrior spirits (as berserkers) that fight for you for 1 hour. Usable once per 7 days. Requires barbarian class or fighter with proficiency in all martial weapons. 8d6 damage if unqualified."},
    {name: "Horn of Valhalla, Silver", cost: 8373, type: "Misc", rarity: "Rare", description: "Summons 2d4+2 warrior spirits (as berserkers) that fight for you for 1 hour. Usable once per 7 days. Anyone can use it without penalty."},
    {name: "Horseshoes of a Zephyr", cost: 3820, type: "Misc", rarity: "Very Rare", description: "These shoes allow a horse to walk on air as if on solid ground for up to 1 hour per day. The effect can be used in 1-minute increments. Horse doesn't trigger ground effects."},
    {name: "Horseshoes of Speed", cost: 3547, type: "Misc", rarity: "Rare", description: "These shoes increase a horse's walking speed by 30 feet when all four shoes are worn. Horses with these shoes are exceptionally swift."},
    {name: "Immovable Rod", cost: 3483, type: "Wand/Staff/Rod", rarity: "Uncommon", description: "A rod that can be activated to fix in place, supporting up to 8,000 pounds. Only a DC 30 Strength check can move it. Stays fixed relative to its position even if in a moving vehicle."},
    {name: "Instrument of the Bards, Anstruth Harp", cost: 37167, type: "Misc", rarity: "Very Rare", description: "Grants +2 to spell attack rolls and performance checks. Casts Control Weather, Cure Wounds (5th), and Wall of Thorns. Each 1/day. Non-bards take 4d10 psychic damage when playing."},
    {name: "Instrument of the Bards, Canaith Mandolin", cost: 14690, type: "Misc", rarity: "Rare", description: "Grants +2 to spell attack rolls and performance checks. Casts Cure Wounds (3rd), Dispel Magic, and Protection from Energy. Each 1/day. Non-bards take 3d6 psychic damage when playing."},
    {name: "Instrument of the Bards, Cli Lyre", cost: 17163, type: "Misc", rarity: "Rare", description: "Grants +2 to spell attack rolls and performance checks. Casts Stone Shape, Wall of Fire, and Wind Wall. Each 1/day. Non-bards take 3d6 psychic damage when playing."},
    {name: "Instrument of the Bards, Doss Lute", cost: 11803, type: "Misc", rarity: "Uncommon", description: "Grants +2 to spell attack rolls and performance checks. Casts Animal Friendship, Protection from Energy, and Protection from Poison. Each 1/day. Non-bards take 2d4 psychic damage."},
    {name: "Instrument of the Bards, Fochlucan Bandore", cost: 10930, type: "Misc", rarity: "Uncommon", description: "Grants +2 to spell attack rolls and performance checks. Casts Entangle, Faerie Fire, Shillelagh, and Speak with Animals. Each 1/day. Non-bards take 2d4 psychic damage."},
    {name: "Instrument of the Bards, Mac-Fuirmidh Cittern", cost: 11130, type: "Misc", rarity: "Uncommon", description: "Grants +2 to spell attack rolls and performance checks. Casts Barkskin, Cure Wounds, and Fog Cloud. Each 1/day. Non-bards take 2d4 psychic damage when playing."},
    {name: "Instrument of the Bards, Ollamh Harp", cost: 81333, type: "Misc", rarity: "Legendary", description: "Grants +2 to spell attack rolls and performance checks. Casts Confusion, Control Weather, and Fire Storm. Each 1/day. Non-bards take 5d10 psychic damage when playing."},
    {name: "Ioun Stone, Absorption", cost: 8967, type: "Jewelry", rarity: "Very Rare", description: "Orbits your head and absorbs spells of 4th level or lower cast at you, storing up to 20 levels. You can cast stored spells. Becomes dull when it has absorbed 20 levels."},
    {name: "Ioun Stone, Agility", cost: 4297, type: "Jewelry", rarity: "Very Rare", description: "This deep red sphere orbits your head and increases your Dexterity score by 2, up to a maximum of 20."},
    {name: "Ioun Stone, Awareness", cost: 5733, type: "Jewelry", rarity: "Rare", description: "This dark blue rhomboid orbits your head. You can't be surprised while conscious, and you gain +5 to Initiative rolls."},
    {name: "Ioun Stone, Fortitude", cost: 4297, type: "Jewelry", rarity: "Very Rare", description: "This pink rhomboid orbits your head and increases your Constitution score by 2, up to a maximum of 20."},
    {name: "Ioun Stone, Greater Absorption", cost: 46083, type: "Jewelry", rarity: "Legendary", description: "Orbits your head and absorbs spells of 8th level or lower cast at you, storing up to 50 levels. You can cast stored spells. Becomes dull when it has absorbed 50 levels."},
    {name: "Ioun Stone, Insight", cost: 4297, type: "Jewelry", rarity: "Very Rare", description: "This incandescent blue sphere orbits your head and increases your Wisdom score by 2, up to a maximum of 20."},
    {name: "Ioun Stone, Intellect", cost: 4297, type: "Jewelry", rarity: "Very Rare", description: "This marbled scarlet and blue sphere orbits your head and increases your Intelligence score by 2, up to a maximum of 20."},
    {name: "Ioun Stone, Leadership", cost: 4297, type: "Jewelry", rarity: "Very Rare", description: "This marbled pink and green sphere orbits your head and increases your Charisma score by 2, up to a maximum of 20."},
    {name: "Ioun Stone, Mastery", cost: 52500, type: "Jewelry", rarity: "Legendary", description: "This pale green prism orbits your head and increases your proficiency bonus by 1. This affects attack rolls, saving throws, skill checks, and spell save DCs."},
    {name: "Ioun Stone, Protection", cost: 2200, type: "Jewelry", rarity: "Rare", description: "This dusty rose prism orbits your head and grants +1 to AC. It occupies your attunement slot and can be grabbed as an action."},
    {name: "Ioun Stone, Regeneration", cost: 24667, type: "Jewelry", rarity: "Legendary", description: "This pearly white spindle orbits your head. You regain 15 hit points at the end of each hour, as long as you have at least 1 hit point."},
    {name: "Ioun Stone, Reserve", cost: 5500, type: "Jewelry", rarity: "Rare", description: "This vibrant purple prism orbits your head and stores 3 levels of spells. You can cast spells into it and retrieve them later. The stone becomes dull gray when empty."},
    {name: "Ioun Stone, Strength", cost: 4297, type: "Jewelry", rarity: "Very Rare", description: "This pale blue rhomboid orbits your head and increases your Strength score by 2, up to a maximum of 20."},
    {name: "Ioun Stone, Sustenance", cost: 1733, type: "Jewelry", rarity: "Rare", description: "This clear spindle orbits your head. You don't need to eat or drink while it is active. It provides all the sustenance your body needs."},
    {name: "Iron Bands of Bilarro", cost: 2860, type: "Misc", rarity: "Rare", description: "A rusty iron sphere. When thrown, bands spring out to restrain a Large or smaller creature (DC 20 Strength save). Restrained target can't move. DC 20 Strength check or dealing 20 slashing damage breaks bands."},
    {name: "Iron Flask", cost: 93250, type: "Misc", rarity: "Legendary", description: "Can trap one creature inside (DC 17 Wisdom save to resist). Trapped creature is held in stasis. Opening releases the creature, which is hostile unless you control it. Can hold one creature at a time."},
    {name: "Javelin of Lightning", cost: 1046, type: "Weapon", rarity: "Uncommon", description: "When thrown, transforms into a lightning bolt in a 120-foot line. Each creature in line makes DC 13 Dexterity save, taking 4d6 lightning damage (half on success). The javelin is destroyed."},
    {name: "Keoghtom's Ointment", cost: 637, type: "Potion", rarity: "Uncommon", description: "A jar contains 5 doses. One dose heals 2d8+2 hit points, or you can use all 5 doses to cure any disease or neutralize any poison affecting a creature. Applied as an action."},
    {name: "Lantern of Revealing", cost: 2823, type: "Misc", rarity: "Uncommon", description: "Burns for 6 hours on 1 pint of oil. Sheds bright light in 30-foot radius, dim light 30 feet beyond. Invisible creatures and objects become visible in the light. Can be shuttered."},
    {name: "Luck Blade", cost: 35350, type: "Weapon", rarity: "Legendary", description: "A +1 sword that grants +1 to all saving throws. May contain 1d4-1 Wishes. Once all wishes are used, it loses that property but retains other abilities. Reroll any attack roll, save, or check once per day."},
    {name: "Mace of Disruption", cost: 4477, type: "Weapon", rarity: "Rare", description: "A +2 mace that deals extra 2d6 radiant damage to fiends and undead. On a critical hit, the target must succeed on DC 15 Wisdom save or be destroyed (if 25 HP or less remaining)."},
    {name: "Mace of Smiting", cost: 5713, type: "Weapon", rarity: "Rare", description: "A +1 mace that becomes +3 against constructs. On a hit against a construct, it deals an extra 2d6 bludgeoning damage. Critical hits can destroy constructs instantly (DC 17 Constitution save)."},
    {name: "Mace of Terror", cost: 4753, type: "Weapon", rarity: "Rare", description: "This mace has 3 charges. You can expend 1 charge to release a wave of terror in a 30-foot radius. Creatures must succeed on a DC 15 Wisdom save or be frightened for 1 minute. Regains charges daily."},
    {name: "Mantle of Spell Resistance", cost: 13400, type: "Apparel", rarity: "Rare", description: "While wearing this cloak, you have advantage on saving throws against spells and other magical effects. Provides significant protection against hostile magic."},
    {name: "Manual of Bodily Health", cost: 39830, type: "Book", rarity: "Very Rare", description: "Reading this book (48 hours over 6 days) increases your Constitution by 2 and maximum by 2. The book loses magic for 100 years after use. Maximum cannot exceed 30."},
    {name: "Manual of Gainful Exercise", cost: 36830, type: "Book", rarity: "Very Rare", description: "Reading this book (48 hours over 6 days) increases your Strength by 2 and maximum by 2. The book loses magic for 100 years after use. Maximum cannot exceed 30."},
    {name: "Manual of Golems, Clay", cost: 19168, type: "Book", rarity: "Very Rare", description: "Contains instructions and components for creating a clay golem. Reading it (80 hours over 10 days) grants knowledge to build the construct. You must provide materials costing 65,000 gp. Book consumed in process."},
    {name: "Manual of Golems, Flesh", cost: 13228, type: "Book", rarity: "Very Rare", description: "Contains instructions for creating a flesh golem. Reading (48 hours over 6 days) grants construction knowledge. Requires 50,000 gp in materials. Book consumed in process. Requires humanoid body parts."},
{name: "Manual of Golems, Iron", cost: 24613, type: "Book", rarity: "Very Rare", description: "Contains instructions for creating an iron golem. Reading (120 hours over 15 days) grants construction knowledge. Requires 100,000 gp in materials. Book consumed in process. Most powerful construct."},
    {name: "Manual of Golems, Stone", cost: 21890, type: "Book", rarity: "Very Rare", description: "Contains instructions for creating a stone golem. Reading (96 hours over 12 days) grants construction knowledge. Requires 80,000 gp in materials. Book consumed in process. Durable guardian."},
    {name: "Manual of Quickness of Action", cost: 39830, type: "Book", rarity: "Very Rare", description: "Reading this book (48 hours over 6 days) increases your Dexterity by 2 and maximum by 2. The book loses magic for 100 years after use. Maximum cannot exceed 30."},
    {name: "Mariner's Armor", cost: 1293, type: "Armor", rarity: "Uncommon", description: "While wearing this armor, you have a swimming speed equal to your walking speed. Can be worn under normal clothes. Doesn't slow you in water or impose disadvantage on checks."},
    {name: "Medallion of Thoughts", cost: 1460, type: "Jewelry", rarity: "Uncommon", description: "Has 3 charges. You can use 1 charge to cast Detect Thoughts (DC 13) from it. Regains all charges daily at dawn. Read surface thoughts or probe deeper into minds."},
    {name: "Mirror of Life Trapping", cost: 27287, type: "Jewelry", rarity: "Very Rare", description: "A 4-foot mirror with 12 cells that can trap creatures. Those who look at it must save (DC 15 Charisma) or be trapped in a cell. Creatures in cells don't age. Breaking mirror releases all."},
    {name: "Mithral Breastplate", cost: 1187, type: "Armor", rarity: "Uncommon", description: "Breastplate made of mithral that doesn't impose disadvantage on Stealth checks. AC 14 + Dex modifier (max 2). Lighter than normal breastplate."},
    {name: "Mithral Chain Mail", cost: 1008, type: "Armor", rarity: "Uncommon", description: "Chain mail made of mithral that doesn't impose disadvantage on Stealth checks and doesn't have a Strength requirement. AC 16. Light and flexible metal."},
    {name: "Mithral Chain Shirt", cost: 994, type: "Armor", rarity: "Uncommon", description: "Chain shirt made of mithral. AC 13 + Dex modifier (max 2), doesn't impose disadvantage on Stealth checks. Light and quiet armor."},
    {name: "Mithral Half Plate", cost: 1379, type: "Armor", rarity: "Uncommon", description: "Half plate made of mithral that doesn't impose disadvantage on Stealth checks. AC 15 + Dex modifier (max 2). No Strength requirement. Remarkably quiet."},
    {name: "Mithral Plate", cost: 1792, type: "Armor", rarity: "Uncommon", description: "Plate armor made of mithral that doesn't impose disadvantage on Stealth checks and doesn't have a Strength requirement. AC 18. Remarkably light full plate."},
    {name: "Mithral Ring Mail", cost: 983, type: "Armor", rarity: "Uncommon", description: "Ring mail made of mithral that doesn't impose disadvantage on Stealth checks. AC 14. Lighter and quieter than standard ring mail."},
    {name: "Mithral Scale Mail", cost: 994, type: "Armor", rarity: "Uncommon", description: "Scale mail made of mithral that doesn't impose disadvantage on Stealth checks. AC 14 + Dex modifier (max 2). Light and flexible."},
    {name: "Mithral Splint", cost: 1077, type: "Armor", rarity: "Uncommon", description: "Splint armor made of mithral that doesn't impose disadvantage on Stealth checks and has no Strength requirement. AC 17. Quiet heavy armor."},
    {name: "Necklace of Adaption", cost: 1550, type: "Jewelry", rarity: "Uncommon", description: "While wearing this necklace, you can breathe normally in any environment, including underwater, in poisonous gas, or in a vacuum. You're immune to harmful gases and vapors."},
    {name: "Necklace of Fireballs", cost: 4638, type: "Jewelry", rarity: "Rare", description: "Has 1d6+3 beads hanging from it. Each bead can be detached and thrown up to 60 feet. Explodes as 3rd-level Fireball (DC 15 Dex save). Different bead types for higher level Fireballs."},
    {name: "Necklace of Prayer Beads, Blessing Bead", cost: 2653, type: "Jewelry", rarity: "Rare", description: "This necklace has magical beads. The Blessing bead allows you to cast Bless once per day. Primarily useful for divine spellcasters."},
    {name: "Necklace of Prayer Beads, Curing Bead", cost: 3480, type: "Jewelry", rarity: "Rare", description: "This bead on the necklace allows you to cast Cure Wounds at 2nd level or Lesser Restoration once per day. Useful for healing."},
    {name: "Necklace of Prayer Beads, Favor Bead", cost: 14200, type: "Jewelry", rarity: "Rare", description: "This bead allows you to cast Greater Restoration once per day. Can remove exhaustion, curses, petrification, or ability score reductions."},
    {name: "Necklace of Prayer Beads, Smiting Bead", cost: 2647, type: "Jewelry", rarity: "Rare", description: "This bead allows you to cast Branding Smite once per day as a bonus action. Deals extra radiant damage and prevents invisibility."},
    {name: "Necklace of Prayer Beads, Summons Bead", cost: 15000, type: "Jewelry", rarity: "Rare", description: "This bead allows you to cast Planar Ally once per day. Summons a celestial, elemental, or fey to aid you for 24 hours."},
    {name: "Necklace of Prayer Beads, Wind Walking Bead", cost: 14333, type: "Jewelry", rarity: "Rare", description: "This bead allows you to cast Wind Walk once per day. You and allies transform into gaseous forms and can fly at high speed for up to 8 hours."},
    {name: "Nine Lives Stealer", cost: 28317, type: "Weapon", rarity: "Very Rare", description: "A +2 sword with 1d8+1 charges. When you score a critical hit, the target must succeed on DC 15 Constitution save or drop to 0 HP (if under 100 HP). Each use consumes 1 charge."},
    {name: "Nolzur's Marvelous Pigments", cost: 8700, type: "Misc", rarity: "Very Rare", description: "Can paint objects and terrain that become real. Paint uses 1d4 pots per 100 sq ft. Can create nonmagical objects, doors, pits, bridges, etc. Objects must be supported or they fall."},
    {name: "Oathbow", cost: 6890, type: "Weapon", rarity: "Very Rare", description: "A +2 longbow. You can declare a creature as your sworn enemy. Against that enemy: +3d6 damage, advantage on attacks, disadvantage on attacks against others, enemy has disadvantage on saves vs your spells."},
    {name: "Oil of Etherealness", cost: 2040, type: "Potion", rarity: "Rare", description: "This cloudy gray oil can be applied to yourself or another creature. The target becomes ethereal for 1 hour, able to move through solid objects and see into the Ethereal Plane. Applied as an action."},
    {name: "Oil of Sharpness", cost: 2570, type: "Potion", rarity: "Very Rare", description: "This clear oil can be applied to one slashing or piercing weapon. For 1 hour, the weapon becomes +3 and ignores resistance to slashing/piercing damage. Applied as an action."},
{name: "Oil of Slipperiness", cost: 408, type: "Potion", rarity: "Uncommon", description: "Can be poured on ground (10-foot square) or applied to creature. Ground becomes difficult terrain. Creature gains effects of Freedom of Movement for 8 hours. Applied as an action."},
    {name: "Pearl of Power", cost: 2733, type: "Jewelry", rarity: "Uncommon", description: "While holding this pearl, you can use an action to regain one expended spell slot of 3rd level or lower. Once used, can't be used again until next dawn."},
    {name: "Periapt of Health", cost: 2410, type: "Jewelry", rarity: "Uncommon", description: "While wearing this pendant, you are immune to contracting any disease. If already diseased when you put it on, the effects are suppressed while wearing it."},
    {name: "Periapt of Proof against Poison", cost: 4553, type: "Jewelry", rarity: "Rare", description: "While wearing this pendant, you have immunity to poison damage and the poisoned condition. Neutralizes any poison currently affecting you when first worn."},
    {name: "Periapt of Wound Closure", cost: 1392, type: "Jewelry", rarity: "Uncommon", description: "While wearing this pendant, you stabilize automatically when dying. Your Hit Dice heal double the normal amount during short rests. Prevents bleeding out."},
    {name: "Philter of Love", cost: 328, type: "Potion", rarity: "Uncommon", description: "For 1 hour after drinking, you become charmed by the first creature you see. While charmed, you regard the creature as your true love. DC 15 Wisdom save ends effect early."},
    {name: "Pipes of Haunting", cost: 2694, type: "Misc", rarity: "Uncommon", description: "Has 3 charges. Use 1 charge to play an eerie tune. Each creature within 30 feet must succeed on DC 15 Wisdom save or be frightened for 1 minute. Regains charges at dawn."},
    {name: "Pipes of the Sewers", cost: 1077, type: "Misc", rarity: "Uncommon", description: "Has 3 charges. Use 1-3 charges to summon rat swarms (1 swarm per charge) within 400 feet. They obey you for 1 hour. DC 15 Wisdom check or attract hostile rats. Regains charges at dawn."},
    {name: "Plate Armor of Etherealness", cost: 43167, type: "Armor", rarity: "Legendary", description: "Plate armor (AC 18) that allows you to use an action to become ethereal for 10 minutes. Can move through solid objects and see into Ethereal Plane. Usable once per day."},
    {name: "Portable Hole", cost: 5213, type: "Misc", rarity: "Rare", description: "A 6-foot diameter cloth that unfolds into a 10-foot deep extradimensional hole. Can hold 500 pounds. Placing inside Bag of Holding or similar creates a rift to Astral Plane."},
    {name: "Potion of Animal Friendship", cost: 166, type: "Potion", rarity: "Uncommon", description: "For 1 hour after drinking, you can cast Animal Friendship at will (DC 13). Charm beasts to make them friendly and less hostile toward you and your companions."},
    {name: "Potion of Clairvoyance", cost: 840, type: "Potion", rarity: "Rare", description: "When you drink this potion, you gain the effect of Clairvoyance spell for 10 minutes. Create an invisible sensor to see or hear a distant location you're familiar with."},
    {name: "Potion of Climbing", cost: 257, type: "Potion", rarity: "Common", description: "For 1 hour after drinking, you gain a climbing speed equal to your walking speed. Can move across vertical surfaces and upside down while leaving hands free."},
    {name: "Potion of Diminution", cost: 389, type: "Potion", rarity: "Rare", description: "For 1d4 hours after drinking, you shrink to one-eighth your normal size. Your Strength becomes 1. Weapons deal 1d4 less damage (minimum 1). Advantage on Dexterity (Stealth) checks."},
    {name: "Potion of Fire Breath", cost: 233, type: "Potion", rarity: "Uncommon", description: "After drinking, you can use an action to exhale fire three times within the next hour. Each time deals 4d6 fire damage in a 15-foot cone (DC 13 Dex save for half)."},
    {name: "Potion of Flying", cost: 1330, type: "Potion", rarity: "Very Rare", description: "For 1 hour after drinking, you gain a flying speed equal to your walking speed. Can hover. If airborne when effect ends, you fall unless you can stop the fall."},
    {name: "Potion of Gaseous Form", cost: 820, type: "Potion", rarity: "Rare", description: "For 1 hour after drinking, you transform into a misty cloud. Resistant to nonmagical damage, can pass through small gaps, flying speed 10 feet. Can't talk, manipulate objects, attack, or cast."},
    {name: "Potion of Giant Strength, Cloud", cost: 2872, type: "Potion", rarity: "Very Rare", description: "For 1 hour after drinking, your Strength becomes 27. One of the most powerful Giant Strength potions available."},
    {name: "Potion of Giant Strength, Fire", cost: 1183, type: "Potion", rarity: "Rare", description: "For 1 hour after drinking, your Strength becomes 25. Makes you as strong as a fire giant."},
    {name: "Potion of Giant Strength, Frost/Stone", cost: 762, type: "Potion", rarity: "Rare", description: "For 1 hour after drinking, your Strength becomes 23. Makes you as strong as a frost or stone giant."},
    {name: "Potion of Giant Strength, Hill", cost: 219, type: "Potion", rarity: "Uncommon", description: "For 1 hour after drinking, your Strength becomes 21. Makes you as strong as a hill giant, the weakest of the giant types."},
    {name: "Potion of Giant Strength, Storm", cost: 7900, type: "Potion", rarity: "Legendary", description: "For 1 hour after drinking, your Strength becomes 29. The most powerful Giant Strength potion, equal to storm giant strength."},
    {name: "Potion of Greater Healing", cost: 205, type: "Potion", rarity: "Uncommon", description: "Drinking this potion restores 4d4+4 hit points. A stronger healing potion for more severe injuries."},
    {name: "Potion of Growth", cost: 206, type: "Potion", rarity: "Uncommon", description: "For 1d4 hours after drinking, you grow to double your size in all dimensions. Strength becomes 25 (if lower). Weapons deal 1d4 extra damage. Disadvantage on Dexterity (Stealth) checks."},
    {name: "Potion of Healing", cost: 135, type: "Potion", rarity: "Common", description: "Drinking this potion restores 2d4+2 hit points. The most common healing potion, useful for recovering from minor injuries."},
    {name: "Potion of Heroism", cost: 486, type: "Potion", rarity: "Rare", description: "For 1 hour after drinking, you gain 10 temporary hit points and are under the effect of the Bless spell (d4 to attack rolls and saves). Confidence and courage surge through you."},
    {name: "Potion of Invisibility", cost: 758, type: "Potion", rarity: "Very Rare", description: "After drinking, you become invisible for 1 hour. Anything you wear or carry is invisible too. Effect ends if you attack or cast a spell."},
    {name: "Potion of Invulnerability", cost: 2757, type: "Potion", rarity: "Rare", description: "For 1 minute after drinking, you have resistance to all damage. Extremely powerful protection making you nearly unstoppable temporarily."},
    {name: "Potion of Longevity", cost: 5482, type: "Potion", rarity: "Very Rare", description: "Reduces your age by 1d6+6 years (to minimum of 13). Each time after first, 10% cumulative chance it instead ages you by 1d6+6 years. Effect permanent."},
    {name: "Potion of Mind Reading", cost: 692, type: "Potion", rarity: "Rare", description: "For 10 minutes after drinking, you can cast Detect Thoughts at will (DC 13). Read surface thoughts or probe deeper into creatures' minds within 30 feet."},
    {name: "Potion of Poison", cost: 1956, type: "Potion", rarity: "Uncommon", description: "Appears identical to healing potion. Drinking deals 3d6 poison damage and poisons you for 1 hour (DC 13 Constitution save for half damage and no poisoned condition)."},
    {name: "Potion of Resistance", cost: 632, type: "Potion", rarity: "Uncommon", description: "For 1 hour after drinking, you gain resistance to one type of damage (determined by potion type): acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder."},
    {name: "Potion of Speed", cost: 630, type: "Potion", rarity: "Very Rare", description: "After drinking, you gain the effects of the Haste spell for 1 minute (no concentration). Double speed, +2 AC, advantage on Dexterity saves, extra action each turn."},
    {name: "Potion of Superior Healing", cost: 463, type: "Potion", rarity: "Rare", description: "Drinking this potion restores 8d4+8 hit points. A powerful healing potion for serious wounds."},
    {name: "Potion of Supreme Healing", cost: 1470, type: "Potion", rarity: "Very Rare", description: "Drinking this potion restores 10d4+20 hit points. The most powerful standard healing potion available."},
    {name: "Potion of Vitality", cost: 1690, type: "Potion", rarity: "Very Rare", description: "Drinking removes exhaustion and cures diseases or poisons. For 24 hours, you regain maximum hit points from any healing. Revitalizes completely."},
    {name: "Potion of Water Breathing", cost: 259, type: "Potion", rarity: "Uncommon", description: "After drinking, you can breathe underwater for 1 hour. Doesn't grant swimming speed, just allows normal breathing beneath water."},
    {name: "Quaal's Feather Token, Anchor", cost: 1083, type: "Misc", rarity: "Rare", description: "A tiny object that transforms into an anchor when activated on a boat, immediately stopping the vessel's movement. The ship cannot move until the token is removed."},
    {name: "Quaal's Feather Token, Bird", cost: 2543, type: "Misc", rarity: "Rare", description: "Transforms into a Large roc-like bird that can carry a message to a specified location within 300 miles. Travels 50 miles per hour for 24 hours."},
    {name: "Quaal's Feather Token, Fan", cost: 549, type: "Misc", rarity: "Rare", description: "Creates a strong wind in a 30-foot cone, pushing creatures and objects. Can be used to propel a vessel or clear away gas. Lasts 1 round."},
    {name: "Quaal's Feather Token, Swan Boat", cost: 1553, type: "Misc", rarity: "Rare", description: "Transforms into a swan-shaped boat (50 feet long, 20 feet wide) that moves at 6 miles per hour and can carry 32 Medium creatures. Lasts 24 hours."},
    {name: "Quaal's Feather Token, Tree", cost: 1553, type: "Misc", rarity: "Rare", description: "Creates a 60-foot tall, 5-foot diameter oak tree with a 20-foot branch spread. The tree is permanent and rooted in soil or similar material."},
    {name: "Quaal's Feather Token, Whip", cost: 549, type: "Misc", rarity: "Rare", description: "Transforms into a spectral whip that makes a melee attack against a creature within 10 feet (+10 to hit, 1d6+4 force damage). Single use."},
    {name: "Quiver of Ehlonna", cost: 582, type: "Weapon", rarity: "Uncommon", description: "This quiver has three compartments: 60 arrows, 18 javelins, or 6 bows/staffs. Weighs only 2 pounds regardless of contents. Reaching for items is automatic."},
    {name: "Ring of Air Elemental Command", cost: 66350, type: "Jewelry", rarity: "Legendary", description: "Grants resistance to lightning damage, can cast several air-themed spells, and allows speaking Auran. Can summon an air elemental once per day. Commands air creatures with disadvantage on attacks against you."},
 {name: "Ring of Animal Influence", cost: 2569, type: "Jewelry", rarity: "Rare", description: "Has 3 charges to cast Animal Friendship (1), Fear affecting beasts only (2), or Speak with Animals (1). Regains 1d3 charges daily at dawn. Control and communicate with beasts."},
    {name: "Ring of Djinni Summoning", cost: 79000, type: "Jewelry", rarity: "Legendary", description: "Can summon a djinni from the Elemental Plane of Air. The djinni appears in an unoccupied space within 120 feet and serves you for 1 hour. Usable once per day."},
    {name: "Ring of Earth Elemental Command", cost: 65217, type: "Jewelry", rarity: "Legendary", description: "Grants resistance to acid damage, can cast several earth-themed spells, move through stone, and speaks Terran. Can summon an earth elemental once per day. Commands earth creatures."},
    {name: "Ring of Evasion", cost: 5100, type: "Jewelry", rarity: "Rare", description: "Has 3 charges. When you fail a Dexterity saving throw, you can use your reaction to expend 1 charge and succeed instead. Regains all charges daily at dawn."},
    {name: "Ring of Feather Falling", cost: 1800, type: "Jewelry", rarity: "Rare", description: "When you fall, you descend 60 feet per round and take no falling damage. Activates automatically if you're conscious. Doesn't expend charges."},
    {name: "Ring of Fire Elemental Command", cost: 70967, type: "Jewelry", rarity: "Legendary", description: "Grants immunity to fire damage, can cast several fire spells, and speaks Ignan. Can summon a fire elemental once per day. Commands fire creatures with disadvantage on attacks against you."},
    {name: "Ring of Free Action", cost: 10167, type: "Jewelry", rarity: "Rare", description: "While wearing this ring, difficult terrain doesn't cost extra movement. Magic can't reduce your speed, paralyze you, or restrain you. Can move normally underwater."},
    {name: "Ring of Invisibility", cost: 31333, type: "Jewelry", rarity: "Legendary", description: "You can turn invisible as an action. Anything you wear or carry is invisible. Remain invisible until the ring is removed, you attack, cast a spell, or use a bonus action to become visible."},
    {name: "Ring of Jumping", cost: 1217, type: "Jewelry", rarity: "Uncommon", description: "While wearing this ring, you can cast Jump on yourself at will. Triple your jump distance without concentration required."},
    {name: "Ring of Mind Shielding", cost: 8917, type: "Jewelry", rarity: "Uncommon", description: "Immune to magic that reads thoughts, determines lies, or knows alignment/creature type. Thoughts can't be read telepathically. If you die while wearing, your soul enters ring for others to communicate with."},
    {name: "Ring of Protection", cost: 3367, type: "Jewelry", rarity: "Rare", description: "While wearing this ring, you gain +1 bonus to AC and saving throws. Simple but effective protection enhancement."},
    {name: "Ring of Regeneration", cost: 27333, type: "Jewelry", rarity: "Very Rare", description: "You regain 1d6 hit points every 10 minutes if you have at least 1 HP. If you lose a body part, the ring causes it to regrow in 1d6+1 days (if you have all pieces)."},
    {name: "Ring of Resistance", cost: 5167, type: "Jewelry", rarity: "Rare", description: "You have resistance to one type of damage (specified when found): acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder."},
    {name: "Ring of Shooting Stars", cost: 12822, type: "Jewelry", rarity: "Very Rare", description: "In dim light/darkness: cast Dancing Lights or Light, shoot magic missiles (50 charges for 1-3 missiles), or create a ball of lightning dealing 4d8 lightning damage (50 charges). Regains charges nightly."},
    {name: "Ring of Spell Storing", cost: 12200, type: "Jewelry", rarity: "Rare", description: "Can store up to 5 levels of spells. Any creature can cast a stored spell. Spellcasting ability of original caster is used. Acts as a spell battery for your party."},
    {name: "Ring of Spell Turning", cost: 39500, type: "Jewelry", rarity: "Legendary", description: "Has 3 charges. When targeted by a spell, expend charges equal to spell's level (max 3) to turn the spell back at caster. Regains 1d3 charges at dawn. Reflects magic back."},
    {name: "Ring of Swimming", cost: 2090, type: "Jewelry", rarity: "Uncommon", description: "While wearing this ring, you have a swimming speed of 40 feet. Greatly enhances underwater mobility."},
    {name: "Ring of Telekinesis", cost: 39500, type: "Jewelry", rarity: "Very Rare", description: "You can cast Telekinesis at will. Move objects or creatures with your mind (up to 1,000 pounds). Requires concentration. DC determined by your spellcasting ability or Intelligence."},
    {name: "Ring of the Ram", cost: 3236, type: "Jewelry", rarity: "Rare", description: "Has 3 charges to make ranged attacks. Hit deals 2d10 force damage per charge used and pushes 5 feet per charge. Can also break objects. Regains 1d3 charges at dawn."},
    {name: "Ring of Three Wishes", cost: 27225, type: "Jewelry", rarity: "Legendary", description: "Contains 3 charges. You can expend a charge to cast Wish. Once all charges are used, the ring becomes a nonmagical ring. One of the most powerful magic items."},
    {name: "Ring of Warmth", cost: 1993, type: "Jewelry", rarity: "Uncommon", description: "While wearing this ring, you have resistance to cold damage. You and your gear are unharmed by temperatures as low as -50°F. Comfortable in arctic conditions."},
    {name: "Ring of Water Elemental Command", cost: 64317, type: "Jewelry", rarity: "Legendary", description: "Grants water breathing, swimming speed 60 feet, can cast water spells, and speaks Aquan. Can summon a water elemental once per day. Commands water creatures with disadvantage on attacks."},
    {name: "Ring of Water Walking", cost: 2317, type: "Jewelry", rarity: "Uncommon", description: "While wearing this ring, you can stand and move on any liquid surface as if it were solid ground. Can walk on water, lava (with fire resistance), or acid (with acid resistance)."},
    {name: "Ring of X-Ray Vision", cost: 3967, type: "Jewelry", rarity: "Rare", description: "You can see through solid matter within 30 feet for 1 minute. Stone blocks vision after 30 feet, metal after 10, lead blocks completely. 1 use per day. Can spot hidden things."},
{name: "Robe of Eyes", cost: 17133, type: "Apparel", rarity: "Rare", description: "Covered in magical eyes that grant advantage on sight Perception checks, darkvision 120 feet, see invisible creatures/objects, and see into Ethereal Plane 120 feet. Can't be blinded. Vulnerable to bright light."},
    {name: "Robe of Scintillating Colors", cost: 12650, type: "Apparel", rarity: "Very Rare", description: "Has 3 charges. Use an action to dazzle creatures within 60 feet (DC 15 Wisdom save or stunned until end of your next turn). Regains 1d3 charges at dawn."},
    {name: "Robe of Stars", cost: 39950, type: "Apparel", rarity: "Very Rare", description: "Grants +1 to saves, covered in stars. 6 stars can be removed to cast Magic Missile (5th level). Use an action to enter Astral Plane for 10 minutes (1/day). Stars regenerate nightly."},
    {name: "Robe of the Archmagi", cost: 50833, type: "Apparel", rarity: "Legendary", description: "Requires wizard, sorcerer, or warlock. AC 15 + Dex mod, advantage on saves vs spells/magical effects, and +2 to spell attack rolls and spell save DC. Powerful spellcaster robe."},
    {name: "Robe of Useful Items", cost: 200, type: "Apparel", rarity: "Uncommon", description: "Adorned with patches. Each patch can be detached to become the item depicted (ladder, pole, dagger, bag, rope, etc.). 2 of each common item and 1d4 random useful items."},
    {name: "Rod of Absorption", cost: 45417, type: "Wand/Staff/Rod", rarity: "Very Rare", description: "Can absorb spells targeting only you. Holds up to 50 levels of spell energy. Use stored levels to cast spells or add as damage to melee attacks (1 level = 1d6 force). Stores energy permanently."},
    {name: "Rod of Alertness", cost: 15600, type: "Wand/Staff/Rod", rarity: "Very Rare", description: "While holding, you have advantage on Initiative and Perception checks. Rod sheds bright light 60 feet. Can cast various detection spells (7 charges). Cast Animate Objects on self-contained features. Regains charges daily."},
    {name: "Rod of Lordly Might", cost: 43214, type: "Wand/Staff/Rod", rarity: "Legendary", description: "Functions as +3 mace. Has 6 buttons to transform into different weapons (flaming sword, battleaxe, spear, climbing pole, battering ram, magical ladder). Each form has unique properties."},
    {name: "Rod of Resurrection", cost: 72475, type: "Wand/Staff/Rod", rarity: "Legendary", description: "Has 5 charges. Use 1 charge to cast Heal, 5 charges to cast Resurrection. Regains 1 charge daily at dawn. Powerful restorative magic. Only divine spellcasters can attune."},
    {name: "Rod of Rulership", cost: 8400, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 3 charges. Use an action to charm humanoids within 120 feet for 8 hours (DC 15 Wisdom save). Charmed creatures regard you as trusted leader. Regains 1d3 charges at dawn."},
    {name: "Rod of Security", cost: 52425, type: "Wand/Staff/Rod", rarity: "Very Rare", description: "Creates a paradise on a demiplane. You and 199 others can rest there for 200 days (= 5 hours real time). Time passes differently. Once used, can't be used for 10 days."},
    {name: "Rod of the Pact Keeper, +1", cost: 4953, type: "Wand/Staff/Rod", rarity: "Uncommon", description: "Requires warlock. Grants +1 to spell attack rolls and spell save DC. Can regain one warlock spell slot of 5th level or lower once per long rest."},
    {name: "Rod of the Pact Keeper, +2", cost: 9627, type: "Wand/Staff/Rod", rarity: "Rare", description: "Requires warlock. Grants +2 to spell attack rolls and spell save DC. Can regain one warlock spell slot of 5th level or lower once per long rest."},
    {name: "Rod of the Pact Keeper, +3", cost: 22640, type: "Wand/Staff/Rod", rarity: "Very Rare", description: "Requires warlock. Grants +3 to spell attack rolls and spell save DC. Can regain one warlock spell slot of 5th level or lower once per long rest."},
    {name: "Rope of Climbing", cost: 948, type: "Misc", rarity: "Uncommon", description: "60 feet of rope that obeys your commands to move, knot, unknot, coil, and anchor itself. Can hold up to 3,000 pounds. Commands spoken as a bonus action. Extremely useful."},
    {name: "Rope of Entanglement", cost: 1733, type: "Misc", rarity: "Rare", description: "30-foot rope that can entangle Large or smaller creatures on command (DC 15 Dex save). Restrained creature can escape with DC 15 Strength or Dexterity check. AC 20, 20 HP, regains 1 HP/5 minutes."},
    {name: "Saddle of the Cavalier", cost: 1740, type: "Misc", rarity: "Uncommon", description: "While mounted on this saddle, you can't be dismounted against your will if conscious. You also have advantage on saves to avoid falling off your mount."},
    {name: "Scarab of Protection", cost: 45333, type: "Jewelry", rarity: "Legendary", description: "Has 12 charges. When you fail a save vs necromancy spell or harmful effect from undead, use reaction to succeed instead (costs charges). Also grants advantage on saves vs such effects. Crumbles when empty."},
    {name: "Scimitar of Speed", cost: 7200, type: "Weapon", rarity: "Very Rare", description: "A +2 scimitar that allows you to make one additional attack with it as a bonus action on each of your turns. Effectively gives you an extra attack per round."},
    {name: "Scroll of Protection", cost: 1271, type: "Scroll", rarity: "Rare", description: "Creates a 5-foot radius magical barrier around you for 5 minutes. Choose aberrations, beasts, celestials, elementals, fey, fiends, or undead. Those types can't enter or affect anyone inside. Single use."},
    {name: "Sending Stones", cost: 1097, type: "Misc", rarity: "Uncommon", description: "Pair of stones. While holding one, you can cast Sending to communicate with whoever holds the other stone. Usable once per dawn. Must know recipient has other stone."},
{name: "Sentinel Shield", cost: 7427, type: "Armor", rarity: "Uncommon", description: "While holding this shield, you have advantage on Initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with symbol of an eye. Enhances awareness in combat."},
    {name: "Shield of Missile Attraction", cost: 3533, type: "Armor", rarity: "Rare", description: "Cursed +2 shield. Grants resistance to ranged weapon damage but all ranged attacks within 10 feet of you target you instead. Can't be removed once attuned. Dangerous curse."},
    {name: "Shield, +1", cost: 1156, type: "Armor", rarity: "Uncommon", description: "A shield that provides an additional +1 bonus to AC on top of the shield's normal AC bonus. Total +3 to AC when using this shield."},
    {name: "Shield, +2", cost: 5328, type: "Armor", rarity: "Rare", description: "A shield that provides an additional +2 bonus to AC on top of the shield's normal AC bonus. Total +4 to AC when using this shield."},
    {name: "Shield, +3", cost: 21295, type: "Armor", rarity: "Very Rare", description: "A shield that provides an additional +3 bonus to AC on top of the shield's normal AC bonus. Total +5 to AC when using this shield. Exceptional protection."},
    {name: "Slippers of Spider Climbing", cost: 2733, type: "Apparel", rarity: "Uncommon", description: "While wearing these slippers, you can move up, down, and across vertical surfaces and upside down on ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed."},
    {name: "Sovereign Glue", cost: 5650, type: "Potion", rarity: "Legendary", description: "This viscous substance can permanently bind two objects together. Only Universal Solvent, Oil of Etherealness, or Wish can separate bonded objects. 1 ounce covers 1 square foot. Takes 1 minute to set."},
    {name: "Spell Scroll (Acid Splash)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Acid Splash (cantrip). Hurl bubble of acid. Choose one or two creatures within 5 feet of each other. Target(s) make Dexterity save or take 1d6 acid damage (2d6 at 5th level, 3d6 at 11th, 4d6 at 17th). If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Dancing Lights)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Dancing Lights (cantrip). Create up to four torch-sized lights or one glowing humanoid form. As bonus action, move lights 60 feet. If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Fire Bolt)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Fire Bolt (cantrip). Ranged spell attack dealing 1d10 fire damage (2d10 at 5th, 3d10 at 11th, 4d10 at 17th). Ignites flammable objects not worn or carried. If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Guidance)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Guidance (cantrip). Touch willing creature. Once before spell ends, target rolls d4 and adds to one ability check. If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Light)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Light (cantrip). Touch object (max 10 feet). Object sheds bright light 20-foot radius, dim light additional 20 feet. Light can be colored. If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Mage Hand)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Mage Hand (cantrip). Spectral hand appears. Use action to control it to manipulate objects, open doors, retrieve items. If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Minor Illusion)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Minor Illusion (cantrip). Create sound or image of object (max 5-foot cube). Sound ranges from whisper to scream. If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Poison Spray)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Poison Spray (cantrip). Target makes Constitution save or takes 1d12 poison damage (2d12 at 5th, 3d12 at 11th, 4d12 at 17th). If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Prestidigitation)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Prestidigitation (cantrip). Minor magical trick: sensory effect, light/snuff candle, clean/soil object, chill/warm/flavor material, create color/mark, make trinket/illusory image. If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Ray of Frost)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Ray of Frost (cantrip). Ranged spell attack. 1d8 cold damage and target's speed reduced by 10 feet until start of your next turn (2d8 at 5th, 3d8 at 11th, 4d8 at 17th). If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Resistance)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Resistance (cantrip). Touch willing creature. Once before spell ends, target rolls d4 and adds to one saving throw. If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Sacred Flame)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Sacred Flame (cantrip). Target makes Dexterity save (no cover benefit) or takes 1d8 radiant damage (2d8 at 5th, 3d8 at 11th, 4d8 at 17th). If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Shocking Grasp)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Shocking Grasp (cantrip). Melee spell attack (advantage if target wears metal armor). 1d8 lightning damage, target can't take reactions until start of next turn (2d8 at 5th, 3d8 at 11th, 4d8 at 17th). If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Spare the Dying)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Spare the Dying (cantrip). Touch living creature at 0 HP. Creature stabilizes. No effect on undead/constructs. If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Thaumaturgy)", cost: 19, type: "Scroll", rarity: "Common", description: "Contains Thaumaturgy (cantrip). Minor wonder: voice booms 3x loud, flames flicker/brighten/dim/change color, tremors, sound, doors open/slam, alter eye appearance. If on your class list, cast normally. Otherwise DC 10 ability check required. Single use."},
    {name: "Spell Scroll (Bless)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Bless (1st level). Bless up to three creatures. Targets add d4 to attack rolls or saves. Upcast: +1 creature per slot above 1st. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Burning Hands)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Burning Hands (1st level). 15-foot cone. Creatures make Dexterity save or take 3d6 fire damage (half on success). Ignites flammable objects. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Charm Person)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Charm Person (1st level). Humanoid makes Wisdom save (advantage if fighting) or charmed. Charmed creature regards you as friendly acquaintance. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Command)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Command (1st level). Speak one-word command. Target makes Wisdom save or follows on next turn. Commands: Approach, Drop, Flee, Grovel, Halt. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Comprehend Languages)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Comprehend Languages (1st level). Understand any spoken language you hear and written language you see (must touch surface). 1 minute per page. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Cure Wounds)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Cure Wounds (1st level). Touch creature to heal 1d8 + spellcasting modifier HP. No effect on undead/constructs. Upcast: +1d8 per slot above 1st. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Detect Magic)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Detect Magic (1st level). Sense magic within 30 feet. Action to see aura around magical creatures/objects and learn school of magic. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Disguise Self)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Disguise Self (1st level). Make yourself (including clothing, armor, weapons, belongings) look different. Changes fail physical inspection. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Faerie Fire)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Faerie Fire (1st level). Objects in 20-foot cube outlined in light. Creatures make Dexterity save or outlined. Attack rolls against outlined have advantage. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Guiding Bolt)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Guiding Bolt (1st level). Ranged spell attack. 4d6 radiant damage. Next attack roll against target before end of your next turn has advantage. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Healing Word)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Healing Word (1st level). Creature you see regains 1d4 + spellcasting modifier HP. No effect on undead/constructs. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Identify)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Identify (1st level). Touch object throughout casting. Learn properties of magic item, how to use it, attunement requirement, charges. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Inflict Wounds)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Inflict Wounds (1st level). Melee spell attack. 3d10 necrotic damage on hit. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Mage Armor)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Mage Armor (1st level). Touch willing unarmored creature. Target's base AC becomes 13 + Dexterity modifier. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Magic Missile)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Magic Missile (1st level). Create three darts. Each dart hits chosen creature for 1d4+1 force damage. All strike simultaneously. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Sanctuary)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Sanctuary (1st level). Ward creature. Attackers must make Wisdom save or choose new target or lose attack/spell. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Shield)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Shield (1st level). Reaction. +5 AC until start of next turn (including against triggering attack). Take no damage from magic missile. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Shield of Faith)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Shield of Faith (1st level). Creature gains +2 AC for duration. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Silent Image)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Silent Image (1st level). Create image up to 15-foot cube. Purely visual (no sound, smell, other effects). If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Sleep)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Sleep (1st level). Roll 5d8. Total is HP of creatures affected. Creatures within 20 feet affected in ascending HP order. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Thunderwave)", cost: 50, type: "Scroll", rarity: "Common", description: "Contains Thunderwave (1st level). 15-foot cube. Creatures make Constitution save or take 2d8 thunder damage and pushed 10 feet. Half damage, not pushed on success. If on your class list, cast normally. Otherwise DC 11 ability check required. Single use."},
    {name: "Spell Scroll (Aid)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Aid (2nd level). Choose up to three creatures. Each target's HP max and current HP increase by 5. Upcast: +5 HP per slot above 2nd. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Arcane Lock)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Arcane Lock (2nd level). Touch closed door/window/gate/chest. Locked for duration. You and designated creatures open normally. Can set password. DC to break/pick +10. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Augury)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Augury (2nd level). Receive omen about action within next 30 minutes. Omens: Weal (good), Woe (bad), Weal and woe (both), Nothing (neither). If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Blur)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Blur (2nd level). Body becomes blurred. Creatures have disadvantage on attack rolls against you (immune if doesn't rely on sight or has truesight). If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Darkness)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Darkness (2nd level). Magical darkness fills 15-foot-radius sphere. Darkvision can't see through. Nonmagical light can't illuminate. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Flaming Sphere)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Flaming Sphere (2nd level). 5-foot sphere of fire appears. Creatures ending turn within 5 feet make Dexterity save or take 2d6 fire damage (half on success). Bonus action to move sphere 30 feet. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Hold Person)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Hold Person (2nd level). Humanoid makes Wisdom save or paralyzed. Can repeat save each turn. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Invisibility)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Invisibility (2nd level). Touch creature to turn invisible. Target's worn/carried items invisible. Ends if target attacks or casts. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Knock)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Knock (2nd level). Choose object (door, box, chest, manacles, padlock). Target held shut by mundane lock or stuck/barred becomes unlocked, unstuck, or unbarred. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Lesser Restoration)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Lesser Restoration (2nd level). Touch creature to end one disease or condition (blinded, deafened, paralyzed, or poisoned). If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Levitate)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Levitate (2nd level). Creature/object rises vertically up to 20 feet, suspended. Max weight 500 pounds. Target moves by pushing/pulling. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Magic Weapon)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Magic Weapon (2nd level). Touch nonmagical weapon. Becomes magic weapon with +1 to attack and damage rolls. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Misty Step)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Misty Step (2nd level). Surrounded by silvery mist, teleport up to 30 feet to unoccupied space you can see. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Prayer of Healing)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Prayer of Healing (2nd level). Up to six creatures regain 2d8 + spellcasting modifier HP each. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Shatter)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Shatter (2nd level). 10-foot-radius sphere. Creatures make Constitution save or take 3d8 thunder damage (half on success). If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Silence)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Silence (2nd level). 20-foot-radius sphere. No sound created within or passes through. Creatures inside immune to thunder damage and deafened. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Spider Climb)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Spider Climb (2nd level). Touch willing creature. Gains ability to move on vertical surfaces and ceilings while leaving hands free. Climbing speed equals walking speed. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Spiritual Weapon)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Spiritual Weapon (2nd level). Create floating spectral weapon. When cast and as bonus action, make melee spell attack (5 feet of weapon) for 1d8 + spellcasting modifier force damage. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Suggestion)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Suggestion (2nd level). Suggest course of activity (max two sentences). Target makes Wisdom save or pursues action (must sound reasonable). If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Warding Bond)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Warding Bond (2nd level). Ward willing creature. While within 60 feet: target gains +1 AC and saves, resistance to all damage. You take same damage target takes. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Web)", cost: 156, type: "Scroll", rarity: "Uncommon", description: "Contains Web (2nd level). 20-foot cube of sticky webbing. Difficult terrain. Creatures starting turn in or entering make Dexterity save or restrained. If on your class list, cast normally. Otherwise DC 12 ability check required. Single use."},
    {name: "Spell Scroll (Beacon of Hope)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Beacon of Hope (3rd level). Choose any number of creatures. Targets have advantage on Wisdom saves and death saves, regain maximum HP from healing. If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Counterspell)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Counterspell (3rd level). Interrupt creature casting spell. If 3rd level or lower, spell fails. If 4th+, make ability check (DC 10 + spell level) to end. If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Dispel Magic)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Dispel Magic (3rd level). Choose creature/object/effect. Spells of 3rd level or lower end. For 4th+, make ability check (DC 10 + spell level). If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Fireball)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Fireball (3rd level). 20-foot-radius sphere. Creatures make Dexterity save or take 8d6 fire damage (half on success). If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Fly)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Fly (3rd level). Touch willing creature. Gains flying speed 60 feet. Falls if still aloft when spell ends (unless can stop fall). If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Haste)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Haste (3rd level). Willing creature's speed doubled, +2 AC, advantage on Dexterity saves, additional action each turn. When ends, can't move or act until after next turn. If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Lightning Bolt)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Lightning Bolt (3rd level). 100-foot long, 5-foot wide line. Creatures make Dexterity save or take 8d6 lightning damage (half on success). If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Major Image)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Major Image (3rd level). Create image up to 20-foot cube. Seems real including sounds, smells, temperature. If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Mass Healing Word)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Mass Healing Word (3rd level). Up to six creatures regain 1d4 + spellcasting modifier HP. If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Protection from Energy)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Protection from Energy (3rd level). Touch willing creature. Gains resistance to one damage type: acid, cold, fire, lightning, or thunder. If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Remove Curse)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Remove Curse (3rd level). Touch removes all curses from creature/object. Cursed magic item's curse remains but breaks attunement. If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Revivify)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Revivify (3rd level). Touch creature dead within last minute. Returns to life with 1 HP. Can't restore missing body parts or those who died of old age. If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Speak with Dead)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Speak with Dead (3rd level). Grant semblance of life to corpse. Ask up to five questions. Corpse knows only what it knew in life. If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Spirit Guardians)", cost: 299, type: "Scroll", rarity: "Uncommon", description: "Contains Spirit Guardians (3rd level). Spirits protect you in 15-foot radius. Creatures' speed halved. When entering or starting turn in area, make Wisdom save or take 3d8 radiant/necrotic damage. If on your class list, cast normally. Otherwise DC 13 ability check required. Single use."},
    {name: "Spell Scroll (Arcane Eye)", cost: 593, type: "Scroll", rarity: "Rare", description: "Contains Arcane Eye (4th level). Create invisible magical eye. Mentally receive visual info. Eye has normal vision and darkvision 30 feet. Action to move eye 30 feet. If on your class list, cast normally. Otherwise DC 14 ability check required. Single use."},
    {name: "Spell Scroll (Death Ward)", cost: 593, type: "Scroll", rarity: "Rare", description: "Contains Death Ward (4th level). Touch creature. First time would drop to 0 HP from damage, instead drops to 1 HP and spell ends. If on your class list, cast normally. Otherwise DC 14 ability check required. Single use."},
    {name: "Spell Scroll (Dimension Door)", cost: 593, type: "Scroll", rarity: "Rare", description: "Contains Dimension Door (4th level). Teleport to any spot within range. Can bring objects you can carry. Can bring one willing creature your size or smaller. If on your class list, cast normally. Otherwise DC 14 ability check required. Single use."},
    {name: "Spell Scroll (Divination)", cost: 593, type: "Scroll", rarity: "Rare", description: "Contains Divination (4th level). Ask single question about goal/event/activity within 7 days. Receive truthful reply (short phrase, cryptic rhyme, or omen). If on your class list, cast normally. Otherwise DC 14 ability check required. Single use."},
    {name: "Spell Scroll (Freedom of Movement)", cost: 593, type: "Scroll", rarity: "Rare", description: "Contains Freedom of Movement (4th level). Touch willing creature. Movement unaffected by difficult terrain, magic can't reduce speed or paralyze/restrain. Can spend 5 feet movement to escape nonmagical restraints. If on your class list, cast normally. Otherwise DC 14 ability check required. Single use."},
    {name: "Spell Scroll (Greater Invisibility)", cost: 593, type: "Scroll", rarity: "Rare", description: "Contains Greater Invisibility (4th level). You or touched creature invisible. Worn/carried items invisible. If on your class list, cast normally. Otherwise DC 14 ability check required. Single use."},
    {name: "Spell Scroll (Guardian of Faith)", cost: 593, type: "Scroll", rarity: "Rare", description: "Contains Guardian of Faith (4th level). Large spectral guardian appears. Hostile creatures moving within 10 feet make Dexterity save or take 20 radiant damage (half on success). If on your class list, cast normally. Otherwise DC 14 ability check required. Single use."},
    {name: "Spell Scroll (Ice Storm)", cost: 593, type: "Scroll", rarity: "Rare", description: "Contains Ice Storm (4th level). 20-foot-radius, 40-foot-high cylinder. Creatures make Dexterity save or take 2d8 bludgeoning + 4d6 cold damage (half on success). If on your class list, cast normally. Otherwise DC 14 ability check required. Single use."},
    {name: "Spell Scroll (Locate Creature)", cost: 593, type: "Scroll", rarity: "Rare", description: "Contains Locate Creature (4th level). Sense direction to familiar creature's location within 1,000 feet. Know direction of movement if moving. If on your class list, cast normally. Otherwise DC 14 ability check required. Single use."},
    {name: "Spell Scroll (Stoneskin)", cost: 593, type: "Scroll", rarity: "Rare", description: "Contains Stoneskin (4th level). Touch willing creature. Flesh hard as stone. Resistance to nonmagical bludgeoning, piercing, slashing damage. If on your class list, cast normally. Otherwise DC 14 ability check required. Single use."},
    {name: "Spell Scroll (Wall of Fire)", cost: 593, type: "Scroll", rarity: "Rare", description: "Contains Wall of Fire (4th level). Create wall of fire. Creatures in area make Dexterity save or take 5d8 fire damage (half on success). One side deals 5d8 fire to creatures ending turn within 10 feet or inside. If on your class list, cast normally. Otherwise DC 14 ability check required. Single use."},
    {name: "Spell Scroll (Commune)", cost: 1043, type: "Scroll", rarity: "Rare", description: "Contains Commune (5th level). Contact deity or divine proxy. Ask up to three yes/no questions. Receive correct answer for each. If on your class list, cast normally. Otherwise DC 15 ability check required. Single use."},
    {name: "Spell Scroll (Cone of Cold)", cost: 1043, type: "Scroll", rarity: "Rare", description: "Contains Cone of Cold (5th level). 60-foot cone. Creatures make Constitution save or take 8d8 cold damage (half on success). Killed creatures become frozen statues. If on your class list, cast normally. Otherwise DC 15 ability check required. Single use."},
    {name: "Spell Scroll (Dominate Person)", cost: 1043, type: "Scroll", rarity: "Rare", description: "Contains Dominate Person (5th level). Beguile humanoid. Makes Wisdom save or charmed. Telepathic link while on same plane. Issue commands while conscious. If on your class list, cast normally. Otherwise DC 15 ability check required. Single use."},
    {name: "Spell Scroll (Dream)", cost: 1043, type: "Scroll", rarity: "Rare", description: "Contains Dream (5th level). Shape creature's dreams. Messenger enters trance, appears in sleeping target's dreams, can converse and shape dream environment. If on your class list, cast normally. Otherwise DC 15 ability check required. Single use."},
    {name: "Spell Scroll (Flame Strike)", cost: 1043, type: "Scroll", rarity: "Rare", description: "Contains Flame Strike (5th level). 10-foot-radius, 40-foot-high cylinder. Creatures make Dexterity save or take 4d6 fire + 4d6 radiant damage (half on success). If on your class list, cast normally. Otherwise DC 15 ability check required. Single use."},
    {name: "Spell Scroll (Greater Restoration)", cost: 1043, type: "Scroll", rarity: "Rare", description: "Contains Greater Restoration (5th level). Touch creature. Reduce exhaustion by one, or end: charm/petrify effect, curse (including cursed item attunement), ability score reduction, or HP max reduction. If on your class list, cast normally. Otherwise DC 15 ability check required. Single use."},
    {name: "Spell Scroll (Mass Cure Wounds)", cost: 1043, type: "Scroll", rarity: "Rare", description: "Contains Mass Cure Wounds (5th level). Choose up to six creatures in 30-foot-radius sphere. Each regains 3d8 + spellcasting modifier HP. If on your class list, cast normally. Otherwise DC 15 ability check required. Single use."},
    {name: "Spell Scroll (Passwall)", cost: 1043, type: "Scroll", rarity: "Rare", description: "Contains Passwall (5th level). Passage appears on wooden/plaster/stone surface. Choose dimensions: up to 5 feet wide, 8 feet tall, 20 feet deep. If on your class list, cast normally. Otherwise DC 15 ability check required. Single use."},
    {name: "Spell Scroll (Raise Dead)", cost: 1043, type: "Scroll", rarity: "Rare", description: "Contains Raise Dead (5th level). Return dead creature to life (max 10 days dead). Soul must be willing. Returns with 1 HP. Neutralizes poisons, cures nonmagical diseases. If on your class list, cast normally. Otherwise DC 15 ability check required. Single use."},
    {name: "Spell Scroll (Wall of Stone)", cost: 1043, type: "Scroll", rarity: "Rare", description: "Contains Wall of Stone (5th level). Nonmagical stone wall. 6 inches thick, ten 10x10-foot panels. Any shape desired (can't occupy space with creature/object). If on your class list, cast normally. Otherwise DC 15 ability check required. Single use."},
    {name: "Spell Scroll (Blade Barrier)", cost: 1863, type: "Scroll", rarity: "Very Rare", description: "Contains Blade Barrier (6th level). Vertical wall of whirling blades. Creatures entering or starting turn in area make Dexterity save or take 6d10 slashing damage (half on success). If on your class list, cast normally. Otherwise DC 16 ability check required. Single use."},
    {name: "Spell Scroll (Chain Lightning)", cost: 1863, type: "Scroll", rarity: "Very Rare", description: "Contains Chain Lightning (6th level). Lightning bolt arcs to target. Three more bolts leap to three other targets (within 30 feet of first). Dexterity save or take 10d8 lightning damage (half on success). If on your class list, cast normally. Otherwise DC 16 ability check required. Single use."},
    {name: "Spell Scroll (Disintegrate)", cost: 1863, type: "Scroll", rarity: "Very Rare", description: "Contains Disintegrate (6th level). Thin green ray. Target makes Dexterity save or takes 10d6+40 force damage. If reduced to 0 HP, disintegrated. If on your class list, cast normally. Otherwise DC 16 ability check required. Single use."},
    {name: "Spell Scroll (Find the Path)", cost: 1863, type: "Scroll", rarity: "Very Rare", description: "Contains Find the Path (6th level). Find shortest route to specific fixed location on same plane. Know distance and direction. If on your class list, cast normally. Otherwise DC 16 ability check required. Single use."},
    {name: "Spell Scroll (Globe of Invulnerability)", cost: 1863, type: "Scroll", rarity: "Very Rare", description: "Contains Globe of Invulnerability (6th level). 10-foot radius barrier. Spells of 5th level or lower cast from outside can't affect creatures/objects within. If on your class list, cast normally. Otherwise DC 16 ability check required. Single use."},
    {name: "Spell Scroll (Harm)", cost: 1863, type: "Scroll", rarity: "Very Rare", description: "Contains Harm (6th level). Target makes Constitution save or takes 14d6 necrotic damage (half on success, min 1 HP). On fail, HP max reduced by damage for 1 hour. If on your class list, cast normally. Otherwise DC 16 ability check required. Single use."},
    {name: "Spell Scroll (Heal)", cost: 1863, type: "Scroll", rarity: "Very Rare", description: "Contains Heal (6th level). Creature regains 70 HP. Ends blindness, deafness, diseases. No effect on constructs/undead. If on your class list, cast normally. Otherwise DC 16 ability check required. Single use."},
    {name: "Spell Scroll (Heroes' Feast)", cost: 1863, type: "Scroll", rarity: "Very Rare", description: "Contains Heroes' Feast (6th level). Great feast (1 hour to consume). Partakers: cured of diseases/poison, immune to poison and frightened, advantage on Wisdom saves, HP max +2d10. Benefits last 24 hours. If on your class list, cast normally. Otherwise DC 16 ability check required. Single use."},
    {name: "Spell Scroll (Mass Suggestion)", cost: 1863, type: "Scroll", rarity: "Very Rare", description: "Contains Mass Suggestion (6th level). Suggest activity (max two sentences) to up to twelve creatures. Wisdom save or pursue action. If on your class list, cast normally. Otherwise DC 16 ability check required. Single use."},
    {name: "Spell Scroll (Otto's Irresistible Dance)", cost: 1863, type: "Scroll", rarity: "Very Rare", description: "Contains Otto's Irresistible Dance (6th level). Creature begins comic dance in place. Must use all movement to dance, can't leave space. Disadvantage on Dexterity saves and attack rolls. If on your class list, cast normally. Otherwise DC 16 ability check required. Single use."},
    {name: "Spell Scroll (True Seeing)", cost: 1863, type: "Scroll", rarity: "Very Rare", description: "Contains True Seeing (6th level). Touch willing creature. Gains truesight, sees secret doors, sees into Ethereal Plane (all out to 120 feet). If on your class list, cast normally. Otherwise DC 16 ability check required. Single use."},
    {name: "Spell Scroll (Delayed Blast Fireball)", cost: 3120, type: "Scroll", rarity: "Very Rare", description: "Contains Delayed Blast Fireball (7th level). Glowing bead lingers at point. When detonates: 20-foot-radius sphere, Dexterity save or take fire damage. Base 12d6, +1d6 each turn bead doesn't detonate. If on your class list, cast normally. Otherwise DC 17 ability check required. Single use."},
    {name: "Spell Scroll (Etherealness)", cost: 3120, type: "Scroll", rarity: "Very Rare", description: "Contains Etherealness (7th level). Step into Border Ethereal. Remain there for duration. Can only affect and be affected by creatures on that plane. If on your class list, cast normally. Otherwise DC 17 ability check required. Single use."},
    {name: "Spell Scroll (Finger of Death)", cost: 3120, type: "Scroll", rarity: "Very Rare", description: "Contains Finger of Death (7th level). Target makes Constitution save or takes 7d8+30 necrotic damage (half on success). Humanoid killed rises as zombie under your command. If on your class list, cast normally. Otherwise DC 17 ability check required. Single use."},
    {name: "Spell Scroll (Fire Storm)", cost: 3120, type: "Scroll", rarity: "Very Rare", description: "Contains Fire Storm (7th level). Storm of flame in up to ten 10-foot cubes. Creatures make Dexterity save or take 7d10 fire damage (half on success). If on your class list, cast normally. Otherwise DC 17 ability check required. Single use."},
    {name: "Spell Scroll (Mordenkainen's Sword)", cost: 3120, type: "Scroll", rarity: "Very Rare", description: "Contains Mordenkainen's Sword (7th level). Sword-shaped force plane. When appears and as bonus action, make melee spell attack (within 5 feet of sword) for 3d10 force damage. Bonus action to move sword 20 feet. If on your class list, cast normally. Otherwise DC 17 ability check required. Single use."},
    {name: "Spell Scroll (Regenerate)", cost: 3120, type: "Scroll", rarity: "Very Rare", description: "Contains Regenerate (7th level). Touch creature. Regains 4d8+15 HP immediately, then 1 HP at start of each turn for duration. Severed body members restored after 2 minutes. If on your class list, cast normally. Otherwise DC 17 ability check required. Single use."},
    {name: "Spell Scroll (Resurrection)", cost: 3120, type: "Scroll", rarity: "Very Rare", description: "Contains Resurrection (7th level). Touch dead creature (max 1 century dead, didn't die of old age, not undead). Soul willing returns to life with all HP. Neutralizes poisons, cures diseases. If on your class list, cast normally. Otherwise DC 17 ability check required. Single use."},
    {name: "Spell Scroll (Teleport)", cost: 3120, type: "Scroll", rarity: "Very Rare", description: "Contains Teleport (7th level). Instantly transport yourself and up to eight willing creatures (or single object) to destination you select on same plane. If on your class list, cast normally. Otherwise DC 17 ability check required. Single use."},
    {name: "Spell Scroll (Antimagic Field)", cost: 4858, type: "Scroll", rarity: "Very Rare", description: "Contains Antimagic Field (8th level). 10-foot-radius sphere of antimagic surrounds you (moves with you). Spells can't be cast, summoned creatures disappear, magic items mundane. Spells suppressed (except artifact/deity). If on your class list, cast normally. Otherwise DC 18 ability check required. Single use."},
    {name: "Spell Scroll (Dominate Monster)", cost: 4858, type: "Scroll", rarity: "Very Rare", description: "Contains Dominate Monster (8th level). Beguile creature. Makes Wisdom save or charmed. Telepathic link while on same plane. Issue commands while conscious. If on your class list, cast normally. Otherwise DC 18 ability check required. Single use."},
    {name: "Spell Scroll (Earthquake)", cost: 4858, type: "Scroll", rarity: "Very Rare", description: "Contains Earthquake (8th level). Seismic disturbance, 100-foot-radius circle. When cast and each turn concentrating, creatures on ground make Dexterity save or knocked prone. If on your class list, cast normally. Otherwise DC 18 ability check required. Single use."},
    {name: "Spell Scroll (Holy Aura)", cost: 4858, type: "Scroll", rarity: "Very Rare", description: "Contains Holy Aura (8th level). 30-foot radius. Chosen creatures shed dim light 5 feet, advantage on all saves. Other creatures have disadvantage on attacks against them. If on your class list, cast normally. Otherwise DC 18 ability check required. Single use."},
    {name: "Spell Scroll (Maze)", cost: 4858, type: "Scroll", rarity: "Very Rare", description: "Contains Maze (8th level). Banish creature into labyrinthine demiplane. Action to escape (DC 20 Intelligence check). Remains until duration ends or escapes. If on your class list, cast normally. Otherwise DC 18 ability check required. Single use."},
    {name: "Spell Scroll (Power Word Stun)", cost: 4858, type: "Scroll", rarity: "Very Rare", description: "Contains Power Word Stun (8th level). Speak word of power. If target has 150 HP or fewer, stunned. Otherwise no effect. If on your class list, cast normally. Otherwise DC 18 ability check required. Single use."},
    {name: "Spell Scroll (Sunburst)", cost: 4858, type: "Scroll", rarity: "Very Rare", description: "Contains Sunburst (8th level). 60-foot radius sunlight. Creatures make Constitution save or take 12d6 radiant damage and blinded 1 minute. Half damage, not blinded on success. If on your class list, cast normally. Otherwise DC 18 ability check required. Single use."},
    {name: "Spell Scroll (Astral Projection)", cost: 13105, type: "Scroll", rarity: "Legendary", description: "Contains Astral Projection (9th level). You and up to eight creatures project astral bodies to Astral Plane. Material body unconscious in suspended animation. Astral body replicates statistics/possessions with silvery cord. If on your class list, cast normally. Otherwise DC 19 ability check required. Single use."},
    {name: "Spell Scroll (Foresight)", cost: 13105, type: "Scroll", rarity: "Legendary", description: "Contains Foresight (9th level). Touch willing creature. Can't be surprised, advantage on attack rolls, ability checks, saves. Other creatures have disadvantage on attacks against target. If on your class list, cast normally. Otherwise DC 19 ability check required. Single use."},
    {name: "Spell Scroll (Gate)", cost: 13105, type: "Scroll", rarity: "Legendary", description: "Contains Gate (9th level). Portal (5-20 feet diameter) to different plane. Can speak creature's name to draw it through to your side. If on your class list, cast normally. Otherwise DC 19 ability check required. Single use."},
    {name: "Spell Scroll (Imprisonment)", cost: 13105, type: "Scroll", rarity: "Legendary", description: "Contains Imprisonment (9th level). Magical restraint holds creature. Wisdom save or bound. Doesn't need to breathe, eat, drink, doesn't age. Forms: Burial, Chaining, Hedged Prison, Minimus Containment, Slumber. If on your class list, cast normally. Otherwise DC 19 ability check required. Single use."},
    {name: "Spell Scroll (Mass Heal)", cost: 13105, type: "Scroll", rarity: "Legendary", description: "Contains Mass Heal (9th level). Restore up to 700 HP divided among creatures you see. Also cures diseases and blindness/deafness. If on your class list, cast normally. Otherwise DC 19 ability check required. Single use."},
    {name: "Spell Scroll (Meteor Swarm)", cost: 13105, type: "Scroll", rarity: "Legendary", description: "Contains Meteor Swarm (9th level). Four points, each 40-foot-radius sphere. Creatures make Dexterity save or take 20d6 fire + 20d6 bludgeoning damage (half on success). If on your class list, cast normally. Otherwise DC 19 ability check required. Single use."},
    {name: "Spell Scroll (Power Word Kill)", cost: 13105, type: "Scroll", rarity: "Legendary", description: "Contains Power Word Kill (9th level). Utter word of power. If target has 100 HP or fewer, dies instantly. Otherwise no effect. If on your class list, cast normally. Otherwise DC 19 ability check required. Single use."},
    {name: "Spell Scroll (Time Stop)", cost: 13105, type: "Scroll", rarity: "Legendary", description: "Contains Time Stop (9th level). Stop time for everyone but you. Take 1d4+1 turns. Ends if action affects another creature or their worn/carried object. If on your class list, cast normally. Otherwise DC 19 ability check required. Single use."},
    {name: "Spell Scroll (True Resurrection)", cost: 13105, type: "Scroll", rarity: "Legendary", description: "Contains True Resurrection (9th level). Touch creature dead max 200 years (any reason except old age). Soul willing, restored with all HP. Closes wounds, neutralizes poison, cures diseases, lifts curses. If on your class list, cast normally. Otherwise DC 19 ability check required. Single use."},
    {name: "Spellguard Shield", cost: 35667, type: "Armor", rarity: "Very Rare", description: "A +2 shield that grants advantage on saving throws against spells and other magical effects, and spell attacks against you have disadvantage. Excellent anti-magic protection."},
    {name: "Sphere of Annihilation", cost: 26750, type: "Misc", rarity: "Legendary", description: "A 2-foot diameter black sphere that disintegrates all matter it touches. Can be controlled with Arcana check (DC 10 + distance in feet ÷ 10). Uncontrolled, moves 10 feet toward nearest creature. Extremely dangerous."},
    {name: "Staff of Charming", cost: 6243, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 10 charges. Use charges to cast Charm Person (1), Command (1), or Comprehend Languages (1). Regains 1d8+2 charges daily at dawn. If empty, 5% chance it crumbles to dust."},
    {name: "Staff of Fire", cost: 16073, type: "Wand/Staff/Rod", rarity: "Very Rare", description: "Has 10 charges. Use charges to cast Burning Hands (1), Fireball (3), or Wall of Fire (4). Resistance to fire damage while holding. Regains 1d6+4 charges at dawn. 5% chance to crumble if empty."},
    {name: "Staff of Frost", cost: 21647, type: "Wand/Staff/Rod", rarity: "Very Rare", description: "Has 10 charges. Use charges to cast Cone of Cold (5), Fog Cloud (1), Ice Storm (4), or Wall of Ice (4). Resistance to cold while holding. Regains 1d6+4 charges daily. 5% chance to break if empty."},
    {name: "Staff of Healing", cost: 7593, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 10 charges. Use charges to cast Cure Wounds (1/level), Lesser Restoration (2), or Mass Cure Wounds (5). Regains 1d6+4 charges at dawn. 5% chance to crumble if empty. Excellent healing."},
    {name: "Staff of Power", cost: 60047, type: "Wand/Staff/Rod", rarity: "Very Rare", description: "A +2 quarterstaff that grants +2 to spell attacks, saves, and AC. Has 20 charges for various powerful spells. Can break it for 50-foot explosion (30d6 force). Regains 2d8+4 charges daily."},
    {name: "Staff of Striking", cost: 22143, type: "Wand/Staff/Rod", rarity: "Very Rare", description: "A +3 quarterstaff with 10 charges. Spend 1-3 charges on a hit to deal extra 1d6 force damage per charge. Regains 1d6+4 charges at dawn. 5% chance to become nonmagical if empty."},
    {name: "Staff of Swarming Insects", cost: 8513, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 10 charges. Use charges to cast Giant Insect (4) or Insect Plague (5). Regains 1d6+4 charges at dawn. 5% chance to crumble if empty. Summon or create insect swarms."},
    {name: "Staff of the Adder", cost: 811, type: "Wand/Staff/Rod", rarity: "Uncommon", description: "A staff with snake head that comes alive as bonus action. Functions as +1 quarterstaff. Snake can make a bite attack (1d6 piercing + 3d6 poison, DC 15 Con save). 10% chance snake detaches if it scores critical."},
    {name: "Staff of the Magi", cost: 94625, type: "Wand/Staff/Rod", rarity: "Legendary", description: "Functions as +2 quarterstaff. Has 50 charges for powerful spells. Advantage on spell saves, can absorb spells. Can break it for massive explosion. Regains 4d6+2 charges daily. Requires wizard, sorcerer, or warlock."},
    {name: "Staff of the Python", cost: 1650, type: "Wand/Staff/Rod", rarity: "Uncommon", description: "Use an action to transform the staff into a giant constrictor snake (obeys your commands). Lasts 1 hour, then reverts. If snake drops to 0 HP, staff is destroyed. Returns to staff form early if commanded."},
    {name: "Staff of the Woodlands", cost: 21500, type: "Wand/Staff/Rod", rarity: "Rare", description: "A +2 quarterstaff with 10 charges. Cast various nature spells (Animal Friendship, Awaken, Barkskin, etc.). Can transform into Large treant (lasts 1 minute, 1/day). Regains 1d6+4 charges at dawn. Requires druid."},
    {name: "Staff of Thunder and Lightning", cost: 16823, type: "Wand/Staff/Rod", rarity: "Very Rare", description: "A +2 quarterstaff with special strike properties (5/day total): lightning (1d6 lightning + dazed), thunder (2d6 thunder + stunned), or thunder clap (DC 17 Con save, 2d6 thunder + deafened)."},
    {name: "Staff of Withering", cost: 5700, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 3 charges. On a melee hit, spend 1 charge to deal extra 2d10 necrotic damage. Target makes DC 15 Constitution save or has disadvantage on attack rolls and checks for 1 hour. Regains 1d3 charges at dawn."},
 {name: "Stone of Controlling Earth Elementals", cost: 6287, type: "Misc", rarity: "Rare", description: "While touching the ground, you can summon an earth elemental. It appears within 60 feet, is friendly, and obeys commands for 1 hour. Usable once per day. Gem becomes gray and unusable for 24 hours."},
    {name: "Stone of Good Luck", cost: 2233, type: "Misc", rarity: "Uncommon", description: "While this polished agate is on your person, you gain +1 bonus to ability checks and saving throws. Often called a luckstone. Simple but effective enhancement."},
    {name: "Sun Blade", cost: 5962, type: "Weapon", rarity: "Rare", description: "A +2 longsword that creates a blade of radiant sunlight. Deals radiant damage. +1d8 radiant vs undead. Emits bright sunlight 15 feet, dim 15 more. Weighs 3 pounds, has finesse property."},
    {name: "Sword of Answering", cost: 37000, type: "Weapon", rarity: "Legendary", description: "A +3 longsword that allows you to make an opportunity attack with advantage when creature within 5 feet damages you. Different swords are aligned to different alignments."},
    {name: "Sword of Life Stealing", cost: 1352, type: "Weapon", rarity: "Rare", description: "When you attack and roll a 20, target takes extra 10 necrotic damage (15 if undead) and you gain 10 temporary hit points. Drains life force on critical hits."},
    {name: "Sword of Sharpness", cost: 15495, type: "Weapon", rarity: "Very Rare", description: "A +3 sword when rolling 20 to hit. On a 20, deals extra 14 slashing damage, then roll again. On second 20, cut off a limb (target's choice if multiple). Can cut through objects easier."},
    {name: "Sword of Vengeance", cost: 575, type: "Weapon", rarity: "Uncommon", description: "Cursed +1 sword. Can't be parted with. You have disadvantage on attacks with other weapons. Must attack your attacker if possible. Requires Remove Curse to unattune. Compels vengeance."},
    {name: "Sword of Wounding", cost: 1638, type: "Weapon", rarity: "Rare", description: "HP lost to this weapon can only be regained by short/long rest. Once per turn, can deal extra 2d6 necrotic damage. Wounds don't heal normally. Target bleeds for 1d4 damage per wound at turn start."},
    {name: "Talisman of Pure Good", cost: 68465, type: "Jewelry", rarity: "Legendary", description: "Has 7 charges. Evil creature touching it takes 6d6 radiant damage. Use action to expend charges: 1 charge for radiant damage, or all charges to summon solar to fight for you. Requires good alignment."},
    {name: "Talisman of the Sphere", cost: 34667, type: "Jewelry", rarity: "Legendary", description: "While holding this talisman, you double your proficiency bonus for Arcana checks to control a Sphere of Annihilation. If you start turn in sphere's control, you can move it 10 feet extra."},
    {name: "Talisman of Ultimate Evil", cost: 59220, type: "Jewelry", rarity: "Legendary", description: "Has 6 charges. Good creature touching it takes 6d6 necrotic damage. Use charges: 1 charge deals damage, or all charges summons a pit fiend to serve you. Requires evil alignment."},
    {name: "Tentacle Rod", cost: 3409, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 3 tendrils. Each can attack once per turn (+9 to hit, 1d6 bludgeoning). Target is grappled (escape DC 15). You have advantage on attacks against grappled targets. Can grapple up to 3 creatures."},
    {name: "Tome of Clear Thought", cost: 39830, type: "Book", rarity: "Very Rare", description: "Reading this book (48 hours over 6 days) increases your Intelligence by 2 and maximum by 2. The book loses magic for 100 years after use. Maximum cannot exceed 30."},
    {name: "Tome of Leadership and Influence", cost: 39830, type: "Book", rarity: "Very Rare", description: "Reading this book (48 hours over 6 days) increases your Charisma by 2 and maximum by 2. The book loses magic for 100 years after use. Maximum cannot exceed 30."},
    {name: "Tome of the Stilled Tongue", cost: 33000, type: "Book", rarity: "Legendary", description: "Wizards can use it as spellbook holding 5d10+10 spells. While holding and casting wizard spell, you can use the tome to cast it without somatic/verbal components. Requires wizard or warlock attunement."},
    {name: "Tome of Understanding", cost: 39830, type: "Book", rarity: "Very Rare", description: "Reading this book (48 hours over 6 days) increases your Wisdom by 2 and maximum by 2. The book loses magic for 100 years after use. Maximum cannot exceed 30."},
    {name: "Trident of Fish Command", cost: 1267, type: "Weapon", rarity: "Uncommon", description: "Has 3 charges. Use 1 charge to cast Dominate Beast (DC 15) on beasts with swimming speed. Trident glows when within 120 feet of fish. Regains 1d3 charges at dawn."},
    {name: "Universal Solvent", cost: 3050, type: "Misc", rarity: "Legendary", description: "This substance can dissolve Sovereign Glue. One vial can cover 1 square foot of glue-affected surface. Takes 1d6+1 rounds to work. Only reliable way to separate glue-bonded objects besides powerful magic."},
    {name: "Vicious Weapon", cost: 1633, type: "Weapon", rarity: "Rare", description: "When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
    {name: "Vorpal Sword", cost: 47107, type: "Weapon", rarity: "Legendary", description: "A +3 sword. When you roll a 20 against a creature with a head, you cut off the target's head. The creature dies unless it can survive without its head or has legendary actions."},
 {name: "Wand of Binding", cost: 6307, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 7 charges. Use charges to cast Hold Monster (5) or Hold Person (2). Regains 1d6+1 charges daily at dawn. 5% chance to crumble if you use last charge."},
    {name: "Wand of Enemy Detection", cost: 4583, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 7 charges. Use 1 charge to detect presence and location of hostile creatures within 60 feet. Doesn't reveal identity or position, just direction and distance. Regains 1d6+1 charges at dawn."},
    {name: "Wand of Fear", cost: 5297, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 7 charges. Use 1 charge to project a 60-foot cone of amber light. Creatures must succeed on DC 15 Wisdom save or be frightened for 1 minute. Regains 1d6+1 charges at dawn."},
    {name: "Wand of Fireballs", cost: 13467, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 7 charges. Use charges to cast Fireball at different levels (1-3 charges for 3rd-5th level spell). DC 15 Dexterity save for half damage. Regains 1d6+1 charges at dawn. 5% chance to crumble if empty."},
    {name: "Wand of Lightning Bolts", cost: 13467, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 7 charges. Use charges to cast Lightning Bolt at different levels (1-3 charges for 3rd-5th level). DC 15 Dexterity save for half. Regains 1d6+1 charges at dawn. 5% chance to crumble if empty."},
    {name: "Wand of Magic Detection", cost: 748, type: "Wand/Staff/Rod", rarity: "Uncommon", description: "Has 3 charges. Use 1 charge to cast Detect Magic. Sense presence and location of magic within 30 feet. Regains all charges daily at dawn."},
    {name: "Wand of Magic Missiles", cost: 3097, type: "Wand/Staff/Rod", rarity: "Uncommon", description: "Has 7 charges. Use 1-3 charges to cast Magic Missile, creating 1 extra dart per charge beyond the first (2-4 darts total). Guaranteed hits. Regains 1d6+1 charges at dawn."},
    {name: "Wand of Paralysis", cost: 11417, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 7 charges. Use 1 charge to force target to make DC 15 Constitution save or be paralyzed for 1 minute. Target can repeat save each turn. Regains 1d6+1 charges at dawn."},
    {name: "Wand of Polymorph", cost: 20667, type: "Wand/Staff/Rod", rarity: "Very Rare", description: "Has 7 charges. Use 1 charge to cast Polymorph (DC 15). Transform creatures into beasts. Regains 1d6+1 charges at dawn. 5% chance to crumble if you use last charge."},
    {name: "Wand of Secrets", cost: 938, type: "Wand/Staff/Rod", rarity: "Uncommon", description: "Has 3 charges. Use 1 charge to reveal all secret doors and traps within 30 feet. Regains all charges daily at dawn. Points toward them."},
    {name: "Wand of War Mage, +1", cost: 833, type: "Wand/Staff/Rod", rarity: "Uncommon", description: "While holding this wand, you gain +1 bonus to spell attack rolls. Additionally, you ignore half cover when making spell attacks."},
    {name: "Wand of War Mage, +2", cost: 4000, type: "Wand/Staff/Rod", rarity: "Rare", description: "While holding this wand, you gain +2 bonus to spell attack rolls. Additionally, you ignore half cover when making spell attacks."},
    {name: "Wand of War Mage, +3", cost: 14167, type: "Wand/Staff/Rod", rarity: "Very Rare", description: "While holding this wand, you gain +3 bonus to spell attack rolls. Additionally, you ignore half cover when making spell attacks."},
    {name: "Wand of Web", cost: 3350, type: "Wand/Staff/Rod", rarity: "Uncommon", description: "Has 7 charges. Use 1 charge to cast Web (DC 15). Creates sticky webs that restrain creatures. Regains 1d6+1 charges at dawn. 5% chance to crumble if you use last charge."},
    {name: "Wand of Wonder", cost: 9925, type: "Wand/Staff/Rod", rarity: "Rare", description: "Has 7 charges. Use 1 charge to produce a random magical effect (roll on table). Effects range from harmless to powerful to strange. Regains 1d6+1 charges at dawn. Unpredictable magic."},
{name: "Winged Boots", cost: 5833, type: "Apparel", rarity: "Uncommon", description: "While wearing these boots, you can use a bonus action to gain a flying speed of 30 feet for 4 hours. Can be used for total of 4 hours per day, used in 1-minute increments. Minimum 12 hours between uses."},
    {name: "Wings of Flying", cost: 4267, type: "Misc", rarity: "Rare", description: "A cloak that transforms into bat or bird wings when worn. Grants a flying speed of 60 feet for 1 hour or until you land. Can be used once per 1d12 hours. Reusable flight capability."},
    {name: "Armor of Gleaming", cost: 330, type: "Armor", rarity: "Common", description: "This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
    {name: "Bead of Nourishment", cost: 66, type: "Misc", rarity: "Common", description: "This bead provides enough nourishment to sustain a humanoid for one day when eaten. Takes an action to eat. Single use item."},
    {name: "Bead of Refreshment", cost: 66, type: "Misc", rarity: "Common", description: "This bead dissolves in liquid, transforming up to 1 pint of the liquid into fresh, cold water. Single use. Useful for purifying drinks."},
    {name: "Boots of False Tracks", cost: 330, type: "Apparel", rarity: "Common", description: "Only humanoids can wear these boots. While wearing them, you can choose to have them leave tracks like another kind of humanoid of your size. Useful for misdirection."},
    {name: "Candle of the Deep", cost: 330, type: "Misc", rarity: "Common", description: "This candle's flame is not extinguished by water or wind. It burns for 6 hours and sheds bright light in a 5-foot radius and dim light for an additional 5 feet."},
    {name: "Cast-Off Armor", cost: 330, type: "Armor", rarity: "Common", description: "You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
    {name: "Charlatan's Die", cost: 300, type: "Misc", rarity: "Common", description: "When you roll this six-sided die, you can control which number it lands on. Appears as a normal die to others. Perfect for rigging games of chance."},
    {name: "Cloak of Billowing", cost: 330, type: "Apparel", rarity: "Common", description: "While wearing this cloak, you can use a bonus action to make it billow dramatically. Purely cosmetic but adds flair to your actions and presence."},
    {name: "Cloak of Many Fashions", cost: 660, type: "Apparel", rarity: "Common", description: "While wearing this cloak, you can use a bonus action to change its appearance. It can be any color or pattern you imagine, and can even look like a different type of garment."},
    {name: "Clockwork Amulet", cost: 528, type: "Jewelry", rarity: "Common", description: "You can use this amulet to ensure success on an ability check. When you make an attack roll while wearing it and the d20 shows a 9 or less, you can treat the roll as a 10. Usable once, then it stops working until next dawn."},
    {name: "Clothes of Mending", cost: 330, type: "Apparel", rarity: "Common", description: "These clothes magically mend themselves to counteract daily wear and tear. Always look clean and well-maintained. Repairs tears and holes within 1 hour. Minor cosmetic benefit."},
    {name: "Dark Shard Amulet", cost: 120, type: "Jewelry", rarity: "Common", description: "A shard of dark crystal. As an action, you can use it to cast Minor Illusion. Requires spellcasting ability. Warlock-themed trinket for cantrip casting."},
    {name: "Dread Helm", cost: 330, type: "Armor", rarity: "Common", description: "This fearsome helmet makes your voice deeper and more commanding. Adds an intimidating element to your presence but provides no mechanical combat benefits."},
    {name: "Ear Horn of Hearing", cost: 660, type: "Misc", rarity: "Common", description: "While held to your ear, this horn suppresses the effects of the deafened condition, allowing you to hear normally. Useful for those with hearing impairments."},
    {name: "Enduring Spellbook", cost: 330, type: "Book", rarity: "Common", description: "This spellbook is immune to damage from fire and water. The pages are waterproof and fireproof, protecting your spell collection from environmental hazards."},
    {name: "Ersatz Eye", cost: 600, type: "Jewelry", rarity: "Common", description: "This artificial eye replaces a real one that was lost or damaged. While the ersatz eye is embedded in your eye socket, you can see through it as if it were a normal eye. Cosmetic replacement."},
    {name: "Hat of Vermin", cost: 396, type: "Apparel", rarity: "Common", description: "Has 3 charges. Use an action to pull a rat, snake, or spider from the hat (your choice). The creature is real, not an illusion. Regains all charges at dawn. Summoned creature acts as normal animal."},
    {name: "Hat of Wizardry", cost: 120, type: "Apparel", rarity: "Common", description: "This pointed hat allows you to cast Prestidigitation while wearing it. If you can already cast Prestidigitation, you can cast it as a bonus action. Requires spellcasting ability."},
    {name: "Heward's Handy Spice Pouch", cost: 330, type: "Apparel", rarity: "Common", description: "This belt pouch produces enough seasoning to season a single meal each day. The seasoning changes to suit your taste. Never run out of spices for cooking."},
    {name: "Horn of Silent Alarm", cost: 462, type: "Misc", rarity: "Common", description: "You can blow this horn as an action. One creature of your choice within 600 feet hears it. Other creatures don't hear anything. Perfect for silent communication or alerts."},
    {name: "Instrument of Illusions", cost: 300, type: "Misc", rarity: "Common", description: "While playing this musical instrument, you can create harmless, illusory visual effects within a 5-foot radius sphere centered on you. The illusions last until you stop playing. Requires proficiency."},
    {name: "Instrument of Scribing", cost: 180, type: "Misc", rarity: "Common", description: "While playing this musical instrument, you can create writing on nonmagical surfaces within 5 feet. The writing appears wherever you direct. Stops when you stop playing. Requires proficiency."},
    {name: "Lock of Trickery", cost: 660, type: "Misc", rarity: "Common", description: "This lock appears to be an ordinary lock but can be locked or unlocked without a key. You can use an action to lock or unlock it, and only you can unlock it this way without using thieves' tools."},
    {name: "Moon-Touched Sword", cost: 660, type: "Weapon", rarity: "Common", description: "In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},
    {name: "Mystery Key", cost: 66, type: "Misc", rarity: "Common", description: "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, it disappears."},
    {name: "Orb of Direction", cost: 330, type: "Jewelry", rarity: "Common", description: "While holding this orb, you can use an action to learn which way is north. This works anywhere except in locations where directional magic doesn't function. Simple navigation aid."},
    {name: "Orb of Time", cost: 330, type: "Jewelry", rarity: "Common", description: "While holding this orb, you can use an action to learn the current time. You instantly know the hour, minute, and second. Works everywhere. Never be late again."},
    {name: "Perfume of Bewitching", cost: 132, type: "Potion", rarity: "Common", description: "This perfume grants advantage on all Charisma checks directed at humanoids of a specific gender for 1 hour after application. You choose the gender when applying. Single use."},
    {name: "Pipe of Smoke Monsters", cost: 330, type: "Misc", rarity: "Common", description: "While smoking this pipe, you can exhale smoke in the shape of creatures you imagine. The smoke is harmless and lasts for a few seconds. Purely cosmetic entertainment."},
    {name: "Pole of Angling", cost: 330, type: "Misc", rarity: "Common", description: "While holding this 10-foot pole, you can use an action to transform it into a fishing pole with a hook, line, and reel, or back into a normal pole. Combination tool for adventuring."},
    {name: "Pole of Collapsing", cost: 330, type: "Misc", rarity: "Common", description: "While holding this 10-foot pole, you can use an action to collapse it to 1 foot in length or extend it back to its full length. Easier to transport and store than a normal pole."},
    {name: "Pot of Awakening", cost: 132, type: "Misc", rarity: "Common", description: "When you plant a shrub in this pot and let it grow for 30 days, the shrub awakens and pulls itself free, becoming an awakened shrub. The pot can't be used again for 1 year."},
    {name: "Rope of Mending", cost: 330, type: "Misc", rarity: "Common", description: "This 50-foot length of silk rope can magically repair itself. Any cut or frayed sections rejoin and mend within 1 hour. Nearly indestructible utility rope."},
    {name: "Ruby of the War Mage", cost: 300, type: "Jewelry", rarity: "Common", description: "You can attach this ruby to a simple or martial weapon. The weapon then functions as a spellcasting focus for your spells. Useful for spellcasting warriors. Requires attunement by spellcaster."},
    {name: "Shield of Expression", cost: 341, type: "Armor", rarity: "Common", description: "The front of this shield displays a facial expression. You can use a bonus action to change the expression among several preset options. Cosmetic customization for your shield."},
    {name: "Smoldering Armor", cost: 330, type: "Armor", rarity: "Common", description: "Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
    {name: "Staff of Adornment", cost: 330, type: "Wand/Staff/Rod", rarity: "Common", description: "You can use a bonus action to cause flowers or vines to appear on the staff, or cause them to disappear. These decorations are harmless and don't affect the staff's function."},
    {name: "Staff of Birdcalls", cost: 330, type: "Wand/Staff/Rod", rarity: "Common", description: "This staff has 10 charges. You can use an action to expend 1 charge and create a sound out to a range of 60 feet: bird calls, chirps, or caws. Regains 1d6+4 charges at dawn."},
    {name: "Staff of Flowers", cost: 330, type: "Wand/Staff/Rod", rarity: "Common", description: "Has 10 charges. You can use an action to expend 1 charge and cause a flower to sprout from the ground or from the staff itself. The flower is harmless and nonmagical. Regains 1d6+4 charges daily."},
    {name: "Talking Doll", cost: 600, type: "Misc", rarity: "Common", description: "This child-sized doll whispers what it heard over the last 24 hours when a button on its chest is pressed. It records up to 10 minutes of speech. Can be reprogrammed daily. Spy device."},
    {name: "Tankard of Sobriety", cost: 330, type: "Misc", rarity: "Common", description: "Any liquid poured into this tankard becomes water. The tankard can't be used this way again until the next dawn. Useful for avoiding poisoned drinks or maintaining sobriety."},
    {name: "Unbreakable Arrow", cost: 330, type: "Ammunition", rarity: "Common", description: "This arrow can't be broken except by a Wish spell. After being fired, it reappears in your quiver at dawn. Effectively a permanent, reusable arrow."},
    {name: "Veteran's Cane", cost: 66, type: "Weapon", rarity: "Common", description: "When held, this cane changes to resemble any simple melee weapon of your choice. It reverts to a cane when you let go. Functions as whatever weapon you choose. Concealable weapon."},
    {name: "Walloping Ammunition", cost: 33, type: "Ammunition", rarity: "Common", description: "This ammunition deals no damage, but on a hit, the target must succeed on a DC 10 Strength save or be knocked prone. Single use projectile for nonlethal takedowns."},
    {name: "Wand of Conducting", cost: 198, type: "Wand/Staff/Rod", rarity: "Common", description: "This wand has 3 charges. You can use an action to wave it and expend 1 charge to create orchestral music that can be heard up to 60 feet away. You control the song. Regains charges at dawn."},
    {name: "Wand of Pyrotechnics", cost: 198, type: "Wand/Staff/Rod", rarity: "Common", description: "Has 7 charges. Use 1 charge to cast Pyrotechnics. Creates fireworks or smoke effects from flames. Regains 1d6+1 charges daily at dawn. 5% chance to become nonmagical if empty."},
    {name: "Wand of Scowls", cost: 198, type: "Wand/Staff/Rod", rarity: "Common", description: "Has 3 charges. You can expend 1 charge and target a humanoid within 30 feet. The target must succeed on a DC 10 Charisma save or be forced to scowl for 1 minute. Regains charges at dawn."},
    {name: "Wand of Smiles", cost: 198, type: "Wand/Staff/Rod", rarity: "Common", description: "Has 3 charges. You can expend 1 charge and target a humanoid within 30 feet. The target must succeed on a DC 10 Charisma save or be forced to smile for 1 minute. Regains charges at dawn."},
    {name: "Absorbing Tattoo", cost: 9720, type: "Misc", rarity: "Very Rare", description: "Produced by a special needle, this tattoo depicts clashing elements (choose acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder). Grants resistance to that damage type. While taking damage of that type, you can use reaction to gain immunity until end of your next turn and regain HP equal to half damage taken. Immunity usable once per dawn."},
    {name: "Alchemical Compendium", cost: 4880, type: "Potion", rarity: "Rare", description: "This leather-bound book contains alchemical knowledge. Requires attunement by wizard. Grants advantage on Arcana checks related to potions and elixirs. Can produce common alchemical items. Replacement for alchemist's supplies granting +2 bonus."},
    {name: "All-Purpose Tool, +1", cost: 2580, type: "Misc", rarity: "Uncommon", description: "Requires attunement by artificer. This tool can transform into any artisan's tool of your choice. Grants +1 to spell attack rolls and ability checks made with it. Can be used as a spellcasting focus."},
    {name: "All-Purpose Tool, +2", cost: 9040, type: "Misc", rarity: "Rare", description: "Requires attunement by artificer. This tool can transform into any artisan's tool. Grants +2 to spell attack rolls and ability checks made with it. Can store one cantrip. Can be used as a spellcasting focus."},
    {name: "All-Purpose Tool, +3", cost: 26160, type: "Misc", rarity: "Very Rare", description: "Requires attunement by artificer. This tool can transform into any artisan's tool. Grants +3 to spell attack rolls and ability checks made with it. Can store two cantrips. Can be used as a spellcasting focus."},
    {name: "Amulet of the Devout, +1", cost: 2460, type: "Jewelry", rarity: "Uncommon", description: "Requires attunement by cleric or paladin. This amulet grants +1 to spell attack rolls and saving throw DCs of your spells. Can be used as a holy symbol."},
    {name: "Amulet of the Devout, +2", cost: 8880, type: "Jewelry", rarity: "Rare", description: "Requires attunement by cleric or paladin. This amulet grants +2 to spell attack rolls and saving throw DCs of your spells. Can be used as a holy symbol. You can use Channel Divinity one extra time per rest."},
    {name: "Amulet of the Devout, +3", cost: 25920, type: "Jewelry", rarity: "Very Rare", description: "Requires attunement by cleric or paladin. This amulet grants +3 to spell attack rolls and saving throw DCs of your spells. Can be used as a holy symbol. You can use Channel Divinity one extra time per rest."},
    {name: "Arcane Grimoire, +1", cost: 2460, type: "Book", rarity: "Uncommon", description: "Requires attunement by wizard. This spellbook grants +1 to spell attack rolls and saving throw DCs of your spells. Can be used as a spellcasting focus and contains your prepared spells."},
    {name: "Arcane Grimoire, +2", cost: 8880, type: "Book", rarity: "Rare", description: "Requires attunement by wizard. This spellbook grants +2 to spell attack rolls and saving throw DCs of your spells. Can be used as a focus. Once per long rest, you can replace a prepared spell."},
    {name: "Arcane Grimoire, +3", cost: 25920, type: "Book", rarity: "Very Rare", description: "Requires attunement by wizard. This spellbook grants +3 to spell attack rolls and saving throw DCs of your spells. Can be used as a focus. Once per long rest, you can replace a prepared spell."},
    {name: "Astral Shard", cost: 3620, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic, you can roll on the Wild Magic Surge table. If you roll a 1, you gain 1 sorcery point."},
    {name: "Astromancy Archive", cost: 3920, type: "Book", rarity: "Rare", description: "Requires attunement by wizard. This brass disc shows an orrery of the planes. Grants +1 to Arcana checks. Can cast Augury and Divination. Contains 3d6 spells from the divination school. Spells can change with study."},
    {name: "Atlas of Endless Horizons", cost: 4640, type: "Book", rarity: "Rare", description: "Requires attunement by wizard. This book shows maps of places you've been. Can cast Arcane Gate. Contains 3d6 spells related to travel and exploration (conjuration school). Can be used as spellcasting focus."},
    {name: "Barrier Tattoo, AC12+Dex", cost: 900, type: "Misc", rarity: "Uncommon", description: "Produced by a special needle. While not wearing armor, the tattoo grants AC equal to 12 + your Dexterity modifier. You can use a bonus action to activate it, gaining +5 to AC until the start of your next turn. Usable once per short or long rest."},
    {name: "Barrier Tattoo, AC15+Dex2", cost: 2400, type: "Misc", rarity: "Rare", description: "Produced by a special needle. While not wearing armor, the tattoo grants AC equal to 15 + your Dexterity modifier (max 2). You can use a bonus action to activate it, gaining +5 to AC until start of your next turn. Usable twice per short or long rest."},
    {name: "Barrier Tattoo, AC18", cost: 5400, type: "Misc", rarity: "Very Rare", description: "Produced by a special needle. While not wearing armor, the tattoo grants AC 18. You can use a bonus action to activate it, gaining +5 to AC until the start of your next turn. Usable three times per short or long rest."},
    {name: "Bell Branch", cost: 800, type: "Misc", rarity: "Rare", description: "Requires attunement by druid or warlock. This silver implement can be used as a spellcasting focus. As a bonus action, you can expend one spell slot to regain a number of hit points equal to 1d4 per level of the spell slot expended."},
    {name: "Blood Fury Tattoo", cost: 18000, type: "Misc", rarity: "Legendary", description: "Produced by a special needle, this tattoo depicts blood-red symbols. Grants +1 to attack and damage rolls. When you hit with a weapon attack, you can activate the tattoo to deal extra damage equal to 4d6 + your Constitution modifier. Usable once per short or long rest. While active for 1 minute, you gain resistance to all damage and advantage on Strength checks and saves."},
    {name: "Bloodwell Vial, +1", cost: 3180, type: "Jewelry", rarity: "Uncommon", description: "Requires attunement by sorcerer. This vial can be used as a spellcasting focus. Grants +1 to spell attack rolls and saving throw DCs. When you roll Hit Dice to recover hit points, you can regain one expended sorcery point (max once per long rest)."},
    {name: "Bloodwell Vial, +2", cost: 9840, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. This vial can be used as a spellcasting focus. Grants +2 to spell attack rolls and saving throw DCs. When you roll Hit Dice to recover hit points, you can regain one expended sorcery point (max 5 times per long rest)."},
    {name: "Bloodwell Vial, +3", cost: 27360, type: "Jewelry", rarity: "Very Rare", description: "Requires attunement by sorcerer. This vial can be used as a spellcasting focus. Grants +3 to spell attack rolls and saving throw DCs. When you roll Hit Dice to recover hit points, you can regain one expended sorcery point (max 5 times per long rest)."},
    {name: "Cauldron of Rebirth", cost: 8700, type: "Misc", rarity: "Very Rare", description: "Requires attunement by druid or warlock. This tiny pot grows to Medium size when placed on ground. Once per long rest, you can use it to cast Resurrection (no material components required), brewing resurrection for 1 minute. Target emerges renewed."},
    {name: "Coiling Grasp Tattoo", cost: 849, type: "Misc", rarity: "Uncommon", description: "Produced by a special needle, this tattoo depicts grasping tendrils. Your unarmed strikes have a reach of 15 feet and deal 1d6 force damage on a hit. You can use a bonus action to activate the tattoo and pull a creature within 15 feet up to 10 feet closer (DC 14 Strength save negates). Usable once per short or long rest."},
    {name: "Crystalline Chronicle", cost: 8130, type: "Jewelry", rarity: "Very Rare", description: "Requires attunement by wizard. This crystalline book can change its appearance. Grants advantage on Arcana checks. Cast Identify and Illusory Script at will. Contains 3d6 spells related to knowledge (primarily divination, illusion). Can be used as a focus."},
    {name: "Devotee's Censer", cost: 1734, type: "Misc", rarity: "Rare", description: "Requires attunement by cleric or paladin. This vessel can be used as a holy symbol and a spellcasting focus. As a bonus action, you can expend one spell slot to cause the censer to emit incense that grants you and allies advantage on their next attack roll or saving throw. Affects allies within 10 feet."},
    {name: "Duplicitious Manuscript", cost: 3380, type: "Book", rarity: "Rare", description: "Requires attunement by wizard. This book shows whatever text you wish others to see. Can cast Nystul's Magic Aura. Contains 3d6 spells related to deception (primarily illusion school). Ideal for trickster wizards. Can be used as a focus."},
    {name: "Eldritch Claw Tattoo", cost: 1191, type: "Misc", rarity: "Uncommon", description: "Produced by a special needle, this tattoo channels eldritch energy. Your unarmed strikes deal 1d6 force damage. You can use a bonus action to activate the tattoo for 1 minute, during which your unarmed strikes are magical with a +1 bonus to attack and damage rolls, and reach increases by 15 feet. Usable once per short or long rest."},
    {name: "Elemental Essence Shard, Air", cost: 2420, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic on a spell that deals acid, cold, fire, lightning, or thunder damage, you can change it to lightning damage. You also gain resistance to lightning damage."},
    {name: "Elemental Essence Shard, Earth", cost: 3620, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic on a spell that deals acid, cold, fire, lightning, or thunder damage, you can change it to acid damage. You also gain resistance to acid damage."},
    {name: "Elemental Essence Shard, Fire", cost: 806, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic on a spell that deals acid, cold, fire, lightning, or thunder damage, you can change it to fire damage. You also gain resistance to fire damage."},
    {name: "Elemental Essence Shard, Water", cost: 1581, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic on a spell that deals acid, cold, fire, lightning, or thunder damage, you can change it to cold damage. You also gain resistance to cold damage."},
    {name: "Far Realm Shard", cost: 736, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic, roll on the Wild Magic Surge table. You also gain advantage on Arcana checks."},
    {name: "Feywild Shard", cost: 2715, type: "Jewelry", rarity: "Uncommon", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic on a spell that charms or frightens, you can force the target to have disadvantage on their first save. You also have advantage on saving throws against being charmed."},
    {name: "Fulminating Treatise", cost: 3750, type: "Misc", rarity: "Rare", description: "Requires attunement by wizard. This brass book smells of sulfur. Grants advantage on Arcana checks about evocation spells. Can cast Contingency. Contains 3d6 evocation spells. When you deal damage with a wizard spell, you can reroll damage dice (minimum result of 1d6). Usable once per dawn."},
    {name: "Ghost Step Tattoo", cost: 2160, type: "Misc", rarity: "Very Rare", description: "Produced by a special needle. As a bonus action, you can become incorporeal until the end of your next turn. While incorporeal, you gain resistance to bludgeoning, piercing, and slashing damage, you can move through creatures and objects as if they were difficult terrain, and you take 1d10 force damage if you end your turn inside an object. Usable once per long rest."},
    {name: "Guardian Emblem", cost: 555, type: "Misc", rarity: "Uncommon", description: "Requires attunement by cleric or paladin. This medallion can be used as a holy symbol. When a creature you can see within 30 feet is hit by an attack, you can use your reaction to grant that creature a +2 bonus to its AC against that attack. Usable a number of times equal to your proficiency bonus per long rest."},
    {name: "Heart Weaver's Primer", cost: 3800, type: "Misc", rarity: "Rare", description: "Requires attunement by wizard. This tome is bound in bird feathers. Grants advantage on Arcana checks about enchantment spells. Can cast Rary's Telepathic Bond. Contains 3d6 enchantment spells. When you cast an enchantment spell that targets one creature, you can target two instead. Usable once per dawn."},
    {name: "Illuminator's Tattoo", cost: 540, type: "Misc", rarity: "Common", description: "Produced by a special needle, this tattoo features beautiful calligraphy. As an action, you can touch the tattoo and shed bright light in a 20-foot radius and dim light for an additional 20 feet, or extinguish the light. You can also write words on any surface. The words fade after 1 hour."},
    {name: "Libram of Souls and Flesh", cost: 3800, type: "Book", rarity: "Rare", description: "Requires attunement by wizard. This tome is bound in skin. Grants advantage on Arcana checks about necromancy. Can cast Magic Jar. Contains 3d6 necromancy spells. When you cast a necromancy spell that targets one creature, you can target two instead. Usable once per dawn."},
    {name: "Lifewell Tattoo", cost: 12600, type: "Misc", rarity: "Very Rare", description: "Produced by a special needle, this tattoo represents vitality. When you would drop to 0 hit points, you can drop to 1 hit point instead and gain temporary hit points equal to your Constitution modifier (minimum 1) for each level you've gained. You then gain 1 level of exhaustion. Usable once per long rest."},
    {name: "Lyre of Building", cost: 20520, type: "Misc", rarity: "Rare", description: "Requires proficiency with a musical instrument. While playing this lyre, you can cast Mending, Fabricate, and Move Earth. All construction takes half the normal time. Once per day, construction projects can be completed with a song rather than mundane work."},
    {name: "Masquerade Tattoo", cost: 540, type: "Misc", rarity: "Common", description: "Produced by a special needle, this tattoo shifts and changes. As a bonus action, you can shape the tattoo into any color or pattern you wish. You can also add tattoos to your appearance or make existing tattoos disappear. This doesn't count as a disguise."},
    {name: "Moon Sickle, +1", cost: 4365, type: "Weapon", rarity: "Uncommon", description: "Requires attunement by druid or ranger. This silver sickle functions as a +1 weapon and can be used as a spellcasting focus. When you cast a spell that restores hit points or deals radiant damage, add a d4 to one roll of that spell."},
    {name: "Moon Sickle, +2", cost: 15020, type: "Weapon", rarity: "Rare", description: "Requires attunement by druid or ranger. This silver sickle functions as a +2 weapon and can be used as a spellcasting focus. When you cast a spell that restores hit points or deals radiant damage, add a d6 to one roll of that spell."},
    {name: "Moon Sickle, +3", cost: 43230, type: "Weapon", rarity: "Very Rare", description: "Requires attunement by druid or ranger. This silver sickle functions as a +3 weapon and can be used as a spellcasting focus. When you cast a spell that restores hit points or deals radiant damage, add a d8 to one roll of that spell."},
    {name: "Nature's Mantle", cost: 1800, type: "Apparel", rarity: "Uncommon", description: "Requires attunement by druid or ranger. While wearing this cloak, you can use it as a spellcasting focus. You also have advantage on Charisma checks made to interact with beasts and plants."},
    {name: "Outer Essence Shard, Lawful", cost: 9020, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic on a spell, roll on table for chance of additional effect. You also gain resistance to psychic damage."},
    {name: "Outer Essence Shard, Chaotic", cost: 3620, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic on a spell, roll on table for chance of additional effect. You also gain resistance to psychic damage."},
    {name: "Outer Essence Shard, Good", cost: 2420, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic on a spell, roll on table for chance of additional effect. You also gain resistance to psychic damage."},
    {name: "Outer Essence Shard, Evil", cost: 734, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic on a spell, roll on table for chance of additional effect. You also gain resistance to psychic damage."},
    {name: "Planecaller's Codex", cost: 3800, type: "Book", rarity: "Rare", description: "Requires attunement by wizard. This book is bound in celestial leather. Grants advantage on Arcana checks about conjuration. Can cast Gate. Contains 3d6 conjuration spells. When you cast a conjuration spell, you can extend its duration. Usable once per dawn."},
    {name: "Prosthetic Limb", cost: 330, type: "Misc", rarity: "Common", description: "This artificial limb replaces a lost limb. While attached and attuned to it, the prosthetic functions identically to the body part it is replacing. Can take many forms: a wooden peg leg, an iron hand, or similar."},
    {name: "Protective Verses", cost: 3800, type: "Misc", rarity: "Rare", description: "Requires attunement by wizard. This leather-bound book contains protection spells. Grants advantage on Arcana checks about abjuration. Can cast Otiluke's Resilient Sphere. Contains 3d6 abjuration spells. When you cast an abjuration spell, you can grant yourself or another creature 2d10 temporary hit points. Usable once per dawn."},
    {name: "Reveler's Concertina", cost: 11000, type: "Misc", rarity: "Rare", description: "Requires proficiency with a musical instrument. While playing this concertina, you can cast Otto's Irresistible Dance (DC 15). Once used, this property can't be used again until next dawn."},
    {name: "Rhythm-Maker's Drum, +1", cost: 2460, type: "Misc", rarity: "Uncommon", description: "Requires attunement by bard. This drum can be used as a spellcasting focus. Grants +1 to spell attack rolls and saving throw DCs. As a bonus action, you can play the drum to give one creature advantage on their next attack roll or saving throw."},
    {name: "Rhythm-Maker's Drum, +2", cost: 8880, type: "Misc", rarity: "Rare", description: "Requires attunement by bard. This drum can be used as a spellcasting focus. Grants +2 to spell attack rolls and saving throw DCs. As a bonus action, you can play the drum to give one creature advantage on their next attack roll or saving throw."},
    {name: "Rhythm-Maker's Drum, +3", cost: 25920, type: "Misc", rarity: "Very Rare", description: "Requires attunement by bard. This drum can be used as a spellcasting focus. Grants +3 to spell attack rolls and saving throw DCs. As a bonus action, you can play the drum to give one creature advantage on their next attack roll or saving throw."},
    {name: "Shadowfell Brand Tattoo", cost: 4320, type: "Misc", rarity: "Rare", description: "Produced by a special needle, this tattoo is dark and gloomy. Grants advantage on Dexterity (Stealth) checks. As a bonus action, you can activate it to become incorporeal and teleport up to 30 feet to an unoccupied space you can see that is in dim light or darkness. Usable once per long rest."},
    {name: "Shadowfell Shard", cost: 3620, type: "Jewelry", rarity: "Rare", description: "Requires attunement by sorcerer. While holding this shard, you can use it as a spellcasting focus. When you use Metamagic on a spell that deals damage, you can change the damage type to necrotic. You also gain darkvision out to 60 feet. If you already have darkvision, its range increases by 60 feet."},
    {name: "Spellwrought Tattoo, Cantrip", cost: 66, type: "Misc", rarity: "Common", description: "Produced by a special needle, this tattoo contains a single cantrip. You can cast that cantrip at will. Once tattooed on your skin, the tattoo becomes a permanent part of you. Determine spell randomly or by choice when made."},
    {name: "Spellwrought Tattoo, Lv1", cost: 132, type: "Misc", rarity: "Common", description: "Produced by a special needle, this tattoo contains a single 1st-level spell. You can cast that spell once. The tattoo then fades. No material components required. Determine spell randomly or by choice when made."},
    {name: "Spellwrought Tattoo, Lv2", cost: 297, type: "Misc", rarity: "Uncommon", description: "Produced by a special needle, this tattoo contains a single 2nd-level spell. You can cast that spell once. The tattoo then fades. No material components required. Determine spell randomly or by choice when made."},
    {name: "Spellwrought Tattoo, Lv3", cost: 495, type: "Misc", rarity: "Uncommon", description: "Produced by a special needle, this tattoo contains a single 3rd-level spell. You can cast that spell once. The tattoo then fades. No material components required. Determine spell randomly or by choice when made."},
    {name: "Spellwrought Tattoo, Lv4", cost: 990, type: "Misc", rarity: "Rare", description: "Produced by a special needle, this tattoo contains a single 4th-level spell. You can cast that spell once. The tattoo then fades. No material components required. Determine spell randomly or by choice when made."},
    {name: "Spellwrought Tattoo, Lv5", cost: 1540, type: "Misc", rarity: "Rare", description: "Produced by a special needle, this tattoo contains a single 5th-level spell. You can cast that spell once. The tattoo then fades. No material components required. Determine spell randomly or by choice when made."},
    {name: "Acheron Blade", cost: 1240, type: "Weapon", rarity: "Rare", description: "This dark iron shortsword is imbued with war energy. When you damage a creature with it, the target has disadvantage on the next attack roll it makes before the end of its next turn. Spreads discord in combat."},
    {name: "Bloodaxe", cost: 5143, type: "Weapon", rarity: "Very Rare", description: "This greataxe deals an extra 1d6 necrotic damage to creatures that aren't constructs or undead. If you reduce a creature to 0 hit points with it, you gain temporary hit points equal to your character level."},
    {name: "Corpse Slayer", cost: 1957, type: "Weapon", rarity: "Rare", description: "This weapon deals an extra 1d6 slashing damage to undead creatures. When you reduce an undead to 0 hit points with it, the target is immediately destroyed, turning to dust. No resurrection possible."},
    {name: "Duskcrusher", cost: 7500, type: "Weapon", rarity: "Very Rare", description: "This warhammer glows with twilight energy. It sheds dim light in a 10-foot radius. Deals an extra 2d6 radiant damage to undead and fiends. Against constructs, it deals maximum damage dice. Very effective against certain enemy types."},
    {name: "Dyrrn's Tentacle Whip", cost: 6707, type: "Weapon", rarity: "Very Rare", description: "This +2 whip is made from aberrant tentacles. When you hit with it, the target must succeed on a DC 15 Constitution save or be poisoned until the end of your next turn. On a critical hit, the target is also paralyzed while poisoned this way."},
    {name: "Hellfire Weapon", cost: 495, type: "Weapon", rarity: "Uncommon", description: "This weapon has been infused with infernal energy. When you hit with an attack using it, you can cast Hellish Rebuke (1st level) as a reaction. Once used, this property can't be used again until next dawn."},
    {name: "Needle of Mending", cost: 1600, type: "Weapon", rarity: "Rare", description: "This rapier can mend what it cuts. When you hit a creature with it, you can cast Cure Wounds (2nd level) on yourself as a bonus action. Once used, this property can't be used again until next dawn. Vampiric healing."},
    {name: "Shatterspike", cost: 1650, type: "Weapon", rarity: "Uncommon", description: "This longsword is particularly effective against objects and constructs. Against objects, this weapon deals maximum damage dice. Against constructs, it deals an extra 2d6 damage. Perfect for breaking barriers and golems."},
    {name: "Spear of Backbiting", cost: 4950, type: "Weapon", rarity: "Very Rare", description: "Cursed +2 javelin or spear. On a natural 1 attack roll, the weapon curves back and attacks you instead (automatic hit, full damage including bonuses). Requires Remove Curse to unattune. Dangerous weapon."},
    {name: "Weapon of Certain Death", cost: 660, type: "Weapon", rarity: "Rare", description: "When you score a critical hit with this weapon against a creature below half its hit point maximum, that creature must succeed on a DC 15 Constitution save or die instantly. A grim and efficient finisher."},
    {name: "Amulet of Protection from Turning", cost: 900, type: "Jewelry", rarity: "Rare", description: "While wearing this amulet, you have advantage on saving throws against any effect that turns undead. Primarily useful for undead creatures or those allied with them. Grants some protection from divine magic."},
    {name: "Amulet of the Black Skull", cost: 8100, type: "Jewelry", rarity: "Very Rare", description: "This skull-shaped amulet radiates evil. While wearing it, you have immunity to the frightened condition and advantage on all saving throws against necromancy spells. You can cast Cause Fear at will. Requires evil alignment."},
    {name: "Amulet of the Drunkard", cost: 957, type: "Jewelry", rarity: "Uncommon", description: "While wearing this amulet, you have advantage on saving throws against poison. You also regain 1 hit point when you drink an alcoholic beverage. Celebrates the drunken warrior lifestyle."},
    {name: "Arcane Propulsion Arm", cost: 1800, type: "Weapon", rarity: "Very Rare", description: "This prosthetic limb replaces a lost arm. It functions as a +1 weapon dealing 1d8 force damage with 30-foot range (can be thrown and returns). While attached, it functions as the missing limb. Grants +2 to Strength to max 20 (not Constitution)."},
    {name: "Balance of Harmony", cost: 198, type: "Jewelry", rarity: "Uncommon", description: "This medallion helps maintain equilibrium. While wearing it, you have advantage on Dexterity (Acrobatics) checks to keep your balance. You also can't be knocked prone by magical means."},
    {name: "Battle Standard of Infernal Power", cost: 1800, type: "Misc", rarity: "Very Rare", description: "This flag on a 10-foot pole radiates infernal energy. Allies within 60 feet who can see the standard gain +1 to attack rolls and saving throws. Fiends gain +2 instead. Planting it requires an action. Moving it ends the effect."},
    {name: "Belashyrra's Beholder Crown", cost: 35100, type: "Jewelry", rarity: "Legendary", description: "This crown is adorned with eyestalks. While wearing it, you gain darkvision 60 feet (or +60 if you have it) and can see invisible creatures within that range. You can also cast Eyebite once per day. Aberrations have disadvantage on attacks against you."},
    {name: "Bracer of Flying Daggers", cost: 600, type: "Jewelry", rarity: "Rare", description: "This armband can produce magical daggers. As a bonus action, you can cause a dagger to appear in your free hand. The dagger lasts until the end of your turn. You can use an action to make two ranged attacks with them (attack bonus +5, 1d4+3 damage, range 60 feet)."},
    {name: "Breathing Bubble", cost: 1320, type: "Misc", rarity: "Common", description: "This translucent bubble of magic allows you to breathe normally in any environment (including underwater or in toxic gas) for 1 hour. The bubble pops when the duration ends or you remove it. Single use item."},
    {name: "Brooch of Living Essence", cost: 1800, type: "Jewelry", rarity: "Uncommon", description: "While wearing this living brooch, you have resistance to necrotic damage and advantage on death saving throws. The brooch appears to pulse with a faint heartbeat. Protection against death magic."},
    {name: "Butcher's Bib", cost: 2400, type: "Apparel", rarity: "Rare", description: "This blood-stained apron grants resistance to necrotic damage. When you reduce a living creature to 0 hit points, you gain temporary hit points equal to your Constitution modifier (minimum 1). Macabre but effective."},
    {name: "Charm of Plant Command", cost: 2160, type: "Misc", rarity: "Rare", description: "This tiny wooden amulet allows you to cast Speak with Plants at will while wearing it. Once per day, you can also cast Plant Growth. Useful for druids and nature-themed characters."},
    {name: "Coin of Delving", cost: 330, type: "Jewelry", rarity: "Common", description: "This coin has a compass on one side. While underground, you can use an action to learn which way is north. You also learn your approximate depth below the surface. Perfect for dungeon delving."},
    {name: "Dispelling Stone", cost: 4455, type: "Jewelry", rarity: "Very Rare", description: "This smooth stone allows you to cast Dispel Magic (5th level) once per day. You can also use it as a focus for abjuration spells, granting advantage on the spell attack roll or imposing disadvantage on the target's save."},
    {name: "Dust of Deliciousness", cost: 792, type: "Potion", rarity: "Uncommon", description: "This fine powder can season any food or drink, making it taste delicious regardless of its actual quality. Can season up to 5 meals. Also neutralizes any poisons in the food or drink. Useful for survival situations."},
    {name: "Eagle Whistle", cost: 1584, type: "Misc", rarity: "Rare", description: "This whistle summons 1d4+1 giant eagles within 10 minutes. They serve you for 1 hour, carrying you or fighting for you. Once used, the whistle can't be used again for 7 days. Excellent for emergency transport or combat aid."},
    {name: "Feather of Diatryma Summoning", cost: 1056, type: "Misc", rarity: "Rare", description: "This giant feather can summon a diatryma (use axe beak statistics). The bird appears within 30 feet, is friendly, and obeys your commands for 6 hours. Once used, the feather disintegrates. Single use summoning item."},
    {name: "Feather Token Feather Fall", cost: 198, type: "Misc", rarity: "Common", description: "This small token stops a fall. When you fall, you can use your reaction to activate it. You and everything you're carrying fall 60 feet per round and take no falling damage. Effect lasts until you land. Single use."},
    {name: "Gauntlets of Flaming Fury", cost: 1532, type: "Armor", rarity: "Rare", description: "These metal gauntlets glow with inner fire. Your unarmed strikes deal an extra 1d6 fire damage. You can use a bonus action to cause them to shed bright light in a 20-foot radius and dim light for another 20 feet, or extinguish them."},
    {name: "Ghost Lantern", cost: 1800, type: "Misc", rarity: "Rare", description: "This lantern contains a captured spirit. It sheds bright light in a 30-foot radius and dim light for another 30 feet. Undead in the light have disadvantage on attack rolls. You can release the spirit to cast Phantasmal Killer once, then it becomes nonmagical."},
    {name: "Glamerweave", cost: 1188, type: "Apparel", rarity: "Uncommon", description: "This clothing is woven with illusory magic. You can use a bonus action to change the clothing's appearance to any other style. The clothing can appear as anything from beggar's rags to fine noble attire. Doesn't change actual protective value."},
    {name: "Goggles of Object Reading", cost: 810, type: "Apparel", rarity: "Uncommon", description: "While wearing these crystal lenses, you can cast Identify at will. The goggles also grant advantage on Intelligence (Investigation) checks to examine objects within 5 feet. Perfect for finding hidden details and magical properties."},
    {name: "Helm of Underwater Action", cost: 4500, type: "Armor", rarity: "Uncommon", description: "While wearing this helmet, you can breathe underwater and have a swimming speed equal to your walking speed. The helmet also grants darkvision 60 feet while underwater. Complete underwater capability."},
    {name: "Imbued Wood Focus", cost: 550, type: "Wand/Staff/Rod", rarity: "Common", description: "This wooden rod is carved with druidic symbols. It can be used as a spellcasting focus by druids. The rod is also immune to damage and never rots or decays. Simple but reliable focus."},
    {name: "Knave's Eye Patch", cost: 6600, type: "Apparel", rarity: "Rare", description: "While wearing this eye patch, you gain advantage on Wisdom (Perception) checks based on sight. You also have advantage on Charisma (Deception) checks. Useful for rogues and pirates. Covers one eye but enhances overall perception."},
    {name: "Mask of the Beast", cost: 990, type: "Apparel", rarity: "Uncommon", description: "While wearing this mask shaped like a beast's face, your Charisma (Intimidation) checks have advantage. You can also cast Speak with Animals at will. You have disadvantage on Charisma (Persuasion) checks while wearing it."},
    {name: "Mirror of the Past", cost: 9900, type: "Misc", rarity: "Rare", description: "This hand mirror can show events from the past. Once per day, you can gaze into it and see events that occurred at your current location up to 100 years ago. You can view up to 10 minutes of events. Cannot be used in combat."},
    {name: "Night Caller", cost: 2970, type: "Misc", rarity: "Uncommon", description: "This whistle is made from bone. When blown at night, it summons 1d4+1 skeletons or zombies (your choice) that rise from the ground within 60 feet. They obey you for 1 hour. Once used, can't be used again for 7 days."},
    {name: "Paper Bird", cost: 1782, type: "Misc", rarity: "Uncommon", description: "This origami bird can deliver messages. Write a message (up to 50 words), speak a recipient's name, and the bird flies to them (knows location if within 1 mile). Travels 15 miles per hour for up to 24 hours. Recipient can write reply. Single use."},
    {name: "Pipe of Remembrance", cost: 330, type: "Misc", rarity: "Common", description: "While smoking this pipe, you can perfectly recall any events that occurred within the last 24 hours. The memories are clear and detailed. Once per day, you can recall events from up to a year ago. Useful for investigations."},
    {name: "Robe of Summer", cost: 6000, type: "Apparel", rarity: "Rare", description: "While wearing this robe, you have resistance to cold damage and are comfortable in temperatures as low as -50°F. The robe also grants advantage on saving throws against effects that would reduce your speed or restrain you due to ice or snow."},
    {name: "Stonespeaker Crystal", cost: 9780, type: "Jewelry", rarity: "Rare", description: "This crystal allows you to cast Speak with Plants at will, but only to communicate with stone and earth. You can ask questions of rocks, boulders, and stone structures. Once per day, you can cast Meld into Stone. Useful for earth-based exploration."},
	{name: "Padded Armor +1", cost: 2165, type: "Armor", rarity: "Rare", description: "Quilted layers of cloth and batting. Light armor, AC 11 + Dex modifier, disadvantage on Stealth. You have a +1 bonus to AC while wearing this armor."},
  {name: "Padded Armor +2",cost: 11642,type: "Armor",rarity: "Very Rare",description: "Quilted layers of cloth and batting. Light armor, AC 11 + Dex modifier, disadvantage on Stealth. You have a +2 bonus to AC while wearing this armor."},
  {name: "Padded Armor +3",cost: 34905,type: "Armor",rarity: "Legendary",description: "Quilted layers of cloth and batting. Light armor, AC 11 + Dex modifier, disadvantage on Stealth. You have a +3 bonus to AC while wearing this armor."},
  {name: "Leather Armor +1",cost: 2170,type: "Armor",rarity: "Rare",description: "Chest protection made of tough, hardened leather. Light armor, AC 11 + Dex modifier. You have a +1 bonus to AC while wearing this armor."},
  {name: "Leather Armor +2",cost: 11647,type: "Armor",rarity: "Very Rare",description: "Chest protection made of tough, hardened leather. Light armor, AC 11 + Dex modifier. You have a +2 bonus to AC while wearing this armor."},
  {name: "Leather Armor +3",cost: 34910,type: "Armor",rarity: "Legendary",description: "Chest protection made of tough, hardened leather. Light armor, AC 11 + Dex modifier. You have a +3 bonus to AC while wearing this armor."
  },
  {name: "Studded Leather Armor +1",cost: 2205,type: "Armor",rarity: "Rare",description: "Leather reinforced with close-set rivets or spikes. Light armor, AC 12 + Dex modifier. You have a +1 bonus to AC while wearing this armor."
  },
  {name: "Studded Leather Armor +2",cost: 11682,type: "Armor",rarity: "Very Rare",description: "Leather reinforced with close-set rivets or spikes. Light armor, AC 12 + Dex modifier. You have a +2 bonus to AC while wearing this armor."
  },
  {name: "Studded Leather Armor +3",cost: 34945,type: "Armor",rarity: "Legendary",description: "Leather reinforced with close-set rivets or spikes. Light armor, AC 12 + Dex modifier. You have a +3 bonus to AC while wearing this armor."
  },
  {name: "Hide Armor +1",cost: 2170,type: "Armor",rarity: "Rare",description: "Crude armor made from thick furs and pelts. Medium armor, AC 12 + Dex modifier (max 2). You have a +1 bonus to AC while wearing this armor."
  },
  {name: "Hide Armor +2",cost: 11647,type: "Armor",rarity: "Very Rare",description: "Crude armor made from thick furs and pelts. Medium armor, AC 12 + Dex modifier (max 2). You have a +2 bonus to AC while wearing this armor."
  },
  {name: "Hide Armor +3",cost: 34910,type: "Armor",rarity: "Legendary",description: "Crude armor made from thick furs and pelts. Medium armor, AC 12 + Dex modifier (max 2). You have a +3 bonus to AC while wearing this armor."
  },
  {name: "Chain Shirt +1",cost: 2210,type: "Armor",rarity: "Rare",description: "A shirt made of interlocking metal rings. Medium armor, AC 13 + Dex modifier (max 2). You have a +1 bonus to AC while wearing this armor."
  },
  {name: "Chain Shirt +2",cost: 11687,type: "Armor",rarity: "Very Rare",description: "A shirt made of interlocking metal rings. Medium armor, AC 13 + Dex modifier (max 2). You have a +2 bonus to AC while wearing this armor."
  },
  {name: "Chain Shirt +3",cost: 34950,type: "Armor",rarity: "Legendary",description: "A shirt made of interlocking metal rings. Medium armor, AC 13 + Dex modifier (max 2). You have a +3 bonus to AC while wearing this armor."
  },
  {name: "Scale Mail +1",cost: 2210,type: "Armor",rarity: "Rare",description: "Overlapping pieces of metal affixed to a backing. Medium armor, AC 14 + Dex modifier (max 2), disadvantage on Stealth. You have a +1 bonus to AC while wearing this armor."
  },
  {name: "Scale Mail +2",cost: 11687,type: "Armor",rarity: "Very Rare",description: "Overlapping pieces of metal affixed to a backing. Medium armor, AC 14 + Dex modifier (max 2), disadvantage on Stealth. You have a +2 bonus to AC while wearing this armor."
  },
  {name: "Scale Mail +3",cost: 34950,type: "Armor",rarity: "Legendary",description: "Overlapping pieces of metal affixed to a backing. Medium armor, AC 14 + Dex modifier (max 2), disadvantage on Stealth. You have a +3 bonus to AC while wearing this armor."
  },
  {name: "Breastplate +1",cost: 2560,type: "Armor",rarity: "Rare",description: "Fitted metal chest plate worn over flexible leather. Medium armor, AC 14 + Dex modifier (max 2). You have a +1 bonus to AC while wearing this armor."
  },
  {name: "Breastplate +2",cost: 12037,type: "Armor",rarity: "Very Rare",description: "Fitted metal chest plate worn over flexible leather. Medium armor, AC 14 + Dex modifier (max 2). You have a +2 bonus to AC while wearing this armor."
  },
  {name: "Breastplate +3",cost: 35300,type: "Armor",rarity: "Legendary",description: "Fitted metal chest plate worn over flexible leather. Medium armor, AC 14 + Dex modifier (max 2). You have a +3 bonus to AC while wearing this armor."
  },
  {name: "Half Plate +1",cost: 2910,type: "Armor",rarity: "Rare",description: "Plate armor covering most of the body. Medium armor, AC 15 + Dex modifier (max 2), disadvantage on Stealth. You have a +1 bonus to AC while wearing this armor."
  },
  {name: "Half Plate +2",cost: 12387,type: "Armor",rarity: "Very Rare",description: "Plate armor covering most of the body. Medium armor, AC 15 + Dex modifier (max 2), disadvantage on Stealth. You have a +2 bonus to AC while wearing this armor."
  },
  {name: "Half Plate +3",cost: 35650,type: "Armor",rarity: "Legendary",description: "Plate armor covering most of the body. Medium armor, AC 15 + Dex modifier (max 2), disadvantage on Stealth. You have a +3 bonus to AC while wearing this armor."
  },
  {name: "Ring Mail +1",cost: 2190,type: "Armor",rarity: "Rare",description: "Leather armor with heavy rings sewn into it. Heavy armor, AC 14, disadvantage on Stealth. You have a +1 bonus to AC while wearing this armor."
  },
  {name: "Ring Mail +2",cost: 11667,type: "Armor",rarity: "Very Rare",description: "Leather armor with heavy rings sewn into it. Heavy armor, AC 14, disadvantage on Stealth. You have a +2 bonus to AC while wearing this armor."
  },
  {name: "Ring Mail +3",cost: 34930,type: "Armor",rarity: "Legendary",description: "Leather armor with heavy rings sewn into it. Heavy armor, AC 14, disadvantage on Stealth. You have a +3 bonus to AC while wearing this armor."
  },
  {name: "Chain Mail +1",cost: 2235,type: "Armor",rarity: "Rare",description: "Interlocking metal rings covering the entire body. Heavy armor, AC 16, requires Str 13, disadvantage on Stealth. You have a +1 bonus to AC while wearing this armor."
  },
  {name: "Chain Mail +2",cost: 11712,type: "Armor",rarity: "Very Rare",description: "Interlocking metal rings covering the entire body. Heavy armor, AC 16, requires Str 13, disadvantage on Stealth. You have a +2 bonus to AC while wearing this armor."
  },
  {name: "Chain Mail +3",cost: 34975,type: "Armor",rarity: "Legendary",description: "Interlocking metal rings covering the entire body. Heavy armor, AC 16, requires Str 13, disadvantage on Stealth. You have a +3 bonus to AC while wearing this armor."
  },
  {name: "Splint Armor +1",cost: 2360,type: "Armor",rarity: "Rare",description: "Narrow vertical metal strips riveted to a backing. Heavy armor, AC 17, requires Str 15, disadvantage on Stealth. You have a +1 bonus to AC while wearing this armor."
  },
  {name: "Splint Armor +2",cost: 11837,type: "Armor",rarity: "Very Rare",description: "Narrow vertical metal strips riveted to a backing. Heavy armor, AC 17, requires Str 15, disadvantage on Stealth. You have a +2 bonus to AC while wearing this armor."
  },
  {name: "Splint Armor +3",cost: 35100,type: "Armor",rarity: "Legendary",description: "Narrow vertical metal strips riveted to a backing. Heavy armor, AC 17, requires Str 15, disadvantage on Stealth. You have a +3 bonus to AC while wearing this armor."
  },
  {name: "Plate Armor +1",cost: 3660,type: "Armor",rarity: "Rare",description: "Interlocking metal plates covering the entire body. Heavy armor, AC 18, requires Str 15, disadvantage on Stealth. You have a +1 bonus to AC while wearing this armor."
  },
  {name: "Plate Armor +2",cost: 13137,type: "Armor",rarity: "Very Rare",description: "Interlocking metal plates covering the entire body. Heavy armor, AC 18, requires Str 15, disadvantage on Stealth. You have a +2 bonus to AC while wearing this armor."
  },
  {name: "Plate Armor +3",cost: 36400,type: "Armor",rarity: "Legendary",description: "Interlocking metal plates covering the entire body. Heavy armor, AC 18, requires Str 15, disadvantage on Stealth. You have a +3 bonus to AC while wearing this armor."
  },
    {
    name: "Club +1",
    cost: 2160.1,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A simple wooden club, often fashioned from a sturdy branch. Deals 1d4 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Club +2",
    cost: 11637.1,
    type: "Weapon",
    rarity: "Rare",
    description: "A simple wooden club, often fashioned from a sturdy branch. Deals 1d4 bludgeoning damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Club +3",
    cost: 34900.1,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A simple wooden club, often fashioned from a sturdy branch. Deals 1d4 bludgeoning damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Dagger +1",
    cost: 2162,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A short blade used for close combat or throwing. Light and finesse weapon dealing 1d4 piercing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Dagger +2",
    cost: 11639,
    type: "Weapon",
    rarity: "Rare",
    description: "A short blade used for close combat or throwing. Light and finesse weapon dealing 1d4 piercing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Dagger +3",
    cost: 34902,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A short blade used for close combat or throwing. Light and finesse weapon dealing 1d4 piercing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Greatclub +1",
    cost: 2160.2,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A larger, heavier version of a club. Two-handed weapon dealing 1d8 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Greatclub +2",
    cost: 11637.2,
    type: "Weapon",
    rarity: "Rare",
    description: "A larger, heavier version of a club. Two-handed weapon dealing 1d8 bludgeoning damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Greatclub +3",
    cost: 34900.2,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A larger, heavier version of a club. Two-handed weapon dealing 1d8 bludgeoning damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Handaxe +1",
    cost: 2165,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A small axe designed for one-handed use or throwing. Deals 1d6 slashing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Handaxe +2",
    cost: 11642,
    type: "Weapon",
    rarity: "Rare",
    description: "A small axe designed for one-handed use or throwing. Deals 1d6 slashing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Handaxe +3",
    cost: 34905,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A small axe designed for one-handed use or throwing. Deals 1d6 slashing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Longsword +1",
    cost: 2175,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A classic balanced blade. Versatile weapon dealing 1d8 (1d10 two-handed) slashing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Longsword +2",
    cost: 11652,
    type: "Weapon",
    rarity: "Rare",
    description: "A classic balanced blade. Versatile weapon dealing 1d8 (1d10 two-handed) slashing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Longsword +3",
    cost: 34915,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A classic balanced blade. Versatile weapon dealing 1d8 (1d10 two-handed) slashing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Greatsword +1",
    cost: 2210,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A large two-handed sword. Heavy weapon dealing 2d6 slashing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Greatsword +2",
    cost: 11687,
    type: "Weapon",
    rarity: "Rare",
    description: "A large two-handed sword. Heavy weapon dealing 2d6 slashing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Greatsword +3",
    cost: 34950,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A large two-handed sword. Heavy weapon dealing 2d6 slashing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Rapier +1",
    cost: 2185,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A slender, sharply pointed sword. Finesse weapon dealing 1d8 piercing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Rapier +2",
    cost: 11662,
    type: "Weapon",
    rarity: "Rare",
    description: "A slender, sharply pointed sword. Finesse weapon dealing 1d8 piercing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Rapier +3",
    cost: 34925,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A slender, sharply pointed sword. Finesse weapon dealing 1d8 piercing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Longbow +1",
    cost: 2210,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A tall bow with exceptional range. Two-handed heavy weapon dealing 1d8 piercing damage. Range 150/600. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Longbow +2",
    cost: 11687,
    type: "Weapon",
    rarity: "Rare",
    description: "A tall bow with exceptional range. Two-handed heavy weapon dealing 1d8 piercing damage. Range 150/600. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Longbow +3",
    cost: 34950,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A tall bow with exceptional range. Two-handed heavy weapon dealing 1d8 piercing damage. Range 150/600. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },
   {
    name: "Mace +1",
    cost: 2165,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A blunt weapon with a heavy head on a solid shaft. Deals 1d6 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Mace +2",
    cost: 11642,
    type: "Weapon",
    rarity: "Rare",
    description: "A blunt weapon with a heavy head on a solid shaft. Deals 1d6 bludgeoning damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Mace +3",
    cost: 34905,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A blunt weapon with a heavy head on a solid shaft. Deals 1d6 bludgeoning damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Quarterstaff +1",
    cost: 2160.2,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A simple wooden staff. Versatile weapon dealing 1d6 (1d8 two-handed) bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Quarterstaff +2",
    cost: 11637.2,
    type: "Weapon",
    rarity: "Rare",
    description: "A simple wooden staff. Versatile weapon dealing 1d6 (1d8 two-handed) bludgeoning damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Quarterstaff +3",
    cost: 34900.2,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A simple wooden staff. Versatile weapon dealing 1d6 (1d8 two-handed) bludgeoning damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Sickle +1",
    cost: 2161,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A curved blade on a short handle, originally used for harvesting. Light weapon dealing 1d4 slashing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Sickle +2",
    cost: 11638,
    type: "Weapon",
    rarity: "Rare",
    description: "A curved blade on a short handle, originally used for harvesting. Light weapon dealing 1d4 slashing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Sickle +3",
    cost: 34901,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A curved blade on a short handle, originally used for harvesting. Light weapon dealing 1d4 slashing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Spear +1",
    cost: 2161,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A shaft with a pointed head. Versatile and throwable weapon dealing 1d6 (1d8 two-handed) piercing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Spear +2",
    cost: 11638,
    type: "Weapon",
    rarity: "Rare",
    description: "A shaft with a pointed head. Versatile and throwable weapon dealing 1d6 (1d8 two-handed) piercing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Spear +3",
    cost: 34901,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A shaft with a pointed head. Versatile and throwable weapon dealing 1d6 (1d8 two-handed) piercing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Flail +1",
    cost: 2170,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A spiked ball attached to a handle by a chain. Deals 1d8 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Flail +2",
    cost: 11647,
    type: "Weapon",
    rarity: "Rare",
    description: "A spiked ball attached to a handle by a chain. Deals 1d8 bludgeoning damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Flail +3",
    cost: 34910,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A spiked ball attached to a handle by a chain. Deals 1d8 bludgeoning damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Glaive +1",
    cost: 2180,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A blade mounted on a long pole. Two-handed weapon with reach dealing 1d10 slashing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Glaive +2",
    cost: 11657,
    type: "Weapon",
    rarity: "Rare",
    description: "A blade mounted on a long pole. Two-handed weapon with reach dealing 1d10 slashing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Glaive +3",
    cost: 34920,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A blade mounted on a long pole. Two-handed weapon with reach dealing 1d10 slashing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Greataxe +1",
    cost: 2190,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A massive double-bladed axe. Heavy two-handed weapon dealing 1d12 slashing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Greataxe +2",
    cost: 11667,
    type: "Weapon",
    rarity: "Rare",
    description: "A massive double-bladed axe. Heavy two-handed weapon dealing 1d12 slashing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Greataxe +3",
    cost: 34930,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A massive double-bladed axe. Heavy two-handed weapon dealing 1d12 slashing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Halberd +1",
    cost: 2180,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A combination of axe and spear mounted on a long pole. Two-handed weapon with reach dealing 1d10 slashing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Halberd +2",
    cost: 11657,
    type: "Weapon",
    rarity: "Rare",
    description: "A combination of axe and spear mounted on a long pole. Two-handed weapon with reach dealing 1d10 slashing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Halberd +3",
    cost: 34920,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A combination of axe and spear mounted on a long pole. Two-handed weapon with reach dealing 1d10 slashing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },
    {
    name: "Lance +1",
    cost: 2170,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A long spear designed for mounted combat. Reach weapon dealing 1d12 piercing damage, disadvantage when used against targets within 5 feet. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Lance +2",
    cost: 11647,
    type: "Weapon",
    rarity: "Rare",
    description: "A long spear designed for mounted combat. Reach weapon dealing 1d12 piercing damage, disadvantage when used against targets within 5 feet. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Lance +3",
    cost: 34910,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A long spear designed for mounted combat. Reach weapon dealing 1d12 piercing damage, disadvantage when used against targets within 5 feet. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Maul +1",
    cost: 2170,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A massive two-handed hammer. Heavy weapon dealing 2d6 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Maul +2",
    cost: 11647,
    type: "Weapon",
    rarity: "Rare",
    description: "A massive two-handed hammer. Heavy weapon dealing 2d6 bludgeoning damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Maul +3",
    cost: 34910,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A massive two-handed hammer. Heavy weapon dealing 2d6 bludgeoning damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Morningstar +1",
    cost: 2175,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A club with a spiked metal head. Deals 1d8 piercing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Morningstar +2",
    cost: 11652,
    type: "Weapon",
    rarity: "Rare",
    description: "A club with a spiked metal head. Deals 1d8 piercing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Morningstar +3",
    cost: 34915,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A club with a spiked metal head. Deals 1d8 piercing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Pike +1",
    cost: 2165,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A very long spear. Two-handed weapon with reach dealing 1d10 piercing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Pike +2",
    cost: 11642,
    type: "Weapon",
    rarity: "Rare",
    description: "A very long spear. Two-handed weapon with reach dealing 1d10 piercing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Pike +3",
    cost: 34905,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A very long spear. Two-handed weapon with reach dealing 1d10 piercing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Scimitar +1",
    cost: 2185,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A curved single-edged blade. Finesse and light weapon dealing 1d6 slashing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Scimitar +2",
    cost: 11662,
    type: "Weapon",
    rarity: "Rare",
    description: "A curved single-edged blade. Finesse and light weapon dealing 1d6 slashing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Scimitar +3",
    cost: 34925,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A curved single-edged blade. Finesse and light weapon dealing 1d6 slashing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Shortsword +1",
    cost: 2170,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A short blade ideal for quick strikes. Finesse and light weapon dealing 1d6 piercing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Shortsword +2",
    cost: 11647,
    type: "Weapon",
    rarity: "Rare",
    description: "A short blade ideal for quick strikes. Finesse and light weapon dealing 1d6 piercing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Shortsword +3",
    cost: 34910,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A short blade ideal for quick strikes. Finesse and light weapon dealing 1d6 piercing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Trident +1",
    cost: 2165,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A three-pronged spear. Versatile and throwable weapon dealing 1d6 (1d8 two-handed) piercing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Trident +2",
    cost: 11642,
    type: "Weapon",
    rarity: "Rare",
    description: "A three-pronged spear. Versatile and throwable weapon dealing 1d6 (1d8 two-handed) piercing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Trident +3",
    cost: 34905,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A three-pronged spear. Versatile and throwable weapon dealing 1d6 (1d8 two-handed) piercing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Warpick +1",
    cost: 2165,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A pick designed for piercing armor. Deals 1d8 piercing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Warpick +2",
    cost: 11642,
    type: "Weapon",
    rarity: "Rare",
    description: "A pick designed for piercing armor. Deals 1d8 piercing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Warpick +3",
    cost: 34905,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A pick designed for piercing armor. Deals 1d8 piercing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Warhammer +1",
    cost: 2175,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A hammer designed for battle. Versatile weapon dealing 1d8 (1d10 two-handed) bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Warhammer +2",
    cost: 11652,
    type: "Weapon",
    rarity: "Rare",
    description: "A hammer designed for battle. Versatile weapon dealing 1d8 (1d10 two-handed) bludgeoning damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Warhammer +3",
    cost: 34915,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A hammer designed for battle. Versatile weapon dealing 1d8 (1d10 two-handed) bludgeoning damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Whip +1",
    cost: 2162,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A flexible leather weapon. Finesse weapon with reach dealing 1d4 slashing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Whip +2",
    cost: 11639,
    type: "Weapon",
    rarity: "Rare",
    description: "A flexible leather weapon. Finesse weapon with reach dealing 1d4 slashing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Whip +3",
    cost: 34902,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A flexible leather weapon. Finesse weapon with reach dealing 1d4 slashing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Blowgun +1",
    cost: 2170,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A tube for propelling needles with your breath. Ranged weapon dealing 1 piercing damage. Range 25/100. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Blowgun +2",
    cost: 11647,
    type: "Weapon",
    rarity: "Rare",
    description: "A tube for propelling needles with your breath. Ranged weapon dealing 1 piercing damage. Range 25/100. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Blowgun +3",
    cost: 34910,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A tube for propelling needles with your breath. Ranged weapon dealing 1 piercing damage. Range 25/100. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Hand Crossbow +1",
    cost: 2235,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A miniature crossbow that fits in one hand. Light ranged weapon dealing 1d6 piercing damage. Range 30/120. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Hand Crossbow +2",
    cost: 11712,
    type: "Weapon",
    rarity: "Rare",
    description: "A miniature crossbow that fits in one hand. Light ranged weapon dealing 1d6 piercing damage. Range 30/120. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Hand Crossbow +3",
    cost: 34975,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A miniature crossbow that fits in one hand. Light ranged weapon dealing 1d6 piercing damage. Range 30/120. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Light Crossbow +1",
    cost: 2185,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A small crossbow that can be fired with one hand. Ranged weapon dealing 1d8 piercing damage. Range 80/320. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Light Crossbow +2",
    cost: 11662,
    type: "Weapon",
    rarity: "Rare",
    description: "A small crossbow that can be fired with one hand. Ranged weapon dealing 1d8 piercing damage. Range 80/320. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Light Crossbow +3",
    cost: 34925,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A small crossbow that can be fired with one hand. Ranged weapon dealing 1d8 piercing damage. Range 80/320. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Heavy Crossbow +1",
    cost: 2210,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A powerful crossbow requiring two hands. Heavy ranged weapon dealing 1d10 piercing damage. Range 100/400. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Heavy Crossbow +2",
    cost: 11687,
    type: "Weapon",
    rarity: "Rare",
    description: "A powerful crossbow requiring two hands. Heavy ranged weapon dealing 1d10 piercing damage. Range 100/400. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Heavy Crossbow +3",
    cost: 34950,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A powerful crossbow requiring two hands. Heavy ranged weapon dealing 1d10 piercing damage. Range 100/400. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Shortbow +1",
    cost: 2185,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A compact bow for ranged attacks. Two-handed weapon dealing 1d6 piercing damage. Range 80/320. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Shortbow +2",
    cost: 11662,
    type: "Weapon",
    rarity: "Rare",
    description: "A compact bow for ranged attacks. Two-handed weapon dealing 1d6 piercing damage. Range 80/320. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Shortbow +3",
    cost: 34925,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A compact bow for ranged attacks. Two-handed weapon dealing 1d6 piercing damage. Range 80/320. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Sling +1",
    cost: 2160,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A strap used to hurl stones or bullets. Ranged weapon dealing 1d4 bludgeoning damage. Range 30/120. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Sling +2",
    cost: 11637,
    type: "Weapon",
    rarity: "Rare",
    description: "A strap used to hurl stones or bullets. Ranged weapon dealing 1d4 bludgeoning damage. Range 30/120. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Sling +3",
    cost: 34900,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A strap used to hurl stones or bullets. Ranged weapon dealing 1d4 bludgeoning damage. Range 30/120. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Dart +1",
    cost: 2161,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A small throwing projectile. Finesse ranged weapon dealing 1d4 piercing damage. Range 20/60. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Dart +2",
    cost: 11638,
    type: "Weapon",
    rarity: "Rare",
    description: "A small throwing projectile. Finesse ranged weapon dealing 1d4 piercing damage. Range 20/60. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Dart +3",
    cost: 34901,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A small throwing projectile. Finesse ranged weapon dealing 1d4 piercing damage. Range 20/60. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },

  {
    name: "Net +1",
    cost: 2161,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A weighted net for restraining enemies. No damage; on a hit the target is restrained. Range 5/15. You gain a +1 bonus to attack rolls made with this weapon."
  },
  {
    name: "Net +2",
    cost: 11638,
    type: "Weapon",
    rarity: "Rare",
    description: "A weighted net for restraining enemies. No damage; on a hit the target is restrained. Range 5/15. You gain a +2 bonus to attack rolls made with this weapon."
  },
  {
    name: "Net +3",
    cost: 34901,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A weighted net for restraining enemies. No damage; on a hit the target is restrained. Range 5/15. You gain a +3 bonus to attack rolls made with this weapon."
  },

  {
    name: "Javelin +1",
    cost: 2161,
    type: "Weapon",
    rarity: "Uncommon",
    description: "A light spear designed for throwing. Can be used as melee or ranged weapon dealing 1d6 piercing damage. You gain a +1 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Javelin +2",
    cost: 11638,
    type: "Weapon",
    rarity: "Rare",
    description: "A light spear designed for throwing. Can be used as melee or ranged weapon dealing 1d6 piercing damage. You gain a +2 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Javelin +3",
    cost: 34901,
    type: "Weapon",
    rarity: "Very Rare",
    description: "A light spear designed for throwing. Can be used as melee or ranged weapon dealing 1d6 piercing damage. You gain a +3 bonus to attack and damage rolls made with this weapon."
  },
  {
    name: "Arrows (20) +1",
    cost: 43,
    type: "Ammunition",
    rarity: "Uncommon",
    description: "A bundle of arrows for use with bows. Standard ammunition. Magically enhanced ammunition. Grants +1 bonus to attack and damage rolls."
  },
  {
    name: "Arrows (20) +2",
    cost: 162,
    type: "Ammunition",
    rarity: "Rare",
    description: "A bundle of arrows for use with bows. Standard ammunition. Powerfully enchanted ammunition. Grants +2 bonus to attack and damage rolls."
  },
  {
    name: "Arrows (20) +3",
    cost: 1100,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "A bundle of arrows for use with bows. Standard ammunition. Masterfully enchanted ammunition. Grants +3 bonus to attack and damage rolls."
  },

  {
    name: "Crossbow Bolts (20) +1",
    cost: 43,
    type: "Ammunition",
    rarity: "Uncommon",
    description: "A bundle of bolts for crossbows. Standard ammunition. Magically enhanced ammunition. Grants +1 bonus to attack and damage rolls."
  },
  {
    name: "Crossbow Bolts (20) +2",
    cost: 162,
    type: "Ammunition",
    rarity: "Rare",
    description: "A bundle of bolts for crossbows. Standard ammunition. Powerfully enchanted ammunition. Grants +2 bonus to attack and damage rolls."
  },
  {
    name: "Crossbow Bolts (20) +3",
    cost: 1100,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "A bundle of bolts for crossbows. Standard ammunition. Masterfully enchanted ammunition. Grants +3 bonus to attack and damage rolls."
  },

  {
    name: "Sling Bullets (20) +1",
    cost: 43,
    type: "Ammunition",
    rarity: "Uncommon",
    description: "A pouch of smooth stones or lead bullets for slings. Pack of 20 bullets. Magically enhanced ammunition. Grants +1 bonus to attack and damage rolls."
  },
  {
    name: "Sling Bullets (20) +2",
    cost: 162,
    type: "Ammunition",
    rarity: "Rare",
    description: "A pouch of smooth stones or lead bullets for slings. Pack of 20 bullets. Powerfully enchanted ammunition. Grants +2 bonus to attack and damage rolls."
  },
  {
    name: "Sling Bullets (20) +3",
    cost: 1100,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "A pouch of smooth stones or lead bullets for slings. Pack of 20 bullets. Masterfully enchanted ammunition. Grants +3 bonus to attack and damage rolls."
  },

  {
    name: "Blowgun Needles (50) +1",
    cost: 43,
    type: "Ammunition",
    rarity: "Uncommon",
    description: "Tiny needles for blowguns, often coated with poison. Pack of 50 needles. Magically enhanced ammunition. Grants +1 bonus to attack and damage rolls."
  },
  {
    name: "Blowgun Needles (50) +2",
    cost: 162,
    type: "Ammunition",
    rarity: "Rare",
    description: "Tiny needles for blowguns, often coated with poison. Pack of 50 needles. Powerfully enchanted ammunition. Grants +2 bonus to attack and damage rolls."
  },
  {
    name: "Blowgun Needles (50) +3",
    cost: 1100,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "Tiny needles for blowguns, often coated with poison. Pack of 50 needles. Masterfully enchanted ammunition. Grants +3 bonus to attack and damage rolls."
  },
    {
    name: "Arrow of Aberration Slaying",
    cost: 750,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay aberrations. On a hit against an aberration, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Beast Slaying",
    cost: 550,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay beasts. On a hit against a beast, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Celestial Slaying",
    cost: 1200,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay celestials. On a hit against a celestial, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Construct Slaying",
    cost: 850,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay constructs. On a hit against a construct, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Dragon Slaying",
    cost: 2000,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay dragons. On a hit against a dragon, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Elemental Slaying",
    cost: 800,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay elementals. On a hit against an elemental, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Fey Slaying",
    cost: 700,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay fey. On a hit against a fey, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Fiend Slaying",
    cost: 1100,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay fiends. On a hit against a fiend, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Giant Slaying",
    cost: 900,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay giants. On a hit against a giant, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Humanoid Slaying",
    cost: 600,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay humanoids. On a hit against a humanoid, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Monstrosity Slaying",
    cost: 950,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay monstrosities. On a hit against a monstrosity, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Ooze Slaying",
    cost: 700,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay oozes. On a hit against an ooze, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Plant Slaying",
    cost: 650,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay plant creatures. On a hit against a plant, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {
    name: "Arrow of Undead Slaying",
    cost: 1000,
    type: "Ammunition",
    rarity: "Very Rare",
    description: "An arrow designed to slay undead. On a hit against an undead creature, the creature must make a DC 17 Constitution save or take an extra 6d10 piercing damage."
  },
  {name: "Armor of Invulnerability (Padded Armor)", cost: 42672, type: "Armor", rarity: "Legendary", description: "Quilted layers of cloth and batting. Light armor, AC 11 + Dex modifier, disadvantage on Stealth. You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Leather Armor)", cost: 42677, type: "Armor", rarity: "Legendary", description: "Chest protection made of tough, hardened leather. Light armor, AC 11 + Dex modifier. You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Studded Leather Armor)", cost: 42712, type: "Armor", rarity: "Legendary", description: "Leather reinforced with close-set rivets or spikes. Light armor, AC 12 + Dex modifier. You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Hide Armor)", cost: 42677, type: "Armor", rarity: "Legendary", description: "Crude armor made from thick furs and pelts. Medium armor, AC 12 + Dex modifier (max 2). You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Chain Shirt)", cost: 42717, type: "Armor", rarity: "Legendary", description: "A shirt made of interlocking metal rings. Medium armor, AC 13 + Dex modifier (max 2). You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Scale Mail)", cost: 42717, type: "Armor", rarity: "Legendary", description: "Overlapping pieces of metal affixed to a backing. Medium armor, AC 14 + Dex modifier (max 2), disadvantage on Stealth. You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Spiked Armor)", cost: 42742, type: "Armor", rarity: "Legendary", description: "Leather armor with metal spikes. Medium armor, AC 14 + Dex modifier (max 2), deals 1d4 piercing damage to grapplers. Disadvantage on Stealth. You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Breastplate)", cost: 43067, type: "Armor", rarity: "Legendary", description: "Fitted metal chest plate worn over flexible leather. Medium armor, AC 14 + Dex modifier (max 2). You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Halfplate)", cost: 43417, type: "Armor", rarity: "Legendary", description: "Plate armor covering most of the body. Medium armor, AC 15 + Dex modifier (max 2), disadvantage on Stealth. You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Ring Mail)", cost: 42697, type: "Armor", rarity: "Legendary", description: "Leather armor with heavy rings sewn into it. Heavy armor, AC 14, disadvantage on Stealth. You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Chain Mail)", cost: 42742, type: "Armor", rarity: "Legendary", description: "Interlocking metal rings covering the entire body. Heavy armor, AC 16, requires Str 13, disadvantage on Stealth. You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Splint)", cost: 42867, type: "Armor", rarity: "Legendary", description: "Narrow vertical metal strips riveted to a backing. Heavy armor, AC 17, requires Str 15, disadvantage on Stealth. You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},
  {name: "Armor of Invulnerability (Plate)", cost: 44167, type: "Armor", rarity: "Legendary", description: "Interlocking metal plates covering the entire body. Heavy armor, AC 18, requires Str 15, disadvantage on Stealth. You can use an action to become immune to nonmagical damage for 10 minutes. Once used, this property can't be used again until the next dawn."},

  {name: "Armor of Resistance (Padded Armor)", cost: 4205, type: "Armor", rarity: "Rare", description: "Quilted layers of cloth and batting. Light armor, AC 11 + Dex modifier, disadvantage on Stealth. You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Leather Armor)", cost: 4210, type: "Armor", rarity: "Rare", description: "Chest protection made of tough, hardened leather. Light armor, AC 11 + Dex modifier. You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Studded Leather Armor)", cost: 4245, type: "Armor", rarity: "Rare", description: "Leather reinforced with close-set rivets or spikes. Light armor, AC 12 + Dex modifier. You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Hide Armor)", cost: 4210, type: "Armor", rarity: "Rare", description: "Crude armor made from thick furs and pelts. Medium armor, AC 12 + Dex modifier (max 2). You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Chain Shirt)", cost: 4250, type: "Armor", rarity: "Rare", description: "A shirt made of interlocking metal rings. Medium armor, AC 13 + Dex modifier (max 2). You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Scale Mail)", cost: 4250, type: "Armor", rarity: "Rare", description: "Overlapping pieces of metal affixed to a backing. Medium armor, AC 14 + Dex modifier (max 2), disadvantage on Stealth. You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Spiked Armor)", cost: 4275, type: "Armor", rarity: "Rare", description: "Leather armor with metal spikes. Medium armor, AC 14 + Dex modifier (max 2), deals 1d4 piercing damage to grapplers. Disadvantage on Stealth. You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Breastplate)", cost: 4600, type: "Armor", rarity: "Rare", description: "Fitted metal chest plate worn over flexible leather. Medium armor, AC 14 + Dex modifier (max 2). You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Halfplate)", cost: 4950, type: "Armor", rarity: "Rare", description: "Plate armor covering most of the body. Medium armor, AC 15 + Dex modifier (max 2), disadvantage on Stealth. You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Ring Mail)", cost: 4230, type: "Armor", rarity: "Rare", description: "Leather armor with heavy rings sewn into it. Heavy armor, AC 14, disadvantage on Stealth. You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Chain Mail)", cost: 4275, type: "Armor", rarity: "Rare", description: "Interlocking metal rings covering the entire body. Heavy armor, AC 16, requires Str 13, disadvantage on Stealth. You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Splint)", cost: 4400, type: "Armor", rarity: "Rare", description: "Narrow vertical metal strips riveted to a backing. Heavy armor, AC 17, requires Str 15, disadvantage on Stealth. You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},
  {name: "Armor of Resistance (Plate)", cost: 5700, type: "Armor", rarity: "Rare", description: "Interlocking metal plates covering the entire body. Heavy armor, AC 18, requires Str 15, disadvantage on Stealth. You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly."},

  {name: "Armor of Gleaming (Padded Armor)", cost: 335, type: "Armor", rarity: "Common", description: "Quilted layers of cloth and batting. Light armor, AC 11 + Dex modifier, disadvantage on Stealth. This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Leather Armor)", cost: 340, type: "Armor", rarity: "Common", description: "Chest protection made of tough, hardened leather. Light armor, AC 11 + Dex modifier. This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Studded Leather Armor)", cost: 375, type: "Armor", rarity: "Common", description: "Leather reinforced with close-set rivets or spikes. Light armor, AC 12 + Dex modifier. This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Hide Armor)", cost: 340, type: "Armor", rarity: "Common", description: "Crude armor made from thick furs and pelts. Medium armor, AC 12 + Dex modifier (max 2). This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Chain Shirt)", cost: 380, type: "Armor", rarity: "Common", description: "A shirt made of interlocking metal rings. Medium armor, AC 13 + Dex modifier (max 2). This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Scale Mail)", cost: 380, type: "Armor", rarity: "Common", description: "Overlapping pieces of metal affixed to a backing. Medium armor, AC 14 + Dex modifier (max 2), disadvantage on Stealth. This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Spiked Armor)", cost: 405, type: "Armor", rarity: "Common", description: "Leather armor with metal spikes. Medium armor, AC 14 + Dex modifier (max 2), deals 1d4 piercing damage to grapplers. Disadvantage on Stealth. This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Breastplate)", cost: 730, type: "Armor", rarity: "Common", description: "Fitted metal chest plate worn over flexible leather. Medium armor, AC 14 + Dex modifier (max 2). This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Halfplate)", cost: 1080, type: "Armor", rarity: "Common", description: "Plate armor covering most of the body. Medium armor, AC 15 + Dex modifier (max 2), disadvantage on Stealth. This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Ring Mail)", cost: 360, type: "Armor", rarity: "Common", description: "Leather armor with heavy rings sewn into it. Heavy armor, AC 14, disadvantage on Stealth. This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Chain Mail)", cost: 405, type: "Armor", rarity: "Common", description: "Interlocking metal rings covering the entire body. Heavy armor, AC 16, requires Str 13, disadvantage on Stealth. This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Splint)", cost: 530, type: "Armor", rarity: "Common", description: "Narrow vertical metal strips riveted to a backing. Heavy armor, AC 17, requires Str 15, disadvantage on Stealth. This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},
  {name: "Armor of Gleaming (Plate)", cost: 1830, type: "Armor", rarity: "Common", description: "Interlocking metal plates covering the entire body. Heavy armor, AC 18, requires Str 15, disadvantage on Stealth. This armor never gets dirty. Standard armor that magically cleans itself and always appears polished and well-maintained. Cosmetic but useful for maintaining appearance."},

  {name: "Cast-Off Armor (Padded Armor)", cost: 335, type: "Armor", rarity: "Common", description: "Quilted layers of cloth and batting. Light armor, AC 11 + Dex modifier, disadvantage on Stealth. You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Leather Armor)", cost: 340, type: "Armor", rarity: "Common", description: "Chest protection made of tough, hardened leather. Light armor, AC 11 + Dex modifier. You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Studded Leather Armor)", cost: 375, type: "Armor", rarity: "Common", description: "Leather reinforced with close-set rivets or spikes. Light armor, AC 12 + Dex modifier. You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Hide Armor)", cost: 340, type: "Armor", rarity: "Common", description: "Crude armor made from thick furs and pelts. Medium armor, AC 12 + Dex modifier (max 2). You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Chain Shirt)", cost: 380, type: "Armor", rarity: "Common", description: "A shirt made of interlocking metal rings. Medium armor, AC 13 + Dex modifier (max 2). You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Scale Mail)", cost: 380, type: "Armor", rarity: "Common", description: "Overlapping pieces of metal affixed to a backing. Medium armor, AC 14 + Dex modifier (max 2), disadvantage on Stealth. You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Spiked Armor)", cost: 405, type: "Armor", rarity: "Common", description: "Leather armor with metal spikes. Medium armor, AC 14 + Dex modifier (max 2), deals 1d4 piercing damage to grapplers. Disadvantage on Stealth. You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Breastplate)", cost: 730, type: "Armor", rarity: "Common", description: "Fitted metal chest plate worn over flexible leather. Medium armor, AC 14 + Dex modifier (max 2). You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Halfplate)", cost: 1080, type: "Armor", rarity: "Common", description: "Plate armor covering most of the body. Medium armor, AC 15 + Dex modifier (max 2), disadvantage on Stealth. You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Ring Mail)", cost: 360, type: "Armor", rarity: "Common", description: "Leather armor with heavy rings sewn into it. Heavy armor, AC 14, disadvantage on Stealth. You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Chain Mail)", cost: 405, type: "Armor", rarity: "Common", description: "Interlocking metal rings covering the entire body. Heavy armor, AC 16, requires Str 13, disadvantage on Stealth. You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Splint)", cost: 530, type: "Armor", rarity: "Common", description: "Narrow vertical metal strips riveted to a backing. Heavy armor, AC 17, requires Str 15, disadvantage on Stealth. You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},
  {name: "Cast-Off Armor (Plate)", cost: 1830, type: "Armor", rarity: "Common", description: "Interlocking metal plates covering the entire body. Heavy armor, AC 18, requires Str 15, disadvantage on Stealth. You can doff this armor as an action instead of taking several minutes. Standard armor with quick-release enchantment."},

  {name: "Smoldering Armor (Padded Armor)", cost: 335, type: "Armor", rarity: "Common", description: "Quilted layers of cloth and batting. Light armor, AC 11 + Dex modifier, disadvantage on Stealth. Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Leather Armor)", cost: 340, type: "Armor", rarity: "Common", description: "Chest protection made of tough, hardened leather. Light armor, AC 11 + Dex modifier. Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Studded Leather Armor)", cost: 375, type: "Armor", rarity: "Common", description: "Leather reinforced with close-set rivets or spikes. Light armor, AC 12 + Dex modifier. Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Hide Armor)", cost: 340, type: "Armor", rarity: "Common", description: "Crude armor made from thick furs and pelts. Medium armor, AC 12 + Dex modifier (max 2). Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Chain Shirt)", cost: 380, type: "Armor", rarity: "Common", description: "A shirt made of interlocking metal rings. Medium armor, AC 13 + Dex modifier (max 2). Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Scale Mail)", cost: 380, type: "Armor", rarity: "Common", description: "Overlapping pieces of metal affixed to a backing. Medium armor, AC 14 + Dex modifier (max 2), disadvantage on Stealth. Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Spiked Armor)", cost: 405, type: "Armor", rarity: "Common", description: "Leather armor with metal spikes. Medium armor, AC 14 + Dex modifier (max 2), deals 1d4 piercing damage to grapplers. Disadvantage on Stealth. Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Breastplate)", cost: 730, type: "Armor", rarity: "Common", description: "Fitted metal chest plate worn over flexible leather. Medium armor, AC 14 + Dex modifier (max 2). Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Halfplate)", cost: 1080, type: "Armor", rarity: "Common", description: "Plate armor covering most of the body. Medium armor, AC 15 + Dex modifier (max 2), disadvantage on Stealth. Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Ring Mail)", cost: 360, type: "Armor", rarity: "Common", description: "Leather armor with heavy rings sewn into it. Heavy armor, AC 14, disadvantage on Stealth. Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Chain Mail)", cost: 405, type: "Armor", rarity: "Common", description: "Interlocking metal rings covering the entire body. Heavy armor, AC 16, requires Str 13, disadvantage on Stealth. Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Splint)", cost: 530, type: "Armor", rarity: "Common", description: "Narrow vertical metal strips riveted to a backing. Heavy armor, AC 17, requires Str 15, disadvantage on Stealth. Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
  {name: "Smoldering Armor (Plate)", cost: 1830, type: "Armor", rarity: "Common", description: "Interlocking metal plates covering the entire body. Heavy armor, AC 18, requires Str 15, disadvantage on Stealth. Wisps of smoke rise from this armor while it's worn. The smoke is harmless and doesn't obscure vision. Purely cosmetic visual effect."},
   {name: "Flame Tongue (Longsword)", cost: 4017, type: "Weapon", rarity: "Rare", description: "A classic balanced blade. Versatile weapon dealing 1d8 (1d10 two-handed) slashing damage. A sword that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  {name: "Flame Tongue (Shortsword)", cost: 3927, type: "Weapon", rarity: "Rare", description: "A short blade ideal for quick strikes. Finesse and light weapon dealing 1d6 piercing damage. A sword that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  {name: "Flame Tongue (Greatsword)", cost: 19362, type: "Weapon", rarity: "Rare", description: "A large two-handed sword. Heavy weapon dealing 2d6 slashing damage. A sword that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  {name: "Flame Tongue (Rapier)", cost: 3892, type: "Weapon", rarity: "Rare", description: "A slender, sharply pointed sword. Finesse weapon dealing 1d8 piercing damage. A sword that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  {name: "Flame Tongue (Scimitar)", cost: 3892, type: "Weapon", rarity: "Rare", description: "A curved single-edged blade. Finesse and light weapon dealing 1d6 slashing damage. A sword that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  
  {name: "Frost Brand (Longsword)", cost: 5231, type: "Weapon", rarity: "Very Rare", description: "A classic balanced blade. Versatile weapon dealing 1d8 (1d10 two-handed) slashing damage. A +3 sword in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
  {name: "Frost Brand (Shortsword)", cost: 5228, type: "Weapon", rarity: "Very Rare", description: "A short blade ideal for quick strikes. Finesse and light weapon dealing 1d6 piercing damage. A +3 sword in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
  {name: "Frost Brand (Greatsword)", cost: 15405, type: "Weapon", rarity: "Very Rare", description: "A large two-handed sword. Heavy weapon dealing 2d6 slashing damage. A +3 sword in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
  {name: "Frost Brand (Rapier)", cost: 5219, type: "Weapon", rarity: "Very Rare", description: "A slender, sharply pointed sword. Finesse weapon dealing 1d8 piercing damage. A +3 sword in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
  {name: "Frost Brand (Scimitar)", cost: 5219, type: "Weapon", rarity: "Very Rare", description: "A curved single-edged blade. Finesse and light weapon dealing 1d6 slashing damage. A +3 sword in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},

  {name: "Vicious Weapon (Club)", cost: 1633.1, type: "Weapon", rarity: "Rare", description: "A simple wooden club, often fashioned from a sturdy branch. Deals 1d4 bludgeoning damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Vicious Weapon (Dagger)", cost: 1635, type: "Weapon", rarity: "Rare", description: "A short blade used for close combat or throwing. Light and finesse weapon dealing 1d4 piercing damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Vicious Weapon (Greatclub)", cost: 1633.2, type: "Weapon", rarity: "Rare", description: "A larger, heavier version of a club. Two-handed weapon dealing 1d8 bludgeoning damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Vicious Weapon (Handaxe)", cost: 1643, type: "Weapon", rarity: "Rare", description: "A small axe designed for one-handed use or throwing. Deals 1d6 slashing damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Vicious Weapon (Javelin)", cost: 1640.5, type: "Weapon", rarity: "Rare", description: "A light spear designed for throwing. Can be used as both melee and ranged weapon, dealing 1d6 piercing damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Vicious Weapon (Light hammer)", cost: 1640, type: "Weapon", rarity: "Rare", description: "A small hammer that can be wielded or thrown. Light weapon dealing 1d4 bludgeoning damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Vicious Weapon (Mace)", cost: 1643, type: "Weapon", rarity: "Rare", description: "A blunt weapon with a heavy head on a solid shaft. Deals 1d6 bludgeoning damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Vicious Weapon (Quarterstaff)", cost: 1633.2, type: "Weapon", rarity: "Rare", description: "A simple wooden staff. Versatile weapon dealing 1d6 (1d8 two-handed) bludgeoning damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Vicious Weapon (Sickle)", cost: 1640, type: "Weapon", rarity: "Rare", description: "A curved blade on a short handle, originally used for harvesting. Light weapon dealing 1d4 slashing damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Vicious Weapon (Spear)", cost: 1640, type: "Weapon", rarity: "Rare", description: "A shaft with a pointed head. Versatile and can be thrown, dealing 1d6 (1d8 two-handed) piercing damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  
  {name: "Weapon of Warning (Club)", cost: 18534.1, type: "Weapon", rarity: "Uncommon", description: "A simple wooden club, often fashioned from a sturdy branch. Deals 1d4 bludgeoning damage. While this weapon is on your person, you and allies within 30 feet can't be surprised and the weapon awakens you if combat begins while you're sleeping. You all have advantage on Initiative rolls."},
  {name: "Weapon of Warning (Dagger)", cost: 18535, type: "Weapon", rarity: "Uncommon", description: "A short blade used for close combat or throwing. Light and finesse weapon dealing 1d4 piercing damage. While this weapon is on your person, you and allies within 30 feet can't be surprised and the weapon awakens you if combat begins while you're sleeping. You all have advantage on Initiative rolls."},
  {name: "Weapon of Warning (Greatclub)", cost: 18534.2, type: "Weapon", rarity: "Uncommon", description: "A larger, heavier version of a club. Two-handed weapon dealing 1d8 bludgeoning damage. While this weapon is on your person, you and allies within 30 feet can't be surprised and the weapon awakens you if combat begins while you're sleeping. You all have advantage on Initiative rolls."},
  {name: "Weapon of Warning (Handaxe)", cost: 18543, type: "Weapon", rarity: "Uncommon", description: "A small axe designed for one-handed use or throwing. Deals 1d6 slashing damage. While this weapon is on your person, you and allies within 30 feet can't be surprised and the weapon awakens you if combat begins while you're sleeping. You all have advantage on Initiative rolls."},
  {name: "Weapon of Warning (Javelin)", cost: 18540.5, type: "Weapon", rarity: "Uncommon", description: "A light spear designed for throwing. Can be used as both melee and ranged weapon, dealing 1d6 piercing damage. While this weapon is on your person, you and allies within 30 feet can't be surprised and the weapon awakens you if combat begins while you're sleeping. You all have advantage on Initiative rolls."},

  {name: "Moon-Touched Sword (Longsword)", cost: 675, type: "Weapon", rarity: "Common", description: "A classic balanced blade. Versatile weapon dealing 1d8 (1d10 two-handed) slashing damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},
  {name: "Moon-Touched Sword (Shortsword)", cost: 670, type: "Weapon", rarity: "Common", description: "A short blade ideal for quick strikes. Finesse and light weapon dealing 1d6 piercing damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},
  {name: "Moon-Touched Sword (Greatsword)", cost: 1710, type: "Weapon", rarity: "Common", description: "A large two-handed sword. Heavy weapon dealing 2d6 slashing damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},
  {name: "Moon-Touched Sword (Rapier)", cost: 685, type: "Weapon", rarity: "Common", description: "A slender, sharply pointed sword. Finesse weapon dealing 1d8 piercing damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},
  {name: "Moon-Touched Sword (Scimitar)", cost: 685, type: "Weapon", rarity: "Common", description: "A curved single-edged blade. Finesse and light weapon dealing 1d6 slashing damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},
 {name: "Flame Tongue Club", cost: 3867.1, type: "Weapon", rarity: "Rare", description: "A simple wooden club, often fashioned from a sturdy branch. Deals 1d4 bludgeoning damage. A club that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  {name: "Frost Brand Club", cost: 5214.1, type: "Weapon", rarity: "Very Rare", description: "A simple wooden club, often fashioned from a sturdy branch. Deals 1d4 bludgeoning damage. A +3 club in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
  {name: "Vicious Club", cost: 1633.1, type: "Weapon", rarity: "Rare", description: "A simple wooden club, often fashioned from a sturdy branch. Deals 1d4 bludgeoning damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Moon-Touched Club", cost: 660.1, type: "Weapon", rarity: "Common", description: "A simple wooden club, often fashioned from a sturdy branch. Deals 1d4 bludgeoning damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},

  {name: "Flame Tongue Dagger", cost: 3869, type: "Weapon", rarity: "Rare", description: "A short blade used for close combat or throwing. Light and finesse weapon dealing 1d4 piercing damage. A dagger that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  {name: "Frost Brand Dagger", cost: 5216, type: "Weapon", rarity: "Very Rare", description: "A short blade used for close combat or throwing. Light and finesse weapon dealing 1d4 piercing damage. A +3 dagger in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
  {name: "Vicious Dagger", cost: 1635, type: "Weapon", rarity: "Rare", description: "A short blade used for close combat or throwing. Light and finesse weapon dealing 1d4 piercing damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Moon-Touched Dagger", cost: 662, type: "Weapon", rarity: "Common", description: "A short blade used for close combat or throwing. Light and finesse weapon dealing 1d4 piercing damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},

  {name: "Flame Tongue Greatclub", cost: 3867.2, type: "Weapon", rarity: "Rare", description: "A larger, heavier version of a club. Two-handed weapon dealing 1d8 bludgeoning damage. A greatclub that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  {name: "Frost Brand Greatclub", cost: 5214.2, type: "Weapon", rarity: "Very Rare", description: "A larger, heavier version of a club. Two-handed weapon dealing 1d8 bludgeoning damage. A +3 greatclub in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
  {name: "Vicious Greatclub", cost: 1633.2, type: "Weapon", rarity: "Rare", description: "A larger, heavier version of a club. Two-handed weapon dealing 1d8 bludgeoning damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Moon-Touched Greatclub", cost: 660.2, type: "Weapon", rarity: "Common", description: "A larger, heavier version of a club. Two-handed weapon dealing 1d8 bludgeoning damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},

  {name: "Flame Tongue Handaxe", cost: 3872, type: "Weapon", rarity: "Rare", description: "A small axe designed for one-handed use or throwing. Deals 1d6 slashing damage. A handaxe that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  {name: "Frost Brand Handaxe", cost: 5219, type: "Weapon", rarity: "Very Rare", description: "A small axe designed for one-handed use or throwing. Deals 1d6 slashing damage. A +3 handaxe in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
  {name: "Vicious Handaxe", cost: 1636, type: "Weapon", rarity: "Rare", description: "A small axe designed for one-handed use or throwing. Deals 1d6 slashing damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Moon-Touched Handaxe", cost: 662, type: "Weapon", rarity: "Common", description: "A small axe designed for one-handed use or throwing. Deals 1d6 slashing damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},
  {name: "Flame Tongue Light Hammer", cost: 3869, type: "Weapon", rarity: "Rare", description: "A small hammer that can be wielded or thrown. Light weapon dealing 1d4 bludgeoning damage. A light hammer that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  {name: "Frost Brand Light Hammer", cost: 5216, type: "Weapon", rarity: "Very Rare", description: "A small hammer that can be wielded or thrown. Light weapon dealing 1d4 bludgeoning damage. A +3 light hammer in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
  {name: "Vicious Light Hammer", cost: 1635, type: "Weapon", rarity: "Rare", description: "A small hammer that can be wielded or thrown. Light weapon dealing 1d4 bludgeoning damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Light Hammer of Warning", cost: 18540.5, type: "Weapon", rarity: "Uncommon", description: "A small hammer that can be wielded or thrown. Light weapon dealing 1d4 bludgeoning damage. While this weapon is on your person, you and allies within 30 feet can't be surprised and the weapon awakens you if combat begins while you're sleeping. You all have advantage on Initiative rolls."},
  {name: "Moon-Touched Light Hammer", cost: 662, type: "Weapon", rarity: "Common", description: "A small hammer that can be wielded or thrown. Light weapon dealing 1d4 bludgeoning damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},

  {name: "Flame Tongue Mace", cost: 3872, type: "Weapon", rarity: "Rare", description: "A blunt weapon with a heavy head on a solid shaft. Deals 1d6 bludgeoning damage. A mace that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  {name: "Frost Brand Mace", cost: 5219, type: "Weapon", rarity: "Very Rare", description: "A blunt weapon with a heavy head on a solid shaft. Deals 1d6 bludgeoning damage. A +3 mace in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
  {name: "Vicious Mace", cost: 1638, type: "Weapon", rarity: "Rare", description: "A blunt weapon with a heavy head on a solid shaft. Deals 1d6 bludgeoning damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Mace of Warning", cost: 18540.5, type: "Weapon", rarity: "Uncommon", description: "A blunt weapon with a heavy head on a solid shaft. Deals 1d6 bludgeoning damage. While this weapon is on your person, you and allies within 30 feet can't be surprised and the weapon awakens you if combat begins while you're sleeping. You all have advantage on Initiative rolls."},
  {name: "Moon-Touched Mace", cost: 665, type: "Weapon", rarity: "Common", description: "A blunt weapon with a heavy head on a solid shaft. Deals 1d6 bludgeoning damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},

  {name: "Flame Tongue Quarterstaff", cost: 3867.2, type: "Weapon", rarity: "Rare", description: "A simple wooden staff. Versatile weapon dealing 1d6 (1d8 two-handed) bludgeoning damage. A quarterstaff that can ignite with flames as a bonus action, dealing an extra 2d6 fire damage on hits. The flames shed bright light in a 40-foot radius and dim light for another 40 feet."},
  {name: "Frost Brand Quarterstaff", cost: 5214.2, type: "Weapon", rarity: "Very Rare", description: "A simple wooden staff. Versatile weapon dealing 1d6 (1d8 two-handed) bludgeoning damage. A +3 quarterstaff in freezing temperatures (otherwise +1) that deals an extra 1d6 cold damage. Grants resistance to fire damage and extinguishes nonmagical flames within 30 feet."},
  {name: "Vicious Quarterstaff", cost: 1633.2, type: "Weapon", rarity: "Rare", description: "A simple wooden staff. Versatile weapon dealing 1d6 (1d8 two-handed) bludgeoning damage. When you roll a 20 on an attack roll with this weapon, the target takes an extra 7 damage of the weapon's type. Especially devastating on critical hits."},
  {name: "Quarterstaff of Warning", cost: 18540.2, type: "Weapon", rarity: "Uncommon", description: "A simple wooden staff. Versatile weapon dealing 1d6 (1d8 two-handed) bludgeoning damage. While this weapon is on your person, you and allies within 30 feet can't be surprised and the weapon awakens you if combat begins while you're sleeping. You all have advantage on Initiative rolls."},
  {name: "Moon-Touched Quarterstaff", cost: 660.2, type: "Weapon", rarity: "Common", description: "A simple wooden staff. Versatile weapon dealing 1d6 (1d8 two-handed) bludgeoning damage. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet. Otherwise functions as a normal sword."},
  {name: "Acid (Vial)", cost: 25, type: "Potion", rarity: "Mundane", description: "Thrown vial that deals 2d6 acid damage on a failed Dex save."},
{name: "Acid (Vial)", cost: 25, type: "Potion", rarity: "Common", description: "When you take the Attack action, you can replace one of your attacks with throwing a vial of Acid. Target one creature or object you can see within 20 feet of yourself. The target must succeed on a Dexterity saving throw (DC 8 plus your Dexterity modifier and Proficiency Bonus) or take 2d6 Acid damage."},
{name: "Alchemist's Fire", cost: 50, type: "Potion", rarity: "Common", description: "When you take the Attack action, you can replace one of your attacks with throwing a flask of Alchemist’s Fire. Target one creature or object you can see within 20 feet of yourself. The target must succeed on a Dexterity saving throw (DC 8 plus your Dexterity modifier and Proficiency Bonus) or take 1d4 Fire damage and start burning."},
{name: "Antitoxin", cost: 50, type: "Potion", rarity: "Common", description: "As a Bonus Action, you can drink a vial of Antitoxin to gain Advantage on saving throws to avoid or end the Poisoned condition for 1 hour."},
{name: "Arcane Focus", cost: 10, type: "Wand/Staff/Rod", rarity: "Mundane", description: "An Arcane Focus takes one of the forms in the Arcane Focuses table and is bejeweled or carved to channel arcane magic. A Sorcerer, Warlock, or Wizard can use such an item as a Spellcasting Focus."},
{name: "Backpack", cost: 2, type: "Misc", rarity: "Mundane", description: "A Backpack holds up to 30 pounds within 1 cubic foot. It can also serve as a saddlebag."},
{name: "Ball Bearings", cost: 1, type: "Misc", rarity: "Mundane", description: "As a Utilize action, you can spill Ball Bearings from their pouch. They spread to cover a level, 10-foot-square area within 10 feet of yourself. A creature that enters this area for the first time on a turn must succeed on a DC 10 Dexterity saving throw or have the Prone condition."},
{name: "Barrel", cost: 2, type: "Misc", rarity: "Mundane", description: "A Barrel holds up to 40 gallons of liquid or up to 4 cubic feet of dry goods."},
{name: "Basket", cost: 0.4, type: "Misc", rarity: "Mundane", description: "A Basket holds up to 40 pounds within 2 cubic feet."},
{name: "Bedroll", cost: 1, type: "Misc", rarity: "Mundane", description: "A Bedroll sleeps one Small or Medium creature. While in a Bedroll, you automatically succeed on saving throws against extreme cold."},
{name: "Bell", cost: 1, type: "Misc", rarity: "Mundane", description: "When rung as a Utilize action, a Bell produces a sound that can be heard up to 60 feet away."},
{name: "Blanket", cost: 0.5, type: "Misc", rarity: "Mundane", description: "While wrapped in a blanket, you have Advantage on saving throws against extreme cold."},
{name: "Block and Tackle", cost: 1, type: "Misc", rarity: "Mundane", description: "A Block and Tackle allows you to hoist up to four times the weight you can normally lift."},
{name: "Bright Fungal Cloak", cost: 25, type: "Apparel", rarity: "Common", description: "While wearing a Bright Fungal Cloak, you can take a Bonus Action to furl or unfurl it. When unfurled, it sheds Bright Light in a 5-foot radius and Dim Light for an additional 5 feet. One pound of fungus is sewn into the cloak and can be eaten as food."},
{name: "Book", cost: 25, type: "Book", rarity: "Mundane", description: "A Book contains fiction or nonfiction. If you consult an accurate nonfiction Book about its topic, you gain a +5 bonus to Intelligence (Arcana, History, Nature, or Religion) checks you make about that topic."},
{name: "Bottle, Glass", cost: 2, type: "Misc", rarity: "Mundane", description: "A Glass Bottle holds up to 1½ pints."},
{name: "Bucket", cost: 0.05, type: "Misc", rarity: "Mundane", description: "A Bucket holds up to half a cubic foot of contents."},
{name: "Burglar's Pack", cost: 16, type: "Misc", rarity: "Mundane", description: "A Burglar’s Pack contains a backpack, ball bearings, bell, candles, crowbar, lantern, oil, rations, rope, tinderbox, and waterskin."},
{name: "Caltrops", cost: 1, type: "Ammunition", rarity: "Mundane", description: "As a Utilize action, you can spread Caltrops to cover a 5-foot-square area. A creature entering the area must succeed on a DC 15 Dexterity saving throw or take 1 Piercing damage and have its Speed reduced to 0 until the start of its next turn."},
{name: "Candle", cost: 0.01, type: "Common", rarity: "Mundane", description: "For 1 hour, a lit Candle sheds Bright Light in a 5-foot radius and Dim Light for an additional 5 feet."},
{name: "Chain", cost: 5, type: "Misc", rarity: "Mundane", description: "As a Utilize action, you can wrap a Chain around a restrained creature with a successful DC 13 Strength (Athletics) check. Escaping or breaking the chain requires significant effort."},
{name: "Climber's Kit", cost: 25, type: "Misc", rarity: "Mundane", description: "A Climber’s Kit includes boot tips, gloves, pitons, and a harness. You can anchor yourself to prevent falling more than 25 feet."},
{name: "Clothes, Fine", cost: 15, type: "Apparel", rarity: "Mundane", description: "Fine Clothes are made of expensive fabrics and adorned with expertly crafted details. Some locations admit only those wearing them."},
{name: "Clothes, Traveler's", cost: 2, type: "Apparel", rarity: "Mundane", description: "Traveler’s Clothes are resilient garments designed for travel in various environments."},
{name: "Component Pouch", cost: 25, type: "Misc", rarity: "Mundane", description: "A Component Pouch is watertight and holds all free Material components for spellcasting."},
{name: "Crowbar", cost: 2, type: "Misc", rarity: "Mundane", description: "Using a Crowbar gives you Advantage on Strength checks where leverage can be applied."},
{name: "Devil Mask", cost: 25, type: "Apparel", rarity: "Common", description: "While wearing a Devil Mask, creatures have Disadvantage on checks to discern your identity or intentions."},
{name: "Druidic Focus", cost: 10, type: "Wand/Staff/Rod", rarity: "Common", description: "A Druidic Focus is a natural object used by Druids and Rangers as a spellcasting focus."},
{name: "Grappling Hook", cost: 5, type: "Misc", rarity: "Mundane", description: "You can throw the Grappling Hook to catch onto ledges or railings within 50 feet, allowing you to climb if attached to rope."},
{name: "Healer's Kit", cost: 5, type: "Potion", rarity: "Mundane", description: "A Healer’s Kit has ten uses. You can expend one use to stabilize an unconscious creature without a Medicine check."},
{name: "Holy Symbol", cost: 5, type: "Jewelry", rarity: "Mundane", description: "A Holy Symbol is a divine spellcasting focus for Clerics and Paladins."},
{name: "Holy Water", cost: 25, type: "Potion", rarity: "Common", description: "When thrown, Holy Water deals 2d8 Radiant damage to Fiends or Undead on a failed Dexterity save."},
{name: "Lantern, Hooded", cost: 5, type: "Common", rarity: "Mundane", description: "A Hooded Lantern burns oil to shed Bright Light in a 30-foot radius and Dim Light for an additional 30 feet, with adjustable shutter."},
{name: "Lock", cost: 10, type: "Misc", rarity: "Mundane", description: "A Lock comes with a key. Without it, the lock can be picked with thieves’ tools."},
{name: "Manacles", cost: 2, type: "Misc", rarity: "Mundane", description: "Manacles restrain Small or Medium creatures and include a key. Escaping requires significant effort."},
{name: "Net", cost: 1, type: "Weapon", rarity: "Mundane", description: "When thrown, a Net restrains a Medium or smaller creature until it escapes or the net is destroyed."},
{name: "Torch", cost: 0.01, type: "Common", rarity: "Mundane", description: "A Torch burns for 1 hour, shedding Bright Light in a 20-foot radius. It can be used as a simple melee weapon."},
{name: "Waterskin", cost: 0.2, type: "Misc", rarity: "Mundane", description: "A Waterskin holds up to 4 pints of liquid."},
{name: "Winter Camouflage", cost: 50, type: "Apparel", rarity: "Mundane", description: "While wearing Winter Camouflage in snowy terrain, you have Advantage on Dexterity (Stealth) checks."},

{name: "Crossbow Bolt Case", cost: 1, type: "Weapon", rarity: "Common", description: "Holds up to 20 crossbow bolts."},
{name: "Map or Scroll Case", cost: 1, type: "Book", rarity: "Common", description: "Protects and stores up to 10 paper sheets or 5 parchment scrolls."},
{name: "Chest", cost: 5, type: "Misc", rarity: "Common", description: "Large storage chest holding up to 12 cubic feet of gear."},
{name: "Diplomat's Pack", cost: 39, type: "Common", rarity: "Common", description: "A social-focused pack with fine clothes, writing supplies, oil, perfume, and a chest."},
{name: "Dungeoneer's Pack", cost: 12, type: "Common", rarity: "Common", description: "Adventuring essentials for dungeon exploration, including tools, food, torches, and rope."},
{name: "Entertainer's Pack", cost: 40, type: "Common", rarity: "Common", description: "Performance gear including costumes, lantern, rations, and personal items."},
{name: "Explorer's Pack", cost: 10, type: "Common", rarity: "Common", description: "Basic travel gear with rations, torches, rope, and survival essentials."},
{name: "Flask", cost: 0.02, type: "Potion", rarity: "Common", description: "Holds up to 1 pint of liquid."},
{name: "Hunting Trap", cost: 5, type: "Misc", rarity: "Common", description: "A chained steel trap that restrains and damages creatures that trigger it."},
{name: "Ink", cost: 10, type: "Book", rarity: "Common", description: "Ink bottle sufficient for roughly 500 pages of writing."},
{name: "Ink Pen", cost: 0.02, type: "Book", rarity: "Common", description: "Used with ink for writing or drawing."},
{name: "Jug", cost: 0.02, type: "Misc", rarity: "Common", description: "Holds up to 1 gallon of liquid."},
{name: "Ladder", cost: 0.1, type: "Common", rarity: "Common", description: "A 10-foot ladder for climbing."},
{name: "Lamp", cost: 0.5, type: "Common", rarity: "Common", description: "Oil-powered lamp providing bright and dim light."},
{name: "Bullseye Lantern", cost: 10, type: "Common", rarity: "Common", description: "Oil lantern that projects focused light in a long cone."},
{name: "Locking Spellbook", cost: 35, type: "Book", rarity: "Common", description: "A lockable 100-page spellbook secured with a key."},
{name: "Magnifying Glass", cost: 100, type: "Misc", rarity: "Common", description: "Grants advantage on detailed inspection and can start fires in sunlight."},
{name: "Map", cost: 1, type: "Book", rarity: "Common", description: "Grants a bonus to navigation checks in mapped areas."},
{name: "Mirror", cost: 5, type: "Misc", rarity: "Common", description: "Handheld steel mirror useful for signaling or scouting."},
{name: "Oil Flask", cost: 0.1, type: "Potion", rarity: "Common", description: "Used as fuel or weaponized to burn creatures or areas."},
{name: "Paper", cost: 0.2, type: "Book", rarity: "Common", description: "Single sheet suitable for about 250 handwritten words."},
{name: "Parchment", cost: 0.1, type: "Book", rarity: "Common", description: "Durable writing material holding about 250 words."},
{name: "Perfume", cost: 5, type: "Jewelry", rarity: "Common", description: "Grants advantage on Persuasion checks for 1 hour after application."},
{name: "Basic Poison", cost: 100, type: "Potion", rarity: "Common", description: "Coats weapons to deal extra poison damage for a short time."},
{name: "Pole", cost: 0.05, type: "Misc", rarity: "Common", description: "A 10-foot pole useful for vaulting or probing hazards."},
{name: "Iron Pot", cost: 2, type: "Misc", rarity: "Common", description: "Holds up to 1 gallon; commonly used for cooking."},
{name: "Potion of Healing", cost: 50, type: "Consumable", rarity: "Common", description: "Restores 2d4 + 2 hit points when consumed."},
{name: "Pouch", cost: 0.5, type: "Common", rarity: "Common", description: "Small pouch holding up to 6 pounds of items."},
{name: "Priest's Pack", cost: 33, type: "Common", rarity: "Common", description: "Religious travel gear including holy items, rations, and a lamp."},
{name: "Quiver", cost: 1, type: "Weapon", rarity: "Common", description: "Holds up to 20 arrows."},
{name: "Portable Ram", cost: 4, type: "Common", rarity: "Common", description: "Grants a bonus when forcing doors open."},
{name: "Rations", cost: 0.5, type: "Common", rarity: "Common", description: "Travel food sufficient for one day."},
{name: "Robe", cost: 1, type: "Apparel", rarity: "Common", description: "Ceremonial or professional garment."},
{name: "Rope", cost: 1, type: "Misc", rarity: "Common", description: "Strong rope useful for climbing, binding, or securing objects."},
{name: "Sack", cost: 0.01, type: "Misc", rarity: "Common", description: "Simple sack holding up to 30 pounds of items."},
{name: "Scholar's Pack", cost: 40, type: "Common", rarity: "Common", description: "Academic gear including books, writing supplies, and oil."},
{name: "Shovel", cost: 2, type: "Common", rarity: "Common", description: "Used to dig holes in soil over extended time."},
{name: "Signal Whistle", cost: 0.05, type: "Misc", rarity: "Common", description: "Produces a loud signal audible up to 600 feet."},
{name: "Iron Spikes", cost: 1, type: "Misc", rarity: "Common", description: "Ten metal spikes used to jam doors or anchor ropes."},
{name: "Spyglass", cost: 1000, type: "Misc", rarity: "Common", description: "Magnifies distant objects to twice their size."},
{name: "String", cost: 0.1, type: "Misc", rarity: "Common", description: "10 feet of string for tying or fastening small items."},
{name: "Tent", cost: 2, type: "Common", rarity: "Common", description: "Shelter that sleeps up to two creatures."},
{name: "Tinderbox", cost: 0.5, type: "Misc", rarity: "Common", description: "Used to easily start fires."},
{name: "Vial", cost: 1, type: "Potion", rarity: "Common", description: "Small container holding up to 4 ounces of liquid."}



		];
		
		const homebrewItemDatabase = [
  {
    "name": "Abdel's Trusted Shield",
    "cost": 15050,
    "type": "Shield",
    "rarity": "Very Rare",
    "description": "You gain a +1 bonus to AC while wielding this shield. Shield Bash. When you are hit by a melee attack while wielding this shield, you can use your reaction to force the attacker to make a DC 16 Dexterity saving throw. On a failed save, the attacker is knocked prone. The shield has 3 charges and regains 1d3 expended charges daily at dawn. You can expend 1 charge to cast protection from evil and good. This item requires attunement."
  },
  {
    "name": "Aberration Hunter's Amulet",
    "cost": 1560,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, you have advantage on attack rolls against aberrations, and aberrations have disadvantage on attack rolls against you. If you are a githyanki, you also have advantage on Intelligence saving throws while wearing this amulet. This item requires attunement."
  },
  {
    "name": "Absolute Confidence Amulet",
    "cost": 407,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, you gain a +1 bonus to Charisma (Performance) checks, but you have disadvantage on Charisma (Intimidation) checks."
  },
  {
    "name": "Abyss Beckoners",
    "cost": 4450,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "While wearing these gloves, creatures you summon have resistance to all damage except psychic. At the start of each of your summoned creature's turns, it must succeed on a DC 16 Wisdom saving throw or use its action to make one melee attack against a random creature within reach. If no creature is within reach, the summoned creature does nothing on that turn. This item requires attunement."
  },
  {
    "name": "Acrobat Shoes",
    "cost": 1310,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, you gain a +1 bonus to Dexterity (Acrobatics) checks and have advantage on Dexterity saving throws."
  },
  {
    "name": "After Death Do Us Part",
    "cost": 4030,
    "type": "Ring",
    "rarity": "Rare",
    "description": "This ring When you drop to 0 hit points while wearing this ring, you can use your reaction to expend the charge. If you do, you instead drop to half your hit point maximum (rounded down). On your next turn, you must use your action to make one melee weapon attack against the nearest creature. If no creature is within reach, you must move toward the nearest creature. This item requires attunement."
  },
  {
    "name": "Ambusher (Shortsword)",
    "cost": 1467,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. When you hit a creature that hasn't taken a turn in combat yet with this weapon, the target takes an extra 1d6 necrotic damage. You gain a +1 bonus to initiative rolls and have advantage on Wisdom (Perception) checks while you have this weapon on your person. This item requires attunement."
  },
  {
    "name": "Amulet of Bhaal",
    "cost": 25250,
    "type": "Amulet",
    "rarity": "Legendary",
    "description": "While wearing this amulet, creatures at their hit point maximum are vulnerable to your melee weapon attacks. This item requires attunement."
  },
  {
    "name": "Amulet of Greater Health",
    "cost": 48350,
    "type": "Amulet",
    "rarity": "Legendary",
    "description": "Your Constitution score is 23 while you wear this amulet. It has no effect if your Constitution is already 23 or higher. Additionally, you have advantage on Constitution saving throws. This item requires attunement."
  },
  {
    "name": "Amulet of Misty Step",
    "cost": 465,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "This amulet While wearing it, you can use an action to cast misty step. Once you use this property, you can\\'t use it again until the next dawn."
  },
  {
    "name": "Amulet of Restoration",
    "cost": 740,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "This amulet has 3 charges and regains 1d3 expended charges daily at dawn. While wearing the amulet, you can use an action to expend charges to cast one of the following spells: healing word (1 charge) or mass healing word (3 charges). This item requires attunement."
  },
  {
    "name": "Amulet of Silvanus",
    "cost": 465,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "This amulet While wearing it, you can use an action to cast lesser restoration. Once you use this property, you can\\'t use it again until the next dawn."
  },
  {
    "name": "Amulet of the Devout",
    "cost": 2650,
    "type": "Amulet",
    "rarity": "Very Rare",
    "description": "While wearing this amulet, your spell save DC increases by 2. Additionally, you gain one additional use of your Channel Divinity feature. Once you use this additional Channel Divinity, you can't do so again until you finish a long rest. This item requires attunement."
  },
  {
    "name": "Amulet of the Harpers",
    "cost": 3515,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "While wearing this amulet, you have advantage on Wisdom saving throws. The amulet has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast shield. This item requires attunement."
  },
  {
    "name": "Amulet of the Unworthy",
    "cost": 612,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, you have resistance to slashing damage and vulnerability to bludgeoning damage. This item requires attunement."
  },
  {
    "name": "Armor of Uninhibited Kushigo",
    "cost": 375,
    "type": "Clothing",
    "rarity": "Uncommon",
    "description": "While you have the Patient Defense feature active and are wearing this garment, when a creature misses you with an attack, you can use your reaction to make one unarmed strike against that creature. This item requires attunement."
  },
  {
    "name": "Assassin of Bhaal Cowl",
    "cost": 11980,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this hood, you have darkvision out to a range of 10 feet. If you already have darkvision, its range increases by 10 feet. You gain a +2 bonus to initiative rolls. The cowl has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast see invisibility. This item requires attunement."
  },
  {
    "name": "Assassin's Shortsword (Shortsword)",
    "cost": 697,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. While this weapon is on your person, you have advantage on Dexterity (Stealth) checks."
  },
  {
    "name": "Assassin's Touch (Dagger)",
    "cost": 728,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. When you hit a prone creature with this magic dagger, the target takes an extra 1d4 necrotic damage."
  },
  {
    "name": "Balduran's Giantslayer (Greatsword)",
    "cost": 39050,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 slashing damage. You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit with an attack using this sword, you add double your Strength modifier to the damage roll. You have advantage on attack rolls against Large, Huge, or Gargantuan creatures. The sword As a bonus action, you can gain the effect of the enlarge/reduce spell (enlarge only) for 1 minute. Once you use this property, you can\\'t use it again until the next dawn. This effect doesn't require concentration. This item requires attunement."
  },
  {
    "name": "Band of the Mystic Scoundrel",
    "cost": 575,
    "type": "Ring",
    "rarity": "Rare",
    "description": "While wearing this ring, when you hit a creature with a weapon attack, you can cast an illusion or enchantment spell of 1st level or higher as a bonus action on that turn. This item requires attunement."
  },
  {
    "name": "Beastmaster's Chain",
    "cost": 420,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "This amulet While wearing it, you can use an action to cast animal friendship (save DC 12). Once you use this property, you can\\'t use it again until the next dawn."
  },
  {
    "name": "Belm (Scimitar)",
    "cost": 3275,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 slashing damage. While wielding this weapon, you can make one additional melee weapon attack as a bonus action on each of your turns. This item requires attunement."
  },
  {
    "name": "Bigboy's Chew Toy (Quarterstaff)",
    "cost": 1375,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The quarterstaff you can use a bonus action to cast enlarge/reduce (enlarge only, targeting yourself). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Birthright",
    "cost": 7915,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this crown, your Charisma score increases by 2, to a maximum of 22. This item requires attunement."
  },
  {
    "name": "Blackguard's Gauntlets",
    "cost": 1235,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gauntlets, you gain a +1 bonus to Strength saving throws and a +1 bonus to attack rolls with melee weapons. The gauntlets you can use an action to cast inflict wounds. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Blackguard's Greaves",
    "cost": 635,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, you gain a +1 bonus to Strength (Athletics) checks. The boots you can use an action to cast longstrider. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Blackguard's Sword (Longsword)",
    "cost": 1840,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 slashing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with this sword while using Divine Smite or a similar smiting feature, the target must succeed on a DC 14 Constitution saving throw or be stunned until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Blazer of Benevolence",
    "cost": 384,
    "type": "Clothing",
    "rarity": "Uncommon",
    "description": "While wearing this jacket, when you grant a Bardic Inspiration die to a creature, that creature also gains 4 temporary hit points. This item requires attunement."
  },
  {
    "name": "Blightbringer (Shortbow)",
    "cost": 15512,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Simple ranged weapon with ammunition (range 80/320) and two-handed properties, dealing 1d6 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you attack a gnome or dwarf with this weapon, you gain an additional 1d4 bonus to both the attack and damage rolls. When you score a critical hit with this weapon, the target's walking speed is reduced by half until the start of your next turn. This item requires attunement."
  },
  {
    "name": "Blood-Bound Blade (Longsword)",
    "cost": 1390,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 slashing damage. This weapon only functions if you are an Eldritch Knight who has bonded with it using your Weapon Bond feature, or if it is your pact weapon as a warlock. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit with this weapon, you deal additional damage equal to your proficiency bonus. This item requires attunement."
  },
  {
    "name": "Blooded Greataxe (Greataxe)",
    "cost": 917,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 1d12 slashing damage. While you have half your hit points or fewer, this weapon deals an extra 1d4 slashing damage on a hit. This item requires attunement."
  },
  {
    "name": "Bloodthirst (Dagger)",
    "cost": 41752,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. The number you need to roll a critical hit with this weapon is reduced by 1 (this effect stacks with similar effects). When you hit a creature with this weapon, that creature becomes vulnerable to piercing damage until the start of your next turn. While dual wielding weapons (with this weapon as one of them), when a creature misses you with a melee attack, you can use your reaction to make one melee weapon attack with this dagger against that creature with advantage. You gain a +1 bonus to AC while wielding this dagger. This item requires attunement."
  },
  {
    "name": "Bonespike Boots",
    "cost": 8545,
    "type": "Boots",
    "rarity": "Very Rare",
    "description": "While wearing these boots and not wearing armor or wielding a shield, you gain a +1 bonus to AC and saving throws. Your jump distance increases by 5 feet. Brutal Leap. As a bonus action, you can leap at least 10 feet toward a creature. When you land, the target must succeed on a DC 16 Strength saving throw or be knocked prone. This item requires attunement."
  },
  {
    "name": "Bonespike Garb",
    "cost": 2691,
    "type": "Clothing",
    "rarity": "Very Rare",
    "description": "While wearing this garment, all damage you take is reduced by 2 (minimum of 1 damage). When you enter a rage while wearing this garment, you gain 2d8 temporary hit points. When a creature hits you with a melee attack while you're raging, the attacker takes 3 piercing damage. This item requires attunement."
  },
  {
    "name": "Bonespike Gloves",
    "cost": 2650,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "While wearing these gloves, your attacks ignore resistance to slashing, piercing, and bludgeoning damage. This item requires attunement."
  },
  {
    "name": "Bonespike Helmet",
    "cost": 9040,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this helm, you gain a +2 bonus to Charisma (Intimidation) checks. When you enter a rage, each creature of your choice within 10 feet of you must succeed on a DC 16 Wisdom saving throw or take 2d4 psychic damage. Creatures that succeed on the saving throw take half damage. The helmet has 3 charges and regains 1d3 expended charges daily at dawn. When you hit a creature with a weapon attack, you can expend 1 charge to force the target to make a DC 16 Wisdom saving throw. On a failed save, the target is frightened of you until the end of your next turn. If you expend a charge in this way, you add 1d8 to the attack's damage roll. This item requires attunement."
  },
  {
    "name": "Boots of Aid and Comfort",
    "cost": 382,
    "type": "Boots",
    "rarity": "Uncommon",
    "description": "While wearing these boots, when you cast a spell that restores hit points to a single creature, that creature gains 3 temporary hit points."
  },
  {
    "name": "Boots of Apparent Death",
    "cost": 350,
    "type": "Boots",
    "rarity": "Rare",
    "description": "These boots have 3 charges and regain 1d3 expended charges daily at dawn. While wearing them, you can use an action to expend 1 charge to cast feign death. This item requires attunement."
  },
  {
    "name": "Boots of Brilliance",
    "cost": 350,
    "type": "Boots",
    "rarity": "Rare",
    "description": "These boots While wearing these boots, you can use a bonus action to regain one expended use of your Bardic Inspiration. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Boots of Elemental Momentum",
    "cost": 2870,
    "type": "Boots",
    "rarity": "Uncommon",
    "description": "While wearing these boots, you gain a +1 bonus to Strength (Athletics) checks. Whenever you deal acid, cold, fire, lightning, or thunder damage with a spell or cantrip, your walking speed increases by 5 feet until the end of your next turn."
  },
  {
    "name": "Boots of Genial Striding",
    "cost": 462,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, difficult terrain doesn't cost you extra movement."
  },
  {
    "name": "Boots of Persistence",
    "cost": 15085,
    "type": "Boots",
    "rarity": "Very Rare",
    "description": "While wearing these boots, you gain a +1 bonus to Dexterity saving throws. Your walking speed increases by 10 feet, and difficult terrain doesn't cost you extra movement. Additionally, you ignore the effects of difficult terrain caused by magic, and you can't be restrained by magical means. This item requires attunement."
  },
  {
    "name": "Boots of Psionic Movement",
    "cost": 9482,
    "type": "Boots",
    "rarity": "Very Rare",
    "description": "While wearing these boots, you gain a +1 bonus to Dexterity saving throws. The boots have 3 charges and regain 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast fly. While flying, if you make a melee weapon attack, you deal an extra 1d4 psychic damage on your next hit before you land. This item requires attunement."
  },
  {
    "name": "Boots of Uninhibited Kushigo",
    "cost": 350,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, your unarmed strikes deal additional bludgeoning damage equal to your Wisdom modifier (minimum of 1). This item requires attunement."
  },
  {
    "name": "Boots of Very Fast Blinking",
    "cost": 375,
    "type": "Boots",
    "rarity": "Uncommon",
    "description": "These boots have 3 charges and regain 1d3 expended charges daily at dawn. While wearing these boots, you can use a bonus action to expend 1 charge to teleport up to 30 feet to an unoccupied space you can see. Your clothing and armor are left behind when you teleport in this way. This item requires attunement."
  },
  {
    "name": "Bow of Awareness (Shortbow)",
    "cost": 870,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple ranged weapon with ammunition (range 80/320) and two-handed properties, dealing 1d6 piercing damage. While this bow is on your person, you gain a +1 bonus to initiative rolls."
  },
  {
    "name": "Bow of the Banshee (Shortbow)",
    "cost": 1602,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple ranged weapon with ammunition (range 80/320) and two-handed properties, dealing 1d6 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. Against frightened creatures, you gain an additional 1d4 bonus to attack and damage rolls. When you hit a creature with this weapon, it must succeed on a DC 14 Wisdom saving throw or become frightened of you until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Bracing Band",
    "cost": 1090,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, when you shove a creature, you gain a +1 bonus to AC until the start of your next turn."
  },
  {
    "name": "Braindrain Gloves",
    "cost": 350,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, when you deal psychic damage to a creature, it must succeed on a DC 14 Intelligence saving throw or suffer a 1d4 penalty to all ability checks, saving throws, and attack rolls until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Breaching Pikestaff (Pike)",
    "cost": 755,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 piercing damage. This magic pike is well-crafted but has no additional magical properties beyond being a magic weapon for purposes of overcoming resistance. This item requires attunement."
  },
  {
    "name": "Broodmother's Revenge",
    "cost": 419,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, when you regain hit points, your weapon attacks deal an extra 1d4 poison damage for the next 3 rounds. This item requires attunement."
  },
  {
    "name": "Browbeaten Circlet",
    "cost": 375,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this circlet, when you are within 5 feet of a hostile creature, your spell save DC increases by 1. This item requires attunement."
  },
  {
    "name": "Burnished Ring",
    "cost": 4540,
    "type": "Ring",
    "rarity": "Very Rare",
    "description": "This ring While wearing this ring, you can use an action to target one creature you can see within 60 feet. Once you use this property, you can\\'t use it again until the next dawn. The target must succeed on a DC 16 Constitution saving throw or be paralyzed until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Cacophony (Quarterstaff)",
    "cost": 4557,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The quarterstaff has 3 charges and regains 1d3 expended charges daily at dawn. You can use a bonus action to expend 1 charge. The next time you hit with a melee weapon attack during this turn, your attack deals an extra 2d6 thunder damage, and the target must succeed on a DC 14 Strength saving throw or be pushed 10 feet away from you. This item requires attunement."
  },
  {
    "name": "Callous Glow Ring",
    "cost": 390,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, your weapon attacks deal an extra 2 radiant damage to creatures standing in bright light."
  },
  {
    "name": "Cap of Curing",
    "cost": 391,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this cap, when you grant a Bardic Inspiration die to a creature, that creature also regains 1d6 hit points. This item requires attunement."
  },
  {
    "name": "Cap of Wrath",
    "cost": 875,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this cap, if you start your turn with half your hit points or fewer, you gain a +1 bonus to attack rolls until the start of your next turn. This item requires attunement."
  },
  {
    "name": "Caustic Band",
    "cost": 390,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, your weapon attacks deal an extra 2 acid damage."
  },
  {
    "name": "Champion's Chain",
    "cost": 800,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "This amulet While wearing this amulet, you can use a bonus action to touch one willing creature. Once you use this property, you can\\'t use it again until the next dawn. For the next hour, that creature gains a +2 bonus to Charisma (Intimidation) checks. This item requires attunement."
  },
  {
    "name": "Charge-Bound Warhammer (Warhammer)",
    "cost": 1537,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 bludgeoning damage. This weapon only functions if you are an Eldritch Knight who has bonded with it using your Weapon Bond feature, or if it is your pact weapon as a warlock. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit with this weapon, you deal an extra 1d6 lightning damage. This item requires attunement."
  },
  {
    "name": "Cindermoth Cloak",
    "cost": 375,
    "type": "Cloak",
    "rarity": "Uncommon",
    "description": "While wearing this cloak, when a creature within 5 feet of you hits you with an attack, that creature takes 1d4 fire damage."
  },
  {
    "name": "Cindersnap Gloves",
    "cost": 4850,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "These gloves have 3 charges and regain 1d3 expended charges daily at dawn. While wearing these gloves, you can use a reaction to expend 1 charge when you are targeted by a ranged weapon attack. You gain a +5 bonus to AC against that attack and all other ranged weapon attacks until the start of your next turn. This item requires attunement."
  },
  {
    "name": "Circlet of Fire",
    "cost": 2937,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this circlet, when you deal fire damage with a spell of 1st level or higher (not a cantrip), you gain an additional bonus action on that turn. This item requires attunement."
  },
  {
    "name": "Circlet of Hunting",
    "cost": 2650,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this circlet, you gain a 1d4 bonus to attack rolls against creatures marked by hunter's mark, true strike, faerie fire, or guiding bolt. This item requires attunement."
  },
  {
    "name": "Circlet of Mental Anguish",
    "cost": 547,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this circlet, when an enemy fails a Charisma, Intelligence, or Wisdom saving throw against one of your spells or cantrips, you regain 1d4 hit points. This item requires attunement."
  },
  {
    "name": "Circlet of Psionic Revenge",
    "cost": 575,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this circlet, you gain a +1 bonus to Intelligence, Wisdom, and Charisma saving throws. When you succeed on a Charisma, Intelligence, or Wisdom saving throw against a spell or effect created by a creature you can see, that creature takes 1d4 psychic damage. This item requires attunement."
  },
  {
    "name": "Cloak of Cunning Brume",
    "cost": 375,
    "type": "Cloak",
    "rarity": "Uncommon",
    "description": "While wearing this cloak, when you take the Disengage action, you create a 10-foot-radius sphere of fog centered on you that lasts until the start of your next turn. The sphere spreads around corners, and its area is heavily obscured."
  },
  {
    "name": "Cloak of Elemental Absorption",
    "cost": 427,
    "type": "Cloak",
    "rarity": "Uncommon",
    "description": "While wearing this cloak, you can cast absorb elements at will, without expending a spell slot. This item requires attunement."
  },
  {
    "name": "Cloth of Authority",
    "cost": 1205,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While wearing this garment, you are immune to being frightened and can't be affected by other emotion-altering conditions (such as charm person or fear). You have advantage on Charisma (Intimidation) and Wisdom (Insight) checks. This item requires attunement."
  },
  {
    "name": "Clown Hammer (Warhammer)",
    "cost": 1420,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you score a critical hit with this weapon, both you and the target must succeed on a DC 14 Wisdom saving throw or fall prone and become incapacitated with laughter for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This item requires attunement."
  },
  {
    "name": "Club of Hill Giant Strength (Club)",
    "cost": 2595,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon dealing 1d4 bludgeoning damage. Your Strength score is 19 while you wield this magic club. It has no effect if your Strength is already 19 or higher. This item requires attunement."
  },
  {
    "name": "Cold Snap (Dagger)",
    "cost": 1377,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. While dual wielding weapons (with this weapon as one of them), when a creature misses you with a melee attack, it must succeed on a DC 14 Constitution saving throw or have its movement speed reduced by half until the end of its next turn. This item requires attunement."
  },
  {
    "name": "Corellon's Grace (Quarterstaff)",
    "cost": 2180,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to unarmed strike attack and damage rolls. While you are not wearing armor, you gain a +2 bonus to saving throws. This item requires attunement."
  },
  {
    "name": "Corpsegrinder (Maul)",
    "cost": 350,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 bludgeoning damage. Grand Slam. Once on each of your turns when you attack with this weapon, you can choose to slam the weapon into the ground instead of making a normal attack. Each creature within 10 feet of you must make a DC 14 Constitution saving throw, taking thunder damage equal to your proficiency bonus on a failed save, or half as much damage on a successful one. Creatures that fail the save are also pushed 5 feet away from you. This item requires attunement."
  },
  {
    "name": "Corrosive Flail (Flail)",
    "cost": 760,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon dealing 1d8 bludgeoning damage. Once per turn when you hit a creature with this weapon, you can deal extra acid damage equal to your proficiency bonus. If you do, the target's AC is reduced by 2 until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Coruscation Ring",
    "cost": 403,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, when you deal damage to a creature standing in bright light, you deal an extra 1d4 radiant damage."
  },
  {
    "name": "Corvid Token",
    "cost": 5800,
    "type": "Amulet",
    "rarity": "Very Rare",
    "description": "While wearing this amulet, your long jump and high jump distances increase by 5 feet. While you are under the effects of Wild Shape or a polymorph spell, you are under the constant effect of feather fall. The amulet you can use an action to cast polymorph on yourself, transforming into a dire raven (use giant eagle statistics but the creature is size Medium and has flying speed 60 feet). Once you use this property, you can\\'t use it again until the next dawn. This transformation lasts for 1 hour. This item requires attunement."
  },
  {
    "name": "Covert Cowl",
    "cost": 1398,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this hood, you gain a +1 bonus to Dexterity saving throws. While you are hidden or invisible, the number you need to roll for a critical hit with weapon attacks is reduced by 1 (this effect stacks with similar effects). This item requires attunement."
  },
  {
    "name": "Craterflesh Gloves",
    "cost": 1022,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to Strength saving throws. When you score a critical hit with a weapon attack, the target takes an extra 1d6 force damage. This item requires attunement."
  },
  {
    "name": "Creation's Echo (Quarterstaff)",
    "cost": 1810,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you deal acid, fire, lightning, radiant, or necrotic damage with this weapon or a spell, you gain resistance to that damage type until the start of your next turn. This item requires attunement."
  },
  {
    "name": "Crimson Mischief (Shortsword)",
    "cost": 36247,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. Main Hand. When wielding this weapon in your main hand, you deal an extra 1d4 piercing damage to creatures that have half their hit points or fewer. When you make an attack with advantage using this weapon, you deal an extra 7 piercing damage. Off-Hand. When wielding this weapon in your off hand, you can add your ability modifier to the damage of attacks made with this weapon. This item requires attunement."
  },
  {
    "name": "Crossbow of Arcane Force (Heavy Crossbow)",
    "cost": 1073,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial ranged weapon with ammunition (range 100/400), heavy, loading, and two-handed properties, dealing 1d10 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. Your ranged attacks with this weapon deal an extra 1d4 force damage."
  },
  {
    "name": "Crusher's Ring",
    "cost": 460,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, your walking speed increases by 10 feet."
  },
  {
    "name": "Crypt Lord Ring",
    "cost": 3700,
    "type": "Ring",
    "rarity": "Very Rare",
    "description": "This ring While wearing this ring, you can use an action to cast create undead. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Daredevil Gloves",
    "cost": 710,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to spell attack rolls. You can make ranged spell attacks against hostile creatures within 5 feet of you without disadvantage. Additionally, when a hostile creature is within 5 feet of you, you can choose to make your ranged spell attacks as melee spell attacks. This item requires attunement."
  },
  {
    "name": "Dark Displacement Gloves",
    "cost": 875,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to Dexterity (Sleight of Hand) checks and a +1 bonus to attack rolls when throwing weapons or objects. When you hit a creature with a thrown weapon while wearing these gloves, the target must succeed on a DC 14 Dexterity saving throw or swap positions with you. This item requires attunement."
  },
  {
    "name": "Darkfire Shortbow (Shortbow)",
    "cost": 1750,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple ranged weapon with ammunition (range 80/320) and two-handed properties, dealing 1d6 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. While carrying this bow, you have resistance to fire and cold damage. The bow you can use a bonus action to cast haste on yourself. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Defender Flail (Flail)",
    "cost": 1385,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon dealing 1d8 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. While wielding this weapon, all bludgeoning, piercing, and slashing damage you take is reduced by 1 (minimum of 1 damage). This item requires attunement."
  },
  {
    "name": "Derivation Cloak",
    "cost": 547,
    "type": "Cloak",
    "rarity": "Rare",
    "description": "While wearing this cloak, when you poison a creature, you regain 1d4 hit points. This item requires attunement."
  },
  {
    "name": "Despair of Athkatla (Quarterstaff)",
    "cost": 975,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. While wielding this staff, you gain a +1 bonus to spell save DC and spell attack rolls. This item requires attunement."
  },
  {
    "name": "Devotee's Mace (Mace)",
    "cost": 37005,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Simple melee weapon dealing 1d6 bludgeoning damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. The mace You can use an action to create a 10-foot-radius aura of healing incense centered on you. Once you use this property, you can\\'t use it again until the next dawn. The aura lasts for 1 minute. When a creature starts its turn in the aura or enters it for the first time on a turn, that creature regains 1d6 hit points. This item requires attunement."
  },
  {
    "name": "Diadem of Arcane Synergy",
    "cost": 350,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this diadem, when you inflict a condition on a creature with a spell or weapon attack, your spell save DC increases by 1 for the next 2 rounds. This item requires attunement."
  },
  {
    "name": "Disintegrating Night Walkers",
    "cost": 3010,
    "type": "Boots",
    "rarity": "Very Rare",
    "description": "While wearing these boots, you are immune to being grappled or restrained by webs, vines, or similar effects, and you can't be knocked prone by slippery surfaces such as ice or grease. The boots have 3 charges and regain 1d3 expended charges daily at dawn. You can use a bonus action to expend 1 charge to cast misty step. This item requires attunement."
  },
  {
    "name": "Djinni Ring",
    "cost": 407,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you can cast mage hand at will."
  },
  {
    "name": "Dolor Amarus (Dagger)",
    "cost": 1447,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you score a critical hit with this weapon, the target takes an extra 7 necrotic damage. This item requires attunement."
  },
  {
    "name": "Doom Hammer (Maul)",
    "cost": 1098,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 bludgeoning damage. When you hit a creature with this magic weapon, it can't regain hit points until the start of your next turn. Undead creatures hit by this weapon also have disadvantage on attack rolls until the start of your next turn. This item requires attunement."
  },
  {
    "name": "Dragon's Grasp (Handaxe)",
    "cost": 708,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with light and thrown (range 20/60) properties, dealing 1d6 slashing damage. When you hit a creature that is on fire with this magic handaxe, the target takes an extra 1d4 slashing damage."
  },
  {
    "name": "Drakethroat Glaive (Glaive)",
    "cost": 8635,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 slashing damage. While wielding this glaive, creatures have disadvantage on saving throws against your breath weapon (if you are a dragonborn). The glaive has 3 charges and regains 1d3 expended charges daily at dawn. You can use a bonus action to expend 1 charge to imbue this weapon with elemental energy for 1 minute. Choose acid, cold, fire, lightning, or poison. For the duration, attacks with this weapon deal an extra 1d6 damage of the chosen type. This item requires attunement."
  },
  {
    "name": "Dread Iron Dagger (Dagger)",
    "cost": 899,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. When you hit a creature with this weapon while you are hidden, the target takes an extra 1d6 necrotic damage. This item requires attunement."
  },
  {
    "name": "Drunken Cloth",
    "cost": 1535,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While you are poisoned (such as from alcohol) and wearing this garment, you have advantage on Constitution saving throws and gain temporary hit points equal to your Constitution modifier (minimum of 1) at the start of each of your turns. This item requires attunement."
  },
  {
    "name": "Duellist's Prerogative (Rapier)",
    "cost": 80525,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Martial melee weapon with finesse property, dealing 1d8 piercing damage. You gain a +3 bonus to attack and damage rolls made with this magic weapon. While your off-hand is empty and you are wielding only this weapon, you score a critical hit on a roll of 19 or 20, and you can take one additional reaction each round. When you hit with this weapon, you deal extra necrotic damage equal to your proficiency bonus. The rapier has 3 charges and regains 1d3 expended charges daily at dawn. You can expend charges to cast the following spells: compelled duel (1 charge), or as a bonus action, you can expend 1 charge to gain advantage on all attack rolls with this weapon until the end of your turn. This item requires attunement."
  },
  {
    "name": "Duke Ravengard's Longsword (Longsword)",
    "cost": 9737,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 slashing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. Your Charisma score increases by 2, to a maximum of 20, while you wield this sword. When you reduce a creature to 0 hit points with this weapon, each ally within 30 feet of you gains temporary hit points equal to your Charisma modifier (minimum of 1). The sword has 3 charges and regains 1d3 expended charges daily at dawn. When an ally you can see within 30 feet is about to make an attack, you can use your reaction and expend 1 charge to direct them. That ally can make one weapon attack as part of the same reaction. This item requires attunement."
  },
  {
    "name": "Dwarven Thrower (Warhammer)",
    "cost": 14717,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 bludgeoning damage. You gain a +3 bonus to attack and damage rolls made with this magic weapon. This weapon has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you throw this weapon, it returns to your hand immediately after the attack. If you are a dwarf and you throw this weapon, it deals an extra 1d8 bludgeoning damage on a hit. If the target is a Large, Huge, or Gargantuan creature, it takes an additional 2d8 bludgeoning damage. This item requires attunement."
  },
  {
    "name": "Enraging Heart Garb",
    "cost": 2085,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While wearing this garment, your Constitution score increases by 2, to a maximum of 20. When you enter a rage while wearing this garment, for the next 2 rounds, your melee weapon attacks deal an extra 1d4 damage. This item requires attunement."
  },
  {
    "name": "Envoy's Amulet",
    "cost": 800,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "This amulet While wearing this amulet, you can use a bonus action to touch one willing creature. Once you use this property, you can\\'t use it again until the next dawn. For the next hour, that creature gains a +2 bonus to Charisma (Persuasion) checks. This item requires attunement."
  },
  {
    "name": "Evasive Shoes",
    "cost": 1700,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, you gain a +1 bonus to Dexterity (Acrobatics) checks and a +1 bonus to AC."
  },
  {
    "name": "Everburn Blade (Greatsword)",
    "cost": 744,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 slashing damage. This weapon deals an extra 1d4 fire damage on a hit."
  },
  {
    "name": "Eversight Ring",
    "cost": 587,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you are immune to the blinded condition. This item requires attunement."
  },
  {
    "name": "Explorer's Ring",
    "cost": 395,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you gain a +1 bonus to Wisdom (Survival) and Intelligence (Nature) checks."
  },
  {
    "name": "Exterminator's Axe (Greataxe)",
    "cost": 741,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 1d12 slashing damage. When you hit a plant creature, insect, or Small or smaller creature with this magic weapon, the target takes an extra 1d6 fire damage."
  },
  {
    "name": "Fabricated Arbalest (Heavy Crossbow)",
    "cost": 17370,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial ranged weapon with ammunition (range 100/400), heavy, loading, and two-handed properties, dealing 1d10 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. The crossbow has 3 charges and regains 1d3 expended charges daily at dawn. You can use a bonus action to expend 1 charge to fire an illuminating bolt at a point you can see within range. The bolt explodes in a 20-foot-radius sphere of bright light centered on that point. Each creature in the area must make a DC 16 Constitution saving throw or be blinded until the end of your next turn. The light lasts for 1 minute. This item requires attunement."
  },
  {
    "name": "Faithbreaker (Warhammer)",
    "cost": 1397,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 bludgeoning damage. When you hit a creature with this magic weapon, you can choose to fill it with dread. The target must succeed on a DC 12 Wisdom saving throw or have disadvantage on attack rolls and ability checks until the end of your next turn. Once you use this property, you can't use it again until you finish a short or long rest. This item requires attunement."
  },
  {
    "name": "Family Ring",
    "cost": 415,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you gain a +2 bonus to death saving throws."
  },
  {
    "name": "Fetish of Callarduran Smoothhands",
    "cost": 470,
    "type": "Ring",
    "rarity": "Rare",
    "description": "This ring While wearing this ring, you can use an action to cast invisibility on yourself. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Fey Semblance Amulet",
    "cost": 4000,
    "type": "Amulet",
    "rarity": "Very Rare",
    "description": "While wearing this amulet, you have advantage on Intelligence, Wisdom, and Charisma saving throws. This item requires attunement."
  },
  {
    "name": "Fireheart",
    "cost": 403,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, when you take fire damage from a creature, your next weapon attack before the end of your next turn deals an extra 1d4 fire damage. This item requires attunement."
  },
  {
    "name": "Firestoker (Hand Crossbow)",
    "cost": 778,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial ranged weapon with ammunition (range 30/120), light, and loading properties, dealing 1d6 piercing damage. When you hit a creature that is on fire with this magic weapon, the target takes an extra 1d4 piercing damage."
  },
  {
    "name": "Firzu's Ring of Trading",
    "cost": 395,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you gain a +1 bonus to Charisma (Deception) checks."
  },
  {
    "name": "Fistbreaker Helm",
    "cost": 775,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this helm, you gain a +1 bonus to spell save DC and a +1 bonus to initiative rolls. This item requires attunement."
  },
  {
    "name": "Flail of Ages (Flail)",
    "cost": 1532,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon dealing 1d8 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you deal acid, cold, or fire damage with an attack or spell, you can choose to impose an additional effect. If you deal acid damage, the target's AC is reduced by 1 until the end of your next turn. If you deal cold damage, the target's movement speed is reduced by 10 feet until the end of your next turn. If you deal fire damage, the target takes 1d4 fire damage at the start of its next turn. The flail You can use an action to expend the charge. For the next minute, your attacks with this weapon deal an extra 1d6 damage of your choice from acid, cold, or fire. This item requires attunement."
  },
  {
    "name": "Flawed Helldusk Gloves",
    "cost": 1195,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to Strength saving throws. Your weapon attacks deal an extra 1d4 fire damage. Your unarmed strikes deal an extra 1d4 necrotic damage, and when you hit with an unarmed strike, the target begins bleeding, taking 1d4 slashing damage at the start of each of its turns. A creature can use an action to stanch the bleeding with a DC 12 Wisdom (Medicine) check. This item requires attunement."
  },
  {
    "name": "Flawed Helldusk Helmet",
    "cost": 1550,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this helm, you gain a +2 bonus to saving throws against spells and a +1 bonus to Constitution saving throws. This item requires attunement."
  },
  {
    "name": "Fleetfingers",
    "cost": 375,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, when you take the Dash action or use a similar feature that increases your movement, you can jump without using a bonus action for the rest of that turn."
  },
  {
    "name": "Fleshmelter Cloak",
    "cost": 375,
    "type": "Cloak",
    "rarity": "Uncommon",
    "description": "While wearing this cloak, when a creature within 5 feet of you hits you with a melee attack, that creature takes 1d4 acid damage."
  },
  {
    "name": "Fleshrender (Shortsword)",
    "cost": 1567,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. Part the Flesh. Once on each of your turns when you hit a creature with this weapon, you can cause the attack to deal an extra 2d6 slashing damage. If you do, the target's AC is reduced by 1 until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Foebreaker (Maul)",
    "cost": 10150,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 bludgeoning damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. Your attacks with this weapon ignore resistance to bludgeoning damage. This item requires attunement."
  },
  {
    "name": "Frost Prince",
    "cost": 420,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "This amulet While wearing it, you can use an action to cast ice knife (save DC 12). Once you use this property, you can\\'t use it again until the next dawn."
  },
  {
    "name": "Gandrel's Aspiration (Heavy Crossbow)",
    "cost": 962,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial ranged weapon with ammunition (range 100/400), heavy, loading, and two-handed properties, dealing 1d10 piercing damage. You have advantage on attack rolls against monstrosities with this magic weapon."
  },
  {
    "name": "Garb of the Land and Sky",
    "cost": 642,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While wearing this garment, when you use Patient Defense, you gain resistance to bludgeoning, piercing, and slashing damage until the start of your next turn. When you use Step of the Wind, your next attack roll before the end of your turn has advantage and deals an extra 1d8 force damage on a hit. This item requires attunement."
  },
  {
    "name": "Gauntlet of the Tyrant",
    "cost": 6302,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to spell save DC and your unarmed strikes deal an extra 1d4 force damage. The gloves have 3 charges and regain 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast command (save DC 16). This item requires attunement."
  },
  {
    "name": "Gauntlets of Hill Giant Strength",
    "cost": 19660,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "Your Strength score is 23 while you wear these gauntlets. They have no effect if your Strength is already 23 or higher. You gain a +1 bonus to Strength saving throws while wearing these gauntlets. This item requires attunement."
  },
  {
    "name": "Gauntlets of Surging Accuracy",
    "cost": 350,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gauntlets, when you use your Action Surge feature, you gain a 1d4 bonus to attack rolls for the rest of your turn. This item requires attunement."
  },
  {
    "name": "Gauntlets of the Warmaster",
    "cost": 11200,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "While wearing these gauntlets, you gain a +1 bonus to attack rolls with weapons. Creatures have disadvantage on saving throws against your maneuvers and weapon-based special attacks (such as Disarming Attack, Menacing Attack, or similar features). This item requires attunement."
  },
  {
    "name": "Gemini Gloves",
    "cost": 3775,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "These gloves While wearing these gloves, when you cast a cantrip that targets only one creature, you can target a second creature within range with the same cantrip. Once you use this property, you can\\'t use it again until the next dawn. You can target the same creature twice. This item requires attunement."
  },
  {
    "name": "Giantbreaker (Heavy Crossbow)",
    "cost": 2685,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial ranged weapon with ammunition (range 100/400), heavy, loading, and two-handed properties, dealing 1d10 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with this weapon, it suffers disadvantage on attack rolls until the end of its next turn. This item requires attunement."
  },
  {
    "name": "Gibus of the Worshipful Servant",
    "cost": 1135,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this hat, at the start of combat, your walking speed increases by 5 feet for each point of your Charisma modifier (minimum of 5 feet) until the end of your first turn. You have advantage on Constitution saving throws to maintain concentration on spells. This item requires attunement."
  },
  {
    "name": "Gleamdance Dagger (Dagger)",
    "cost": 2502,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. This weapon sheds bright light in a 20-foot radius and dim light for an additional 20 feet. Off-Hand. While wielding this weapon in your off hand, you gain a +1 bonus to AC. This item requires attunement."
  },
  {
    "name": "Gloomstrand Shield",
    "cost": 480,
    "type": "Shield",
    "rarity": "Uncommon",
    "description": "While wielding this shield, you gain a +1 bonus to Dexterity (Stealth) checks in addition to the shield's normal bonus to AC."
  },
  {
    "name": "Gloves of Archery",
    "cost": 390,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, you are proficient with longbows and shortbows, and your ranged weapon attacks deal an extra 2 damage."
  },
  {
    "name": "Gloves of Baneful Striking",
    "cost": 375,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, when you deal damage to a creature with a weapon attack, that creature suffers a 1d4 penalty to its next saving throw against a spell you cast before the end of your next turn. This item requires attunement."
  },
  {
    "name": "Gloves of Battlemage's Power",
    "cost": 995,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to Strength saving throws. When you inflict a condition on a creature with a weapon attack (such as grappled, prone, or frightened), your spell save DC increases by 1 until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Gloves of Belligerent Skies",
    "cost": 1080,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, when you deal thunder, lightning, or radiant damage to a creature, that creature becomes vulnerable to thunder damage until the end of your next turn (unless it has resistance or immunity to thunder damage). This item requires attunement."
  },
  {
    "name": "Gloves of Cinder and Sizzle",
    "cost": 607,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, your unarmed strikes deal an extra 1d4 fire damage. The gloves you can use an action to cast scorching ray. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Gloves of Crushing",
    "cost": 695,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to unarmed strike attack rolls, and your unarmed strikes deal an extra 2 bludgeoning damage. This item requires attunement."
  },
  {
    "name": "Gloves of Dexterity",
    "cost": 11560,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "Your Dexterity score is 18 while you wear these gloves. They have no effect if your Dexterity is already 18 or higher. You gain a +1 bonus to attack rolls while wearing these gloves. This item requires attunement."
  },
  {
    "name": "Gloves of Hail of Thorns",
    "cost": 420,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "These gloves have 3 charges and regain 1d3 expended charges daily at dawn. While wearing these gloves, you can use a bonus action to expend 1 charge to cast hail of thorns."
  },
  {
    "name": "Gloves of Heroism",
    "cost": 620,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, you gain a +1 bonus to Strength saving throws. When you use a Channel Divinity option from your Sacred Oath, you gain the benefit of the heroism spell for 1 minute (no concentration required). This item requires attunement."
  },
  {
    "name": "Gloves of Missile Snaring",
    "cost": 350,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, when you are hit by a ranged weapon attack, you can use your reaction to reduce the damage by 1d10 + your Dexterity modifier. If you reduce the damage to 0, you catch the missile. This item requires attunement."
  },
  {
    "name": "Gloves of Power",
    "cost": 395,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, you gain a +1 bonus to Dexterity (Sleight of Hand) checks. When you deal damage to a creature with a melee weapon attack and you bear the Absolute's brand, that creature suffers a 1d4 penalty to its attack rolls and saving throws until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Gloves of Soul Catching",
    "cost": 37965,
    "type": "Gloves",
    "rarity": "Legendary",
    "description": "While wearing these gloves, your Constitution score increases by 2, to a maximum of 20, and your unarmed strikes deal an extra 1d10 force damage. Once per turn when you hit with an unarmed strike, you can choose one of the following benefits: regain 10 hit points, or forgo the healing to gain advantage on attack rolls and saving throws until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Gloves of the Automaton",
    "cost": 920,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you are considered a construct for the purpose of spells and effects. You have advantage on weapon attack rolls and resistance to lightning damage. This item requires attunement."
  },
  {
    "name": "Gloves of the Balanced Hands",
    "cost": 350,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves and dual wielding weapons, you can add your ability modifier to the damage of your off-hand weapon attacks. This item requires attunement."
  },
  {
    "name": "Gloves of the Duellist",
    "cost": 1400,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves and wielding a melee weapon in one hand with nothing in your other hand, you gain a +2 bonus to attack rolls with that weapon. This item requires attunement."
  },
  {
    "name": "Gloves of the Growling Underdog",
    "cost": 632,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, you gain a +1 bonus to Strength saving throws. When you are within 5 feet of two or more hostile creatures, you have advantage on melee weapon attack rolls. This item requires attunement."
  },
  {
    "name": "Gloves of Thievery",
    "cost": 387,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, you have advantage on Dexterity (Sleight of Hand) checks and checks to pick locks."
  },
  {
    "name": "Gloves of Uninhibited Kushigo",
    "cost": 487,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you deal an extra 1d4 damage with thrown weapon attacks and attacks made with improvised weapons. This item requires attunement."
  },
  {
    "name": "Glowing Shield",
    "cost": 494,
    "type": "Shield",
    "rarity": "Uncommon",
    "description": "This shield While wielding this shield, when you have half your hit points or fewer, you can use a bonus action to gain 8 temporary hit points. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Gold Wyrmling Staff (Quarterstaff)",
    "cost": 960,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. While holding this staff, you can cast fire bolt at will. You use your spellcasting ability for the spell. This item requires attunement."
  },
  {
    "name": "Gontr Mael (Longbow)",
    "cost": 38300,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Martial ranged weapon with ammunition (range 150/600), heavy, and two-handed properties, dealing 1d8 piercing damage. You gain a +3 bonus to attack and damage rolls made with this magic weapon. This weapon sheds bright light in a 20-foot radius and dim light for an additional 20 feet. When you hit a creature with this weapon, the next attack roll against that creature before the end of your next turn has advantage. The bow You can use a bonus action to gain the effect of the haste spell for 1 minute. Once you use this property, you can\\'t use it again until the next dawn. This effect doesn't require concentration, and you don't suffer the lethargy effect when it ends. This item requires attunement."
  },
  {
    "name": "Grymskull Helm",
    "cost": 11965,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this helm, attack rolls can't score a critical hit against you, and you have resistance to fire damage. The helm you can use a bonus action to cast hunter's mark. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Guiding Light",
    "cost": 407,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you can cast light at will."
  },
  {
    "name": "Halberd of Vigilance (Halberd)",
    "cost": 8500,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 slashing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon, a +1 bonus to initiative rolls, and advantage on Wisdom (Perception) checks while this weapon is on your person. When you make an attack roll as a reaction, you have advantage on that attack roll. This item requires attunement."
  },
  {
    "name": "Hamarhraft (Maul)",
    "cost": 375,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 bludgeoning damage. When you jump at least 10 feet and land within 10 feet of a creature, that creature must succeed on a DC 12 Dexterity saving throw or take 1d6 thunder damage."
  },
  {
    "name": "Hammer of the Just (Warhammer)",
    "cost": 1657,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or undead with this weapon, the target takes an extra 1d6 bludgeoning damage. The hammer you can use an action to cast detect thoughts (save DC 14). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Hammergrim Mist Amulet",
    "cost": 430,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, you can cast fog cloud at will."
  },
  {
    "name": "Handmaiden's Mace (Mace)",
    "cost": 9465,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Simple melee weapon dealing 1d6 bludgeoning damage. Your Strength score is 18 while you wield this magic mace. It has no effect if your Strength is already 18 or higher. This item requires attunement."
  },
  {
    "name": "Harmonic Dueller (Rapier)",
    "cost": 4478,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with finesse property, dealing 1d8 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The rapier has 3 charges and regains 1d3 expended charges daily at dawn. You can use a bonus action to expend 1 charge to gain 2d8 temporary hit points that last for 1 minute. This item requires attunement."
  },
  {
    "name": "Harmonium Halberd (Halberd)",
    "cost": 2235,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 slashing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. While wielding this halberd, your Strength score increases by 2, to a maximum of 23. Curse. This halberd is cursed. While attuned to it, your Intelligence and Wisdom scores are each reduced by 1. This item requires attunement."
  },
  {
    "name": "Harold (Heavy Crossbow)",
    "cost": 1425,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial ranged weapon with ammunition (range 100/400), heavy, loading, and two-handed properties, dealing 1d10 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you deal damage to a creature with this weapon, it must succeed on a DC 14 Charisma saving throw or suffer a 1d4 penalty to attack rolls and saving throws for 2 rounds. This item requires attunement."
  },
  {
    "name": "Harper Sacredstriker (Quarterstaff)",
    "cost": 1495,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The quarterstaff you can use a bonus action to cast spiritual weapon. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Haste Helm",
    "cost": 562,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this helm, at the start of combat, your walking speed increases by 10 feet for the first 3 rounds. This item requires attunement."
  },
  {
    "name": "Hat of Fire Acuity",
    "cost": 375,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this hat, when you deal fire damage with a spell or attack, your spell save DC increases by 1 for 2 rounds. This item requires attunement."
  },
  {
    "name": "Hat of Storm Scion's Power",
    "cost": 375,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this hat, when you deal thunder damage with a spell or attack, your spell save DC increases by 1 until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Hat of the Sharp Caster",
    "cost": 350,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this hat, when you roll a 1 or 2 on a damage die for a spell attack, you can reroll that die once and must use the new roll. This item requires attunement."
  },
  {
    "name": "Hat of Uninhibited Kushigo",
    "cost": 575,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this hat, when you deal damage with an unarmed strike, you gain a +1 bonus to your spell save DC until the end of your turn. This item requires attunement."
  },
  {
    "name": "Hellbeard Halberd (Halberd)",
    "cost": 385,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 slashing damage. This weapon deals an extra 1d6 fire damage on a hit. This item requires attunement."
  },
  {
    "name": "Helldusk Boots",
    "cost": 2695,
    "type": "Boots",
    "rarity": "Very Rare",
    "description": "While wearing these boots, difficult terrain doesn't cost you extra movement, and you can't be forcibly moved or knocked prone by enemy spells or effects. The boots When you fail a saving throw, you can use your reaction to succeed instead. Once you use this property, you can\\'t use it again until the next dawn. Hellcrawler. The boots have 3 additional charges for this feature and regain 1d3 expended charges daily at dawn. As a bonus action, you can teleport up to 60 feet to an unoccupied space you can see, leaving flames in your wake. Once you use this property, you can\\'t use it again until the next dawn. Each creature within 5 feet of the space you left must succeed on a DC 16 Dexterity saving throw or take 2d8 fire damage. This item requires attunement."
  },
  {
    "name": "Helldusk Gloves",
    "cost": 9100,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to Strength saving throws, a +1 bonus to spell attack rolls, and your spell save DC increases by 1. Your weapon attacks deal an extra 1d6 fire damage. Your unarmed strikes deal an extra 1d6 necrotic damage, and when you hit with an unarmed strike, the target begins bleeding, taking 1d4 slashing damage at the start of each of its turns. A creature can use an action to stanch the bleeding with a DC 14 Wisdom (Medicine) check. The gloves have 3 charges and regain 1d3 expended charges daily at dawn. You can use an action to expend 1 charge. Three rays of fire shoot from your hand. Make a ranged spell attack for each ray (+8 to hit). On a hit, the target takes 2d6 fire damage. This item requires attunement."
  },
  {
    "name": "Helldusk Helmet",
    "cost": 20110,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this helm, you have darkvision out to a range of 40 feet. You can see in magical darkness as if it were dim light. You are immune to being blinded, and attack rolls can't score a critical hit against you. You gain a +2 bonus to saving throws against spells. You deal an extra 2d8 damage to creatures that are on fire. This item requires attunement."
  },
  {
    "name": "Hellfire Engine Crossbow (Heavy Crossbow)",
    "cost": 11520,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial ranged weapon with ammunition (range 100/400), heavy, loading, and two-handed properties, dealing 1d10 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. The crossbow You can use a bonus action to imbue your next shot. Once you use this property, you can\\'t use it again until the next dawn. The next time you hit a creature with this weapon before the end of your turn, the attack deals an extra 4d8 lightning damage. This item requires attunement."
  },
  {
    "name": "Hellfire Greataxe (Greataxe)",
    "cost": 10142,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 1d12 slashing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you deal damage with this weapon, your next weapon attack before the end of your next turn deals an extra 1d4 fire damage. Hellflame Cleave. Once on each of your turns when you attack with this weapon, you can make a sweeping attack. Each creature within 5 feet of you takes fire damage equal to your Strength modifier (minimum of 1) and must succeed on a DC 16 Dexterity saving throw or take 2d6 fire damage. This item requires attunement."
  },
  {
    "name": "Hellfire Hand Crossbow (Hand Crossbow)",
    "cost": 17035,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial ranged weapon with ammunition (range 30/120), light, and loading properties, dealing 1d6 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with this weapon while you are hidden or invisible, the target must succeed on a DC 16 Dexterity saving throw or catch fire, taking 1d6 fire damage at the start of each of its turns. A creature can use an action to extinguish the flames. The crossbow has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast scorching ray. This item requires attunement."
  },
  {
    "name": "Hellrider Longbow (Longbow)",
    "cost": 1247,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial ranged weapon with ammunition (range 150/600), heavy, and two-handed properties, dealing 1d8 piercing damage. While this bow is on your person, you gain a +3 bonus to initiative rolls and advantage on Wisdom (Perception) checks. Once on each of your turns when you hit a creature with this weapon, that creature must succeed on a DC 12 Dexterity saving throw or be outlined by faerie fire until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Hellrider's Pride",
    "cost": 620,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gauntlets, you gain a +1 bonus to Strength saving throws. When you restore hit points to a creature using a spell or feature, that creature gains resistance to bludgeoning, piercing, and slashing damage for 2 rounds. This item requires attunement."
  },
  {
    "name": "Helm of Balduran",
    "cost": 50535,
    "type": "Headwear",
    "rarity": "Legendary",
    "description": "While wearing this helm, you regain 2 hit points at the start of each of your turns, gain a +1 bonus to saving throws, and are immune to being stunned. Attack rolls can't score a critical hit against you. This item requires attunement."
  },
  {
    "name": "Helmet of Arcane Acuity",
    "cost": 620,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this helmet, you gain a +1 bonus to Dexterity saving throws. When you deal damage with a weapon attack, your spell save DC increases by 1 for 2 rounds. This item requires attunement."
  },
  {
    "name": "Helmet of Autonomy",
    "cost": 620,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this helmet, you gain proficiency in Wisdom saving throws. If you are already proficient in Wisdom saving throws, you instead gain a +1 bonus to Wisdom saving throws. This item requires attunement."
  },
  {
    "name": "Helmet of Grit",
    "cost": 15925,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this helmet, you gain a +1 bonus to Dexterity saving throws. While you have half your hit points or fewer, you can take one additional bonus action on each of your turns. This item requires attunement."
  },
  {
    "name": "Helmet of Smiting",
    "cost": 642,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this helmet, you gain a +1 bonus to Constitution saving throws. When you use Divine Smite or a similar smiting feature and inflict a condition on a creature (such as by stunning them or knocking them prone), you gain temporary hit points equal to your Charisma modifier (minimum of 1). This item requires attunement."
  },
  {
    "name": "Herbalist's Gloves",
    "cost": 722,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, when you restore hit points to a poisoned creature, that creature is no longer poisoned."
  },
  {
    "name": "Hoarfrost Boots",
    "cost": 398,
    "type": "Boots",
    "rarity": "Uncommon",
    "description": "While wearing these boots, you can't be knocked prone while moving across icy or frozen surfaces."
  },
  {
    "name": "Hollow's Staff (Quarterstaff)",
    "cost": 2332,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. While holding this staff, creatures have disadvantage on saving throws against your necromancy spells. The staff you can use an action to cast arms of Hadar. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Holy Lance Helm",
    "cost": 620,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this helm, you gain a +1 bonus to Constitution saving throws. When a creature misses you with a melee attack, it must succeed on a DC 12 Dexterity saving throw or take 1d4 radiant damage. This item requires attunement."
  },
  {
    "name": "Hood of the Weave",
    "cost": 7150,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this hood, you gain a +2 bonus to spell save DC and spell attack rolls. This item requires attunement."
  },
  {
    "name": "Horns of the Berserker",
    "cost": 5005,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this helm and you don't have all your hit points, you deal an extra 2 necrotic damage with melee weapon attacks and unarmed strikes. You gain a +2 bonus to attack rolls against creatures that have taken damage since the start of your last turn. Curse. This helm is cursed. At the end of each of your turns, if you didn't deal damage to a creature on that turn, you take 1d4 necrotic damage. This item requires attunement."
  },
  {
    "name": "Hr'a'cknir Bracers",
    "cost": 7195,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "While wearing these bracers, you gain a +1 bonus to Strength saving throws and can cast mage hand at will. The bracers have 3 charges and regain 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast telekinesis. This item requires attunement."
  },
  {
    "name": "Hunter's Dagger (Dagger)",
    "cost": 677,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. When you hit a creature with this magic dagger, it must succeed on a DC 12 Constitution saving throw or take 1d4 piercing damage at the start of each of its turns as the wound bleeds profusely. The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success. Any creature can use an action to stanch the bleeding with a DC 12 Wisdom (Medicine) check. This item requires attunement."
  },
  {
    "name": "Hunting Shortbow (Shortbow)",
    "cost": 1302,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple ranged weapon with ammunition (range 80/320) and two-handed properties, dealing 1d6 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. You have advantage on attack rolls against monstrosities. The bow you can use a bonus action to cast hunter's mark. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Icebite Robe",
    "cost": 1235,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While wearing this robe, you have resistance to cold damage. The robe you can use an action to cast armor of Agathys at 3rd level. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Ichorous Gloves",
    "cost": 713,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, when you deal acid damage to a creature, that creature is poisoned until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Incandescent Staff (Quarterstaff)",
    "cost": 15460,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to spell attack rolls while holding this staff. While holding this staff, you have resistance to fire damage and can cast fire bolt at will. The staff has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 3 charges to cast fireball (save DC 16). This item requires attunement."
  },
  {
    "name": "Infernal Mace (Mace)",
    "cost": 1860,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon dealing 1d6 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with this weapon, it takes an extra 3 poison damage and must succeed on a DC 14 Constitution saving throw or be poisoned until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Infernal Rapier (Rapier)",
    "cost": 25025,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with finesse property, dealing 1d8 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. Your spell save DC increases by 1 while wielding this weapon. You can use your spellcasting ability modifier instead of your Dexterity modifier for attack and damage rolls with this weapon. The rapier You can use an action to summon a cambion (use the statistics for a cambion). Once you use this property, you can\\'t use it again until the next dawn. The cambion appears in an unoccupied space within 60 feet of you, acts on its own initiative, and obeys your verbal commands. It remains for 1 hour, until it is reduced to 0 hit points, or until you dismiss it as an action. This item requires attunement."
  },
  {
    "name": "Infernal Robe",
    "cost": 4450,
    "type": "Clothing",
    "rarity": "Very Rare",
    "description": "While wearing this robe, you have resistance to fire damage. The robe you can use an action to cast fire shield (warm version). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Infernal Spear (Spear)",
    "cost": 1856,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with thrown (range 20/60) and versatile (1d8) properties, dealing 1d6 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with this weapon, it takes an extra 3 poison damage and must succeed on a DC 14 Constitution saving throw or be poisoned until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Intransigent Warhammer (Warhammer)",
    "cost": 713,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 bludgeoning damage. When you reduce a creature to 0 hit points with this magic weapon or score a critical hit, each creature of your choice within 5 feet of you must succeed on a DC 12 Strength saving throw or be knocked prone. This item requires attunement."
  },
  {
    "name": "Ironvine Shield",
    "cost": 460,
    "type": "Shield",
    "rarity": "Uncommon",
    "description": "While wielding this shield and a weapon affected by shillelagh, when a creature within 5 feet hits you with a melee attack, that creature takes 1 piercing damage. This item requires attunement."
  },
  {
    "name": "Ironwood Club (Club)",
    "cost": 675,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon dealing 1d4 bludgeoning damage. This magic weapon functions as a normal club but is made of ironwood."
  },
  {
    "name": "Jagged Spear (Spear)",
    "cost": 1138,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with thrown (range 20/60) and versatile (1d8) properties, dealing 1d6 piercing damage. When you hit a creature with this magic weapon, it must succeed on a DC 12 Constitution saving throw or have disadvantage on Constitution saving throws until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Jannath's Hat",
    "cost": 4000,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this hat, you have advantage on Charisma (Persuasion) and Charisma (Deception) checks. This item requires attunement."
  },
  {
    "name": "Jhannyl's Gloves",
    "cost": 4025,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to saving throws. When you become blinded, paralyzed, or poisoned, you automatically cast lesser restoration on yourself to end one of those conditions. Once you use this property, you can't use it again until you finish a long rest. This item requires attunement."
  },
  {
    "name": "Jorgoral's Greatsword (Greatsword)",
    "cost": 1637,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 slashing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. Colossal Onslaught. Once on each of your turns when you attack with this weapon, you can make a powerful overhead strike. The attack deals an extra 2d6 slashing damage, and if the target is Large or smaller, it must succeed on a DC 14 Strength saving throw or be knocked prone. This item requires attunement."
  },
  {
    "name": "Justiciar's Greatshield",
    "cost": 5335,
    "type": "Shield",
    "rarity": "Rare",
    "description": "While wielding this shield, you gain a +1 bonus to AC in addition to the shield's normal bonus, and you have advantage on Wisdom (Perception) checks. The shield has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge. For the next minute, you are heavily obscured to creatures more than 5 feet away from you, as you are shrouded in magical darkness. This item requires attunement."
  },
  {
    "name": "Justiciar's Scimitar (Scimitar)",
    "cost": 21590,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 slashing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you attack with advantage using this weapon, the target must succeed on a DC 16 Constitution saving throw or be blinded until the end of your next turn. The scimitar has 3 charges and regains 1d3 expended charges daily at dawn. You can use a bonus action to expend 1 charge to shroud yourself in shadow. Your next attack with this weapon before the end of your turn is made with advantage and deals an extra 2d6 necrotic damage on a hit. This item requires attunement."
  },
  {
    "name": "Keepsake Ring",
    "cost": 700,
    "type": "Ring",
    "rarity": "Rare",
    "description": "This ring While wearing this ring, you can use an action to cast dominate beast (save DC 14). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Ketheric's Shield",
    "cost": 1420,
    "type": "Shield",
    "rarity": "Rare",
    "description": "While wielding this shield, you gain a +1 bonus to spell save DC and spell attack rolls, and you have advantage on Dexterity saving throws. This item requires attunement."
  },
  {
    "name": "Ketheric's Warhammer (Warhammer)",
    "cost": 765,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 bludgeoning damage. This magic warhammer is well-crafted but has no additional magical properties beyond being a magic weapon for purposes of overcoming resistance. This item requires attunement."
  },
  {
    "name": "Key of the Ancients",
    "cost": 395,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this circlet, you gain a +1 bonus to Intelligence (Nature) checks. Special. While wearing this circlet and standing before certain ancient stone doors, you can open magical passages or shortcuts that would otherwise remain hidden."
  },
  {
    "name": "Khalid's Gift",
    "cost": 11650,
    "type": "Amulet",
    "rarity": "Very Rare",
    "description": "While wearing this amulet, your Wisdom score increases by 1, to a maximum of 21. The amulet you can use an action to cast aid at 3rd level. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Killer's Sweetheart",
    "cost": 4450,
    "type": "Ring",
    "rarity": "Very Rare",
    "description": "This ring While wearing this ring, when you reduce a creature to 0 hit points, you can expend the charge (no action required). If you do, your next attack roll before the end of your next turn is an automatic critical hit. This item requires attunement."
  },
  {
    "name": "Knife of the Undermountain King (Shortsword)",
    "cost": 12110,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. You score a critical hit on a roll of 19 or 20. When you roll damage for an attack with this weapon and roll a 1 or 2 on any damage die, you can reroll that die and must use the new roll. You have advantage on attack rolls with this weapon against creatures that are lightly or heavily obscured. This item requires attunement."
  },
  {
    "name": "Knock Knuckle Gloves",
    "cost": 485,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, you gain a +1 bonus to Dexterity (Sleight of Hand) checks. The gloves you can use an action to cast knock. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Komira's Locket",
    "cost": 407,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, you can cast dancing lights at will."
  },
  {
    "name": "Kurwin's Cauteriser (Scimitar)",
    "cost": 700,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 slashing damage. When you hit a creature with this weapon, it must succeed on a DC 12 Constitution saving throw or catch fire, taking 1d4 fire damage at the start of each of its turns. A creature can use an action to extinguish the flames. This item requires attunement."
  },
  {
    "name": "Larethian's Wrath (Longsword)",
    "cost": 1390,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 slashing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. Razor Gale. Once on each of your turns when you attack with this weapon, you can unleash a cutting wind. Each creature in a 15-foot cone must make a DC 14 Dexterity saving throw, taking 2d6 slashing damage on a failed save, or half as much damage on a successful one. This item requires attunement."
  },
  {
    "name": "Least Expected (Shortbow)",
    "cost": 1400,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple ranged weapon with ammunition (range 80/320) and two-handed properties, dealing 1d6 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. While you are in dim light or darkness, you gain a 1d4 bonus to ranged weapon attack rolls with this weapon. This item requires attunement."
  },
  {
    "name": "Legacy of the Masters",
    "cost": 8650,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "While wearing these gauntlets, you gain a +1 bonus to Strength saving throws and a +2 bonus to attack and damage rolls with weapons. This item requires attunement."
  },
  {
    "name": "Light of Creation (Halberd)",
    "cost": 713,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 slashing damage. This magic halberd is designed for constructs. When a creature that is not a construct makes an attack with this weapon, it must succeed on a DC 12 Constitution saving throw or be stunned until the end of its next turn. This item requires attunement."
  },
  {
    "name": "Lightning Jabber (Spear)",
    "cost": 704,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with thrown (range 20/60) and versatile (1d8) properties, dealing 1d6 piercing damage. When you hit a creature with this magic weapon, it must succeed on a DC 12 Constitution saving throw or be unable to take reactions until the start of its next turn. When you throw this weapon, it deals an extra 1d4 lightning damage on a hit. This item requires attunement."
  },
  {
    "name": "Linebreaker Boots",
    "cost": 487,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, when you take the Dash action or use a similar feature that increases your movement, your melee weapon attacks deal an extra 1d4 damage for 2 rounds. This item requires attunement."
  },
  {
    "name": "Loviatar's Scourge (Mace)",
    "cost": 917,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon dealing 1d6 bludgeoning damage. While wielding this magic weapon, you have resistance to necrotic damage. When you hit a creature with this weapon, each creature within 5 feet of you (including you) takes 1d6 necrotic damage. This item requires attunement."
  },
  {
    "name": "Luminous Gloves",
    "cost": 648,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, you gain a +1 bonus to Strength saving throws. When you deal radiant damage to a creature, that creature becomes more vulnerable to radiant damage until the end of your next turn. The next time it takes radiant damage before the end of your next turn, it takes an extra 1d4 radiant damage. This item requires attunement."
  },
  {
    "name": "Mage's Friend",
    "cost": 395,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you gain a +1 bonus to Intelligence (Arcana) and Intelligence (Religion) checks."
  },
  {
    "name": "Magic Amulet",
    "cost": 485,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "This amulet While wearing this amulet, you can gain advantage on one attack roll or saving throw of your choice. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Mantle of the Holy Warrior",
    "cost": 3175,
    "type": "Cloak",
    "rarity": "Very Rare",
    "description": "This cloak While wearing this cloak, you can use an action to cast crusader's mantle. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Markoheshkir (Quarterstaff)",
    "cost": 61312,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +3 bonus to spell save DC and spell attack rolls while holding this staff. The staff has 5 charges and regains 1d4+1 expended charges daily at dawn. You can use an action to expend charges to cast one of the following spells: (1 charge) choose acid, cold, fire, lightning, or thunder—your spells of that damage type deal an extra 1d8 damage for 1 minute; (3 charges) as a bonus action, regain one expended spell slot of 5th level or lower. This item requires attunement."
  },
  {
    "name": "Marksmanship Hat",
    "cost": 395,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this hat, you gain a +1 bonus to ranged attack rolls (including ranged weapon attacks and ranged spell attacks)."
  },
  {
    "name": "Martial Exertion Gloves",
    "cost": 642,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "These gloves have 3 charges and regain 1d3 expended charges daily at dawn. While wearing these gloves, when you make a weapon attack, you can expend 1 charge to gain advantage on the attack roll. If the attack hits, it deals an extra 1d8 damage. This item requires attunement."
  },
  {
    "name": "Mask of Soul Perception",
    "cost": 12820,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this mask, you gain a +2 bonus to attack rolls, initiative rolls, and Wisdom (Perception) checks. The mask has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast detect thoughts (save DC 16). This item requires attunement."
  },
  {
    "name": "Mask of the Shapeshifter",
    "cost": 26650,
    "type": "Headwear",
    "rarity": "Legendary",
    "description": "While wearing this mask, you can cast disguise self at will. This item requires attunement."
  },
  {
    "name": "Melf's First Staff (Quarterstaff)",
    "cost": 695,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to spell save DC and spell attack rolls while holding this staff. The staff you can use an action to cast Melf's acid arrow. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Merregon Halberd (Halberd)",
    "cost": 375,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 slashing damage. This magic halberd is well-crafted but has no additional magical properties beyond being a magic weapon for purposes of overcoming resistance."
  },
  {
    "name": "Monster Slayer Glaive (Glaive)",
    "cost": 1532,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 slashing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. Your jump distance increases by 5 feet. When you hit a monstrosity with this weapon, the target takes an extra 1d4 slashing damage. This item requires attunement."
  },
  {
    "name": "Moon Devotion Robe",
    "cost": 16664,
    "type": "Clothing",
    "rarity": "Very Rare",
    "description": "While wearing this robe, you gain a +1 bonus to saving throws and advantage on Constitution saving throws. While you are under the effect of mage armor, when you succeed on a saving throw against a spell cast by a creature you can see, that creature takes 1d4 radiant damage. While wearing this robe, you can cast produce flame at will. The robe You can use an action to create a 10-foot-radius sphere of spectral moonlight centered on you for 1 minute. Once you use this property, you can\\'t use it again until the next dawn. The sphere moves with you, and creatures of your choice within the sphere gain 1d8 temporary hit points at the start of each of their turns. This item requires attunement."
  },
  {
    "name": "Moondrop Pendant",
    "cost": 375,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet and you have half your hit points or fewer, you don't provoke opportunity attacks. This item requires attunement."
  },
  {
    "name": "Moonlight Glaive (Glaive)",
    "cost": 1395,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 slashing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. This weapon sheds bright light in a 20-foot radius and dim light for an additional 20 feet. This item requires attunement."
  },
  {
    "name": "Mourning Frost (Quarterstaff)",
    "cost": 3310,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. While holding this staff, you can cast ray of frost at will. When you deal cold damage with a spell or this weapon, you deal an extra 1 cold damage. When you deal cold damage to a creature, its movement speed is reduced by 10 feet until the end of its next turn (this effect doesn't stack with multiple applications). This item requires attunement."
  },
  {
    "name": "Murderous Cut (Dagger)",
    "cost": 705,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. When you hit a creature that has half its hit points or fewer with this magic dagger, the target takes an extra 1d4 piercing damage."
  },
  {
    "name": "Myrkulite Scourge (Flail)",
    "cost": 704,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon dealing 1d8 bludgeoning damage. This weapon deals an extra 1d4 necrotic damage on a hit."
  },
  {
    "name": "Mystra's Grace",
    "cost": 430,
    "type": "Boots",
    "rarity": "Uncommon",
    "description": "While wearing these boots, you can cast feather fall at will."
  },
  {
    "name": "Nature's Snare (Quarterstaff)",
    "cost": 743,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. When you hit a creature that is not a plant or beast with this magic weapon, it must succeed on a DC 12 Strength saving throw or be restrained by magical vines until the start of your next turn. This item requires attunement."
  },
  {
    "name": "Ne'er Misser (Hand Crossbow)",
    "cost": 4705,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial ranged weapon with ammunition (range 30/120), light, and loading properties, dealing 1d6 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The crossbow has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast magic missile at 1st level. This item requires attunement."
  },
  {
    "name": "Necklace of Elemental Augmentation",
    "cost": 375,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, when you deal acid, cold, fire, lightning, or thunder damage with a cantrip, you add your spellcasting ability modifier to the damage dealt. This item requires attunement."
  },
  {
    "name": "Nimblefinger Gloves",
    "cost": 1767,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to Dexterity (Sleight of Hand) checks. If you are a gnome, your Dexterity score increases by 2, to a maximum of 20. If you are a halfling or dwarf, your Dexterity score increases by 1, to a maximum of 20. This item requires attunement."
  },
  {
    "name": "Nymph Cloak",
    "cost": 3175,
    "type": "Cloak",
    "rarity": "Very Rare",
    "description": "This cloak While wearing this cloak, you can use an action to cast dominate person (save DC 16). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Nyrulna (Trident)",
    "cost": 42755,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Martial melee weapon with thrown (range 20/60) and versatile (1d8) properties, dealing 1d6 piercing damage. You gain a +3 bonus to attack and damage rolls made with this magic weapon. This weapon has the thrown property with a normal range of 60 feet and a long range of 120 feet. When you throw this weapon, it returns to your hand immediately after the attack. You can't be disarmed of this weapon. Your walking speed and jump distance increase by 10 feet. You are immune to falling damage. This weapon sheds bright light in a 20-foot radius and dim light for an additional 20 feet. When you throw this weapon and hit a target, each creature within 20 feet of the target must make a DC 18 Dexterity saving throw, taking 3d4 thunder damage on a failed save, or half as much damage on a successful one. This item requires attunement."
  },
  {
    "name": "Obsidian Laced Robe",
    "cost": 785,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While wearing this robe, you have resistance to fire damage. When a creature succeeds on a saving throw against a spell you cast, that creature takes 1d4+4 fire damage. This item requires attunement."
  },
  {
    "name": "Orphic Hammer (Warhammer)",
    "cost": 39765,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 bludgeoning damage. You gain a +3 bonus to attack and damage rolls made with this magic weapon. While wielding this weapon, you have advantage on saving throws against spells. Unshackling Strike. Once per long rest, when you hit a creature with this weapon, you can attempt to break magical bonds. The target must make a DC 18 Charisma saving throw. On a failed save, one magical effect restraining, controlling, or binding the creature (such as dominate person, hold person, or geas) immediately ends. This item requires attunement."
  },
  {
    "name": "Orphic Ring",
    "cost": 2650,
    "type": "Ring",
    "rarity": "Very Rare",
    "description": "This ring While wearing this ring, you can use an action to cast confusion (save DC 16). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Pale Oak (Quarterstaff)",
    "cost": 840,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. While holding this staff, you are immune to being restrained by magical vines or plant-based effects. The staff You can use an action to create grasping spectral vines in a 15-foot radius centered on you. Once you use this property, you can\\'t use it again until the next dawn. The area becomes difficult terrain for 1 minute. When a creature enters the area or starts its turn there, it must succeed on a DC 14 Strength saving throw or be restrained by the vines until the start of its next turn. This item requires attunement."
  },
  {
    "name": "Pearl of Power Amulet",
    "cost": 855,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "This amulet While wearing this amulet, you can use a bonus action to regain one expended spell slot of 3rd level or lower. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Pelorsun Blade (Rapier)",
    "cost": 10775,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with finesse property, dealing 1d8 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. You have advantage on attack rolls against undead creatures. This item requires attunement."
  },
  {
    "name": "Periapt of Wound Closure",
    "cost": 1287,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "While wearing this amulet, you stabilize automatically whenever you are dying at the start of your turn. Whenever you regain hit points while wearing this amulet, you regain the maximum number of hit points possible. This item requires attunement."
  },
  {
    "name": "Phalar Aluve (Longsword)",
    "cost": 6445,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 slashing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. While this weapon is on your person, you gain a +1 bonus to Charisma (Performance) checks. The sword has 6 charges and regains 1d6 expended charges daily at dawn. You can use an action to expend charges to activate one of the following effects: Shriek (3 charges). Each creature within 15 feet of you must make a DC 14 Constitution saving throw, taking 3d6 thunder damage on a failed save, or half as much damage on a successful one. Sing (3 charges). For 1 minute, you and allies within 10 feet of you deal an extra 1d4 damage with weapon attacks. This item requires attunement."
  },
  {
    "name": "Poisoner's Gloves",
    "cost": 800,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, when you deal poison damage to a creature, it must succeed on a DC 14 Constitution saving throw or be poisoned until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Poisoner's Robe",
    "cost": 403,
    "type": "Clothing",
    "rarity": "Uncommon",
    "description": "While wearing this robe, when you cast a spell that deals poison damage, you deal an extra 1d4 poison damage. This item requires attunement."
  },
  {
    "name": "Potent Robe",
    "cost": 2650,
    "type": "Clothing",
    "rarity": "Very Rare",
    "description": "While wearing this robe, when you deal damage with a cantrip, you add your Charisma modifier to the damage dealt. At the start of each of your turns, you gain temporary hit points equal to your Charisma modifier (minimum of 1). This item requires attunement."
  },
  {
    "name": "Psychic Spark",
    "cost": 436,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, when you cast magic missile, you create one additional dart. The amulet you can use an action to cast magic missile. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Punch-Drunk Bastard (Greatclub)",
    "cost": 1635,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon dealing 1d4 bludgeoning damage. While you are poisoned (such as from alcohol), you have advantage on attack rolls with this weapon, and when you hit with this weapon, each creature within 10 feet of the target takes 1d4 thunder damage. This item requires attunement."
  },
  {
    "name": "Pyroquickness Hat",
    "cost": 13225,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this hat, when you deal fire damage with a spell of 1st level or higher (not a cantrip), you catch fire (taking 1d6 fire damage at the start of each of your turns until you or another creature uses an action to put out the flames) and gain an additional bonus action on that turn. This item requires attunement."
  },
  {
    "name": "Quickspell Gloves",
    "cost": 2650,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "These gloves While wearing these gloves, you can cast a cantrip that normally requires an action as a bonus action instead (no action required). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Rain Dancer (Quarterstaff)",
    "cost": 1988,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. The quarterstaff has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast create or destroy water (create water only). This item requires attunement."
  },
  {
    "name": "Rat Bat (Greatclub)",
    "cost": 1185,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon dealing 1d4 bludgeoning damage. You have advantage on attack rolls against beasts with this weapon. This item requires attunement."
  },
  {
    "name": "Raven Gloves",
    "cost": 530,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "These gloves While wearing these gloves, you can use an action to summon a spectral raven (use raven statistics) that appears in an unoccupied space within 30 feet of you. Once you use this property, you can\\'t use it again until the next dawn. The raven is under your control and acts on your initiative. It disappears after 1 hour or when reduced to 0 hit points. This item requires attunement."
  },
  {
    "name": "Ravengard's Scourger (Morningstar)",
    "cost": 2565,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon dealing 1d8 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The morningstar has 3 charges and regains 1d3 expended charges daily at dawn. When an ally you can see is about to make an attack, you can use your reaction and expend 1 charge to direct them. That ally can make one weapon attack as part of the same reaction, adding 1d8 to the damage roll. This item requires attunement."
  },
  {
    "name": "Reason's Grasp",
    "cost": 418,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, when your rage ends, you gain 15 temporary hit points. This item requires attunement."
  },
  {
    "name": "Render of Mind and Body (Shortsword)",
    "cost": 740,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. When you attack with advantage using this magic weapon and hit, the target takes an extra 1d8 psychic damage. This item requires attunement."
  },
  {
    "name": "Returning Pike (Pike)",
    "cost": 680,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 piercing damage. This magic weapon has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you throw this weapon, it returns to your hand immediately after the attack."
  },
  {
    "name": "Reverse Rain Cloak",
    "cost": 600,
    "type": "Cloak",
    "rarity": "Uncommon",
    "description": "Curse. This cloak is cursed. While wearing it, you are constantly drenched, giving you vulnerability to lightning and cold damage but resistance to fire damage. This item requires attunement."
  },
  {
    "name": "Rhapsody (Dagger)",
    "cost": 6687,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you reduce a creature to 0 hit points with any attack or spell, you gain 1 charge (maximum 3 charges). While you have charges, you gain a +1 bonus to attack rolls and your spell save DC for each charge you have. All charges are lost when combat ends. When you hit a creature with this weapon while you are hidden or invisible, the target begins bleeding, taking 1d4 slashing damage at the start of each of its turns. A creature can use an action to stanch the bleeding with a DC 14 Wisdom (Medicine) check. This item requires attunement."
  },
  {
    "name": "Ring of Absolute Force",
    "cost": 788,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "This ring has 3 charges and regains 1d3 expended charges daily at dawn. While wearing this ring, you can use an action to expend 1 charge to cast thunderwave (save DC 12)."
  },
  {
    "name": "Ring of Arcane Synergy",
    "cost": 350,
    "type": "Ring",
    "rarity": "Rare",
    "description": "While wearing this ring, when you deal damage with a cantrip, your spell save DC increases by 1 for 2 rounds. This item requires attunement."
  },
  {
    "name": "Ring of Blink",
    "cost": 350,
    "type": "Ring",
    "rarity": "Rare",
    "description": "This ring While wearing this ring, you can use an action to cast blink. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Ring of Colour Spray",
    "cost": 420,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "This ring has 1 charge and regains its expended charge when you roll initiative. While wearing this ring, you can use an action to cast color spray (save DC 12). Once you use this property, you can\\'t use it again until the next dawn."
  },
  {
    "name": "Ring of Elemental Infusion",
    "cost": 403,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, when you deal acid, cold, fire, lightning, or thunder damage with a spell or cantrip, your next weapon attack before the end of your next turn deals an extra 1d4 damage of that type. This item requires attunement."
  },
  {
    "name": "Ring of Evasion",
    "cost": 2650,
    "type": "Ring",
    "rarity": "Very Rare",
    "description": "This ring While wearing this ring, when you fail a Dexterity saving throw, you can use your reaction to succeed instead. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Ring of Exalted Marrow",
    "cost": 5690,
    "type": "Ring",
    "rarity": "Rare",
    "description": "This ring has 2 charges and regains 1d2 expended charges daily at dawn. While wearing this ring, you can expend charges to cast the following spells: Ghoulish Touch (1 charge). As an action, make a melee spell attack (+6 to hit) against one creature within 5 feet. On a hit, the target takes 2d8 necrotic damage and is paralyzed until the end of your next turn. Exhort the Risen (2 charges). As a bonus action, you can command all undead creatures within 30 feet of you that are under your control to move up to their speed and make one melee attack. This item requires attunement."
  },
  {
    "name": "Ring of Feywild Sparks",
    "cost": 4900,
    "type": "Ring",
    "rarity": "Very Rare",
    "description": "While wearing this ring and your Tides of Chaos feature is active (sorcerer feature), whenever you cast a spell of 1st level or higher, you automatically trigger a Wild Magic Surge. This item requires attunement."
  },
  {
    "name": "Ring of Flinging",
    "cost": 375,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you gain a 1d4 bonus to damage rolls with thrown weapons."
  },
  {
    "name": "Ring of Free Action",
    "cost": 1812,
    "type": "Ring",
    "rarity": "Rare",
    "description": "While wearing this ring, difficult terrain doesn't cost you extra movement, and you can't be paralyzed or restrained. This item requires attunement."
  },
  {
    "name": "Ring of Geniality",
    "cost": 395,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you gain a +1 bonus to Charisma (Persuasion) and Charisma (Deception) checks."
  },
  {
    "name": "Ring of Jumping",
    "cost": 608,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "This ring has 3 charges and regains 1d3 expended charges daily at dawn. While wearing this ring, you can use a bonus action to expend 1 charge to triple your jump distance until the end of your turn."
  },
  {
    "name": "Ring of Mental Inhibition",
    "cost": 387,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, when a creature fails a saving throw against one of your spells or features, that creature has disadvantage on its next attack roll or ability check before the end of its next turn. This item requires attunement."
  },
  {
    "name": "Ring of Mind-Shielding",
    "cost": 1535,
    "type": "Ring",
    "rarity": "Rare",
    "description": "While wearing this ring, you have advantage on saving throws against being charmed, and you are immune to magic that allows other creatures to read your thoughts or determine if you are lying. This item requires attunement."
  },
  {
    "name": "Ring of Poison Resistance",
    "cost": 785,
    "type": "Ring",
    "rarity": "Rare",
    "description": "While wearing this ring, you have resistance to poison damage. This item requires attunement."
  },
  {
    "name": "Ring of Protection",
    "cost": 1700,
    "type": "Ring",
    "rarity": "Rare",
    "description": "While wearing this ring, you gain a +1 bonus to AC and saving throws. This item requires attunement."
  },
  {
    "name": "Ring of Regeneration",
    "cost": 4475,
    "type": "Ring",
    "rarity": "Very Rare",
    "description": "While wearing this ring, you regain 1d4 hit points at the start of each of your turns if you have at least 1 hit point. This item requires attunement."
  },
  {
    "name": "Ring of Restorative Gravity",
    "cost": 385,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, when you restore hit points to a creature, that creature is pulled up to 10 feet toward you. This item requires attunement."
  },
  {
    "name": "Ring of Salving",
    "cost": 401,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, when you restore hit points to another creature, you regain 2 hit points."
  },
  {
    "name": "Ring of Self Immolation",
    "cost": 693,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "This ring has 3 charges and regains 1d3 expended charges daily at dawn. While wearing this ring, you can use a bonus action to expend 1 charge to set yourself on fire. You take 1d6 fire damage at the start of each of your turns, but your next weapon attack before the end of your next turn deals an extra 1d4 fire damage. This effect lasts for 2 rounds or until you or another creature uses an action to put out the flames. This item requires attunement."
  },
  {
    "name": "Ring of Shadows",
    "cost": 465,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "This ring While wearing this ring, you can use an action to cast pass without trace. Once you use this property, you can\\'t use it again until the next dawn."
  },
  {
    "name": "Ring of Spiteful Thunder",
    "cost": 713,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, when you deal thunder damage to a creature that is vulnerable to thunder damage, that creature must succeed on a DC 12 Constitution saving throw or be stunned until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Ring of Truthfulness",
    "cost": 485,
    "type": "Ring",
    "rarity": "Rare",
    "description": "While wearing this ring, you have advantage on Wisdom (Insight) checks."
  },
  {
    "name": "Ring of Twilight",
    "cost": 1700,
    "type": "Ring",
    "rarity": "Rare",
    "description": "While wearing this ring and you are in dim light or darkness, you gain a +1 bonus to AC. This item requires attunement."
  },
  {
    "name": "Risky Ring",
    "cost": 2720,
    "type": "Ring",
    "rarity": "Rare",
    "description": "While wearing this ring, you have advantage on attack rolls but disadvantage on saving throws. This item requires attunement."
  },
  {
    "name": "Ritual Axe (Handaxe)",
    "cost": 680,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with light and thrown (range 20/60) properties, dealing 1d6 slashing damage. When you hit a creature with this magic weapon, it must succeed on a DC 12 Wisdom saving throw or suffer a 1d4 penalty to attack rolls and saving throws until the end of your next turn. Curse. If you have more than 25% of your hit points remaining when you hit a creature with this weapon, you take 1d6 piercing damage. This item requires attunement."
  },
  {
    "name": "Ritual Dagger (Dagger)",
    "cost": 677,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. When you hit a creature with this magic weapon, you gain a 1d4 bonus to attack rolls and saving throws until the end of your next turn. As a bonus action, you can take 1d4 slashing damage to gain a 1d4 bonus to attack rolls and saving throws until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Ritual Dagger of Shar (Dagger)",
    "cost": 677,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. This magic dagger is consecrated to Shar but has no additional mechanical benefits beyond being a magic weapon."
  },
  {
    "name": "Robe of Exquisite Focus",
    "cost": 350,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While wearing this robe, your spell save DC increases by 1. This item requires attunement."
  },
  {
    "name": "Robe of Summer",
    "cost": 612,
    "type": "Clothing",
    "rarity": "Uncommon",
    "description": "While wearing this robe, you have resistance to cold damage."
  },
  {
    "name": "Robe of Supreme Defences",
    "cost": 8500,
    "type": "Clothing",
    "rarity": "Very Rare",
    "description": "While wearing this robe and concentrating on a spell, you gain a +1 bonus to AC and add your spellcasting ability modifier to your saving throws. This item requires attunement."
  },
  {
    "name": "Robe of the Weave",
    "cost": 6736,
    "type": "Clothing",
    "rarity": "Very Rare",
    "description": "While wearing this robe, you gain a +1 bonus to spell save DC and spell attack rolls. When you succeed on a saving throw against a spell, you regain 1d6 hit points. This item requires attunement."
  },
  {
    "name": "Rupturing Blade (Rapier)",
    "cost": 736,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with finesse property, dealing 1d8 piercing damage. Searing Blood. Once on each of your turns when you hit a creature with this weapon, you can cause the wound to bleed profusely. The target takes an extra 1d6 slashing damage and must succeed on a DC 12 Constitution saving throw or take 1d4 slashing damage at the start of each of its turns. A creature can use an action to stanch the bleeding with a DC 12 Wisdom (Medicine) check. This item requires attunement."
  },
  {
    "name": "Safeguard Shield",
    "cost": 1195,
    "type": "Shield",
    "rarity": "Uncommon",
    "description": "While wielding this shield, you gain a +1 bonus to saving throws in addition to the shield's normal bonus to AC."
  },
  {
    "name": "Sarevok's Horned Helmet",
    "cost": 23080,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this helm, you gain a +1 bonus to Constitution saving throws. You have darkvision out to a range of 50 feet. If you already have darkvision, its range increases by 10 feet. The number you need to roll for a critical hit with weapon attacks is reduced by 1 (this effect stacks with similar effects). You are immune to being frightened and can't be affected by other emotion-altering conditions (such as charm person or fear). This item requires attunement."
  },
  {
    "name": "Scabby Pugilist Circlet",
    "cost": 370,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this circlet and you are within 5 feet of two or more hostile creatures, you deal an extra 2 damage with weapon attacks and unarmed strikes. This item requires attunement."
  },
  {
    "name": "Seemingly Gleaming Ring",
    "cost": 620,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you gain a +1 bonus to Charisma saving throws but suffer a -1 penalty to Wisdom saving throws. This item requires attunement."
  },
  {
    "name": "Selûne's Spear of Night (Spear)",
    "cost": 315301,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Simple melee weapon with thrown (range 20/60) and versatile (1d8) properties, dealing 1d6 piercing damage. You gain a +3 bonus to attack and damage rolls made with this magic weapon. While wielding this spear, you have advantage on Wisdom saving throws and Wisdom (Perception) checks. You have darkvision out to a range of 40 feet. If you already have darkvision, its range increases by 40 feet. The spear has 3 charges and regains 1d3 expended charges daily at dawn. You can expend charges to cast the following spells: moonbeam (1 charge, save DC 18), or as an action, you can expend 2 charges to create three motes of moonlight that orbit you for 1 minute. When a creature you can see within 30 feet makes an attack roll, you can use your reaction to expend one mote to grant advantage or impose disadvantage on that roll. This item requires attunement."
  },
  {
    "name": "Sentient Amulet (Rare)",
    "cost": 650,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "This amulet has 4 charges and regains 1d4 expended charges daily at dawn. While wearing this amulet, you can expend charges to cast the following spells: shatter (2 charges, save DC 14), or as a bonus action, you can expend 4 charges to regain one expended use of your Ki feature. Curse. This amulet houses a trapped sentient being. The DM determines the risks and consequences of using this item. This item requires attunement."
  },
  {
    "name": "Sentient Amulet (Very Rare)",
    "cost": 3250,
    "type": "Amulet",
    "rarity": "Very Rare",
    "description": "This amulet has 5 charges and regains 1d4+1 expended charges daily at dawn. While wearing this amulet, you can expend charges to cast the following spells: shatter (2 charges, save DC 16), or as a bonus action, you can expend 5 charges to regain one expended use of your Ki feature. Curse. This amulet houses a trapped sentient being. The DM determines the risks and consequences of using this item. This item requires attunement."
  },
  {
    "name": "Sentinel Shield",
    "cost": 1900,
    "type": "Shield",
    "rarity": "Rare",
    "description": "While wielding this shield, you gain a +3 bonus to initiative rolls and advantage on Wisdom (Perception) checks. When a creature hits you with a melee attack, you can use your reaction to force the attacker to make a DC 14 Dexterity saving throw. On a failed save, the attacker is knocked prone. This item requires attunement."
  },
  {
    "name": "Seraphic Pugilist Gloves",
    "cost": 487,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, your unarmed strikes deal an extra 1d4 radiant damage. The gloves you can use an action to cast guiding bolt. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Servitor of the Black Hand Gloves",
    "cost": 667,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, your unarmed strikes deal an extra 1d4 force damage. The gloves you can use an action to cast fear (save DC 14). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Sethan (Greataxe)",
    "cost": 14830,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 1d12 slashing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. The greataxe has 2 charges and regains 1d2 expended charges daily at dawn. You can expend charges to activate the following effects: Spiritual Greataxe (1 charge). As a bonus action, you summon a spectral greataxe that hovers near you for 1 minute. As a bonus action on subsequent turns, you can move the axe up to 20 feet and make one melee spell attack (+8 to hit) against a creature within 5 feet of it. On a hit, the target takes 1d8+4 force damage. Reduce (2 charges). As an action, target one creature within 30 feet. The target must succeed on a DC 16 Constitution saving throw or be reduced in size (as the enlarge/reduce spell, reduce only) for 1 minute. This item requires attunement."
  },
  {
    "name": "Shade-Slayer Cloak",
    "cost": 8050,
    "type": "Cloak",
    "rarity": "Very Rare",
    "description": "While wearing this cloak and you are hidden, the number you need to roll for a critical hit with weapon attacks is reduced by 1 (this effect stacks with similar effects). This item requires attunement."
  },
  {
    "name": "Shadow Blade Ring",
    "cost": 968,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "This ring has 3 charges and regains 1d3 expended charges daily at dawn. While wearing this ring, you can use a bonus action to expend 1 charge to cast shadow blade."
  },
  {
    "name": "Shadow Lantern (Club)",
    "cost": 1555,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon dealing 1d4 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The lantern You can use an action to summon a wraith bound to the lantern. Once you use this property, you can\\'t use it again until the next dawn. The wraith appears in an unoccupied space within 10 feet of you, acts on its own initiative, obeys your verbal commands, and can't be turned. It remains for 1 hour, until it is reduced to 0 hit points, or until you dismiss it as an action. This item requires attunement."
  },
  {
    "name": "Shadow of Menzoberranzan",
    "cost": 440,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "This hood While wearing this hood, you can use an action to become invisible for 2 rounds or until you make an attack or cast a spell. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Shadow-Cloaked Ring",
    "cost": 403,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you deal an extra 1d4 damage with weapon and unarmed attacks against creatures that are lightly or heavily obscured, or creatures made of shadow."
  },
  {
    "name": "Shapeshifter Hat",
    "cost": 3775,
    "type": "Headwear",
    "rarity": "Very Rare",
    "description": "While wearing this hat, you gain one additional use of your Wild Shape feature. Once you use this additional Wild Shape, you can't do so again until you finish a long rest. This item requires attunement."
  },
  {
    "name": "Shapeshifter's Boon Ring",
    "cost": 375,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring and you are under the effect of a polymorph spell, Wild Shape, or disguise self, you gain a 1d4 bonus to all ability checks."
  },
  {
    "name": "Shar's Spear of Evening (Spear)",
    "cost": 80801,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Simple melee weapon with thrown (range 20/60) and versatile (1d8) properties, dealing 1d6 piercing damage. You gain a +3 bonus to attack and damage rolls made with this magic weapon. While wielding this spear, you have advantage on saving throws while you are in dim light or darkness, and you are immune to being blinded. You deal an extra 1d6 damage with this weapon to creatures that are lightly or heavily obscured. The spear has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast darkness. The darkness is magical and can't be dispelled except by you (no action required). This item requires attunement."
  },
  {
    "name": "Shar's Temptation",
    "cost": 788,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "This amulet has 3 charges and regains 1d3 expended charges daily at dawn. While wearing this amulet, you can use an action to expend 1 charge to cast charm person (save DC 12)."
  },
  {
    "name": "Shattered Flail (Mace)",
    "cost": 1246,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon dealing 1d6 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with this weapon, you regain 1d6 hit points. Curse. This weapon is cursed. At the end of each of your turns, if you didn't hit a creature with this weapon on that turn, you must succeed on a DC 14 Wisdom saving throw or use your action on your next turn to make one melee attack against a random creature within reach. This item requires attunement."
  },
  {
    "name": "Shelter of Athkatla",
    "cost": 1205,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While wearing this garment, you have advantage on saving throws against spells. The garment you can use an action to cast mirror image. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Shield (Hope)",
    "cost": 14510,
    "type": "Shield",
    "rarity": "Very Rare",
    "description": "While wielding this shield, you gain a +2 bonus to AC in addition to the shield's normal bonus. This item requires attunement."
  },
  {
    "name": "Shield of Devotion",
    "cost": 19910,
    "type": "Shield",
    "rarity": "Very Rare",
    "description": "While wielding this shield, you gain a +1 bonus to AC in addition to the shield's normal bonus, and you gain one 1st-level spell slot. When a creature hits you with a melee attack, you can use your reaction to force the attacker to make a DC 16 Dexterity saving throw. On a failed save, the attacker is knocked prone. The shield you can use an action to cast aid at 3rd level. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Shield of Scorching Reprisal",
    "cost": 2605,
    "type": "Shield",
    "rarity": "Rare",
    "description": "While wielding this shield, you have resistance to fire damage. When a creature hits you with a melee attack, you can use your reaction to force the attacker to make a DC 14 Dexterity saving throw. On a failed save, the attacker is knocked prone. The shield has 3 charges and regains 1d3 expended charges daily at dawn. When a creature within 5 feet hits you with a melee attack, you can use your reaction to expend 1 charge. The attacker takes 2d8 fire damage. This item requires attunement."
  },
  {
    "name": "Shield of Shielding",
    "cost": 520,
    "type": "Shield",
    "rarity": "Rare",
    "description": "This shield While wielding this shield, you can use a reaction to expend the charge when you are hit by an attack to cast shield. This item requires attunement."
  },
  {
    "name": "Shield of the Undevout",
    "cost": 17930,
    "type": "Shield",
    "rarity": "Very Rare",
    "description": "While wielding this shield, you gain a +1 bonus to AC in addition to the shield's normal bonus, and you gain one 1st-level spell slot. Creatures have disadvantage on saving throws against your spells and effects that would frighten them. When a creature hits you with a melee attack, you can use your reaction to force the attacker to make a DC 16 Dexterity saving throw. On a failed save, the attacker is knocked prone. This item requires attunement."
  },
  {
    "name": "Shifting Corpus Ring",
    "cost": 650,
    "type": "Ring",
    "rarity": "Rare",
    "description": "This ring has 2 charges and regains 1d2 expended charges daily at dawn. While wearing this ring, you can expend charges to cast the following spells: invisibility (1 charge), blur (1 charge). This item requires attunement."
  },
  {
    "name": "Shining Staver-of-Skulls (Light Hammer)",
    "cost": 677,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with light and thrown (range 20/60) properties, dealing 1d4 bludgeoning damage. This weapon sheds bright light in a 15-foot radius and dim light for an additional 15 feet."
  },
  {
    "name": "Shortsword of First Blood (Shortsword)",
    "cost": 728,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. When you hit a creature that has all its hit points with this magic weapon, the target takes an extra 1d8 piercing damage."
  },
  {
    "name": "Sickle of BOOOAL (Sickle)",
    "cost": 1811,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with light property, dealing 1d4 slashing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. You have advantage on attack rolls with this weapon against creatures that are bleeding. Special. This weapon's power is tied to the worship of BOOOAL by kuo-toa. If no kuo-toa worship BOOOAL, the weapon loses its magical properties. This item requires attunement."
  },
  {
    "name": "Silver Pendant",
    "cost": 407,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, you can cast guidance at will."
  },
  {
    "name": "Silver Sword of the Astral Plane (Greatsword)",
    "cost": 46137,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 slashing damage. You gain a +3 bonus to attack and damage rolls made with this magic weapon. If you are a githyanki, you deal an extra 1d6 psychic damage with this weapon, have advantage on Intelligence, Wisdom, and Charisma saving throws, have resistance to psychic damage, and are immune to being charmed. This item requires attunement."
  },
  {
    "name": "Skybreaker (Light Hammer)",
    "cost": 1033,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with light and thrown (range 20/60) properties, dealing 1d4 bludgeoning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The hammer You can use a bonus action to expend the charge. The next time you hit with this weapon before the end of your turn, the attack deals an extra 1d6 fire damage, and the target catches fire, taking 1d6 fire damage at the start of each of its turns. A creature can use an action to extinguish the flames."
  },
  {
    "name": "Slicing Shortsword (Shortsword)",
    "cost": 895,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. When you attack with advantage using this weapon and hit, the target begins bleeding, taking 1d4 slashing damage at the start of each of its turns. A creature can use an action to stanch the bleeding with a DC 12 Wisdom (Medicine) check. This item requires attunement."
  },
  {
    "name": "Slinging Shoes",
    "cost": 1037,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, you gain a +1 bonus to Dexterity saving throws. When you throw your boots (improvised weapon), they deal an extra 2d4 psychic damage and return to your feet immediately after the attack. This item requires attunement."
  },
  {
    "name": "Smuggler's Ring",
    "cost": 415,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you gain a +2 bonus to Dexterity (Stealth) and Dexterity (Sleight of Hand) checks, but you suffer a -1 penalty to Charisma ability checks and saving throws. This item requires attunement."
  },
  {
    "name": "Snow-Dusted Monastery Gloves",
    "cost": 547,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, your unarmed strikes deal an extra 1d4 cold damage. The gloves you can use an action to cast ice knife (save DC 14). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Snowburst Ring",
    "cost": 375,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, when you deal cold damage to a creature, the ground in a 15-foot radius around that creature becomes covered in ice (difficult terrain) until the start of your next turn. This item requires attunement."
  },
  {
    "name": "Sorrow (Glaive)",
    "cost": 860,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 slashing damage. Once on each of your turns when you hit a creature with this weapon, you can cause spectral chains to lash out. The target must succeed on a DC 14 Strength saving throw or be restrained until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Soulbreaker Greatsword (Greatsword)",
    "cost": 1787,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 slashing damage. You gain a +2 bonus to initiative rolls while this weapon is on your person. If you are a githyanki, you deal an extra 1d4 psychic damage with this weapon. This item requires attunement."
  },
  {
    "name": "Spaceshunt Boots",
    "cost": 650,
    "type": "Boots",
    "rarity": "Rare",
    "description": "These boots While wearing these boots, you can use an action to cast dimension door. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Spear of Night (Spear)",
    "cost": 751,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with thrown (range 20/60) and versatile (1d8) properties, dealing 1d6 piercing damage. This spear has unique properties related to a specific quest involving the Nightsong. The DM determines its capabilities in that context. This item requires attunement."
  },
  {
    "name": "Speedy Reply (Scimitar)",
    "cost": 775,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 slashing damage. When you hit a creature with this weapon, your walking speed increases by 10 feet until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Spell Savant Amulet",
    "cost": 1287,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "While wearing this amulet, you gain one additional 2nd-level spell slot. This item requires attunement."
  },
  {
    "name": "Spellcrux Amulet",
    "cost": 6925,
    "type": "Amulet",
    "rarity": "Very Rare",
    "description": "This amulet While wearing this amulet, you can use a bonus action to regain one expended spell slot of any level. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Spellmight Gloves",
    "cost": 3842,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "While wearing these gloves, when you make a spell attack roll, you can choose to take a -5 penalty to the attack roll. If the attack hits, you deal an extra 1d8 damage. This item requires attunement."
  },
  {
    "name": "Spellseeking Gloves",
    "cost": 485,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, when you make a spell attack roll, you can expend sorcery points to gain advantage on the roll. Cantrips cost 1 sorcery point, and spells cost sorcery points equal to the spell's level. This item requires attunement."
  },
  {
    "name": "Spellthief (Longbow)",
    "cost": 1205,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial ranged weapon with ammunition (range 150/600), heavy, and two-handed properties, dealing 1d8 piercing damage. This bow When you score a critical hit with this weapon, you can regain one expended 1st-level spell slot (no action required). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Spiderstep Boots",
    "cost": 443,
    "type": "Boots",
    "rarity": "Uncommon",
    "description": "While wearing these boots, you are immune to being restrained by webs, and your movement isn't reduced by webbed surfaces."
  },
  {
    "name": "Spineshudder Amulet",
    "cost": 1080,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, when you deal damage with a ranged spell attack, the target becomes vulnerable to thunder damage until the end of your next turn (unless it has resistance or immunity to thunder damage). This item requires attunement."
  },
  {
    "name": "Springstep Boots",
    "cost": 450,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, when you take the Dash action or use a similar feature that increases your movement, your walking speed increases by 10 feet for 3 rounds. This item requires attunement."
  },
  {
    "name": "Spurred Band",
    "cost": 460,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring and you have half your hit points or fewer, your walking speed increases by 10 feet at the start of your turn for 1 round. This item requires attunement."
  },
  {
    "name": "Staff of a Mumbling Wizard (Quarterstaff)",
    "cost": 713,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. While holding this staff, you can cast fire bolt at will. You use your spellcasting ability for the spell. This item requires attunement."
  },
  {
    "name": "Staff of Arcane Blessing (Quarterstaff)",
    "cost": 750,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. While holding this staff, you can cast a special version of bless called Mystra's Blessing. When you cast this version, targets gain a d4 bonus to weapon attack rolls and saving throws, and a 2d4 bonus to spell attack rolls. The staff you can use an action to cast bless (as Mystra's Blessing). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Staff of Cherished Necromancy (Quarterstaff)",
    "cost": 5770,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. Creatures have disadvantage on saving throws against your necromancy spells while you hold this staff. When you reduce a creature to 0 hit points with a spell while holding this staff, you gain 10 temporary hit points. These temporary hit points last until you finish a long rest. This item requires attunement."
  },
  {
    "name": "Staff of Crones (Quarterstaff)",
    "cost": 1988,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. The staff has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast ray of sickness (save DC 12). This item requires attunement."
  },
  {
    "name": "Staff of Interruption (Quarterstaff)",
    "cost": 1155,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to spell save DC and spell attack rolls while holding this staff. The staff You can use your reaction to cast counterspell. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Staff of Spellpower (Quarterstaff)",
    "cost": 6692,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to spell save DC and spell attack rolls while holding this staff. The staff You can use an action to expend the charge. For the next minute, when you cast a spell that deals acid, cold, fire, lightning, or thunder damage, you deal an extra 1d8 damage of that type. This item requires attunement."
  },
  {
    "name": "Staff of the Emperor (Quarterstaff)",
    "cost": 1425,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to spell save DC and spell attack rolls while holding this staff. When a creature succeeds on a saving throw against a spell you cast while holding this staff, that creature must make a DC 14 Intelligence saving throw or be stunned until the end of your next turn. This item requires attunement."
  },
  {
    "name": "Staff of the Ram (Quarterstaff)",
    "cost": 9625,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. Once on each of your turns when you hit a creature with this weapon, you can push the target up to 10 feet away from you. If the target is Medium or smaller, it must also succeed on a DC 16 Constitution saving throw or be stunned until the end of your next turn. This effect has no impact on dragons or Huge or larger creatures. This item requires attunement."
  },
  {
    "name": "Stalker Gloves",
    "cost": 912,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to initiative rolls. When you deal Sneak Attack damage while wearing these gloves, you deal an extra 1d4 force damage. This item requires attunement."
  },
  {
    "name": "Steelforge Sword (Shortsword)",
    "cost": 685,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. This magic shortsword is well-crafted but has no additional magical properties beyond being a magic weapon for purposes of overcoming resistance."
  },
  {
    "name": "Steelwatcher Helmet",
    "cost": 1250,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this helm, you are immune to being blinded. This item requires attunement."
  },
  {
    "name": "Stillmaker (Dagger)",
    "cost": 3777,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. The dagger you can use an action to cast hold person (save DC 16). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Strange Conduit Ring",
    "cost": 403,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring and concentrating on a spell, your weapon attacks deal an extra 1d4 psychic damage. This item requires attunement."
  },
  {
    "name": "Strange Tendril Amulet",
    "cost": 650,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "This amulet While wearing this amulet, you can use an action to cast Evard's black tentacles (save DC 14). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Sunwalker's Gift",
    "cost": 520,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you have darkvision out to a range of 60 feet."
  },
  {
    "name": "Surgeon's Subjugation Amulet",
    "cost": 350,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "This amulet While wearing this amulet, when you score a critical hit against a humanoid, you can paralyze the target for 2 rounds (no action required). Once you use this property, you can\\'t use it again until the next dawn. The target can repeat the saving throw (DC 14 Constitution) at the end of each of its turns, ending the effect on a success. This item requires attunement."
  },
  {
    "name": "Sussur Dagger (Dagger)",
    "cost": 752,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. When you hit a creature with this weapon, it must succeed on a DC 14 Constitution saving throw or be silenced until the end of your next turn. A silenced creature can't cast spells with verbal components or activate magic items that require command words. This item requires attunement."
  },
  {
    "name": "Sussur Greatsword (Greatsword)",
    "cost": 800,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 slashing damage. When you hit a creature with this weapon, it must succeed on a DC 14 Constitution saving throw or be silenced until the end of your next turn. A silenced creature can't cast spells with verbal components or activate magic items that require command words. This item requires attunement."
  },
  {
    "name": "Sussur Sickle (Sickle)",
    "cost": 751,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with light property, dealing 1d4 slashing damage. When you hit a creature with this weapon, it must succeed on a DC 14 Constitution saving throw or be silenced until the end of your next turn. A silenced creature can't cast spells with verbal components or activate magic items that require command words. This item requires attunement."
  },
  {
    "name": "Svartlebee's Woundseeker (Greatsword)",
    "cost": 725,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 slashing damage. When you attack a creature with this weapon that has taken damage since the start of its last turn, you gain a 1d4 bonus to the attack roll. This item requires attunement."
  },
  {
    "name": "Swires' Sledboard",
    "cost": 4032,
    "type": "Shield",
    "rarity": "Very Rare",
    "description": "While wielding this shield, at the start of each of your turns, your next weapon attack before the end of your turn deals an extra 1d6 force damage. This effect lasts for 2 rounds and can stack. When a creature hits you with a melee attack, you can use your reaction to force the attacker to make a DC 16 Dexterity saving throw. On a failed save, the attacker is knocked prone. This item requires attunement."
  },
  {
    "name": "Swiresy Shoes",
    "cost": 3725,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, you gain a +1 bonus to Dexterity (Acrobatics) checks and your jump distance increases by 5 feet."
  },
  {
    "name": "Sword of Chaos (Greatsword)",
    "cost": 10836,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 slashing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with this weapon, you regain 1d6 hit points. This item requires attunement."
  },
  {
    "name": "Sword of Clutching Umbra (Shortsword)",
    "cost": 1042,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. Shadowsoaked Blow. Once on each of your turns when you hit a creature with this weapon, you can shroud yourself in shadow. Your next attack with this weapon before the end of your next turn is made with advantage and deals an extra 1d6 necrotic damage on a hit. This item requires attunement."
  },
  {
    "name": "Sword of Justice (Greatsword)",
    "cost": 815,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 2d6 slashing damage. The sword you can use a bonus action to cast shield of faith. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Sword of Life Stealing (Shortsword)",
    "cost": 10212,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you score a critical hit against a creature that isn't a construct or undead, you gain 10 temporary hit points and the target takes an extra 1d10 necrotic damage. This item requires attunement."
  },
  {
    "name": "Sword of Screams (Rapier)",
    "cost": 700,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with finesse property, dealing 1d8 piercing damage. This magic rapier is imbued with dark energies but has no additional mechanical benefits beyond being a magic weapon."
  },
  {
    "name": "Sword of the Emperor (Longsword)",
    "cost": 2202,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 slashing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon, and a +2 bonus to saving throws against spells while wielding it. You deal an extra 1d4 damage with this weapon against shapechangers and creatures under the effect of a polymorph spell. This item requires attunement."
  },
  {
    "name": "Swordmaster Gloves",
    "cost": 575,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you are proficient with shortswords, longswords, and greatswords, and you gain a +1 bonus to melee attack rolls. This item requires attunement."
  },
  {
    "name": "Sylvan Scimitar (Scimitar)",
    "cost": 700,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 slashing damage. You can use your spellcasting ability modifier instead of your Dexterity modifier for attack and damage rolls with this magic weapon. This item requires attunement."
  },
  {
    "name": "Tarnished Charm",
    "cost": 375,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "While wearing this amulet, the DC for your death saving throws is reduced to 5 instead of 10. This item requires attunement."
  },
  {
    "name": "The Amulet of Lost Voices",
    "cost": 530,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "This amulet While wearing this amulet, you can use an action to cast speak with dead. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "The Baneful (Shortsword)",
    "cost": 1385,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 piercing damage. This weapon only functions if it is your pact weapon as a warlock. You are always proficient with this weapon. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with this weapon, it must succeed on a DC 14 Charisma saving throw or suffer the effects of the bane spell until the end of your next turn. This item requires attunement."
  },
  {
    "name": "The Blast Pendant",
    "cost": 375,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "This amulet While wearing this amulet, when you have accumulated lightning charges (from other items or effects), you can use a bonus action to expend the charge and consume all lightning charges. Your next lightning spell or cantrip before the end of your turn deals extra lightning damage equal to the number of charges consumed. This item requires attunement."
  },
  {
    "name": "The Blood of Lathander (Mace)",
    "cost": 107955,
    "type": "Weapon",
    "rarity": "Legendary",
    "description": "Simple melee weapon dealing 1d6 bludgeoning damage. You gain a +3 bonus to attack and damage rolls made with this magic weapon. This weapon sheds bright light in a 20-foot radius and dim light for an additional 20 feet. Fiends and undead standing in the light during combat must succeed on a DC 18 Constitution saving throw at the start of their turn or be blinded until the start of their next turn. The mace has 2 charges and regains 1d2 expended charges daily at dawn. When you are reduced to 0 hit points while holding this mace, you can expend 1 charge (no action required). If you do, you instead drop to half your hit point maximum (rounded down), and each ally within 30 feet regains 1d6 hit points. You can also expend 1 charge to cast sunbeam (save DC 18). This item requires attunement."
  },
  {
    "name": "The Dancing Breeze (Glaive)",
    "cost": 8970,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 slashing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. This item requires attunement."
  },
  {
    "name": "The Dead Shot (Longbow)",
    "cost": 15750,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial ranged weapon with ammunition (range 150/600), heavy, and two-handed properties, dealing 1d8 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. The number you need to roll for a critical hit with this weapon is reduced by 1 (this effect stacks with similar effects). While making ranged attacks with this weapon without disadvantage, you double your proficiency bonus for the attack roll. This item requires attunement."
  },
  {
    "name": "The Deathstalker Mantle",
    "cost": 440,
    "type": "Cloak",
    "rarity": "Rare",
    "description": "While wearing this cloak, once on each of your turns when you reduce a creature to 0 hit points, you can become invisible for 2 rounds or until you make an attack or cast a spell. This item requires attunement."
  },
  {
    "name": "The Ever-Seeing Eye",
    "cost": 788,
    "type": "Amulet",
    "rarity": "Uncommon",
    "description": "This amulet has 3 charges and regains 1d3 expended charges daily at dawn. While wearing this amulet, you can use an action to expend 1 charge to cast protection from evil and good."
  },
  {
    "name": "The Graceful Cloth (Araj)",
    "cost": 2282,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While wearing this garment, your Dexterity score increases by 2, to a maximum of 20. You gain a +1 bonus to unarmed strike attack rolls, and your unarmed strikes deal an extra 1 damage. This item requires attunement."
  },
  {
    "name": "The Graceful Cloth (Esther)",
    "cost": 5622,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While wearing this garment, your Dexterity score increases by 2, to a maximum of 20. You gain a +1 bonus to Dexterity saving throws, and your jump distance increases by 5 feet. This item requires attunement."
  },
  {
    "name": "The Joltshooter (Longbow)",
    "cost": 1425,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial ranged weapon with ammunition (range 150/600), heavy, and two-handed properties, dealing 1d8 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you deal damage with this weapon, you gain 2 lightning charges. (Lightning charges are typically tracked separately and can be consumed by other items or effects in the campaign.) This item requires attunement."
  },
  {
    "name": "The Lifebringer",
    "cost": 391,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this helm, when you gain lightning charges (from other items or effects), you gain 3 temporary hit points. This item requires attunement."
  },
  {
    "name": "The Long Arm of the Gur (Heavy Crossbow)",
    "cost": 1425,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial ranged weapon with ammunition (range 100/400), heavy, loading, and two-handed properties, dealing 1d10 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. You gain a 1d4 bonus to attack and damage rolls with this weapon when attacking undead creatures. This item requires attunement."
  },
  {
    "name": "The Mighty Cloth",
    "cost": 2772,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While wearing this garment, your Strength score increases by 2, to a maximum of 20. You are immune to being pushed by spells or effects, and you have advantage on saving throws against being restrained. This item requires attunement."
  },
  {
    "name": "The Pointy Hat",
    "cost": 462,
    "type": "Headwear",
    "rarity": "Rare",
    "description": "While wearing this hat, you add your Intelligence modifier to Charisma (Persuasion) checks. This item requires attunement."
  },
  {
    "name": "The Protecty Sparkswall",
    "cost": 1700,
    "type": "Clothing",
    "rarity": "Rare",
    "description": "While wearing this garment, your spell save DC increases by 1. While you have lightning charges (from other items or effects), you gain a +1 bonus to AC and saving throws. This item requires attunement."
  },
  {
    "name": "The Real Sparky Sparkswall",
    "cost": 460,
    "type": "Shield",
    "rarity": "Uncommon",
    "description": "This shield While wielding this shield and you have at least 3 lightning charges (from other items or effects), you can use an action to expend the charge and consume 3 lightning charges. Each creature within 10 feet of you takes 1d4 lightning damage. This item requires attunement."
  },
  {
    "name": "The Reviving Hands",
    "cost": 7420,
    "type": "Gloves",
    "rarity": "Very Rare",
    "description": "While wearing these gauntlets, you gain a +1 bonus to Strength saving throws. When you restore hit points to a creature, that creature gains resistance to bludgeoning, piercing, and slashing damage until the start of your next turn. When you restore a creature to life, that creature gains the benefit of the death ward spell for 8 hours. The gauntlets you can use an action to cast revivify. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "The Sacred Star (Morningstar)",
    "cost": 9512,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon dealing 1d8 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with this weapon, that creature becomes more vulnerable to radiant damage until the end of your next turn. The next time it takes radiant damage before the end of your next turn, it takes an extra 1d4 radiant damage. When you hit an undead creature with this weapon, it must succeed on a DC 16 Wisdom saving throw or be turned for 1 minute. This item requires attunement."
  },
  {
    "name": "The Shadespell Circlet",
    "cost": 375,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this circlet and you are in dim light or darkness, your spell save DC increases by 1. This item requires attunement."
  },
  {
    "name": "The Skinburster (Halberd)",
    "cost": 411,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 slashing damage. When you hit a creature with this magic weapon, your next weapon attack before the end of your next turn deals an extra 1d6 force damage. This effect lasts for 2 rounds and can stack. This item requires attunement."
  },
  {
    "name": "The Sparkle Hands",
    "cost": 785,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, when you hit a creature with an unarmed strike, you gain 2 lightning charges (typically tracked separately for use with other items). While you have lightning charges, you have advantage on attack rolls against creatures wearing metal armor or constructs made of metal. This item requires attunement."
  },
  {
    "name": "The Sparkswall",
    "cost": 1910,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, you are immune to being paralyzed by lightning effects and have resistance to lightning damage."
  },
  {
    "name": "The Sparky Points (Trident)",
    "cost": 1380,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with thrown (range 20/60) and versatile (1d8) properties, dealing 1d6 piercing damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you deal damage with this weapon, you gain 2 lightning charges (typically tracked separately for use with other items). This item requires attunement."
  },
  {
    "name": "The Spectator Eyes",
    "cost": 3640,
    "type": "Amulet",
    "rarity": "Very Rare",
    "description": "This amulet has 2 charges and regains 1d2 expended charges daily at dawn. While wearing this amulet, you can expend charges to activate the following effects: Ray of Fear (1 charge). As an action, you can target one creature within 60 feet. The target must succeed on a DC 16 Wisdom saving throw or be frightened of you for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on a success. Wounding Ray (1 charge). As an action, make a ranged spell attack (+8 to hit) against one creature within 60 feet. On a hit, the target takes 3d10 necrotic damage. This item requires attunement."
  },
  {
    "name": "The Speedy Lightfeet",
    "cost": 575,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, you gain a +1 bonus to Strength (Athletics) checks. When you take the Dash action or use a similar feature, you gain 3 lightning charges (typically tracked separately for use with other items). This item requires attunement."
  },
  {
    "name": "The Spellsparkler (Quarterstaff)",
    "cost": 975,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to spell attack rolls while holding this staff. When you deal damage with a spell or cantrip while holding this staff, you gain 2 lightning charges (typically tracked separately for use with other items). This item requires attunement."
  },
  {
    "name": "The Undead Bane (Greataxe)",
    "cost": 731,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 1d12 slashing damage. This weapon deals an extra 1d6 radiant damage to undead."
  },
  {
    "name": "The Watcher's Guide (Spear)",
    "cost": 688,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with thrown (range 20/60) and versatile (1d8) properties, dealing 1d6 piercing damage. When you miss a creature with an attack using this magic weapon, the next attack roll against that creature before the end of your next turn has advantage. This item requires attunement."
  },
  {
    "name": "The Watersparkers",
    "cost": 350,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, water within 10 feet of you becomes electrified during combat. When you start your turn standing on an electrified water surface, you gain 3 lightning charges (typically tracked separately for use with other items). This item requires attunement."
  },
  {
    "name": "The Whispering Promise",
    "cost": 375,
    "type": "Ring",
    "rarity": "Uncommon",
    "description": "While wearing this ring, when you restore hit points to a creature, that creature gains the benefit of the bless spell for 1 minute (no concentration required). This item requires attunement."
  },
  {
    "name": "Thermoarcanic Gloves",
    "cost": 403,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, when you deal fire damage, your next weapon attack before the end of your next turn deals an extra 1d4 fire damage. This item requires attunement."
  },
  {
    "name": "Thermodynamo Axe (Battleaxe)",
    "cost": 897,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 slashing damage. When you deal damage with this weapon, your next weapon attack before the end of your next turn deals an extra 1d4 fire damage. This item requires attunement."
  },
  {
    "name": "Thorn Blade (Scimitar)",
    "cost": 947,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with finesse and light properties, dealing 1d6 slashing damage. While concentrating on a spell, you deal an extra 1d4 poison damage with this weapon. The scimitar you can use a bonus action to cast ensnaring strike. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Thunderpalm Strikers",
    "cost": 1547,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, your unarmed strikes deal an extra 1d4 thunder damage. You can use an action to cast thunderwave (save DC 14). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Til Death Do Us Part",
    "cost": 3700,
    "type": "Ring",
    "rarity": "Rare",
    "description": "While wearing this ring, you can use an action to cast beacon of hope. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Titanstring Bow (Longbow)",
    "cost": 2800,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial ranged weapon with ammunition (range 150/600), heavy, and two-handed properties, dealing 1d8 piercing damage. When you make a ranged attack with this weapon, you add your Strength modifier to the damage roll instead of your Dexterity modifier. This item requires attunement."
  },
  {
    "name": "Torch of Revocation (Club)",
    "cost": 8950,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Simple melee weapon dealing 1d4 bludgeoning damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. This weapon sheds bright light in a 20-foot radius and dim light for an additional 20 feet. This item requires attunement."
  },
  {
    "name": "Trident of the Waves (Trident)",
    "cost": 8955,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with thrown (range 20/60) and versatile (1d8) properties, dealing 1d6 piercing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with this weapon, the ground in a 10-foot radius around that creature becomes flooded with water (difficult terrain) until the start of your next turn. This item requires attunement."
  },
  {
    "name": "Twist of Fortune (Morningstar)",
    "cost": 1350,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon dealing 1d8 piercing damage. When you roll a 1 or 2 on a damage die for an attack with this weapon, you can reroll that die and must use the new roll."
  },
  {
    "name": "Tyrannical Jackboots",
    "cost": 2395,
    "type": "Boots",
    "rarity": "Uncommon",
    "description": "While wearing these boots, you gain a +1 bonus to Charisma checks and Charisma saving throws."
  },
  {
    "name": "Uncovered Mysteries",
    "cost": 3470,
    "type": "Amulet",
    "rarity": "Rare",
    "description": "This amulet While wearing this amulet, you can use an action to cast detect thoughts (save DC 14). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Unflinching Protector Amulet",
    "cost": 14000,
    "type": "Amulet",
    "rarity": "Very Rare",
    "description": "This amulet has 3 charges and regains 1d4 expended charges daily at dawn. While wearing this amulet, when an ally within 30 feet of you is targeted by an attack, you can use your reaction to expend 1 charge to cause that attack to automatically miss. This item requires attunement."
  },
  {
    "name": "Unlucky Thief's Gloves",
    "cost": 975,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, when you roll a 1 or 2 on a damage die for a spell attack, you can reroll that die once and must use the new roll. This item requires attunement."
  },
  {
    "name": "Unseen Menace (Pike)",
    "cost": 2180,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Martial melee weapon with heavy, reach, and two-handed properties, dealing 1d10 piercing damage. This weapon is invisible while you wield it. You can't be disarmed of this weapon, you have advantage on attack rolls with it, and you score a critical hit on a roll of 19 or 20. When you miss with an attack using this weapon, it becomes visible until the end of your next turn."
  },
  {
    "name": "Unwanted Masterwork Gauntlets",
    "cost": 6075,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gauntlets, you gain a +1 bonus to attack rolls and a +1 bonus to Strength saving throws. This item requires attunement"
  },
  {
    "name": "Unwanted Masterwork Greaves",
    "cost": 575,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, you gain a +1 bonus to Strength (Athletics) checks."
  },
  {
    "name": "Varsh Ko'kuu's Boots",
    "cost": 1317,
    "type": "Boots",
    "rarity": "Uncommon",
    "description": "While wearing these boots, you have resistance to acid damage."
  },
  {
    "name": "Veil of the Morning",
    "cost": 6475,
    "type": "Clothing",
    "rarity": "Very Rare",
    "description": "While wearing this garment, undead creatures have disadvantage on attack rolls against you, and you have advantage on saving throws against their actions and spells.  This item requires attunement."
  },
  {
    "name": "Very Heavy Greataxe (Greataxe)",
    "cost": 705,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with heavy and two-handed properties, dealing 1d12 slashing damage. Once on each of your turns when you hit a Large or larger creature with this weapon, you can make one additional melee weapon attack against a different creature within your reach."
  },
  {
    "name": "Vest of Soul Rejuvenation",
    "cost": 4475,
    "type": "Clothing",
    "rarity": "Very Rare",
    "description": "While wearing this vest, when you succeed on a saving throw against a spell, you regain 1d4 hit points. When a creature misses you with an attack, you can use your reaction to make one unarmed strike against that creature. This item requires attunement."
  },
  {
    "name": "Viconia's Walking Fortress",
    "cost": 76510,
    "type": "Shield",
    "rarity": "Legendary",
    "description": "While wielding this shield, you gain a +2 bonus to AC in addition to the shield's normal bonus. You have advantage on saving throws against spells, and spell attack rolls against you have disadvantage. When a creature hits you with a melee attack, you can use your reaction to deal 2d4 force damage to the attacker and force it to make a DC 18 Dexterity saving throw. On a failed save, the attacker is knocked prone. The shield has 4 charges and regains 1d4 expended charges daily at dawn. You can expend charges to activate the following effects: Reflective Shell (3 charges). As an action, you create a magical barrier around yourself for 1 minute. Ranged spell attacks against you have disadvantage, and if a ranged spell attack misses you, the spell is reflected back at the caster. Warding Bond (1 charge). You can cast warding bond. This item requires attunement."
  },
  {
    "name": "Vision of the Absolute (Spear)",
    "cost": 1941,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with thrown (range 20/60) and versatile (1d8) properties, dealing 1d6 piercing damage. When you hit a creature with this weapon, it must succeed on a DC 12 Dexterity saving throw or be blinded until the end of your next turn. You deal an extra 2d6 damage with this weapon to creatures that have multiple sets of eyes (such as beholders or spiders). This item requires attunement."
  },
  {
    "name": "Vital Conduit Boots",
    "cost": 5990,
    "type": "Boots",
    "rarity": "Rare",
    "description": "While wearing these boots, you gain a +1 bonus to Strength (Athletics) checks. When you cast a spell that requires concentration, you gain 8 temporary hit points. This item requires attunement."
  },
  {
    "name": "Vivacious Cloak",
    "cost": 3910,
    "type": "Cloak",
    "rarity": "Rare",
    "description": "While wearing this cloak, when you cast a spell while you are within 5 feet of a hostile creature, you gain 7 temporary hit points."
  },
  {
    "name": "Voss' Silver Sword (Longsword)",
    "cost": 10277,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 slashing damage. You gain a +2 bonus to attack and damage rolls made with this magic weapon. You gain a 1d4 bonus to attack and damage rolls with this weapon when attacking githyanki, aberrations, fiends, or elementals. The sword has 3 charges and regains 1d4 expended charges daily at dawn. You can use a bonus action to expend a charge and the next time you hit with this weapon before the end of your next turn, the attack deals an extra 1d6 psychic damage, and the target must succeed on a DC 16 Wisdom saving throw or be frightened of you for 1 minute. This item requires attunement."
  },
  {
    "name": "Wapira's Crown",
    "cost": 2409,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "While wearing this circlet, when you restore hit points to another creature, you regain 1d6 hit points. This item requires attunement."
  },
  {
    "name": "Warped Headband of Intellect",
    "cost": 3350,
    "type": "Headwear",
    "rarity": "Uncommon",
    "description": "Your Intelligence score is 17 while you wear this headband. It has no effect if your Intelligence is already 17 or higher. This item requires attunement."
  },
  {
    "name": "Watcher's Shield",
    "cost": 472,
    "type": "Shield",
    "rarity": "Uncommon",
    "description": "While wielding this shield, you have advantage on Wisdom (Perception) checks."
  },
  {
    "name": "Wavemother's Cloak",
    "cost": 3950,
    "type": "Cloak",
    "rarity": "Rare",
    "description": "While wearing this cloak, once on each of your turns, you gain resistance to the first instance of damage you take until you take damage (then the resistance ends). This item requires attunement."
  },
  {
    "name": "Wavemother's Robe",
    "cost": 7837,
    "type": "Clothing",
    "rarity": "Very Rare",
    "description": "While wearing this robe, you have resistance to fire and cold damage. The robe has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge to cast create or destroy water. This item requires attunement."
  },
  {
    "name": "Wavemother's Sickle (Sickle)",
    "cost": 1186,
    "type": "Weapon",
    "rarity": "Rare",
    "description": "Simple melee weapon with light property, dealing 1d4 slashing damage. You have advantage on attack rolls with this weapon against creatures that are wet or standing in water. This item requires attunement."
  },
  {
    "name": "Winkling Gloves",
    "cost": 1875,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you gain a +1 bonus to attack rolls and a +1 bonus to Dexterity (Sleight of Hand) checks."
  },
  {
    "name": "Winter's Clutches",
    "cost": 3075,
    "type": "Gloves",
    "rarity": "Uncommon",
    "description": "While wearing these gloves, when you deal cold damage to a creature, its movement speed is reduced by 10 feet until the end of its next turn. This item requires attunement."
  },
  {
    "name": "Witchbreaker (Battleaxe)",
    "cost": 2922,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Martial melee weapon with versatile (1d10) property, dealing 1d8 slashing damage. You have advantage on attack rolls with this weapon against creatures that are concentrating on a spell. This item requires attunement."
  },
  {
    "name": "Woe (Quarterstaff)",
    "cost": 9350,
    "type": "Weapon",
    "rarity": "Very Rare",
    "description": "Simple melee weapon with versatile (1d8) property, dealing 1d6 bludgeoning damage. You gain a +1 bonus to spell save DC and spell attack rolls while holding this staff. When a creature fails a saving throw against one of your spells while you hold this staff, you regain 1d4 hit points. Using the staff you can use an action to cast blight (save DC 16). Once you use this property, you can\\'t use it again until the next dawn. Bound Weapon. This item requires attunement."
  },
  {
    "name": "Wondrous Gloves",
    "cost": 4620,
    "type": "Gloves",
    "rarity": "Rare",
    "description": "While wearing these gloves, you gain one additional use of your Bardic Inspiration feature. This item requires attunement."
  },
  {
    "name": "Wood Woad Shield",
    "cost": 1188,
    "type": "Shield",
    "rarity": "Uncommon",
    "description": "This shield has 3 charges and regains 1d3 expended charges daily at dawn. While wielding this shield, you can use a bonus action to expend 1 charge to make a melee weapon attack with the shield. On a hit, the target takes 1d6 bludgeoning damage and must succeed on a DC 12 Strength saving throw or be restrained by magical vines until the start of your next turn. This item requires attunement."
  },
  {
    "name": "Worgfang (Dagger)",
    "cost": 2384,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon with finesse and thrown (range 20/60) properties, dealing 1d4 piercing damage. While this dagger is on your person, goblins have disadvantage on attack rolls against you."
  },
  {
    "name": "Xyanyde (Mace)",
    "cost": 5993,
    "type": "Weapon",
    "rarity": "Uncommon",
    "description": "Simple melee weapon dealing 1d6 bludgeoning damage. This mace has 3 charges and regains 1d3 expended charges daily at dawn. When you miss a creature with an attack using this weapon, you can expend 1 charge (no action required) to automatically cast faerie fire (save DC 12) on the target. This item requires attunement."
  },
  {
    "name": "Armor of Agility (Hide Armor)",
    "cost": 11010,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC. You can add your full Dexterity modifier (instead of a maximum of 2) to your AC. This armor doesn't impose disadvantage on Dexterity (Stealth) checks. This item requires attunement."
  },
  {
    "name": "Armor of Agility (Chain Shirt)",
    "cost": 12000,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC. You can add your full Dexterity modifier (instead of a maximum of 2) to your AC. This armor doesn't impose disadvantage on Dexterity (Stealth) checks. This item requires attunement."
  },
  {
    "name": "Armor of Agility (Scale Mail)",
    "cost": 13000,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC. You can add your full Dexterity modifier (instead of a maximum of 2) to your AC. This armor doesn't impose disadvantage on Dexterity (Stealth) checks. This item requires attunement."
  },
  {
    "name": "Armor of Agility (Breastplate)",
    "cost": 15000,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC. You can add your full Dexterity modifier (instead of a maximum of 2) to your AC. This armor doesn't impose disadvantage on Dexterity (Stealth) checks. This item requires attunement."
  },
  {
    "name": "Armor of Agility (Half Plate)",
    "cost": 16000,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC. You can add your full Dexterity modifier (instead of a maximum of 2) to your AC. This armor doesn't impose disadvantage on Dexterity (Stealth) checks. This item requires attunement."
  },
  {
    "name": "Armor of Devotion (Ring Mail)",
    "cost": 11900,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC. Additionally, you gain one extra use of your Channel Divinity feature when you finish a long rest. This benefit is in addition to the use you would normally regain. This item requires attunement."
  },
  {
    "name": "Armor of Devotion (Chain Mail)",
    "cost": 11900,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC. Additionally, you gain one extra use of your Channel Divinity feature when you finish a long rest. This benefit is in addition to the use you would normally regain. This item requires attunement."
  },
  {
    "name": "Armor of Devotion (Splint Armor)",
    "cost": 12100,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC. Additionally, you gain one extra use of your Channel Divinity feature when you finish a long rest. This benefit is in addition to the use you would normally regain. This item requires attunement."
  },
  {
    "name": "Armor of Devotion (Plate Armor)",
    "cost": 13400,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC. Additionally, you gain one extra use of your Channel Divinity feature when you finish a long rest. This benefit is in addition to the use you would normally regain. This item requires attunement."
  },
  {
    "name": "Armor of Landfall (Padded Armor)",
    "cost": 14725,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and your spell save DC increases by 1.  Once per short rest, the first time you step on a surface covered by plants or vines (natural or magical, such as those created by plant growth or entangle), you regain 1d4 hit points. As an action you can cast plant growth. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Armor of Landfall (Leather Armor)",
    "cost": 14730,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and your spell save DC increases by 1.  Once per short rest, the first time you step on a surface covered by plants or vines (natural or magical, such as those created by plant growth or entangle), you regain 1d4 hit points. As an action you can cast plant growth. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Armor of Landfall (Studded Leather Armor)",
    "cost": 14730,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and your spell save DC increases by 1.  Once per short rest, the first time you step on a surface covered by plants or vines (natural or magical, such as those created by plant growth or entangle), you regain 1d4 hit points. As an action you can cast plant growth. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Armor of Moonbasking (Padded Armor)",
    "cost": 16905,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC and have advantage on saving throws against spells. These benefits persist when you use your Wild Shape feature. This item requires attunement."
  },
  {
    "name": "Armor of Moonbasking (Leather Armor)",
    "cost": 16910,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC and have advantage on saving throws against spells. These benefits persist when you use your Wild Shape feature. This item requires attunement."
  },
  {
    "name": "Armor of Moonbasking (Studded Leather Armor)",
    "cost": 16910,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC and have advantage on saving throws against spells. These benefits persist when you use your Wild Shape feature. This item requires attunement."
  },
  {
    "name": "Armor of Persistence (Ring Mail)",
    "cost": 8950,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and you have resistance to nonmagical bludgeoning, piercing, and slashing damage.  This item requires attunement."
  },
  {
    "name": "Armor of Persistence (Chain Mail)",
    "cost": 8950,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and you have resistance to nonmagical bludgeoning, piercing, and slashing damage.  This item requires attunement."
  },
  {
    "name": "Armor of Persistence (Splint Armor)",
    "cost": 9150,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and you have resistance to nonmagical bludgeoning, piercing, and slashing damage. This item requires attunement."
  },
  {
    "name": "Armor of Persistence (Plate Armor)",
    "cost": 10450,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and you have resistance to nonmagical bludgeoning, piercing, and slashing damage. . This item requires attunement."
  },
  {
    "name": "Barkskin Armor (Hide Armor)",
    "cost": 12950,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, your AC from this armor equals 16. You have advantage on Constitution saving throws. This item requires attunement."
  },
  {
    "name": "Bhaalist Armor (Padded Armor)",
    "cost": 29980,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC. Enemies within 5 feet of you become vulnerable to piercing damage from your attacks, unless they are already resistant or immune to piercing damage. This item requires attunement."
  },
  {
    "name": "Bhaalist Armor (Leather Armor)",
    "cost": 29985,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC. Enemies within 5 feet of you become vulnerable to piercing damage from your attacks, unless they are already resistant or immune to piercing damage. This item requires attunement."
  },
  {
    "name": "Bhaalist Armor (Studded Leather Armor)",
    "cost": 29985,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC. Enemies within 5 feet of you become vulnerable to piercing damage from your attacks, unless they are already resistant or immune to piercing damage. This item requires attunement."
  },
  {
    "name": "Blackguard's Plate (Plate Armor)",
    "cost": 12700,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and have advantage on Wisdom saving throws. This item requires attunement."
  },
  {
    "name": "Drow Studded Leather Armor (Studded Leather Armor)",
    "cost": 1910,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and a +1 bonus to Dexterity (Stealth) checks."
  },
  {
    "name": "Dwarven Splintmail (Splint Armor)",
    "cost": 29720,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, your Constitution score increases by 2, to a maximum of 20. You gain a +1 bonus to Strength saving throws and Strength ability checks, and all piercing damage you take is reduced by 1 (minimum of 1 damage). This item requires attunement."
  },
  {
    "name": "Elegant Studded Leather (Studded Leather Armor)",
    "cost": 29120,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +2 bonus to AC, a +2 bonus to initiative rolls, and advantage on Dexterity (Stealth) checks. The armor has 3 charges and regains 1d3 expended charges daily at dawn. When you are hit by an attack, you can use your reaction to expend 1 charge to cast shield. This item requires attunement."
  },
  {
    "name": "Emblazoned Plate of the Marshal (Plate Armor)",
    "cost": 21700,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, a +2 bonus to initiative rolls and saving throws, and resistance to fire damage. As an action you may cast fire shield (warm version). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Flame Enamelled Armor (Hide Armor)",
    "cost": 15610,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, a +2 bonus to initiative rolls and saving throws, and resistance to fire damage. As an action you may cast fire shield (warm version). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Flame Enamelled Armor (Chain Shirt)",
    "cost": 16600,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, a +2 bonus to initiative rolls and saving throws, and resistance to fire damage. As an action you may cast fire shield (warm version). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Flame Enamelled Armor (Scale Mail)",
    "cost": 17600,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, a +2 bonus to initiative rolls and saving throws, and resistance to fire damage. As an action you may cast fire shield (warm version). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Flame Enamelled Armor (Breastplate)",
    "cost": 18600,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, a +2 bonus to initiative rolls and saving throws, and resistance to fire damage. As an action you may cast fire shield (warm version). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Flame Enamelled Armor (Half Plate)",
    "cost": 19600,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, a +2 bonus to initiative rolls and saving throws, and resistance to fire damage. As an action you may cast fire shield (warm version). Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Flawed Helldusk Armor (Ring Mail)",
    "cost": 2000,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, and all piercing damage you take is reduced by 1 (minimum of 1 damage). When a creature within 10 feet hits you with a melee attack, that creature takes 1d4 fire damage. This item requires attunement."
  },
  {
    "name": "Flawed Helldusk Armor (Chain Mail)",
    "cost": 2000,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, and all piercing damage you take is reduced by 1 (minimum of 1 damage). When a creature within 10 feet hits you with a melee attack, that creature takes 1d4 fire damage. This item requires attunement."
  },
  {
    "name": "Flawed Helldusk Armor (Splint Armor)",
    "cost": 2200,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, and all piercing damage you take is reduced by 1 (minimum of 1 damage). When a creature within 10 feet hits you with a melee attack, that creature takes 1d4 fire damage. This item requires attunement."
  },
  {
    "name": "Flawed Helldusk Armor (Plate Armor)",
    "cost": 3500,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, and all piercing damage you take is reduced by 1 (minimum of 1 damage). When a creature within 10 feet hits you with a melee attack, that creature takes 1d4 fire damage. This item requires attunement."
  },
  {
    "name": "Hedge Wanderer Armor (Hide Armor)",
    "cost": 780,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, you gain a +1 bonus to Dexterity saving throws, Dexterity checks, and Intelligence (Nature) checks."
  },
  {
    "name": "Hedge Wanderer Armor (Chain Shirt)",
    "cost": 770,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, you gain a +1 bonus to Dexterity saving throws, Dexterity checks, and Intelligence (Nature) checks."
  },
  {
    "name": "Hedge Wanderer Armor (Scale Mail)",
    "cost": 770,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, you gain a +1 bonus to Dexterity saving throws, Dexterity checks, and Intelligence (Nature) checks."
  },
  {
    "name": "Hedge Wanderer Armor (Breastplate)",
    "cost": 770,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, you gain a +1 bonus to Dexterity saving throws, Dexterity checks, and Intelligence (Nature) checks."
  },
  {
    "name": "Hedge Wanderer Armor (Half Plate)",
    "cost": 770,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, you gain a +1 bonus to Dexterity saving throws, Dexterity checks, and Intelligence (Nature) checks."
  },
  {
    "name": "Helldusk Armor (Ring Mail)",
    "cost": 48450,
    "type": "Armor",
    "rarity": "Legendary",
    "description": "You are considered proficient with this armor while wearing it. While wearing this armor, you gain a +2 bonus to AC and resistance to fire damage.  When you succeed on a saving throw against a spell, the caster takes 1d6 fire damage. As an action you can cast Fly. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Helldusk Armor (Chain Mail)",
    "cost": 48450,
    "type": "Armor",
    "rarity": "Legendary",
    "description": "You are considered proficient with this armor while wearing it. While wearing this armor, you gain a +2 bonus to AC and resistance to fire damage.  When you succeed on a saving throw against a spell, the caster takes 1d6 fire damage. As an action you can cast Fly. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Helldusk Armor (Splint Armor)",
    "cost": 48450,
    "type": "Armor",
    "rarity": "Legendary",
    "description": "You are considered proficient with this armor while wearing it. While wearing this armor, you gain a +2 bonus to AC and resistance to fire damage.  When you succeed on a saving throw against a spell, the caster takes 1d6 fire damage. As an action you can cast Fly. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Helldusk Armor (Plate Armor)",
    "cost": 49950,
    "type": "Armor",
    "rarity": "Legendary",
    "description": "You are considered proficient with this armor while wearing it. While wearing this armor, you gain a +2 bonus to AC and resistance to fire damage.  When you succeed on a saving throw against a spell, the caster takes 1d6 fire damage. As an action you can cast Fly. Once you use this property, you can\\'t use it again until the next dawn. This item requires attunement."
  },
  {
    "name": "Luminous Armor (Hide Armor)",
    "cost": 1563,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, when you deal radiant damage to a creature, each hostile creature within 10 feet of that creature becomes more vulnerable to radiant damage until the end of your next turn. The next time such a creature takes radiant damage before the end of your next turn, it takes an extra 1d4 radiant damage. This item requires attunement."
  },
  {
    "name": "Luminous Armor (Chain Shirt)",
    "cost": 2553,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, when you deal radiant damage to a creature, each hostile creature within 10 feet of that creature becomes more vulnerable to radiant damage until the end of your next turn. The next time such a creature takes radiant damage before the end of your next turn, it takes an extra 1d4 radiant damage. This item requires attunement."
  },
  {
    "name": "Luminous Armor (Scale Mail)",
    "cost": 3553,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, when you deal radiant damage to a creature, each hostile creature within 10 feet of that creature becomes more vulnerable to radiant damage until the end of your next turn. The next time such a creature takes radiant damage before the end of your next turn, it takes an extra 1d4 radiant damage. This item requires attunement."
  },
  {
    "name": "Luminous Armor (Breastplate)",
    "cost": 4553,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, when you deal radiant damage to a creature, each hostile creature within 10 feet of that creature becomes more vulnerable to radiant damage until the end of your next turn. The next time such a creature takes radiant damage before the end of your next turn, it takes an extra 1d4 radiant damage. This item requires attunement."
  },
  {
    "name": "Luminous Armor (Half Plate)",
    "cost": 5530,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, when you deal radiant damage to a creature, each hostile creature within 10 feet of that creature becomes more vulnerable to radiant damage until the end of your next turn. The next time such a creature takes radiant damage before the end of your next turn, it takes an extra 1d4 radiant damage. This item requires attunement."
  },
  {
    "name": "Penumbral Armor (Padded Armor)",
    "cost": 2355,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and a +3 bonus to Dexterity (Stealth) checks while you are in dim light or darkness. This item requires attunement."
  },
  {
    "name": "Penumbral Armor (Leather Armor)",
    "cost": 2360,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and a +3 bonus to Dexterity (Stealth) checks while you are in dim light or darkness. This item requires attunement."
  },
  {
    "name": "Penumbral Armor (Studded Leather Armor)",
    "cost": 2360,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and a +3 bonus to Dexterity (Stealth) checks while you are in dim light or darkness. This item requires attunement."
  },
  {
    "name": "Protective Plate (Plate Armor)",
    "cost": 2262,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, you have resistance to necrotic damage."
  },
  {
    "name": "Psionic Ward Armor (Hide Armor)",
    "cost": 1192,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, when you succeed on a saving throw against a spell, you regain 1d4 hit points. If you are a githyanki, you also have resistance to psychic damage while wearing this armor. This item requires attunement."
  },
  {
    "name": "Psionic Ward Armor (Chain Shirt)",
    "cost": 1282,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, when you succeed on a saving throw against a spell, you regain 1d4 hit points. If you are a githyanki, you also have resistance to psychic damage while wearing this armor. This item requires attunement."
  },
  {
    "name": "Psionic Ward Armor (Scale Mail)",
    "cost": 1382,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, when you succeed on a saving throw against a spell, you regain 1d4 hit points. If you are a githyanki, you also have resistance to psychic damage while wearing this armor. This item requires attunement."
  },
  {
    "name": "Psionic Ward Armor (Breastplate)",
    "cost": 1482,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, when you succeed on a saving throw against a spell, you regain 1d4 hit points. If you are a githyanki, you also have resistance to psychic damage while wearing this armor. This item requires attunement."
  },
  {
    "name": "Psionic Ward Armor (Half Plate)",
    "cost": 1682,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, when you succeed on a saving throw against a spell, you regain 1d4 hit points. If you are a githyanki, you also have resistance to psychic damage while wearing this armor. This item requires attunement."
  },
  {
    "name": "Reaper's Embrace (Ring Mail)",
    "cost": 21190,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and all damage you take is reduced by 2 (minimum of 1 damage). As a bonus action, you can activate the armor's power. While active, you can't be moved against your will by any spell or effect, but you have disadvantage on Dexterity saving throws. The effect lasts for 1 minute or until you end it as a bonus action. The armor has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge. Each creature of your choice within 30 feet must make a DC 16 Wisdom saving throw. On a failed save, a creature takes 4d8 necrotic damage and is frightened of you for 1 minute. On a successful save, the creature takes half damage and isn't frightened. This item requires attunement."
  },
  {
    "name": "Reaper's Embrace (Chain Mail)",
    "cost": 21190,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and all damage you take is reduced by 2 (minimum of 1 damage). As a bonus action, you can activate the armor's power. While active, you can't be moved against your will by any spell or effect, but you have disadvantage on Dexterity saving throws. The effect lasts for 1 minute or until you end it as a bonus action. The armor has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge. Each creature of your choice within 30 feet must make a DC 16 Wisdom saving throw. On a failed save, a creature takes 4d8 necrotic damage and is frightened of you for 1 minute. On a successful save, the creature takes half damage and isn't frightened. This item requires attunement."
  },
  {
    "name": "Reaper's Embrace (Splint Armor)",
    "cost": 21390,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and all damage you take is reduced by 2 (minimum of 1 damage). As a bonus action, you can activate the armor's power. While active, you can't be moved against your will by any spell or effect, but you have disadvantage on Dexterity saving throws. The effect lasts for 1 minute or until you end it as a bonus action. The armor has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge. Each creature of your choice within 30 feet must make a DC 16 Wisdom saving throw. On a failed save, a creature takes 4d8 necrotic damage and is frightened of you for 1 minute. On a successful save, the creature takes half damage and isn't frightened. This item requires attunement."
  },
  {
    "name": "Reaper's Embrace (Plate Armor)",
    "cost": 22690,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and all damage you take is reduced by 2 (minimum of 1 damage). As a bonus action, you can activate the armor's power. While active, you can't be moved against your will by any spell or effect, but you have disadvantage on Dexterity saving throws. The effect lasts for 1 minute or until you end it as a bonus action. The armor has 3 charges and regains 1d3 expended charges daily at dawn. You can use an action to expend 1 charge. Each creature of your choice within 30 feet must make a DC 16 Wisdom saving throw. On a failed save, a creature takes 4d8 necrotic damage and is frightened of you for 1 minute. On a successful save, the creature takes half damage and isn't frightened. This item requires attunement."
  },
  {
    "name": "Rippling Force Mail (Chain Mail)",
    "cost": 2047,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC. When you take bludgeoning, piercing, or slashing damage, your next weapon attack before the end of your next turn deals an extra 1d6 force damage. This item requires attunement."
  },
  {
    "name": "Robust Chain Shirt (Chain Shirt)",
    "cost": 525,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor and you have half your hit points or fewer, when a creature within 5 feet hits you with a melee attack, that creature takes 1d4 piercing damage. This item requires attunement."
  },
  {
    "name": "Scarlet Leather Armor (Leather Armor)",
    "cost": 555,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, you gain a +1 bonus to Dexterity (Stealth) checks."
  },
  {
    "name": "Shadeclinger Armor (Padded Armor)",
    "cost": 3840,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and a +1 bonus to Dexterity (Stealth) checks. While you are in dim light or darkness, you have advantage on saving throws. This item requires attunement."
  },
  {
    "name": "Shadeclinger Armor (Leather Armor)",
    "cost": 3845,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and a +1 bonus to Dexterity (Stealth) checks. While you are in dim light or darkness, you have advantage on saving throws. This item requires attunement."
  },
  {
    "name": "Shadeclinger Armor (Studded Leather Armor)",
    "cost": 3845,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC and a +1 bonus to Dexterity (Stealth) checks. While you are in dim light or darkness, you have advantage on saving throws. This item requires attunement."
  },
  {
    "name": "Sharpened Snare Cuirass (Breastplate)",
    "cost": 8350,
    "type": "Armor",
    "rarity": "Very Rare",
    "description": "While wearing this armor, you can add your full Dexterity modifier (instead of a maximum of 2) to your AC. Creatures have disadvantage on saving throws to resist your attacks, spells, or effects that would restrain them. This item requires attunement."
  },
  {
    "name": "Slippery Chain Shirt",
    "cost": 525,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, when you restore hit points to a creature, that creature automatically disengages and doesn't provoke opportunity attacks until the start of its next turn. This item requires attunement."
  },
  {
    "name": "Spidersilk Armor (Padded Armor)",
    "cost": 2640,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, a +1 bonus to Dexterity (Stealth) checks, and advantage on Constitution saving throws. This item requires attunement."
  },
  {
    "name": "Spidersilk Armor (Leather Armor)",
    "cost": 2645,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, a +1 bonus to Dexterity (Stealth) checks, and advantage on Constitution saving throws. This item requires attunement."
  },
  {
    "name": "Spidersilk Armor (Studded Leather Armor)",
    "cost": 2645,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you gain a +1 bonus to AC, a +1 bonus to Dexterity (Stealth) checks, and advantage on Constitution saving throws. This item requires attunement."
  },
  {
    "name": "The Jolty Vest (Hide Armor)",
    "cost": 560,
    "type": "Armor",
    "rarity": "Rare",
    "description": "When a creature within 5 feet hits you with a melee attack, the attacker must succeed on a DC 14 Dexterity saving throw or be unable to take reactions until the start of its next turn. This item requires attunement."
  },
  {
    "name": "The Jolty Vest (Chain Shirt)",
    "cost": 550,
    "type": "Armor",
    "rarity": "Rare",
    "description": "When a creature within 5 feet hits you with a melee attack, the attacker must succeed on a DC 14 Dexterity saving throw or be unable to take reactions until the start of its next turn. This item requires attunement."
  },
  {
    "name": "The Jolty Vest (Scale Mail)",
    "cost": 550,
    "type": "Armor",
    "rarity": "Rare",
    "description": "When a creature within 5 feet hits you with a melee attack, the attacker must succeed on a DC 14 Dexterity saving throw or be unable to take reactions until the start of its next turn. This item requires attunement."
  },
  {
    "name": "The Jolty Vest (Breastplate)",
    "cost": 550,
    "type": "Armor",
    "rarity": "Rare",
    "description": "When a creature within 5 feet hits you with a melee attack, the attacker must succeed on a DC 14 Dexterity saving throw or be unable to take reactions until the start of its next turn. This item requires attunement."
  },
  {
    "name": "The Jolty Vest (Half Plate)",
    "cost": 550,
    "type": "Armor",
    "rarity": "Rare",
    "description": "When a creature within 5 feet hits you with a melee attack, the attacker must succeed on a DC 14 Dexterity saving throw or be unable to take reactions until the start of its next turn. This item requires attunement."
  },
  {
    "name": "The Oakfather's Embrace (Hide Armor)",
    "cost": 571,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, when an undead creature hits you with a melee attack, it takes 1d6 radiant damage. If the attacker is a beast, it deal an additional 1d6 radiant damage to you. This item requires attunement."
  },
  {
    "name": "The Oakfather's Embrace (Chain Shirt)",
    "cost": 561,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, when an undead creature hits you with a melee attack, it takes 1d6 radiant damage. If the attacker is a beast, it deal an additional 1d6 radiant damage to you. This item requires attunement."
  },
  {
    "name": "The Oakfather's Embrace (Scale Mail)",
    "cost": 561,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, when an undead creature hits you with a melee attack, it takes 1d6 radiant damage. If the attacker is a beast, it deal an additional 1d6 radiant damage to you. This item requires attunement."
  },
  {
    "name": "The Oakfather's Embrace (Breastplate)",
    "cost": 561,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, when an undead creature hits you with a melee attack, it takes 1d6 radiant damage. If the attacker is a beast, it deal an additional 1d6 radiant damage to you. This item requires attunement."
  },
  {
    "name": "The Oakfather's Embrace (Half Plate)",
    "cost": 561,
    "type": "Armor",
    "rarity": "Uncommon",
    "description": "While wearing this armor, when an undead creature hits you with a melee attack, it takes 1d6 radiant damage. If the attacker is a beast, it deal an additional 1d6 radiant damage to you. This item requires attunement."
  },
  {
    "name": "Unwanted Masterwork Scalemail (Scale Mail)",
    "cost": 1120,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you can add your full Dexterity modifier (instead of a maximum of 2) to your AC. This armor doesn't impose disadvantage on Dexterity (Stealth) checks. You have resistance to fire damage."
  },
  {
    "name": "Yuan-Ti Scale Mail (Scale Mail)",
    "cost": 1110,
    "type": "Armor",
    "rarity": "Rare",
    "description": "While wearing this armor, you can add your full Dexterity modifier (instead of a maximum of 2) to your AC. This armor doesn't impose disadvantage on Dexterity (Stealth) checks. You gain a +1 bonus to initiative rolls. This item requires attunement."
  }
];
		
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
				} else {
					shopContent.style.display = 'block';
				}
			
			// If switching to item list, populate it
			if (tabName === 'itemlist') {
				populateItemList();
			} else if (tabName === 'homebrew') {
				populateHomebrewList();
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
			
			// Save to localStorage
			saveItemEditsToLocalStorage();
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
	
	// Save to localStorage
	saveItemEditsToLocalStorage();
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

// Save item edits to localStorage
function saveItemEditsToLocalStorage() {
	const edits = {
		officialItems: officialItemDatabase,
		homebrewItems: homebrewItemDatabase
	};
	localStorage.setItem('dnd-item-edits', JSON.stringify(edits));
	console.log('Item edits saved to localStorage');
}

// Load item edits from localStorage
function loadItemEditsFromLocalStorage() {
	const savedEdits = localStorage.getItem('dnd-item-edits');
	if (savedEdits) {
		try {
			const edits = JSON.parse(savedEdits);
			
			// Apply edits to official items
			if (edits.officialItems && edits.officialItems.length > 0) {
				edits.officialItems.forEach((editedItem, index) => {
					if (officialItemDatabase[index]) {
						Object.assign(officialItemDatabase[index], editedItem);
					}
				});
			}
			
			// Apply edits to homebrew items
			if (edits.homebrewItems && edits.homebrewItems.length > 0) {
				edits.homebrewItems.forEach((editedItem, index) => {
					if (homebrewItemDatabase[index]) {
						Object.assign(homebrewItemDatabase[index], editedItem);
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

// ===== SAVED STORES FUNCTIONS =====

// Save current shop inventory
function saveCurrentStore() {
	const shopContent = document.getElementById('shop-content');
	if (!shopContent || shopContent.classList.contains('empty-state')) {
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
	const itemElements = document.querySelectorAll('#shop-content .item');
	
	itemElements.forEach(itemEl => {
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
	displaySavedStores();
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
