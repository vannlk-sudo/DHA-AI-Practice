import { test, expect } from '../fixtures/loginPage.fixture';

test.beforeEach(async ({ loginPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/login
  await loginPage.goto();

  // assertion: Verify the browser opened the Login page
  await expect(page).toHaveURL(loginPage.url);
});

test('TC01: Form Authentication - Login successful with valid credentials', async ({ loginPage }) => {
  // step 1: Fill in username with tomsmith
  // step 2: Fill in password with SuperSecretPassword!
  await loginPage.fillCredentials('tomsmith', 'SuperSecretPassword!');

  // step 3: Click on Login button
  await loginPage.clickLogin();

  // assertion: Verify home page appears with message "You logged into a secure area!"
  await expect(loginPage.message('You logged into a secure area!')).toBeVisible();
});

test('TC02: Form Authentication - Login fail with invalid credentials', async ({ loginPage }) => {
  // step 1: Fill in username with toms (invalid)
  // step 2: Fill in password with SuperSecretPassword!
  await loginPage.fillCredentials('toms', 'SuperSecretPassword!');

  // step 3: Click on Login button
  await loginPage.clickLogin();

  // assertion: Verify error flash message appears
  await expect(loginPage.message('Your username is invalid!')).toBeVisible();
});
