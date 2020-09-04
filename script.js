/*

% Each player chooses either rock, paper, or scissors
% The items are compared, and whichever player 
% chooses the more powerful item wins

! Rock destroys scissors
! Scissors cut paper
! Paper covers rock
! If there’s a tie, then the game ends in a draw

todos :
* Get the user’s choice.
* Get the computer’s choice.
* Compare the two choices and determine a winner
* Start the program and display the results

*/

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else {
    console.log("Error Message");
  }
};

// console.log(getUserChoice('rock'));
