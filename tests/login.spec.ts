import { test, expect } from '../fixtures/loginPage.fixture';

test('TC01: Form Authentication - Login successful with valid credentials', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.fillCredentials('tomsmith', 'SuperSecretPassword!');
  await loginPage.clickLogin();

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});

test('TC02: Form Authentication - Login fail with invalid credentials', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.fillCredentials('toms', 'invalidPassword');
  await loginPage.clickLogin();

  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});
