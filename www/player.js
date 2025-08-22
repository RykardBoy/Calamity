// move with keyboard
let player = document.getElementById('player');
let posX = 500;
let posY = 500;
let speed = 1;

let keyPressed = new Set();
addEventListener('keydown', (key) => {
    keyPressed.add(key.key.toLowerCase());

})

addEventListener('keyup', (key) => {
    keyPressed.delete(key.key.toLowerCase())
})


let movePlayer = () => {
    if (posY < 1000 && posY > -1000){
        if (keyPressed.has('w')) posY -= speed;
        if (keyPressed.has('s')) posY += speed;
    }

    if (posX < 1000 && posX > -1000){
        if (keyPressed.has('a')) posX -= speed;
        if (keyPressed.has('d')) posX += speed;
    }

    player.style.top = posY + "px";
    player.style.left = posX + "px";

    requestAnimationFrame(movePlayer) // calls the movePlayer method 60 times per second.

}

movePlayer();

addEventListener('click', (event) => {
    console.log("X : " + event.clientX)
    console.log("Y : " + event.clientY)
})
