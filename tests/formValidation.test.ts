
import { test, expect } from '@playwright/test';

test('should validate form fields and submit', async ({ page }) => {
  await page.goto('http://localhost:3000'); 
  await page.fill('input#name', 'John Doe');
  await page.fill('input#email', 'invalid-email'); 
  await page.click('button[type="submit"]');

  const emailError = await page.locator('text=Please enter a valid email address');
  await expect(emailError).toBeVisible();

  await page.fill('input#email', 'john@example.com');
  await page.click('button[type="submit"]');

  const successMessage = await page.locator('text=Form submitted successfully');
  await expect(successMessage).toBeVisible();
});
