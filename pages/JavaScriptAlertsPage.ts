import type { Locator, Page } from '@playwright/test';

export class JavaScriptAlertsPage {
  private readonly page: Page;
  readonly url = 'https://the-internet.herokuapp.com/javascript_alerts';
  readonly jsAlertButton: Locator;
  readonly jsConfirmButton: Locator;
  readonly jsPromptButton: Locator;
  alertMessage = '';

  constructor(page: Page) {
    this.page = page;
    this.jsAlertButton = page.getByRole('button', { name: 'Click for JS Alert' });
    this.jsConfirmButton = page.getByRole('button', { name: 'Click for JS Confirm' });
    this.jsPromptButton = page.getByRole('button', { name: 'Click for JS Prompt' });
  }

  async goto() {
    await this.page.goto(this.url);
  }

  // Click the button. When the alert shows up: save its message, then accept it (click OK)
  async clickJsAlertAndAccept() {
    this.page.once('dialog', (dialog) => {
      this.alertMessage = dialog.message();
      dialog.accept();
    });
    await this.jsAlertButton.click();
  }

  // Click the button. When the confirm shows up: save its message, then dismiss it (click Cancel)
  async clickJsConfirmAndDismiss() {
    this.page.once('dialog', (dialog) => {
      this.alertMessage = dialog.message();
      dialog.dismiss();
    });
    await this.jsConfirmButton.click();
  }

  // Click the button. When the confirm shows up: save its message, then accept it (click OK)
  async clickJsConfirmAndAccept() {
    this.page.once('dialog', (dialog) => {
      this.alertMessage = dialog.message();
      dialog.accept();
    });
    await this.jsConfirmButton.click();
  }

  // Click the button. When the prompt shows up: save its message, type the text, then accept it (click OK)
  async clickJsPromptAndEnter(text: string) {
    this.page.once('dialog', (dialog) => {
      this.alertMessage = dialog.message();
      dialog.accept(text);
    });
    await this.jsPromptButton.click();
  }

  // Result text shown under "Result:", e.g. "You successfully clicked an alert"
  resultText(text: string): Locator {
    return this.page.getByText(text);
  }
}
