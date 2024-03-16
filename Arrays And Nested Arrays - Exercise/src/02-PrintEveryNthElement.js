function printEveryNth(array, n){
    let nthArray = [];
    for (let i = 0; i < array.length; i += n){
        nthArray.push(array[i]);
    }

    return nthArray;
}

console.log(printEveryNth(['5', 
'20', 
'31', 
'4', 
'20'], 2))