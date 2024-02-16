const TelegramBot = require('node-telegram-bot-api');

const { BrewingMethod } = require('./lib/brewing-method');
const { TimeFormatter } = require('./lib/time-formatter');

const bot = new TelegramBot('', {
    polling: true,
});

bot.on('text', async (msg) => {
    const harioV60Method = new BrewingMethod({
        name: 'v60',
        coffeeGramsPerLiter: 60,
        brewingTimePerLiterInSeconds: 720,
    });

    const coffeeGrams = parseInt(msg.text, 10);
    if (Number.isNaN(coffeeGrams)) {
        const response = 'Enter the number, how many grams of coffee do you want to brew? 😌';
        console.log(msg.chat.first_name, msg.chat.last_name, (new Date()).toUTCString(), response);

        await bot.sendMessage(msg.chat.id, response);

        return;
    }

    if (coffeeGrams < 0)
    {
        const response = 'How is that less than zero? Everything is for you, but I won’t give you my coffee 😅';
        console.log(msg.chat.first_name, msg.chat.last_name, (new Date()).toUTCString(), response);

        await bot.sendMessage(msg.chat.id, response);

        return;
    }

    if (coffeeGrams === 0)
    {
        const response = "We can't brew anything without coffee 🥲";
        console.log(msg.chat.first_name, msg.chat.last_name, (new Date()).toUTCString(), response);

        await bot.sendMessage(msg.chat.id, response);

        return;
    }

    const waterAmount = harioV60Method.calculateWaterAmount(coffeeGrams);
    const brewingTime = harioV60Method.calculateBrewingTimeInSeconds(coffeeGrams);

    const introText = `Your recipe for the most delicious ${harioV60Method.name}:`;
    const coffeeText = `🫘 Coffee: ${coffeeGrams} gm.`;
    const waterText = `💧 Water: ${waterAmount} ml.`;
    const timeText = `⏱️ Brewing time: ${TimeFormatter.secondsToMinutesAndSeconds(brewingTime)}`;
    const wishText = `I wish you a good cup 😉☕️`;

    const response = `${introText}\n${coffeeText}\n${waterText}\n${timeText}\n\n${wishText}`;
    console.log(msg.chat.first_name, msg.chat.last_name, (new Date()).toUTCString(), response);

    await bot.sendMessage(msg.chat.id, response);
})