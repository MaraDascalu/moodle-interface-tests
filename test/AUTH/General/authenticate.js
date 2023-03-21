// import { USER } from "../../../config/user.conf";
import AuthAppActions from "../../../lib/util/AuthApp/actions.js";

const AuthApp = new AuthAppActions();

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

// describe('Login should be unsuccessful for invalid credentials', async() => {
//    before('Navigate to login page for Moodle', async () => {
//         await AuthApp.open();
//         await AuthApp.successfulOpen();
//         await AuthApp.navigateToLogin();
//    }); 

// //    it('for existing account', async () => {
// //        await AuthApp.loginWithExistingAcc(); 
// //    });

//    it('for invalid email', async () => {
//       await AuthApp.loginWithInvalidEmail();
//    })

//    // it('for invalid password', async() => {
//    //    await AuthApp.loginWithInvalidPassword();
//    // })

// });

