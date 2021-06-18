
var database;
var form,game, player;
var gameState= 0;
var playerCount=0;
var allPlayers;
var car1 , car2, car3, car4, cars;
var car1Img , car2Img , car3Img, car4Img,trackImg;


function preload(){

    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    trackImg = loadImage("images/track.jpg");

    
}

function setup(){

    // create the connection with your databasewda
    database = firebase.database();
    createCanvas(displayWidth - 20, displayHeight - 30);
    game = new Game ();
    game.getState (); 
    game.start(); 
    
     

}

function draw(){
    background("white");
    if(playerCount=== 4){
        game.update(1);
    }
    if(gameState === 1 ){
        clear();
        game.play();
    }

    if(gameState === 2){
         game.end();
         //game.update(2); - Done when CarsAtEnd=4 and gamestate=2
    }
    //drawSprites();
}