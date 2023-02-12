const game = {
    canvas: null,
    ctx: null,
    board: null,
    width: 640,
    height: 360,
    sprites: {
        background: null,
        cell: null,
        body: null,
    },
    start() {
        console.log('start')
        this.init();
        this.preload(() => {
            this.run();
        });
        // this.preload(this.run);
    },
    init() {
        console.log('init')
        this.canvas = document.getElementById('mycanvas');
        this.ctx = this.canvas.getContext('2d');
    },
    preload(callback) {
        console.log('preload')
        let loaded = 0;
        let required = Object.keys(this.sprites).length;

        let onAssetLoad = () => {
            ++loaded;
            if (loaded >= required) {
                callback();
            }
        };
        for (let key in this.sprites) {
            this.sprites[key] = new Image();
            // this.sprites[key].src = "img/" + key + ".png";
            this.sprites[key].src = `./img/${key}.png`;
            this.sprites[key].addEventListener('load', onAssetLoad);
        }
    },
    run() {
        console.log('run')
        this.board.create();
        this.snake.create();

        window.requestAnimationFrame(() => {
            console.log('requestAnimationFrame')
            this.ctx.drawImage(this.sprites.background, 0, 0);
            this.board.render();
            this.snake.render();
        });
    }
};

game.start();
