randnum = Math.floor(Math.random()*6)+1

if (randnum===1){
    document.querySelector('.p1 img').setAttribute('src','images/dice1.png');
}
else if (randnum==2){
    document.querySelector('.p1 img').setAttribute('src','images/dice2.png');
}
else if (randnum==3){
    document.querySelector('.p1 img').setAttribute('src','images/dice3.png');
}
else if (randnum==4){
    document.querySelector('.p1 img').setAttribute('src','images/dice4.png');
}
else if (randnum==5){
    document.querySelector('.p1 img').setAttribute('src','images/dice5.png');
}
else if (randnum==6){
    document.querySelector('.p1 img').setAttribute('src','images/dice6.png');
}

randnum1 = Math.floor(Math.random()*6)+1

if (randnum1===1){
    document.querySelector('.p2 img').setAttribute('src','images/dice1.png');
}
else if (randnum1==2){
    document.querySelector('.p2 img').setAttribute('src','images/dice2.png');
}
else if (randnum1==3){
    document.querySelector('.p2 img').setAttribute('src','images/dice3.png');
}
else if (randnum1==4){
    document.querySelector('.p2 img').setAttribute('src','images/dice4.png');
}
else if (randnum1==5){
    document.querySelector('.p2 img').setAttribute('src','images/dice5.png');
}
else if (randnum1==6){
    document.querySelector('.p2 img').setAttribute('src','images/dice6.png');
}


function reset(){
    document.querySelector('.p1 img').setAttribute('src','images/dice1.png');
    document.querySelector('.p2 img').setAttribute('src','images/dice1.png');
    document.querySelector('h1').innerHTML="Refresh";
    document.getElementById('p1t').style.backgroundColor = "";
    document.getElementById('p1t').style.color = "";
    document.getElementById('p2t').style.backgroundColor = "";
    document.getElementById('p2t').style.color = "";
}

if (randnum>randnum1){
    document.querySelector('h1').innerHTML="🏆Player 1 Wins";
    document.getElementById('p1t').style.backgroundColor = "limegreen";
    document.getElementById('p1t').style.color = "black";
}
else if (randnum<randnum1) {
    document.querySelector('h1').innerHTML="Player 2 Wins🏆";
    document.getElementById('p2t').style.backgroundColor = "limegreen";
    document.getElementById('p2t').style.color = "black";
}
else {
    document.querySelector('h1').innerHTML="DRAW";
    document.getElementById('p1t').style.backgroundColor = "red";
    document.getElementById('p2t').style.backgroundColor = "red";
}