var userAnswer = 0
var userScore = 0
var computerScore = 0

function getComputerAnswer(){
  var randomNum = Math.random()
  if (randomNum < 0.3){
  	computerAnswer = "rock";
  } else if (randomNum >= 0.3 && randomNum < 0.6){
  	computerAnswer = "paper";
  } else {
  	computerAnswer = "scissors";
  }
    return computerAnswer
}


function matchup(computerAnswer, userAnswer){

    if (computerAnswer == "rock" && userAnswer == "paper"){
    userScore += 1;
    $('#result').html("You win this round!");
  } else if (computerAnswer == "rock" && userAnswer == "scissors"){
    computerScore += 1;
    $('#result').html("Computer wins this round!");
  } else if (computerAnswer == "paper" && userAnswer == "scissors"){
    userScore += 1;
    $('#result').html("You win this round!");
  } else if (computerAnswer == "paper" && userAnswer == "rock"){
    computerScore += 1;
    $('#result').html("Computer wins this round!");
  } else if (computerAnswer == "scissors" && userAnswer == "rock"){
    userScore += 1;
    $('#result').html("You win this round!");
  } else if (computerAnswer == "scissors" && userAnswer == "paper"){
    computerScore += 1;
    $('#result').html("Computer wins this round!");
  } else {
    $('#result').html("This round is a tie.");
  }
  return userScore
  return computerScore
}


function newGame() {
  $('#scorebar').html(`Computer Score: ${computerScore} | Your Score: ${userScore}`);
  $('#gameover').html(`GAME OVER! Click your first move to play a new game.`);
  $('#instructions').css( "border", "3px solid red" );
  userScore = 0
  computerScore = 0

  $('#rock').click(function() {
      $('#scorebar').html(`Computer Score: ${computerScore} | Your Score: ${userScore}`);
      $('#gameover').html(`Please click on your move:`);
      });

  $('#paper').click(function() {
      $('#scorebar').html(`Computer Score: ${computerScore} | Your Score: ${userScore}`);
      $('#gameover').html(`Please click on your move:`);
      });

  $('#scissors').click(function() {
      $('#scorebar').html(`Computer Score: ${computerScore} | Your Score: ${userScore}`);
      $('#gameover').html(`Please click on your move:`);
      });

  return computerScore
  return userScore
}



    $('#rock').click(function() {
      $('#rock').css('background-color', '#00b3b3');
      $('#paper').css('background-color', '');
      $('#scissors').css('background-color', '');
      userAnswer = "rock";
      var computerAnswer = getComputerAnswer();
      $('#moves').html(`You chose ${userAnswer}. The computer chose ${computerAnswer}.`);
      matchup(computerAnswer, userAnswer);
      $('#scorebar').html(`Computer Score: ${computerScore} | Your Score: ${userScore}`);
      if (userScore == 5 || computerScore == 5){
          newGame();          
      }
    });


    $('#paper').click(function() {
      $('#paper').css('background-color', '#00b3b3');
      $('#rock').css('background-color', '');
      $('#scissors').css('background-color', '');
       userAnswer = "paper";
        var computerAnswer = getComputerAnswer();
        $('#moves').html(`You chose ${userAnswer}. The computer chose ${computerAnswer}.`);
        matchup(computerAnswer, userAnswer);
        $('#scorebar').html(`Computer Score: ${computerScore} | Your Score: ${userScore}`);
          if (userScore == 5 || computerScore == 5){
            newGame();
          }
    });

    $('#scissors').click(function() {
      $('#scissors').css('background-color', '#00b3b3');
      $('#paper').css('background-color', '');
      $('#rock').css('background-color', '');
       userAnswer = "scissors";
        var computerAnswer = getComputerAnswer();
        $('#moves').html(`You chose ${userAnswer}. The computer chose ${computerAnswer}.`);
        matchup(computerAnswer, userAnswer);
        $('#scorebar').html(`Computer Score: ${computerScore} | Your Score: ${userScore}`);
          if (userScore == 5 || computerScore == 5){
            newGame();
          }
      });

