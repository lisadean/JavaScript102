function printNumbers(startNumber, endNumber) {
    for (var count=startNumber; count<=endNumber; count++) {
        console.log(count);
    }
}

function printNumbers2(startNumber, endNumber) {
    var count = startNumber;
    while (count <= endNumber) {
        console.log(count);
        count++;
    }
}

function printSquare(size) {
    var square = '';

    for (var i=0; i<size; i++) {

        var line = ''
        for (var j=0; j<size; j++) {
            line += '*';
        }

        square += line + '\n';
    }

    console.log(square);
}

function printBox(width, height) {
    var box = '';
    
    for (var r=0; r<height; r++) {

        var line = '';

        for (var c=0; c<width; c++) {
            if ( r == 0 || r == height - 1 ) {
                line += '*';
            } else if ( c == 0 || c == width - 1) {
                line += '*';
            } else {
                line += ' ';
            }
        }

        box += line + '\n';
    }

    console.log(box);
}

function printBanner(text) {
    result = '';

    var width = text.length + 4;

    var topBottom = ''
    for (var c=0; c<width; c++) {
        topBottom += '*';
    }

    var middle = '* ' + text + ' *';

    result = topBottom + '\n' + middle + '\n' + topBottom;

    console.log(result);
}

function factors(num) {
    var factorList = [];

    for (var i=0; i<=num; i++) {
        if ( num % i == 0 ) {
            factorList.push(i);
        }
    }

    console.log(factorList);
}

function cipher(text, offset=13) {
    result = '';

    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (var i=0; i<text.length; i++) {

        if (text[i] == ' ') {
            result += ' ';
        } else {

            var index = alphabet.indexOf(text[i].toLowerCase());
            var newIndex = index + offset;
            if (newIndex > 25) {
                newIndex = newIndex - 26;
            }

            if (text[i] == text[i].toUpperCase()) {
                result += alphabet[newIndex].toUpperCase();
            } else {
                result += alphabet[newIndex];
            }
        }
    }

    console.log(result);
}

function rockPaperScissors(player1Throw, player2Throw) {
    var result = '';

    if (player1Throw == 'rock') {
        if (player2Throw == 'rock') {
            result = 'draw';
        } else if (player2Throw == 'paper') {
            result = 'player 2';
        } else {  // player2Throw == 'scissors'
            result = 'player 1';
        }
    } else if (player1Throw == 'scissors') {
        if (player2Throw == 'rock') {
            result = 'player 2';
        } else if (player2Throw == 'paper') {
            result = 'player 1';
        } else {  // player2Throw == 'scissors'
            result = 'draw';
        }
    } else {  // player1Throw == 'paper'
        if (player2Throw == 'rock') {
            result = 'player 1';
        } else if (player2Throw == 'paper') {
            result = 'draw';
        } else {  // player2Throw == 'scissors'
            result = 'player 2';
        }
    }

    console.log(result);
}

function ticTacToe(board) {
    var result = null;

    // check rows
    for (var r=0; r<2; r++) {
        var row = board[r];

        if (row[0] == row[1] && row[1] == row[2]) {
            result = row[0];
        }
    }

    //check columns
    for (var c=0; c<2; c++) {
        if (board[0][c] == board[1][c] && board[1][c] == board[2][c]) {
            result = board[r][c];
        }
    }

    console.log(result);
}


console.log('printNumbers');
printNumbers(1, 10);

console.log('printNumbers2');
printNumbers2(1, 10);

console.log('printSquare');
printSquare(5);

console.log('printBox');
printBox(6, 4);

console.log('printBanner');
printBanner('Welcome to DigitalCrafts');

console.log('factors');
factors(66);

console.log('cipher');
cipher('Genius without education is like silver in the mine');

console.log('cipher2');
cipher('Genius without education is like silver in the mine', 14);

console.log('rockPaperScissors');
rockPaperScissors('rock', 'scissors');
rockPaperScissors('rock', 'paper');
rockPaperScissors('paper', 'paper');

console.log('ticTacToe');
ticTacToe([
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null]
    ]);
ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'X', null],
    [null, 'X', null]
    ]);
ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'X']
    ]);