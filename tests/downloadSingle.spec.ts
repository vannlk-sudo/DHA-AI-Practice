import { test, expect } from '../fixtures/download.fixture';

test.beforeEach(async ({ downloadPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/download
  await downloadPage.goto();

  // assertion: Verify the browser opened the File Downloader page
  await expect(page).toHaveURL(downloadPage.url);
});

test('TC12: Download a single file', async ({ downloadPage }) => {
  // step 1: Click on link "Jpeg_with_exif.jpeg"
  // step 2: Save downloaded file to download/Jpeg_with_exif.jpeg
  await downloadPage.downloadFile('Jpeg_with_exif.jpeg');

  // assertion: Verify file exists on local disk
  expect(downloadPage.lastDownloadedFile).toBe('Jpeg_with_exif.jpeg');
});
