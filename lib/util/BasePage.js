import { browser } from "@wdio/globals";

export default class BasePage {

    async open(path) {
        await (browser).setWindowSize(1200, 800);
        await (browser).url(path);
    }

    async successfulOpen(path) {
        await expect (browser).toHaveUrlContaining(path);
    }
}

