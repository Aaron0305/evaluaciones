---
title: "Bitácora - 2026-09-14 / 2026-09-15: Creación y Refinamiento del Portal"
date: "2026-09-15"
tags: [bitacora, desarrollo, iteraciones, historial]
---

# 📝 Bitácora de Desarrollo — Sesión Inicial

Registro cronológico detallado de las solicitudes del usuario, desafíos técnicos y soluciones implementadas en el portal de **What Time Is It? Idiomas**.

---

## 1. Cronología de Solicitudes y Cambios

### Fase 1: Creación del Proyecto e Instalación de Skills
- Creación del proyecto en Next.js 16 con App Router, TypeScript y Tailwind CSS.
- Instalación de skills de diseño: `clean-code`, `ui-ux-design`, `apple-design`, `animate`, `emil-design-eng`, `high-end-visual-design`.
- Integración de logotipo institucional y mascota animada con aura LED giratoria.

### Fase 2: Definición de Paleta de Colores
- Se definieron los colores institucionales: Azul Marino (`#003E7E`), Azul Vibrante (`#0E56A8`), Rojo Vivo (`#E11D2A`) y Oro Cálido (`#FFB703`).
- Implementación de `ThemeToggle` y soporte completo para modo claro y oscuro con `next-themes`.

### Fase 3: Desafío de las Auroras Boreales en el Fondo
- **Intento 1 (CSS Grid & Orbes):** Descartado por el usuario (se veían círculos y cuadrados artificiales).
- **Intento 2 (CSS Gradients con Blur):** Invisible sobre fondo claro debido a la dispersión de luz del filtro `blur(30px)`.
- **Intento 3 (SVG Displacement Maps):** Franjas de color demasiado densas que generaban líneas duras cruzando la pantalla.

### Fase 4: Solución Definitiva con Shader WebGL (OGL)
- El usuario solicitó incorporar el componente `Iridescence` basado en **OGL**.
- Se ejecutó `pnpm add ogl`.
- Se creó `Iridescence.tsx` con soporte para React 19 y actualización dinámica de uniforms sin fugas de contexto WebGL.
- **Regla Estricta:** Se eliminó cualquier tono amarillo en el fondo, manteniendo la armonía de azules institucionales, cian ártico y verde azulado esmeralda.
- Desactivación de la interacción con el mouse (`mouseReact={false}`) para que el cursor no afecte el flujo sereno de las ondas.
- Calibración del impacto visual a una velocidad `speed={0.85}` y opacidad balanceada (`0.56` en claro / `0.95` en oscuro).

### Fase 5: Rediseño del Navbar y Glassmorphism en Iniciar Sesión
- **Navbar:** Se convirtió en scroll-aware (`isScrolled`). En reposo es 100% transparente para no cortar el fondo con franjas oscuras; al hacer scroll activa un vidrio esmerilado translúcido donde el login se ve deslizarse por debajo.
- **Tarjeta de Login:** Se transformó el bloque blanco sólido en un panel de cristal esmerilado translúcido con desenfoque de `28px` y bisel doble, permitiendo ver las ondas del fondo fluyendo sutilmente por detrás.

### Fase 6: Adaptación Responsiva Móvil y Marca de Agua de Mascota
- **Ocultamiento de Columna en Móvil:** En pantallas pequeñas (`< lg`), la columna izquierda de la mascota se oculta (`hidden lg:flex`) para que el formulario de inicio de sesión no sea empujado hacia abajo ni requiera scroll vertical forzado.
- **Mascota Translúcida en el Fondo del Login (Móvil Únicamente):** Se integró la mascota dentro de la tarjeta de inicio de sesión de forma translúcida (`opacity-[0.16]` claro / `0.20` oscuro) con máscara de desvanecido inferior degradado (`mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 15%, rgba(0,0,0,0.65) 48%, rgba(0,0,0,0.15) 75%, transparent 95%)`).
- **Seguridad de Capas e Interacción:** La marca de agua tiene `pointer-events-none z-0 lg:hidden`, mientras que inputs, botones y textos se mantienen en `relative z-10` con legibilidad y contraste óptimos.
- **Optimización de Ergonomía Móvil:** Espaciado y padding ajustados (`p-5 sm:p-9`, `space-y-4 sm:space-y-5`) cumpliendo con las áreas mínimas de pulsación táctil (48px de alto).

---

## 2. Estado Actual del Sistema
- ✅ Servidor de desarrollo corriendo de forma estable en `http://localhost:3000`.
- ✅ Cero errores de TypeScript (`npx tsc --noEmit` exit code 0).
- ✅ PostCSS / CSS de Tailwind v4 validado sin sintaxis rota.
- ✅ Repositorio Git inicializado y sincronizado con GitHub (`Aaron0305/evaluaciones`).

---

## 3. Enlaces Relacionados
- [[02.1 - Stack Tecnologico]]
- [[04.2 - Componentes de Interfaz]]
- [[04.3 - Shaders y Efectos Visuales (Iridescence)]]
