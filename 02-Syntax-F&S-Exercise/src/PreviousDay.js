function getay(year, month, day) {
    const tDay = new Date(year, month - 1, day);
    tDay.setDate(tDay.getDate() - 1);
    
    if (tDay.getMonth() + 1 !== month) {
        const prevMonth = tDay.getMonth() + 1;
        const prevYear = prevMonth === 12 ? tDay.getFullYear() - 1 : tDay.getFullYear();
        const prevDay = new Date(prevYear, prevMonth, 0).getDate();
        return `${prevYear}-${prevMonth}-${prevDay}`;
    } else {
        return `${tDay.getFullYear()}-${tDay.getMonth() + 1}-${tDay.getDate()}`;
    }
}


console.log(getay(2015, 5, 10));