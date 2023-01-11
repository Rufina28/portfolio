const Gm=[
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

const gameField = document.getElementById('game-field');

const bannerGm ='screen.jpg';
const banner = document.createElement('img');
banner.setAttribute('src', 'img/screen.jpg');
banner.classList.add('banner');

const gameHeader = document.getElementById('game-header');
//gameHeader.after(banner);

function handleStartButtonClick() {
   gameField.innerHTML = '<div class="card"></div>';
}

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', handleStartButtonClick);
