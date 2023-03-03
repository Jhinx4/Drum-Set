function pressedButton(button) {
  var addShadow = document.querySelector(button);
  addShadow.classList.add("pressed");
  document.querySelector(button).style.color=("white");
  setTimeout(function() {
    addShadow.classList.remove("pressed")},100);
}


function handler(input) {
  switch (input) {
    case "w":
      var soundPlayed = new Audio("sounds/tom-1.mp3")
      soundPlayed.play();
      pressedButton(".w");
      break;
    case "a":
      var soundPlayed = new Audio("sounds/tom-2.mp3")
      soundPlayed.play();
      pressedButton(".a");
      break;
    case "s":
      var soundPlayed = new Audio("sounds/tom-3.mp3")
      soundPlayed.play();
      pressedButton(".s");
      break;
    case "d":
      var soundPlayed = new Audio("sounds/tom-4.mp3")
      soundPlayed.play();
      pressedButton(".d");
      break;
    case "j":
      var soundPlayed = new Audio("sounds/crash.mp3")
      soundPlayed.play();
      pressedButton(".j");
      break;
    case "k":
      var soundPlayed = new Audio("sounds/kick-bass.mp3")
      soundPlayed.play();
      pressedButton(".k");

      break;
    case "l":
      var soundPlayed = new Audio("sounds/snare.mp3")
      soundPlayed.play();
      pressedButton(".l");
      break;
    default:
  }
}

document.addEventListener("keydown", function(event) {
  var keyBoardDrumSound = event.key;
  handler(keyBoardDrumSound);
});

for (i = 0; i <= 6; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = "white";
    var drumSound = (this.innerHTML);
    handler(drumSound);
  });
}
