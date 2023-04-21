import { UriPath, PageTitle } from "../../../lib/util/NavBarApp/constants.js";

import NavBarAppGetters from "./getters.js";

export default class NavBarAppActions extends NavBarAppGetters {
    async successfulOpen(path = UriPath.MAIN) {
        super.successfulOpen(path);
    }

    /**
     * Methods for general actions
     */

    async navigateToMainPage() {
        await (await this.getNavigateToMainPageButton()).waitForDisplayed({ timeout: 10000 });
        await (await this.getNavigateToMainPageButton()).waitForClickable({ timeout: 10000 });
        await (await this.getNavigateToMainPageButton()).click();
    }

    async navigateToPage(index) {
        await (await this.getNavBarMenuItem(index)).waitForDisplayed({ timeout: 10000 });
        await (await this.getNavBarMenuItem(index)).waitForClickable({ timeout: 10000 });
        await (await this.getNavBarMenuItem(index)).click();
    }

    async openNotificationsPopover() {
        await (await this.getNotificationsPopoverButton()).waitForClickable({ timeout: 10000 });
        await (await this.getNotificationsPopoverButton()).click();
        await (await this.getPopover()).waitForDisplayed({ timeout: 10000 });
        await (await this.getPopoverHeader()).waitForDisplayed({ timeout: 10000 });
        expect(await this.getPopoverHeaderText()).toHaveText({ timeout: 10000 });
        
    }

    async openMessageMenu() {
        await (await this.getMessageMenuButton()).waitForClickable({ timeout: 10000 });
        await (await this.getMessageMenuButton()).click();
        await (await this.getMessageMenu()).waitForDisplayed({ timeout: 10000 });
        await (await this.getCloseMessageMenuButton()).waitForClickable({ timeout: 10000 });
        await (await this.getCloseMessageMenuButton()).click();
    }

    /**
     * Helper functions
     */

    async successfulNavigateToWelcomePage() {
        await this.successfulOpen();
        await (await this.getWelcomeMessagePannel()).waitForDisplayed({ timeout: 10000 });
        expect(await this.getWelcomeMessagePannel()).toHaveTextContaining(PageTitle.WELCOME);
    }

    async successfulNavigateToPage(uri, title) {
        await this.successfulOpen(uri);
        await (await this.getPageTitle()).waitForDisplayed({ timeout: 10000 });
        expect(await this.getPageTitle()).toHaveText(title);
    }
}