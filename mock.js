const users = [
  { id: 1, nombre: "Alice" },
  { id: 2, nombre: "Bob" },
  { id: 3, nombre: "Charlie" },
  { id: 4, nombre: "Dave" },
  { id: 5, nombre: "Eve" },
];

const games = [
  { nombre: "Diaries of a Spaceport Janitor" },
  { nombre: "The Witcher 3: Wild Hunt" },
  { nombre: "The Witcher 3: Wild Hunt - Blood and Wine" },
  { nombre: "The Orange Box" },
  { nombre: "Warcraft III: The Frozen Throne" },
  { nombre: "Mafia" },
  { nombre: "Warcraft III: Reign of Chaos" },
  { nombre: "Counter - Strike" },
  { nombre: "Deus Ex" },
  { nombre: "Planescape: Torment" },
  { nombre: "The Witcher 3: Wild Hunt - Hearts of Stone" },
  { nombre: "Left 4 Dead" },
  { nombre: "Half - Life 2: Episode Two" },
  { nombre: "Team Fortress 2" },
  { nombre: "Day of Defeat" },
  { nombre: "Max Payne" },
  { nombre: "Diablo II: Lord of Destruction" },
  { nombre: "Baldur's Gate II: Shadows of Amn" },
  { nombre: "Age of Empires II: The Conquerors Expansion" },
  { nombre: "Age of Empires II: The Age of Kings" },
  { nombre: "System Shock 2" },
  { nombre: "Grim Fandango" },
  { nombre: "Fallout 2" },
  { nombre: "Starcraft" },
  { nombre: "Final Fantasy XIV: Shadowbringers" },
  { nombre: "Resident Evil 2" },
  { nombre: "RimWorld" },
  { nombre: "Hollow Knight" },
  { nombre: "Portal" },
  { nombre: "Medieval II: Total War" },
  { nombre: "Day of Defeat: Source" },
  { nombre: "Half-Life 2" },
  { nombre: "Rome: Total War" },
  { nombre: "Star Wars: Knights of the Old Republic" },
  { nombre: "Gothic II" },
  { nombre: "Unreal Tournament (1999)" },
  { nombre: "Thief: The Dark Project" },
  { nombre: "The Curse of Monkey Island" },
  { nombre: "When The Past Was Around" },
  { nombre: "Hades" },
  { nombre: "Age of Empires II: Definitive Edition" },
  { nombre: "Katana ZERO" },
  { nombre: "The Evil Within 2" },
  { nombre: "OneShot" },
  { nombre: "Steins;Gate" },
  { nombre: "The Wolf Among Us: Episode 1 - Faith" },
  { nombre: "Black Mesa" },
  { nombre: "To the Moon" },
  { nombre: "Portal 2" },
  { nombre: "Mass Effect 2" },
  { nombre: "The Secret of Monkey Island: Special Edition" },
  { nombre: "Warhammer 40,000: Dawn of War - Dark Crusade" },
  { nombre: "Space Rangers 2: Rise of the Dominators" },
  { nombre: "Grand Theft Auto: San Andreas" },
  { nombre: "Vampire: The Masquerade - Bloodlines" },
  { nombre: "Counter-Strike: Source" },
  { nombre: "Max Payne 2: The Fall of Max Payne" },
  { nombre: "Command & Conquer: Generals - Zero Hour" },
  { nombre: "Freelancer" },
  { nombre: "Silent Hill 2" },
  { nombre: "Age of Mythology" },
  { nombre: "Command & Conquer: Red Alert 2 - Yuri's Revenge" },
  { nombre: "Commandos 2: Men of Courage" },
  { nombre: "Command & Conquer: Red Alert 2" },
  { nombre: "Metal Gear Solid" },
  { nombre: "Thief II: The Metal Age" },
  { nombre: "Baldur's Gate" },
  { nombre: "Blood" },
  { nombre: "Tennis World Tour 2" },
  { nombre: "There is no game : Wrong dimension" },
  { nombre: "Persona 4 Golden" },
  { nombre: "Tales From Off-Peak City Vol. 1" },
  { nombre: "Pathologic 2" },
  { nombre: "Divinity: Original Sin II" },
  { nombre: "Vanquish" },
  { nombre: "Final Fantasy IX" },
  { nombre: "Stardew Valley" },
  { nombre: "The Legend of Heroes: Trails in the Sky SC" },
  { nombre: "Devil May Cry 4: Special Edition" },
  { nombre: "Life is Strange: Episode 3 - Chaos Theory" },
  { nombre: "Cities: Skylines" },
  { nombre: "The Wolf Among Us" },
  { nombre: "The Walking Dead: Episode 5 - No Time Left" },
  { nombre: "The Walking Dead: A Telltale Games Series" },
  { nombre: "Fallout: New Vegas" },
  { nombre: "Monkey Island 2 Special Edition: LeChuck's Revenge" },
  { nombre: "Mount & Blade: Warband" },
  { nombre: "Dragon Age: Origins" },
  { nombre: "Football Manager 2010" },
  { nombre: "Dawn of Discovery" },
  { nombre: "Plants vs.Zombies" },
  { nombre: "Savage 2: A Tortured Soul" },
  { nombre: "Supreme Commander: Forged Alliance" },
  { nombre: "RACE 07: Official WTCC Game" },
  { nombre: "Medieval II: Total War Kingdoms" },
  { nombre: "TrackMania United" },
  { nombre: "Company of Heroes" },
  { nombre: "Rise & Fall: Civilizations at War" },
  { nombre: "Hitman: Blood Money" },
  { nombre: "Hearts of Iron II: Doomsday" },

  { nombre: "The Sims 2: Open for Business" },
  { nombre: "Command & Conquer: The First Decade" },
  { nombre: "Knights of Honor" },
  { nombre: "Psychonauts" },
  { nombre: "Rise of Nations: Thrones & Patriots" },
  { nombre: "Unreal Tournament 2004" },
  { nombre: "NBA Live 2004" },
  { nombre: "Patrician III: Rise of the Hanse" },
  { nombre: "Age of Mythology: The Titans" },
  { nombre: "Rise of Nations" },
  { nombre: "Grand Theft Auto: Vice City" },
  { nombre: "Stronghold: Crusader" },
  { nombre: "The Elder Scrolls III: Morrowind" },
  { nombre: "Original War" },
  { nombre: "Gothic" },
  { nombre: "Stronghold" },
  { nombre: "Shogun: Total War Warlord Edition" },
  { nombre: "Desperados: Wanted Dead or Alive" },
  { nombre: "Baldur's Gate II: Throne of Bhaal" },
  { nombre: "Steel Soldiers" },
  { nombre: "Clive Barker's Undying" },
  { nombre: "Homeworld: Cataclysm" },
  { nombre: "Diablo II" },
  { nombre: "Homeworld" },
  { nombre: "Sid Meier's Alpha Centauri" },
  { nombre: "Myth II: Soulblighter" },
  { nombre: "Fallout" },
  { nombre: "Total Annihilation" },
  { nombre: "Master of Orion II: Battle at Antares" },
  { nombre: "Quake" },
  { nombre: "Sid Meier's Civilization II" },
  { nombre: "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated" },
  { nombre: "Command & Conquer Remastered Collection" },
  { nombre: "One Step From Eden" },
  { nombre: "Half - Life: Alyx" },
  { nombre: "Ori and the Will of the Wisps" },
  { nombre: "Phoenix Wright: Ace Attorney Trilogy" },
  { nombre: "Mega Man 11" },
  { nombre: "Final Fantasy XII: The Zodiac Age" },
  { nombre: "A Hat in Time" },
  { nombre: "The Silver Case" },
  { nombre: "Ori and the Blind Forest: Definitive Edition" },
  { nombre: "Battlezone 98 Redux" },
  { nombre: "Pathologic Classic HD" },
  {
    nombre: "Tales From The Borderlands: Episode 5 - The Vault of the Traveler",
  },
  { nombre: "Mega Man Legacy Collection" },
  { nombre: "Life is Strange: Episode 2 - Out of Time" },
  { nombre: "Ori and the Blind Forest" },
  { nombre: "LISA: The Painful" },
  { nombre: "The Wolf Among Us: Episode 5 - Cry Wolf" },
  { nombre: "Divinity: Original Sin" },
  { nombre: "Gas Guzzlers Extreme" },
  { nombre: "Dishonored: The Brigmore Witches" },
  { nombre: "Europa Universalis IV" },
  { nombre: "Mortal Kombat Komplete Edition" },
  { nombre: "Crusader Kings II: The Old Gods" },
  { nombre: "Victoria II: Heart of Darkness" },
  { nombre: "Euro Truck Simulator 2" },
  { nombre: "The Cat Lady" },
  { nombre: "Primordia" },
  { nombre: "Crusader Kings II" },
  { nombre: "Batman: Arkham City" },
  { nombre: "Terraria" },
  { nombre: "Warhammer 40, 000: Dawn of War II - Chaos Rising" },
  { nombre: "S.T.A.L.K.E.R.: Call of Pripyat" },
  { nombre: "Machinarium" },
  { nombre: "Multiwinia: Survival of the Flattest" },
  { nombre: "AudioSurf" },
  { nombre: "The Witcher" },
  { nombre: "Heroes of Might and Magic V: Tribes of the East" },
  { nombre: "IL - 2 Sturmovik: 1946" },
  { nombre: "Dark Messiah of Might and Magic" },
  { nombre: "Devil May Cry 3: Special Edition" },
  { nombre: "FlatOut 2" },
  { nombre: "Black & White 2 - Battle of the Gods" },
  { nombre: "Need for Speed: Most Wanted" },
  { nombre: "Tom Clancy's Splinter Cell: Chaos Theory" },
  { nombre: "Nexus: The Jupiter Incident" },
  { nombre: "Torrente" },
  { nombre: "Codename: Panzers, Phase One" },
  { nombre: "Warhammer 40,000: Dawn of War" },
  { nombre: "The Sims 2" },
  { nombre: "Silent Storm" },
  { nombre: "Counter-Strike: Condition Zero" },
  { nombre: "Legacy of Kain: Defiance" },
  { nombre: "Victoria: An Empire Under the Sun" },
  { nombre: "Tom Clancy's Rainbow Six 3: Raven Shield" },
  { nombre: "Jurassic Park: Operation Genesis" },
  { nombre: "SimCity 4" },
  { nombre: "RollerCoaster Tycoon 2" },
  { nombre: "Geoff Crammond's Grand Prix 4" },
  { nombre: "Medieval: Total War" },
  { nombre: "Operation Flashpoint: Resistance" },
  { nombre: "Star Wars Jedi Knight II: Jedi Outcast" },
  { nombre: "Disciples II: Dark Prophecy" },
  { nombre: "Capitalism II" },
  { nombre: "Legacy of Kain: Soul Reaver 2" },
  { nombre: "Return to Castle Wolfenstein" },
  { nombre: "IL-2 Sturmovik" },
  { nombre: "Europa Universalis II" },
  { nombre: "Aliens Versus Predator 2" },
  { nombre: "Operation Flashpoint: Cold War Crisis" },
  { nombre: "Arcanum: Of Steamworks and Magick Obscura" },
  { nombre: "The Longest Journey" },
  { nombre: "The Operative: No One Lives Forever" },
  { nombre: "Sacrifice" },
  { nombre: "Zeus: Master of Olympus" },
  { nombre: "RollerCoaster Tycoon: Loopy Landscapes" },
  { nombre: "FreeSpace 2" },
  { nombre: "Half - Life" },
  { nombre: "Age of Empires" },
  { nombre: "The Last Express" },
  { nombre: "Diablo" },
  { nombre: "Command & Conquer: Red Alert" },
  { nombre: "Duke Nukem 3D" },
  { nombre: "Sword of the Necromancer" },
  { nombre: "Project Wingman" },
  { nombre: "A Short Hike" },
  {
    nombre:
      "The Walking Dead: The Telltale Series - The Final Season Episode 4: Take Us Back",
  },
  { nombre: "Devil May Cry 5" },
  { nombre: "Horizon Chase Turbo" },
  { nombre: "Mega Man Legacy Collection 2" },
  { nombre: "Rain World" },
  { nombre: "NieR: Automata" },
  { nombre: "Danganronpa: Trigger Happy Havoc" },
  { nombre: "Dariusburst: Chronicle Saviours" },
  { nombre: "Life is Strange" },
  { nombre: "Tales from the Borderlands: A Telltale Game Series" },
  { nombre: "Life is Strange: Episode 4 - Dark Room" },
  { nombre: "Tales From The Borderlands: Episode 2 - Atlas Mugged" },
  { nombre: "The Talos Principle" },
  { nombre: "Valiant Hearts: The Great War" },
  { nombre: "The Wolf Among Us: Episode 3 - A Crooked Mile" },
  { nombre: "BioShock Infinite: Burial at Sea - Episode Two" },
  { nombre: "South Park: The Stick of Truth" },
  { nombre: "Sid Meier's Civilization V: Brave New World" },
  { nombre: "The Swapper" },
  { nombre: "Street Fighter X Mega Man" },
  { nombre: "Hotline Miami" },
  { nombre: "The Walking Dead: Episode 4 - Around Every Corner" },
  { nombre: "The Walking Dead: Episode 2 - Starved for Help" },
  { nombre: "Europa Universalis III: Divine Wind" },
  { nombre: "Recettear: An Item Shop's Tale" },
  { nombre: "Amnesia: The Dark Descent" },
  { nombre: "Batman: Arkham Asylum" },
  { nombre: "Killing Floor" },
  { nombre: "Wallace & Gromit's Grand Adventures, Episode 2: The Last Resort" },
  { nombre: "DCS: Black Shark" },
  { nombre: "Braid" },
  { nombre: "Defense Grid: The Awakening" },
  { nombre: "King's Bounty: The Legend" },
  { nombre: "Mount & Blade" },
  { nombre: "Mass Effect" },
  { nombre: "Penumbra: Black Plague" },
  { nombre: "Company of Heroes: Opposing Fronts" },
  { nombre: "BioShock" },
  { nombre: "Sid Meier's Civilization IV: Beyond the Sword" },
  { nombre: "Brian Lara International Cricket 2007" },
  { nombre: "Geometry Wars: Retro Evolved" },
  { nombre: "EverQuest II: Echoes of Faydwer" },
  { nombre: "Star Wars: Empire at War: Forces of Corruption" },
  { nombre: "GTR 2" },
  { nombre: "Half-Life 2: Episode One" },
  { nombre: "Red Orchestra: Ostfront 41-45" },
  { nombre: "Star Wars: Battlefront II" },
  { nombre: "Fable: The Lost Chapters" },
  { nombre: "Advent Rising" },
  { nombre: "SWAT 4" },
  { nombre: "Star Wars: Republic Commando" },
  { nombre: "Dangerous Waters" },
  {
    nombre:
      "The Chronicles of Riddick: Escape From Butcher Bay - Developer's Cut",
  },
  { nombre: "The Lord of the Rings: The Battle for Middle - Earth" },
  { nombre: "Prince of Persia: Warrior Within" },
  { nombre: "Need for Speed: Underground 2" },
  { nombre: "Joint Operations: Typhoon Rising" },
  { nombre: "Beyond Good & Evil" },
  { nombre: "Hidden & Dangerous 2" },
  { nombre: "Star Wars Jedi Knight: Jedi Academy" },
  { nombre: "Cold Zero: No Mercy" },
  { nombre: "Age of Wonders: Shadow Magic" },
  { nombre: "Medieval: Total War - Viking Invasion" },
  { nombre: "Vietcong(2003)" },
  { nombre: "No One Lives Forever 2: A Spy in H.A.R.M.'s Way" },
  { nombre: "Battlefield 1942" },
  { nombre: "Serious Sam: The Second Encounter" },
  { nombre: "Medal of Honor: Allied Assault" },
  { nombre: "Startopia" },
  { nombre: "Resident Evil 3: Nemesis" },
  { nombre: "Blade of Darkness" },
  { nombre: "Oni" },
  { nombre: "Giants: Citizen Kabuto" },
  { nombre: "Midtown Madness 2" },
  { nombre: "Metal Fatigue" },
  { nombre: "Shogun: Total War" },
  { nombre: "Star Wars Jedi Knight: Dark Forces II" },
  { nombre: "Full Throttle" },
  { nombre: "ALTDEUS: Beyond Chronos" },
  { nombre: "Suzerain" },
  { nombre: "Batbarian: Testament of the Primordials" },
  { nombre: "Phantom: Covert Ops" },
];

module.exports = { users, games };
