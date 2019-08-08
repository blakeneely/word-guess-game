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
    "new coke",
    "experiment",
    "russians",
    "scoops ahoy",
    "hawkins",
    "indiana",
    "ghostbusters",
    "arcade"
];

var word = "";
var answerArray = [];                       // Holds "_" and fills with correct letters guessed
var wrongGuesses = [];                      // Holds guessed letters
var wordLetters = []; 
var remainingLetters = 9;         // 
var wins = 0;
var losses = 0;
var answerArrayText = document.getElementById("answer-array-text");
var remainingLettersText = document.getElementById("remaining-letters-text");
var wrongGuessesText = document.getElementById("guessed-letters-text");


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
        wrongGuessesText.textContent = "Letters you have guessed: " + wrongGuesses.join(" ");
        roundOver();
    }
}
function roundOver(){
    if (answerArray == wordLetters) {
        alert("You win!");
    }
    else if (remainingLetters = 0) {
        alert("You lose!");
    }
}

// Display number of letters left to guess

// Display letters that have been guessed

// **** Main Game ****
    // Get user input
    document.onkeyup = function(event) {
        var guess = event.key.toLowerCase();
        checkGuess(wordLetters, guess);
        
        // If user guess is correct
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                // display correct letter in answer
                answerArray[j] = guess;
                // subtract from remaining letters left to guess
                roundOver();
            }
            answerArrayText.textContent = answerArray.join(" ");
        }
    };

// ********* Main Game *********
getRandomWord();
makeAnswerArray();



// Give congratulations

// Restart game
