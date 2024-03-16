function diagonalAttack(matrix){
    matrix = matrix.map(el => el.split(" ").map(Number));

    let leftDiag = 0;
    let rightDiag = 0;

    for (let i = 0; i < matrix.length; i++){
        leftDiag += matrix[i][i];
        matrix[i][i] = String(matrix[i][i]);
        rightDiag += Number(matrix[i][matrix.length - 1 - i]);
        matrix[i][matrix.length - 1 - i] = String(matrix[i][matrix.length - 1 - i]);
    }

    if (leftDiag === rightDiag){
        for (let i = 0; i < matrix.length; i++){
            for (let j = 0; j < matrix[i].length; j++){
                if (typeof(matrix[i][j]) != 'string') matrix[i][j] = leftDiag;
            }
        }

        console.log(matrix.map(row => row.join(" ")).join("\n"));
    } else{
        console.log(matrix.map(row => row.join(" ")).join("\n"));
    }
}

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0'])