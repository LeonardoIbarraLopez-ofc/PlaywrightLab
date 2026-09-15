import { test, expect } from '@playwright/test';

test('El usuario puede completar y eliminar una tarea', async ({ page }) => {
  await page.goto('/');

  const input = page.getByLabel('Nueva tarea');
  await input.fill('Tarea de prueba');
  await page.getByRole('button', { name: 'Agregar' }).click();

  const task = page.locator('.task').filter({ hasText: 'Tarea de prueba' });
  await task.getByRole('checkbox').check();

  await expect(task).toHaveClass(/completed/);
  await expect(page.locator('#completed-count')).toHaveText('1');

  await task.getByRole('button', { name: 'Eliminar Tarea de prueba' }).click();
  await expect(page.getByText('Tarea de prueba')).toHaveCount(0);
});