import { test, expect } from '../fixtures/contextMenu.fixture';

test('TC11: Right click - Context menu', async ({ contextMenuPage }) => {
  await contextMenuPage.goto();

  const message = await contextMenuPage.rightClickAndGetAlertMessage();

  expect(message).toBe('You selected a context menu');
});
