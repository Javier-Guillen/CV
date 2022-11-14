const buttonColors = [
    "red",
    "blue",
    "green",
    "yellow"    
];

const gamePattern = []

for(let i = 0; i<4; i++){
    nextSequence();
    
}


function nextSequence() {
    let randomNumber = (Math.floor(Math.random() * 4));
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
}
