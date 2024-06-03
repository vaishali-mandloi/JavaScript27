function increase() {
    let value = document.getElementById("input").innerHTML;
    value++;
    document.getElementById("input").innerHTML = value;
}

function decrease() {
    let value = document.getElementById("input").innerHTML;
    value--;
    if(value < 0) {
        document.getElementById("input").innerHTML = 0;
    } else {
        document.getElementById("input").innerHTML = value;
    }
}

function reset() {
    document.getElementById("input").innerHTML = 0;
}