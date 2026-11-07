import type { Locator, Page } from '@playwright/test';

export class DropdownPage {
  private readonly page: Page;
  readonly url = 'https://the-internet.herokuapp.com/dropdown';
  readonly dropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdown = page.getByRole('combobox');
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async selectOption1() {
    await this.dropdown.selectOption('1');
  }
}
