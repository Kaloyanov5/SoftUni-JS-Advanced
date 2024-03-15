function getDay(day){
    let dayAsNum;
    switch(day){
        case 'Monday': dayAsNum = 1; break;
        case 'Tuesday': dayAsNum = 2; break;
        case 'Wednesday': dayAsNum = 3; break;
        case 'Thursday': dayAsNum = 4; break;
        case 'Friday': dayAsNum = 5; break;
        case 'Saturday': dayAsNum = 6; break;
        case 'Sunday': dayAsNum = 7; break;
        default: dayAsNum = 'error'; break;
    }

    return dayAsNum;
}

console.log(getDay("cum"))