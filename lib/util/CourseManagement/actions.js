import { browser } from '@wdio/globals';
import { path } from 'chromedriver';
import { AaTitle, AfTitle, Path, CcTitle, CavaTitle, AnnouncementsTitle, SearchedWord } from './constants.js'

import CourseManagementGetters from "./getters.js";


export default class CourseManagementActions extends CourseManagementGetters {

    async successfulOpen() {
        super.successfulOpen(Path);
    }

    async changeYearOption(option) {
        for (let i = 0; i < 3; i++) {
            await (await this.getFilterByYearButton()).waitForClickable({ timeout: 10000 });
            await (await this.getFilterByYearButton()).click();
            await (await this.getYearOption(option)).waitForDisplayed({ timeout: 10000 });
            await (await this.getYearOption(option)).waitForClickable({ timeout: 10000 });
            await (await this.getYearOption(option)).click();
            await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        }
    }

    async filterByYear() {
        await this.changeYearOption('2021-2022');
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AaTitle);
        await expect (await this.getCourseLink(2)).toHaveTextContaining(AfTitle);
        await this.changeYearOption('2022-2023');
    }

    async changeSemesterOption(option) {
        for (let i = 0; i < 3; i++) {
            await (await this.getFilterBySemesterButton()).waitForClickable({ timeout: 10000 });
            await (await this.getFilterBySemesterButton()).click();
            await (await this.getSemesterOption(option)).waitForDisplayed({ timeout: 10000 });
            await (await this.getSemesterOption(option)).waitForClickable({ timeout: 10000 });
            await (await this.getSemesterOption(option)).click();
            await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        }
    }

    async filterBySemester() {
        await this.changeSemesterOption("Semestrul I");
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CcTitle);
        await expect (await this.getCourseLink(2)).toHaveTextContaining(CavaTitle);
        await this.changeSemesterOption("Toate semestrele");
    }

    async changeProgressStatusOption(option) {
        await (await this.getFilterByProgressStatusButton()).waitForClickable({ timeout: 10000 });
        await (await this.getFilterByProgressStatusButton()).click();
        await (await this.getProgressOption(option)).waitForDisplayed({ timeout: 10000 });
        await (await this.getProgressOption(option)).waitForClickable({ timeout: 10000 });
        await (await this.getProgressOption(option)).click();
        await browser.refresh();
    }

    async filterByProgress() {
        await this.changeProgressStatusOption('Show courses in progress');
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AnnouncementsTitle);
        await expect (await this.getCourseLink(2)).toHaveTextContaining(CcTitle);
        await this.changeProgressStatusOption('Show all courses except archived courses');
    }

    async setSearchInput() {
        await (await this.getSearchInput()).waitForClickable();
        await (await this.getSearchInput()).click();
        await (await this.getSearchInput()).addValue(SearchedWord)
        await (await this.getSearchInput()).click();
    }

    async searchCourse() {
        await this.setSearchInput();
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CcTitle);
    }

    async accessCourse() {
        await (await this.getCourseLink(2)).waitForClickable();
        await (await this.getCourseLink(2)).click();
        await browser.url(Path);

    }

    async changeSortCriteria(option) {
        await (await this.getSortButton()).waitForClickable({ timeout: 10000 });
        await (await this.getSortButton()).click();
        await (await this.getSortByAccessOption(option)).waitForDisplayed({ timeout: 10000 });
        await (await this.getSortByAccessOption(option)).waitForClickable({ timeout: 10000 });
        await (await this.getSortByAccessOption(option)).click();
        await browser.refresh();
    }

    async sortCourses() {
        await this.accessCourse();
        await this.changeSortCriteria('lastaccessed');
        await (await this.getCourseLink(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CcTitle);
        await this.changeSortCriteria('title');
    }

}