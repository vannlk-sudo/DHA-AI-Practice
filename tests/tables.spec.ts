import { test, expect } from '../fixtures/tables.fixture';

test.beforeEach(async ({ tablesPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/tables
  await tablesPage.goto();

  // assertion: Verify the browser opened the Tables page
  await expect(page).toHaveURL(tablesPage.url);
});

test('TC08: Web Table - Validate largest due person from a table', async ({ tablesPage }) => {
  // step 1: Focus on #table1
  // step 2: Extract all rows (firstName, lastName, due amount)
  // step 3: Find the person with the largest due amount
  await tablesPage.findLargestDuePerson();

  // assertion: Verify the person's full name matches the value shown on the page
  await expect(tablesPage.largestDuePersonDueCell()).toHaveText(tablesPage.largestDueText());
});
