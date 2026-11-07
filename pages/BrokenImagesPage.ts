import type { Locator, Page } from '@playwright/test';

export class BrokenImagesPage {
  private readonly page: Page;
  readonly url = 'https://the-internet.herokuapp.com/broken_images';
  readonly images: Locator;
  imageStatuses: { src: string | null; status: number }[] = [];

  constructor(page: Page) {
    this.page = page;
    this.images = page.getByRole('img');
  }

  async goto() {
    await this.page.goto(this.url);
  }

  // For each image: read its src, send a GET request to it and keep the status code
  async checkAllImages() {
    const results = [];

    for (const image of await this.images.all()) {
      const src = await image.getAttribute('src');
      const url = new URL(src!, 'https://the-internet.herokuapp.com/').href;
      const response = await this.page.request.get(url);
      results.push({ src, status: response.status() });
      console.log(`${src} -> ${response.status()}`);
    }

    this.imageStatuses = results;
  }

  // src of every image that did not return status code 200
  brokenImages() {
    return this.imageStatuses.filter((image) => image.status !== 200).map((image) => image.src);
  }
}
