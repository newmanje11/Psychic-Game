var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Creating vaules for the wins, loses and guesses left
var wins = 0;
var losses = 0;


var guessesLeft = 9;
var guessesSoFar = []; 

var guessedLetters = letters[Math.floor(Math.random() * letters.length)]
console.log(guessedLetters);

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    console.log(userGuess);

    if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length]=userGuess;
        guessesLeft--;
    }

    else if (guessedLetters == userGuess) {
		wins++;
    	guessesLeft = 9;
        guessesSoFar = [];
        guessedLetters = letters[Math.floor(Math.random() * letters.length)];

    }

    else if (guessesLeft == 0) {
        		losses++;
        		guessesLeft = 9;
        		guessesSoFar = [];
                guessedLetters = letters[Math.floor(Math.random() * letters.length)];
                
    }

    var html = 
            "<p><h1>The Psychic Game</h1></p>" +
            "<p><h4>Guess what letter I\'m thinking of</h4></p>" + 
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" +
            "<p>Your guesses so far: " + guessesSoFar + "</p>";

            document.querySelector("#game").innerHTML = html;
}






