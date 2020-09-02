class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("Reset");
    //creates the form of greeting
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    // hides the form
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.reset.position(displayWidth-200,50);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    // position of the form
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      // hides button and input
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      // creating new player and updating
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      // position of greeting
    });
// resets database
    this.reset.mousePressed(() => {
      player.updateCount(0);
      game.update(0);
      //resets the game

    })  
  }




}
