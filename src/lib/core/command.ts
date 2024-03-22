import type TelegramBot from 'node-telegram-bot-api'

export default class Command {
  readonly #name: string
  readonly #description: string
  readonly #handler: any

  constructor (name: string, description: string, handler: any) {
    this.#name = name
    this.#description = description
    this.#handler = handler
  }

  get name (): string {
    return this.#name
  }

  get description (): string {
    return this.#description
  }

  get handler (): any {
    return this.#handler
  }

  toBotCommandFormat (): TelegramBot.BotCommand {
    return {
      command: this.name,
      description: this.description
    }
  }
}
