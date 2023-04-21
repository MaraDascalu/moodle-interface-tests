import AuthAppActions from "../../../lib/util/AuthApp/actions.js";
import CourseManagementActions from "../../../lib/util/CourseManagement/actions.js";

const AuthApp = new AuthAppActions();
const CourseManagement = new CourseManagementActions();

describe('Check if the course page is displayed correctly', async () => {

    before('Sign in and go to the main page', async () => {
        await AuthApp.open();
        await AuthApp.successfulOpen();
        await AuthApp.navigateToLogin();
        await AuthApp.loginWithNewAccount();
        await CourseManagement.successfulNavigateToMainPage();
    });

    it('For course accesed from the main page', async () => {
        await CourseManagement.checkCoursePage();
    });

    after('Sign out', async () => {
        await browser.back();
        await AuthApp.signOut();
    });

});
