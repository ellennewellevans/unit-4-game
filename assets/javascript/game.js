//game with 4 crystals and they each have a unique randomly assigned value from 1 - 20
//there is a randomly assigned target score of 50 - 100
//new numbers will generate each game
//each value adds to the previous selected value
//once the total is at or above the random target score, the game ends
//if the current score is equal to the target score, the player wins
//if the total score exceeds the target score, the player loses
//wins and loses should be tallied on screen, even when the game resets


$(document).ready(function() {


//Generate the goalScore for the player to try to match
var goalScore = Math.floor(Math.random() * 102) + 40; 
console.log("goalScore: " + goalScore); 
$("#goalScore").html(goalScore); 

//Generate the random values for each crystal

var purpleCrystal = Math.floor(Math.random() * 10) + 1; 
console.log("purpleCrystal: " + purpleCrystal); 
$("#purple").val(purpleCrystal);

var WhitteCrystal = Math.floor(Math.random() * 10) + 1; 
console.log("whiteCrystal: " + whiteCrystal); 
$("#white").val(whiteCrystal);

var greenCrystal = Math.floor(Math.random() * 10) + 1; 
console.log("greenCrystal: " + greenCrystal); 
$("#green").val(greenCrystal);

var blueCrystal = Math.floor(Math.random() * 10) + 1; 
console.log("blueCrystal: " + blueCrystal); 
$("#blue").val(blueCrystal);

});