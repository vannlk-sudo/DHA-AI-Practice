import type { Page } from '@playwright/test';

export class DropdownPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/dropdown');
  }

  async selectOption1() {
    await this.page.getByRole('combobox').selectOption('1');
  }
}

