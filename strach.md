//this is single line comment in JavaScript

/*this is a 
multi-line
comment in JavaScript*/

console.log("hello");
var songType = "Megan's Piano by Megan Thee Stalion";
var timesListened = "1";
console.log(songType)
console.log(timesListened)
document.getElementById("favSong").innerHTML = songType
document.getElementById("numTimes").innerHTML = timesListened



var clickCount = 0;
var countButton = document.getElementById('countButton');
var countDisplay = document.getElementById('countDisplay');

countButton.addEventListener('click', counter);

function counter() {
  clickCount++;
  console.log(clickCount);
  countDisplay.innerHTML = clickCount;
}







<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <!--Connect to stylesheet-->
  <!--Connect to JavaScript file-->
  <!--Note: Defer tells the browser to run the script *after* it downloads the full HTML document. Without it, you might get errors.-->
  <script src="script.js" defer></script>
</head>

<body>
  <header>
    <h1>Jams Challenge</h1>
  </header>

  <main>
    <p>My favorite song is:</p>
    <p id="favSong">???</p>
    <p>Number of times I listen to it per week:</p>
    <p id="numTimes">???</p>
    <br>
    <br>
    <br>



    <h1>Click Counter</h1>
    <button id="countButton">Click Me</button>
    <p id="countDisplay">0</p>

  </main>

</body>

</html>