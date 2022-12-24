function log_in(){
var p1n=document.getElementById("Player1_name").value;
var p2n=document.getElementById("Player2_name").value;
localStorage.setItem("name1", p1n)
localStorage.setItem("name2", p2n)
window.location="game.html"
}