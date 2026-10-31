import type { Locator, Page } from '@playwright/test';

export class UploadPage {
  private readonly page: Page;
  readonly fileInput: Locator;
  readonly uploadButton: Locator;
  readonly uploadedHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fileInput = page.getByRole('button', { name: 'Choose File' });
    this.uploadButton = page.getByRole('button', { name: 'Upload' });
    this.uploadedHeading = page.getByRole('heading', { name: 'File Uploaded!' });
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/upload');
  }

  async attachFile(filePath: string) {
    await this.fileInput.setInputFiles(filePath);
  }

  async clickUpload() {
    await this.uploadButton.click();
  }

  uploadedFile(fileName: string): Locator {
    return this.page.getByText(fileName, { exact: true });
  }
}
