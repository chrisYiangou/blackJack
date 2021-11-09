"use strict";

//let firstCard = Math.floor(Math.random + 2);
//let secondCard = Math.floor(Math.random + 2);
let firstCard = document.getElementById("firstCard");
let secondCard = document.getElementById("secondCard");

let valueOfCard1 = Math.floor(Math.random +2);
let valueOfCard2 = Math.floor(Math.random +2); 

let sum = valueOfCard1 + valueOfCard2;
let blackkJack = false;
let bust = true;
let message = "";

function startBlackJack() {

  firstCard.innerText= valueOfCard1.toString();
  secondCard.innerText= valueOfCard2.toString();

  if (sum < 20) {
    message = "Do you want to draw or fold";
  } else if (sum === 21) {
    message = "BLACKJACK";
    BlackJack = true;
  } else {
    message = "BUST";
    bust = false;
  }
  console.log(message);
}
