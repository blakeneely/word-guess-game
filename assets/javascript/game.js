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

var word = "";                              // Holds random word from wordBank array
var answerArray = [];                       // Holds "_" and fills with correct letters guessed
var wrongGuesses = [];                      // Holds guessed letters
var wordLetters = [];                       // Holds random word split into an array
var remainingLetters = 11;                  // Number of incorrect guesses 
var wins = 0;
var losses = 0;
var audio = new Audio("assets/sound/stranger_things.mp3")       // Audio for 
var getStartedText = document.getElementById("get-started-text");
var answerArrayText = document.getElementById("answer-array-text");
var remainingLettersText = document.getElementById("remaining-letters-text");
var wrongGuessesText = document.getElementById("guessed-letters-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

function roundStart() {                             // Function to clear out arrays and reset everything for a new round
    answerArray = [];
    wrongGuesses = [];
    wordLetters = [];
    remainingLetters = 11;
    remainingLettersText.textContent = "Incorrect guesses remaining: " + remainingLetters;
    wrongGuessesText.textContent = "Incorrect guesses: " + wrongGuesses.join(" ");
    getRandomWord();
    makeAnswerArray();
}

function getRandomWord() {                          // Function to pull random word from wordbank and assign to variable word
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    wordLetters = word.split("");                   // Splits random word into array
}

function makeAnswerArray(){                         // Function to load answerArray with blanks the length of random word
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
    }
    else if (array.indexOf(element) !== -1){        // Finds right guesses and loops them into answerArray
        for (var j = 0; j < word.length; j++) {
            if (word[j] === element) {
                // display correct letter in answer
                answerArray[j] = element;
            }
            answerArrayText.textContent = answerArray.join(" ");
        }
    };       
};

function roundOver(){                               // Function to end round, adds to wins or losses, congratulates and plays sound
    if (answerArray.toString() == wordLetters.toString()) {
        wins++;
        audio.play();
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

// **** Main Game ****
    
document.onkeyup = function(event) {            
    var guess = event.key.toLowerCase();
    getStartedText.textContent = " ";
    checkGuess(wordLetters, guess);
    roundOver();
};
getRandomWord();
makeAnswerArray();

