function lastKNumbers(n, k){
    let numArray = [1];
    for (let i = 1; i < n; i++){
        let sum = 0;
        const start = Math.max(0, i - k);
        for (let j = start; j < i; j++){
            sum += numArray[j];
        }
        numArray.push(sum);
    }

    return numArray;
}

console.log(lastKNumbers(6, 3));