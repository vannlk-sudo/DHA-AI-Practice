import { test as base, expect } from '@playwright/test';
import { DownloadPage } from '../pages/DownloadPage';

type Fixtures = {
  downloadPage: DownloadPage;
};

export const test = base.extend<Fixtures>({
  downloadPage: async ({ page }, use) => {
    await use(new DownloadPage(page));
  },
});

export { expect };
