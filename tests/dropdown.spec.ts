import { test, expect } from '../fixtures/dropdown.fixture';

test.beforeEach(async ({ dropdownPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/dropdown
  await dropdownPage.goto();

  // assertion: Verify the browser opened the Dropdown page
  await expect(page).toHaveURL(dropdownPage.url);
});

test('TC04: Dropdown - Select single option', async ({ dropdownPage }) => {
  // step 1: Select "Option 1"
  await dropdownPage.selectOption1();

  // assertion: Verify "Option 1" is selected
  await expect(dropdownPage.dropdown).toHaveValue('1');
});
