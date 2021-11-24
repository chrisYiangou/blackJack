"use strict";

//let firstCard = Math.floor(Math.random + 2);
//let secondCard = Math.floor(Math.random + 2);

//As this is Chris BlackJack Im going to Create two objects representing the player (me)
//and the opposition - the robot
let player = {
  //Will include a picture
  name: "Chris",
  pokerChips: 150
}

let robot = {
  imgFile: '/pictures/cowboyPokerMan.png',
  name: "Hanson",
  pokerChips: 150
}

/*These three variables are allowing me access the document.
In this way I am able to play around with the InnerHTML and edit it to my hearts content*/
let firstCard = document.getElementById("firstCard");
let secondCard = document.getElementById("secondCard");
let sumOfCards = document.getElementById("sumOfCards");
let messageHTML = document.getElementById("message");
let hiddenMessageEl = document.getElementById("hiddenMessageEl")
let twentyOneEl = document.getElementById("twentyOne");


//Objects
let playerEl = document.getElementById("player-el");
let robotEl = document.getElementById("robot-el");

//Buttons
let startButton = document.getElementById("start-el");
let foldButton = document.getElementById("foldButton-el");
let drawButton = document.getElementById("drawButton-el");
let resetButton = document.getElementById("reset-el");

//Additional booleans and a message is required to help the players know how they are doing 
// in the game

//console.log(valueOfCard1);
//console.log(valueOfCard2);
let blackJack = false;
let bust = false;
let folded = false;
let message = "";
let hiddenMessage = "";
let cardSum = 0;
let playerCards = [];
let hasfolded = false;

console.log(blackJack);
console.log(bust);


/*This is the actual value of the cards - I am making it random so that
when a player starts the game, they will have two random cards to start with
I've created the */
function randomCardValue() {
  let randomValue = Math.floor(Math.random() * 10) + 2;
  if (randomValue === 1) {
    //User will be able to choose between 1/11 (will figure this out later)
    return 11;
  } else if (randomValue > 10) {
     return 10;
  } else {
    return randomValue;
  }
}
//I need to create an Array of Card Value and the store them like this
//An additional function sum will then be created so that I am able to add everything together 
//in the array


function sum() {
  let sumArrayCount = playerCards.length 

  for (let i = 0; i < sumArrayCount; i ++) {
    cardSum += playerCards[i]
  }
  return cardSum;
}

/* This is the initial button to start the game - I will need to add three more buttons to complete 
the functionality of the website. As well as this - we will create a "bot", who the player will play against 
which should be good*/ 
function startBlackJack() {

  let valueOfCard1 = randomCardValue();
  let valueOfCard2 = randomCardValue();

  
  firstCard.innerHTML = valueOfCard1;
  secondCard.innerHTML = valueOfCard2;
  playerEl.innerHTML = "Player Name: " + player.name + " || Poker Chips: " + player.pokerChips;
  robotEl.innerHTML = "Opponents Name: " + robot.name + " || Poker Chips  " + robot.pokerChips;

  playerCards.push(valueOfCard1, valueOfCard2);

  renderBlackJack();
  
  
}

//The startgame button should have a button that renders the game, as this needs to be used in the Draw button as well 

function renderBlackJack() {

  if (blackJack === false && bust === false && folded === true) {

  sum();

  if (cardSum <= 20) {
    message = "Do you want to draw or fold";
    sumOfCards.innerHTML = cardSum;
  } else if (cardSum === 21) {
    message = "BLACKJACK";
    blackJack = true;
    sumOfCards.innerHTML = cardSum;
  } else {
    message = "BUST";
    bust = true;
    sumOfCards.innerHTML = cardSum;
  }
  messageHTML.innerHTML = message;

}
console.log(blackJack);
console.log(bust)

}


/* Creating a function that is able to end the game will be my next step this willbe the FOLD button
 this will essentially just 
change the game so that the message says Win Fail etc */

function fold() {

folded = true;

  if (cardSum <= 20) {
    hiddenMessage = "Could do better try again";
  }
  if (blackJack) {
    hiddenMessage = "Well done on Winning this hand"
  }
  if (bust) {
    hiddenMessage = "Try harder - Gamble More"
  }
  hiddenMessageEl.innerHTML = hiddenMessage;

}



/* The Draw Button will enable a user to be able to add a third, forth, fifth card and enable the user to keep 
playing the game. */

function draw() {
  let newCard = randomCardValue();
  playerCards.push(newCard);
  renderBlackJack();
  
}


//Creating a function to add to the already existing table
function newCardtoTable() {
  let newCardRow = table.insertRow(-1);
}



/*This function is made to reset the webpage so that the values within the boxes are reset - In case the user wants to start again
I should start thinking about how users can actually start saving their previous wins/losses...... */
function resetBlackJack() {
  window.location.reload();
}

//Replaced the onclicks with these eventlisteners  
//Update EventHandlers were not working so have updated removed them for now
//Uncomment below segment if needed in future  

//startButton.addEventListener('click', startBlackJack());
//foldButton.addEventListener('click', fold());
//drawButton.addEventListener('click', draw());
//resetButton.addEventListener('click', resetBlackJack());


