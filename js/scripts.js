//business logic
function Player(playerName, turnScore, totalScore) {
  this.playerName = playerName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}
//normal player rolling dice
Player.prototype.roll = function() {
  var diceValues = [1, 2, 3, 4, 5, 6];
  var rollValue = diceValues[Math.floor(Math.random() * diceValues.length)];
  if (rollValue === 1) {
    this.turnScore = 0;
    alert("you lost " + this.playerName + "play time");
  } else {
    this.turnScore = this.turnScore + rollValue;
  };
  return rollValue;
}
//when the player holds or when u want to display total score
Player.prototype.score = function() {
  this.totalScore = this.turnScore + this.totalScore;
  this.turnScore = 0;
}
//create name of both players and a button to start the game
$(function() {
  var allPlayers = [];
//user interface

  $("form#create-player").submit(function(event) {
    event.preventDefault();
    $(".game").show();
    $(".form-hider").hide();

    var player1Name = $("input#player1-name").val();
    var player2Name = $("input#player2-name").val();
// player initially has zero turnscore and total score thats what am trying
    var player1 = new Player(player1Name, 0, 0)
    var player2 = new Player(player2Name, 0, 0)
    allPlayers.push(player1);
    allPlayers.push(player2);
