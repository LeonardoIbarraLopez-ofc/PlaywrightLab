import { test, expect } from '@playwright/test';

test('Desafío: administrar varias tareas', async ({ page }) => {
  await page.goto('/');

  const input = page.getByLabel('Nueva tarea');
  const tasks = ['Aprender IA', 'Aprender Playwright', 'Crear pruebas'];

  for (const name of tasks) {
    await input.fill(name);
    await input.press('Enter');
  }

  await expect(page.locator('.task')).toHaveCount(3);

  const playwrightTask = page.locator('.task').filter({ hasText: 'Aprender Playwright' });
  await playwrightTask.getByRole('checkbox').check();

  const aiTask = page.locator('.task').filter({ hasText: 'Aprender IA' });
  await aiTask.getByRole('button', { name: 'Eliminar Aprender IA' }).click();

  await expect(page.locator('.task')).toHaveCount(2);
  await expect(page.getByText('Aprender Playwright')).toBeVisible();
  await expect(page.getByText('Crear pruebas')).toBeVisible();
  await expect(page.getByText('Aprender IA')).toHaveCount(0);
});