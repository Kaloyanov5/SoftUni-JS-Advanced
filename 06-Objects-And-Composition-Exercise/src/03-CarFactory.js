function createCar(object){
    let car = {
        model: object.model,
        engine: {},
        carriage: {},
        wheels: [0, 0, 0, 0]
    };
    const engines = {
        small: {
            power: 90,
            volume: 1800
        },
        normal: {
            power: 120,
            volume: 2400
        },
        monster: {
            power: 200,
            volume: 3500
        }
    };

    for (let obj of Object.keys(engines)){
        if (object.power <= engines[obj].power){
            car.engine = {
                power: engines[obj].power,
                volume: engines[obj].volume
            }
            break;
        }
    }

    if (object.carriage === 'hatchback' || object.carriage === "coupe"){
        car.carriage = {
            type: object.carriage,
            color: object.color
        }
    }

    if (Math.round(object.wheelsize) % 2 === 0){
        object.wheelsize--;
    }
    car.wheels.fill(object.wheelsize);

    return car;
}

console.log(createCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }))