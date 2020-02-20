var modal = document.getElementById("myModal");

var btnPop = document.getElementById("cog");
var btnClose = document.getElementById("close");

btnPop.onclick = function() {
    modal.style.display = "block";
}

btnClose.onclick = function() {
    modal.style.display = "none";
}