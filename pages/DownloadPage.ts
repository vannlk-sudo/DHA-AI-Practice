import type { Locator, Page } from '@playwright/test';

export class DownloadPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/download');
  }

  // Link of a file in the list, e.g. "Jpeg_with_exif.jpeg"
  fileLink(fileName: string): Locator {
    return this.page.getByRole('link', { name: fileName, exact: true });
  }

  // Click the file link, save the file into the "download" folder and return the downloaded file name
  async downloadFile(fileName: string) {
    const downloadPromise = this.page.waitForEvent('download');
    await this.fileLink(fileName).click();
    const download = await downloadPromise;
    await download.saveAs(`download/${fileName}`);
    return download.suggestedFilename();
  }
}
