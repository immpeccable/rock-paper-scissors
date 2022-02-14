let choice;
let playerChoice;
let compChoiceNumber;
let compChoice;
let compScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('.btn');

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#machine-score");
computer.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector("#output");
output.textContent = "Good luck fighthing with computer!"

for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        playerChoice = buttons[i].id;
        compChoiceNumber = compChoiceFunc();

        console.log("computer choice: "+compChoice + " player choice: " + playerChoice);

        if(playerChoice == compChoice){
            
            
            output.textContent = `The result of the round is tie. You chose ${playerChoice}, computer chose ${compChoice}`

        }

        else if((playerChoice == "rock" && compChoice == "scissor") || (playerChoice == "paper" && compChoice == "rock") || (playerChoice == "scissor" && compChoice == "paper")){
            playerScore++;
            output.textContent = `Player won the round! You chose ${playerChoice}, computer chose ${compChoice}`;

        }
        else{  
            
            compScore++;
            output.textContent = `Computer won the round! You chose ${playerChoice}, computer chose ${compChoice}`;

        }
        player.textContent = `Player Score: ${playerScore}`
        computer.textContent = `Computer Score: ${compScore}`

        if(playerScore == 3){

            playerScore = 0;
            compScore = 0;
            console.log("player won");
            output.textContent = "You have just crushed a computer. Congratulations, you won!";
            

        }
        if(compScore == 3){
            
            playerScore = 0;
            compScore = 0;

            console.log("computer won");
            output.textContent = "Computers seem so strong. You lost, good luck in other games!";

        }
        

        

    })
}

function compChoiceFunc(){
    choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        compChoice = "rock";
    }
    else if(choice == 1){
        compChoice = "paper";
    }
    else{
        compChoice = "scissor";
    }
       
    return choice;
}

