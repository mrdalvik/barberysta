import BrewingMethod from './brewing-method.js';

export default class Recipe {
    #brewingMethod;
    #coffeeGrams;
    #waterAmount;
    #brewingTimeInSeconds;

    static createByCoffeeGrams(brewingMethod: BrewingMethod, coffeeGrams: number) {
        const waterAmount = brewingMethod.calculateWaterAmount(coffeeGrams);
        const brewingTimeInSeconds = brewingMethod.calculateBrewingTimeInSeconds(coffeeGrams);

        return new this(brewingMethod, coffeeGrams, waterAmount, brewingTimeInSeconds);
    }

    constructor(brewingMethod: BrewingMethod, coffeeGrams: number, waterAmount: number, brewingTimeInSeconds: number) {
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