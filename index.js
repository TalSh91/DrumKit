var allDrums = document.querySelectorAll(".drum").length;
function makeSound(target){
  switch (target) {
    case "w":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play()
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play()
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play()
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play()
      break;


    default:

  }

}

for (var i = 0;i < allDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      innerHtml = this.innerHTML;
      makeSound(innerHtml);
      buttonAnimation(innerHtml)
    }) ;

}
document.addEventListener("keydown",event=>{

  makeSound(event.key);
  buttonAnimation(event.key);
})


function buttonAnimation(key){
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout (function(){
    activeButton.classList.remove("pressed");
  },100);

}
