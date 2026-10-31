import type { Locator, Page } from '@playwright/test';

export class TodoPage {
  private readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.getByPlaceholder('What needs to be done?');
    // Todo items inside the main list (not the All / Active / Completed filters)
    this.todoItems = page.getByRole('main').getByRole('listitem');
  }

  async goto() {
    await this.page.goto('https://todomvc.com/examples/react/dist/');
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }
}
