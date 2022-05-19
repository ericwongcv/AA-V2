const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    // Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);
    Screen.addCommand('left', 'move cursor left', ConnectFour.moveCursorLeft.bind(this));
    Screen.addCommand('right', 'move cursor right', ConnectFour.moveCursorRight.bind(this));
    Screen.addCommand('return', 'place you piece', ConnectFour.setPiece.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  // Remove this
  // static testCommand() {
  //   console.log("TEST COMMAND");
  // }

  static setPiece() {

    let setRow = null;
    let setCol = this.cursor.col;

    this.grid.forEach( (row, i) => {
      if (row[setCol] === ' ') {
        setRow = i;
      }
    })

    if (setRow === null) {return};

    this.grid[setRow][setCol] = this.playerTurn;
    Screen.setGrid(setRow, setCol, this.playerTurn);
    Screen.setTextColor(setRow,setCol, 'red');
    Screen.render();

    let gameWin = ConnectFour.checkWin(this.grid);
    if (gameWin) { return ConnectFour.endGame(gameWin) };

    this.playerTurn === 'O' ? this.playerTurn = 'X' : this.playerTurn = 'O';
  }

  static moveCursorLeft() {
    this.cursor.resetBackgroundColor();
    this.cursor.left();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static moveCursorRight() {
    this.cursor.resetBackgroundColor();
    this.cursor.right();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static checkWin(grid) {
    let gameWin = false;

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    // Scan rows for win
    let horizontal = this.horizontalScan(grid);
    if (horizontal) { return gameWin = horizontal };

    // Scan cols for win
    let transposeGrid = this.transpose(grid);
    let vertical = this.horizontalScan(transposeGrid);
    if (vertical) { return gameWin = vertical };

    // Scan diag down for win
    let diagDown = this.diagDownScan(grid);
    if (diagDown) { return gameWin = diagDown };

    // Scan diag up for win
    let diagUp = this.diagUpScan(grid);
    if (diagUp) { return gameWin = diagUp };

    // Check for Tie
    if (!gameWin) {
      gameWin = this.checkTie(grid);
    }

    return gameWin;
  }

  static diagDownScan(grid) {
    let winner = null;

    for (let j = 0; j < 3; j++) {
      let diagArr = [];

      for (let i = 0; i < grid.length - j; i++) {
        diagArr.push(grid[i + j][i]);
        
        if (diagArr.length >= 4 && this.horizontalScan([diagArr])) {
          winner = this.horizontalScan([diagArr]);
        }
      }
    }

    for (let j = 1; j < 4; j++) {
      let diagArr = [];

      for (let i = 0; i <= grid.length - j; i++) {
        diagArr.push(grid[i][i + j]);
        
        if (diagArr.length >= 4 && this.horizontalScan([diagArr])) {
          winner = this.horizontalScan([diagArr]);
        }
      }
    }

    return winner;
  }

  static diagUpScan(grid) {
    let winner = null;

    for (let i = 0; i < 3 ; i++) {
      let diagArr = [];

      let rowIncrement = 0;
      for (let j = grid[0].length - 1; j > i; j--) {
        diagArr.push(grid[i + rowIncrement][j]);

        rowIncrement++;
        
        if (diagArr.length >= 4 && this.horizontalScan([diagArr])) {
          winner = this.horizontalScan([diagArr]);
        }
      }
    }

    for (let j = 5; j > 2 ; j--) {
      let diagArr = [];

      let colDecrement = 0;
      for (let i = 0; i < grid.length; i++) {
        diagArr.push(grid[i][j - colDecrement]);

        colDecrement++;
        
        if (diagArr.length >= 4 && this.horizontalScan([diagArr])) {
          winner = this.horizontalScan([diagArr]);
        }
      }
    }

    return winner;
  }

  static checkTie(grid) {
    if (grid.every( row => row.every( el => el !== ' '))) {
      return 'T';
    } else {
      return false;
    }
  }

  static horizontalScan(grid) {
    let gameWin = false;

    grid.forEach( row => {
      for (let i = 0; i < row.length - 3; i++) {
        if(row.slice(i, i+4).every( el => el === 'X')) {
          gameWin = 'X';
        } else if (row.slice(i, i+4).every( el => el === 'O')) {
          gameWin = 'O';
        }
      }
    })

    return gameWin;
  }

  static transpose(grid) {
    let transposeGrid = [];
    // run through cols
    for (let j = 0; j < grid[0].length; j++) {
      let row = [];
      // run through rows
      for(let i = 0; i < grid.length; i++) {
        row.push(grid[i][j])
      }

      transposeGrid.push(row);
    }
    return transposeGrid;
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

module.exports = ConnectFour;
