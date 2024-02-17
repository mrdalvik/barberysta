import fs from 'fs';

export default class Config {
    #filePath;
    #config: { [key: string]: any } = {};

    constructor(filePath: string) {
        this.#filePath = filePath;
        this.#load();
    }

    #load() {
        try {
            const configFileData = fs.readFileSync(this.#filePath, 'utf8');
            this.#config = JSON.parse(configFileData);
        } catch (error) {
            console.error('Error reading configuration file:', error);
        }
    }

    get(name: string, defaultValue = null) {
        const value = this.#config[name];
        if (typeof value === 'undefined') {
            return defaultValue;
        }

        return value;
    }
}