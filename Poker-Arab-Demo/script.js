
function enterGame() {
  document.getElementById("login").style.display = "none";
  document.getElementById("loading").style.display = "block";

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("game").style.display = "block";
  }, 2000);
}
