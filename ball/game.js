const KEYS = {
    LEFT: 37,
    RIGHT: 39
};

let game = {
    ctx: null,
    platform: null,
    ball: null,
    blocks: [],
    rows: 4,
    cols: 8,
    sprites: {
        background: null,
        ball: null,
        platform: null,
        block: null
    },
    init: function () {
        this.ctx = document.getElementById("mycanvas").getContext("2d");

        this.setEvents();
    },
    setEvents() {
        window.addEventListener("keydown", e => {
            console.log('e.keyCode:', e.keyCode);
            if (e.keyCode === KEYS.LEFT || e.keyCode === KEYS.RIGHT) {
                this.platform.start(e.keyCode);
            }
        });
        window.addEventListener("keyup", e => {
            this.platform.stop();
        });

    },
    preolad(callback) {
        let loaded = 0;
        let required = Object.keys(this.sprites).length;
        let onImageLoand = () => {
            ++loaded;
            if (loaded >= required) {
                callback();
            }
        };

        for (let key in this.sprites) {
            this.sprites[key] = new Image();
            this.sprites[key].src = "img/" + key + ".png";
            this.sprites[key].addEventListener("load", onImageLoand);
        }
    },
    create() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.blocks.push({
                    x: 64 * col + 65,
                    y: 24 * row + 35
                });
            }
        }
    },
    update() {
        this.platform.move();
    },
    run() {
        window.requestAnimationFrame(() => {
            this.update();
            this.render();
            this.run();
        });
    },
    render() {
        this.ctx.drawImage(this.sprites.background, 0, 0);
        this.ctx.drawImage(this.sprites.ball, 0, 0, this.ball.width, this.ball.height, this.ball.x, this.ball.y, this.ball.width, this.ball.height);
        this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
        this.renderBlocks();
    },
    renderBlocks() {
        for (let block of this.blocks) {
            this.ctx.drawImage(this.sprites.block, block.x, block.y);
        }
    },
    start: function () {
        this.init();
        this.preolad(() => {
            console.log('preload');
            this.create();
            this.run();
        });
    }
};

game.ball = {
    x: 320,
    y: 280,
    width: 20,
    height: 20
};

game.platform = {
    velosity: 6,
    dx: 0,
    x: 280,
    y: 300,
    start(direction) {
        console.log('direction:', direction);
        if (direction === KEYS.LEFT) {
            this.dx = -this.velosity;
        } else if (direction === KEYS.RIGHT) {
            this.dx = this.velosity;
        }
    },
    stop() {
        this.dx = 0;
    },
    move() {
        if (this.dx) {
            console.log('this.dx:', this.dx);
            console.log('this.x:', this.x);

            if (this.x < 0){
                this.x = 0;
                this.stop();
            } else if (this.x > (640 - 256)) { // ширина платформы 256px
                this.x = (640 - 256);
                this.stop();
            }

            this.x += this.dx;
            game.ball.x += this.dx;
        }
    }
};
window.addEventListener("load", () => {
    game.start();
});
