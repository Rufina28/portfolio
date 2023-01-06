console.log('Wordy')

// camelCase - frontend
// tooltip_place - backend
let tooltipNoPlace = `
<div class="tooltip">Не угадали положение буквы<br> &#128520;</div>`

let tooltipPlace = `
<div class="tooltip">Вы угадали положение буквы<br>&#128526;</div>`

let word = 'налог'.toUpperCase()

let wordNumber = 1
let letterNumber = 0

window.onload = function () {
    const desk = document.getElementById('desk')
    const keyboard = document.getElementById('keyboard')

    console.log('desk:', desk)

    keyboard.addEventListener('click', (e) => {
        let key = e.target.innerText.toUpperCase()
        console.log('keyboard:', key)

        if (wordNumber > 6) {
            console.log('Aready done, return')

            return
        }

        let row = document.getElementById(`word${wordNumber}`)

        let cells = row.querySelectorAll('.cell')

        if (cells[letterNumber]) {
            cells[letterNumber].innerText = key

            let hasLetter = word.includes(key)

            console.log('hasLetter:', hasLetter)

            let placeLetter = word[letterNumber] === key

            console.log('placeLetter:', placeLetter)

            if (hasLetter && placeLetter) {
                cells[letterNumber].classList.add('place')
            } else if (hasLetter) {
                cells[letterNumber].classList.add('letter')
            } else {
                cells[letterNumber].classList.add('wrong')}

            if (letterNumber === 4) {
                letterNumber = 0
                wordNumber += 1
                if (wordNumber > 6) {
                    console.log('Done')
                }
            } else {
                // letterNumber++
                letterNumber += 1
                // letterNumber = letterNumber + 1
            }
        }
    }, false)

}


