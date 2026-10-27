import type { Page } from '@playwright/test';

export class CheckboxesPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }

  async checkCheckbox1() {
    await this.page.getByRole('checkbox').nth(0).check();
  }

  async checkCheckbox2() {
    await this.page.getByRole('checkbox').nth(1).check();
  }
}
