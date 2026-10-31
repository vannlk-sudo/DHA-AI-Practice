import { test as base, expect } from '@playwright/test';
import { TablesPage } from '../pages/TablesPage';

type Fixtures = {
  tablesPage: TablesPage;
};

export const test = base.extend<Fixtures>({
  tablesPage: async ({ page }, use) => {
    await use(new TablesPage(page));
  },
});

export { expect };
