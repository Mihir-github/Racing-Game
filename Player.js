class Player {
  constructor(){
    this.rank = null;
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
      // gets info of players from database
    })
  }

  getRank() {
    var rankref = database.ref("CarsatEnd");
    rankref.on("value",(data)=>{
      this.rank = data.val();
      // gets info of rank from database
    })
  }
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
      // refers to all functions
    })
  }
  static updateCarsatEnd(rank) {
    database.ref('/').update({
      CarsatEnd: rank
    })

  }
}
