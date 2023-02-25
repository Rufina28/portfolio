console.log('Mouse game')

window.onload = () => {
    console.log('window loaded')

    let gameState = 'ready'

    //-- Objects
    const game = document.querySelector('.game')
    const heart = document.querySelector('.heart')
    const eagle = document.querySelector('#eagle-1')

    const mouse = document.getElementById('mouse')
    const mouseOnSkate = document.getElementById('mouse-on-skate')

    const points = document.getElementById('points')
    const lifePoints = document.getElementById('life-points')

    const cheese1 = document.querySelector('#cheese-1')
    const cheese2 = document.querySelector('#cheese-2')

    const cactusUp = document.querySelector('#cactus-up')
    const cactusDown = document.querySelector('#cactus')

    const start = document.getElementById('start')
    const gameOver = document.getElementById('game-over')

    setEvents()

    function setEvents() {
        window.addEventListener('keydown', (e) => {
            console.log('Keyboard event:', e)

            if (e.code === 'Enter' && gameState === 'ready') {
                startGame()
            }

            if (!mouse.classList.contains('jump')) {
                // console.log('mouse on air can-t control skate e.code:', e.code)
                if (e.code === 'KeyW' || e.code === 'ArrowUp') {
                    // console.log('up')
                    mouseOnSkate.classList.add('up')
                    mouseOnSkate.classList.remove('down')
                } else if (e.code === 'KeyS' || e.code === 'ArrowDown') {
                    // console.log('down')
                    mouseOnSkate.classList.add('down')
                    mouseOnSkate.classList.remove('up')
                }
            }

            if (e.code === 'Space' && !mouse.classList.length) {
                mouse.classList.add('jump')

                setTimeout(() => {
                    mouse.classList.remove('jump')
                }, 1000)
            }
        }, false)

        // start.addEventListener('click', () => {
        //     startGame()
        // }, false)
        start.addEventListener('click', () => startGame(), false)
    }

    function startGame() {

        start.classList.add('hidden')

        game.classList.add('active')
        heart.classList.add('active')

        cheese1.classList.add('active')
        cheese2.classList.add('active')

        eagle.classList.add('active')

        cactusUp.classList.add('active')
        cactusDown.classList.add('active')
        // document.querySelector('audio').play()

        gameState = 'run'

        gameStarted()
    }

    function gameStarted() {
        // console.log('mouseOnSkate:', mouseOnSkate)
        // console.log('mouse:', mouse)
        // console.log('mouseOnSkate.classList.contains(up):', mouseOnSkate.classList.contains('up'))
        // console.log('cactusDown.offsetLeft:', cactusDown.offsetLeft)
        if (mouse.classList.contains('jump')) {
            // console.log('mouse on air, don-t worry about cactuses')

            if (cheese1.offsetLeft < 50 && cheese1.offsetLeft > 0 && !cheese1.classList.contains('hidden')) {

                points.innerText = parseInt(points.innerText) + 1
                cheese1.classList.add('hidden')

                setTimeout(() => {
                    cheese1.classList.remove('hidden')
                }, 100)
            }

            if (cheese2.offsetLeft < 50 && cheese2.offsetLeft > 0 && !cheese2.classList.contains('hidden')) {

                points.innerText = parseInt(points.innerText) + 1
                cheese2.classList.add('hidden')

                setTimeout(() => {
                    cheese2.classList.remove('hidden')
                }, 100)
            }

        } else if (mouseOnSkate.classList.contains('up')) {
            // console.log('mouse on top line, don-t worry about bottom cactus')

            if ((cactusUp.offsetLeft < 100 && cactusUp.offsetLeft > -80) &&
                !mouse.classList.contains('pain')) {
                mouse.classList.add('pain')
                lifePoints.innerText = parseInt(lifePoints.innerText) - 1

                setTimeout(() => {
                    mouse.classList.remove('pain')
                }, 1000)
            }
        } else {
            if ((cactusDown.offsetLeft < 100 && cactusDown.offsetLeft > -80) &&
                !mouse.classList.contains('pain')) {
                mouse.classList.add('pain')
                lifePoints.innerText = parseInt(lifePoints.innerText) - 1

                setTimeout(() => {
                    mouse.classList.remove('pain')
                }, 1000)
            }
        }

        if (!parseInt(lifePoints.innerText)) {
            console.log('game over')
            // remove animation class 'active' for all other elements
            game.classList.remove('active')
            heart.classList.remove('active')
            cheese1.classList.remove('active')
            cheese2.classList.remove('active')
            eagle.classList.remove('active')
            cactusUp.classList.remove('active')
            cactusDown.classList.remove('active')
            gameOver.classList.remove('hidden')
        } else {
            requestAnimationFrame(gameStarted)
        }
    }
}

// TODO

// read top level yellow/orange/red mushroum)
// turbo speed skate
// fire on the tail of skate
// mouse sit
// mouse feel acceleration on his body