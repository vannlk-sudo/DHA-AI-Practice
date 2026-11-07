import type { Locator, Page } from '@playwright/test';

export class ScreenshotPage {
  private readonly page: Page;
  readonly url = 'https://the-internet.herokuapp.com/';
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { level: 1 });
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async takeFullPageScreenshot() {
    await this.page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true });
  }

  async takeHeadingScreenshot() {
    await this.heading.screenshot({ path: 'screenshots/element.png' });
  }

  async takeFailureScreenshot(testTitle: string) {
    await this.page.screenshot({ path: `screenshots/failure-${testTitle}.png` });
  }
}
