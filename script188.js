var p1Btn = document.getElementById("p1");
var p2Btn = document.getElementById("p2");
var resetBtn = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var inputPoints = document.getElementById("inputPoints")
var winningScore = Number(inputPoints.value);
var gameOver = false;

p1Btn.addEventListener("click", function(){
    if(!gameOver){
        p1Score ++;
        if(p1Score === winningScore){
            document.getElementById("leftScore").classList.add("winner");
        }
        if(p1Score === winningScore){
            gameOver = true;
        }
        document.getElementById("leftScore").textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function(){
    if(!gameOver){
        p2Score ++;
        if(p2Score === winningScore){
            document.getElementById("rightScore").classList.add("winner");
        }
        if(p2Score === winningScore){
            gameOver = true;
        }
    document.getElementById("rightScore").textContent = p2Score;
    }
});

function reset(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    document.getElementById("leftScore").textContent = p1Score;
    document.getElementById("rightScore").textContent = p2Score;
    document.getElementById("leftScore").classList.remove("winner");
    document.getElementById("rightScore").classList.remove("winner");
};

resetBtn.addEventListener("click", function(){
    reset();
});

inputPoints.addEventListener("change", function(){
    winningScore = Number(inputPoints.value);
    document.getElementById("maxPointsView").textContent = inputPoints.value
    reset();
});
