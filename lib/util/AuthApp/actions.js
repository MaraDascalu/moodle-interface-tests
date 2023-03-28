import { LoginHeading, SignInHeading, PasswordHeading, EmailErrorMessage, PasswordErrorMessage} from "./constants.js";
import { USER } from "../../../config/user.conf.js"
import { config } from "../../../config/wdio.conf.js";
import { expect } from "expect-webdriverio";

import AuthAppGetters from "./getters.js";

export default class AuthAppActions extends AuthAppGetters {
    async open(path = config.baseUrl) {
        super.open(path);
    }

    async successfulOpen(path = config.baseUrl) {
        super.successfulOpen(path);
    }

    /**
     * Methods for general actions
     */

    async navigateToLogin() {
        await (await this.getLogiHeading()).waitForDisplayed({ timeout: 30000 });
        await expect(await this.getLogiHeading()).toHaveText(LoginHeading);
        await (await this.getAuthWithMicrosoftButton()).waitForClickable({ timeout: 30000 });
        await (await this.getAuthWithMicrosoftButton()).click();
    }

    async loginWithExistingAcc() {
        await (await this.getTitleHeading()).waitForDisplayed({ timeout: 3000});
        await expect(await this.getTitleHeading()).toHaveText(SignInHeading);
        await (await this.getExistingAccountButton()).waitForClickable({ timeout: 30000 });
        await (await this.getExistingAccountButton()).click();
    }

    // finished with "s.unibuc.roo"
    async loginWithInvalidEmail() {
        await browser.pause(3000);
        await this.setEmail(USER.INVALID.EMAIL.DOMAIN);
        await (await this.getEmailErrorField()).waitForDisplayed({ timeout: 3000});
        await expect(await this.getEmailErrorField()).toHaveText(EmailErrorMessage);
    }

    async loginWithInvalidPassword() {
        await this.setEmail(USER.VALID.EMAIL);
        await this.setPassword(USER.INVALID_PASSWORD);
        await (await this.getPasswordErrorField()).waitForDisplayed({ timeout: 3000});
        await expect(await this.getPasswordErrorField()).toHaveText(PasswordErrorMessage);
    }

    async loginWithNewAccount() {
        await this.setEmail(USER.VALID.EMAIL);
        await this.setPassword(USER.VALID.PASSWORD);
    }

    /**
     * Helper functions
     */

    async setEmail(email) {
        await (await this.getTitleHeading()).waitForDisplayed({ timeout: 3000});
        await expect(await this.getTitleHeading()).toHaveText(SignInHeading);
        await (await this.getEmailInput()).waitForClickable({ timeout: 30000 });
        await (await this.getEmailInput()).click();
        await (await this.getEmailInput()).addValue(email);
        await (await this.getSubmitButton()).waitForClickable({ timeout: 30000 });
        await (await this.getSubmitButton()).click();
    }

    async setPassword(password) {
        await (await this.getTitleHeading()).waitForDisplayed({ timeout: 3000});
        await expect(await this.getTitleHeading()).toHaveText(PasswordHeading);
        await (await this.gePasswordInput()).waitForClickable({ timeout: 30000 });
        await (await this.gePasswordInput()).click();
        await (await this.gePasswordInput()).addValue(password);
        await (await this.getSubmitButton()).click();
    }


}