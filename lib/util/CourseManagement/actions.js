import { browser } from '@wdio/globals';
import { AaTitle, AfTitle, Path, CcTitle, CavaTitle } from './constants.js'

import CourseManagementGetters from "./getters.js";


export default class CourseManagementActions extends CourseManagementGetters {

    async successfulOpen() {
        super.successfulOpen(Path);
    }

    async filterByYear() {
        await (await this.getHeading()).waitForDisplayed({ timeout: 10000 });
        await (await this.getFilterByYearButton()).waitForClickable({ timeout: 10000 });
        await (await this.getFilterByYearButton()).click();
        await (await this.getYearOption()).waitForDisplayed({ timeout: 10000 });
        await (await this.getYearOption()).waitForClickable({ timeout: 10000 });
        await (await this.getYearOption()).click();
        await (await this.getCourseTitle(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(AaTitle);
        await expect (await this.getCourseLink(2)).toHaveTextContaining(AfTitle);
    }

    async filterBySemester() {
        await (await this.getHeading()).waitForDisplayed({ timeout: 10000 });
        await (await this.getFilterBySemesterButton()).waitForClickable({ timeout: 10000 });
        await (await this.getFilterBySemesterButton()).click();
        await (await this.getSemesterOption()).waitForDisplayed({ timeout: 10000 });
        await (await this.getSemesterOption()).waitForClickable({ timeout: 10000 });
        await (await this.getSemesterOption()).click();
        await (await this.getCourseTitle(1)).waitForDisplayed({ timeout: 10000 });
        await expect (await this.getCourseLink(1)).toHaveTextContaining(CcTitle);
        await expect (await this.getCourseLink(2)).toHaveTextContaining(CavaTitle);
    }
}