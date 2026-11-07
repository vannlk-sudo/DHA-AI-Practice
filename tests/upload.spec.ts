import { test, expect } from '../fixtures/upload.fixture';

test.beforeEach(async ({ uploadPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/upload
  await uploadPage.goto();

  // assertion: Verify the browser opened the Upload page
  await expect(page).toHaveURL(uploadPage.url);
});

test('TC07: Upload a file', async ({ uploadPage }) => {
  // step 1: Attach the file download/bb.txt to the file input
  await uploadPage.attachFile('download/bb.txt');

  // step 2: Click on Upload button
  await uploadPage.clickUpload();

  // assertion: Verify uploaded files list contains "bb.txt"
  await expect(uploadPage.uploadedHeading).toBeVisible();
  await expect(uploadPage.uploadedFile('bb.txt')).toBeVisible();
});
