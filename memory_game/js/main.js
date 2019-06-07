var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

function score() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.score) {
      localStorage.score = Number(localStorage.score)+1;
    } else {
      localStorage.score = 1;
    }}}
function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
	score();
  alert("You found a match! your score is = " +localStorage.score);
 localStorage.setItem("counter", counter);
} else {
 alert("Sorry, your score is = " +localStorage.score);

}}
function flipCard(){
var cardId= this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank);
console.log( cards[cardId].cardImage);
console.log( cards[cardId].suit);

cardsInPlay.push( cards[cardId].rank);
this.setAttribute('src',cards[cardId].cardImage);
if (cardsInPlay.length === 2){
	checkForMatch();
}


 }
 function createBoard(){
 	var cardElement;
 	for (var i = 0; i<cards.length; i++){
 		cardElement = document.createElement('img');
 		cardElement.setAttribute('src','images/back.png'); 
 		cardElement.setAttribute('data-id',i); 
 		cardElement.addEventListener('click',flipCard);
 		document.getElementById("game-board").appendChild(cardElement);


 			}
 }
 createBoard();