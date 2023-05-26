let win = 0;
let lose = 0;
let draw = 0;
//const container = document.querySelector('#container');


function playing(x, y){
    console.log(x + "and" + y);
    if(x == y){
        //console.log("it's a draw");
        draw++;
    }
    else if(x == 0 && y == 2){
        //console.log("you win");
        win++;
    }
    else if(x == 2 && y == 0){
        //console.log("you lose");
        lose++;
    }
    else if(x < y){
        //console.log("you lose");
        lose++;
    }
    else if(x > y){
        //console.log("you win");
        win++;
    }
    score();
    if(win == 5){display("you won"); win = 0; lose = 0; draw = 0;}
    if(lose == 5){display("you lose"); win = 0; lose = 0; draw = 0;}
}

function display(x){
    const container = document.querySelector('#con');
    const scores = document.createElement('div');
    container.replaceChildren(scores);
    //container.removeChild(container.firstChild);
    scores.classList.add('content');
    scores.textContent = x;
}

function init(){
    const container = document.querySelector('#con');
    const scores = document.createElement('div');
    scores.classList.add('content');
    container.appendChild(scores);
    scores.textContent = "this is the score" + win + lose + draw;
}

function play(){
    const h = document.querySelectorAll('button');
    console.log("wat in the fuck");
    h.forEach((butt) => {
        butt.addEventListener('click', () => {playing(butt.id, Math.floor(Math.random()*3));})
        console.log("yyeeye");
    });
    
}

function score(){
    const container = document.querySelector('#con');
    const scores = document.createElement('div');
    container.replaceChildren(scores);
    //container.removeChild(container.firstChild);
    scores.classList.add('content');
    scores.textContent = "this is the score" + win + lose + draw;
    //container.appendChild(scores);
    //const co = document.querySelector('#con');
    //const c1 = console.dir(co.firstElementChild);
    //c1.textContent = "new new"   
}