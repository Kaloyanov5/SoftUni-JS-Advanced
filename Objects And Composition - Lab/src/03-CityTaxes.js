// commented solution gives 0/100 in the tests but decided to include it anyways
/* class cityTaxes {
    constructor (name, population, treasury){
        this.name = name;
        this.population = population;
        this.treasury = treasury;
        this.taxRate = 10;
    }

    collectTaxes() {
        this.treasury += this.population * this.taxRate;
    }

    applyGrowth(perc) {
        this.population += this.population * (perc / 100);
    }

    applyRecession(perc) {
        this.treasury -= this.treasury * (perc / 100);
    }
} */

function cityTaxes(name, population, treasury){
    let object = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function(){
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function(perc) {
            this.population += this.population * (perc / 100);
        },
        applyRecession: function(perc) {
            this.treasury -= this.treasury * (perc / 100);
        }
    }
    return object;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);