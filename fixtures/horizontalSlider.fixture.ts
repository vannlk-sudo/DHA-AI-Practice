import { test as base, expect } from '@playwright/test';
import { HorizontalSliderPage } from '../pages/HorizontalSliderPage';

type Fixtures = {
  horizontalSliderPage: HorizontalSliderPage;
};

export const test = base.extend<Fixtures>({
  horizontalSliderPage: async ({ page }, use) => {
    await use(new HorizontalSliderPage(page));
  },
});

export { expect };
