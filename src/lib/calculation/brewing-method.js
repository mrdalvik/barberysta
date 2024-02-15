const ONE_LITER_IN_MILLILITERS = 1000;

class BrewingMethod {
    #name;
    #coffeeGramsPerLiter;
    #brewingTimePerLiterInSeconds;
    
    constructor({
        name = 'coffee',
        coffeeGramsPerLiter = 0,
        brewingTimePerLiterInSeconds = 0,
    }) {
        this.#name = name;
        this.#coffeeGramsPerLiter = coffeeGramsPerLiter;
        this.#brewingTimePerLiterInSeconds = brewingTimePerLiterInSeconds;
    }

    get name() {
        return this.#name;
    }

    get coffeeGramsPerLiter() {
        return this.#coffeeGramsPerLiter;
    }

    get brewingTimePerLiterInSeconds() {
        return this.#brewingTimePerLiterInSeconds;
    }

    calculateWaterAmount(coffeeGrams = 0) {
        const waterAmount = (ONE_LITER_IN_MILLILITERS * coffeeGrams) / this.coffeeGramsPerLiter;

        return +waterAmount.toFixed(1);
    }

    calculateBrewingTimeInSeconds(coffeeGrams)
    {
        const waterAmount = this.calculateWaterAmount(coffeeGrams);
        const brewingTime = (this.brewingTimePerLiterInSeconds * waterAmount) / ONE_LITER_IN_MILLILITERS;

        return +brewingTime.toFixed(0);
    }
}

module.exports = {
    BrewingMethod,
};