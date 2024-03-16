function sortNumbers(array){
    let result = [];
    array = array.sort((a, b) => a - b);

    while (array.length){
        result.push(array.shift());
        if (array.length) result.push(array.pop());
    }

    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))