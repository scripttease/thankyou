// Import CSS so it is loaded on the page
require("./main.css");

// Random Integer Generator

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
  // random colours and size
  var r = getRandomInt(40,255);
  var g = getRandomInt(40,255);
  var b = getRandomInt(40,255);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function randomName() {
  var randomNumName = getRandomInt(0, names.length -1);
  return names[randomNumName];
}

function nameDraw() {
  // space where words appear
  var wordSpace = document.getElementById("word-space");
  wordSpace.height = window.innerHeight;
  wordSpace.width = window.innerWidth * 0.7;

  // where individual name is placed
  // TODO make the div position wordspace - divsize!
  var namePlace = document.createElement("span");
  namePlace.textContent = randomName();
  namePlace.style.position = "absolute";
  namePlace.style.top = getRandomInt(0, wordSpace.height) + "px";
  namePlace.style.left = getRandomInt(0, wordSpace.width) + "px";
  namePlace.style.color = randomColor();
  // var s = getRandomInt(5, 30);
  // namePlace.style.fontSize = s + "px";
  wordSpace.appendChild(namePlace);

  setTimeout(function() { namePlace.parentNode.removeChild(namePlace); }, 1000);

  setTimeout(nameDraw, 300);
};

nameDraw();
