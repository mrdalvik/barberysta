const TelegramBot = require('node-telegram-bot-api');

const { BrewingMethod } = require('./lib/brewing-method');
const { Recipe } = require('./lib/recipe');
const { RecipePrinter } = require('./lib/recipe-printer');

const bot = new TelegramBot('', {
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