const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500);
}

//Lógica do pulo do Mario
const loop = setInterval(() => {

    

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition < 125 && pipePosition > 0 && marioPosition < 50) { //condição para prosseguir no jogo

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 

        pipe.style.animation = 'none';
        pipe.style.bottom = `${marioPosition}px`; 

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

    }

}, 10)

document.addEventListener('keydown', jump);
