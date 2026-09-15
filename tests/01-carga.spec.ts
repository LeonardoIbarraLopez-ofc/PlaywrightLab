import { test, expect } from '@playwright/test';

test('La aplicación carga correctamente', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Gestión de Tareas');
  await expect(page.getByRole('heading', { name: 'Gestión de Tareas' })).toBeVisible();
  await expect(page.getByLabel('Nueva tarea')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Agregar' })).toBeVisible();
});