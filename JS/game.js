class Game {
    constructor(){

    }
   
    getState(){
        var gameStateRef = database.ref('gameState');   
        gameStateRef.on("value",function(data){
            gameState = data.val();   // gameState is the variable - use a "="
        });
    }

    updateState(state){
        database.ref('/').update({
            gameState: state        // gameState is the node in the DB - use a ':'
        });
    }

    start(){ 
        if(gameState === 0){
            form = new Form();
            player = new Player();
        }
    }

    
}