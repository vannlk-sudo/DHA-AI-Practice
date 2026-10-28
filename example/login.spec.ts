import { test, expect } from '@playwright/test';

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
    await expect(dropdown1.locator('option:checked')).toHaveText(['apple', 'banana']);
});

test('Hyperlink', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/status_codes');
    await page.getByRole('link', { name: '200', exact: true }).click();
        await expect(page.locator('#content')).toContainText('200 status code');
    await page.getByRole('link', { name: 'here', exact: true }).click();
    await page.getByRole('link', { name: '301', exact: true }).click();
        await expect(page.locator('#content')).toContainText('301 status code');
    await page.getByRole('link', { name: 'here', exact: true }).click();
    await page.getByRole('link', { name: '404', exact: true }).click();
        await expect(page.locator('#content')).toContainText('404 status code');
    await page.getByRole('link', { name: 'here', exact: true }).click();
     await page.getByRole('link', { name: '500', exact: true }).click();
        await expect(page.locator('#content')).toContainText('500 status code');
});

test ('Upload a file', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const attachfile = 'tests/bb.txt';
    await page.locator('#file-upload').setInputFiles(attachfile);
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.locator('#uploaded-files')).toContainText('bb.txt');
});

test ('Web Table', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/tables');
    const rows = page.locator('#table1 tbody tr');
    let largestDue = 0;
    let largestRow = rows.first();
    let firstNameMax = '';
    let lastNameMax = '';

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const lastName = await row.locator('td').nth(0).innerText();
        const firstName = await row.locator('td').nth(1).innerText();
        const dueText = await row.locator('td').nth(3).innerText();

        const due = parseFloat(dueText.replace('$', ''));
        if (due > largestDue) {
            largestDue = due;
            largestRow = row;
            firstNameMax = firstName;
            lastNameMax = lastName;
        }
    }
    
    await expect(largestRow.locator('td').nth(0)).toHaveText(lastNameMax);
    await expect(largestRow.locator('td').nth(1)).toHaveText(firstNameMax);
    await expect(largestRow.locator('td').nth(3)).toHaveText(`$${largestDue.toFixed(2)}`);
});

test ('Drag & Drop columns', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const columnA = page.locator('#column-a');
    const columnB = page.locator('#column-b');
    await columnA.dragTo(columnB);
    await expect(columnA.locator('header')).toHaveText('B');
    await expect(columnB.locator('header')).toHaveText('A');
});

test('Horizontal Slider', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/horizontal_slider');
    const slider = page.locator('input[type="range"]');
    const value = page.locator('#range');
    await slider.focus();
    while (await value.textContent() !== '3.5') {
        await slider.press('ArrowRight');
    }
    await expect(value).toHaveText('3.5');
});
    
test('Right click', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    const box = page.locator('#hot-spot');
    await box.click({ button: 'right' });
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('You selected a context menu');
        await dialog.accept();
    });
});