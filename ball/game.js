const KEYS = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32
};

let game = {
    running: true,
    ctx: null,
    platform: null,
    ball: null,
    blocks: [],
    rows: 4,
    width: 640,
    height: 360,
    cols: 8,
    sprites: {
        background: null,
        ball: null,
        platform: null,
        block: null
    },
    init: function () {
        this.ctx = document.getElementById('mycanvas').getContext('2d');
        this.setEvents();
    },
    setEvents() {
        window.addEventListener('keydown', e => {
            // change to e.code === 'KeyW'
            if (e.keyCode === KEYS.SPACE) {
                this.platform.fire();
            } else if (e.keyCode === KEYS.LEFT || e.keyCode === KEYS.RIGHT) {
                this.platform.start(e.keyCode);
            }
        });
        window.addEventListener('keyup', e => {
            this.platform.stop();
        });
        window.addEventListener('click', e => {
            console.log('e.target:', e.target);
            console.log('e.target.id:', e.target.id);
            if (e.target.id === 'mycanvas' && this.platform.ball) {
                console.log('start game');
                this.platform.fire();
            }

            if (e.target.id === 'left') {
                this.platform.start(37);
                setTimeout(() => {
                    this.platform.stop();
                }, 100);
            } else if (e.target.id === 'right') {
                this.platform.start(39);
                setTimeout(() => {
                    this.platform.stop();
                }, 100);
            }
        });
    },
    preolad(callback) {
        let loaded = 0;
        let required = Object.keys(this.sprites).length;
        let onImageLoad = () => {
            ++loaded;
            if (loaded >= required) {
                callback();
            }
        };

        for (let key in this.sprites) {
            this.sprites[key] = new Image();
            this.sprites[key].src = "img/" + key + ".png";
            this.sprites[key].addEventListener('load', onImageLoad);
        }
    },
    create() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.blocks.push({
                    active: true,
                    width: 60,
                    height: 20,
                    x: 64 * col + 65,
                    y: 24 * row + 35,
                });
            }
        }
    },
    update() {
        this.collideBlocks();
        this.collidePlatform();
        this.ball.collideWorldBounds();
        this.platform.collideWorldBounds();
        this.platform.move();
        this.ball.move();
    },

    collideBlocks() {
        for (let block of this.blocks) {
            if (block.active && this.ball.collide(block)) {
                this.ball.bumpBlock(block);
            }
        }
    },
    collidePlatform() {
        if (this.ball.collide(this.platform)) {
            this.ball.bumpPlatform(this.platform);
        }
    },
    run() {
        if (this.running) {
        window.requestAnimationFrame(() => {
            this.update();
            this.render();
            this.run();
        });
    }
    },
    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.sprites.background, 0, 0);
        this.ctx.drawImage(this.sprites.ball, 0, 0, this.ball.width, this.ball.height, this.ball.x, this.ball.y, this.ball.width, this.ball.height);
        this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
        this.renderBlocks();
    },
    renderBlocks() {
        let activeBlocksAmount = 0;

        this.blocks.forEach((block) => {
            if (block.active) {
                activeBlocksAmount += 1;
                // activeBlocksAmount++;
            }
        });

        for (let block of this.blocks) {
            if (block.active) {
                this.ctx.drawImage(this.sprites.block, block.x, block.y);
            }
        }

        if (!activeBlocksAmount) {
            // this you can stop the game
            console.log('No blocks:', this.blocks);
        }
    },
    start: function () {
        this.init();
        this.preolad(() => {
            this.create();
            this.run();
        });
    },
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

game.ball = {
    dx: 0,
    dy: 0,
    velosity: 3,
    x: 320,
    y: 280,
    width: 20,
    height: 20,
    start() {
        this.dy = -this.velosity;
        this.dx = game.random(-this.velosity, this.velosity);
    },
    move() {
        if (this.dy) {
            this.y += this.dy;
        }
        if (this.dx) {
            this.x += this.dx;
        }
    },
    collide(element) {
        let x = this.x + this.dx;
        let y = this.y + this.dy;

        if (x + this.width > element.x &&
            x < element.x + element.width &&
            y + this.height > element.y &&
            y < element.y + element.height) {
            return true;
        }
        return false;
    },
    collideWorldBounds() {
        let x = this.x + this.dx;
        let y = this.y + this.dy;

        let ballLeft = x;
        let ballRight = ballLeft + this.width;
        let ballTop = y;
        let ballBottom = ballTop + this.height;

        let worldLeft = 0;
        let worldRight = game.width;
        let worldTop = 0;
        let worldBottom = game.height;

        if (ballLeft < worldLeft) {
            this.x = 0;
            this.dx = this.velosity;
        } else if (ballRight > worldRight) {
            this.x = worldRight - this.width;
            this.dx = -this.velosity;
        } else if (ballTop < worldTop) {
            this.y = 0;
            this.dy = this.velosity;
        } else if (ballBottom > worldBottom) {
            // this you can stop the game
            console.log('Lost ball');
            // game stop
            game.running = false;
        }
    },
    bumpBlock(block) {
        this.dy *= -1;
        block.active = false;
    },
    bumpPlatform(platform) {
        if (platform.dx) {
            this.x += platform.dx;
        }

        if (this.dy > 0) {
            this.dy = -this.velosity;
            let touchX = this.x + this.width / 2;
            this.dx = this.velosity * platform.getTouchOffset(touchX);
        }
    }
};

game.platform = {
    velosity: 6,
    dx: 0,
    x: 280,
    y: 300,
    width: 100,
    height: 14,
    ball: game.ball,
    fire() {
        if (this.ball) {
            this.ball.start();
            this.ball = null;
        }
    },
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
            this.x += this.dx;
            if (this.ball) {
                this.ball.x += this.dx;
            }
        }
    },
    getTouchOffset(x) {
        let diff = (this.x + this.width) - x;
        let offset = this.width - diff;
        let result = 2 * offset / this.width;
        return result - 1;
    },
    collideWorldBounds() {
        let x = this.x + this.dx;
        let platformLeft = x;
        let platformRight = platformLeft + this.width;
        let worldLeft = 0;
        let worldRight = game.width;

        if (platformLeft < worldLeft || platformRight > worldRight) {
            this.dx = 0;
        }
    }
};

window.addEventListener('load', () => {
    console.log('window.innerHeight', window.innerHeight);
    document.getElementById('debug').innerText = window.innerHeight;
    game.start();
});
