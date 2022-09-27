
let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;

switch(randomNum1){
    case 1:
        document.querySelector(".img1").src = "images/dice1.png"
        break;
    case 2:
        document.querySelector(".img1").src = "images/dice2.png"
        break;
    case 3:
        document.querySelector(".img1").src = "images/dice3.png"
        break;
    case 4:
        document.querySelector(".img1").src = "images/dice4.png"
        break;
    case 5:
        document.querySelector(".img1").src = "images/dice5.png"
        break;
    case 6:
        document.querySelector(".img1").src = "images/dice6.png"
        break;
}
switch(randomNum2){
    case 1:
        document.querySelector(".img2").src = "images/dice1.png"
        break;
    case 2:
        document.querySelector(".img2").src = "images/dice2.png"
        break;
    case 3:
        document.querySelector(".img2").src = "images/dice3.png"
        break;
    case 4:
        document.querySelector(".img2").src = "images/dice4.png"
        break;
    case 5:
        document.querySelector(".img2").src = "images/dice5.png"
        break;
    case 6:
        document.querySelector(".img2").src = "images/dice6.png"
        break;
}

if(randomNum1 > randomNum2){document.querySelector("h1").innerHTML = "Player 1 wins";} 
else if(randomNum1 === randomNum2) {document.querySelector("h1").innerHTML = "Tie";}
else  {document.querySelector("h1").innerHTML = "Player 2 wins";}