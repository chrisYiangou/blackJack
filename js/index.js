"use strict";

//let firstCard = Math.floor(Math.random + 2);
//let secondCard = Math.floor(Math.random + 2);
//(Violates DRY - (Don't Repeat Yourself)

//As this is Chris BlackJack Im going to Create two objects representing the player (me)
//and the opposition - the robot
let player = {
  //Will include a picture
  name: "Chris",
  pokerChips: 150,
};

let robot = {
  imgFile: "/pictures/cowboyPokerMan.png",
  name: "Hanson",
  pokerChips: 150,
};

/*These three variables are allowing me access the document.
In this way I am able to play around with the InnerHTML and edit it to my hearts content*/
let firstCard = document.getElementById("firstCard");
let secondCard = document.getElementById("secondCard");
let sumOfCards = document.getElementById("sumOfCards");
let messageHTML = document.getElementById("message");
let hiddenMessageEl = document.getElementById("hiddenMessageEl");
let twentyOneEl = document.getElementById("twentyOne");
let specific_tbody = document.getElementById("twentyOneBody");

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
let gameStarted = false;
let message = "";
let hiddenMessage = "";
let cardSum = 0;
let playerCards = [];

// console.log(blackJack);
// console.log(bust);

/*This is the actual value of the cards - I am making it random so that
when a player starts the game, they will have two random cards to start with
I've created the */
function randomCardValue() {
  let randomValue = Math.floor(Math.random() * 10) + 1;
  
    console.log(cardSum);

    //User will be able to choose between 1/11 (will figure this out later)
    /* An Ace will have a value of 11 unless that would give a player 
    or the dealer a score in excess of 21; in which case, it has a value of 1.  */
    if (cardSum < 11 && randomValue === 1) {
      randomValue = 11;
      return randomValue
    }
    else if (randomValue === 1) {
      randomValue = 1;
      return randomValue;
    }
    else if (randomValue > 10) {
        randomValue = 10;
        return randomValue;
    }
    else {
      return randomValue;
    }
    }

//I need to create an Array of Card Value and the store them like this
//An additional function sum will then be created so that I am able to add everything together
//in the array

function sum() {
  let sumArrayCount = playerCards.length;

console.time("Sum")

  for (var i = 0; i < sumArrayCount; i++) {
    cardSum += playerCards[i];
  }

console.timeEnd("Sum")
  return cardSum;
}

/* This is the initial button to start the game - I will need to add three more buttons to complete 
the functionality of the website. As well as this - we will create a "bot", who the player will play against 
which should be good*/
function startBlackJack() {
 


  if (gameStarted === false) {
  gameStarted = true; 
  // let valueOfCard1 = randomCardValue();
  // let valueOfCard2 = randomCardValue();

  // firstCard.innerHTML = valueOfCard1;
  // secondCard.innerHTML = valueOfCard2;
  playerEl.innerHTML =
    "Player Name: " + player.name + " || Poker Chips: " + player.pokerChips;
  robotEl.innerHTML =
    "Opponents Name: " + robot.name + " || Poker Chips  " + robot.pokerChips;

  //playerCards.push(valueOfCard1, valueOfCard2);
  draw();
  
 
  }
   //So users can not use the Start Button once they have used it.
 
}

//The startgame button should have a button that renders the game, as this needs to be used in the Draw button as well

function renderBlackJack() {
  if (blackJack === false && bust === false && folded === false) {
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
      hiddenMessage = "Try harder - Gamble More";
    }
  }
  messageHTML.innerHTML = message;
  hiddenMessageEl.innerHTML = hiddenMessage;
}

/* Creating a function that is able to end the game will be my next step this willbe the FOLD button
 this will essentially just 
change the game so that the message says Win Fail etc */

function fold() {
  if (gameStarted === true && blackJack === false && bust === false) {
    folded = true;

    if (cardSum <= 20) {
      hiddenMessage = "Could do better try again";
    }
    else (blackJack) => {
      hiddenMessage = "Well done on Winning this hand";
    }
    hiddenMessageEl.innerHTML = hiddenMessage;
  }
}

/* The Draw Button will enable a user to be able to add a third, forth, fifth card and enable the user to keep 
playing the game. */

function draw() {
  if (gameStarted === true && blackJack === false && bust === false) {
  cardSum -= cardSum;
  console.log(playerCards);
  let newCard = randomCardValue();
  playerCards.push(newCard);
  newCardtoTable();
  renderBlackJack();
  }
}

//Creating a function to add to the already existing table
function newCardtoTable() {
  //Specifying the body of the table I want to insert into.

  for(let i = 0; i < playerCards.length; i++) {
    if (i === (playerCards.length - 1)){
  // let specific_tbody = document.getElementById("twentyOneBody");
  
  let row = specific_tbody.insertRow();

  console.log(playerCards[i])
  
  row.textContent = "   " + (i + 1) + conditionalDates(i + 1) + "Card: " +  " " + (playerCards[i]) + "   ";
 
  console.log(row.textContent);
  specific_tbody.append();
    }
  }
}

/*This function is made to reset the webpage so that the values within the boxes are reset - In case the user wants to start again
I should start thinking about how users can actually start saving their previous wins/losses...... */
function resetBlackJack() {
  window.location.reload()
  // valueOfCard1 -= randomCardValue();
  // valueOfCard2 == randomCardValue();
}



function conditionalDates(num) {
  // I am turning the number into an String so I am able to then split the 'numbers' into an array, this way I can identify the last digit   
  const text = num.toString();
  const splitText = text.split('')
  let message = "";
  
  console.log(splitText[(splitText.length -1)]);
  
  const lastDigit = parseInt(splitText[(splitText.length -1)]);
  
  //used a switch statement to make it a bit more readable.

  switch (lastDigit){
  case 1:
      message = "st "
      break;
  case 2:
      message = "nd ";
      break;
  case 3: 
      message = "rd "
      break;
  default:
      message = "th "
      break;
  }
  //  if (parseInt(splitText[(splitText.length -1)] === 1)) {
  //     message = 'st ';
  //     console.log(message);
  //   } 
  //   if (parseInt(splitText[(splitText.length -1)] === 2)) {
  //       message = 'nd '
  //       console.log(message)
  //   } 
  //   if (parseInt[splitText.at(splitText.length -1)] === 3) {
  //     message = 'rd ';
  //     console.log(message)
  //   } 
  //   else {
  //     message = 'th ';
  //     console.log(message);
  //     }
   return message;   
  } 
  
//Replaced the onclicks with these eventlisteners
//Update EventHandlers were not working so have updated removed them for now
//Uncomment below segment if needed in future

//startButton.addEventListener('click', startBlackJack);
//foldButton.addEventListener('click', fold);
//drawButton.addEventListener('click', draw);
//resetButton.addEventListener('click', resetBlackJack);
