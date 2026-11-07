import { test, expect } from '../fixtures/javaScriptAlerts.fixture';

test.beforeEach(async ({ javaScriptAlertsPage, page }) => {
  // Precondition: Navigate to https://the-internet.herokuapp.com/javascript_alerts
  await javaScriptAlertsPage.goto();

  // assertion: Verify the browser opened the JavaScript Alerts page
  await expect(page).toHaveURL(javaScriptAlertsPage.url);
});

test('TC25: JavaScript Alert - Accept alert', async ({ javaScriptAlertsPage }) => {
  // step 1: Click on "Click for JS Alert" button
  // step 2: Accept the alert
  await javaScriptAlertsPage.clickJsAlertAndAccept();

  // assertion: Verify alert message is "I am a JS Alert"
  expect(javaScriptAlertsPage.alertMessage).toBe('I am a JS Alert');

  // assertion: Verify result text "You successfully clicked an alert" is visible
  await expect(javaScriptAlertsPage.resultText('You successfully clicked an alert')).toBeVisible();
});

test('TC26: JavaScript Confirm - Cancel', async ({ javaScriptAlertsPage }) => {
  // step 1: Click on "Click for JS Confirm" button
  // step 2: Dismiss (Cancel) the confirm
  await javaScriptAlertsPage.clickJsConfirmAndDismiss();

  // assertion: Verify confirm message is "I am a JS Confirm"
  expect(javaScriptAlertsPage.alertMessage).toBe('I am a JS Confirm');

  // assertion: Verify result text "You clicked: Cancel" is visible
  await expect(javaScriptAlertsPage.resultText('You clicked: Cancel')).toBeVisible();
});

test('TC27: JavaScript Confirm - OK', async ({ javaScriptAlertsPage }) => {
  // step 1: Click on "Click for JS Confirm" button
  // step 2: Accept (OK) the confirm
  await javaScriptAlertsPage.clickJsConfirmAndAccept();

  // assertion: Verify confirm message is "I am a JS Confirm"
  expect(javaScriptAlertsPage.alertMessage).toBe('I am a JS Confirm');

  // assertion: Verify result text "You clicked: OK" is visible
  await expect(javaScriptAlertsPage.resultText('You clicked: OK')).toBeVisible();
});

test('TC28: JavaScript Prompt - Enter text', async ({ javaScriptAlertsPage }) => {
  // step 1: Click on "Click for JS Prompt" button
  // step 2: Enter text "Hello World" and accept the prompt
  await javaScriptAlertsPage.clickJsPromptAndEnter('Hello World');

  // assertion: Verify prompt message is "I am a JS prompt"
  expect(javaScriptAlertsPage.alertMessage).toBe('I am a JS prompt');

  // assertion: Verify result text "You entered: Hello World" is visible
  await expect(javaScriptAlertsPage.resultText('You entered: Hello World')).toBeVisible();
});
