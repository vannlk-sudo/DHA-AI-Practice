import { test as base, expect } from '@playwright/test';
import { ScreenshotPage } from '../pages/ScreenshotPage';

type Fixtures = {
  screenshotPage: ScreenshotPage;
};

export const test = base.extend<Fixtures>({
  screenshotPage: async ({ page }, use) => {
    await use(new ScreenshotPage(page));
  },
});

export { expect };
