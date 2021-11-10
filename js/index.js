"use strict";

//let firstCard = Math.floor(Math.random + 2);
//let secondCard = Math.floor(Math.random + 2);

/*These three variables are allowing me access the document.
In this way I am able to play around with the InnerHTML and edit it to my hearts content*/
let firstCard = document.getElementById("firstCard");
let secondCard = document.getElementById("secondCard");
let sumOfCards = document.getElementById("sumOfCards");
let messageHTML = document.getElementById("message");

/*This is the actual value of the cards - I am making it random so that
when a player starts the game, they will have two random cards to start with*/
let valueOfCard1 = Math.floor(Math.random() * 10) + 2;
let valueOfCard2 = Math.floor(Math.random() * 10) + 2; 

//console.log(valueOfCard1);
//console.log(valueOfCard2);

let sum = valueOfCard1 + valueOfCard2;
let blackkJack = false;
let bust = true;
let message = "";


/* This is the initial button to start the game - I will need to add three more buttons to complete 
the functionality of the website. As well as this - we will create a "bot", who the player will play against 
which should be good*/ 
function startBlackJack() {

  firstCard.innerHTML = valueOfCard1;
  secondCard.innerHTML = valueOfCard2;

  if (sum < 20) {
    message = "Do you want to draw or fold";
    sumOfCards.innerHTML = sum;
  } else if (sum === 21) {
    message = "BLACKJACK";
    BlackJack = true;
    sumOfCards.innerHTML = sum;
  } else {
    message = "BUST";
    bust = true;
    sumOfCards.innerHTML = sum;
  }
  messageHTML.innerHTML = message;
}

/* Creating a function that is able to end the game will be my next step this willbe the FOLD button
 this will essentially just 
change the game so that the message says Win Fail etc */

/* The Draw Button will enable a user to be able to add a third, forth, fifth card and enable the user to keep 
playing the game. */


/*This function is made to reset the webpage so that the values within the boxes are reset - In case the user wants to start again
I should start thinking about how users can actually start saving their previous wins/losses...... */
function resetBlackJack() {
  window.location.reload();
}

