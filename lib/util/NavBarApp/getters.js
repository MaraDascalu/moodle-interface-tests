import BasePage from "../BasePage.js";

export default class NavBarAppGetters extends BasePage {

    /**
     * Selectors - NAVIGATION-MENU General
     */

    async getPageTitle() {
        return (await $('//h1[@class=\'h2\']'));
    }

    async getWelcomeMessagePannel() {
        return (await $('//h2'));
    }

    async getNavigateToMainPageButton() {
        return (await $('//img[contains(@class, \'logo\')]'));
    }

    async getNavBarMenuItem(index) {
        return (await $(`(//a[@role='menuitem'])[${index}]`))
    }
 
}