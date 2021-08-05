const readline = require("readline-sync");

// Helper function that generates a random number between 1 and 6
function rollDice(){
  return Math.ceil(Math.random()*6);
}

function playGame(state){
  // Variable that stores the player roll
  let playerDiceRoll = rollDice();
  // Variable that stores the computer roll
  let computerDiceRoll = rollDice();
  // If the player rolls higher than the computer
  if(playerDiceRoll > computerDiceRoll){
    console.log("Congrats, you won!");
    // Increases the playerWins state by one
    state.playerWins++;
  // Otherwise if the computer rolls higher than the player
  } else if(computerDiceRoll > playerDiceRoll){
    console.log("Better luck next time!");
    // Increases the computerWins state by one
    state.computerWins++;
  // Player and computer rolled the same number
  } else {
    console.log("You both tied!");
    // Increases the ties state by one
    state.ties++;
  }
}

// Main function that will run our application
function run() {
  // An object that stores the state of our application
  let state = {
    // Stores a value that determines whether to continue playing or not
    shouldKeepPlaying:true,
    // Values that contain wins, loses and ties
    playerWins:0,
    computerWins:0,
    ties:0
  }
  // Loop that keeps the game running
  while(state.shouldKeepPlaying){
    // Variable that stores the user input and is lowercased
    let userInput = readline.question("Would you like to play High/Low?(Y or n) ").toLowerCase();
    // Conditional logic that handles where to stop the game
    if(userInput === "n" || userInput === "no"){
      console.log("Stopping the game");
      // Changes value of whether we should keep playing to false
      state.shouldKeepPlaying = false;
    // If the user doesn't enter "n" or "no"
    } else {
      // Starts the game
      playGame(state);
      // Prints summary of game
      console.log(state);
    }  
  }

}

run();
