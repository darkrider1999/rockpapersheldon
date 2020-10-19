const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'lizard' || userInput === 'spock') {
    return userInput
  } else {
    console.log('Please input a valid choice!')
  }
}

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * 5);
  switch (random) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
    case 3:
    return 'lizard';
    case 4:
    return 'spock';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Paper covers rock. The computer won!';
    } else {
      return 'You won!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Scissors cut paper. The computer won!';
    } else {
      return 'You won!'
    }
  }
    if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Rock destroys scissors. The computer won!';
    } else {
      return 'You won!'
    }
  }
    if (userChoice === 'rock') {
    if (computerChoice === 'lizard') {
      return 'Rock crushes lizard. The computer won!';
    } else {
      return 'You won!'
    }
  }
    if (userChoice === 'lizard') {
    if (computerChoice === 'spock') {
      return 'Lizard poisons Spock. The computer won!';
    } else {
      return 'You won!'
    }
  }
    if (userChoice === 'spock') {
    if (computerChoice === 'scissors') {
      return 'Spock smashes scissors. The computer won!';
    } else {
      return 'You won!'
    }
  }
    if (userChoice === 'scissors') {
    if (computerChoice === 'lizard') {
      return 'Scissors decapitate lizard. The computer won!';
    } else {
      return 'You won!'
    }
  }
    if (userChoice === 'lizard') {
    if (computerChoice === 'paper') {
      return 'Lizard eats paper. The computer won!';
    } else {
      return 'You won!'
    }
  }
    if (userChoice === 'paper') {
    if (computerChoice === 'spock') {
      return 'Paper disproves Spock. The computer won!';
    } else {
      return 'You won!'
    }
  }
    if (userChoice === 'spock') {
    if (computerChoice === 'rock') {
      return 'Spock vaporizes rock. The computer won!';
    } else {
      return 'You won!'
    }
  }
}

const play = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

play();
