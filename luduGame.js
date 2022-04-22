
var boxDiv = document.querySelector('.box');
var container = document.querySelector('.container');

// player 1 button
const player1 = document.createElement('button');
player1.classList.add('player1-btn');
player1.innerHTML = "Palyer 1";
boxDiv.appendChild(player1);

// player 2 button
const player2 = document.createElement('button');
player2.classList.add('player2-btn');
player2.innerHTML = "Palyer 2";
boxDiv.appendChild(player2);

// player 1 score update
function totalScore(){
    player1.addEventListener('click', function(){
        var randomScore = Math.random() * 6;
        var roundScore = Math.round(randomScore);
        console.log(roundScore)
        return roundScore;
    });
}

// player 1 score
const player1Text = document.createElement('p');
player1Text.classList.add('player1-score');
player1Text.innerHTML = "Palyer 1 score :" +totalScore();
container.appendChild(player1Text);

// player 2 score
const player2Text = document.createElement('p');
player2Text.classList.add('player2-score');
player2Text.innerHTML = "Palyer 2 score : ";
container.appendChild(player2Text);

