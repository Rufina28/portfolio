console.log('Wordy')

// camelCase - frontend
// tooltip_place - backend
const tooltipNoPlace = `
<div class="tooltip">Не угадали положение буквы<br> &#128520;</div>`

const tooltipPlace = `
<div class="tooltip">Вы угадали положение буквы<br>&#128526;</div>`
const tooltipWrong = ``

const dictionary = [
    'налог', 'ягуар', 'ангар', 'гараж', 'алмаз',
    'пакет', 'учёба', 'хомяк', 'щенок', 'висок',
]

const randex = Math.floor(Math.random() * dictionary.length - 1) // 0 - max

let word = dictionary[randex].toUpperCase()

let wordNumber = 1
let letterNumber = 0
let win = false

window.onload = function () {
    const page = document.querySelector('.page')
    const desk = document.getElementById('desk')
    const keyboard = document.getElementById('keyboard')

    console.log('desk:', desk)

    keyboard.addEventListener('click', (e) => {
        let key = e.target.innerText.toUpperCase()
        console.log('keyboard:', key)
        console.log('letterNumber:', letterNumber)
        // add key to cuurent cell

        let controls = e.target.id

        if (wordNumber > 6 || key.length > 1) {
            console.log('Aready done, return')

            return
        }

        if (controls) {
            actions[controls]()

            return
        }

        let row = document.getElementById(`word${wordNumber}`)
        let cells = row.querySelectorAll('.cell')

        if (cells[letterNumber]) {
            cells[letterNumber].innerText = key
            if (letterNumber < 5) {
                letterNumber += 1
            }
            console.log('letterNumber:', letterNumber)
        }
    }, false)

    page.addEventListener('click', (e) => {
        // clean tooltip
        const tooltip = document.querySelector('.tooltip')
        tooltip && tooltip.remove()
    }, false)

    desk.addEventListener('click', (e) => {
        const cell = e.target
        console.log('cell:', cell)

        setTimeout(() => {
            if (cell.innerText) {
                console.log('show tooltip:', cell)
                if (cell.classList.contains('letter')) {
                    console.log('tooltipNoPlace')
                    cell.innerHTML += tooltipNoPlace
                    // tooltipNoPlace
                } else if (cell.classList.contains('place')) {
                    console.log('tooltipPlace')
                    cell.innerHTML += tooltipPlace
                    // tooltipPlace
                } else if (cell.classList.contains('wrong')) {
                    console.log('tooltipWrong')
                    // tooltipWrong
                }
            }
        }, 80)
    }, false)
}

const actions = {
    submit: () => {
        console.log('submit')
        if (letterNumber === 5) {
            let input
            const row = document.getElementById(`word${wordNumber}`)

            input = row.innerText.replaceAll('\n', '').toUpperCase()
            console.log('submit word:', input)
            console.log('submit word.length:', input.length)

            if (input === word) {
                win = true
                console.log('Win:', win)
            } else {
                letterNumber = 0
                console.log('letterNumber:', letterNumber)
                wordNumber += 1
                console.log('wordNumber:', wordNumber)
            }

            actions.paintWord(input)

            if (wordNumber > 6) {
                console.log('Done')
            }
        }
    },
    backspace: () => {
        console.log('backspace letterNumber:', letterNumber)

        if (letterNumber > 0 && !win) {
            let row = document.getElementById(`word${wordNumber}`)
            let cells = row.querySelectorAll('.cell')
            let targetCell = cells[letterNumber - 1]

            if (targetCell) {
                targetCell.innerText = ''
                targetCell.classList.remove('wrong')
                targetCell.classList.remove('letter')
                targetCell.classList.remove('place')

                letterNumber -= 1
            }
        }
        console.log('backspace letterNumber:', letterNumber)
    },
    paintWord: (input) => {
        console.log('paintWord:', input)
        const doneLetters = []

        for (let i = 0; i < 5; i++) {
            let key = input[i]
            let hasLetter = word.includes(key)
            let placeLetter = word[i] === key
            let row = document.getElementById(`word${win ? wordNumber : wordNumber - 1}`)
            let cells = row.querySelectorAll('.cell')

            console.log('key:', key)
            console.log('hasLetter:', hasLetter)
            console.log('placeLetter:', placeLetter)

            if (hasLetter && placeLetter) {
                console.log(`${key} right place`)

                if (doneLetters.includes(key)) {
                    const keyIndex = doneLetters.indexOf(key)
                    console.log('keyIndex:', keyIndex)
                }
                if (!doneLetters.includes(key)) {
                    cells[i].classList.add('place')
                    paintKeyboard(key, 'place')

                    // запомнить букву которую уже обработали
                    doneLetters.push(key)
                }
            } else if (hasLetter) {
                if (!doneLetters.includes(key)) {
                    cells[i].classList.add('letter')
                    // запомнить букву которую уже обработали
                    doneLetters.push(key)
                    paintKeyboard(key, 'letter')
                }
            } else {
                cells[i].classList.add('wrong')
                paintKeyboard(key, 'wrong')
            }
        }

        console.log('paintWord done')
    }
}

function paintKeyboard(key, state) {
    console.log('paintKeyboard key:', key)
    console.log(' * state:', state)

    const keys = document.querySelectorAll('.cage')

    keys.forEach((k) => {
        if (key.toUpperCase() === k.innerText.toUpperCase()) {
            k.classList.add(state)
        }
    })
}
