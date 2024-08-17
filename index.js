const choices = document.querySelectorAll(".choice");
const playerImg = document.getElementById("playerimg");
const computerImg = document.getElementById("computerimg");
const winnerText = document.getElementById("winner");
const reset = document.getElementById("reset");
const playerscore = document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");
const images = {
  rock: "image1.png",
  paper: "image3.png",
  scissors: "image2.png",
};

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
};
const getWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
};
let countplayer = 0;
let countcomputer = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    reset.style.display = "inline";
    const playerChoice = this.id;
    const computerChoice = getComputerChoice();

    playerImg.src = images[playerChoice];
    computerImg.src = images[computerChoice];

    winnerText.textContent = getWinner(playerChoice, computerChoice);
    if (winnerText.textContent === "Player wins!") {
      countplayer++;
      playerscore.value = countplayer;
    } else if (winnerText.textContent === "Computer wins!") {
      countcomputer++;
      computerscore.value = countcomputer;
    } else {
      countplayer;
      countcomputer;
    }
  });
});

reset.addEventListener("click", function () {
  countplayer = 0;
  countcomputer = 0;
  playerscore.value = countplayer;
  computerscore.value = countcomputer;
  playerImg.src = "image1.png";
  computerImg.src = "image2.png";
  winnerText.textContent = "Choose an option";
  reset.style.display = "none";
});
