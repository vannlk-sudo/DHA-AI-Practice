import { test, expect } from '../fixtures/todo.fixture';

test.beforeEach(async ({ todoPage, page }) => {
  // Precondition: Navigate to https://todomvc.com/examples/react/dist/
  await todoPage.goto();

  // assertion: Verify the browser opened the TodoMVC page
  await expect(page).toHaveURL(todoPage.url);
});

test('TC15: TodoMVC - Add new todos', async ({ todoPage }) => {
  // step 1: Type "Buy milk" in the input and press Enter
  await todoPage.addTodo('Buy milk');

  // step 2: Type "Buy groceries" in the input and press Enter
  await todoPage.addTodo('Buy groceries');

  // assertion: Verify the list has exactly 2 items
  await expect(todoPage.todoItems).toHaveCount(2);

  // assertion: Verify item texts are ["Buy milk", "Buy groceries"] in order
  await expect(todoPage.todoItems).toHaveText(['Buy milk', 'Buy groceries']);
});

test('TC16: TodoMVC - Mark todo as completed', async ({ todoPage }) => {
  // step 1: Add a todo named "Buy milk"
  await todoPage.addTodo('Buy milk');

  // step 2: Click the toggle checkbox of the "Buy milk" item
  await todoPage.markAsCompleted('Buy milk');

  // assertion: Verify the "Buy milk" toggle is in checked state
  await expect(todoPage.toggleOf('Buy milk')).toBeChecked();

  // assertion: Verify footer shows "0 items left"
  await expect(todoPage.itemsLeft).toContainText('0 items left');
});

test('TC17: TodoMVC - Delete a todo', async ({ todoPage }) => {
  // step 1: Add a todo named "Pay bills"
  await todoPage.addTodo('Pay bills');

  // step 2: Hover on the "Pay bills" item
  // step 3: Click the "×" delete button that appears on hover
  await todoPage.deleteTodo('Pay bills');

  // assertion: Verify "Pay bills" is no longer in the list
  await expect(todoPage.todoItemOf('Pay bills')).toHaveCount(0);
});

test('TC18: TodoMVC - Edit/rename a todo', async ({ todoPage }) => {
  // step 1: Add a todo named "Walk the dog"
  await todoPage.addTodo('Walk the dog');

  // step 2: Double-click on the "Walk the dog" label
  // step 3: Clear the edit input and type "Walk the dog (30 min)"
  // step 4: Press Enter to save
  await todoPage.renameTodo('Walk the dog', 'Walk the dog (30 min)');

  // assertion: Verify the todo label now displays "Walk the dog (30 min)"
  await expect(todoPage.todoLabelOf('Walk the dog (30 min)')).toBeVisible();
});

test('TC19: TodoMVC - Clear completed todos', async ({ todoPage }) => {
  // step 1: Add 3 todos: "Task A", "Task B", "Task C"
  await todoPage.addTodo('Task A');
  await todoPage.addTodo('Task B');
  await todoPage.addTodo('Task C');

  // step 2: Mark "Task B" as completed
  await todoPage.markAsCompleted('Task B');

  // step 3: Mark "Task C" as completed
  await todoPage.markAsCompleted('Task C');

  // step 4: Click "Clear completed" button
  await todoPage.clearCompleted();

  // assertion: Verify only "Task A" remains in the list
  await expect(todoPage.todoItems).toHaveText(['Task A']);

  // assertion: Verify footer shows "1 item left"
  await expect(todoPage.itemsLeft).toContainText('1 item left');
});

test('TC20: TodoMVC - Filter All/Active/Completed', async ({ todoPage }) => {
  // step 1: Add 2 todos: "Alpha", "Beta"
  await todoPage.addTodo('Alpha');
  await todoPage.addTodo('Beta');

  // step 2: Mark "Beta" as completed
  await todoPage.markAsCompleted('Beta');

  // step 3: Click "Active" filter
  await todoPage.filterBy('Active');
  // assertion: Verify only "Alpha" is visible
  await expect(todoPage.todoItems).toHaveText(['Alpha']);

  // step 4: Click "Completed" filter
  await todoPage.filterBy('Completed');
  // assertion: Verify only "Beta" is visible
  await expect(todoPage.todoItems).toHaveText(['Beta']);

  // step 5: Click "All" filter
  await todoPage.filterBy('All');
  // assertion: Verify both "Alpha" and "Beta" are visible
  await expect(todoPage.todoItems).toHaveText(['Alpha', 'Beta']);
});

test('TC21: TodoMVC - Persistence across page refresh', async ({ todoPage }) => {
  // step 1: Add a todo named "Call mom"
  await todoPage.addTodo('Call mom');

  // assertion: Verify "Call mom" appears in the list
  await expect(todoPage.todoLabelOf('Call mom')).toBeVisible();

  // step 2: Reload the page
  await todoPage.reload();

  // assertion: Verify "Call mom" still exists in the list
  await expect(todoPage.todoLabelOf('Call mom')).toBeVisible();
});

test('TC22: TodoMVC - Toggle all', async ({ todoPage }) => {
  // step 1: Add 2 todos: "Task One", "Task Two"
  await todoPage.addTodo('Task One');
  await todoPage.addTodo('Task Two');

  // step 2: Check the "toggle all" checkbox
  await todoPage.checkToggleAll();

  // assertion: Verify footer shows "0 items left"
  await expect(todoPage.itemsLeft).toContainText('0 items left');

  // step 3: Uncheck the "toggle all" checkbox
  await todoPage.uncheckToggleAll();

  // assertion: Verify footer shows "2 items left"
  await expect(todoPage.itemsLeft).toContainText('2 items left');
});
