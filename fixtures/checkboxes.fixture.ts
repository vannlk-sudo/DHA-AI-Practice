import { test as base, expect } from '@playwright/test';
import { CheckboxesPage } from '../pages/CheckboxesPage';

type Fixtures = {
  checkboxesPage: CheckboxesPage;
};

export const test = base.extend<Fixtures>({
  checkboxesPage: async ({ page }, use) => {
    await use(new CheckboxesPage(page));
  },
});

export { expect };
