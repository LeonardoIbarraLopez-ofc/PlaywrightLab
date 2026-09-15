import { test, expect } from '@playwright/test';

test('Desafío final: gestión avanzada de tareas', async ({ page }) => {
  // Navegar a la aplicación
  await page.goto('/');

  // 1. Agregar cinco tareas
  const tareas = ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4', 'Tarea 5'];
  for (const tarea of tareas) {
    await page.getByLabel('Nueva tarea').fill(tarea);
    await page.getByRole('button', { name: 'Agregar' }).click();
  }

  // Verificar que el total sea 5
  await expect(page.locator('#total-count')).toHaveText('5');

// 2. Completar dos tareas ('Tarea 1' y 'Tarea 2')
  const item1 = page.locator('li', { hasText: 'Tarea 1' });
  await item1.getByRole('checkbox', { name: 'Completar Tarea 1' }).click();

  const item2 = page.locator('li', { hasText: 'Tarea 2' });
  await item2.getByRole('checkbox', { name: 'Completar Tarea 2' }).click();

  // 3. Eliminar una tarea ('Tarea 3')
  const item3 = page.locator('li', { hasText: 'Tarea 3' });
  await item3.getByRole('button', { name: 'Eliminar Tarea 3' }).click();

  // 4. Verificaciones finales (5 iniciales - 1 eliminada = 4 totales)
  await expect(page.locator('#total-count')).toHaveText('4');
  await expect(page.locator('#completed-count')).toHaveText('2');
  await expect(page.locator('#pending-count')).toHaveText('2');
  await expect(page.getByText('Tarea 3')).toHaveCount(0);
});