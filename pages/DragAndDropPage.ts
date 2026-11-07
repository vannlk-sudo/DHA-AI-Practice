import type { Locator, Page } from '@playwright/test';

export class DragAndDropPage {
  private readonly page: Page;
  readonly url = 'https://the-internet.herokuapp.com/drag_and_drop';
  readonly columnA: Locator;
  readonly columnB: Locator;

  constructor(page: Page) {
    this.page = page;
    // The columns have no role, and their text ("A"/"B") swaps after dragging,
    // so getByRole/getByText cannot find them reliably
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async dragColumnAToColumnB() {
    await this.columnA.dragTo(this.columnB);
  }
}
