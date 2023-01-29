console.log('Mouse game')

window.onload = () => {
    console.log('window loaded')

    const mouse = document.getElementById('mouse')
    const mouseOnSkate = document.getElementById('mouse-on-skate')
    const points = document.getElementById('points')

    console.log('mouse:', mouse)

    window.addEventListener('keypress', (e) => {
        console.log('Keyboard event:', e)
        console.log(mouse.classList.length) // .includes('jump')

        if (e.keyCode === 119) {
            console.log('up')
            mouseOnSkate.classList.add('up')
            mouseOnSkate.classList.remove('down')
        } else if (e.keyCode === 115) {
            console.log('down')
            mouseOnSkate.classList.add('down')
            mouseOnSkate.classList.remove('up')
        }

        if (e.keyCode === 32 && !mouse.classList.length) {
            mouse.classList.add('jump')

            setTimeout(() => {
                mouse.classList.remove('jump')
            }, 800)

            points.innerText = parseInt(points.innerText) + 1
        }

    }, false)

    const start = document.getElementById('start')

    function startGame() {
        start.classList.add('hidden')
        document.querySelector('.game').classList.add('active')
        document.querySelector('#cheese').classList.add('active')
        document.querySelector('#cactus-up').classList.add('active')
        document.querySelector('#cactus').classList.add('active')

        gameStarted()
    }

    function gameStarted() {
        console.log('mouseOnSkate:', mouseOnSkate)
        console.log('mouse:', mouse)
        console.log('mouseOnSkate.style.top:', mouseOnSkate.style.top)

        requestAnimationFrame(gameStarted)
    }

    // start.addEventListener('click', () => {
    //     startGame()
    // }, false)

    start.addEventListener('click', () => startGame(), false)
}