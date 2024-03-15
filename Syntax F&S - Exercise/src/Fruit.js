function getFruit(fruit, grams, price){
    const weightKg = grams / 1000;
    const totalPrice = (price * weightKg).toFixed(2);
    console.log(`I need $${totalPrice} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

getFruit('apple', 1563, 2.35);