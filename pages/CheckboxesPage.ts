import type { Locator, Page } from '@playwright/test';

export class CheckboxesPage {
  private readonly page: Page;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox1 = page.getByRole('checkbox').nth(0);
    this.checkbox2 = page.getByRole('checkbox').nth(1);
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }

  async checkCheckbox1() {
    await this.checkbox1.check();
  }

  async checkCheckbox2() {
    await this.checkbox2.check();
  }
}
