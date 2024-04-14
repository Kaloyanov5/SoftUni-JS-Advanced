function getOrbit(arr){
    let [width, height, x, y] = arr;

    let matrix = Array(width).fill(0).map(() => Array(height).fill(0));

    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            matrix[i][j] = Math.max(Math.abs(x - i), Math.abs(y - j)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

getOrbit([4, 4, 0, 0]);