// Find the HTML elements
const gameTimeInput = document.getElementById("game-time");
const startButton = document.getElementById("start-btn");
const message = document.getElementById("message");
const playerS = document.getElementById("player-s");
const playerL = document.getElementById("player-l");
const winner = document.getElementById("winner");

// Save the score for both players
let sCount = 0;
let lCount = 0;

// Check if the game is active
let gameRunning = false;

// Save the timer
let gameTimeout;

// Start the game when the button is clicked
startButton.addEventListener("click", function () {
  // Read the time from the input
  const gameTime = Number(gameTimeInput.value);

  // Check if the time is correct
  if (gameTime <= 0 || Number.isNaN(gameTime)) {
    message.textContent = "Please enter a valid time greater than 0.";
    return;
  }

  // Do not start if the game is already running
  if (gameRunning) {
    message.textContent = "The game is already running.";
    return;
  }

  // Reset scores
  sCount = 0;
  lCount = 0;
  gameRunning = true;

  // Reset text on the page
  playerS.textContent = "S: 0";
  playerL.textContent = "L: 0";
  message.textContent = "Game is running!";
  winner.textContent = "";

  // Turn off the button during the game
  startButton.disabled = true;

  // Stop the game after the chosen time
  gameTimeout = setTimeout(function () {
    gameRunning = false;
    message.textContent = "Time's up!";
    startButton.disabled = false;

    // Check who won
    if (sCount > lCount) {
      winner.textContent = "Player S wins! 🎉";
    } else if (lCount > sCount) {
      winner.textContent = "Player L wins! 🎉";
    } else {
      winner.textContent = "It's a draw! 🤝";
    }
  }, gameTime * 1000);
});

// Listen for keyboard clicks
document.addEventListener("keydown", function (event) {
  // Stop if the game is not running
  if (!gameRunning) {
    return;
  }

  // Save the pressed key as a small letter
  const keyPressed = event.key.toLowerCase();

  // Add 1 point if player S presses "s"
  if (keyPressed === "s") {
    sCount++;
    playerS.textContent = "S: " + sCount;

    // Add 1 point if player L presses "l"
  } else if (keyPressed === "l") {
    lCount++;
    playerL.textContent = "L: " + lCount;
  }
});
