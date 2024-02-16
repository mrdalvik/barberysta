class Recipe {
    #brewingMethod;
    #coffeeGrams;
    #waterAmount;
    #brewingTimeInSeconds;

    static createByCoffeeGrams(brewingMethod, coffeeGrams) {
        const waterAmount = brewingMethod.calculateWaterAmount(coffeeGrams);
        const brewingTimeInSeconds = brewingMethod.calculateBrewingTimeInSeconds(coffeeGrams);

        return new this(brewingMethod, coffeeGrams, waterAmount, brewingTimeInSeconds);
    }

    constructor(brewingMethod, coffeeGrams, waterAmount, brewingTimeInSeconds) {
        this.#brewingMethod = brewingMethod;
        this.#coffeeGrams = coffeeGrams;
        this.#waterAmount = waterAmount;
        this.#brewingTimeInSeconds = brewingTimeInSeconds;
    }

    get brewingMethod() {
        return this.#brewingMethod;
    }

    get coffeeGrams() {
        return this.#coffeeGrams;
    }

    get waterAmount() {
        return this.#waterAmount;
    }

    get brewingTimeInSeconds() {
        return this.#brewingTimeInSeconds;
    }
}

module.exports = {
    Recipe,
};