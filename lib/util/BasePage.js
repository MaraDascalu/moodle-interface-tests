import { config } from "../../config/wdio.conf.js";

export default class BasePage {
    constructor() {
        this.browser = browser;
    }

    async open(path) {
        await (await this.browser).url(config.baseUrl + path);
    }

    async successfulOpen(path) {
        await expect(await this.browser).toHaveUrlContaining(path);
    }
}

