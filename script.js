const choices = ["rock", "paper", "scissors"]

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function rockPaperScissors(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors!"
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose! Scissors beats Paper!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose! Paper beats Rock!";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock beats Scissors!"
    } else if (computerSelection === playerSelection) {
        return "Tie";
    } else {
        return "Error!"
    }
}

console.log(rockPaperScissors("Rock", computerPlay()));

    
