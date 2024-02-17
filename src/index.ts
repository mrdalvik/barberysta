import TelegramBot from 'node-telegram-bot-api'

import BrewingMethod from './lib/brewing-method.js'
import { ROOT_DIR } from './lib/core/environment-variables.js'
import CoffeeGramsValidator from './lib/validator/coffee-grams.js'
import Config from './lib/core/config.js'
import Recipe from './lib/recipe.js'
import RecipePrinter from './lib/recipe-printer.js'
import { serviceLocator } from './lib/core/service-locator.js'

const config = new Config(ROOT_DIR + 'config.json')
serviceLocator.add('config', config)

const token = String(serviceLocator.get('config').get('telegramBotToken'))
const bot = new TelegramBot(token, {
  polling: true
})

bot.on('text', async (message: TelegramBot.Message) => {
  const messageText = message.text ?? ''
  const coffeeGrams = parseInt(messageText, 10)

  const coffeeGramsValidator = new CoffeeGramsValidator(coffeeGrams)
  if (!coffeeGramsValidator.isValidValue) {
    console.log(message.chat.first_name, message.chat.last_name, (new Date()).toUTCString(), coffeeGramsValidator.errorMessage)

    await bot.sendMessage(message.chat.id, coffeeGramsValidator.errorMessage)

    return
  }

  const harioV60Method = new BrewingMethod({
    name: 'v60',
    coffeeGramsPerLiter: 60,
    brewingTimePerLiterInSeconds: 720
  })

  const recipe = Recipe.createByCoffeeGrams(harioV60Method, coffeeGrams)
  const recipePrinter = new RecipePrinter(recipe)
  const response = recipePrinter.getTelegramMessageText()

  console.log(message.chat.first_name, message.chat.last_name, (new Date()).toUTCString(), response)

  await bot.sendMessage(message.chat.id, response)
})
