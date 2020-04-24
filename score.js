
var p1Button = document.querySelector("#player1");
var p2Button = document.querySelector("#player2");
var resetButton = document.querySelector("#reset");
var input = document.querySelector("#input");
var h1 =   document.querySelector("h1");

var scoreP1 = 0;
var scoreP2 = 0 ;
var winningScore = 5;

var gameOver = false;

// var h1 = document.querySelector("h1");
var p1Display = document.getElementById("p1");
var p2Display = document.getElementById("p2");

p1Button.addEventListener("click",function(){
  if(!gameOver){
  scoreP1++;
  if(scoreP1===winningScore){
    gameOver = true;
        p1Display.classList.add("win");
      
  }

    p1Button.style.color = "blue";
  p1Display.textContent = scoreP1;
}

});


p2Button.addEventListener("click",function(){
  if(!gameOver){
      scoreP2++;
      if(scoreP2===winningScore){
        p2Display.classList.add("win");
        gameOver = true;

      }

          p2Button.style.color = "blue";
        p2Display.textContent = scoreP2;
  }
});

input.addEventListener("change",function(){
  document.querySelector("#limit").textContent = input.value;//To get the value of what user have given in input form.
  winningScore = Number(input.value);
});

resetButton.addEventListener("click",function(){
  resetButton.style.color="red";
  scoreP1 = 0;
  scoreP2 = 0;
  p1Display.textContent = scoreP1;
  p2Display.textContent = scoreP2;
  gameOver = false;

    p1Display.classList.remove("win");
      p2Display.classList.remove("win");


  var audio = new Audio("bubbles.mp3");
  audio.play();
});
