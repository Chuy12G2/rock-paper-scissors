
    let computerScore = 0;
    let playerScore = 0;

    const paper = document.querySelector("#paper-btn");
    const rock = document.querySelector("#rock-btn");
    const scissors = document.querySelector("#scissors-btn");

    const buttons = document.querySelector("#buttons");
    
    let text = document.querySelector("#current-round");
    let result = document.querySelector('#results');

    result.textContent = "Computer: " +computerScore+ " You: " +playerScore; 
    text.textContent = "";

       
    paper.addEventListener('click', function() {
        playRound("PAPER",computerPlay());
        is5();
    });

    rock.addEventListener('click', function() {
        playRound("ROCK", computerPlay());
        is5();
    });

    scissors.addEventListener('click', function() {
        playRound("SCISSORS",computerPlay());
        is5();    
    });

    function is5(){
        if (computerScore == 5){
            text.textContent = "You Have Lost";
            buttons.style.display = "none";
        }

        else if (playerScore == 5){
            text.textContent = "You Have won";
            buttons.style.display = "none";
        }
    }
    
       
     function computerPlay()
        {   
        let randomWord = Math.floor(Math.random() * 3);
        let possibleWords = ["Paper", "Rock", "Scissors"]; 
        return  possibleWords[randomWord];
            }

        
    function playRound(playerChoice, computerChoice){
        if (playerChoice == "PAPER" && computerChoice == "Rock"){
            text.textContent = "You Win! Paper beats Rock";
            playerScore++;
        }
        else if (playerChoice == "PAPER" && computerChoice == "Scissors"){
            text.textContent = "You Lose! Scissors beat Paper";
            computerScore++;
            }
        else if (playerChoice == "PAPER" && computerChoice == "Paper"){
                text.textContent = "Draw";
            }
        else if (playerChoice == "SCISSORS" && computerChoice == "Rock"){
                text.textContent = "You Lose! Rock beats Scissors";
                computerScore++;
            }
        else if (playerChoice == "SCISSORS" &&  computerChoice == "Scissors")
            {
                text.textContent = "Draw";
            }

        else if (playerChoice == "SCISSORS" && computerChoice == "Paper"){
                text.textContent = "You Win! Scissors beat Paper";
                playerScore++;
            }

        else if (playerChoice == "ROCK" && computerChoice == "Rock"){
                text.textContent = "Draw";
            }
            
        else if (playerChoice == "ROCK" && computerChoice == "Scissors"){
                text.textContent = "You Win! Rock beats Scissors";
                playerScore++;
            }
        else if (playerChoice == "ROCK" && computerChoice == "Paper"){
                text.textContent = "You Lose! Paper beats Rock";
                computerScore++;
            }

            result.textContent = "Computer: " +computerScore+ "    You: " +playerScore; 
        }


        
        
        




     
