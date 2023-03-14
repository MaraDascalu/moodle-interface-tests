import { LoginHeadingTitle } from "./constants.js";

import AuthAppGetters from "./getters.js";

export default class AuthAppActions extends AuthAppGetters {
    async open() {
        super.open();
    }

    async successfulOpen() {
        super.successfulOpen();
    }

    /**
     * Methods for general actions
     */

    async navigateToLogin () {
        await (await this.getLogiHeading()).waitForDisplayed({ timeout: 30000 });
        await (this.browser).waitUntil(
            async () => (await (await this.getLogiHeading()).toHaveText(LoginHeadingTitle)),
            {
                timeout: 15000
            }
        );
        await (await this.getAuthWithMicrosoftButton()).waitForClickable({ timeout: 30000 });
        await (await this.getAuthWithMicrosoftButton()).click();
    }
}