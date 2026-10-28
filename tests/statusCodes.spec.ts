import { test, expect } from '../fixtures/statusCodes.fixture';

test('TC06: Hyperlink - Status codes navigation', async ({ statusCodesPage, page }) => {
  await statusCodesPage.goto();

  await statusCodesPage.clickStatusCode('200');
  await expect(page.getByText('200 status code')).toBeVisible();
  await statusCodesPage.clickHere();

  await statusCodesPage.clickStatusCode('301');
  await expect(page.getByText('301 status code')).toBeVisible();
  await statusCodesPage.clickHere();

  await statusCodesPage.clickStatusCode('404');
  await expect(page.getByText('404 status code')).toBeVisible();
  await statusCodesPage.clickHere();

  await statusCodesPage.clickStatusCode('500');
  await expect(page.getByText('500 status code')).toBeVisible();
  await statusCodesPage.clickHere();
});
