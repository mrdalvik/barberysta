export default class CoffeeGramsValidator {
  readonly #value: number
  #errorMessage: string = ''

  constructor (value = 0) {
    this.#value = value
    this.validate()
  }

  validate (): void {
    if (Number.isNaN(this.value)) {
      this.#errorMessage = 'Enter the number, how many grams of coffee do you want to brew? 😌'

      return
    }

    if (this.value < 0) {
      this.#errorMessage = 'How is that less than zero? Everything is for you, but I won’t give you my coffee 😅'

      return
    }
    if (this.value === 0) {
      this.#errorMessage = "We can't brew anything without coffee 🥲"
    }
  }

  get value (): number {
    return this.#value
  }

  set errorMessage (message: string) {
    this.#errorMessage = message
  }

  get errorMessage (): string {
    return this.#errorMessage
  }

  get isValidValue (): boolean {
    return this.errorMessage === ''
  }
}
