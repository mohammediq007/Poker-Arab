
function startGame() {
    const cards = ['🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪'];
    let board = document.getElementById('cards');
    board.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * cards.length);
        board.innerHTML += '<span style="font-size:40px; margin:10px;">' + cards[random] + '</span>';
    }
}
