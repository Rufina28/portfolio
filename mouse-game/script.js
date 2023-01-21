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
    })
}
