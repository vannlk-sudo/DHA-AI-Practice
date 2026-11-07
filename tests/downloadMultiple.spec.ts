import { test, expect } from '../fixtures/download.fixture';

test.beforeEach(async ({ downloadPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/download
  await downloadPage.goto();

  // assertion: Verify the browser opened the File Downloader page
  await expect(page).toHaveURL(downloadPage.url);
});

test('TC13: Download multiple files', async ({ downloadPage }) => {
  // step 1: Click on the link "doc.txt"
  // step 2: Save downloaded file to download/doc.txt
  await downloadPage.downloadFile('doc.txt');
  // assertion: Verify file exists on local disk
  expect(downloadPage.lastDownloadedFile).toBe('doc.txt');

  // step 3: Click on the link "bb.txt"
  // step 4: Save downloaded file to download/bb.txt
  await downloadPage.downloadFile('bb.txt');
  // assertion: Verify file exists on local disk
  expect(downloadPage.lastDownloadedFile).toBe('bb.txt');
});
