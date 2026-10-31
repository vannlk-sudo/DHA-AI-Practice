import { test, expect } from '../fixtures/download.fixture';

test('TC12: Download a single file', async ({ downloadPage }) => {
  await downloadPage.goto();

  const downloadedFile = await downloadPage.downloadFile('Jpeg_with_exif.jpeg');

  expect(downloadedFile).toBe('Jpeg_with_exif.jpeg');
});
