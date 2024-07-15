// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }
 

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!")
   let word = input.question("Enter a word to score: ")
   return console.log(oldScrabbleScorer(word))
};

let newPointStructure;

let simpleScorer = function (word) {
   word = word.toUpperCase();
   let points = 0;
   for (let i = 0; i < word.length; i++) {
      points += 1
   }
   return points
   };

let vowelBonusScorer = function (word) {
   word = word.toUpperCase()
   let points = 0;
   for ( let i = 0; i < word.length; i++) {
      if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
         points += 3
      } else {
         points += 1
      }
   }
   return points
}

let scrabbleScorer;

const scoringAlgorithms = [
    {
      name: "Simple Score",
      description: "Each letter is worth 1 point.",
      scoreFunction: simpleScorer 
   },
   {
      name: "Bonus Vowels",
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scoreFunction: vowelBonusScorer
   },
   {
      name: "Scrabble",
      description: "The traditional scoring algorithm.",
      scoreFunction: oldScrabbleScorer
   }

];

function scorerPrompt(word) {
   console.log("Let's play some Scrabble!");
   word = input.question("Enter a word to score: ");
   console.log("Which scoring algorithm would you like to use?");
   console.log("0 - Simple: One point per character");
   console.log("1 - Vowel Bonus: Vowels are worth 3 points");
   console.log("2 - Scrabble: Uses scrabble point system;");
   let numPrompt = input.question("Enter 0, 1, 2: ");
   let points = 0
   for (i = 0; i < scoringAlgorithms.length; i++){
      if ( numPrompt === '0') {
         points = simpleScorer(word)
      } else if (numPrompt === '1') {
         points = vowelBonusScorer(word)
      } else if (numPrompt === '2') {
         points = oldScrabbleScorer(word)
      }
   }
   return console.log(`Score for '${word}': ${points}`)
};

function transform() {};

function runProgram() {
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
