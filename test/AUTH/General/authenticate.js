import AuthAppActions from "../../../lib/util/AuthApp/actions.js";

const AuthApp = new AuthAppActions();

describe('Login should be unsuccessful for invalid credentials', async() => {
   beforeEach('Navigate to login page for Moodle', async () => {
        await AuthApp.open();
        await AuthApp.successfulOpen();
        await AuthApp.navigateToLogin();
   }); 

   it('for invalid password', async() => {
      await AuthApp.loginWithInvalidPassword();
   })

   it('for invalid email', async () => {
      await AuthApp.loginWithInvalidEmail();
   })
});

describe('Login should be successful for valid credentials', async() => {
   before('Navigate to login page for Moodle', async () => {
        await AuthApp.open();
        await AuthApp.successfulOpen();
        await AuthApp.navigateToLogin();
   }); 

//    it('for existing account', async () => {
//        await AuthApp.loginWithExistingAcc(); 
//    });

   it('for new account', async () => {
    await AuthApp.loginWithNewAccount();
   })
});
