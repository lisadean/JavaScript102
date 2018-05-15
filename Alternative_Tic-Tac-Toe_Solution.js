function tic(input) {
    let answer = "";

    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length - 1; j++) {
            if (input[i][j] === null) {
                break;
            } else if (checkRow(input[i])) {
                //console.log("all same on row");
                answer += input[i][j];
                break;
            }
        }
    }

    if (answer.length > 0) {
        console.log(answer);
    } else {
        console.log("no luck, bruh");
    }

}

function checkRow(input) {
    let isUniform = true;
    let initial = input[0];
    //console.log(input);
    for (var i = 1; i < input.length; i++) {
        if (initial !== input[i]) {
            isUniform = false;
            break;
        }
    }
    return isUniform;
}

input = [
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null]
];

input2 = [
    ['O', 'X', 'O'],
    ['O', 'X', null],
    [null, 'X', null]
];

input3 = [
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'X']
];

console.log(input);
console.log('O should win');
tic(input);
console.log(input2);
console.log('X should win');
tic(input2);
console.log(input3);
console.log('No one should win');
tic(input3);