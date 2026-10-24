import { test as base, expect } from '@playwright/test';
import { CheckboxesPage } from '../page/CheckboxesPage';
import { LoginPage } from '../page/LoginPage';

type Fixtures = {
  checkboxesPage: CheckboxesPage;
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  checkboxesPage: async ({ page }, use) => {
    await use(new CheckboxesPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect };
