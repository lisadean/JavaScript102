function tic(input) {
    let answer = '';
    let hasWinningRow = '';
    let hasWinningColumn = checkAllColumns(input);
    //console.log(hasWinningColumn);
    if (!hasWinningColumn) {
        hasWinningRow = checkAllRows(input);
    }
    //console.log(hasWinningRow);
   
    if (hasWinningColumn) {
        answer = hasWinningColumn;
    } else if (hasWinningRow) {
        answer = hasWinningRow;
    }
    //console.log(answer);
    return answer;
  }
  function checkAllColumns(inputArray) {
    let hasWinningColumn = '';
    for (var i = 0; i < inputArray[0].length && !hasWinningColumn; i++) {
       
        currentCol = [];
        for (var j = 0; j < inputArray.length; j++) {
            currentCol.push(inputArray[j][i]);
        }
        //console.log(currentCol);
        if (checkRow(currentCol)) {
            //console.log(“got it!“);
            hasWinningColumn = currentCol[0];
            break;
        }
    }
    return hasWinningColumn;
  }
  function checkAllRows (input) {
    answer = '';
    for (var i = 0; i < input.length; i++) {
        if (checkRow(input[i])) {
            answer = input[i][0];
            break;
        }
    }
    return answer;
  }
  function checkRow(row) {
    let initial = row[0];
    let isWinningRow = true;
   
    for (var i = 0; i < row.length; i++) {
        if (row[i] === null || row[i] !== initial) {
            isWinningRow = false;
            break;
        }
    }
    return isWinningRow;
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
  firstAnswer = tic(input);
  console.log(firstAnswer);
  console.log(input2);
  secondAnswer = tic(input2);
  console.log(secondAnswer);
  console.log(input3);
  thirdAnswer = tic(input3);
  console.log(thirdAnswer);