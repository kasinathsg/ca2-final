function addData(){
    var user= document.getElementById("user").value;
    var nick= document.getElementById("nick").value;

    localStorage.setItem("userName",user);
    localStorage.setItem("nickName",nick);

    location.href="./select.html"
}


const backgroundSound = new Audio("./bgm.mp3.mp3");
backgroundSound.play();
backgroundSound.loop = true;