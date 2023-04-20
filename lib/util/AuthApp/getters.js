import BasePage from "../BasePage.js";

export default class AuthAppGetters extends BasePage {

    /** 
     * Selectors - AUTH General
     */

    /**
     * Login selectors
     */

    async getLogiHeading() {
        return (await $('//h2[@class=\'login-heading\']'));
    }

    async getAuthWithMicrosoftButton() {
        return (await $('//a[contains(@class, \'btn\')]'));
    }

    async getTitleHeading() {
        return (await $('//div[@role=\'heading\']'));
    }

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
        return (await $('//div[@id=\'passwordError\']'))
    }

    async getNavigateBackButton() {
        return (await $('//button[@class=\'backButton\']'));
    }

    /**
     * Sign out selectors
     */

    async getUserMenuButton() {
        return (await $('//a[@aria-label=\'Meniul utilizatorului\']'))
    }

    async getUserMenu() {
        return (await $('//div[@id=\'user-action-menu\']'))
    }

    async getSignOutButton() {
        return (await $('//div[@id=\'carousel-item-main\']/a[8]'))
    }

    // Reset account
    async getCannotAccesButton() {
        return (await $('//a[@name=\'cannotAccessAccount\']'));
    }

    async getWorkAccountButton() {
        return (await $('//div[@id=\'aadResetTile\']'));
    }

    async getPersonalAccountButton() {
        return (await $('//div[@id=\'msaResetTile\']'))
    }

    async getResetAccountInfo() {
        return (await $('//div[@class=\'marginTB20\']'))
    }

    async getResetAccountHeading() {
        return (await $('//div[@id=\'iResetPwdHipTitle\']'))
    }

    async getForgotPasswordButton() {
        return (await $('//a[@id=\'idA_PWD_ForgotPassword\']'))
    }
}

