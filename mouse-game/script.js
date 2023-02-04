console.log('Mouse game')

window.onload = () => {
    console.log('window loaded')

    const mouse = document.getElementById('mouse')
    const mouseOnSkate = document.getElementById('mouse-on-skate')
    const points = document.getElementById('points')
    const lifePoints = document.getElementById('life-points')

    const cactusDown = document.querySelector('#cactus')

    console.log('mouse:', mouse)

    window.addEventListener('keypress', (e) => {
        console.log('Keyboard event:', e)
        console.log(mouse.classList.length) // .includes('jump')

        if (e.code === 'KeyW') {
            console.log('up')
            mouseOnSkate.classList.add('up')
            mouseOnSkate.classList.remove('down')
        } else if (e.code === 'KeyS') {
            console.log('down')
            mouseOnSkate.classList.add('down')
            mouseOnSkate.classList.remove('up')
        }

        if (e.code === 'Space' && !mouse.classList.length) {
            mouse.classList.add('jump')

            setTimeout(() => {
                mouse.classList.remove('jump')
            }, 1000)

            points.innerText = parseInt(points.innerText) + 1
        }

    }, false)

    const start = document.getElementById('start')

    function startGame() {
        start.classList.add('hidden')

        //-- Move to const like cactusDown
        document.querySelector('.game').classList.add('active')
        document.querySelector('.heart').classList.add('active')
        document.querySelector('#cheese').classList.add('active')
        document.querySelector('#eagle-1').classList.add('active')
        document.querySelector('#cactus-up').classList.add('active')
        //--

        cactusDown.classList.add('active')
        document.querySelector('audio').play()

        gameStarted()
    }

    function gameStarted() {
        // console.log('mouseOnSkate:', mouseOnSkate)
        // console.log('mouse:', mouse)
        // console.log('mouseOnSkate.classList.contains(up):', mouseOnSkate.classList.contains('up'))
        // console.log('cactusDown.offsetLeft:', cactusDown.offsetLeft)

        if (mouseOnSkate.classList.contains('up')) {
            console.log('mouse on top line, don-t worry about bottom cactus')
        } else {
            if (mouse.classList.contains('jump')) {
                console.log('mouse on air, don-t worry about bottom cactus')
            } else {
                if ((cactusDown.offsetLeft < 100 && cactusDown.offsetLeft > -80)
                    && !mouse.classList.contains('pain')) {
                    mouse.classList.add('pain')
                    lifePoints.innerText = parseInt(lifePoints.innerText) - 1

                    setTimeout(() => {
                        mouse.classList.remove('pain')
                    }, 1000)
                }
            }
        }

        if (!parseInt(lifePoints.innerText)) {
            console.log('game over')
            document.querySelector('.game').classList.remove('active')
            cactusDown.classList.remove('active')
            // remove animation class 'active' for all other elements
        } else {
            requestAnimationFrame(gameStarted)
        }

    }

    // start.addEventListener('click', () => {
    //     startGame()
    // }, false)

    start.addEventListener('click', () => startGame(), false)
}

// TODO

// read top level yellow/orange/red mushroum)
// turbo speed skate
// fire on the tail of skate
// mouse sit
// mouse feel acceleration on his body