function getDiagonalSums(matrix){
    function getDiagonals(array){
        let diagonal = 0
        for (let i = 0; i < array.length; i++){
            if (diagonal === 0){
                diagonal += array[0][0];
                continue;
            }
            diagonal += array[i][i];
        }
        return diagonal;
    }

    const result = `${getDiagonals(matrix)} ${getDiagonals(matrix.reverse())}`;
    console.log(result);
}

getDiagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);