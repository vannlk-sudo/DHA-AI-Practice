import type { Locator, Page } from '@playwright/test';

export class ContextMenuPage {
  private readonly page: Page;
  readonly url = 'https://the-internet.herokuapp.com/context_menu';
  readonly hotSpot: Locator;
  alertMessage = '';

  constructor(page: Page) {
    this.page = page;
    // The dashed box (#hot-spot). It has no role, text or label, so getByRole/getByText cannot find it
    this.hotSpot = page.locator('#hot-spot');
  }

  async goto() {
    await this.page.goto(this.url);
  }

  // Right click on the box. When the alert shows up: save its message, then dismiss it
  async rightClickHotSpot() {
    this.page.once('dialog', (dialog) => {
      this.alertMessage = dialog.message();
      dialog.dismiss();
    });
    await this.hotSpot.click({ button: 'right' });
  }
}
