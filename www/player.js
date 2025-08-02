// move with keyboard
let move_player = (player) => {
    addEventListener('keyup', (key) => {
        console.log(key.key)
        switch (key.key){
            case 'w': player.clientX + 1;

        }
    })
}

move_player(document.getElementById('player'));
