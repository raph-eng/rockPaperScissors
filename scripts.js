const moves = {
  "rock": 0,
  "paper": 1,
  "scissors": 2
};

let computerMove;
let playerMove;
function getComputerMove() {
  return Math.floor(Math.random() * 3);
}


document.getElementById("rock")
document.getElementById("paper")
document.getElementById("scissors")

console.log(getComputerMove());