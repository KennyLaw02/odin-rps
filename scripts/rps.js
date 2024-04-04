console.log("Welcome to Rock Paper Scissors.");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    return prompt("Rock, paper or scissors: ").toLowerCase();
}

function playRound(playerSelection, computerSelection, playerScore, compScore) {
    // Check for draw
    if (playerSelection === computerSelection) {
        console.log("Draw!");
        return [playerScore, compScore]
    }
    let playerWon = false;
    switch (playerSelection) {
        case "rock":
            playerWon = computerSelection === "scissors" 
        break;
        case "paper":
            playerWon = computerSelection === "rock"
        break;
        case "scissors":
            playerWon = computerSelection === "paper"
        break;
        default:
        break;
    }
    if (playerWon) {
        playerScore++;
        console.log("player won this round")
    } else {
        compScore++;
        console.log("comp won this round")
    }
    console.log(`Player: ${playerScore}, Comp: ${compScore}`)
    return [playerScore, compScore]
}

function playGame() {
    let playerscore = 0;
    let compscore = 0;
    for (let i = 0; i < 5; i++) {
        let player = getPlayerChoice();
        let comp = getComputerChoice();
        let results = playRound(player, comp, playerscore, compscore);
        playerscore = results[0];
        compscore = results[1];
    }

    if (playerscore > compscore) {
        console.log("You won the game!")
    } else if (playerscore === compscore) {
        console.log("You drawed the game!")
    } else {
        console.log("You lost the game!")
    }
    console.log(`The scores were: Player: ${playerscore} Computer: ${compscore}`)
}

playGame();
