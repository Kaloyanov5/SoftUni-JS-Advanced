function regHeores(array){
    let heroes = [];

    for (let str of array){
        let [name, level, items] = str.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];

        heroes.push({ name, level, items });
    }

    console.log(JSON.stringify(heroes));
}

console.log(regHeores(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))