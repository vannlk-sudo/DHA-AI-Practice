import type { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly url = 'https://the-internet.herokuapp.com/login';
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async fillCredentials(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  // Flash message shown after login, e.g. "You logged into a secure area!"
  message(text: string): Locator {
    return this.page.getByText(text);
  }
}
