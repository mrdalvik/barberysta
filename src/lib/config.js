const fs = require('fs');

class Config {
    #filePath;
    #config;

    constructor(filePath) {
        this.#filePath = filePath;
        this.#load();
    }

    #load() {
        try {
            this.#config = require(this.#filePath);
        } catch (error) {
            console.error('Error reading configuration file:', error);
        }
    }

    get(name, defaultValue = null) {
        const value = this.#config[name];
        if (typeof value === 'undefined') {
            return defaultValue;
        }

        return value;
    }
}

module.exports = {
    Config,
};