import { test, expect } from '../fixtures/checkboxes.fixture';

test('TC03: Checkboxes - Check to a box', async ({ checkboxesPage }) => {
  await checkboxesPage.goto();

  await checkboxesPage.checkCheckbox1();
  await expect(checkboxesPage.checkbox1).toBeChecked();

  await checkboxesPage.checkCheckbox2();
  await expect(checkboxesPage.checkbox2).toBeChecked();
});
