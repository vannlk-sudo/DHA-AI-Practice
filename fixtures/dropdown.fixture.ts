import { test as base, expect } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage';

type Fixtures = {
  dropdownPage: DropdownPage;
};

export const test = base.extend<Fixtures>({
  dropdownPage: async ({ page }, use) => {
    await use(new DropdownPage(page));
  },
});

export { expect };
