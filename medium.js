const backgroundSound = new Audio("./bgm.mp3.mp3");
backgroundSound.play();
backgroundSound.loop = true;


var rows = 3;
var columns = 3;

var currTile;
var otherTile; //blank tile

var turns = 0;

var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".1.jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);

        }
    }
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}


function dragEnd(){
    let currImg= currTile.src;
    let otherImg= otherTile.src;

    currTile.src=otherImg;
    otherTile.src=currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
    localStorage.setItem("dragEnd",turns);
}


var timer=18;
setInterval(function(){
    timer--;

    if(timer>=0){
        a=document.getElementById("timer");
        a.innerHTML= timer;
    }

    if(timer===0){
        location.href = "./lose.html";
    }
},1000)