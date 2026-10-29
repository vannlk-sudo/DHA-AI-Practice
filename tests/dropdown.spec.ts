import { test, expect } from '../fixtures/dropdown.fixture';

test('TC04: Dropdown - Select single option', async ({ dropdownPage }) => {
  await dropdownPage.goto();
  await dropdownPage.selectOption1();

  await expect(dropdownPage.dropdown).toHaveValue('1');
});
