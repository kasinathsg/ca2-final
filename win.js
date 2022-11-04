// let turns = localStorage.getItem("turns");
// var scoreBoard = document.getElementById("score-board");
// scoreBoard.innerHTML = turns;


const backgroundSound = new Audio("./clap.mp3");
backgroundSound.play();
// backgroundSound.loop = true;

let score = localStorage.getItem("dragEnd");
var scoreBoard = document.getElementById("score-board");
scoreBoard.innerHTML = "YOUR SCORE : " + score;

