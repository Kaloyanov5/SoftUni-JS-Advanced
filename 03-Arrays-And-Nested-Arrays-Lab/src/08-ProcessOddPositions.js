function processOddPositions(array){
    let oddArray = [];
    for (let i = 1; i < array.length; i += 2){
        oddArray.push(array[i]);
    }

    return oddArray.map((element) => element * 2).reverse();
}

console.log(processOddPositions([3, 0, 10, 4, 7, 3]))