import { test as base, expect } from '@playwright/test';
import { UploadPage } from '../pages/UploadPage';

type Fixtures = {
  uploadPage: UploadPage;
};

export const test = base.extend<Fixtures>({
  uploadPage: async ({ page }, use) => {
    await use(new UploadPage(page));
  },
});

export { expect };
