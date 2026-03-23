export const GENRES = [
  "Action", "Adventure", "Angst", "Romance", "Humor", 
  "Drama", "Fantasy", "Sci-Fi", "Hurt/Comfort", 
  "Mystery", "Supernatural", "Suspense", "Family", "Friendship"
];

export const GENERAL_TROPES = [
  { name: "Betrayal", tags: ["Betrayal", "Traitor"] },
  { name: "Fix-It", tags: ["Fix-It", "Canon Fix-It", "Time Travel Fix-It"] },
  { name: "Time Travel", tags: ["Time Travel", "Peggy Sue", "Time Loop"] },
  { name: "Crossover", tags: ["Crossover", "Alternate Universe - Crossover"] },
  { name: "Characters Watch Their Show", tags: ["Characters Watch Their Show", "Characters Watch Their Future", "Watching the Show", "Reading the Books"] },
  { name: "Soulmates", tags: ["Soulmates", "Alternate Universe - Soulmates"] },
  { name: "AU - Canon Divergence", tags: ["Alternate Universe - Canon Divergence", "Canon Divergence"] },
  { name: "AU - Modern", tags: ["Alternate Universe - Modern Setting", "Modern AU"] },
  { name: "Slow Burn", tags: ["Slow Burn", "Slow Romance"] },
  { name: "Enemies to Lovers", tags: ["Enemies to Lovers", "Rivals to Lovers"] },
  { name: "Found Family", tags: ["Found Family", "Family of Choice"] }
];

export const FANDOMS = [
  {
    id: "dxd",
    name: "Highschool DxD",
    ao3Name: "High School DxD",
    characters: ["Hyoudou Issei", "Gremory Rias", "Himejima Akeno", "Argento Asia", "Toujou Koneko", "Xenovia Quarta", "Gasper Vladi", "Vali Lucifer", "Azazel", "Sirzechs Lucifer"],
    tropes: [
      { name: "Betrayed Issei", tags: ["Betrayed Issei", "Rias betrays Issei"] },
      { name: "Overpowered Issei", tags: ["Overpowered Issei", "OP Issei", "Godlike Issei", "Strong Issei"] },
      { name: "Smart Issei", tags: ["Smart Issei", "Intelligent Issei"] },
      { name: "Different Sacred Gear", tags: ["Different Sacred Gear", "Issei with a different Sacred Gear"] },
      { name: "Dragon Issei", tags: ["Dragon Issei", "Issei is a dragon"] },
      { name: "Leaves ORC", tags: ["Issei leaves the Occult Research Club", "Issei leaves Gremory"] }
    ]
  },
  {
    id: "sao",
    name: "Sword Art Online",
    ao3Name: "Sword Art Online",
    characters: ["Kirigaya Kazuto | Kirito", "Yuuki Asuna", "Asada Shino | Sinon", "Kirigaya Suguha | Leafa", "Klein", "Agil", "Alice Zuberg", "Eugeo", "Kayaba Akihiko"],
    tropes: [
      { name: "OP Kirito", tags: ["Overpowered Kirito", "OP Kirito", "Godlike Kirito"] },
      { name: "Beta Tester Kirito", tags: ["Beta Tester Kirito", "Kirito is a beta tester"] },
      { name: "Aincrad Floor by Floor", tags: ["Aincrad Floor by Floor", "Floor by Floor", "Progressive"] },
      { name: "Different Death Game", tags: ["Different Death Game", "Alternate Death Game"] }
    ]
  },
  {
    id: "bleach",
    name: "Bleach",
    ao3Name: "Bleach",
    characters: ["Kurosaki Ichigo", "Kuchiki Rukia", "Inoue Orihime", "Ishida Uryuu", "Aizen Sousuke", "Kuchiki Byakuya", "Urahara Kisuke", "Shihouin Yoruichi", "Zaraki Kenpachi", "Hitsugaya Toushirou"],
    tropes: [
      { name: "Vasto Lorde Ichigo", tags: ["Vasto Lorde Ichigo", "Hollow Ichigo", "Arrancar Ichigo", "Espada Ichigo"] },
      { name: "Captain Ichigo", tags: ["Captain Kurosaki Ichigo", "Gotei 13 Captain Ichigo"] },
      { name: "Smart Ichigo", tags: ["Smart Ichigo", "Genius Ichigo"] },
      { name: "Quincy Ichigo", tags: ["Quincy Ichigo", "Sternritter Ichigo"] },
      { name: "Soul Society Betrayal", tags: ["Soul Society Betrayal", "Betrayed Ichigo"] }
    ]
  },
  {
    id: "mha",
    name: "My Hero Academia",
    ao3Name: "Boku no Hero Academia | My Hero Academia",
    characters: ["Midoriya Izuku", "Bakugou Katsuki", "Todoroki Shouto", "Uraraka Ochako", "Yagi Toshinori | All Might", "Aizawa Shouta | Eraserhead", "Shigaraki Tomura", "Dabi", "Toga Himiko", "Takami Keigo | Hawks"],
    tropes: [
      { name: "Quirkless Izuku", tags: ["Quirkless Midoriya Izuku", "Midoriya Izuku is Quirkless"] },
      { name: "Villain Izuku", tags: ["Villain Midoriya Izuku", "Alternate Universe - Villain Midoriya Izuku"] },
      { name: "Vigilante Izuku", tags: ["Vigilante Midoriya Izuku", "Vigilante Izuku"] },
      { name: "Different Quirk", tags: ["Midoriya Izuku Has A Quirk", "Alternate Quirk Midoriya Izuku", "All For One Midoriya Izuku"] },
      { name: "Dad Might", tags: ["Dad Might", "Parental Yagi Toshinori | All Might"] },
      { name: "Class 1-A Family", tags: ["Class 1-A as Family", "Class 1-A Friendship"] }
    ]
  },
  {
    id: "httyd",
    name: "How to Train Your Dragon",
    ao3Name: "How to Train Your Dragon (Movies)",
    characters: ["Hiccup Horrendous Haddock III", "Toothless", "Astrid Hofferson", "Stoick the Vast", "Valka", "Fishlegs Ingerman", "Snotlout Jorgenson", "Ruffnut Thorston", "Tuffnut Thorston"],
    tropes: [
      { name: "Never shot down Toothless", tags: ["Alternate Universe - Canon Divergence", "What If Hiccup Never Shot Down Toothless"] },
      { name: "Hiccup leaves Berk", tags: ["Hiccup Leaves Berk", "Runaway Hiccup"] },
      { name: "Dragon Hiccup", tags: ["Dragon Hiccup", "Hiccup is a Dragon"] },
      { name: "Chief Hiccup", tags: ["Chief Hiccup Horrendous Haddock III", "Chief Hiccup"] },
      { name: "Berk finds out early", tags: ["Berk Finds Out", "Identity Reveal"] }
    ]
  },
  {
    id: "frozen",
    name: "Frozen",
    ao3Name: "Frozen (Disney Movies)",
    characters: ["Elsa", "Anna", "Kristoff", "Olaf", "Hans", "Sven", "Iduna", "Agnarr"],
    tropes: [
      { name: "Elsa runs away", tags: ["Runaway Elsa", "Elsa Leaves"] },
      { name: "Dark Elsa", tags: ["Dark Elsa", "Villain Elsa"] },
      { name: "Anna has magic", tags: ["Magic Anna", "Anna Has Magic"] },
      { name: "Fire Magic Anna", tags: ["Fire Magic Anna", "Pyrokinesis"] }
    ]
  },
  {
    id: "spiderman",
    name: "Spider-Man",
    ao3Name: "Spider-Man - All Media Types",
    characters: ["Peter Parker", "Mary Jane Watson", "Gwen Stacy", "Miles Morales", "May Parker (Spider-Man)", "Norman Osborn", "Harry Osborn", "Tony Stark", "Felicia Hardy", "Otto Octavius"],
    tropes: [
      { name: "Irondad", tags: ["Irondad and Spiderson", "Parental Tony Stark", "Tony Stark Acting as a Parental Figure"] },
      { name: "Field Trip", tags: ["Field Trip to Stark Industries", "Peter Parker's Field Trip"] },
      { name: "Identity Reveal", tags: ["Identity Reveal", "Secret Identity Reveal"] },
      { name: "Symbiote Peter", tags: ["Symbiote Peter Parker", "Venom Symbiote", "Dark Peter"] }
    ]
  },
  {
    id: "avengers",
    name: "Avengers",
    ao3Name: "The Avengers (Marvel Movies)",
    characters: ["Tony Stark", "Steve Rogers", "Natasha Romanoff", "Thor", "Bruce Banner", "Clint Barton", "Loki", "James \"Bucky\" Barnes", "Peter Parker", "Wanda Maximoff"],
    tropes: [
      { name: "Civil War Fix-It", tags: ["Captain America: Civil War Fix-It", "Civil War Team Iron Man", "Team Cap Bashing"] },
      { name: "Team as Family", tags: ["Avengers as Family", "Found Family"] },
      { name: "Not Steve Friendly", tags: ["Not Steve Rogers Friendly", "Steve Rogers Bashing"] },
      { name: "Bucky Recovery", tags: ["Bucky Barnes Recovery", "Winter Soldier Recovery"] }
    ]
  },
  {
    id: "hp",
    name: "Harry Potter",
    ao3Name: "Harry Potter - J. K. Rowling",
    characters: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Draco Malfoy", "Severus Snape", "Albus Dumbledore", "Tom Riddle | Voldemort", "Sirius Black", "Remus Lupin"],
    tropes: [
      { name: "Wrong Boy Who Lived", tags: ["Wrong Boy Who Lived", "WBWL"] },
      { name: "Slytherin Harry", tags: ["Slytherin Harry Potter", "Alternate Sorting"] },
      { name: "Smart Harry", tags: ["Smart Harry Potter", "Ravenclaw Harry Potter"] },
      { name: "Dark Harry", tags: ["Dark Harry Potter", "Grey Harry Potter"] },
      { name: "Severitus", tags: ["Severitus", "Snape Adopts Harry Potter", "Parental Severus Snape"] },
      { name: "Master of Death", tags: ["Master of Death Harry Potter", "MoD Harry"] }
    ]
  },
  {
    id: "naruto",
    name: "Naruto",
    ao3Name: "Naruto",
    characters: ["Uzumaki Naruto", "Uchiha Sasuke", "Haruno Sakura", "Hatake Kakashi", "Hyuuga Hinata", "Uchiha Itachi", "Namikaze Minato", "Uchiha Madara", "Jiraiya", "Nara Shikamaru"],
    tropes: [
      { name: "Naruto leaves Konoha", tags: ["Missing-nin Uzumaki Naruto", "Runaway Naruto", "Banished Naruto"] },
      { name: "Smart Naruto", tags: ["Smart Uzumaki Naruto", "Genius Naruto"] },
      { name: "Neglected Naruto", tags: ["Neglected Uzumaki Naruto"] },
      { name: "ANBU Naruto", tags: ["ANBU Uzumaki Naruto"] },
      { name: "Akatsuki Naruto", tags: ["Akatsuki Uzumaki Naruto", "Villain Naruto"] },
      { name: "Time Travel", tags: ["Time Travel", "Time Travel Fix-It"] }
    ]
  },
  {
    id: "got",
    name: "Game of Thrones",
    ao3Name: "Game of Thrones (TV) | A Song of Ice and Fire",
    characters: ["Jon Snow", "Daenerys Targaryen", "Tyrion Lannister", "Arya Stark", "Sansa Stark", "Cersei Lannister", "Jaime Lannister", "Robb Stark", "Ned Stark", "Margaery Tyrell"],
    tropes: [
      { name: "Jon Knows Early", tags: ["Jon Snow Knows His Parentage Early", "Rhaegar Targaryen/Lyanna Stark"] },
      { name: "Ned Lives", tags: ["Ned Stark Lives", "Ned Stark Survives"] },
      { name: "King Jon", tags: ["King in the North Jon Snow", "King Jon Snow"] },
      { name: "Sansa Takes Charge", tags: ["BAMF Sansa Stark", "Smart Sansa Stark"] }
    ]
  }
];