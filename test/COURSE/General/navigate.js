import { brotliCompress } from "zlib";
import AuthAppActions from "../../../lib/util/AuthApp/actions.js";
import CourseManagementActions from "../../../lib/util/CourseManagement/actions.js";

const AuthApp = new AuthAppActions();
const CourseManagement = new CourseManagementActions();
var loginFlag = false;

describe('Try to navigate between the main page and a course page', async () => {
    
    beforeEach('Sign in and go to the main page', async () => {
        await AuthApp.open();
        await AuthApp.successfulOpen();
        await AuthApp.navigateToLogin();
        if (loginFlag == false) {
            await AuthApp.loginWithNewAccount();
            loginFlag = true;
        }
        await CourseManagement.successfulNavigateToMainPage();
    });

    it('and back', async () => {
        await CourseManagement.goBackToMainPage();
    })

    it('Back then forward', async () => {
        await CourseManagement.goBackToMainPage();
        await CourseManagement.goForwardToCoursePage();
        await browser.back();
    })

    afterEach('Sign out user', async () => {
        await AuthApp.signOut();
    });
})