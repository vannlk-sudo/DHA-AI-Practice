import { test as base, expect } from '@playwright/test';
import { NestedFramesPage } from '../pages/NestedFramesPage';

type Fixtures = {
  nestedFramesPage: NestedFramesPage;
};

export const test = base.extend<Fixtures>({
  nestedFramesPage: async ({ page }, use) => {
    await use(new NestedFramesPage(page));
  },
});

export { expect };
