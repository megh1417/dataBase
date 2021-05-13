class Game {
    constructor(){

    }
   
    getState(){
        var gameStateRef = database.ref('gameState');   
        gameStateRef.on("value",function(data){
            gameState = data.val();   // gameState is the variable - use a "="
        });
    }

    update(state){
        database.ref('/').update({
            gameState: state        // gameState is the node in the DB - use a ':'
        });
    }

    start(){ 
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
            console.log("start " +playerCount);
        }
        car1 = createSprite(100,200);
        car2 = createSprite(400,200);
        car3= createSprite(700,200);
        car4 = createSprite(1000,200);

        cars = [car1,car2,car3,car4];
        
        }    

    play(){
        form.hide();
        textSize(30);
        text("Game star",300,100);

        // call static fucntion

        Player.getPlayerInfo();
        
        // megh : 0 // index =1
        // abcd : 0  //index = 2
        // eeee : 0 // index = 3
        // ffsdfsdf : 0

        // cars = [car1,car2,car3,car4];
        // cars[0]
        // index=1 ----> player1-->cars[0]---cars[index-1]

        if(allPlayers != undefined){
            var index = 0;
            var x = 0; 
            var y = 0;
            var display_position = 130;
            for(var plr in allPlayers ){
                //display_position +=20;
                index = index + 1; 
                x = x + 200
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                
                if(index === player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
                else {
                    cars[index-1].shapeColor = "black";
                }
                
                // textSize(18);
                // text(allPlayers[plr].name + " : " + allPlayers[plr].distance,220,display_position);
            }
        }

        if(keyIsDown(UP_ARROW) &&  player.index != null){
            player.distance += 2;
            player.update();
        }
        drawSprites();

    }
}