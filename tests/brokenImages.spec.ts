import { test, expect } from '../fixtures/brokenImages.fixture';

test.beforeEach(async ({ brokenImagesPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/broken_images
  await brokenImagesPage.goto();

  // assertion: Verify the browser opened the Broken Images page
  await expect(page).toHaveURL(brokenImagesPage.url);
});

test('TC14: Detect broken images', async ({ brokenImagesPage }) => {
  // step 1: Get all <img> elements on the page
  // step 2: For each image, read its src attribute
  // step 3: Send HTTP GET request to https://the-internet.herokuapp.com/<src>
  await brokenImagesPage.checkAllImages();

  // assertion: Verify each response returns status code 200 (no broken images)
  expect(brokenImagesPage.brokenImages()).toEqual([]);
});
