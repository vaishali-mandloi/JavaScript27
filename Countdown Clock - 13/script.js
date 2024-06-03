document.addEventListener('DOMContentLoaded', function() {
    let hours = 1;
    let minutes = 22;
    let seconds = 10;

    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function display() {
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    function countdown() {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(intervalId);
            console.log("Countdown completed!!!");
        } else {
            if (seconds > 0) {
                seconds--;
            } else {
                if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    if (hours > 0) {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    }
                }
            }
            display();
        }
    }

    display();

    const intervalId = setInterval(countdown, 1000);
});


// let counter = 0;

// const set = setInterval(() => {
//     counter++;
//     console.log(counter);

//     if(counter == 5) {
//         clearInterval(set);
//         console.log("Counter Stopped!!!")
//     }
// }, 1000);
