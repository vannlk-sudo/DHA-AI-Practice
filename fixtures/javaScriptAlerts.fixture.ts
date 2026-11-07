import { test as base, expect } from '@playwright/test';
import { JavaScriptAlertsPage } from '../pages/JavaScriptAlertsPage';

type Fixtures = {
  javaScriptAlertsPage: JavaScriptAlertsPage;
};

export const test = base.extend<Fixtures>({
  javaScriptAlertsPage: async ({ page }, use) => {
    await use(new JavaScriptAlertsPage(page));
  },
});

export { expect };
