import type { Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async fillCredentials(username: string, password: string) {
    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Password').fill(password);
  }

  async clickLogin() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
