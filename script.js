const choices = ["rock", "paper", "scissors"]

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

playerCounter = 0;
computerCounter = 0;

function rockPaperScissors(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "scissors" && computerSelection === "paper") {
        playerCounter++;
        return "You win! Scissors beats Paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerCounter++;
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerCounter++;
        return "You win! Rock beats Scissors!";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerCounter++;
        return "You lose! Scissors beats Paper!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerCounter++;
        return "You lose! Paper beats Rock!";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerCounter++;
        return "You lose! Rock beats Scissors!";
    } else if (computerSelection === playerSelection) {
        return "Tie";
    } else {
        return "Error!";
    }
}

function checkScore() {
    if (computerCounter > playerCounter) {
        console.log("You lost!");
    } else if (playerCounter > computerCounter){
        console.log("You won!");
    } else if (playerCounter === computerCounter) {
        console.log("Tie!");
    }
}


function game(rounds) {
    for (let i = 1; i <= rounds; i++) {
        let playerPlay = prompt("What do you play?");
        rockPaperScissors(playerPlay, computerPlay());
    }
    checkScore();
    return playerCounter + "-" + computerCounter;
}

console.log(game(5));


