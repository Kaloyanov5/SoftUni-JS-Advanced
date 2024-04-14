function getSame(number){
    const numberList = String(number);
    let sumOfAll = 0;
    let booleanSame = true;
    const firstNum = numberList[0];

    for (let i in numberList){
        if (numberList[i] != firstNum){
            booleanSame = false;
            break ;
        }
    }

    for (let i in numberList){
        sumOfAll += Number(numberList[i]);
    }

    console.log(booleanSame);
    console.log(sumOfAll);
}

getSame(1234);
