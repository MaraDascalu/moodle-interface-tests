import AuthAppActions from "../../../lib/util/AuthApp/actions.js";

const AuthApp = new AuthAppActions();

describe('User should be able to reset', async() => {
   beforeEach('Navigate to login page for Moodle', async () => {
      await AuthApp.open();
      await AuthApp.successfulOpen();
      await AuthApp.navigateToLogin();
   }); 

   it('work email', async() => {
      await AuthApp.workAccount();
      await AuthApp.successfulOpen("passwordreset.microsoftonline.com");
   })

   it('personal email', async() => {
      await AuthApp.personalAccount();
      await AuthApp.successfulOpen("account.live.com");
   })
});

