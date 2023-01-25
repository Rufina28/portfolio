console.log('Mouse game')

window.onload = () => {
    console.log('window loaded')

    const mouse = document.getElementById('mouse')

    console.log('mouse:', mouse)

    window.addEventListener('keypress', () => {
        console.log('jupm')

        mouse.classList.add('jump')

        setTimeout(() => {
            mouse.classList.remove('jump')
        }, 800)
    }, false)

    const start = document.getElementById('start')

    function startGame() {
        document.querySelector('.game').classList.add('active')
    }

    start.addEventListener('click', () => {
        console.log('start')

        startGame()
    }, false)
}
