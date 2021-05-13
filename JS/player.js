class Player {
    constructor(){
        this.index = null 
        this.distance = 0 
        this.player = null 

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();   
        })
        console.log("ppppp    " + playerCount);
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index; // players/player2
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance

        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();   
        })
    }

    
}