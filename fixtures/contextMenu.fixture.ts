import { test as base, expect } from '@playwright/test';
import { ContextMenuPage } from '../pages/ContextMenuPage';

type Fixtures = {
  contextMenuPage: ContextMenuPage;
};

export const test = base.extend<Fixtures>({
  // Let getByTestId() find elements by their "id" attribute on this page
  testIdAttribute: 'id',
  contextMenuPage: async ({ page }, use) => {
    await use(new ContextMenuPage(page));
  },
});

export { expect };
