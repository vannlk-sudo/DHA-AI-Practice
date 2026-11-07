import { test, expect } from '../fixtures/horizontalSlider.fixture';

test.beforeEach(async ({ horizontalSliderPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/horizontal_slider
  await horizontalSliderPage.goto();

  // assertion: Verify the browser opened the Horizontal Slider page
  await expect(page).toHaveURL(horizontalSliderPage.url);
});

test('TC10: Horizontal Slider - Set value to 3.5', async ({ horizontalSliderPage }) => {
  // step 1: Read current slider value from #range
  await horizontalSliderPage.printCurrentValue();

  // step 2: Press ArrowRight repeatedly until value reaches 3.5
  await horizontalSliderPage.setValue(3.5);

  // assertion: Verify slider value equals 3.5
  await expect(horizontalSliderPage.slider).toHaveValue('3.5');
  await expect(horizontalSliderPage.displayedValue('3.5')).toBeVisible();
});
