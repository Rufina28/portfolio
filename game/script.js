const Gm = [
    'persona1.png',
    'persona2.png',
    'persona3.png',
    'persona4.png',
    'persona5.png',
    'persona6.png',
    'persona7.png',
    'persona8.png',
    'persona9.png',
    'persona10.png',
    'persona11.png',
    'persona12.png',
];

const settings = {
    with: 4,
    height: 5
}

const gameField = document.getElementById('game-field');

const bannerGm = 'screen.jpg';
const banner = document.createElement('img');
banner.setAttribute('src', 'img/screen.jpg');
banner.classList.add('banner');

const gameHeader = document.getElementById('game-header');
//gameHeader.after(banner);

function handleStartButtonClick() {
    gameField.innerHTML = '';
}

const cardsCount = settings.with * settings.height;
const usedGm = [];
const cardGms = [];

for (let i = 0; i < cardsCount; i++) {
    let selectedGm;
    if (i < cardsCount / 2) {
        const cardGmIndex = Math.floor(Math.random() * cardGms.length);

        selectedGm = cardGms[cardGmIndex];
        usedGm.push(selectedGm);
    } else {
        selectedGm = usedGm.pop();
    }

    cardGms.push(selectedGm);

}
cardGms.sort(() => Math.random() - 0.5);

let iterator = 0;
for (let i = 0; i < settings.height; i++) {
    const row = document.createElement('div');
    row.classList.add('card');


    for (let i = 0; i < settings.with; i++) {
        const card = document.createElement('div');
        card.classList.add('row');

        card.dataset.gm = cardGms[iterator];

        row.appendChild(card);
        iterator++;
    }
    gameField.appendChild(row)
}

const startButton = document.getElementById('start-button')
startButton.addEventListener('click', handleStartButtonClick);
