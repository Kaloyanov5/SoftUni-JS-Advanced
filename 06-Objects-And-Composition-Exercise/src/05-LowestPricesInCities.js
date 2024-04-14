function getCheapest(towns){
    let cheapestItems = {};

    for (let town of towns) {
        const [city, item, price] = town.split(" | ");
        const itemPrice = Number(price);

        if (!cheapestItems[item] || itemPrice < cheapestItems[item].price) {
            cheapestItems[item] = {
                price: itemPrice,
                town: city
            };
        }
    }

    for (let item of Object.keys(cheapestItems)) {
        console.log(`${item} -> ${cheapestItems[item].price} (${cheapestItems[item].town})`);
    }
}

getCheapest(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])