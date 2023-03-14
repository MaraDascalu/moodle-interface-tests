import BasePage from "../BasePage.js";

export default class AuthAppGetters extends BasePage {

    /** 
     * Selectors - AUTH General
     */

    async getLogiHeading() {
        return (await $('//h2[@class=\'login-heading\']'));
    }

    async getAuthWithMicrosoftButton () {
        return (await $('//a[contains(@class, \'btn\')]'));
    }
}