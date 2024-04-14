function sortCatalogue(input){
    let sorted = {};
    input = input.sort();
    for (let item of input){
        let [name, price] = item.split(" : ");
        price = Number(price);

        if(!sorted[name[0]]) sorted[name[0]] = {};
        sorted[name[0]][name] = price;
    }

    for (let letter of Object.keys(sorted)){
        console.log(`${letter}`);
        for (let item of Object.keys(sorted[letter])){
            console.log(`\t${item}: ${sorted[letter][item]}`);
        }
    }
}

sortCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])