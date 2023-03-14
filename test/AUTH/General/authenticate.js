// import { USER } from "../../../config/user.conf";
import AuthAppActions from "../../../lib/util/AuthApp/actions.js";

const AuthApp = new AuthAppActions();

suite('Login shoul be successful for valid credentials', async() => {
   before('Navigate to login page for Moodle', async () => {
        await AuthApp.open();
        await AuthApp.successfulOpen();
        await AuthApp.navigateToLogin();
   }); 

   test('dummy test', async () => {
        console.log("It is working!!!");
   });

});