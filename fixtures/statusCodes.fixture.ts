import { test as base, expect } from '@playwright/test';
import { StatusCodesPage } from '../pages/StatusCodesPage';

type Fixtures = {
  statusCodesPage: StatusCodesPage;
};

export const test = base.extend<Fixtures>({
  statusCodesPage: async ({ page }, use) => {
    await use(new StatusCodesPage(page));
  },
});

export { expect };
