import type BrewingMethod from './brewing-method.js'

export default class Recipe {
  readonly #brewingMethod
  readonly #coffeeGrams
  readonly #waterAmount
  readonly #brewingTimeInSeconds

  static createByCoffeeGrams (brewingMethod: BrewingMethod, coffeeGrams: number): Recipe {
    const waterAmount = brewingMethod.calculateWaterAmount(coffeeGrams)
    const brewingTimeInSeconds = brewingMethod.calculateBrewingTimeInSeconds(coffeeGrams)

    return new this(brewingMethod, coffeeGrams, waterAmount, brewingTimeInSeconds)
  }

  constructor (brewingMethod: BrewingMethod, coffeeGrams: number, waterAmount: number, brewingTimeInSeconds: number) {
    this.#brewingMethod = brewingMethod
    this.#coffeeGrams = coffeeGrams
    this.#waterAmount = waterAmount
    this.#brewingTimeInSeconds = brewingTimeInSeconds
  }

  get brewingMethod (): BrewingMethod {
    return this.#brewingMethod
  }

  get coffeeGrams (): number {
    return this.#coffeeGrams
  }

  get waterAmount (): number {
    return this.#waterAmount
  }

  get brewingTimeInSeconds (): number {
    return this.#brewingTimeInSeconds
  }
}
