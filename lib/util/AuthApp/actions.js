import { LoginHeading, SignInHeading, PasswordHeading } from "./constants.js";
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

    async loginWithNewAccount() {
        await this.setEmail();
        await this.setPassword();
    }

    /**
     * Helper functions
     */

    async setEmail() {
        await (await this.getTitleHeading()).waitForDisplayed({ timeout: 3000});
        await expect(await this.getTitleHeading()).toHaveText(SignInHeading);
        await (await this.getEmailInput()).waitForClickable({ timeout: 30000 });
        await (await this.getEmailInput()).click();
        await (await this.getEmailInput()).addValue(USER.EMAIL);
        await (await this.getSubmitButton()).waitForClickable({ timeout: 30000 });
        await (await this.getSubmitButton()).click();
    }

    async setPassword() {
        await (await this.getTitleHeading()).waitForDisplayed({ timeout: 3000});
        await expect(await this.getTitleHeading()).toHaveText(PasswordHeading);
        await (await this.gePasswordInput()).waitForClickable({ timeout: 30000 });
        await (await this.gePasswordInput()).click();
        await (await this.gePasswordInput()).addValue(USER.PASSWORD);
        await (await this.getSubmitButton()).click();
    }
}