import { test as base, expect } from '@playwright/test';
import { DragAndDropPage } from '../pages/DragAndDropPage';

type Fixtures = {
  dragAndDropPage: DragAndDropPage;
};

export const test = base.extend<Fixtures>({
  dragAndDropPage: async ({ page }, use) => {
    await use(new DragAndDropPage(page));
  },
});

export { expect };
