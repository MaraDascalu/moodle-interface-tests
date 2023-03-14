export default class BasePage {

    async open(path) {
        await (browser).url(path);
    }

    async successfulOpen(path) {
        await expect (browser).toHaveUrlContaining(path);
    }
}

