function playRound(){
    //x is the player, y is the opponent.//
    let x = Math.floor(Math.random()*3);
    let y = Math.floor(Math.random()*3);

    console.log(x);
    console.log(y);
    //0 = rock, 1 = paper, 2 = scissors//
    if(x == y){
        console.log("it's a draw");
    }
    else if(x < y || (x == 2 && y == 0)){
        console.log("you lose");
    }
    else if(x > y || (x == 0 && y == 2)){
        console.log("you win");
    }

}
