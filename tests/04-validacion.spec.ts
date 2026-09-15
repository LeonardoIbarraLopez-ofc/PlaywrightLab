import { test, expect } from '@playwright/test';

test('No permite agregar una tarea vacía', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Agregar' }).click();

  await expect(page.getByRole('alert')).toHaveText('La tarea no puede estar vacía.');
  await expect(page.locator('.task')).toHaveCount(0);
});