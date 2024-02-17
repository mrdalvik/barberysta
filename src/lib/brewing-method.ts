const ONE_LITER_IN_MILLILITERS = 1000

export default class BrewingMethod {
  readonly #name
  readonly #coffeeGramsPerLiter
  readonly #brewingTimePerLiterInSeconds

  constructor ({
    name = 'coffee',
    coffeeGramsPerLiter = 0,
    brewingTimePerLiterInSeconds = 0
  }) {
    this.#name = name
    this.#coffeeGramsPerLiter = coffeeGramsPerLiter
    this.#brewingTimePerLiterInSeconds = brewingTimePerLiterInSeconds
  }

  get name (): string {
    return this.#name
  }

  get coffeeGramsPerLiter (): number {
    return this.#coffeeGramsPerLiter
  }

  get brewingTimePerLiterInSeconds (): number {
    return this.#brewingTimePerLiterInSeconds
  }

  calculateWaterAmount (coffeeGrams = 0): number {
    const waterAmount = (ONE_LITER_IN_MILLILITERS * coffeeGrams) / this.coffeeGramsPerLiter

    return +waterAmount.toFixed(1)
  }

  calculateBrewingTimeInSeconds (coffeeGrams: number): number {
    const waterAmount = this.calculateWaterAmount(coffeeGrams)
    const brewingTime = (this.brewingTimePerLiterInSeconds * waterAmount) / ONE_LITER_IN_MILLILITERS

    return +brewingTime.toFixed(0)
  }
}
