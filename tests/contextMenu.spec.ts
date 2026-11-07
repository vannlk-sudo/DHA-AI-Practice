import { test, expect } from '../fixtures/contextMenu.fixture';

test.beforeEach(async ({ contextMenuPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/context_menu
  await contextMenuPage.goto();

  // assertion: Verify the browser opened the Context Menu page
  await expect(page).toHaveURL(contextMenuPage.url);
});

test('TC11: Right click - Context menu', async ({ contextMenuPage }) => {
  // step 1: Right click on #hot-spot
  // step 2: Dismiss the alert
  await contextMenuPage.rightClickHotSpot();

  // assertion: Verify alert message "You selected a context menu"
  expect(contextMenuPage.alertMessage).toBe('You selected a context menu');
});
