const TelegramBot = require('node-telegram-bot-api');
const { BrewingMethod } = require('./lib/calculation/brewing-method');

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
    if (Number.isNaN(coffeeGrams))
    {
        await bot.sendMessage(msg.chat.id, 'Enter the number, how many grams of coffee do you want to brew?');

        return;
    }

    const waterAmount = harioV60Method.calculateWaterAmount(coffeeGrams);
    const brewingTime = harioV60Method.calculateBrewingTimeInSeconds(coffeeGrams);

    const introText = `Your recipe for the most delicious ${harioV60Method.name}:`;
    const coffeeText = `🫘 Coffee: ${coffeeGrams} gm.`;
    const waterText = `💧 Water: ${waterAmount} ml.`;
    const timeText = `⏱️ Brewing time: ${brewingTime} sec.`;
    const wishText = `I wish you a good cup 😉☕️`;

    const response = `${introText}\n${coffeeText}\n${waterText}\n${timeText}\n\n${wishText}`;

    await bot.sendMessage(msg.chat.id, response);
})