// Random Integer Generator

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// size of document window
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;

// space where words appear
var wordSpace = document.getElementbyId("word-space");

function nameDraw() {
  //select random names
  var randomNumName = getRandomInt(0, names.length -1);
  var randomName = names[RandomNumName];

  // where individual name is placed
  var namePlace = document.createElement("div");
  namePlace.textContent = randomName;
  namePlace.style.position = "absolute";
  namePlace.style.left = getRandomInt(5, winWidth) + "px";
  namePlace.style.top = getRandomInt(5, winHeight) + "px";
  document.body.appendChild(namePlace);

}

nameDraw();
