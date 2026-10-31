import { test, expect } from '../fixtures/dragAndDrop.fixture';

test('TC09: Drag & Drop columns', async ({ dragAndDropPage }) => {
  await dragAndDropPage.goto();
  await dragAndDropPage.dragColumnAToColumnB();

  await expect(dragAndDropPage.columnA).toHaveText('B');
});
