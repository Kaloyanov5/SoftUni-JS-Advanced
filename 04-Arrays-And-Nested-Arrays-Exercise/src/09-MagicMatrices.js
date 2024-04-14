function magicMatrices(matrix){
    let sumOfFirst = matrix[0].reduce((partSum, a) => partSum + a, 0);

    for (let i = 1; i < matrix.length; i++){
        const curSumRow = matrix[i].reduce((partSum, a) => partSum + a, 0);
        if (curSumRow !== sumOfFirst) return false;
    }

    for (let j = 0; j < matrix[0].length; j++){
        let curSumCol = 0;
        for (let n = 0; n < matrix.length; n++){
            curSumCol += matrix[n][j];
        }

        if (curSumCol !== sumOfFirst) return false;
    }

    return true;
}

console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]))