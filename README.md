# Laboratorio: probar un desarrollo simple con Playwright + Claude

## 1. Requisitos
- Node.js 20+
- Visual Studio Code
- Claude Code
- Internet

## 2. Instalación
Abre esta carpeta en VS Code y ejecuta:

npm install
npx playwright install

## 3. Ejecutar la aplicación
Puedes ejecutar:

npm run serve

Luego abre:
http://127.0.0.1:3000

No es obligatorio iniciar el servidor manualmente para las pruebas: Playwright lo levanta automáticamente mediante `webServer`.

## 4. Ejecutar pruebas
npm test

Con navegador visible:
npm run test:headed

Reporte:
npm run report

## 5. Codegen
Con la aplicación disponible:
npm run codegen

## 6. Claude + Playwright MCP
Con Claude Code instalado:

claude mcp add playwright npx @playwright/mcp@latest

Después:

claude

Prompt inicial:
"Analiza la aplicación local en http://127.0.0.1:3000 utilizando Playwright. Identifica sus funcionalidades y propón casos de prueba."

IMPORTANTE: usa MCP para explorar la aplicación. No inventes elementos que no existan.

## 7. Objetivo pedagógico
Primero comprende la aplicación. Después prueba manualmente. Finalmente utiliza Claude para generar/mejorar las pruebas Playwright.
