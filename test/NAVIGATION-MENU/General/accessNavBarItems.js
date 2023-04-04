import { UriPath, PageTitle } from "../../../lib/util/NavBarApp/constants.js";

import AuthAppActions from "../../../lib/util/AuthApp/actions.js";
import NavBarAppActions from "../../../lib/util/NavBarApp/actions.js";

const AuthApp = new AuthAppActions();
const NavBarApp = new NavBarAppActions();

describe('Access each item founs in NaBar Menu', () => {
    beforeEach('Login user with vallid credentials', async () => {
        await AuthApp.open();
        await AuthApp.successfulOpen();
        await AuthApp.navigateToLogin();
        await AuthApp.loginWithNewAccount();
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

    afterEach('Logout user', async () => {
        //TODO: Logout scenario
    });
});