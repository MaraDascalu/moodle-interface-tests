import { browser } from "@wdio/globals";
import AuthAppActions from "../../../lib/util/AuthApp/actions.js";
import CourseManagementActions from "../../../lib/util/CourseManagement/actions.js";

const AuthApp = new AuthAppActions();
const CourseManagement = new CourseManagementActions();
var loginFlag = false;

describe('Try to filter and sort the courses from the top of the page', async () => {

    beforeEach('Sign in', async () => {
        await AuthApp.open();
        await AuthApp.successfulOpen();
        await AuthApp.navigateToLogin();
        if (loginFlag == false) {
            await AuthApp.loginWithNewAccount();
            loginFlag = true;
        }
        await CourseManagement.successfulNavigateToMainPage();
    });

    it('Filter the courses by year', async () => {
        await CourseManagement.filterByYear();
    });

    it('Filter the courses by semester', async () => {
        await CourseManagement.filterBySemester();
    });

    it('Filter the courses by progress status', async () => {
        await CourseManagement.filterByProgress();
    });

    it('Filter by multiple criteria', async() => {
        await CourseManagement.filterByMultipleCriteria();
    });

    it('Sort courses by last accesed', async () => {
        await CourseManagement.sortCourses();
    });

    it('Search course', async () => {
        await CourseManagement.searchCourse();
    });

    it('Sort then search', async () => {
        await CourseManagement.sortSearchCourses();
    });

    it('Filter then search', async () => {
        await CourseManagement.filterSearchCourses();
    });

    it('Sort then filter courses', async () => {
        await CourseManagement.sortFilterCourses();
    });

    afterEach('Sign out user', async () => {
        await AuthApp.signOut();
    });
});