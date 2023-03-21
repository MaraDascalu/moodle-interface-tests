import BasePage from "../BasePage.js";

export default class AuthAppGetters extends BasePage {

    /** 
     * Selectors - AUTH General
     */

    async getLogiHeading() {
        return (await $('//h2[@class=\'login-heading\']'));
    }

    async getAuthWithMicrosoftButton() {
        return (await $('//a[contains(@class, \'btn\')]'));
    }

    async getTitleHeading() {
        // toDo create a constant for "Create an account"
        return (await $('//div[@role=\'heading\']'));
    }

    // async getExistingAccountButton() {
    //     return (await $('(//div[@class=\'table\'])[1]'));
    // }

    // async getUseAnnotherAccountButton() {
    //     return (await $('//div[@id=\'otherTile\']'))
    // }

    async getEmailInput() {
        return (await $('//input[@type=\'email\']'))
    }

    async getSubmitButton() {
        return (await $('//input[@type=\'submit\']'))
    }

    async gePasswordInput() {
        return (await $('//input[@name=\'passwd\']'));
    }

    async getEmailErrorField() {
        return (await $('//div[@class=\'col-md-24 error ext-error\']'))
    }

    async getPasswordErrorField() {
        return (await $('////div[@id=\'passwordError\']'))
    }
}

