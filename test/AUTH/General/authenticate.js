import AuthAppActions from "../../../lib/util/AuthApp/actions.js";
import MainPage from "../../../lib/util/NavBarApp/actions.js";

const AuthApp = new AuthAppActions();
const WelcomePage = new MainPage();

describe('Login should be unsuccessful for invalid credentials', async() => {
   beforeEach('Navigate to login page for Moodle', async () => {
        await AuthApp.open();
        await AuthApp.successfulOpen();
        await AuthApp.navigateToLogin();
   }); 

   it('for invalid password', async() => {
      await AuthApp.loginWithInvalidPassword();
   })

   it('for invalid domain email', async () => {
      await AuthApp.loginWithInvalidDomainEmail();
   })

   it('for invalid root email', async () => {
      await AuthApp.loginWithInvalidRootEmail();
   })

   it('for inexistent email', async () => {
      await AuthApp.loginWithInexistentEmail();
   })
});

describe('Login should be successful for valid credentials', async() => {
   before('Navigate to login page for Moodle', async () => {
      await AuthApp.open();
      await AuthApp.successfulOpen();
      await AuthApp.navigateToLogin();
   }); 

   it('for new account', async () => {
      await AuthApp.loginWithNewAccount();
   })

   after('Log out current user', async() => {
      await WelcomePage.successfulNavigateToWelcomePage();
      await AuthApp.signOut();
      await AuthApp.successfulOpen();
   })
});
