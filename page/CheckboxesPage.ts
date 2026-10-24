import type { Page } from '@playwright/test';

export class CheckboxesPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }

  get checkbox1() {
    return this.page.locator('input[type="checkbox"]').nth(0);
  }

  get checkbox2() {
    return this.page.locator('input[type="checkbox"]').nth(1);
  }

  async checkCheckbox1() {
    await this.checkbox1.check();
  }

  async checkCheckbox2() {
    await this.checkbox2.check();
  }
}