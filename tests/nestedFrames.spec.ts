import { test, expect } from '../fixtures/nestedFrames.fixture';

test.beforeEach(async ({ nestedFramesPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/nested_frames
  await nestedFramesPage.goto();

  // assertion: Verify the browser opened the Nested Frames page
  await expect(page).toHaveURL(nestedFramesPage.url);
});

test('TC24: Frame - Nested frames', async ({ nestedFramesPage }) => {
  // assertion: Verify frame-left displays text "LEFT"
  await expect(nestedFramesPage.textInFrame('frame-left', 'LEFT')).toBeVisible();

  // assertion: Verify frame-middle displays text "MIDDLE"
  await expect(nestedFramesPage.textInFrame('frame-middle', 'MIDDLE')).toBeVisible();

  // assertion: Verify frame-right displays text "RIGHT"
  await expect(nestedFramesPage.textInFrame('frame-right', 'RIGHT')).toBeVisible();

  // assertion: Verify frame-bottom displays text "BOTTOM"
  await expect(nestedFramesPage.textInFrame('frame-bottom', 'BOTTOM')).toBeVisible();
});
