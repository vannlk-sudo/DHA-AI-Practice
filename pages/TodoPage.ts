import type { Locator, Page } from '@playwright/test';

export class TodoPage {
  private readonly page: Page;
  readonly url = 'https://todomvc.com/examples/react/dist/';
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;
  readonly itemsLeft: Locator;
  readonly editInput: Locator;
  readonly clearCompletedButton: Locator;
  readonly toggleAllCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.getByPlaceholder('What needs to be done?');
    // Todo items inside the main list (not the All / Active / Completed filters)
    this.todoItems = page.getByRole('main').getByRole('listitem');
    // Footer counter, e.g. "1 item left!", "0 items left!"
    this.itemsLeft = page.getByText('left!');
    // Input that appears after double-clicking a todo label
    this.editInput = page.getByRole('textbox', { name: 'Edit todo' });
    this.clearCompletedButton = page.getByRole('button', { name: 'Clear completed' });
    // The "❯" checkbox above the list that marks all todos at once
    this.toggleAllCheckbox = page.getByRole('checkbox', { name: 'Toggle All' });
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async reload() {
    await this.page.reload();
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  // Toggle checkbox of the todo item with the given text
  toggleOf(text: string): Locator {
    return this.todoItems.filter({ hasText: text }).getByRole('checkbox');
  }

  async markAsCompleted(text: string) {
    await this.toggleOf(text).check();
  }

  // Todo item with the given text
  todoItemOf(text: string): Locator {
    return this.todoItems.filter({ hasText: text });
  }

  // Hover on the item to show the "×" button, then click it
  async deleteTodo(text: string) {
    await this.todoItemOf(text).hover();
    await this.todoItemOf(text).getByRole('button', { name: 'Delete todo' }).click();
  }

  // Label of the todo item with exactly the given text
  todoLabelOf(text: string): Locator {
    return this.todoItems.getByText(text, { exact: true });
  }

  // Double-click the label to open the edit input, type the new text, then press Enter
  async renameTodo(oldText: string, newText: string) {
    await this.todoLabelOf(oldText).dblclick();
    await this.editInput.fill(newText);
    await this.editInput.press('Enter');
  }

  async clearCompleted() {
    await this.clearCompletedButton.click();
  }

  // Click a filter link at the footer: "All", "Active" or "Completed"
  async filterBy(name: 'All' | 'Active' | 'Completed') {
    await this.page.getByRole('link', { name, exact: true }).click();
  }

  async checkToggleAll() {
    await this.toggleAllCheckbox.check();
  }

  async uncheckToggleAll() {
    await this.toggleAllCheckbox.uncheck();
  }
}
