//genrate a nuber between 1 and 100
let randomNumber = Math.floor(Math.random() *100)+1;
console.log(randomNumber);

let attempts = 0;

//checker

function checkGuess(){
    const guessInput = document.getElementById('guess')
    const feedback = document.getElementById('feedback')
const userGuess = parseInt(guessInput.value)
    console.log(userGuess);

    if(!userGuess ||userGuess <1 || userGuess >100){
        feedback.textContent='Please enter a vaild number';
        return
    }

    if(userGuess === randomNumber){
        feedback.textContent = `Congratulations!  You guessed the number in ${attempts} attempts`;
        feedback.style.color="Green";
        
    }
        else if(userGuess > randomNumber){
            feedback.textContent = `Too high!   Try again`;
            feedback.style.color="Red";
            
        }
          else {
            feedback.textContent = `Too low!   Try again`;
            feedback.style.color="Red";

             
        }
    
    attempts++;
    console.log("Num of attempts" + attempts);
    document.getElementById('guess').value='';
}

//funtion to reset the game
function resetGame(){
    randomNumber = Math.floor(Math.random() * 100)+1
    attempts = 0;
    document.getElementById('guess').value='';
    document.getElementById('feedback').textContent='';
}