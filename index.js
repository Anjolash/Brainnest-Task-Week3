let playerScore = 0;
let computerScore = 0;
const userScore__span = document.getElementById("userScore");
const computerScore__span = document.getElementById("computerScore");
const scoresPara = document.querySelector(".displayResults");
const winGifVisibility = document.querySelector(".wingif");
const loseGifVisibility = document.querySelector(".losegif");
const tieGifVisibility = document.querySelector(".tiegif");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const buttons = document.querySelectorAll(".playerOptions button")
winGifVisibility.classList += " notVisible";
loseGifVisibility.classList += " notVisible";
tieGifVisibility.classList += " notVisible"; 

function win(){
    userScore__span.innerHTML = playerScore;
    computerScore__span.innerHTML = computerScore;
    if(playerScore == "5" || computerScore == "5"){
        if(playerScore > computerScore){
            scoresPara.innerHTML = "GAME OVER YOU WIN!!!! <br> Select option to play again";
            winGifVisibility.classList.remove("notVisible")
        }
        else if(playerScore < computerScore){
            scoresPara.innerHTML = "GAME OVER YOU LOSE!!! <br> Select option to play again";
            loseGifVisibility.classList.remove("notVisible")
        }
        else{
            scoresPara.innerHTML = "DRAW";
            tieGifVisibility.classList.remove("notVisible")
        }
    }    
}






function computerPlay(play){
    var pick = ["rock", "paper", "scissors"]
<<<<<<< HEAD
    play = pick[Math.round(Math.random()*(pick.length -1))]
=======
    play = pick[Math.round(Math.random()*(pick.length))]
>>>>>>> e4f9ed24c5ad585cc159fe385f96f5ef353531cd
    return play
}


function playRound(playerSelection, computerSelection ){
    if(playerSelection === computerSelection ){
        return "Draw"
    }
<<<<<<< HEAD
    else if(
        playerSelection == "rock" && computerSelection === "scissors"  || 
        playerSelection == "paper" && computerSelection === "rock" ||
        playerSelection == "scissors" && computerSelection === "paper" 
    ){
=======
    else if(playerSelection == "rock" && computerSelection === "scissors" ){
>>>>>>> e4f9ed24c5ad585cc159fe385f96f5ef353531cd
        playerScore ++ ;
        return "You win! " + `${playerSelection}` +  " beats " + `${computerSelection}`
    }
    else if(
        playerSelection == "rock" && computerSelection === "paper" ||
        playerSelection == "paper" && computerSelection === "scissors" ||
        playerSelection == "scissors" && computerSelection === "rock" 
        ){
        computerScore ++
        return "You lose! " + `${computerSelection}` + " beats " + `${playerSelection}`
    }
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    winGifVisibility.classList += " notVisible";
    loseGifVisibility.classList += " notVisible";
    tieGifVisibility.classList += " notVisible";
}

function game(){
    //var playTurn = "play here";
    var playerSelection = "";
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            if(playerScore == 5 || computerScore == 5){
                reset()
            }
            let playerSelection = e.target.className;
            
            playerSelection = playerSelection.toLowerCase();
            
            computerPlay()
            const computerSelection = computerPlay();
            console.log(playerSelection)
            playRound(playerSelection)
            console.log(computerSelection)
            console.log(playRound(playerSelection, computerSelection))
            console.log(playerScore)
            console.log(computerScore)
            win()
        })
    })
}


game()





