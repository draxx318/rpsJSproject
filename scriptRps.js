
const plays = ["rock", "paper", "scissors"];
var playerSelection, computerSelection;
var playerScore, computerScore, round;

alert("To play the game run console and type game().")

//random returns rock paper or scissors
function computerPlay(){
    return plays[Math.floor(Math.random() * plays.length)];
}

//function for playerPlay
function playerPlay(){
  playerSelection = prompt("Whats your play?").toLowerCase();
  return playerSelection;
}

//function for round play
function playRound(playerSelection, computerSelection){
    console.log("==Round== " + round);
    console.log("Player choose: " + playerSelection);
    console.log("Computer choose: " + computerSelection);

    if (playerSelection === computerSelection){
      console.log("Draw");
      return;
    }

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            console.log("Rock beats Scissors. Player Win!");
            playerScore++;
        } else {
            console.log("Paper beats Rock. Computer Win!");
            computerScore++;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            console.log("Scissors beats Paper. Computer Win!");
            computerScore++;
        } else {
            console.log("Paper beats Rock! Player Win!");
            playerScore++;
        }
    } else if (playerSelection == "scissors") {
        if(computerSelection == "rock"){
        console.log("Rock beats Scissors. Computer Win!");
        computerScore++;
        }
     else {
        console.log("Scissors beats Paper. Player Win!")
        playerScore++;
    }
  }
}


//runs the game
function game(){
  playerScore = 0;
  computerScore = 0;
  round = 0;

  while (round < 5) {
    playRound(playerPlay(), computerPlay());
    round++;
  }
  console.log("==Game Results== ");
  console.log("Player Score: " + playerScore);
  console.log("Computer score: " + computerScore);

  if (playerScore == computerScore){
    console.log("Its a draw!");
  }
  else if(playerScore < computerScore) {
    console.log("Computer Wins!");
  }
  else {
    console.log("Player Wins!");
  }
}
