function getRecord(cityName, cityPopulation, cityTreasury){
    const cityRecord = {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury
    };
    return cityRecord;
}

console.log(getRecord('Tortuga',
7000,
15000))