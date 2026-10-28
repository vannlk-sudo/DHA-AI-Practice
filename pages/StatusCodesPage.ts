import type { Page } from '@playwright/test';

type StatusCode = '200' | '301' | '404' | '500';

export class StatusCodesPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/status_codes');
  }

  async clickStatusCode(statusCode: StatusCode) {
    await this.page.getByRole('link', { name: statusCode, exact: true }).click();
  }

  async clickHere() {
    await this.page.getByRole('link', { name: 'here', exact: true }).click();
  }
}
