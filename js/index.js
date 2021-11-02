'use strict'

let firstCard = Math.floor((Math.random) + 2);
let secondCard = Math.floor((Math.random) + 2);

let sum = firstCard + secondCard;
let hasBlackJack = false;
let busted = true;
let message = "";

if (sum < 20) {
    message = "Do you want to draw or fold";
} else if (sum === 21) {
    message = "BLACKJACK";
    hasBlackJack = true;
} else {
    message = "BUST";
    busted = false;
}