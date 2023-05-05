import { UriPath, PageTitle, NavBarOptions } from "../../../lib/util/NavBarApp/constants.js";

import AuthAppActions from "../../../lib/util/AuthApp/actions.js";
import NavBarAppActions from "../../../lib/util/NavBarApp/actions.js";

const AuthApp = new AuthAppActions();
const NavBarApp = new NavBarAppActions();

var loginFlag = false;

describe('Navigate between nav bar menu options', () => {
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

    Object.keys(NavBarOptions).forEach(option1 => {
        describe(`${option1}`,  () => {
            Object.keys(NavBarOptions).forEach(option2 => { 
                describe(`${option2}`, () => {
                    if (option1 !== option2) {
                        beforeEach('Access two pages from nav bar menu', async () => {
                            await NavBarApp.navigateToPageFromNavBar(option1);
                            await NavBarApp.navigateToPageFromNavBar(option2);
                        });

                        it('navigate back', async () => {
                            await NavBarApp.goBackToPreviosPage(option1);
                        });

                        it('navigate forward', async () => {
                            await NavBarApp.goBackToPreviosPage(option1);
                            await NavBarApp.goForwardToNextPage(option2);
                        });
                    }
                });
            });
        });
    })
    
    afterEach('Logout user', async () => {
        await AuthApp.signOut();
        await AuthApp.successfulOpen();
    });
});