---
title: "ADR-001 - Elección de Next.js 16 y React 19"
date: "2026-09-15"
tags: [adr, arquitectura, nextjs, react19]
status: "Aceptado"
---

# 🏛️ ADR-001 — Elección de Next.js 16 y React 19

## Estado
**Aceptado**

## Contexto
El portal de **What Time Is It? Idiomas** requiere un rendimiento óptimo de carga inicial, renderizado del lado del servidor (SSR), capacidades de Server Components, optimización automática de imágenes y una arquitectura modular preparada para escalar hacia un sistema integral de gestión académica.

## Decisión
Se adoptó **Next.js 16.3.5** con el **App Router** y **React 19.2.8**, utilizando **Turbopack** como empaquetador de desarrollo.

## Consecuencias

### Positivas
- **Server Components:** El layout raíz y páginas iniciales se resuelven en el servidor, reduciendo el bundle JS inicial que viaja al navegador.
- **Turbopack:** Tiempos de recarga en caliente (*Fast Refresh*) prácticamente instantáneos durante el desarrollo.
- **Soporte Nativo para Metadatos SEO:** Definición estricta de títulos, descripciones y faviconos por ruta.
- **Preparado para el Futuro:** Compatibilidad total con React 19 (Server Actions, `useActionState`, directivas `"use client"`).

### Negativas / Retos
- Requiere especial atención a la hidratación al utilizar bibliotecas del lado del cliente como WebGL y temas dinámicos (`next-themes`), manejándolo adecuadamente mediante flags `mounted` o componentes cliente delimitados.

---

## Enlaces Relacionados
- [[02.1 - Stack Tecnologico]]
- [[ADR-002 - Migracion de Efecto de Fondo a WebGL (OGL)]]
