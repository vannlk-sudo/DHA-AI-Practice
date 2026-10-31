import type { Locator, Page } from '@playwright/test';

export class TablesPage {
  private readonly page: Page;
  readonly rows: Locator;

  constructor(page: Page) {
    this.page = page;
    // Data rows of the first table (#table1), header row is skipped
    this.rows = page.getByRole('table').first().getByRole('row').filter({ has: page.getByRole('cell') });
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/tables');
  }

  // Read all rows and find the person with the largest due amount
  async getLargestDuePerson() {
    let largest = { firstName: '', lastName: '', due: 0 };

    for (const row of await this.rows.all()) {
      const cells = row.getByRole('cell');
      const lastName = await cells.nth(0).innerText();
      const firstName = await cells.nth(1).innerText();
      const due = Number((await cells.nth(3).innerText()).replace('$', ''));

      if (due > largest.due) {
        largest = { firstName, lastName, due };
      }
    }

    return largest;
  }

  // Due cell of the row that matches the given first name and last name
  dueCellOf(firstName: string, lastName: string): Locator {
    return this.rows
      .filter({ has: this.page.getByRole('cell', { name: lastName, exact: true }) })
      .filter({ has: this.page.getByRole('cell', { name: firstName, exact: true }) })
      .getByRole('cell')
      .nth(3);
  }
}
