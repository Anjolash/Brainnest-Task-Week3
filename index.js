let playerScore = 0;
let computerScore = 0;
const userScore__span = document.getElementById("userScore");
const computerScore__span = document.getElementById("computerScore");
const scoresPara = document.querySelector(".displayResults");
const winGifVisibility = document.querySelector(".wingif");
const loseGifVisibility = document.querySelector(".losegif");
const tieGifVisibility = document.querySelector(".tiegif");
winGifVisibility.classList += " notVisible";
loseGifVisibility.classList += " notVisible";
tieGifVisibility.classList += " notVisible"; 

function win(){
    userScore__span.innerHTML = playerScore;
    computerScore__span.innerHTML = computerScore;
    if(playerScore > computerScore){
        scoresPara.innerHTML = "YOU WIN!!!!";
        winGifVisibility.classList.remove("notVisible")
    }
    else if(playerScore < computerScore){
        scoresPara.innerHTML = "YOU LOSE!!!";
        loseGifVisibility.classList.remove("notVisible")
    }
    else{
        scoresPara.innerHTML = "DRAW";
        tieGifVisibility.classList.remove("notVisible")
    }
}


function computerPlay(play){
    var pick = ["rock", "paper", "scissors"]
    play = pick[Math.round(Math.random()*(pick.length))]
    return play
}


function playRound(playerSelection, computerSelection ){
    if(playerSelection === computerSelection ){
        return "Draw"
    }
    else if(playerSelection == "rock" && computerSelection === "scissors" ){
        playerScore ++ ;
        return "You win! Rock beats scissors"    
    }
    else if(playerSelection == "rock" && computerSelection === "paper" ){
        computerScore ++
        return "You lose! paper beats rock"
    }
    else if(playerSelection == "paper" && computerSelection === "scissors" ){
        computerScore ++
        return "You lose! scissors beats Paper"
    }
    else if(playerSelection == "paper" && computerSelection === "rock" ){
        playerScore ++
        return "You Win! paper beats rock"
    }
    else if(playerSelection == "scissors" && computerSelection === "rock" ){
        computerScore ++
        return "You Lose! rock beats scissors"
    }
    else if(playerSelection == "scissors" && computerSelection === "paper" ){
        playerScore ++
        return "You Win! scissors beats paper"
    }
}

function game(){
    var playTurn = "play";
    var playerSelection = "";
    for(let i = 0; i < 5; i++){
        playerSelection = prompt(playTurn)
        playerSelection = playerSelection.toLowerCase();
        
        computerPlay()
        const computerSelection = computerPlay();
        console.log(playerSelection)
        playRound(playerSelection)
        console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection))
        console.log(playerScore)
        console.log(computerScore)
    }
}


game()
win()




