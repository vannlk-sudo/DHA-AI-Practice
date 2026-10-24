import { test, expect } from '../fixture/test.fixture';

test('TC01: Form Authentication - Login successful with valid credentials', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});

test('TC02: Form Authentication - Login fail with invalid credentials', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login('toms', 'invalidPassword');

  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});
