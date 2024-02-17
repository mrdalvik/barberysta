import type Recipe from './recipe.js'
import { secondsToMinutesAndSeconds } from './core/time-format.js'

export default class RecipePrinter {
  readonly #recipe

  constructor (recipe: Recipe) {
    this.#recipe = recipe
  }

  get recipe (): Recipe {
    return this.#recipe
  }

  getTelegramMessageText (): string {
    const introText = `Your recipe for the most delicious ${this.recipe.brewingMethod.name}:`
    const coffeeText = `🫘 Coffee: ${this.recipe.coffeeGrams} gm.`
    const waterText = `💧 Water: ${this.recipe.waterAmount} ml.`
    const timeText = `⏱️ Brewing time: ${secondsToMinutesAndSeconds(this.recipe.brewingTimeInSeconds)}`
    const wishText = 'I wish you a good cup 😉☕️'

    const formattedText = `${introText}\n${coffeeText}\n${waterText}\n${timeText}\n\n${wishText}`

    return formattedText
  }
}
