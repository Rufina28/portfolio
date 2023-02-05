game.snake = {
    game: game,  
    cells: [],
    create() {   
        let startCells = [{row: 7, col: 7}, {row: 8, col: 7}];

        for (let startCell of startCells) {
            let cell = this.game.board.cells.find(cell => {
             return cell.row === startCell.row && cell.col === startCell.col;
            });
            this.cells.push(cell);
        }
    },   
        render() {
    this.cells.forEach(cell => {
        this.game.ctx.drawImage(this.game.sprites.body, cell.x, cell.y);   
    });
     }
   };
    