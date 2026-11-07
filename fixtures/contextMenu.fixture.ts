import { test as base, expect } from '@playwright/test';
import { ContextMenuPage } from '../pages/ContextMenuPage';

type Fixtures = {
  contextMenuPage: ContextMenuPage;
};

export const test = base.extend<Fixtures>({
  contextMenuPage: async ({ page }, use) => {
    await use(new ContextMenuPage(page));
  },
});

export { expect };
