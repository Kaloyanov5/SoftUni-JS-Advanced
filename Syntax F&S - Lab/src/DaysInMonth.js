function getDays(month, year){
    const monthDay = new Date(year, month, 0).getDate();
    return monthDay;
}

console.log(getDays(2, 2021))