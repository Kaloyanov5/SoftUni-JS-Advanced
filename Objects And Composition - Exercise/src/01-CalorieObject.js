function calorieObject(array){
    let calObject = {};

    for (let i = 0; i < array.length; i += 2){
        calObject[array[i]] = Number(array[i + 1]);
    }

    console.log(calObject);
}

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])