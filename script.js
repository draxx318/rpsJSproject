
const plays = ["rock", "paper", "scissors"];
var playerSelection, computerSelection;
var playerScore = 0;
var computerScore = 0;
var round = 0;

//random returns rock paper or scissors
function computerPlay(){
    return plays[Math.floor(Math.random() * 3)];
}

//function for round play
function playRound(playerSelection, computerSelection){
    playerSelection = this.className;
    computerSelection = computerPlay();

    if (playerScore == 5 || computerScore == 5){
      return;
    }


    const roundContainer = document.querySelector("#current-round");
      roundContainer.textContent = "Round " + (round + 1);
    const playerSelect = document.querySelector("#player-selection");
      playerSelect.textContent = playerSelection;
    const computerSelect = document.querySelector("#computer-selection");
      computerSelect.textContent = computerSelection;
    round++;



    const roundResult = document.querySelector("#result");

        if (playerSelection === computerSelection){
          roundResult.textContent = "Draw";
          return;
        }

        if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
              roundResult.textContent = "Rock beats Scissors. Player Win!";
                playerScore++;
            } else {
              roundResult.textContent = "Paper beats Rock. Computer Win!";
                computerScore++;
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
              roundResult.textContent = "Scissors beats Paper. Computer Win!";
                computerScore++;
            } else {
                roundResult.textContent = "Paper beats Rock! Player Win!";
                playerScore++;
            }
        } else if (playerSelection == "scissors") {
            if(computerSelection == "rock"){
              roundResult.textContent = "Rock beats Scissors. Computer Win!";
            computerScore++;
            }
         else {
            roundResult.textContent = "Scissors beats Paper. Player Win!";
            playerScore++;
        }
      }
      const playerPoint = document.querySelector("#player-score");
        playerPoint.textContent = "Player: " + playerScore;
      const computerPoint = document.querySelector("#computer-score");
        computerPoint.textContent = "Computer: " + computerScore;
}



const playRock = document.querySelector(".rock");
  playRock.addEventListener("click", playRound);
const playPaper = document.querySelector(".paper");
  playPaper.addEventListener("click", playRound);
const playScissors = document.querySelector(".scissors");
  playScissors.addEventListener("click", playRound);



  //document.onLoad = game();
