import { test as base, expect } from '@playwright/test';
import { BrokenImagesPage } from '../pages/BrokenImagesPage';

type Fixtures = {
  brokenImagesPage: BrokenImagesPage;
};

export const test = base.extend<Fixtures>({
  brokenImagesPage: async ({ page }, use) => {
    await use(new BrokenImagesPage(page));
  },
});

export { expect };
