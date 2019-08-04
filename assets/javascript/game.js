// List of answers
var wordBank = [
    "eleven",
    "hopper",
    "joyce",
    "nancy",
    "telekinesis",
    "upside down",
    "mind flayer",
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
// Get a random word from the word bank
var word = wordBank[Math.floor(Math.random() * wordBank.length)];

//  Display the answer that shows underscores to start, will fill with correct letters later with each guess
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var answerArrayText = document.getElementById("answer-array-text");

// Display number of letters left to guess
var remainingLetters = word.length;
var remainingLettersText = document.getElementById("remaining-letters-text");

// Display letters that have been guessed
var guessedLetters = [];
var guessedLettersText = document.getElementById("guessed-letters-text");

// **** Main Game ****
    // Get user input
    document.onkeyup = function(event) {
        var guess = event.key.toLowerCase();
        // If user guess is correct
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                // display correct letter in answer
                answerArray[j] = guess;
                // subtract from remaining letters left to guess
                remainingLetters--;
            }
            else {
                // If user guess is incorrect show letter in guessedLetters
                guessedLetters.push(guess);
            }
            answerArrayText.textContent = answerArray;
            guessedLettersText.textContent = "Letters you have guessed: " + guessedLetters;
            remainingLettersText.textContent = "Remaining letters to guess: " + remainingLetters;
        }
    };


console.log(word);
// Give congratulations

// Restart game

