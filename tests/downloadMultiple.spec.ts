import { test, expect } from '../fixtures/download.fixture';

test('TC13: Download multiple files', async ({ downloadPage }) => {
  const fileNames = ['doc.txt', 'bb.txt'];

  await downloadPage.goto();

  for (const fileName of fileNames) {
    const downloadedFile = await downloadPage.downloadFile(fileName);
    expect(downloadedFile).toBe(fileName);
  }
});
