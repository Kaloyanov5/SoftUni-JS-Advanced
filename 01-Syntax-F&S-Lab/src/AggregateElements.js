function aggregate(array){
    let sumA = 0;
    let sumB = 0;
    let concat = '';

    for (let i = 0; i < array.length; i++){
        const curNum = array[i];
        sumA += curNum;
        sumB += 1 / curNum;
        concat += curNum;
    }

    console.log(sumA);
    console.log(sumB);
    console.log(concat);
};

aggregate([1, 2, 3]);