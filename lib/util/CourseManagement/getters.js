import BasePage from "../BasePage.js";

export default class CourseManagementGetters extends BasePage {

    async getFilterByYearButton() {
        return (await $('//button[@id=\'yeardropdown\']'));
    }

    async getYearOption() {
        return (await $('//a[@aria-label=\'2021-2022\']'));
    }

    async getFilterBySemesterButton() {
        return (await $('//button[@id=\'semester\']'));
    }

    async getSemesterOption() {
        return (await $('//a[@aria-label=\'Semestrul I\']'));
    }

    async getFilterByProgressStatusButton() {
        return (await $('//button[@id=\'groupingdropdown\']'));
    }

    async getProgressOption() {
        return (await $('//a[@aria-label=\'Show courses in progress\']'));
    }

    async getSortButton() {
        return (await $('//button[@id=\'sortingdropdown\']'));
    }

    async getSortByAccessOption() {
        return (await $('//a[@data-pref=\'lastaccessed\']'));
    }

    async getSearchInput() {
        return (await $('//input[@id=\'searchinput\']'));
    }

    async getCourseTitle(n) {
        return (await $(`//span[contains(@class, 'multiline')][${n}]`));
    }

    async getCourseLink(n) {
        return (await $(`(//a[contains(@class, 'coursename')])[${n}]`));
    }

    async getHeading() {
        return (await $('h2'));
    }

}
