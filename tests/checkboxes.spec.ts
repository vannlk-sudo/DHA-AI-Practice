import { test, expect } from '../fixtures/checkboxes.fixture';

test.beforeEach(async ({ checkboxesPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/checkboxes
  await checkboxesPage.goto();

  // assertion: Verify the browser opened the Checkboxes page
  await expect(page).toHaveURL(checkboxesPage.url);
});

test('TC03: Checkboxes - Check to a box', async ({ checkboxesPage }) => {
  // step 1: Check on checkbox 1
  await checkboxesPage.checkCheckbox1();

  // assertion: Verify checkbox 1 is checked
  await expect(checkboxesPage.checkbox1).toBeChecked();

  // step 2: Check on checkbox 2
  await checkboxesPage.checkCheckbox2();

  // assertion: Verify checkbox 2 is checked
  await expect(checkboxesPage.checkbox2).toBeChecked();
});
