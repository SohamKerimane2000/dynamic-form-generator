
import { test, expect } from '@playwright/test';

test('should generate form based on JSON schema', async ({ page }) => {
  await page.goto('http://localhost:3000'); 

  const title = await page.locator('h1');
  await expect(title).toHaveText('Project Requirements Survey');

  const description = await page.locator('p');
  await expect(description).toHaveText('Please fill out this survey about your project needs');

  const fullNameField = await page.locator('input#name');
  await expect(fullNameField).toBeVisible();

  const emailField = await page.locator('input#email');
  await expect(emailField).toBeVisible();
});
