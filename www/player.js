// move with keyboard
let player = document.getElementById('player');
let earth = document.getElementById('terreBloc')

let posX = 500;
let posY = 500;
let speed = 10;

let keyPressed = new Set();

addEventListener('keydown', (key) => {
    keyPressed.add(key.key.toLowerCase());
})

addEventListener('keyup', (key) => {
    keyPressed.delete(key.key.toLowerCase())
})


let movePlayer = () => {
    if (posY !== earth.offsetTop){
        if (keyPressed.has('w')) posY -= speed;
    } else {
        posY += 1;
    }

    if (posY !== (earth.offsetHeight + earth.offsetTop)){
        if (keyPressed.has('s')) posY += speed;
    } else {
        posY -= 1;
    }

    if (posX !== earth.offsetLeft){
        if (keyPressed.has('a')) posX -= speed;
    } else {
        posX += 1;
    }

    if (posX !== (earth.offsetWidth + earth.offsetLeft)){
        if (keyPressed.has('d')) posX += speed;
    } else {
        posX -= 1;
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
