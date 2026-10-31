import { test as base, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

type Fixtures = {
  todoPage: TodoPage;
};

export const test = base.extend<Fixtures>({
  todoPage: async ({ page }, use) => {
    await use(new TodoPage(page));
  },
});

export { expect };
