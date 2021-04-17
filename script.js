function computerPlay(){
    var choice = Math.random() * 3;
    if (choice <= 1) {
        choice = "rock";
    } else if (choice <= 2) {
    choice = "paper";
    } else {
    choice = "scissors";
    }
    return choice;
}

function round(playerSelection){

    var computerSelection = computerPlay();


    var win;

    const content = document.createElement('div');
    content.classList.add('content');

    if (playerSelection === "rock" && computerSelection === "scissors"){
        //console.log("you win, rock beats scissors");
        content.textContent = "you win, rock beats scissors";
        container.appendChild(content);
    
        win = 1;
        return win;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        //console.log("you lose, rock beats scissors");
        content.textContent = "you lose, rock beats scissors";
        container.appendChild(content);
     
        win = 2;
        return win;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        //console.log("you win, rock beats scissors");
        content.textContent = "you win, rock beats scissors";
        container.appendChild(content);
       
        win = 1;
        return win;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        //console.log("you lose, paper beats rock");
        content.textContent = "you lose, paper beats rock";
        container.appendChild(content);
      
        win = 2;
        return win;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        //console.log("you win, scissors beats paper");
        content.textContent = "you win, scissors beats paper";
        container.appendChild(content);
     
        win = 1;
        return win;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        //console.log("you lose, scissors beats paper");
        content.textContent = "you lose, scissors beats paper";
        container.appendChild(content);
     
        win = 2;
        return win;;
    }
    else {
        //console.log("tie, throw again");
        content.textContent = "tie, throw again";
        container.appendChild(content);
        win = 3;
        return win;
    }
}

//new code for buttons
var win;
var playerScore = 0;
var compScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        const selection = document.createElement('div');
        selection.classList.add('selection');
        
        if (button.id == "rock"){
            playerSelection = "rock";
       
            selection.textContent = playerSelection;
            container.appendChild(selection);
            
            win = round(playerSelection);
        }
        if (button.id == "paper"){
            playerSelection = "paper";
      
            selection.textContent = playerSelection;
            container.appendChild(selection);
            
            win = round(playerSelection)
        }
        if (button.id == "scissors"){
            playerSelection = "scissors";

            selection.textContent = playerSelection;
            container.appendChild(selection);
            
            win = round(playerSelection)
        }
        
        const results = document.createElement('div');
        results.classList.add('results');

        if (win === 1){
        playerScore++;
        }
        else if (win === 2){
        compScore++;
        }
        else {
            // do nothing
        }
        
        results.textContent = playerScore + " " + compScore;
        container.appendChild(results);

        if (playerScore == 5 ){
            alert("WINNER!");
        }
        if (compScore == 5 ){
            alert("LOSER!");
        }
    })
})