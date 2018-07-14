// Creating vaules for the wins, loses and guesses left
var wins = 0;
var loses = 0;
var userGuesses = 9;

// make the it so the computer  knows to guess a letter guess 

var pcGuess = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z']; 

var pcGuess = pcGuess[Math.floor(Math.random() * pcGuess.length)];

// make it so that the computer keeps track of only letter being 

// starting the loop for the game 

for (userGuesses > 0; userGuesses - 1) {
    if (userGuess === pcGuess) {
        wins++;

    else {
        userGuesses--;
    }
}