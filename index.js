var randomNumber1 = "images/dice" + Math.floor(((Math.random()*6) + 1)) + ".png";
var randomNumber2 = "images/dice" + Math.floor(((Math.random()*6) + 1)) + ".png";
var titulo = document.getElementsByTagName("h1")[0];

var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];

img1.src = randomNumber1;
img2.src = randomNumber2;

if (randomNumber1 === randomNumber2) {
	titulo.textContent = "Empate!";
} else if (randomNumber1 > randomNumber2) {
	titulo.textContent = "🚩 Jogador 1 venceu!";
} else {
	titulo.textContent = "Jogador 2 venceu! 🚩";
}