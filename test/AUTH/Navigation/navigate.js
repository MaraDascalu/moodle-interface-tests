import { browser } from "@wdio/globals";
import AuthAppActions from "../../../lib/util/AuthApp/actions.js";

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
        });
    });
});