class Form{
    constuctor(){

    }

    display(){
        var title = createElement('h2');
        title.html('Car Racing Game');
        title.position(150,130);
        var input= createInput(""); 
        input.position(150,160);
        var button = createButton("start game");
        button.position(150, 190); 
        var greeting = createElement('h2');

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            
            
        });

        



    }

}