function changeColor() {

    let rand = Math.random() * 256;
    let red = Math.floor(rand);
    let green = Math.floor(rand);
    let blue = Math.floor(rand);

    let color = "rgb(" + red + "," + green + "," + blue + ")"; 

    document.getElementById("container").style.backgroundColor = color;
}