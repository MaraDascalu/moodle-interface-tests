import AuthAppActions from "../../../lib/util/AuthApp/actions.js";

const AuthApp = new AuthAppActions();

describe('User should be able to reset', async() => {
   beforeEach('Navigate to login page for Moodle', async () => {
      await AuthApp.open();
      await AuthApp.successfulOpen();
      await AuthApp.navigateToLogin();
   }); 

   it('work email', async() => {
      await AuthApp.resetWorkAccount();
      await AuthApp.successfulOpen("passwordreset.microsoftonline.com");
   })

   it('personal email', async() => {
      await AuthApp.resetPersonalAccount();
      await AuthApp.successfulOpen("account.live.com");
   })

   it('password', async() => {
      await AuthApp.resetPassword();
      await AuthApp.successfulOpen("passwordreset.microsoftonline.com");
   })

});

