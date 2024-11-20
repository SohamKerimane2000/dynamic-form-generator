
import { test, expect } from '@playwright/test';

test('should display form correctly on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });

  await page.goto('http://localhost:3000');

  const jsonEditor = await page.locator('.json-editor');
  const formContainer = await page.locator('.form-container');

  const jsonEditorBoundingBox = await jsonEditor.boundingBox();
  const formContainerBoundingBox = await formContainer.boundingBox();

  expect(jsonEditorBoundingBox.bottom).toBeLessThan(formContainerBoundingBox.top);
});
