
window.onload = () => {
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.style.display = "none";
    document.getElementById("login-screen").style.display = "flex";
  }, 1500);
};

function startGame() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("game-ui").style.display = "flex";
}
