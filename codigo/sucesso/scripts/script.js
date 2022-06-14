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

function alloff() {
    var off = "off"
    localStorage.setItem("1", "off");
    localStorage.setItem("2", "off");
    localStorage.setItem("3", "off");
    localStorage.setItem("4", "off");
}
function salvar() {alloff()
    localStorage.setItem("1", document.querySelector("#flexRadioDefault1").value);
}
function salvar2() {alloff()
    localStorage.setItem("2", document.querySelector("#flexRadioDefault2").value);
}
function salvar3() {alloff()
    localStorage.setItem("3", document.querySelector("#flexRadioDefault3").value);
}
function salvar4() {alloff()
    localStorage.setItem("4", document.querySelector("#flexRadioDefault4").value);
}