import { browser } from '@wdio/globals';
import { AaTitle, AfTitle, Path, CcTitle, CavaTitle, AnnouncementsTitle, MfisTitle, EslaTitle, SearchedWord, HeadingTitle } from './constants.js'

import CourseManagementGetters from "./getters.js";


export default class CourseManagementActions extends CourseManagementGetters {

    async successfulOpen() {
        super.successfulOpen(Path);
        await (await this.getHeading()).waitForDisplayed();
        await expect (await this.getHeading()).toHaveText(HeadingTitle);
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
        await this.changeYearOption('2021-2022');
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AaTitle);
        await expect (await this.getCourseLink(2)).toHaveTextContaining(AfTitle);
        await this.changeYearOption('2022-2023');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AnnouncementsTitle);
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
        await this.changeSemesterOption("Semestrul I");
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CcTitle);
        await expect (await this.getCourseLink(2)).toHaveTextContaining(CavaTitle);
        await this.changeSemesterOption("Toate semestrele");
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AnnouncementsTitle);
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
        await this.changeProgressStatusOption('Show courses in progress');
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AnnouncementsTitle);
        await expect (await this.getCourseLink(2)).toHaveTextContaining(CcTitle);
        await this.changeProgressStatusOption('Show all courses except archived courses');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AnnouncementsTitle);
    }

    async setSearchInput(text) {
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await (await this.getSearchInput()).waitForClickable();
        await (await this.getSearchInput()).click();
        await (await this.getSearchInput()).addValue(text)
        await (await this.getSearchInput()).click();
    }

    async searchCourse() {
        await this.setSearchInput(SearchedWord);
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CcTitle);
    }

    async accessCourse(n) {
        await (await this.getCourseLink(n)).waitForClickable();
        await (await this.getCourseLink(n)).click();
        await browser.url(Path);
    }

    async changeSortCriteria(option) {
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await (await this.getSortButton()).waitForClickable({ timeout: 10000 });
        await (await this.getSortButton()).click();
        await (await this.getSortByAccessOption(option)).waitForDisplayed({ timeout: 10000 });
        await (await this.getSortByAccessOption(option)).waitForClickable({ timeout: 10000 });
        await (await this.getSortByAccessOption(option)).click();
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AnnouncementsTitle);
    }

    async sortCourses() {
        await this.accessCourse(2);
        await this.changeSortCriteria('lastaccessed');
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CcTitle);
        await this.changeSortCriteria('title');
    }

    async filterByMultipleCriteria() {
        await this.changeYearOption('2021-2022');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AaTitle);
        await this.changeSemesterOption('Semestrul I');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AfTitle);
        await this.changeProgressStatusOption('Show past courses');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AfTitle);
        await this.changeProgressStatusOption('Show all courses except archived courses');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AfTitle);
        await this.changeSemesterOption('Toate semestrele');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AaTitle);
        await this.changeYearOption('2022-2023');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AnnouncementsTitle);
    }

    async sortSearchCourses() {
        await this.accessCourse(2);
        await this.accessCourse(3);
        await this.changeSortCriteria('lastaccessed');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CavaTitle);
        await this.setSearchInput(SearchedWord);
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CcTitle);
        await this.changeSortCriteria('title');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AnnouncementsTitle);
    }

    async filterSearchCourses() {
        await this.changeYearOption('2021-2022');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AaTitle);
        await this.setSearchInput('fundamental');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AfTitle);
        await this.changeYearOption('2022-2023');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AnnouncementsTitle);
    }

    async sortFilterCourses() {
        await this.changeSemesterOption('Semestrul II');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(EslaTitle);
        await this.setSearchInput('software');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(MfisTitle);
        await this.changeSemesterOption('Toate semestrele');
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AnnouncementsTitle);
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
        await expect (await this.getCoursePageHeading()).toHaveText(CcTitle);
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
        await expect (await this.getHeading()).toHaveText(HeadingTitle);
    }

    async goForwardToCoursePage() {
        await browser.forward();
        await (await this.getCoursePageHeading()).waitForDisplayed({timeout: 10000});
        await expect (await this.getCoursePageHeading()).toHaveText(CcTitle); 
    }

}