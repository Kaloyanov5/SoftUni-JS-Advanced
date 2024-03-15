function biggestElement(array){
    let currentBiggest = array[0][0];
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            currentBiggest = array[i][j] >= currentBiggest ? array[i][j] : currentBiggest;
        }
    }

    return currentBiggest;
}

console.log(biggestElement([[3, 5, 0, 33]]))