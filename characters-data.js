// ===========================================
// Tactile Constellation - Character Data
// 3 Books, complete with NLP-derived positions
// ===========================================

window.BOOKS = {
  
  // =========================================
  // BOOK 1: The Little Prince
  // =========================================
  prince: {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    tagline: "A pilot crash-lands in the Sahara desert and meets a boy from a tiny planet. A story about love, loneliness, and what it means to truly see.",
    color: "gold",
    
    characters: {
      "prince": {
        name: "The Little Prince",
        shape: "star",
        archetype: "Hero",
        size: "L",
        sizeLabel: "Large",
        sizeDiameter: "44mm",
        frequency: 486,
        position: "center",
        positionDetail: "Center of the board — the hero stands at the heart of the story",
        about: "A small golden-haired boy from Asteroid B-612. He travels from planet to planet asking questions only children dare to ask. He loves a single rose more than all the roses in the world.",
        quote: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
        quoteContext: "Said by the fox, but lived by the prince",
        relations: [
          { to: "pilot", type: "green", typeLabel: "Friendship", text: "The pilot becomes his friend in the desert" },
          { to: "rose", type: "yellow", typeLabel: "Love", text: "His beloved flower on his home planet" },
          { to: "fox", type: "green", typeLabel: "Friendship", text: "The fox who teaches him what love means" },
          { to: "snake", type: "red", typeLabel: "Conflict", text: "Who promises to send him home" }
        ]
      },
      
      "pilot": {
        name: "The Pilot",
        shape: "diamond",
        archetype: "Helper",
        size: "L",
        sizeLabel: "Large",
        sizeDiameter: "44mm",
        frequency: 234,
        position: "near-center",
        positionDetail: "Close to the center — he is the storyteller, the bridge between us and the prince",
        about: "Our narrator. He drew elephants in boa constrictors as a child, but adults couldn't see them. He crashes in the desert and finds the prince — the first person who understands his drawings.",
        quote: "Grown-ups never understand anything by themselves, and it is exhausting for children to explain things to them.",
        quoteContext: "From the pilot's opening reflection",
        relations: [
          { to: "prince", type: "green", typeLabel: "Friendship", text: "His unexpected friend in the desert" }
        ]
      },
      
      "rose": {
        name: "The Rose",
        shape: "heart",
        archetype: "Lover",
        size: "L",
        sizeLabel: "Large",
        sizeDiameter: "44mm",
        frequency: 189,
        position: "near-center",
        positionDetail: "Inner ring — the love that defines the prince's whole journey",
        about: "A beautiful but proud rose who grew on the prince's planet. She was vain and full of complaints, but the prince loved her anyway. He didn't realize until he left how much she meant to him.",
        quote: "You're beautiful, but you're empty. One could not die for you.",
        quoteContext: "The prince to the rose garden, comparing to his rose",
        relations: [
          { to: "prince", type: "yellow", typeLabel: "Love", text: "Her one and only" }
        ]
      },
      
      "fox": {
        name: "The Fox",
        shape: "circle",
        archetype: "Guardian",
        size: "M",
        sizeLabel: "Medium",
        sizeDiameter: "32mm",
        frequency: 142,
        position: "middle-ring",
        positionDetail: "Middle ring — close to the prince in friendship, but met during his travels",
        about: "A wise fox who asks the prince to tame him. He teaches the most important lesson in the book: you become responsible forever for what you have tamed.",
        quote: "One only understands the things that one tames.",
        quoteContext: "Teaching the prince about love",
        relations: [
          { to: "prince", type: "green", typeLabel: "Friendship", text: "He chose to be tamed by the prince" }
        ]
      },
      
      "snake": {
        name: "The Snake",
        shape: "triangle",
        archetype: "Villain",
        size: "M",
        sizeLabel: "Medium",
        sizeDiameter: "32mm",
        frequency: 87,
        position: "middle-ring",
        positionDetail: "Middle ring — a dangerous but necessary figure in the prince's story",
        about: "A golden snake the prince meets in the desert. She speaks in riddles and offers the prince a way home — through her bite. She is both threat and salvation.",
        quote: "I can take you farther than any ship.",
        quoteContext: "The snake's mysterious offer",
        relations: [
          { to: "prince", type: "red", typeLabel: "Conflict", text: "Death disguised as a friend" }
        ]
      },
      
      "king": {
        name: "The King",
        shape: "square",
        archetype: "Authority",
        size: "M",
        sizeLabel: "Medium",
        sizeDiameter: "32mm",
        frequency: 64,
        position: "middle-ring",
        positionDetail: "Middle ring — first planet the prince visits on his journey",
        about: "The ruler of an empty planet. He claims to rule over the stars and even the sun, but his subjects are only himself. He commands the prince to be his ambassador.",
        quote: "It is much more difficult to judge oneself than to judge others.",
        quoteContext: "His advice to the prince",
        relations: [
          { to: "prince", type: "red", typeLabel: "Conflict", text: "He wants the prince as his subject" }
        ]
      },
      
      "vain": {
        name: "The Vain Man",
        shape: "pentagon",
        archetype: "Trickster",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 32,
        position: "outer-ring",
        positionDetail: "Outer ring — a brief stop on the prince's interplanetary journey",
        about: "Lives alone on his planet, wearing a hat to lift in salute. He hears only compliments and asks the prince to admire him over and over.",
        quote: "Admirers, that is to say, people who consider me the handsomest, best-dressed, richest, and most intelligent man on this planet.",
        quoteContext: "Defining what he wants",
        relations: [
          { to: "prince", type: "red", typeLabel: "Conflict", text: "Only wants admiration" }
        ]
      },
      
      "businessman": {
        name: "The Businessman",
        shape: "square",
        archetype: "Authority",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 36,
        position: "outer-ring",
        positionDetail: "Outer ring — counting stars he believes he owns",
        about: "He spends his days counting stars and writing the totals on pieces of paper. He claims to own all the stars because no one else thought of it first. The prince finds him absurd.",
        quote: "Five-hundred-and-one million, six-hundred-twenty-two-thousand, seven-hundred-thirty-one.",
        quoteContext: "His unending counting",
        relations: [
          { to: "prince", type: "red", typeLabel: "Conflict", text: "Owns nothing of value" }
        ]
      },
      
      "lamplighter": {
        name: "The Lamplighter",
        shape: "diamond",
        archetype: "Helper",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 41,
        position: "outer-ring",
        positionDetail: "Outer ring — the only adult the prince truly respects",
        about: "He follows orders to light and extinguish a lamp on his tiny planet. The planet spins so fast he must do it every minute. The prince admires him because he works for something other than himself.",
        quote: "Orders are orders. Good morning. He lit his lamp.",
        quoteContext: "His tireless duty",
        relations: [
          { to: "prince", type: "green", typeLabel: "Friendship", text: "The prince admires his dedication" }
        ]
      },
      
      "geographer": {
        name: "The Geographer",
        shape: "arrow",
        archetype: "Explorer",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 33,
        position: "outer-ring",
        positionDetail: "Outer ring — keeper of maps who has never seen the world",
        about: "An old gentleman who writes books about geography but has never actually explored anything himself. He tells the prince to visit Earth — a fateful suggestion.",
        quote: "Geographers are too important to go loafing about.",
        quoteContext: "Defending his armchair scholarship",
        relations: [
          { to: "prince", type: "green", typeLabel: "Friendship", text: "Sends the prince to Earth" }
        ]
      },
      
      "desertFlower": {
        name: "The Desert Flower",
        shape: "heart",
        archetype: "Lover",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 22,
        position: "outer-ring",
        positionDetail: "Outer ring — a tiny encounter in the empty desert",
        about: "A simple desert flower with three petals. She has seen a caravan of men pass by once. She tells the prince men are blown about by the wind because they have no roots.",
        quote: "Men? There are six or seven of them, I think.",
        quoteContext: "Her view of humanity",
        relations: [
          { to: "prince", type: "green", typeLabel: "Friendship", text: "A brief but kind meeting" }
        ]
      }
    },
    
    assemblySteps: [
      { 
        title: "Place the Little Prince at the center",
        text: "Find the large STAR shape (44mm). Place it on the center cross of the board. The prince stands at the heart of his own story.",
        characterId: "prince"
      },
      { 
        title: "Place the Rose close to the prince",
        text: "Find the large HEART (44mm). Place it in the inner ring, close to the prince. The rose lives on his home planet — she is always near in his heart.",
        characterId: "rose"
      },
      { 
        title: "Place the Pilot next to the prince",
        text: "Find the large DIAMOND (44mm). Place it in the inner ring. The pilot is the prince's friend in the desert — the closest person on Earth.",
        characterId: "pilot"
      },
      { 
        title: "Place the Fox in the middle ring",
        text: "Find the medium CIRCLE (32mm). The fox lives on Earth, away from home — but his lessons travel with the prince forever.",
        characterId: "fox"
      },
      { 
        title: "Place the Snake in the middle ring",
        text: "Find the medium TRIANGLE (32mm). The snake hides in the desert — close to the prince but with dangerous intentions.",
        characterId: "snake"
      },
      { 
        title: "Place the King in the middle ring",
        text: "Find the medium SQUARE (32mm). The first planet the prince visited. The king is part of his journey, but kept his distance.",
        characterId: "king"
      },
      { 
        title: "Place the 5 outer-ring planets",
        text: "Find the small shapes (24mm). Place each on the outer ring: Vain Man, Businessman, Lamplighter, Geographer, and the Desert Flower.",
        characterId: null
      },
      { 
        title: "Connect the prince with GREEN strings",
        text: "Use green strings (friendship). Run a string from the prince's base hole to the pilot, then to the fox. These are his true friends.",
        characterId: null
      },
      { 
        title: "Connect the prince with a YELLOW string",
        text: "Use a yellow string (family/love). Connect the prince to the rose. This is the love that defines his entire journey.",
        characterId: null
      },
      { 
        title: "Connect the prince with RED strings",
        text: "Use red strings (conflict). Connect the prince to the snake and to the strange grown-ups he meets. These are the tensions in his story.",
        characterId: null
      }
    ]
  },
  
  
  // =========================================
  // BOOK 2: Alice's Adventures in Wonderland
  // =========================================
  alice: {
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    year: 1865,
    tagline: "A curious girl falls down a rabbit hole into a world of impossible logic, talking creatures, and a tyrannical queen who loves to shout 'Off with their heads!'",
    color: "rose",
    
    characters: {
      "alice": {
        name: "Alice",
        shape: "star",
        archetype: "Hero",
        size: "L",
        sizeLabel: "Large",
        sizeDiameter: "44mm",
        frequency: 412,
        position: "center",
        positionDetail: "Center of the board — every adventure happens through her eyes",
        about: "A curious seven-year-old girl who falls down a rabbit hole into Wonderland. She grows, shrinks, argues with caterpillars, plays croquet with flamingos, and never loses her sense of wonder — or her manners.",
        quote: "Curiouser and curiouser!",
        quoteContext: "After eating the cake that makes her grow",
        relations: [
          { to: "whiteRabbit", type: "green", typeLabel: "Curiosity", text: "She follows him down the hole" },
          { to: "cheshireCat", type: "green", typeLabel: "Friendship", text: "Her strange but helpful guide" },
          { to: "madHatter", type: "green", typeLabel: "Friendship", text: "Tea with the mad" },
          { to: "queenHearts", type: "red", typeLabel: "Conflict", text: "The queen wants her head" }
        ]
      },
      
      "whiteRabbit": {
        name: "The White Rabbit",
        shape: "arrow",
        archetype: "Explorer",
        size: "L",
        sizeLabel: "Large",
        sizeDiameter: "44mm",
        frequency: 168,
        position: "near-center",
        positionDetail: "Inner ring — the one who pulls Alice into the story",
        about: "A nervous rabbit in a waistcoat, always checking his pocket watch. He's perpetually late and panicking. Alice follows him down his rabbit hole — the doorway into Wonderland.",
        quote: "Oh dear! Oh dear! I shall be too late!",
        quoteContext: "His constant refrain",
        relations: [
          { to: "alice", type: "green", typeLabel: "Curiosity", text: "She follows him into wonder" },
          { to: "queenHearts", type: "yellow", typeLabel: "Family", text: "He serves the queen, fearfully" }
        ]
      },
      
      "cheshireCat": {
        name: "The Cheshire Cat",
        shape: "circle",
        archetype: "Guardian",
        size: "L",
        sizeLabel: "Large",
        sizeDiameter: "44mm",
        frequency: 96,
        position: "near-center",
        positionDetail: "Inner ring — appears whenever Alice needs guidance, then vanishes",
        about: "A grinning cat who appears and disappears at will. He speaks in riddles and paradoxes, but he's the only one in Wonderland who admits everyone is mad — including himself.",
        quote: "We're all mad here. I'm mad. You're mad.",
        quoteContext: "Explaining Wonderland to Alice",
        relations: [
          { to: "alice", type: "green", typeLabel: "Friendship", text: "Her guide through madness" }
        ]
      },
      
      "madHatter": {
        name: "The Mad Hatter",
        shape: "pentagon",
        archetype: "Trickster",
        size: "M",
        sizeLabel: "Medium",
        sizeDiameter: "32mm",
        frequency: 78,
        position: "middle-ring",
        positionDetail: "Middle ring — host of the famous tea party",
        about: "Forever stuck at 6 o'clock tea-time because he 'killed time'. He asks unanswerable riddles, sings nonsense songs, and rotates around the table changing seats whenever a cup gets dirty.",
        quote: "Why is a raven like a writing desk?",
        quoteContext: "His unanswerable riddle",
        relations: [
          { to: "alice", type: "green", typeLabel: "Friendship", text: "Welcomes her to tea" },
          { to: "marchHare", type: "green", typeLabel: "Friendship", text: "His mad tea companion" },
          { to: "dormouse", type: "yellow", typeLabel: "Family", text: "Their sleepy third" }
        ]
      },
      
      "queenHearts": {
        name: "The Queen of Hearts",
        shape: "triangle",
        archetype: "Villain",
        size: "M",
        sizeLabel: "Medium",
        sizeDiameter: "32mm",
        frequency: 84,
        position: "middle-ring",
        positionDetail: "Middle ring — Wonderland's tyrant",
        about: "Wonderland's furious monarch. She demands beheadings for any small offense — losing at croquet, painting roses the wrong color, even being too late. Everyone fears her except Alice, who finally tells her she is 'nothing but a pack of cards'.",
        quote: "Off with their heads!",
        quoteContext: "Her solution to every problem",
        relations: [
          { to: "alice", type: "red", typeLabel: "Conflict", text: "Wants Alice executed" },
          { to: "kingHearts", type: "yellow", typeLabel: "Family", text: "Her timid husband" },
          { to: "whiteRabbit", type: "yellow", typeLabel: "Family", text: "Her terrified servant" }
        ]
      },
      
      "kingHearts": {
        name: "The King of Hearts",
        shape: "square",
        archetype: "Authority",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 32,
        position: "outer-ring",
        positionDetail: "Outer ring — overshadowed by his queen",
        about: "A mild-mannered king who acts as judge during Alice's trial. He's nervous about his queen's temper and tries quietly to pardon those she would behead.",
        quote: "Begin at the beginning, and go on till you come to the end: then stop.",
        quoteContext: "His instruction at the trial",
        relations: [
          { to: "queenHearts", type: "yellow", typeLabel: "Family", text: "His fearsome wife" },
          { to: "alice", type: "green", typeLabel: "Friendship", text: "Quietly fair to her" }
        ]
      },
      
      "marchHare": {
        name: "The March Hare",
        shape: "pentagon",
        archetype: "Trickster",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 41,
        position: "outer-ring",
        positionDetail: "Outer ring — co-host of the mad tea party",
        about: "Mad as a March Hare. Splatters butter on the rabbit's watch, drinks tea without ever serving wine, and contributes to all the tea-table nonsense.",
        quote: "Have some wine, the March Hare said in an encouraging tone.",
        quoteContext: "But there was no wine",
        relations: [
          { to: "madHatter", type: "green", typeLabel: "Friendship", text: "Co-host of madness" },
          { to: "dormouse", type: "yellow", typeLabel: "Family", text: "Tea-party trio" }
        ]
      },
      
      "dormouse": {
        name: "The Dormouse",
        shape: "diamond",
        archetype: "Helper",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 28,
        position: "outer-ring",
        positionDetail: "Outer ring — asleep most of the time",
        about: "A tiny mouse who sleeps through most of the tea party. When awake, he tells a story about three little sisters who lived in a treacle well — until the Hatter stuffs him in the teapot.",
        quote: "Once upon a time there were three little sisters...",
        quoteContext: "His sleepy story",
        relations: [
          { to: "madHatter", type: "yellow", typeLabel: "Family", text: "Naps in his cup" },
          { to: "marchHare", type: "yellow", typeLabel: "Family", text: "Naps in his cup too" }
        ]
      },
      
      "mockTurtle": {
        name: "The Mock Turtle",
        shape: "heart",
        archetype: "Lover",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 24,
        position: "outer-ring",
        positionDetail: "Outer ring — a melancholy creature on the seashore",
        about: "A sad turtle who weeps about his school days at the bottom of the sea. He sings the Mock Turtle's song and dances the Lobster Quadrille with Alice.",
        quote: "Once, I was a real turtle.",
        quoteContext: "His tragic origin",
        relations: [
          { to: "gryphon", type: "green", typeLabel: "Friendship", text: "His seaside companion" },
          { to: "alice", type: "green", typeLabel: "Friendship", text: "He sings for her" }
        ]
      },
      
      "gryphon": {
        name: "The Gryphon",
        shape: "arrow",
        archetype: "Explorer",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 19,
        position: "outer-ring",
        positionDetail: "Outer ring — leads Alice to the Mock Turtle",
        about: "Half-eagle, half-lion. The Queen sends him to introduce Alice to the Mock Turtle. He laughs at the Mock Turtle's stories and teaches Alice the Lobster Quadrille.",
        quote: "Hjckrrh!",
        quoteContext: "His meaningful sigh",
        relations: [
          { to: "mockTurtle", type: "green", typeLabel: "Friendship", text: "His seaside friend" },
          { to: "alice", type: "green", typeLabel: "Friendship", text: "Introduces her around" }
        ]
      }
    },
    
    assemblySteps: [
      { 
        title: "Place Alice at the center",
        text: "Find the large STAR (44mm). She is our hero — every Wonderland creature exists in relation to her.",
        characterId: "alice"
      },
      { 
        title: "Place the White Rabbit nearby",
        text: "Find the large ARROW (44mm). He pulls Alice into the story — place him in the inner ring, close to her.",
        characterId: "whiteRabbit"
      },
      { 
        title: "Place the Cheshire Cat nearby",
        text: "Find the large CIRCLE (44mm). He appears whenever Alice needs help — keep him close in the inner ring.",
        characterId: "cheshireCat"
      },
      { 
        title: "Place the Mad Hatter in the middle ring",
        text: "Find the medium PENTAGON (32mm). The tea party is unforgettable but brief — middle ring is right.",
        characterId: "madHatter"
      },
      { 
        title: "Place the Queen of Hearts in the middle ring",
        text: "Find the medium TRIANGLE (32mm). Wonderland's villain — close enough to threaten, far enough to escape.",
        characterId: "queenHearts"
      },
      { 
        title: "Place the outer-ring creatures",
        text: "Find the small shapes (24mm). Place the King, March Hare, Dormouse, Mock Turtle, and Gryphon around the outer ring.",
        characterId: null
      },
      { 
        title: "Connect Alice with GREEN strings",
        text: "Use green (friendship). String Alice to the White Rabbit, Cheshire Cat, Mad Hatter, and the Mock Turtle. These are her wondrous companions.",
        characterId: null
      },
      { 
        title: "Connect Alice with RED strings",
        text: "Use red (conflict). String Alice to the Queen of Hearts. She challenges and threatens her.",
        characterId: null
      },
      { 
        title: "Connect with YELLOW family strings",
        text: "Use yellow (family). String the Queen to the King and the White Rabbit. String the tea-party trio together: Hatter, March Hare, Dormouse.",
        characterId: null
      },
      { 
        title: "Connect the seaside friends with GREEN",
        text: "Use green (friendship). String the Gryphon to the Mock Turtle — the two companions of the seashore.",
        characterId: null
      }
    ]
  },
  
  
  // =========================================
  // BOOK 3: Charlotte's Web
  // =========================================
  charlotte: {
    title: "Charlotte's Web",
    author: "E. B. White",
    year: 1952,
    tagline: "A pig named Wilbur is destined for the Christmas table. A spider named Charlotte decides he will not die. A story about friendship, words, and what one small life can mean.",
    color: "sage",
    
    characters: {
      "wilbur": {
        name: "Wilbur",
        shape: "star",
        archetype: "Hero",
        size: "L",
        sizeLabel: "Large",
        sizeDiameter: "44mm",
        frequency: 384,
        position: "center",
        positionDetail: "Center of the board — Wilbur's life is the heart of the entire story",
        about: "A pig born as the runt of his litter. Saved from death twice — first by Fern, then by Charlotte. He is sweet, anxious, and not very smart, but he loves with his whole self. Charlotte calls him 'SOME PIG'.",
        quote: "I'm less than two months old and I'm tired of living.",
        quoteContext: "When he learns of his fate",
        relations: [
          { to: "charlotte", type: "yellow", typeLabel: "Love", text: "His best friend and savior" },
          { to: "fern", type: "yellow", typeLabel: "Love", text: "The girl who saved his life" },
          { to: "templeton", type: "red", typeLabel: "Conflict", text: "A reluctant ally" },
          { to: "zuckerman", type: "red", typeLabel: "Conflict", text: "Owner who would butcher him" }
        ]
      },
      
      "charlotte": {
        name: "Charlotte",
        shape: "diamond",
        archetype: "Helper",
        size: "L",
        sizeLabel: "Large",
        sizeDiameter: "44mm",
        frequency: 218,
        position: "near-center",
        positionDetail: "Inner ring — Charlotte's web is the engine of the entire plot",
        about: "A grey barn spider with eight legs and infinite kindness. She weaves words into her web — TERRIFIC, RADIANT, HUMBLE — to convince the farmer to spare Wilbur. She dies alone at the fair, but saves him.",
        quote: "You have been my friend. That in itself is a tremendous thing.",
        quoteContext: "Her final words to Wilbur",
        relations: [
          { to: "wilbur", type: "yellow", typeLabel: "Love", text: "The friend she saves" }
        ]
      },
      
      "fern": {
        name: "Fern Arable",
        shape: "heart",
        archetype: "Lover",
        size: "L",
        sizeLabel: "Large",
        sizeDiameter: "44mm",
        frequency: 142,
        position: "near-center",
        positionDetail: "Inner ring — the human child whose love starts everything",
        about: "An eight-year-old girl who saves Wilbur from her father's axe on the day he's born. She visits him at the Zuckerman barn every day, sitting silently and listening to the animals talk.",
        quote: "Please don't kill it! It's unfair.",
        quoteContext: "Her first plea for Wilbur's life",
        relations: [
          { to: "wilbur", type: "yellow", typeLabel: "Love", text: "She saved him as a baby" },
          { to: "arable", type: "yellow", typeLabel: "Family", text: "Her father" },
          { to: "avery", type: "yellow", typeLabel: "Family", text: "Her older brother" }
        ]
      },
      
      "templeton": {
        name: "Templeton",
        shape: "triangle",
        archetype: "Villain",
        size: "M",
        sizeLabel: "Medium",
        sizeDiameter: "32mm",
        frequency: 96,
        position: "middle-ring",
        positionDetail: "Middle ring — necessary but never close",
        about: "A selfish, greedy rat who lives under the pig trough. He helps the others only when bribed with food. But he does help — he finds the words for Charlotte's webs and carries Charlotte's egg sac home.",
        quote: "Let him die. I should worry.",
        quoteContext: "His first response to Wilbur's death sentence",
        relations: [
          { to: "wilbur", type: "red", typeLabel: "Conflict", text: "Tolerates him for food" },
          { to: "charlotte", type: "green", typeLabel: "Friendship", text: "Reluctant ally" }
        ]
      },
      
      "arable": {
        name: "Mr. Arable",
        shape: "square",
        archetype: "Authority",
        size: "M",
        sizeLabel: "Medium",
        sizeDiameter: "32mm",
        frequency: 58,
        position: "middle-ring",
        positionDetail: "Middle ring — Fern's father, who almost kills Wilbur",
        about: "A practical farmer who plans to kill the runt pig — until Fern stops him. He worries about Fern spending so much time in the barn. He represents the adult world that doesn't see what children see.",
        quote: "A pig is a pig. The pig couldn't be expected to live.",
        quoteContext: "His morning logic with Fern",
        relations: [
          { to: "fern", type: "yellow", typeLabel: "Family", text: "His daughter" },
          { to: "wilbur", type: "red", typeLabel: "Conflict", text: "Would have killed him" }
        ]
      },
      
      "avery": {
        name: "Avery Arable",
        shape: "arrow",
        archetype: "Explorer",
        size: "M",
        sizeLabel: "Medium",
        sizeDiameter: "32mm",
        frequency: 48,
        position: "middle-ring",
        positionDetail: "Middle ring — Fern's loud, messy brother",
        about: "Fern's ten-year-old brother. Loud, dirty, fearless, and frequently in trouble. He tries to capture Charlotte in his pocket — luckily, he fails. He's the wild boy energy of the farm.",
        quote: "I'll catch that spider!",
        quoteContext: "His nearly-disastrous attempt",
        relations: [
          { to: "fern", type: "yellow", typeLabel: "Family", text: "His little sister" },
          { to: "charlotte", type: "red", typeLabel: "Conflict", text: "Tried to capture her" }
        ]
      },
      
      "zuckerman": {
        name: "Mr. Zuckerman",
        shape: "square",
        archetype: "Authority",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 32,
        position: "outer-ring",
        positionDetail: "Outer ring — the owner who would butcher Wilbur",
        about: "Fern's uncle, who buys Wilbur from the Arables. He planned to kill him at Christmas — until Charlotte's webs make Wilbur famous. The miracle changes his mind.",
        quote: "We have no ordinary pig.",
        quoteContext: "After seeing 'SOME PIG' in the web",
        relations: [
          { to: "wilbur", type: "red", typeLabel: "Conflict", text: "Would have killed him" }
        ]
      },
      
      "goose": {
        name: "The Goose",
        shape: "pentagon",
        archetype: "Trickster",
        size: "S",
        sizeLabel: "Small",
        sizeDiameter: "24mm",
        frequency: 38,
        position: "outer-ring",
        positionDetail: "Outer ring — repeats everything three-three-three times",
        about: "A barnyard goose who repeats every word three times. She sits on her eggs and gossips constantly. One of her unhatched eggs becomes a stink-bomb under the pig trough.",
        quote: "Certainly-ertainly-ertainly!",
        quoteContext: "Her constant chatter",
        relations: [
          { to: "wilbur", type: "green", typeLabel: "Friendship", text: "Barnyard companion" }
        ]
      }
    },
    
    assemblySteps: [
      { 
        title: "Place Wilbur at the center",
        text: "Find the large STAR (44mm). The whole story exists to save him — he must be at the heart.",
        characterId: "wilbur"
      },
      { 
        title: "Place Charlotte close to Wilbur",
        text: "Find the large DIAMOND (44mm). She is his savior and best friend — keep her in the inner ring, beside him.",
        characterId: "charlotte"
      },
      { 
        title: "Place Fern close to Wilbur",
        text: "Find the large HEART (44mm). She saved him as a baby. Place her in the inner ring on his other side.",
        characterId: "fern"
      },
      { 
        title: "Place Templeton in the middle ring",
        text: "Find the medium TRIANGLE (32mm). The rat is important but selfish — close enough to help, far enough to keep his distance.",
        characterId: "templeton"
      },
      { 
        title: "Place Mr. Arable and Avery in the middle ring",
        text: "Find the medium SQUARE (32mm) and medium ARROW (32mm). Fern's family is important but secondary.",
        characterId: null
      },
      { 
        title: "Place the outer-ring barnyard",
        text: "Find the small shapes (24mm). Place Mr. Zuckerman and the Goose in the outer ring.",
        characterId: null
      },
      { 
        title: "Connect Wilbur with YELLOW strings",
        text: "Use yellow (family/love). String Wilbur to Charlotte and to Fern. These are the two who love him most.",
        characterId: null
      },
      { 
        title: "Connect Fern's family with YELLOW",
        text: "Use yellow (family). String Fern to her father Mr. Arable, and to her brother Avery.",
        characterId: null
      },
      { 
        title: "Connect Wilbur with RED conflict",
        text: "Use red (conflict). String Wilbur to Mr. Arable (who almost killed him), Mr. Zuckerman (who would butcher him), and Templeton (their tense alliance).",
        characterId: null
      },
      { 
        title: "Connect the rest with GREEN",
        text: "Use green (friendship). String the barnyard relationships: the Goose to Wilbur, and Templeton's reluctant alliance with Charlotte.",
        characterId: null
      }
    ]
  }
};

// =====================================
// 8 ARCHETYPE SHAPES META
// =====================================
window.ARCHETYPES = [
  { shape: "star",     name: "Hero",      description: "The protagonist whose story we follow" },
  { shape: "triangle", name: "Villain",   description: "The threat, danger, or opposing force" },
  { shape: "circle",   name: "Guardian",  description: "The wise guide who offers help and insight" },
  { shape: "square",   name: "Authority", description: "A figure of power, order, or rule" },
  { shape: "pentagon", name: "Trickster", description: "Mischievous, unpredictable, playful" },
  { shape: "diamond",  name: "Helper",    description: "A loyal ally who supports the hero" },
  { shape: "heart",    name: "Lover",     description: "A figure of love or deep emotional bond" },
  { shape: "arrow",    name: "Explorer",  description: "Curious, restless, always seeking" },
];
