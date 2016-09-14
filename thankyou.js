// Random Integer Generator

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// size of document window
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;

function randomNamesDraw() {
  // space where words appear
  var wordSpace = document.getElementById("word-space");

  function nameDraw() {
    //select random names
    var randomNumName = getRandomInt(0, names.length -1);
    var randomName = names[randomNumName];

    // where individual name is placed
    var namePlace = document.createElement("div");
    namePlace.textContent = randomName;
    namePlace.style.position = "absolute";
    namePlace.style.left = getRandomInt(5, winWidth) + "px";
    namePlace.style.top = getRandomInt(5, winHeight) + "px";
    document.body.appendChild(namePlace);

    setTimeout(function() { namePlace.parentNode.removeChild(namePlace); }, 4000);

    setTimeout(function() { nameDraw(); }, 100);
  };

  nameDraw();

}

randomNamesDraw();
