console.log('Mouse game')

window.onload = () => {
    console.log('window loaded')

    const mouse = document.getElementById('mouse')
    const points = document.getElementById('points')

    console.log('mouse:', mouse)

    window.addEventListener('keypress', (e) => {
        console.log('jump e:', e)
        console.log(mouse.classList.length) // .includes('jump')

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
        document.querySelector('#cactus').classList.add('active')
    }

    // start.addEventListener('click', () => {
    //     startGame()
    // }, false)

    start.addEventListener('click', () => startGame(), false)
}