import { PageTitle, ErrorMessage, PageInfo} from "./constants.js";
import { USER } from "../../../config/user.conf.js"
import { config } from "../../../config/wdio.chrome.conf.js";
import { expect } from "expect-webdriverio";

import AuthAppGetters from "./getters.js";
import { browser } from "@wdio/globals";

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
        await expect(await this.getLogiHeading()).toHaveText(PageTitle.LOG_IN);
        await (await this.getAuthWithMicrosoftButton()).waitForClickable({ timeout: 30000 });
        await (await this.getAuthWithMicrosoftButton()).click();
    }

    async loginWithExistingAcc() {
        await this.successfulOpenSignInPage();
        await (await this.getExistingAccountButton()).waitForClickable({ timeout: 30000 });
        await (await this.getExistingAccountButton()).click();
    }

    async loginWithInvalidDomainEmail() {
        await this.setEmail(USER.INVALID.EMAIL.DOMAIN);
        await (await this.getEmailErrorField()).waitForDisplayed({ timeout: 3000 });
        await expect(await this.getEmailErrorField()).toHaveText(ErrorMessage.INVALID_DOMAIN_EMAIL);
    }

    async loginWithInvalidRootEmail() {
        await this.setEmail(USER.INVALID.EMAIL.ROOT);
        await (await this.getEmailErrorField()).waitForDisplayed({ timeout: 3000 });
        await expect(await this.getEmailErrorField()).toHaveTextContaining(ErrorMessage.INVALID_ROOT_EMAIL);
    }

    async loginWithInvalidPassword() {
        await this.setEmail(USER.VALID.EMAIL);
        await this.setPassword(USER.INVALID.PASSWORD);
        await (await this.getPasswordErrorField()).waitForDisplayed({ timeout: 3000 });
        await expect(await this.getPasswordErrorField()).toHaveTextContaining(ErrorMessage.PASSWORD);
    }

    async loginWithNewAccount() {
        await this.setEmail(USER.VALID.EMAIL);
        await this.setPassword(USER.VALID.PASSWORD);
    }

    async signOut() {
        await (await this.getUserMenuButton()).waitForClickable({ timeout: 30000 });
        await (await this.getUserMenuButton()).click();
        await (await this.getUserMenu()).waitForDisplayed({ timeout: 30000 });
        await (await this.getSignOutButton()).waitForClickable({ timeout: 30000 });
        await (await this.getSignOutButton()).click();
        await browser.pause(500);
    }

    /**
     * Helper functions
     */

    async setEmail(email) {
        await this.successfulOpenSignInPage();
        await (await this.getEmailInput()).waitForDisplayed({ timeout: 30000 });
        await (await this.getEmailInput()).addValue(email);
        await (await this.getSubmitButton()).waitForClickable({ timeout: 30000 });
        await (await this.getSubmitButton()).click();
    }

    async setPassword(password) {
        this.successfulOpenPasswordPage();
        await (await this.gePasswordInput()).waitForDisplayed({ timeout: 30000 });
        await (await this.gePasswordInput()).addValue(password);
        await (await this.getSubmitButton()).waitForClickable({ timeout: 30000 });
        await (await this.getSubmitButton()).click();
    }

    async successfulOpenSignInPage() {
        await (await this.getTitleHeading()).waitForDisplayed({ timeout: 10000 });
        await expect(await this.getTitleHeading()).toHaveText(PageTitle.SIGN_IN);
    }

    async successfulOpenPasswordPage() {
        await (await this.getTitleHeading()).waitForDisplayed({ timeout: 10000 });
        await expect(await this.getTitleHeading()).toHaveText(PageTitle.PASSWORD);
    }

    async goBackToBasePage() {
        await browser.back();
        await this.successfulOpen();
    }

    async goForwardToSetEmailPage() {
        await browser.forward();
        await this.successfulOpenSignInPage();
    }

    async goBackToSetEmailPage(instance) {
        switch (instance) {
            case 'browser':
                await browser.back();
                break;
            case 'platform':
                await (await this.getNavigateBackButton()).waitForClickable({ timeout: 10000 });
                await (await this.getNavigateBackButton()).click();
                break;
            default:
                break;
        }
        await this.successfulOpenSignInPage();
    }

    async goForwardToSetPasswordPage() {
        await browser.forward()
        await this.successfulOpenPasswordPage();
    }

    /*
     * Reset account
     */

    async cannotAccessAccount() {
        await (await this.getTitleHeading()).waitForDisplayed({ timeout: 3000 });
        await expect(await this.getTitleHeading()).toHaveText(PageTitle.SIGN_IN);
        await (await this.getCannotAccesButton()).waitForClickable({ timeout: 30000 });
        await (await this.getCannotAccesButton()).click();
        await (await this.getTitleHeading()).waitForDisplayed({ timeout: 3000 });
        await expect(await this.getTitleHeading()).toHaveText(PageTitle.FORGOT_EMAIL);
    }

    async resetWorkAccount() {
        await this.cannotAccessAccount()
        await (await this.getWorkAccountButton()).waitForClickable({ timeout: 30000 });
        await (await this.getWorkAccountButton()).click();
        await (await this.getResetAccountInfo()).waitForDisplayed({ timeout: 3000 });
        await expect(await this.getResetAccountInfo()).toHaveTextContaining(PageInfo.RESET_ACCOUNT);
    }

    async resetPersonalAccount() {
        await this.cannotAccessAccount()
        await (await this.getPersonalAccountButton()).waitForClickable({ timeout: 30000 });
        await (await this.getPersonalAccountButton()).click();
        await (await this.getResetAccountHeading()).waitForDisplayed({ timeout: 5000 });
        await expect(await this.getResetAccountHeading()).toHaveText(PageTitle.RESET_ACCOUNT);
    }

    async resetPassword() {
        await this.setEmail(USER.VALID.EMAIL);
        await (await this.getForgotPasswordButton()).waitForClickable({ timeout: 30000 });
        await (await this.getForgotPasswordButton()).click();
        await (await this.getResetAccountInfo()).waitForDisplayed({ timeout: 3000 });
        await expect(await this.getResetAccountInfo()).toHaveTextContaining(PageInfo.RESET_ACCOUNT);
    }
}