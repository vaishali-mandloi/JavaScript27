document.querySelector('img').addEventListener("click", show);

function show() {
    let x = document.getElementById("navigation");
    x.classList.toggle("toggle_class");
}