// List of answers
var wordBank = [
    "eleven",
    "hopper",
    "joyce",
    "nancy",
    "telekinesis",
    "upside down",
    "mindflayer",
    "demogorgon",
    "eggos",
    "eighties",
    "experiment",
    "russians",
    "hawkins",
    "indiana",
    "ghostbusters",
    "arcade",
    "halloween"
];

var word = "";
var answerArray = [];                       // Holds "_" and fills with correct letters guessed
var wrongGuesses = [];                      // Holds guessed letters
var wordLetters = [];                       // Holds random word split into an array
var remainingLetters = 9;                   // Number of incorrect guesses 
var wins = 0;
var losses = 0;
var getStartedText = document.getElementById("get-started-text");
var answerArrayText = document.getElementById("answer-array-text");
var remainingLettersText = document.getElementById("remaining-letters-text");
var wrongGuessesText = document.getElementById("guessed-letters-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

function roundStart() {
    answerArray = [];
    wrongGuesses = [];
    wordLetters = [];
    remainingLetters = 9;
    wrongGuessesText.textContent = "Incorrect guesses: " + wrongGuesses.join(" ");
    getRandomWord();
    makeAnswerArray();

}

function getRandomWord() {                          //Function to pull random word from wordbank and assign to variable word
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    wordLetters = word.split("");                   // Splits word into array
    console.log(wordLetters);
}
function makeAnswerArray(){
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    answerArrayText.textContent = answerArray.join(" ");
}
function checkGuess(array, element) {               // Finds wrong guesses and pushes them to wrongGuesses array
    if (array.indexOf(element) === -1) {
        wrongGuesses.push(element);
        remainingLetters--;
        wrongGuessesText.textContent = "Incorrect guesses: " + wrongGuesses.join(" ");
        remainingLettersText.textContent = "Incorrect guesses remaining: " + remainingLetters;
        roundOver();
    }
    else if (array.indexOf(element) !== -1){       // Finds right guesses and loops them into answerArray
        // If user guess is correct
        for (var j = 0; j < word.length; j++) {
            if (word[j] === element) {
                // display correct letter in answer
                answerArray[j] = element;
                // subtract from remaining letters left to guess
                roundOver();
            }
            answerArrayText.textContent = answerArray.join(" ");
        }
    };       
};
function roundOver(){
    if (answerArray.toString() == wordLetters.toString()) {
        wins++;
        alert("You win! The correct word was " + word);
        winsText.textContent = "Wins: " + wins;
        roundStart();
    }
    else if (remainingLetters == 0) {
        losses++;
        alert("You lose! Sorry, the correct word was " + word);
        lossesText.textContent = "Losses: " + losses;
        roundStart();
    }
};

// Display number of letters left to guess

// Display letters that have been guessed

// **** Main Game ****
    // Get user input
    document.onkeyup = function(event) {
        getStartedText.textContent = " ";
        var guess = event.key.toLowerCase();
        checkGuess(wordLetters, guess);
        
    };

// ********* Main Game *********
getRandomWord();
makeAnswerArray();



// Give congratulations

// Restart game
