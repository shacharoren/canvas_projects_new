


var board = [];
function Create2DArray() {
    for (var i = 0; i < 10; i++) {
        board[i] = [];
    }
    fillBoard();
}

function fillBoard() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            board[i][j] = chooseColor(i, j);
            paintColor(i, j);
        }
    }

}

function chooseColor(i, j) {
    let color = randomColor();
    let neighbors = myNeighbors(i, j);
    while (neighbors.includes(color)) {
        color = randomColor();
    }
    return color;
}


function paintColor(i, j) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = board[i][j];
    ctx.fillRect(i * 60, j * 60, 60, 60);
}

function myNeighbors(i, j) {
    let neighborsArray = [];
    if ((i - 1) >= 0) {
        neighborsArray.push(board[i - 1][j]);
    }
    if ((i + 1) < 10) {
        neighborsArray.push(board[i + 1][j]);
    }
    if ((j - 1) >= 0) {
        neighborsArray.push(board[i][j - 1]);
    }
    if ((j + 1) < 10) {
        neighborsArray.push(board[i][j + 1]);
    }
    return neighborsArray;
}

function randomColor() {
    let colorOptions = ["RED", "BLUE", "GREEN"];
    let index = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[index];
}

//Create2DArray();

