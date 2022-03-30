
const wordToGuessDialogSubmit = document.getElementById("wordToGuessDialogSubmit");
const wordToGuessDialog = document.getElementById("wordToGuessDialog");
const guessingTheWordDialog = document.getElementById("guessingTheWordDialog");
const endGameDialog = document.getElementById("endGameDialog");
const hiddenWord = document.getElementById("hiddenWord");

wordToGuessDialogSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    //Hiding the wordToGuess dialog
    wordToGuessDialog.classList.add("hidden");

    // Show the guessingWordDialog
    guessingTheWordDialog.classList.replace("hidden", "visible");

    updateWord("");



});


function endGame(){
    guesses = 0;
    guessingTheWordDialog.classList.replace("visible", "hidden");
    endGameDialog.classList.replace("hidden", "visible");
    const endGameTitle = document.getElementById("endGameTitle");

    if(hiddenWord.includes("_"))endGameTitle.innerHTML = "Damn Bro! You lost...";
    else endGameTitle.innerHTML = "Winner Winner Chicken Dinner!";
}


const MAX_GUESSES = 10;
var guesses = 0;

function updateWord(character){


     const word = document.getElementById("word");
     const wordToGuess = word.value;

     if(guesses > MAX_GUESSES)endGame();
     
      var hidden = "";

      var correctGuess = false;
      for( let i = 0; i< wordToGuess.length; i++){
        //If letter is contained within our word
        if(character && character === wordToGuess[i]){
            hidden.concat(character);
            correctGuess = true;
        }
        else hidden.concat("_");
      }

      hiddenWord.innerHTML = hidden;

      if(correctGuess === false){
        guesses++;

        for( let i = 0; i< guesses; i++){
            const hangmanImg = document.getElementById(`hangmanImg${i + 1}`);
            hangmanImg.classList.remove("hidden");
            hangmanImg.classList.add("visible");
        }
      }

}





const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e) => {
        //Id is the letter on key
        const id = key.id;
        updateWord(id);
    })
});




