import { test, expect } from '../fixtures/tables.fixture';

test('TC08: Web Table - Validate largest due person from a table', async ({ tablesPage }) => {
  await tablesPage.goto();

  // Find the person with the largest due amount from the table data
  const person = await tablesPage.getLargestDuePerson();
  console.log(`Largest due person: ${person.firstName} ${person.lastName} - $${person.due.toFixed(2)}`);

  // Verify on the page: that person's row shows the largest due amount
  await expect(tablesPage.dueCellOf(person.firstName, person.lastName)).toHaveText(`$${person.due.toFixed(2)}`);
});
