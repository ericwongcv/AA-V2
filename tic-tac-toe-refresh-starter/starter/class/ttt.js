const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    // Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.addCommand('down', 'move cursor down', TTT.moveDown.bind(this));
    Screen.addCommand('up', 'move cursor up', TTT.moveUp.bind(this));
    Screen.addCommand('left', 'move cursor left', TTT.moveLeft.bind(this));
    Screen.addCommand('right', 'move cursor right', TTT.moveRight.bind(this));

    Screen.addCommand('return', `set mark ${this.playerTurn}`, TTT.setMark.bind(this));

    this.cursor.setBackgroundColor();

    Screen.render();
  }

  // Remove this
  // static testCommand() {
  //   console.log("TEST COMMAND");
  // }

  static setMark() {
    let grid = this.grid;
    let row = this.cursor.row;
    let col = this.cursor.col;

    Screen.setGrid(row, col, this.playerTurn);
    Screen.setTextColor(row, col, 'red');
    grid[row][col] = this.playerTurn;
    this.playerTurn === 'O' ? this.playerTurn = 'X' : this.playerTurn = 'O';

    let winner = TTT.checkWin(grid);
    if (winner) {
      return TTT.endGame(winner);
    };
  }

  static moveUp() {
    this.cursor.resetBackgroundColor();
    this.cursor.up();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static moveDown() {
    this.cursor.resetBackgroundColor();
    this.cursor.down();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static moveLeft() {
    this.cursor.resetBackgroundColor();
    this.cursor.left();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static moveRight() {
    this.cursor.resetBackgroundColor();
    this.cursor.right();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static checkWin(grid) {

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    
    let gameWin = false;

    grid.forEach( row => {      
      if (row.every( col => col === 'X')) {
        gameWin = 'X';
      } else if (row.every( col => col === 'O')) {
        gameWin = 'O';
      }
    })

    this.transpose(grid).forEach( (row, i) => {      
      if (row.every( col => col === 'X')) {
        gameWin = 'X';
      } else if (row.every( col => col === 'O')) {
        gameWin = 'O';
      }
    })
    
    let diag1 = [grid[0][0], grid[1][1], grid[2][2]];
    let diag2 = [grid[2][0], grid[1][1], grid[0][2]];

    if (diag1.every( el => el === 'X')) {
      gameWin = 'X';
    } else if (diag1.every( el => el === 'O')) {
      gameWin = 'O';
    } else if (diag2.every( el => el === 'X')) {
      gameWin = 'X';
    } else if (diag2.every( el => el === 'O')) {
      gameWin = 'O';
    }

    if (this.gameOver(grid) && !gameWin) {
      gameWin = 'T';  
    }

    return gameWin;
  }

  static gameOver(grid) {
    let gameEnd = true;

    grid.forEach( row => {      
      if (row.some( col => col === ' ')) {
        gameEnd = false;
      }
    })

    return gameEnd;
  }

  static transpose(grid) {
    return grid[0].map((_, colIndex) => grid.map(row => row[colIndex]));
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
