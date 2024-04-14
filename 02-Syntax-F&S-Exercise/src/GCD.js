function getGcd(num1, num2){
    const biggestNum = num1 > num2 ? num1 : num2;
    let maxDiv = 1;
    for (let i = maxDiv; i <= biggestNum; i++){
        if (num1 % i === 0 && num2 % i === 0){
            maxDiv = i;
        }
    }

    console.log(maxDiv);
}

getGcd(15, 5);