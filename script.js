const stages = [
  {
    title: "Rainbow Meadow",
    scene: "rainbow-meadow",
    sceneType: "Outside",
    floor: "meadow-floor",
    object: "stone-arch",
    topic: "Atmospheric Science",
    story: "A rainbow settles over a bright meadow where the first seal waits inside a vine-wrapped arch.",
    puzzle: "Which gas makes up the largest percentage of Earth's atmosphere?",
    choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    answer: "Nitrogen",
    hint: "It makes up about 78% of the air around you.",
    decor: [
      { type: "rainbow", x: "72%", y: "31%", scale: "1.06", z: "2" },
      { type: "cloud", x: "18%", y: "21%", scale: "1.02", z: "2" },
      { type: "cloud", x: "54%", y: "18%", scale: "0.82", z: "2" },
      { type: "flower-bed", x: "34%", y: "79%", scale: "1.05", z: "2" },
      { type: "flower-bed", x: "77%", y: "82%", scale: "0.88", z: "2" },
      { type: "butterfly", x: "53%", y: "44%", scale: "1", z: "3" }
    ]
  },
  {
    title: "Birdsong Cliffs",
    scene: "bird-cliffs",
    sceneType: "Outside",
    floor: "cliff-floor",
    object: "cliff-marker",
    topic: "World Literature",
    story: "Mira climbs to a high cliff where circling birds trace patterns above a weathered marker stone.",
    puzzle: "Who wrote the novel \"One Hundred Years of Solitude\"?",
    choices: ["Jorge Luis Borges", "Gabriel Garcia Marquez", "Pablo Neruda", "Isabel Allende"],
    answer: "Gabriel Garcia Marquez",
    hint: "The author was a Colombian Nobel Prize winner.",
    decor: [
      { type: "bird-flock", x: "25%", y: "20%", scale: "0.9", z: "3" },
      { type: "bird-flock", x: "68%", y: "24%", scale: "1.1", z: "3" },
      { type: "cloud", x: "46%", y: "16%", scale: "0.76", z: "2" },
      { type: "pine-tree", x: "81%", y: "70%", scale: "1.02", z: "2" },
      { type: "pine-tree", x: "14%", y: "75%", scale: "0.84", z: "2" }
    ]
  },
  {
    title: "Moon Courtyard",
    scene: "courtyard-night",
    sceneType: "Outside",
    floor: "courtyard-floor",
    object: "castle-gate",
    topic: "European History",
    story: "At the haunted castle courtyard, cold moonlight and fluttering bats frame a locked iron gate.",
    puzzle: "Which 1648 agreement ended the Thirty Years' War in Europe?",
    choices: ["Treaty of Versailles", "Peace of Westphalia", "Congress of Vienna", "Treaty of Utrecht"],
    answer: "Peace of Westphalia",
    hint: "It is named after a region in present-day Germany.",
    decor: [
      { type: "moon", x: "78%", y: "20%", scale: "1", z: "2" },
      { type: "bat-flock", x: "26%", y: "23%", scale: "0.9", z: "3" },
      { type: "bat-flock", x: "56%", y: "15%", scale: "0.72", z: "3" },
      { type: "torch", x: "29%", y: "62%", scale: "1", z: "3" },
      { type: "torch", x: "71%", y: "62%", scale: "1", z: "3" },
      { type: "banner", x: "16%", y: "42%", scale: "0.82", z: "2" }
    ]
  },
  {
    title: "Cobweb Hall",
    scene: "castle-hall",
    sceneType: "Inside",
    floor: "tile-floor",
    object: "portrait-frame",
    topic: "Cell Biology",
    story: "Inside the haunted hall, chandeliers sway gently while cobwebs stretch across cracked stone.",
    puzzle: "In eukaryotic cells, which organelle is primarily responsible for ATP production?",
    choices: ["Ribosome", "Golgi apparatus", "Mitochondrion", "Lysosome"],
    answer: "Mitochondrion",
    hint: "It is often called the powerhouse of the cell.",
    decor: [
      { type: "cobweb", x: "12%", y: "17%", scale: "0.92", z: "3" },
      { type: "cobweb", x: "87%", y: "19%", scale: "0.92", z: "3" },
      { type: "chandelier", x: "50%", y: "14%", scale: "0.96", z: "3" },
      { type: "candle", x: "34%", y: "63%", scale: "1", z: "3" },
      { type: "candle", x: "67%", y: "63%", scale: "1", z: "3" }
    ]
  },
  {
    title: "Whisper Library",
    scene: "whisper-library",
    sceneType: "Inside",
    floor: "library-floor",
    object: "book-pedestal",
    topic: "Philosophy",
    story: "Dusty books and drifting whispers fill the haunted library where a restless page turns by itself.",
    puzzle: "Who is the author of \"The Republic\"?",
    choices: ["Aristotle", "Socrates", "Plato", "Heraclitus"],
    answer: "Plato",
    hint: "Socrates appears in the dialogues, but he did not write the work.",
    decor: [
      { type: "cobweb", x: "12%", y: "17%", scale: "0.84", z: "3" },
      { type: "cobweb", x: "87%", y: "18%", scale: "0.84", z: "3" },
      { type: "candle", x: "30%", y: "66%", scale: "1.04", z: "3" },
      { type: "ghost", x: "72%", y: "40%", scale: "0.88", z: "3" },
      { type: "banner", x: "82%", y: "42%", scale: "0.74", z: "2" }
    ]
  },
  {
    title: "Storm Observatory",
    scene: "storm-observatory",
    sceneType: "Inside",
    floor: "metal-floor",
    object: "telescope",
    topic: "Mathematics",
    story: "High in the tower, gears click under a star window while lightning glows beyond the glass.",
    puzzle: "In a normal distribution, about 68% of observations lie within how many standard deviations of the mean?",
    choices: ["1", "2", "3", "4"],
    answer: "1",
    hint: "Think of the 68-95-99.7 rule.",
    decor: [
      { type: "window-arch", x: "76%", y: "34%", scale: "1", z: "2" },
      { type: "star-cluster", x: "76%", y: "33%", scale: "1.02", z: "3" },
      { type: "gear", x: "24%", y: "35%", scale: "1", z: "3" },
      { type: "gear", x: "33%", y: "54%", scale: "0.68", z: "3" },
      { type: "sparkle-cluster", x: "56%", y: "20%", scale: "0.74", z: "3" }
    ]
  },
  {
    title: "Crystal Cavern",
    scene: "crystal-cavern",
    sceneType: "Inside",
    floor: "cave-floor",
    object: "crystal-pillar",
    topic: "Computer Science",
    story: "The cavern narrows into a chamber of glowing crystal, with mist drifting over the stone floor.",
    puzzle: "What is the time complexity of binary search on a sorted array?",
    choices: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
    hint: "Each step removes half of the remaining search space.",
    decor: [
      { type: "crystal", x: "24%", y: "70%", scale: "0.92", z: "3" },
      { type: "crystal", x: "76%", y: "67%", scale: "1.08", z: "3" },
      { type: "stalactite", x: "18%", y: "10%", scale: "1", z: "2" },
      { type: "stalactite", x: "52%", y: "10%", scale: "0.9", z: "2" },
      { type: "stalactite", x: "82%", y: "10%", scale: "0.84", z: "2" },
      { type: "mist", x: "52%", y: "68%", scale: "1.14", z: "2" }
    ]
  },
  {
    title: "Tidewatch Docks",
    scene: "tidewatch-docks",
    sceneType: "Outside",
    floor: "dock-floor",
    object: "lighthouse",
    topic: "Geography",
    story: "Mira reaches a bright harbor where gulls cross the sea air and the old lighthouse points homeward.",
    puzzle: "Which river flows through Budapest?",
    choices: ["Rhine", "Danube", "Seine", "Po"],
    answer: "Danube",
    hint: "It is one of Europe's major rivers and passes through several capitals.",
    decor: [
      { type: "bird-flock", x: "18%", y: "20%", scale: "0.82", z: "3" },
      { type: "cloud", x: "46%", y: "18%", scale: "0.84", z: "2" },
      { type: "boat", x: "56%", y: "53%", scale: "1", z: "3" },
      { type: "reed-cluster", x: "18%", y: "74%", scale: "1", z: "3" },
      { type: "reed-cluster", x: "82%", y: "76%", scale: "0.9", z: "3" }
    ]
  },
  {
    title: "Sun Garden",
    scene: "sun-garden",
    sceneType: "Outside",
    floor: "garden-floor",
    object: "fountain-statue",
    topic: "Economics",
    story: "Past trimmed hedges and bright flowers, a quiet garden gate asks the cost of every choice.",
    puzzle: "In economics, opportunity cost is best defined as which of the following?",
    choices: [
      "The money already spent on a choice",
      "The value of the next best alternative forgone",
      "The cost of producing one additional unit",
      "The profit remaining after taxes"
    ],
    answer: "The value of the next best alternative forgone",
    hint: "It is about what you give up when you choose something else.",
    decor: [
      { type: "hedge", x: "16%", y: "71%", scale: "0.92", z: "2" },
      { type: "hedge", x: "84%", y: "71%", scale: "0.92", z: "2" },
      { type: "flower-bed", x: "36%", y: "81%", scale: "1.02", z: "2" },
      { type: "flower-bed", x: "72%", y: "81%", scale: "0.9", z: "2" },
      { type: "fountain-spray", x: "54%", y: "53%", scale: "1", z: "3" },
      { type: "bird-flock", x: "72%", y: "18%", scale: "0.78", z: "3" }
    ]
  },
  {
    title: "Golden Antechamber",
    scene: "golden-vault",
    sceneType: "Inside",
    floor: "vault-floor",
    object: "sun-gate",
    topic: "Chemistry",
    story: "At the last golden gate, banners hang still and sparks of light drift over the vault floor.",
    puzzle: "Which element has atomic number 26?",
    choices: ["Copper", "Zinc", "Iron", "Nickel"],
    answer: "Iron",
    hint: "It is the metal in hemoglobin that helps blood carry oxygen.",
    decor: [
      { type: "banner", x: "18%", y: "38%", scale: "0.88", z: "2" },
      { type: "banner", x: "82%", y: "38%", scale: "0.88", z: "2" },
      { type: "torch", x: "31%", y: "60%", scale: "1", z: "3" },
      { type: "torch", x: "69%", y: "60%", scale: "1", z: "3" },
      { type: "sparkle-cluster", x: "50%", y: "22%", scale: "1", z: "3" }
    ]
  }
];

const maxGoldBeforeGreed = 10;
const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");
const winScreen = document.getElementById("winScreen");
const homeMessage = document.getElementById("homeMessage");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const hintBtn = document.getElementById("hintBtn");
const nextBtn = document.getElementById("nextBtn");
const treasureChest = document.getElementById("treasureChest");
const goldCounter = document.getElementById("goldCounter");
const vaultMessage = document.getElementById("vaultMessage");
const stageNumber = document.getElementById("stageNumber");
const stageTotal = document.getElementById("stageTotal");
const stageTitle = document.getElementById("stageTitle");
const sceneTypeBadge = document.getElementById("sceneTypeBadge");
const storyText = document.getElementById("storyText");
const topicText = document.getElementById("topicText");
const puzzleText = document.getElementById("puzzleText");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const hintText = document.getElementById("hintText");
const progressFill = document.getElementById("progressFill");
const sceneArt = document.getElementById("sceneArt");
const sceneDecor = document.getElementById("sceneDecor");
const sceneFloor = document.getElementById("sceneFloor");
const stageObject = document.getElementById("stageObject");
const confettiCanvas = document.getElementById("confettiCanvas");

let currentStage = 0;
let stageSolved = false;
let confettiTimer = null;
let goldTaken = 0;

function showScreen(screen) {
  [homeScreen, gameScreen, winScreen].forEach((item) => {
    item.classList.toggle("active", item === screen);
  });
}

function clearHomeMessage() {
  homeMessage.textContent = "";
  homeMessage.classList.add("hidden");
}

function showHomeMessage(message) {
  homeMessage.textContent = message;
  homeMessage.classList.remove("hidden");
}

function resetVault() {
  goldTaken = 0;
  goldCounter.textContent = "Gold taken: 0 coins";
  vaultMessage.textContent = "Click the chest to take treasure. One click takes one gold coin.";
  treasureChest.classList.remove("pulse");
}

function resetToHome(message = "") {
  currentStage = 0;
  stageSolved = false;
  stopConfetti();
  resetVault();
  progressFill.style.width = "0%";
  if (message) {
    showHomeMessage(message);
  } else {
    clearHomeMessage();
  }
  showScreen(homeScreen);
}

function startGame() {
  currentStage = 0;
  stageSolved = false;
  stopConfetti();
  resetVault();
  clearHomeMessage();
  showScreen(gameScreen);
  loadStage();
}

function restartGame() {
  startGame();
}

function renderDecor(details) {
  sceneDecor.innerHTML = "";

  details.forEach((detailData) => {
    const detail = document.createElement("div");
    detail.className = `scene-detail ${detailData.type}`;
    detail.style.setProperty("--x", detailData.x);
    detail.style.setProperty("--y", detailData.y);
    detail.style.setProperty("--scale", detailData.scale || "1");
    detail.style.setProperty("--z", detailData.z || "2");
    detail.style.setProperty("--rotate", detailData.rotate || "0deg");
    sceneDecor.appendChild(detail);
  });
}

function loadStage() {
  const stage = stages[currentStage];
  stageSolved = false;

  stageNumber.textContent = String(currentStage + 1);
  stageTitle.textContent = stage.title;
  sceneTypeBadge.textContent = stage.sceneType;
  sceneTypeBadge.className = `scene-type-badge ${stage.sceneType.toLowerCase()}`;
  storyText.textContent = stage.story;
  topicText.textContent = stage.topic;
  puzzleText.textContent = stage.puzzle;
  feedback.textContent = "";
  feedback.className = "feedback";
  hintText.textContent = "";
  nextBtn.classList.add("hidden");
  progressFill.style.width = `${(currentStage / stages.length) * 100}%`;

  sceneArt.className = `scene-art ${stage.scene}`;
  sceneFloor.className = `scene-floor ${stage.floor}`;
  stageObject.className = `stage-object ${stage.object}`;
  renderDecor(stage.decor);

  choices.innerHTML = "";
  stage.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-btn";
    button.textContent = choice;
    button.addEventListener("click", () => checkAnswer(button, choice));
    choices.appendChild(button);
  });
}

function disableChoices() {
  const buttons = choices.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function checkAnswer(button, choice) {
  if (stageSolved) {
    return;
  }

  const stage = stages[currentStage];

  if (choice === stage.answer) {
    stageSolved = true;
    button.classList.add("correct");
    feedback.textContent = "Correct. The seal gives way.";
    feedback.className = "feedback good";
    progressFill.style.width = `${((currentStage + 1) / stages.length) * 100}%`;
    disableChoices();
    nextBtn.textContent = currentStage === stages.length - 1 ? "Claim Treasure" : "Next Stage";
    nextBtn.classList.remove("hidden");
    return;
  }

  button.classList.add("wrong");
  button.disabled = true;
  feedback.textContent = "That answer fails the gate. Try another.";
  feedback.className = "feedback try";
}

function showHint() {
  hintText.textContent = stages[currentStage].hint;
}

function advanceStage() {
  if (!stageSolved) {
    return;
  }

  currentStage += 1;
  if (currentStage >= stages.length) {
    winGame();
  } else {
    loadStage();
  }
}

function updateGoldCounter() {
  const coinLabel = goldTaken === 1 ? "coin" : "coins";
  goldCounter.textContent = `Gold taken: ${goldTaken} ${coinLabel}`;
}

function takeGold() {
  goldTaken += 1;

  if (goldTaken > maxGoldBeforeGreed) {
    resetToHome("Your greed was your downfall.");
    return;
  }

  updateGoldCounter();
  treasureChest.classList.remove("pulse");
  void treasureChest.offsetWidth;
  treasureChest.classList.add("pulse");

  if (goldTaken === maxGoldBeforeGreed) {
    vaultMessage.textContent = "You reached 10 coins. One more click will end the quest.";
  } else {
    const coinLabel = goldTaken === 1 ? "coin" : "coins";
    vaultMessage.textContent = `You took ${goldTaken} ${coinLabel}.`;
  }
}

function winGame() {
  showScreen(winScreen);
  resetVault();
  progressFill.style.width = "100%";
  startConfetti();
}

function startConfetti() {
  const context = confettiCanvas.getContext("2d");
  const colors = ["#ef5b71", "#f6c94c", "#2f9a60", "#22a7b8", "#6a4ec9"];
  let pieces = [];
  let frames = 0;

  function resizeCanvas() {
    confettiCanvas.width = winScreen.clientWidth;
    confettiCanvas.height = winScreen.clientHeight;
  }

  function makePieces() {
    pieces = Array.from({ length: 90 }, () => ({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * -confettiCanvas.height,
      size: 6 + Math.random() * 9,
      speed: 2 + Math.random() * 3.4,
      drift: -1.8 + Math.random() * 3.6,
      color: colors[Math.floor(Math.random() * colors.length)],
      spin: Math.random() * Math.PI
    }));
  }

  function draw() {
    context.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    pieces.forEach((piece) => {
      piece.y += piece.speed;
      piece.x += piece.drift;
      piece.spin += 0.08;

      if (piece.y > confettiCanvas.height + 22) {
        piece.y = -20;
        piece.x = Math.random() * confettiCanvas.width;
      }

      context.save();
      context.translate(piece.x, piece.y);
      context.rotate(piece.spin);
      context.fillStyle = piece.color;
      context.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.7);
      context.restore();
    });

    frames += 1;
    if (frames < 420) {
      confettiTimer = requestAnimationFrame(draw);
    } else {
      context.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      confettiTimer = null;
    }
  }

  resizeCanvas();
  makePieces();
  draw();
}

function stopConfetti() {
  if (confettiTimer) {
    cancelAnimationFrame(confettiTimer);
    confettiTimer = null;
  }

  const context = confettiCanvas.getContext("2d");
  context.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}

stageTotal.textContent = String(stages.length);
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
playAgainBtn.addEventListener("click", startGame);
hintBtn.addEventListener("click", showHint);
nextBtn.addEventListener("click", advanceStage);
treasureChest.addEventListener("click", takeGold);
