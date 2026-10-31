import type { Locator, Page } from '@playwright/test';

export class BrokenImagesPage {
  private readonly page: Page;
  readonly images: Locator;

  constructor(page: Page) {
    this.page = page;
    this.images = page.getByRole('img');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/broken_images');
  }

  // For each image: read its src, send a GET request to it and keep the status code
  async getImageStatuses() {
    const results = [];

    for (const image of await this.images.all()) {
      const src = await image.getAttribute('src');
      const url = new URL(src!, 'https://the-internet.herokuapp.com/').href;
      const response = await this.page.request.get(url);
      results.push({ src, status: response.status() });
    }

    return results;
  }
}
