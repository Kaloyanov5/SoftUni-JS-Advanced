function townsToJSON(input){
    const args = input.shift().split(/\s*\|\s*/gm).filter(x => x !== '');
    let towns = [];

    for (let str of input){
        let [city, lat, lon] = str.split(/\s*\|\s*/gm).filter(x => x !== '');
        [lat, lon] = [Number(Number(lat).toFixed(2)), Number(Number(lon).toFixed(2))];

        const curObject = {
            [args[0]]: city,
            [args[1]]: lat,
            [args[2]]: lon
        }

        towns.push(curObject);
    }

    return JSON.stringify(towns);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']))