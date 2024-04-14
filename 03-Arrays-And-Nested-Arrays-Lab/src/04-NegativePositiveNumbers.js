function getNumbers(array){
    let newArray = [];
    for (let num of array){
        if (num < 0){
            newArray.unshift(num);
        } else{
            newArray.push(num);
        }
    }

    console.log(newArray.join("\n"));
}

getNumbers([3, -2, 0, -1]);