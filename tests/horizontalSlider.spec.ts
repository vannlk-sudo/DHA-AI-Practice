import { test, expect } from '../fixtures/horizontalSlider.fixture';

test('TC10: Horizontal Slider - Set value to 3.5', async ({ horizontalSliderPage }) => {
  await horizontalSliderPage.goto();

  const startValue = await horizontalSliderPage.getCurrentValue();
  console.log(`Current slider value: ${startValue}`);

  await horizontalSliderPage.setValue(3.5);

  await expect(horizontalSliderPage.slider).toHaveValue('3.5');
  await expect(horizontalSliderPage.displayedValue('3.5')).toBeVisible();
});
