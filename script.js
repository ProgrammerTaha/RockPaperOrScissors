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

//function to get the user choice
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

//function to get the computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

