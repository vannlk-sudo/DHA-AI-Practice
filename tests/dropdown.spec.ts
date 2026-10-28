import { test, expect } from '../fixtures/dropdown.fixture';

test('TC04: Dropdown - Select single option', async ({ dropdownPage, page }) => {
  await dropdownPage.goto();
  await dropdownPage.selectOption1();

  await expect(page.getByRole('combobox')).toHaveValue('1');
});
