import type { Locator, Page } from '@playwright/test';

export class DragAndDropPage {
  private readonly page: Page;
  readonly columnA: Locator;
  readonly columnB: Locator;

  constructor(page: Page) {
    this.page = page;
    // Header of each column (#column-a is first, #column-b is second)
    this.columnA = page.getByRole('banner').nth(0);
    this.columnB = page.getByRole('banner').nth(1);
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  }

  async dragColumnAToColumnB() {
    await this.columnA.dragTo(this.columnB);
  }
}
