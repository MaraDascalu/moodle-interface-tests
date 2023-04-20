import { browser } from "@wdio/globals";
import { USER } from "../../../config/user.conf.js";

import AuthAppActions from "../../../lib/util/AuthApp/actions.js";

const AuthApp = new AuthAppActions();

describe('Navigate between pages from auth', async () => {
    describe('Navigate between base page and set username email page', async () => {
        beforeEach('Open base page and navigate to set username email page', async () => {
            await AuthApp.open();
            await AuthApp.successfulOpen();
            await AuthApp.navigateToLogin();
            await browser.pause(500);
        });

        it('back', async () => {
            await AuthApp.goBackToBasePage();
        });

        it('forward', async () => {
            await AuthApp.goBackToBasePage();
            await AuthApp.goForwardToSetEmailPage();
        });
    });

    describe('Navigate between set username email page and set password page using browser arrows', async () => {
        beforeEach('Open sign in page', async () => {
            await AuthApp.open();
            await AuthApp.successfulOpen();
            await AuthApp.navigateToLogin();
            await AuthApp.setEmail(USER.VALID.EMAIL);
            await browser.pause(500);
        });
    
        it('back', async () => {
            await AuthApp.goBackToSetEmailPage('browser');
        });
    
        it('forward', async () => {
            await AuthApp.goBackToSetEmailPage('browser');
            await AuthApp.goForwardToSetPasswordPage();
        });
    });

    describe('Navigate between set username email page and set password page using platform arrow', async () => {
        beforeEach('Open sign in page', async () => {
            await AuthApp.open();
            await AuthApp.successfulOpen();
            await AuthApp.navigateToLogin();
            await AuthApp.setEmail(USER.VALID.EMAIL);
            await browser.pause(500);
        });
    
        it('back', async () => {
            await AuthApp.goBackToSetEmailPage('platform');
        });
    
        it('forward', async () => {
            await AuthApp.goBackToSetEmailPage('platform');
            await AuthApp.goForwardToSetPasswordPage();
        });
    });
});

