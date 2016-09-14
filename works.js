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
  // wordSpace.height = window.innerHeight * 0.8;
  // wordSpace.width = window.innerWidth * 0.8;

  function nameDraw() {
    // random colours and size
    // var r = getRandomInt(40,255);
    // var g = getRandomInt(40,255);
    // var b = getRandomInt(40,255);
    // var s = Math.random();

    //select random names
    var randomNumName = getRandomInt(0, names.length -1);
    var randomName = names[randomNumName];

    // where individual name is placed
    var namePlace = document.createElement("div");
    namePlace.textContent = randomName;
    namePlace.style.position = "absolute";
    namePlace.style.left = getRandomInt(50, winWidth -50) + "px";
    namePlace.style.top = getRandomInt(50, winHeight -50) + "px";
    document.body.appendChild(namePlace);

    setTimeout(function() { namePlace.parentNode.removeChild(namePlace); }, 1000);

    setTimeout(function() { nameDraw(); }, 300);
  };

  nameDraw();

}

randomNamesDraw();

