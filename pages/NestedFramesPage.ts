import type { Locator, Page } from '@playwright/test';

export class NestedFramesPage {
  private readonly page: Page;
  readonly url = 'https://the-internet.herokuapp.com/nested_frames';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }

  // Text inside a frame, found by the frame's name, e.g. textInFrame('frame-left', 'LEFT')
  textInFrame(frameName: string, text: string): Locator {
    return this.page.frame(frameName)!.getByText(text);
  }
}
