import type { Locator, Page } from '@playwright/test';

type StatusCode = '200' | '301' | '404' | '500';

export class StatusCodesPage {
  private readonly page: Page;
  readonly url = 'https://the-internet.herokuapp.com/status_codes';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async clickStatusCode(statusCode: StatusCode) {
    await this.page.getByRole('link', { name: statusCode, exact: true }).click();
  }

  async clickHere() {
    await this.page.getByRole('link', { name: 'here', exact: true }).click();
  }

  // Text on the status code page, e.g. "200 status code"
  message(text: string): Locator {
    return this.page.getByText(text);
  }
}
