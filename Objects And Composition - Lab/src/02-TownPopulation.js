function townPopulation(array){
    let towns = {};

    for (let i = 0; i < array.length; i++){
        let [curCity, curPop] = array[i].split(" <-> ");
        curPop = Number(curPop);

        if (towns[curCity]){
            towns[curCity] += curPop;
            continue;
        }

        towns[curCity] = curPop;
    }

    for (let key in towns){
        console.log(`${key} : ${towns[key]}`);
    }
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])