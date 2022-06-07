var popup = document.getElementById("window");
var btn = document.getElementById("btn");
var close = document.getElementsByClassName("kill")[0];
btn.onclick = function () {
    popup.style.display = "block";
}
close.onclick = function () {
    popup.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}