import type { Locator, Page } from '@playwright/test';

export class HorizontalSliderPage {
  private readonly page: Page;
  readonly slider: Locator;

  constructor(page: Page) {
    this.page = page;
    this.slider = page.getByRole('slider');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/horizontal_slider');
  }

  async getCurrentValue() {
    return Number(await this.slider.inputValue());
  }

  // Press ArrowRight until the slider reaches the target value
  async setValue(target: number) {
    while ((await this.getCurrentValue()) < target) {
      await this.slider.press('ArrowRight');
    }
  }

  // The number shown next to the slider (#range)
  displayedValue(value: string): Locator {
    return this.page.getByText(value, { exact: true });
  }
}
