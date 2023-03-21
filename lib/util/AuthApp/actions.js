import { LoginHeadingTitle, SignInHeading } from "./constants.js";
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
        await expect(await this.getLogiHeading()).toHaveText(LoginHeadingTitle);
        await (await this.getAuthWithMicrosoftButton()).waitForClickable({ timeout: 30000 });
        await (await this.getAuthWithMicrosoftButton()).click();
    }

    async loginWithExistingAcc() {
        await (await this.getSelectAccHeading()).waitForDisplayed({ timeout: 3000});
        await expect(await this.getSelectAccHeading()).toHaveText(SignInHeading);
        await (await this.getExistingAccountButton()).waitForClickable({ timeout: 30000 });
        await (await this.getExistingAccountButton()).click();
    }

    async loginWithNewAccount() {
        await this.setEmail();
        await setPassword();
    }

    /**
     * Helper functions
     */

    async setEmail() {
        await (await this.getSelectAccHeading()).waitForDisplayed({ timeout: 3000});
        await expect(await this.getSelectAccHeading()).toHaveText(SignInHeading);
        await (await this.getEmailInput()).waitForClickable({ timeout: 30000 });
        await (await this.getEmailInput()).click();
        await (await this.getEmailInput()).addValue(USER.EMAIL);
        await (await this.getSubmitButton()).waitForClickable({ timeout: 30000 });
        await (await this.getSubmitButton()).click();
        await browser.pause(20000);
    }

    async setPassword() {

    }
}