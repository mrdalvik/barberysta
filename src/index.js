import TelegramBot from 'node-telegram-bot-api';

import BrewingMethod from './lib/brewing-method.js';
import Config from './lib/core/config.js';
import Recipe from './lib/recipe.js';
import RecipePrinter from './lib/recipe-printer.js';
import { serviceLocator } from './lib/core/service-locator.js';

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = __dirname + '/../';

const config = new Config(ROOT_DIR + 'config.json');
serviceLocator.add('config', config);

const bot = new TelegramBot(serviceLocator.get('config').get('telegramBotToken'), {
    polling: true,
});

bot.on('text', async (message) => {
    const coffeeGrams = parseInt(message.text, 10);
    if (Number.isNaN(coffeeGrams)) {
        const response = 'Enter the number, how many grams of coffee do you want to brew? 😌';
        console.log(message.chat.first_name, message.chat.last_name, (new Date()).toUTCString(), response);

        await bot.sendMessage(message.chat.id, response);

        return;
    }

    if (coffeeGrams < 0)
    {
        const response = 'How is that less than zero? Everything is for you, but I won’t give you my coffee 😅';
        console.log(message.chat.first_name, message.chat.last_name, (new Date()).toUTCString(), response);

        await bot.sendMessage(message.chat.id, response);

        return;
    }

    if (coffeeGrams === 0)
    {
        const response = "We can't brew anything without coffee 🥲";
        console.log(message.chat.first_name, message.chat.last_name, (new Date()).toUTCString(), response);

        await bot.sendMessage(message.chat.id, response);

        return;
    }

    const harioV60Method = new BrewingMethod({
        name: 'v60',
        coffeeGramsPerLiter: 60,
        brewingTimePerLiterInSeconds: 720,
    });

    const recipe = Recipe.createByCoffeeGrams(harioV60Method, coffeeGrams);
    const recipePrinter = new RecipePrinter(recipe);
    const response = recipePrinter.getTelegramMessageText();

    console.log(message.chat.first_name, message.chat.last_name, (new Date()).toUTCString(), response);

    await bot.sendMessage(message.chat.id, response);
})