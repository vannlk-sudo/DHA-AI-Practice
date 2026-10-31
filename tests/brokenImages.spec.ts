import { test, expect } from '../fixtures/brokenImages.fixture';

test('TC14: Detect broken images', async ({ brokenImagesPage }) => {
  await brokenImagesPage.goto();

  const images = await brokenImagesPage.getImageStatuses();

  for (const image of images) {
    console.log(`${image.src} -> ${image.status}`);
    // Soft check: keep checking the other images even if one is broken
    expect.soft(image.status, `Image "${image.src}" should return 200`).toBe(200);
  }
});
