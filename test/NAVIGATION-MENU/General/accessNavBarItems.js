import { UriPath, PageTitle } from "../../../lib/util/NavBarApp/constants.js";

import AuthAppActions from "../../../lib/util/AuthApp/actions.js";
import NavBarAppActions from "../../../lib/util/NavBarApp/actions.js";

const AuthApp = new AuthAppActions();
const NavBarApp = new NavBarAppActions();

var loginFlag = false;

describe('Access each item founs in NaBar Menu', () => {
    beforeEach('Login user with vallid credentials', async () => {
        await AuthApp.open();
        await AuthApp.successfulOpen();
        await AuthApp.navigateToLogin();
        if (loginFlag == false) {
            await AuthApp.loginWithNewAccount();
            loginFlag = true;
        }
        await NavBarApp.successfulNavigateToWelcomePage();
    });

    it('MAIN BUTTON', async () => {
        await NavBarApp.navigateToMainPage();
        await NavBarApp.successfulNavigateToPage(UriPath.MAIN, PageTitle.MAIN);
    });

    it('HOME BUTTON', async () => {
        await NavBarApp.navigateToPage(1);
        await NavBarApp.successfulNavigateToPage(UriPath.HOME, PageTitle.HOME);
    });

    it('DASHBOARD BUTTON', async () => {
        await NavBarApp.navigateToPage(2);
        await NavBarApp.successfulNavigateToPage(UriPath.DASHBOARD, PageTitle.DASHBOARD);
    });

    it('COURSES BUTTON', async () => {
        await NavBarApp.navigateToPage(3);
        await NavBarApp.successfulNavigateToPage(UriPath.MAIN, PageTitle.MAIN);
    });

    it.only('NOTIFICATIONS BUTTON', async () => {
        await NavBarApp.openNotificationsPopover();
    });

    it('MESSAGE BUTTON', async () => {
        await NavBarApp.openMessageMenu();
    });

    afterEach('Logout user', async () => {
        await AuthApp.signOut();
        await AuthApp.successfulOpen();
    });
});