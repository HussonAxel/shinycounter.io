export const GENERATIONS = [
  {
    name: 'Generation I',
    start: 1,
    end: 151,
  },
  {
    name: 'Generation II',
    start: 152,
    end: 251,
  },

  {
    name: 'Generation III',
    start: 252,
    end: 386,
  },
  {
    name: 'Generation IV',
    start: 387,
    end: 493,
  },
  {
    name: 'Generation V',
    start: 494,
    end: 649,
  },
  {
    name: 'Generation VI',
    start: 650,
    end: 721,
  },
  {
    name: 'Generation VII',
    start: 722,
    end: 809,
  },
  {
    name: 'Generation VIII',
    start: 810,
    end: 905,
  },
  {
    name: 'Generation IX',
    start: 906,
    end: 1025,
  },
  {
    name: 'Formes Alternatives',
    start: 1026,
  },
]

export const TYPES_INFOS = [
  {
    name: 'Normal',
    baseInfo:
      'The Normal type is the most basic type of Pokémon. They are very common and appear from the very first route you visit. Most Normal Pokémon are single type, but there is a large contingent having a second type of Flying. Later games have added several more Normal Pokémon paired with different types.',
    baseSubInfo:
      'In Generations 1-3, all Normal type moves were categorized as Physical.',
    effects: [
      {
        type: 'move',
        moves: ["Foresight", "Odor Sleuth"],
        description:
          'These moves allow Normal type moves to hit Ghost type Pokémon, which are normally immune to them.',
      },
      {
        type: 'move',
        moves: ['Ion Deluge', 'Plasma Fists'],
        description:
          'These moves change Normal type moves to Electric type for the rest of the turn.',
      },
      {
        type: 'ability',
        abilities: ['Scrappy'],
        description:
          'This ability allows Normal type moves to hit Ghost type Pokémon, which are normally immune to them.',
      },
      {
        type: 'ability',
        abilities: ['Normalize'],
        description:
          'This ability causes the Pokémon\'s moves to become Normal-type, and increases their power by 20%.',
      },
      {
        type: 'ability',
        abilities: ['Aerilate', 'Galvanize', 'Pixilate', 'Refrigerate'],
        description:
          'These abilities change Normal type moves to Flying, Electric, Fairy and Ice type respectively, and increase their power by 20%.',
      },
      {
        type: 'item', 
        items: ['Silk Scarf'],
        description: 'The item Silk Scarf increases the power of Normal type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Normal Gem'],
        description: 'The Normal Gem increases the power of a Normal type move by 30% when held, and is then consumed.'
      },
      {
        type: 'item',
        items: ['Chilan Berry'],
        description: 'The Chilan Berry, when held, reduces damage from Normal type moves by 50%.',
      },
    ],
  },
  {
    name: 'Fire',
    baseInfo:
      'Fire is one of the three basic elemental types along with Water and Grass, which constitute the three starter Pokémon. This creates a simple triangle to explain the type concept easily to new players. Fire types are notoriously rare in the early stages of the games so choosing the Fire variation starter is often a plus.',
    baseSubInfo:
      'In Generations 1-3, all Fire type moves were categorized as Special.',
    effects: [
      {
        type: 'immunity',
        description: 'Fire type Pokémon are immune to burns.',
      },
      {
        type: 'weather',
        description: 'The power of Fire type attacks increases by 50% during harsh sunlight and decreases by 50% during rain.',
      },
      {
        type: 'weather',
        description: 'Fire type attacks have no effect during heavy rain created by Primordial Sea.',
      },
      {
        type: 'ability',
        abilities: ['Blaze'],
        description: 'The Blaze ability increases the power of Fire type moves by 50% when the Pokémon has less than 1⁄3 HP remaining.',
      },
      {
        type: 'ability',
        abilities: ['Thermal Exchange'],
        description: 'The ability Thermal Exchange raises the Pokémon\'s Attack one stage when hit by a Fire type attack.',
      },
      {
        type: 'ability',
        abilities: ['Dry Skin'],
        description: 'A Pokémon with the Dry Skin ability takes 25% more damage when hit by a Fire type attack.',
      },
      {
        type: 'ability',
        abilities: ['Heatproof', 'Thick Fat', 'Water Bubble'],
        description: 'A Pokémon with the Heatproof, Thick Fat or Water Bubble ability takes 50% less damage when hit by a Fire type attack.',
      },
      {
        type: 'ability',
        abilities: ['Flash Fire'],
        description: 'The ability Flash Fire gives immunity to Fire type moves, and if hit by one, the power of the Pokémon\'s Fire type moves are increased by 50%.',
      },
      {
        type: 'ability',
        abilities: ['Fluffy'],
        description: 'The Fluffy ability doubles the damage taken from Fire type moves.',
      },
      {
        type: 'ability',
        abilities: ['Steam Engine'],
        description: 'Steam Engine drastically raises the Pokémon\'s Speed when hit by a Fire type move.',
      },
      {
        type: 'ability',
        abilities: ['Well-Baked Body'],
        description: 'The Well-Baked Body ability raises the Pokémon\'s Defense two stages when hit by a Fire type attack, instead of dealing damage.',
      },
      {
        type: 'move',
        moves: ['Burn Up'],
        description: 'The move Burn Up causes the user to lose their Fire type.',
      },
      {
        type: 'move',
        moves: ['Water Sport'],
        description: 'The move Water Sport reduces the power of Fire type moves for all Pokémon on the field by 50%.',
      },
      {
        type: 'move',
        moves: ['Powder'],
        description: 'Pokémon afflicted by the move Powder lose 1⁄4 of their maximum HP if they use a Fire type move.',
      },
      {
        type: 'move',
        moves: ['Tar Shot'],
        description: 'A Pokémon affected by Tar Shot will take double damage from Fire type moves.',
      },
      {
        type: 'item',
        items: ['Flame Plate', 'Charcoal'],
        description: 'The items Flame Plate and Charcoal increase the power of Fire type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Fire Gem'],
        description: 'The Fire Gem increases the power of a Fire type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Occa Berry'],
        description: 'The Occa Berry, when held, neutralizes a super-effective Fire type move.',
      },
      {
        type: 'item',
        items: ['Burn Drive'],
        description: 'Burn Drive changes Techno Blast to Fire type when held by Genesect.',
      },
    ],
  },
  {
    name: 'Water',
    baseInfo:
      'Water is one of the three basic elemental types along with Fire and Grass, which constitute the three starter Pokémon. This creates a simple triangle to explain the type concept easily to new players. Water is the most common type with over 150 Pokémon, which are based on a wide variety of fish and other sea-dwelling creatures.',
    baseSubInfo:
      'As of Generation 6, Water has been paired with every other type. In Generations 1-3, all Water type moves were categorized as Special.',
    effects: [
      {
        type: 'weather',
        description: 'The power of Water type attacks increases by 50% during rain and decreases by 50% during harsh sunlight.',
      },
      {
        type: 'weather',
        description: 'Water type attacks have no effect during extremely harsh sunlight created by Desolate Land.',
      },
      {
        type: 'ability',
        abilities: ['Torrent'],
        description: 'The Torrent ability increases the power of Water type moves by 50% when the Pokémon has less than 1⁄3 HP remaining.',
      },
      {
        type: 'ability',
        abilities: ['Water Absorb', 'Dry Skin'],
        description: 'Pokémon with the abilities Water Absorb or Dry Skin heal 1⁄4 of their maximum HP when hit by a Water type move.',
      },
      {
        type: 'ability',
        abilities: ['Storm Drain'],
        description: 'The ability Storm Drain redirects all Water type moves to that Pokémon, dealing no damage and raising their Special Attack one stage.',
      },
      {
        type: 'ability',
        abilities: ['Water Bubble'],
        description: 'Water Bubble doubles the power of the Pokémon\'s Water type attacks.',
      },
      {
        type: 'ability',
        abilities: ['Liquid Voice'],
        description: 'Liquid Voice changes sound-based moves to Water type.',
      },
      {
        type: 'ability',
        abilities: ['Water Compaction'],
        description: 'Water Compaction sharply raises the Pokémon\'s Defense when hit by a Water type move.',
      },
      {
        type: 'ability',
        abilities: ['Steam Engine'],
        description: 'Steam Engine drastically raises the Pokémon\'s Speed when hit by a Water type move.',
      },
      {
        type: 'move',
        moves: ['Soak'],
        description: 'The move Soak changes a Pokémon\'s type to pure Water.',
      },
      {
        type: 'move',
        moves: ['Salt Cure'],
        description: 'The move Salt Cure deals increased damage at the end of each turn to Water types.',
      },
      {
        type: 'move',
        moves: ['Freeze-Dry'],
        description: 'The Ice type move Freeze-Dry is super-effective on Water type Pokémon.',
      },
      {
        type: 'item',
        items: ['Splash Plate', 'Mystic Water', 'Sea Incense', 'Wave Incense'],
        description: 'The items Splash Plate, Mystic Water, Sea Incense and Wave Incense increase the power of Water type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Water Gem'],
        description: 'The Water Gem increases the power of a Water type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Absorb Bulb', 'Luminous Moss'],
        description: 'The item Absorb Bulb raises the holder\'s Special Attack when hit by a Water type move, while Luminous Moss raises the Special Defense.',
      },
      {
        type: 'item',
        items: ['Passho Berry'],
        description: 'The Passho Berry, when held, neutralizes a super-effective Water type move.',
      },
      {
        type: 'item',
        items: ['Net Ball'],
        description: 'The Net Ball increases the catch rate when used on Water types.',
      },
      {
        type: 'item',
        items: ['Lustrous Orb'],
        description: 'Lustrous Orb boosts Water type attacks by 20% when held by Palkia.',
      },
      {
        type: 'item',
        items: ['Douse Drive'],
        description: 'Douse Drive changes Techno Blast to Water type when held by Genesect.',
      },
    ],
  },
  {
    name: 'Electric',
    baseInfo:
      'There are relatively few Electric Pokémon; in fact only four were added in the third generation. Most are based on rodents or inanimate objects. Electric Pokémon are very good defensively, being weak only to Ground moves. Eelektross is the only Pokémon to have no type disadvantages due to its ability, Levitate.',
    baseSubInfo:
      'In Generations 1-3, all Electric type moves were categorized as Special.',
    effects: [
      {
        type: 'immunity',
        description: 'Electric type Pokémon are immune to paralysis.',
      },
      {
        type: 'terrain',
        description: 'The power of Electric type moves increases by 30% when Electric Terrain is active.',
      },
      {
        type: 'weather',
        description: 'Electric type attacks become neutral against the Flying type during strong winds created by Delta Stream.',
      },
      {
        type: 'ability',
        abilities: ['Volt Absorb'],
        description: 'The ability Volt Absorb heals the Pokémon when hit by an Electric type attack, instead of dealing damage.',
      },
      {
        type: 'ability',
        abilities: ['Motor Drive'],
        description: 'The ability Motor Drive raises the Pokémon\'s Speed when hit by an Electric type attack, instead of dealing damage.',
      },
      {
        type: 'ability',
        abilities: ['Lightning Rod'],
        description: 'The ability Lightning Rod redirects all Electric type moves to that Pokémon, dealing no damage and raising their Special Attack one stage.',
      },
      {
        type: 'ability',
        abilities: ['Galvanize'],
        description: 'The ability Galvanize changes Normal type moves to Electric type, and increases their power by 20%.',
      },
      {
        type: 'ability',
        abilities: ['Transistor'],
        description: 'Transistor increases the power of Electric type attacks by 50%.',
      },
      {
        type: 'ability',
        abilities: ['Electromorphosis', 'Wind Power'],
        description: 'The Electromorphosis ability doubles the power of the next Electric type move used when the Pokémon is hit by an attack. Wind Power does the same when hit by a wind move.',
      },
      {
        type: 'move',
        moves: ['Charge'],
        description: 'The move Charge doubles the power of the next Electric type move the Pokémon uses.',
      },
      {
        type: 'move',
        moves: ['Electrify'],
        description: 'The move Electrify changes the target\'s moves to Electric type for the rest of the turn.',
      },
      {
        type: 'move',
        moves: ['Ion Deluge', 'Plasma Fists'],
        description: 'Ion Deluge and Plasma Fists change Normal type moves to Electric type for the rest of the turn.',
      },
      {
        type: 'move',
        moves: ['Mud Sport'],
        description: 'Mud Sport reduces the power of Electric type moves for all Pokémon on the field by 50%.',
      },
      {
        type: 'move',
        moves: ['Double Shock'],
        description: 'The move Double Shock causes the user to lose their Electric type.',
      },
      {
        type: 'item',
        items: ['Zap Plate', 'Magnet'],
        description: 'The items Zap Plate and Magnet increase the power of Electric type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Electric Gem'],
        description: 'The Electric Gem increases the power of an Electric type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Cell Battery'],
        description: 'The item Cell Battery raises the holder\'s Attack one stage when hit by an Electric type attack, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Wacan Berry'],
        description: 'The Wacan Berry, when held, neutralizes a super-effective Electric type move.',
      },
      {
        type: 'item',
        items: ['Shock Drive'],
        description: 'Shock Drive changes Techno Blast to Electric type when held by Genesect.',
      },
    ],
  },
  {
    name: 'Grass',
    baseInfo:
      'Grass is one of the three basic elemental types along with Fire and Water, which constitute the three starter Pokémon. This creates a simple triangle to explain the type concept easily to new players. Grass is one of the weakest types statistically, with 5 defensive weaknesses and 7 types that are resistant to Grass moves. Furthermore, three type combos paired with Grass have 7 weaknesses: Grass/Psychic, Grass/Ice, and Grass/Dark.',
    baseSubInfo:
      'In Generations 1-3, all Grass type moves were categorized as Special.',
    effects: [
      {
        type: 'immunity',
        description: 'Grass type Pokémon are immune to "powder and spore" moves - Cotton Spore, Leech Seed, Poison Powder, Powder, Rage Powder, Sleep Powder, Spore and Stun Spore - as well as the ability Effect Spore.',
      },
      {
        type: 'terrain',
        description: 'The power of Grass type moves increases by 30% when Grassy Terrain is active.',
      },
      {
        type: 'ability',
        abilities: ['Overgrow'],
        description: 'The Overgrow ability increases the power of Grass type moves by 50% when the Pokémon has less than 1⁄3 HP remaining.',
      },
      {
        type: 'ability',
        abilities: ['Sap Sipper'],
        description: 'The ability Sap Sipper raises the Pokémon\'s Attack one stage when hit by a Grass type attack, instead of dealing damage.',
      },
      {
        type: 'ability',
        abilities: ['Flower Veil'],
        description: 'The ability Flower Veil prevents the stats of ally Grass type Pokémon from being lowered.',
      },
      {
        type: 'move',
        moves: ['Flower Shield'],
        description: 'The move Flower Shield raises the Defense of all Grass type Pokémon one the field by one stage; Rototiller does the same for both Attack and Special Attack.',
      },
      {
        type: 'move',
        moves: ['Forest\'s Curse'],
        description: 'The move Forest\'s Curse adds the Grass type to the target\'s type.',
      },
      {
        type: 'item',
        items: ['Meadow Plate', 'Miracle Seed', 'Rose Incense'],
        description: 'The items Meadow Plate, Miracle Seed and Rose Incense increase the power of Grass type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Grass Gem'],
        description: 'The Grass Gem increases the power of a Grass type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Rindo Berry'],
        description: 'The Rindo Berry, when held, neutralizes a super-effective Grass type move.',
      },
    ],
  },
  {
    name: 'Ice',
    baseInfo:
      'Ice type Pokémon are now the rarest of all types: there are only around 60 in total (depending on how you count alternate forms or mega evolutions). They are ranked quite well defensively in terms of stats, although multiple type weaknesses let them down. Some are based on typical Arctic creatures like seals or yaks, while others are more mythical.',
    baseSubInfo:
      'In Generations 1-3, all Ice type moves were categorized as Special.',
    effects: [
      {
        type: 'immunity',
        description: 'Ice type Pokémon are immune to freezing.',
      },
      {
        type: 'weather',
        description: 'Ice type Pokémon do not take damage during a hailstorm.',
      },
      {
        type: 'ability',
        abilities: ['Thick Fat'],
        description: 'A Pokémon with the Thick Fat ability takes 50% less damage when hit by an Ice type attack.',
      },
      {
        type: 'ability',
        abilities: ['Refrigerate'],
        description: 'The ability Refrigerate changes Normal type moves to Ice type, and increases their power by 20%.',
      },
      {
        type: 'weather',
        description: 'Ice type attacks become neutral against the Flying type during strong winds created by Delta Stream.',
      },
      {
        type: 'item',
        items: ['Icicle Plate', 'Never-Melt Ice'],
        description: 'The items Icicle Plate and Never-Melt Ice increase the power of Ice type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Ice Gem'],
        description: 'The Ice Gem increases the power of a Ice type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Snowball'],
        description: 'The item Snowball raises the holder\'s Attack one stage when hit by an Ice type attack, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Yache Berry'],
        description: 'The Yache Berry, when held, neutralizes a super-effective Ice type move.',
      },
      {
        type: 'item',
        items: ['Chill Drive'],
        description: 'Chill Drive changes Techno Blast to Ice type when held by Genesect.',
      },
    ],
  },
  {
    name: 'Fighting',
    baseInfo:
      'Fighting Pokémon are strong and muscle-bound, often based on martial artists. Fighting moves are super-effective against five other types (as is Ground), making them very good offensively. Most Fighting type moves are in the Physical category, for obvious reasons.',
    baseSubInfo:
      'In Generations 1-3, all Fighting type moves were categorized as Physical.',
    effects: [
      {
        type: 'move',
        moves: ['Foresight', 'Odor Sleuth'],
        description: 'The moves Foresight and Odor Sleuth, and the ability Scrappy allow Fighting type moves to hit Ghost type Pokémon.',
      },
      {
        type: 'ability',
        abilities: ['Scrappy'],
        description: 'The ability Scrappy allows Fighting type moves to hit Ghost type Pokémon.',
      },
      {
        type: 'item',
        items: ['Fist Plate', 'Black Belt'],
        description: 'The items Fist Plate and Black Belt increase the power of Fighting type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Fighting Gem'],
        description: 'The Fighting Gem increases the power of a Fighting type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Chople Berry'],
        description: 'The Chople Berry, when held, neutralizes a super-effective Fighting type move.',
      },
    ],
  },
  {
    name: 'Poison',
    baseInfo:
      'The Poison type is regarded as one of the weakest offensively. Prior to Pokémon X/Y it was super-effective only against Grass (many of which are dual Poison so neutralizes the effect). From X/Y onward it has an extra advantage against the Fairy type. In the first generation it was also super-effective against Bug but this was changed. It fares a little better defensively but its best advantage is through status moves like Toxic.',
    baseSubInfo:
      'In Generations 1-3, all Poison type moves were categorized as Physical.',
    effects: [
      {
        type: 'immunity',
        description: 'Poison type Pokémon are immune to poisoning.',
      },
      {
        type: 'ability',
        abilities: ['Corrosion'],
        description: 'However, the Corrosion ability allows the Pokémon to bypass that immunity.',
      },
      {
        type: 'move',
        moves: ['Toxic'],
        description: 'The move Toxic will never miss when used by a Poison type Pokémon.',
      },
      {
        type: 'immunity',
        description: 'Poison type Pokémon (that are not raised) switching into battle will remove the effects of Toxic Spikes.',
      },
      {
        type: 'item',
        items: ['Toxic Plate', 'Poison Barb'],
        description: 'The items Toxic Plate and Poison Barb increase the power of Poison type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Poison Gem'],
        description: 'The Poison Gem increases the power of a Poison type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Black Sludge'],
        description: 'The item Black Sludge heals 1⁄16 HP each turn when held by a Poison type Pokémon, rather than being damaged by it.',
      },
      {
        type: 'item',
        items: ['Kebia Berry'],
        description: 'The Kebia Berry, when held, neutralizes a super-effective Poison type move.',
      },
    ],
  },
  {
    name: 'Ground',
    baseInfo:
      'Ground is one of the strongest types offensively: it is super-effective against five other types (as is Fighting) and Earthquake is one of the strongest moves in the game with power and accuracy both 100. In the first few generations many Ground type Pokémon were dual Rock types, lumbering them with 4x Grass and Water disadvantages; most newer Pokémon introduced avoid this now.',
    baseSubInfo:
      'In Generations 1-3, all Ground type moves were categorized as Physical.',
    effects: [
      {
        type: 'weather',
        description: 'Ground type Pokémon do not take damage during a sandstorm.',
      },
      {
        type: 'immunity',
        description: 'In addition to Flying types, Ground type moves do not affect Pokémon with the ability Levitate or those under the effects of Magnet Rise or Telekinesis, or holding an Air Balloon (aka raised Pokémon).',
      },
      {
        type: 'move',
        moves: ['Gravity', 'Ingrain', 'Roost', 'Smack Down', 'Thousand Arrows'],
        description: 'However, Ground type moves can hit the above Pokémon (including Flying types) if the target is affected by the moves Gravity, Ingrain, Roost, Smack Down or Thousand Arrows, or are holding an Iron Ball.',
      },
      {
        type: 'item',
        items: ['Iron Ball'],
        description: 'Ground type moves can hit raised Pokémon if they are holding an Iron Ball.',
      },
      {
        type: 'ability',
        abilities: ['Sand Force'],
        description: 'The Sand Force ability increases the power of Ground type moves by 30% during a sandstorm.',
      },
      {
        type: 'ability',
        abilities: ['Earth Eater'],
        description: 'Pokémon with Earth Eater heal 1⁄4 of their maximum HP when hit by a Ground type move.',
      },
      {
        type: 'item',
        items: ['Earth Plate', 'Soft Sand'],
        description: 'The items Earth Plate and Soft Sand increase the power of Ground type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Ground Gem'],
        description: 'The Ground Gem increases the power of a Ground type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Shuca Berry'],
        description: 'The Shuca Berry, when held, neutralizes a super-effective Ground type move.',
      },
    ],
  },
  {
    name: 'Flying',
    baseInfo:
      'Most Flying type Pokémon are based on birds or insects, along with some mythical creatures like dragons. On average they are faster than any other type. Nearly every Flying type has Flying as the secondary type, usually with Normal. There are only three pure Flying type Pokémon (Tornadus, Rookidee, Corvisquire), and six Pokémon with Flying as a primary type (Noibat, Noivern, Corviknight, Cramorant, Bombirdier, Flamigo). As of Generation 6, the type has also been paired with every other type.',
    baseSubInfo:
      'In Generations 1-3, all Flying type moves were categorized as Physical.',
    effects: [
      {
        type: 'immunity',
        description: 'Flying type Pokémon are immune to the effects of the moves Spikes, Toxic Spikes, Sticky Web, Rototiller, Electric Terrain, Grassy Terrain, Misty Terrain and Psychic Terrain, and the ability Arena Trap.',
      },
      {
        type: 'move',
        moves: ['Gravity', 'Ingrain', 'Roost', 'Smack Down', 'Thousand Arrows'],
        description: 'However, they lose immunity to the above if affected by the moves Gravity, Ingrain, Roost, Smack Down or Thousand Arrows, or are holding an Iron Ball.',
      },
      {
        type: 'item',
        items: ['Iron Ball'],
        description: 'Flying type Pokémon lose their immunities if holding an Iron Ball.',
      },
      {
        type: 'ability',
        abilities: ['Aerilate'],
        description: 'The ability Aerilate changes Normal type moves to Flying type, and increases their power by 20%.',
      },
      {
        type: 'weather',
        description: 'Electric, Ice and Rock type attacks become neutral against the Flying type during strong winds created by Delta Stream.',
      },
      {
        type: 'ability',
        abilities: ['Gale Wings'],
        description: 'The ability Gale Wings increases the priority of Flying type moves.',
      },
      {
        type: 'item',
        items: ['Sky Plate', 'Sharp Beak'],
        description: 'The items Sky Plate and Sharp Beak increase the power of Flying type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Flying Gem'],
        description: 'The Flying Gem increases the power of a Flying type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Coba Berry'],
        description: 'The Coba Berry, when held, neutralizes a super-effective Flying type move.',
      },
    ],
  },
  {
    name: 'Psychic',
    baseInfo:
      'The Psychic type has few outright strengths, however, it also has few weaknesses. In the first generation it ended up being massively overpowered, mainly due to a complete lack of powerful Bug moves, its only weakness. Furthermore, a mistake in the game meant that Ghost-type moves had no effect on Psychic (although this only affected the low-powered Lick). Generation 2 rectified the situation with the addition of the Dark type along with better Pokémon and moves of all types.',
    baseSubInfo:
      'In Generations 1-3, all Psychic type moves were categorized as Special.',
    effects: [
      {
        type: 'terrain',
        description: 'The power of Psychic type moves increases by 30% when Psychic Terrain is active.',
      },
      {
        type: 'move',
        moves: ['Miracle Eye'],
        description: 'The move Miracle Eye allows Psychic type moves to hit Dark type Pokémon.',
      },
      {
        type: 'move',
        moves: ['Magic Powder'],
        description: 'The move Magic Powder changes the target\'s type to Psychic.',
      },
      {
        type: 'item',
        items: ['Mind Plate', 'Twisted Spoon', 'Odd Incense'],
        description: 'The items Mind Plate, Twisted Spoon and Odd Incense increase the power of Psychic type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Psychic Gem'],
        description: 'The Psychic Gem increases the power of a Psychic type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Payapa Berry'],
        description: 'The Payapa Berry, when held, neutralizes a super-effective Psychic type move.',
      },
      {
        type: 'item',
        items: ['Soul Dew'],
        description: 'Soul Dew boosts Psychic and Dragon type attacks by 20% when held by Latias or Latios.',
      },
    ],
  },
  {
    name: 'Bug',
    baseInfo:
      'Most Bug Pokémon grow quickly and evolve sooner than other types. As a result, they are often very weak. In Generation I, bugs were almost useless since the few Bug type moves available were very weak. The situation improved in later games with better moves and an advantage against the Dark type.',
    baseSubInfo:
      'In Generations 1-3, all Bug type moves were categorized as Physical.',
    effects: [
      {
        type: 'ability',
        abilities: ['Swarm'],
        description: 'The Swarm ability increases the power of Bug type moves by 50% when the Pokémon has less than 1⁄3 HP remaining.',
      },
      {
        type: 'ability',
        abilities: ['Rattled'],
        description: 'The ability Rattled raises the Pokémon\'s Speed one stage when hit by a Bug type attack.',
      },
      {
        type: 'item',
        items: ['Insect Plate', 'Silver Powder'],
        description: 'The items Insect Plate and Silver Powder increase the power of Bug type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Bug Gem'],
        description: 'The Bug Gem increases the power of a Bug type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Tanga Berry'],
        description: 'The Tanga Berry, when held, neutralizes a super-effective Bug type move.',
      },
      {
        type: 'item',
        items: ['Net Ball'],
        description: 'The Net Ball increases the catch rate when used on Bug types.',
      },
    ],
  },
  {
    name: 'Rock',
    baseInfo:
      'Rock is a solid type as one might expect. Like Steel, Rock Pokémon usually have high defense - however, since many Rock Pokémon from earlier games were part Ground they had a 4x weakness to both Grass and Water whose moves often come as Special type.',
    baseSubInfo:
      'In Generations 1-3, all Rock type moves were categorized as Physical.',
    effects: [
      {
        type: 'weather',
        description: 'Rock type Pokémon do not take damage during a sandstorm.',
      },
      {
        type: 'weather',
        description: 'The Special Defense of Rock type Pokémon is increased by 50% during a sandstorm.',
      },
      {
        type: 'ability',
        abilities: ['Sand Force'],
        description: 'The Sand Force ability increases the power of Rock type moves by 30% during a sandstorm.',
      },
      {
        type: 'weather',
        description: 'Rock type attacks become neutral against the Flying type during strong winds created by Delta Stream.',
      },
      {
        type: 'ability',
        abilities: ['Rocky Payload'],
        description: 'Rocky Payload increases the power of Rock type moves by 50%.',
      },
      {
        type: 'item',
        items: ['Stone Plate', 'Hard Stone', 'Rock Incense'],
        description: 'The items Stone Plate, Hard Stone and Rock Incense increase the power of Rock type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Rock Gem'],
        description: 'The Rock Gem increases the power of a Rock type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Charti Berry'],
        description: 'The Charti Berry, when held, neutralizes a super-effective Rock type move.',
      },
    ],
  },
  {
    name: 'Ghost',
    baseInfo:
      'Ghosts are rare Pokémon, and the only type to have two immunities. Later games have added more to the roster so they now sit third from bottom in terms of numbers, above Ice and Fairy. In the first generation, Ghost moves has no effect on Psychic Pokémon, however, it was later changed to be super-effective. When paired with the Dark type it was the only type combination to have no weaknesses before the Fairy type was introduced in Gen 6.',
    baseSubInfo:
      'In Generations 1-3, all Ghost type moves were categorized as Physical.',
    effects: [
      {
        type: 'immunity',
        description: 'Ghost type Pokémon cannot be prevented from switching out (e.g. via Mean Look or Shadow Tag) or running from battle.',
      },
      {
        type: 'move',
        moves: ['Foresight', 'Odor Sleuth'],
        description: 'The moves Foresight and Odor Sleuth, and the ability Scrappy allow Normal and Fighting type moves to hit Ghost type Pokémon.',
      },
      {
        type: 'ability',
        abilities: ['Scrappy'],
        description: 'The ability Scrappy allows Normal and Fighting type moves to hit Ghost type Pokémon.',
      },
      {
        type: 'move',
        moves: ['Trick-or-Treat'],
        description: 'The move Trick-or-Treat adds the Ghost type to the target\'s type.',
      },
      {
        type: 'move',
        moves: ['Curse'],
        description: 'The move Curse works differently for Ghost type Pokémon, halving the user\'s HP and inflicting a curse that makes the target lose 1⁄4 of their HP each turn.',
      },
      {
        type: 'ability',
        abilities: ['Rattled'],
        description: 'The ability Rattled raises the Pokémon\'s Speed one stage when hit by a Ghost type attack.',
      },
      {
        type: 'ability',
        abilities: ['Purifying Salt'],
        description: 'A Pokémon with the Purifying Salt ability takes 50% less damage when hit by a Ghost type attack.',
      },
      {
        type: 'item',
        items: ['Spooky Plate', 'Spell Tag'],
        description: 'The items Spooky Plate and Spell Tag increase the power of Ghost type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Ghost Gem'],
        description: 'The Ghost Gem increases the power of a Ghost type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Kasib Berry'],
        description: 'The Kasib Berry, when held, neutralizes a super-effective Ghost type move.',
      },
      {
        type: 'item',
        items: ['Griseous Orb'],
        description: 'Griseous Orb boosts Ghost type attacks by 20% when held by Giratina.',
      },
    ],
  },
  {
    name: 'Dragon',
    baseInfo:
      'Dragons are among the most elusive and powerful of all Pokémon. Nineteen legendary Pokémon are part Dragon type and eight have legendary-like stats (aka pseudo-legendary). They are notoriously difficult to train due to requiring more EXP points per level than most non-legendary Pokémon, and the fact they evolve much later means they are in their weaker forms for longer. Interestingly, many final-evolution Dragon types have a 4x weakness to the Ice type.',
    baseSubInfo:
      'In Generations 1-3, all Dragon type moves were categorized as Special.',
    effects: [
      {
        type: 'terrain',
        description: 'The power of Dragon type moves is reduced by 50% when the target is on the ground and Misty Terrain is active.',
      },
      {
        type: 'ability',
        abilities: ['Dragon\'s Maw'],
        description: 'The ability Dragon\'s Maw increases the power of Dragon type moves by 50%.',
      },
      {
        type: 'item',
        items: ['Draco Plate', 'Dragon Fang'],
        description: 'The items Draco Plate and Dragon Fang increase the power of Dragon type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Dragon Gem'],
        description: 'The Dragon Gem increases the power of a Dragon type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Haban Berry'],
        description: 'The Haban Berry, when held, neutralizes a super-effective Dragon type move.',
      },
      {
        type: 'item',
        items: ['Soul Dew'],
        description: 'Soul Dew boosts Psychic and Dragon type attacks by 20% when held by Latias or Latios.',
      },
      {
        type: 'item',
        items: ['Adamant Orb', 'Lustrous Orb', 'Griseous Orb'],
        description: 'Adamant Orb, Lustrous Orb and Griseous Orb boost Dragon type attacks by 20% when held by Dialga, Palkia or Giratina respectively.',
      },
    ],
  },
  {
    name: 'Dark',
    baseInfo:
      'The Dark type was introduced in the second generation of Pokémon games as a measure to balance the types. In particular, its immunity to Psychic cut down that type\'s advantage by a long way. When paired with the Ghost type it was the only type combination to have no weaknesses before the Fairy type was introduced in Gen 6.',
    baseSubInfo:
      'In Generations 2-3, all Dark type moves were categorized as Special.',
    effects: [
      {
        type: 'ability',
        abilities: ['Rattled'],
        description: 'The ability Rattled raises the Pokémon\'s Speed one stage when hit by a Dark type attack.',
      },
      {
        type: 'ability',
        abilities: ['Justified'],
        description: 'The ability Justified raises the Pokémon\'s Attack one stage when hit by a Dark type attack.',
      },
      {
        type: 'ability',
        abilities: ['Dark Aura'],
        description: 'The Dark Aura ability increases the power of Dark type moves for all Pokémon on the field by 33%.',
      },
      {
        type: 'ability',
        abilities: ['Aura Break'],
        description: 'If Pokémon with the abilities Dark Aura and Aura Break (i.e. Yveltal and Zygarde) are both in battle, the power of Dark type moves for all Pokémon on the field instead decreases by 25%.',
      },
      {
        type: 'move',
        moves: ['Miracle Eye'],
        description: 'The move Miracle Eye allows Psychic type moves to hit Dark type Pokémon.',
      },
      {
        type: 'item',
        items: ['Dread Plate', 'Black Glasses'],
        description: 'The items Dread Plate and Black Glasses increase the power of Dark type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Dark Gem'],
        description: 'The Dark Gem increases the power of a Dark type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Colbur Berry'],
        description: 'The Colbur Berry, when held, neutralizes a super-effective Dark type move.',
      },
    ],
  },
  {
    name: 'Steel',
    baseInfo:
      'The Steel type was introduced in the second generation of Pokémon games. It is the strongest type defensively, with 10 types being not very effective against it and the Poison type having no effect. From Pokémon X/Y onwards, it lost its Ghost and Dark resistance, those types now dealing neutral damage. The Steel type also has the highest average Defense stat in the games.',
    baseSubInfo:
      'In Generations 2-3, all Steel type moves were categorized as Physical.',
    effects: [
      {
        type: 'immunity',
        description: 'Steel type Pokémon are immune to poisoning.',
      },
      {
        type: 'ability',
        abilities: ['Corrosion'],
        description: 'However, the Corrosion ability allows the Pokémon to bypass that immunity.',
      },
      {
        type: 'weather',
        description: 'Steel type Pokémon do not take damage during a sandstorm.',
      },
      {
        type: 'ability',
        abilities: ['Sand Force'],
        description: 'The Sand Force ability increases the power of Steel type moves by 30% during a sandstorm.',
      },
      {
        type: 'ability',
        abilities: ['Magnet Pull'],
        description: 'The Magnet Pull ability prevents Steel type Pokémon from switching out.',
      },
      {
        type: 'ability',
        abilities: ['Steelworker'],
        description: 'Steelworker increases the power of Steel type moves by 50%.',
      },
      {
        type: 'move',
        moves: ['Salt Cure'],
        description: 'The move Salt Cure deals increased damage at the end of each turn to Water types.',
      },
      {
        type: 'item',
        items: ['Iron Plate', 'Metal Coat'],
        description: 'The items Iron Plate and Metal Coat increase the power of Steel type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Steel Gem'],
        description: 'The Steel Gem increases the power of a Steel type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Babiri Berry'],
        description: 'The Babiri Berry, when held, neutralizes a super-effective Steel type move.',
      },
      {
        type: 'item',
        items: ['Adamant Orb'],
        description: 'Adamant Orb boosts Steel type attacks by 20% when held by Dialga.',
      },
    ],
  },
  {
    name: 'Fairy',
    baseInfo:
      'The Fairy type was introduced in Generation 6 - the first new type for more than 12 years! Its main intention was to balance the type chart by reducing the power of dragons, while also giving an offensive boost to the Poison and Steel types. Several old Pokémon were retyped and new Pokémon introduced, and in the years since the total number of Fairy type Pokémon has caught up somewhat with the other types.',
    baseSubInfo: '',
    effects: [
      {
        type: 'ability',
        abilities: ['Pixilate'],
        description: 'The ability Pixilate changes Normal type moves to Fairy type, and increases their power by 20%.',
      },
      {
        type: 'ability',
        abilities: ['Fairy Aura'],
        description: 'The Fairy Aura ability increases the power of Fairy type moves for all Pokémon on the field by 33%.',
      },
      {
        type: 'ability',
        abilities: ['Aura Break'],
        description: 'If Pokémon with the abilities Fairy Aura and Aura Break (i.e. Xerneas and Zygarde) are both in battle, the power of Fairy type moves for all Pokémon on the field instead decreases by 25%.',
      },
      {
        type: 'item',
        items: ['Pixie Plate'],
        description: 'The item Pixie Plate increases the power of Fairy type moves by 20% when held.',
      },
      {
        type: 'item',
        items: ['Fairy Gem'],
        description: 'The Fairy Gem increases the power of a Fairy type move by 30% when held, and is then consumed.',
      },
      {
        type: 'item',
        items: ['Roseli Berry'],
        description: 'The Roseli Berry, when held, neutralizes a super-effective Fairy type move.',
      },
    ],
  },
]