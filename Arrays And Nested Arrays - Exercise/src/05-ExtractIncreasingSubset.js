function extractSubset(array){
    let increseArray = [];
    let curBiggest = array[0];

    for (let i = 0; i < array.length; i++){
        if (array[i] >= curBiggest){
            increseArray.push(array[i]);
            curBiggest = array[i];
        }
    }

    return increseArray;
}

console.log(extractSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));