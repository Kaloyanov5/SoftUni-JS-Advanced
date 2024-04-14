function getTwoSmallest(array){
    // WITHOUT SORTING:

    /* let result = '';
    let curSmallest1 = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] < curSmallest1){
            curSmallest1 = array[i];
        }
    }

    array.splice(array.indexOf(curSmallest1), 1);

    let curSmallest2 = array[0];
    for (let j = 0; j < array.length; j++){
        if (array[j] < curSmallest2){
            curSmallest2 = array[j];
        }
    }
    
    result += `${curSmallest1} ${curSmallest2}`;
    console.log(result); */

    // WITH SORTING:

    array.sort((a, b) => a - b)
    console.log(array[0], array[1]);
}

getTwoSmallest([3, 0, 10, 4, 7, 3]);