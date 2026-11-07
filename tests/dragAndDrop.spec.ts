import { test, expect } from '../fixtures/dragAndDrop.fixture';

test.beforeEach(async ({ dragAndDropPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/drag_and_drop
  await dragAndDropPage.goto();

  // assertion: Verify the browser opened the Drag and Drop page
  await expect(page).toHaveURL(dragAndDropPage.url);
});

test('TC09: Drag & Drop columns', async ({ dragAndDropPage }) => {
  // step 1: Drag #column-a onto #column-b
  await dragAndDropPage.dragColumnAToColumnB();

  // assertion: Verify #column-a now shows text "B"
  await expect(dragAndDropPage.columnA).toHaveText('B');
});
