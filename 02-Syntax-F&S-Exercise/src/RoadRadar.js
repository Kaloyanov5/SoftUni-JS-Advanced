function getSpeed(speed, area){
    const speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    const curLimit = speedLimits[area];

    if (Number(speed) > curLimit){
        const difference = Number(speed) - curLimit;
        let status;

        if (difference <= 20){
            status = `speeding`;
        } else if (difference <= 40){
            status = `excessive speeding`;
        } else{
            status = `reckless driving`;
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${curLimit} - ${status}`);
    } else{
        console.log(`Driving ${speed} km/h in a ${curLimit} zone`);
    }
}

getSpeed('200', 'motorway');