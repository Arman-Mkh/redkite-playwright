import { expect, Page } from "@playwright/test";

export class redkiteHomePage {
    private page: Page;
    private aboutusButton;
  
    constructor(page: Page) {
      this.page = page;
      this.aboutusButton = this.page.locator('a[href="/en/about"]')
      
    }

    async navigateToTheAboutusPage() {
        await this.aboutusButton.click()
    }
}


