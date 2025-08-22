// move with keyboard
let player = document.getElementById('player');
let posX = 100;
let posY = 100;
let speed = 1;

let keyPressed = new Set();
addEventListener('keydown', (key) => {
    keyPressed.add(key.key.toLowerCase());
})

addEventListener('keyup', (key) => {
    keyPressed.delete(key.key.toLowerCase())
})


let move_player = () => {
    if (keyPressed.has('w')) posY -= speed;
    if (keyPressed.has('s')) posY += speed;
    if (keyPressed.has('a')) posX -= speed;
    if (keyPressed.has('d')) posX += speed;

    player.style.top = posY + "px";
    player.style.left = posX + "px";

    requestAnimationFrame(move_player)

}

move_player();