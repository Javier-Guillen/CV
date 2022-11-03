
let numberButtons = document.querySelectorAll(".drum").length;
let crash = new Audio('noises/crash.mp3');


//Funcion le metes un caracter y reproduce el sonido



//Bucle que añade un eventListener para cada boton
for (let i = 0; i < numberButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
  
}

//Reproduce un sonido cada vez que se pulsa la tecla 
document.addEventListener("keydown", (e) =>{
  playSound(e.key);
  buttonAnimation(e.key);
})

function playSound (caracter){
  switch(caracter){
    case "w" :
      console.log("PRUEBA - He entrado en el case w")
      let crash = new Audio("noises/crash.mp3");
      crash.play();
      break;
    case "a" :
      let kick = new Audio("noises/kick-bass.mp3");
      kick.play();
      break;
    case "s" :
      let snare = new Audio("noises/snare.mp3");
      snare.play();
      break;
    case "d" :
      let tom1 = new Audio("noises/tom-1.mp3");
      tom1.play();
      break;
    case "j" :
      let tom2 = new Audio("noises/tom-2.mp3");
      tom2.play();
      break;
    case "k" :
      let tom3 = new Audio("noises/tom-3.mp3");
      tom3.play();
      break;
    case "l" :
      let tom4 = new Audio("noises/tom-4.mp3");
      tom4.play();
      break;
  }
}

function buttonAnimation (caracter){
  document.querySelector("."+caracter).classList.toggle("pressed");
  setTimeout(() => {
    document.querySelector("."+caracter).classList.toggle("pressed");
  }, 100);
}