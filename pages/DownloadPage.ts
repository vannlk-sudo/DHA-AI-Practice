import type { Locator, Page } from '@playwright/test';

export class DownloadPage {
  private readonly page: Page;
  readonly url = 'https://the-internet.herokuapp.com/download';
  lastDownloadedFile = '';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }

  // Link of a file in the list, e.g. "Jpeg_with_exif.jpeg"
  fileLink(fileName: string): Locator {
    return this.page.getByRole('link', { name: fileName, exact: true });
  }

  // Click the file link, save the file into the "download" folder and remember its name
  async downloadFile(fileName: string) {
    const downloadPromise = this.page.waitForEvent('download');
    await this.fileLink(fileName).click();
    const download = await downloadPromise;
    await download.saveAs(`download/${fileName}`);
    this.lastDownloadedFile = download.suggestedFilename();
  }
}
