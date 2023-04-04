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
        return (await $('//div[@id=\'passwordError\']'))
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

