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

//Get the user’s choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    console.log("Error Message");
  }
};

//Get the computer’s choice
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

//Compare the two choices and determine a winner 
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer win!';
    } else if (computerChoice === 'scissors') {
      return 'Human win!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'Human win!';
    } else if (computerChoice === 'scissors') {
      return 'Computer win!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer win!';
    } else if (computerChoice === 'paper') {
      return 'Human win!';
    }
  }
  if (userChoice === 'bomb') {
    if (computerChoice === 'rock') {
      return 'Human win!';
    } else if (computerChoice === 'paper') {
      return 'Human win!';
    } else if (computerChoice === 'scissors') {
      return 'Human win!';
    }
  }
};

//Start the program and display the results
const playGame = (choice) => {
  let userChoice = getUserChoice(choice);
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame('bomb');

