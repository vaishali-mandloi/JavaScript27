let x;
let score = 0;
let blinkCount = 0;
let clickCount = 0;

function start() {
    x = setInterval(startGame, 2000);
}

function getMethod(key){
    let y = document.querySelector("." + key);
   

    clickCount ++;

        if(y.classList.contains('active') && (blinkCount === clickCount)) {
            console.log("Score increases");
            score ++;
        } else {
            console.log("Clear interval run");
            clearInterval(x);
            document.getElementById("score").innerHTML = "<h3>Game Over!!!</h3>" + "<p>Total Score :" + score + "</p>" ;
            document.querySelector(".startBtn").textContent = "Start Again";
            score = 0;
            return;
        }
        console.log("score :" + score);
}

function startGame() {
    document.getElementById("score").innerHTML = "";
    document.querySelector(".startBtn").textContent = "Game is running.....";

    const colors = ["red", "green", "blue", "yellow"];
    let color = colors[(Math.floor(Math.random() * colors.length))];
    console.log("color :" +color); 

    blinkCount++;

    document.querySelector("." + color).classList.add("active"); 

    for(let i = 0; i < colors.length; i++) {
        if(colors[i] !== color ) {  
            document.querySelector("." + colors[i]).classList.remove("active");
        }  else{
            document.querySelector("." + colors[i]).classList.remove("active");
            setTimeout(()=>{
                document.querySelector("." + color).classList.add("active");
            },1000)
        }
    }
}

// let x;
// let count = 0;
// const allBlinks = [];
// const allClicks = [];

// function start() {
//     x = setInterval(blink, 1500);
// }

// function blink() {
//     const colors = ["red", "green", "blue", "yellow"];
//     let color = colors[(Math.floor(Math.random() * colors.length))];

//     allBlinks.push(color);

//     document.querySelector("." + color).classList.add("active"); 

//     for(let i = 0; i < colors.length; i++) {
//         if(colors[i] !== color ) {  
//             document.querySelector("." + colors[i]).classList.remove("active");
//         }  else{
//             document.querySelector("." + colors[i]).classList.remove("active");
//             setTimeout(()=>{
//                 document.querySelector("." + color).classList.add("active");
//             },500)
//         }
//     }

//     count++;
//     if(count === 5) {
//         document.querySelector("." + color).classList.remove("active");
//         clearInterval(x);
//         console.log(allBlinks);
//         count = 0;
//     }
// }

// function getMethod(key) {
//     allClicks.push(key);

//     if(allClicks[count] !== allBlinks[count]) {
//         document.getElementById("#score").innerHTML = "Shit.... You enterd wrong pattern";
//         return;
//     } else {
//         score ++;
//         if(score == 5) {
//             document.getElementById("#score").innerHTML = "Shit.... You enterd wrong pattern";
//         }
//     }
//     console.log("c : " + allClicks);
// }