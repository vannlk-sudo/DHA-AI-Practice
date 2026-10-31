import { test, expect } from '../fixtures/todo.fixture';

test('TC15: TodoMVC - Add new todos', async ({ todoPage }) => {
  await todoPage.goto();
  await todoPage.addTodo('Buy milk');
  await todoPage.addTodo('Buy groceries');

  await expect(todoPage.todoItems).toHaveCount(2);
  await expect(todoPage.todoItems).toHaveText(['Buy milk', 'Buy groceries']);
});
