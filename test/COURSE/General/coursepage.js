import AuthAppActions from "../../../lib/util/AuthApp/actions.js";
import CourseManagementActions from "../../../lib/util/CourseManagement/actions.js";

const AuthApp = new AuthAppActions();
const CourseManagement = new CourseManagementActions()

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

});

describe('Try to navigate between the main page and a course page', async () => {
    
    before('Sign in and go to the main page', async () => {
        await AuthApp.open();
        await AuthApp.successfulOpen();
        await AuthApp.navigateToLogin();
        await AuthApp.loginWithNewAccount();
        await CourseManagement.successfulNavigateToMainPage();
    });

    it('and back', async () => {
        await CourseManagement.goBackToMainPage();
    })

    it('Back then forward', async () => {
        await CourseManagement.goBackToMainPage();
        await CourseManagement.goForwardToCoursePage();
    })
})