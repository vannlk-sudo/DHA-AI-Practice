import { test, expect } from '../fixtures/checkboxes.fixture';

test('TC03: Checkboxes - Check to a box', async ({ checkboxesPage, page }) => {
  await checkboxesPage.goto();

  await checkboxesPage.checkCheckbox1();
  await expect(page.getByRole('checkbox').nth(0)).toBeChecked();

  await checkboxesPage.checkCheckbox2();
  await expect(page.getByRole('checkbox').nth(1)).toBeChecked();
});
