import { browser } from '@wdio/globals';
import { CourseTitles, UriPath, PageTitle, FilterOptions } from './constants.js'

import CourseManagementGetters from "./getters.js";


export default class CourseManagementActions extends CourseManagementGetters {

    async successfulOpen() {
        super.successfulOpen(UriPath);
    }

    async successfulNavigateToMainPage() {
        this.successfulOpen();
        await (await this.getHeading()).waitForDisplayed();
        await expect (await this.getHeading()).toHaveText(PageTitle.WELCOME);
    }

    async changeYearOption(option) {
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await (await this.getFilterByYearButton()).waitForClickable({ timeout: 10000 });
        await (await this.getFilterByYearButton()).click();
        await (await this.getYearOption(option)).waitForDisplayed({ timeout: 10000 });
        await (await this.getYearOption(option)).waitForClickable({ timeout: 10000 });
        await (await this.getYearOption(option)).click();
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
    }

    async filterByYear() {
        await this.changeYearOption(FilterOptions.YearOptions.PREVIOUS);
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.AA);
        await expect (await this.getCourseLink(2)).toHaveTextContaining(CourseTitles.AF);
        await this.changeYearOption(FilterOptions.YearOptions.CURRENT);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.ANNOUNCEMENTS);
    }

    async changeSemesterOption(option) {
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await (await this.getFilterBySemesterButton()).waitForClickable({ timeout: 10000 });
        await (await this.getFilterBySemesterButton()).click();
        await (await this.getSemesterOption(option)).waitForDisplayed({ timeout: 10000 });
        await (await this.getSemesterOption(option)).waitForClickable({ timeout: 10000 });
        await (await this.getSemesterOption(option)).click();
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
    }

    async filterBySemester() {
        await this.changeSemesterOption(FilterOptions.SemesterOptions.FIRST);
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.CC);
        await expect (await this.getCourseLink(2)).toHaveTextContaining(CourseTitles.CAVA);
        await this.changeSemesterOption(FilterOptions.SemesterOptions.ALL);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.ANNOUNCEMENTS);
    }

    async changeProgressStatusOption(option) {
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await (await this.getFilterByProgressStatusButton()).waitForClickable({ timeout: 10000 });
        await (await this.getFilterByProgressStatusButton()).click();
        await (await this.getProgressOption(option)).waitForDisplayed({ timeout: 10000 });
        await (await this.getProgressOption(option)).waitForClickable({ timeout: 10000 });
        await (await this.getProgressOption(option)).click();
    }

    async filterByProgress() {
        await this.changeProgressStatusOption(FilterOptions.ProgressOptions.INPROGRESS);
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.ANNOUNCEMENTS);
        await expect (await this.getCourseLink(2)).toHaveTextContaining(CourseTitles.CC);
        await this.changeProgressStatusOption(FilterOptions.ProgressOptions.ALL);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.ANNOUNCEMENTS);
    }

    async setSearchInput(text) {
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await (await this.getSearchInput()).waitForClickable();
        await (await this.getSearchInput()).click();
        await (await this.getSearchInput()).addValue(text)
        await (await this.getSearchInput()).click();
    }

    async searchCourse() {
        await this.setSearchInput('complexitate');
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.CC);
        await (await this.getClearSearchButton()).waitForClickable();
        await (await this.getClearSearchButton()).click();
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.ANNOUNCEMENTS);
    }

    async accessCourse(n) {
        await (await this.getCourseLink(n)).waitForClickable();
        await (await this.getCourseLink(n)).click();
        await browser.url(UriPath);
    }

    async changeSortCriteria(option) {
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await (await this.getSortButton()).waitForClickable({ timeout: 10000 });
        await (await this.getSortButton()).click();
        await (await this.getSortByAccessOption(option)).waitForDisplayed({ timeout: 10000 });
        await (await this.getSortByAccessOption(option)).waitForClickable({ timeout: 10000 });
        await (await this.getSortByAccessOption(option)).click();
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.ANNOUNCEMENTS);
    }

    async sortCourses() {
        await this.accessCourse(2);
        await this.changeSortCriteria(FilterOptions.SortOptions.ACCESS);
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.CC);
        await this.changeSortCriteria(FilterOptions.SortOptions.TITLE);
    }

    async filterByMultipleCriteria() {
        await this.changeYearOption(FilterOptions.YearOptions.PREVIOUS);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.AA);
        await this.changeSemesterOption(FilterOptions.SemesterOptions.FIRST);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.AA);
        await this.changeProgressStatusOption(FilterOptions.ProgressOptions.PAST);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.AF);
        await this.changeProgressStatusOption(FilterOptions.ProgressOptions.ALL);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.AF);
        await this.changeSemesterOption(FilterOptions.SemesterOptions.ALL);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.AA);
        await this.changeYearOption(FilterOptions.YearOptions.CURRENT);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.ANNOUNCEMENTS);
    }

    async sortSearchCourses() {
        await this.accessCourse(2);
        await this.accessCourse(3);
        await this.changeSortCriteria(FilterOptions.SortOptions.ACCESS);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.CAVA);
        await this.setSearchInput('complexitate');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.CC);
        await this.changeSortCriteria(FilterOptions.SortOptions.TITLE);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.ANNOUNCEMENTS);
    }

    async filterSearchCourses() {
        await this.changeYearOption(FilterOptions.YearOptions.PREVIOUS);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.AA);
        await this.setSearchInput('fundamental');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.AF);
        await this.changeYearOption(FilterOptions.YearOptions.CURRENT);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.ANNOUNCEMENTS);
    }

    async sortFilterCourses() {
        await this.changeSemesterOption(FilterOptions.SemesterOptions.SECOND);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.ESLA);
        await this.setSearchInput('software');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.MFIS);
        await this.changeSemesterOption(FilterOptions.SemesterOptions.ALL);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CourseTitles.ANNOUNCEMENTS);
    }

    async checkSections() {
        await expect (await this.getSectionHeading(0)).toHaveText('General');
        await expect (await this.getSectionHeading(1)).toHaveText('MATERIALE DIDACTICE');
        await expect (await this.getSectionHeading(2)).toHaveText('NOTE DE CURS');
    }

    async checkCourseMenuOptions() {
        await expect (await this.getCourseMenuItem('coursehome')).toHaveTextContaining('Curs');
        await expect (await this.getCourseMenuItem('coursehome')).toBeClickable();
        await expect (await this.getCourseMenuItem('participants')).toHaveTextContaining('Participanți');
        await expect (await this.getCourseMenuItem('participants')).toBeClickable();
        await expect (await this.getCourseMenuItem('grades')).toHaveTextContaining('Note');
        await expect (await this.getCourseMenuItem('grades')).toBeClickable();
    }

    async checkCoursePath() {
        await expect (await this.getCoursePathItem(1)).toHaveText('2022-2023');
        await expect (await this.getCoursePathItem(1)).toBeClickable();
        await expect (await this.getCoursePathItem(2)).toHaveText('Facultatea de Matematică și Informatică');
        await expect (await this.getCoursePathItem(2)).toBeClickable();
        await expect (await this.getCoursePathItem(3)).toHaveText('Studii universitare de licență');
        await expect (await this.getCoursePathItem(3)).toBeClickable();
    }

    async goToCoursePage() {
        await (await this.getCourseLink(2)).waitForClickable();
        await (await this.getCourseLink(2)).click();
        await (await this.getCoursePageHeading()).waitForDisplayed({timeout: 10000});
        await expect (await this.getCoursePageHeading()).toHaveText(CourseTitles.CC);
    }

    async checkCoursePage() {
        await this.goToCoursePage();
        await this.checkSections();
        await this.checkCourseMenuOptions();
        await this.checkCoursePath();
    }

    async goBackToMainPage() {
        await (await this.getHeading()).waitForDisplayed({timeout: 10000});
        await this.goToCoursePage();
        await browser.back();
        await (await this.getHeading()).waitForDisplayed({timeout: 10000});
        await expect (await this.getHeading()).toHaveText(PageTitle.WELCOME);
    }

    async goForwardToCoursePage() {
        await browser.forward();
        await (await this.getCoursePageHeading()).waitForDisplayed({timeout: 10000});
        await expect (await this.getCoursePageHeading()).toHaveText(CourseTitles.CC); 
    }

}