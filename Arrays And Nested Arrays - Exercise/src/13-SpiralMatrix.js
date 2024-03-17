function getSpiral(rows, cols){
    let startNum = 1;
    let matrix = Array(cols).fill(0).map(() => Array(rows).fill(0));
    let [top, bottom, left, right] = [0, cols, 0, rows];

    while (top < bottom && left < right){
        for (let i = left; i < right; i++){
            matrix[top][i] = startNum++;
        }
        top++;
    
        for (let i = top; i < bottom; i++){
            matrix[i][right - 1] = startNum++;
        }
        right--;

        for (let i = right - 1; i >= left; i--){
            matrix[bottom - 1][i] = startNum++;
        }
        bottom--;

        for (let i = bottom - 1; i >= top; i--){
            matrix[i][left] = startNum++;
        }
        left++;
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

getSpiral(3, 3);