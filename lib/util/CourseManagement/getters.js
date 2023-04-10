import BasePage from "../BasePage.js";

export default class CourseManagementGetters extends BasePage {

    async getFilterByYearButton() {
        return (await $('//button[@id=\'yeardropdown\']'));
    }

    async getYearOption(option) {
        return (await $(`//a[@aria-label=\'${option}\']`));
    }

    async getFilterBySemesterButton() {
        return (await $('//button[@id=\'semester\']'));
    }

    async getSemesterOption(option) {
        return (await $(`//a[@aria-label=\'${option}\']`));
    }

    async getFilterByProgressStatusButton() {
        return (await $('//button[@id=\'groupingdropdown\']'));
    }

    async getProgressOption(option) {
        return (await $(`//a[@aria-label=\'${option}\']`));
    }

    async getSortButton() {
        return (await $('//button[@id=\'sortingdropdown\']'));
    }

    async getSortByAccessOption(option) {
        return (await $(`//a[@data-pref=\'${option}\']`));
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
        return (await $('//header[@id=\'page-header\']/div/div[2]'));
    }

    async getCoursePageHeading() {
        return (await $('//h1'));
    }

    async getSectionHeading(n) {
        return (await $(`//h3[@id=\'coursecontentsection${n}\']`));
    }

    async getCourseMenuItem(name) {
        return (await $(`//li[@data-key ='${name}']//a`));
    }

    async getCoursePathItem(n) {
        return (await $(`//li[@class='breadcrumb-item'][${n}]//a`));
    }

}
