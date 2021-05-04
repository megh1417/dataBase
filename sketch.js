
var database;
var form,game, player;
var gameState= 0;
var playerCount;
function setup(){

    // create the connection with your database
    database = firebase.database();
    createCanvas(500,500);
    

}

function draw(){
    background("white");
    
    drawSprites();
}