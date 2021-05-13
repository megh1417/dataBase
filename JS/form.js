class Form{
    constructor(){
        this.input= createInput(""); 
        this.title = createElement('h2');
        this.button = createButton("start game");
        this.greeting = createElement('h2');
        

    }    
    
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
       
        this.title.html('Car Racing Game');
        this.title.position(displayWidth/1.5 + 150 , 140);
        this.input.position(displayWidth/1.5 + 150 ,210);
        this.button.position(displayWidth/1.5 + 200 , 240); 
      

        this.button.mousePressed(()=>{
            console.log("Pressed!");
           this.input.hide();
           this.button.hide();

            player.name = this.input.value();

            playerCount +=1;
            player.index = playerCount;
            
            console.log("PC  "+playerCount);
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hi " + player.name);
            this.greeting.position(displayWidth/1.5 + 200 ,210);
            
        });

        



    }

}