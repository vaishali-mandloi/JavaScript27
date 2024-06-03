// window.onscroll = function() {myFunction()};

var nav = document.getElementById("navigation");
var sticky = nav.offsetTop;

function myFunction() {
    if (window.scrollY > sticky) {
         nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
    
    // var v = window.scrollY;
    // console.log("offset: " + sticky);
    // console.log("scrolly: " + v);
}

   

