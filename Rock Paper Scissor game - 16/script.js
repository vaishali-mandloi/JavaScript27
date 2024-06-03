var userResult = "";
var computerResult = "";

function resultGenerator(inp) {
    userResult = inp.textContent.toLowerCase();
    computerResult = computerOutput();

    document.querySelector(".user_enter").textContent = userResult;
    document.querySelector(".computer_enter").textContent = computerResult;

    if ( userResult == "rock" && computerResult == "scissor") {
        document.querySelector(".show_result").textContent = "Congratulations... You won the Match!!!";
    } 
    else if(userResult == "scissor" && computerResult == "paper") {
        document.querySelector(".show_result").textContent = "Congratulations... You won the Match!!!";
    } 
    else if(userResult == "paper" && computerResult == "rock") {
        document.querySelector(".show_result").textContent = "Congratulations... You won the Match!!!";
    }
    else if ( computerResult == "rock" && userResult == "scissor") {
        document.querySelector(".show_result").textContent = "Computer Won the Match!!!";
    } 
    else if(computerResult == "scissor" && userResult == "paper") {
        document.querySelector(".show_result").textContent = "Computer Won the Match!!!";
    } 
    
    else if(computerResult == "paper" && userResult == "rock") {
        document.querySelector(".show_result").textContent = "Computer Won the Match!!!";
    } 
    else  if( computerResult == userResult ) {
        document.querySelector(".show_result").textContent = "Oops....Match Draw!!!";
    }
}

function computerOutput () {
    const arr = ["rock", "paper", "scissor"];
    let res = arr[(Math.floor(Math.random() * arr.length))];
    return res;
}




