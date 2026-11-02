import { test, expect } from '../fixtures/todo.fixture';

test('TC15: TodoMVC - Add new todos', async ({ todoPage }) => {
  await todoPage.goto();
  await todoPage.addTodo('Buy milk');
  await todoPage.addTodo('Buy groceries');

  await expect(todoPage.todoItems).toHaveCount(2);
  await expect(todoPage.todoItems).toHaveText(['Buy milk', 'Buy groceries']);
});

test('TC16: TodoMVC - Mark todo as completed', async ({ todoPage }) => {
  await todoPage.goto();
  await todoPage.addTodo('Buy milk');
  await todoPage.markAsCompleted('Buy milk');

  await expect(todoPage.toggleOf('Buy milk')).toBeChecked();
  await expect(todoPage.itemsLeft).toContainText('0 items left');
});

test('TC17: TodoMVC - Delete a todo', async ({ todoPage }) => {
  await todoPage.goto();
  await todoPage.addTodo('Pay bills');
  await todoPage.deleteTodo('Pay bills');

  await expect(todoPage.todoItemOf('Pay bills')).toHaveCount(0);
});

test('TC18: TodoMVC - Edit/rename a todo', async ({ todoPage }) => {
  await todoPage.goto();
  await todoPage.addTodo('Walk the dog');
  await todoPage.renameTodo('Walk the dog', 'Walk the dog (30 min)');

  await expect(todoPage.todoLabelOf('Walk the dog (30 min)')).toBeVisible();
});

test('TC19: TodoMVC - Clear completed todos', async ({ todoPage }) => {
  await todoPage.goto();
  await todoPage.addTodo('Task A');
  await todoPage.addTodo('Task B');
  await todoPage.addTodo('Task C');

  await todoPage.markAsCompleted('Task B');
  await todoPage.markAsCompleted('Task C');
  await todoPage.clearCompleted();

  await expect(todoPage.todoItems).toHaveText(['Task A']);
  await expect(todoPage.itemsLeft).toContainText('1 item left');
});

test('TC20: TodoMVC - Filter All/Active/Completed', async ({ todoPage }) => {
  await todoPage.goto();
  await todoPage.addTodo('Alpha');
  await todoPage.addTodo('Beta');
  await todoPage.markAsCompleted('Beta');

  await todoPage.filterBy('Active');
  await expect(todoPage.todoItems).toHaveText(['Alpha']);

  await todoPage.filterBy('Completed');
  await expect(todoPage.todoItems).toHaveText(['Beta']);

  await todoPage.filterBy('All');
  await expect(todoPage.todoItems).toHaveText(['Alpha', 'Beta']);
});

test('TC21: TodoMVC - Persistence across page refresh', async ({ todoPage }) => {
  await todoPage.goto();
  await todoPage.addTodo('Call mom');
  await expect(todoPage.todoLabelOf('Call mom')).toBeVisible();

  await todoPage.reload();

  await expect(todoPage.todoLabelOf('Call mom')).toBeVisible();
});

test('TC22: TodoMVC - Toggle all', async ({ todoPage }) => {
  await todoPage.goto();
  await todoPage.addTodo('Task One');
  await todoPage.addTodo('Task Two');

  await todoPage.checkToggleAll();
  await expect(todoPage.itemsLeft).toContainText('0 items left');

  await todoPage.uncheckToggleAll();
  await expect(todoPage.itemsLeft).toContainText('2 items left');
});
