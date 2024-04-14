function getBiggerHalf(array){
    return array.sort((a, b) => a - b).splice(Math.floor(array.length / 2), Math.ceil(array.length / 2));
}

console.log(getBiggerHalf([4, 7, 2, 5]));