import { test, expect } from '../fixtures/upload.fixture';

test('TC07: Upload a file', async ({ uploadPage }) => {
  await uploadPage.goto();
  await uploadPage.attachFile('download/bb.txt');
  await uploadPage.clickUpload();

  await expect(uploadPage.uploadedHeading).toBeVisible();
  await expect(uploadPage.uploadedFile('bb.txt')).toBeVisible();
});
