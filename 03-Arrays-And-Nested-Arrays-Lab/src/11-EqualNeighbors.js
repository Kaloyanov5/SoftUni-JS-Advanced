function getEqual(matrix){
    let neighbors = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j < matrix[i].length - 1 && matrix[i][j] === matrix[i][j + 1]) {
                neighbors++;
            }
            if (i < matrix.length - 1 && matrix[i][j] === matrix[i + 1][j]) {
                neighbors++;
            }
        }
    }

    return neighbors;
};

console.log(getEqual([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));