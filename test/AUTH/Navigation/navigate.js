import { browser } from "@wdio/globals";
import AuthAppActions from "../../../lib/util/AuthApp/actions.js";
import { UriPath } from "../../../lib/util/AuthApp/constants.js";
import { USER } from "../../../config/user.conf.js";

const AuthApp = new AuthAppActions();

describe('Navigate between pages from auth', async () => {
    describe('Navigate between base page and set username email page', async () => {
        beforeEach('Open base page and navigate to set username email page', async () => {
            await AuthApp.open();
            await AuthApp.successfulOpen();
            await AuthApp.navigateToLogin();
        });

        it('back', async () => {
            await browser.back();
            await AuthApp.successfulOpen();
        });

        it('forward', async () => {
            await browser.back();
            await browser.forward();
            await AuthApp.isOnSignInPage();
        });
    });
});

describe('Navigate between set username email page and set password page', async () => {
    beforeEach('Open sign in page', async () => {
        await AuthApp.open();
        await AuthApp.successfulOpen();
        await AuthApp.navigateToLogin();
        await AuthApp.setEmail(USER.VALID.EMAIL);
        await browser.pause(3000);
    });

    it('back', async () => {
        await browser.back();
        await AuthApp.successfulOpen(UriPath.SIGN_IN);
    });

    it('forward', async () => {
        await browser.back();
        await browser.forward();
        await AuthApp.isOnPasswordPage();
    });
});
