import { test, expect } from '@playwright/test';

test('El usuario puede crear una tarea', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Nueva tarea').fill('Estudiar Playwright');
  await page.getByRole('button', { name: 'Agregar' }).click();

  await expect(page.getByText('Estudiar Playwright')).toBeVisible();
  await expect(page.locator('#total-count')).toHaveText('1');
});