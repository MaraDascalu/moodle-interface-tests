import BasePage from "../BasePage.js";

export default class AuthAppGetters extends BasePage {

    /** 
     * Selectors - AUTH General
     */

    async getLogiHeading() {
        return (this.browser).$('//h2[@class=\'login-heading\']');
    }

    async getAuthWithMicrosoftButton () {
        return (this.browser).$('//a[contains(@class, \'btn\')]');
    }
}