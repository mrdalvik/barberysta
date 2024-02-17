import TimeFormatter from './core/time-formatter.js';

export default class RecipePrinter {
    #recipe;

    constructor(recipe) {
        this.#recipe = recipe;
    }

    get recipe() {
        return this.#recipe;
    }

    getTelegramMessageText() {
        const introText = `Your recipe for the most delicious ${this.recipe.brewingMethod.name}:`;
        const coffeeText = `🫘 Coffee: ${this.recipe.coffeeGrams} gm.`;
        const waterText = `💧 Water: ${this.recipe.waterAmount} ml.`;
        const timeText = `⏱️ Brewing time: ${TimeFormatter.secondsToMinutesAndSeconds(this.recipe.brewingTimeInSeconds)}`;
        const wishText = `I wish you a good cup 😉☕️`;
    
        const formattedText = `${introText}\n${coffeeText}\n${waterText}\n${timeText}\n\n${wishText}`;

        return formattedText;
    }
}