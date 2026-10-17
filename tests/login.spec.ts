import { test, expect } from '@playwright/test';

test('login', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});

test('login failure', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').fill('toms');
    await page.getByLabel('Password').fill('invalidPassword');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Your username is invalid!')).toBeVisible();
});

test('check a box', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const allCheckboxes = page.locator('input[type="checkbox"]');
    const checkbox1 = allCheckboxes.nth(0);
    const checkbox2 = allCheckboxes.nth(1);
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    await checkbox2.check();
    await expect(checkbox2).toBeChecked();
});

test('Select single option', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('select');
    await dropdown.selectOption('1');
    await expect(dropdown).toHaveValue('1');
});

test(' Select multiple options', async ({page}) => {
    await page.goto('https://output.jsbin.com/osebed/2');
    const dropdown1 = page.locator('select');
        await expect(dropdown1).toBeVisible();
    await dropdown1.selectOption([ 'apple', 'banana' ]);
    await expect(dropdown1.locator('option:checked')).toHaveValues(['apple', 'banana']);
});