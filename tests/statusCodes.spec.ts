import { test, expect } from '../fixtures/statusCodes.fixture';

test.beforeEach(async ({ statusCodesPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/status_codes
  await statusCodesPage.goto();

  // assertion: Verify the browser opened the Status Codes page
  await expect(page).toHaveURL(statusCodesPage.url);
});

test('TC06: Hyperlink - Status codes navigation', async ({ statusCodesPage }) => {
  // step 1: Click on "200"
  await statusCodesPage.clickStatusCode('200');
  // assertion: Verify "200 status code" page appears
  await expect(statusCodesPage.message('200 status code')).toBeVisible();
  // step 2: Click on "here"
  await statusCodesPage.clickHere();

  // step 3: Click on "301"
  await statusCodesPage.clickStatusCode('301');
  // assertion: Verify "301 status code" page appears
  await expect(statusCodesPage.message('301 status code')).toBeVisible();
  // step 4: Click on "here"
  await statusCodesPage.clickHere();

  // step 5: Click on "404"
  await statusCodesPage.clickStatusCode('404');
  // assertion: Verify "404 status code" page appears
  await expect(statusCodesPage.message('404 status code')).toBeVisible();
  // step 6: Click on "here"
  await statusCodesPage.clickHere();

  // step 7: Click on "500"
  await statusCodesPage.clickStatusCode('500');
  // assertion: Verify "500 status code" page appears
  await expect(statusCodesPage.message('500 status code')).toBeVisible();
  // step 8: Click on "here"
  await statusCodesPage.clickHere();
});
