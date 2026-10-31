import type { Locator, Page } from '@playwright/test';

export class ContextMenuPage {
  private readonly page: Page;
  readonly hotSpot: Locator;

  constructor(page: Page) {
    this.page = page;
    // The dashed box (#hot-spot). It has no role or text, so we find it by its id
    this.hotSpot = page.getByTestId('hot-spot');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/context_menu');
  }

  // Right click on the box, read the alert message, then dismiss the alert
  async rightClickAndGetAlertMessage() {
    let message = '';
    this.page.once('dialog', async (dialog) => {
      message = dialog.message();
      await dialog.dismiss();
    });
    await this.hotSpot.click({ button: 'right' });
    return message;
  }
}
