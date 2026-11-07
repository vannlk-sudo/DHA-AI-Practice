import { test, expect } from '../fixtures/screenshot.fixture';

test.beforeEach(async ({ screenshotPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/
  await screenshotPage.goto();

  // assertion: Verify the browser opened the home page
  await expect(page).toHaveURL(screenshotPage.url);
});

test.afterEach(async ({ screenshotPage }, testInfo) => {
  // step 4: If the test failed, capture a screenshot named failure-<test-title>.png
  if (testInfo.status === 'failed') {
    await screenshotPage.takeFailureScreenshot(testInfo.title);
  }
});

test('TC23: Screenshot utilities', async ({ screenshotPage }) => {
  // step 1: Take a full-page screenshot and save as screenshot.png
  await screenshotPage.takeFullPageScreenshot();

  // step 2: Take an element-only screenshot of the <h1> and save as element.png
  await screenshotPage.takeHeadingScreenshot();
});

test('TC23: Screenshot utilities - intentional failure', async ({ screenshotPage }) => {
  // step 3: Write a test that fails intentionally
  // assertion: The test still reports as failed
  await expect(screenshotPage.heading).toHaveText('Wrong text');
});
