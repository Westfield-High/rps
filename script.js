//To Dos
//fireworks, confetti, or ballons
//winner image
//display text under winning image
var cpuPick = 1;
var players = ["player", "cpu"]
let actions = ["rock", "paper", "scissors"]
var win = [[0,1,1], [1,2,1], [2,0,1], [1,0,0], [2,1,0], [0,2,0]];
var two = "You win!"
var zero = "You lose."
var games = 0;
var score = [0,0];
var totalGames = 0;
var images = ["rock.png", "paper.png", "scissors.png"]
var winImage = 0;
function newSeries(){
  while (totalGames % 2 == 0){
    totalGames = prompt("How many games are you playing?  Enter a odd number.");
    if (totalGames % 2 == 0){ 
      alert("please enter an odd number.");
    }
  }
  if (games == totalGames){
    let message = "Winner was " + bestScore() + ". ";
    message += " New series.";
    let winText = document.getElementById("winText");
    console.log(message);
    winText.innerHTML = message;
    games = 0;
    newSeries();
  }
}

function bestScore(){
  if (score[0] > score[1]) return "Player";
  else return "cpu";
}

function rpsRound(player){
  document.getElementById("winner-image").innerHTML = "";
  let cpu = cpuAction();
  if (cpu == player){
    let message = "You both picked " + actions[cpu];
    let winText = document.getElementById("winText");
    console.log(message);
    winText.innerHTML = message;
  }
  else {
    let winner = whoWon(player,cpu);
    let message2 = "Winner was " + players[winner] + ".  ";
    score[winner]++;
    games++;
    message2 += "Player has " + score[0] + " wins! Computer has " + score[1] + " wins!  ";
    message2 += "Game " + games + " of " + totalGames;
    winText = document.getElementById("winText2");
    console.log(message2);
    winText.innerHTML = message2;
    displayWinnerImage(winImage);
    newSeries();
  }
}
// if (games == totalGames){
//   let message = "Winner was " + bestScore() + ". ";
//   message += " New series.";
//   let winText = document.getElementById("winText");
//   console.log(message);
//   winText.innerHTML = message;
//   games = 0;
//   newSeries();
function playerRock(){
  rpsRound(0);
}

function playerPaper(){
  rpsRound(1);
}

function playerScissors(){
  rpsRound(2);
}

function cpuAction(){
  return Math.floor(Math.random() * 3);
}

function whoWon( player, cpu){
  let message = "You picked "+actions[player]+ " and I picked "+actions[cpu] + ".";
  let winText = document.getElementById("winText");
  console.log(message);
  winText.innerHTML = message;
  for (let combo = 0; combo < 6 ;combo++){
    if (win[combo][1] == cpu && win[combo][0] == player){
      winImage = combo;
      return win[combo][2];
      }
  }
  return "error"
}

function displayWinnerImage(winner){
  let action = win[winner][win[winner][2]];
  console.log(action);
  let imageElement = document.createElement("img");
  imageElement.src = images[action];
  document.getElementById("winner-image").appendChild(imageElement);
}