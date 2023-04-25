import { $ } from "@wdio/globals";
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
        return (await $(`(//a[@role='menuitem'])[${index}]`));
    }

    async getNotificationsPopoverButton() {
        return (await $('//div[contains(@class,\'popover-region-toggle\')]'));
    }

    async getPopover() {
        return (await $('//div[@class=\'popover-region-container\']'));
    }

    async getPopoverHeader() {
        return (await $('//div[@class=\'popover-region-header-container\']'));
    }

    async getPopoverHeaderText() {
        return (await $('//h3[@class=\'popover-region-header-text\']'));
    }

    async getMessageMenuButton() {
        return (await $('//div[@data-region=\'popover-region-messages\']'));
    }

    async getMessageMenu() {
        return (await $('//div[@class=\'message-app\']'));
    }

    async getCloseMessageMenuButton() {
        return (await $('//a[@data-action=\'closedrawer\']'));
    }
}