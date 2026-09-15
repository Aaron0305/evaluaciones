---
title: "ADR-003 - Sistema de Diseño Glassmorphism y Double-Bezel"
date: "2026-09-15"
tags: [adr, ui, glassmorphism, double-bezel, apple-design]
status: "Aceptado"
---

# 🏛️ ADR-003 — Sistema de Diseño Glassmorphism y Double-Bezel

## Estado
**Aceptado**

## Contexto
El portal de inicio de sesión de una academia contemporánea debe comunicar modernidad, alta calidad y dinamismo. Las tarjetas planas de fondo blanco sólido (`#ffffff`) generaban una desconexión visual con el fondo animado de ondas fluidas, pareciendo bloques opacos y pesados. Asimismo, un navbar estático con filtros generaba franjas oscuras indeseadas.

## Decisión
Se establecieron dos patrones fundamentales de diseño de alta gama (inspirados en la filosofía de Emil Kowalski y los lineamientos de Apple macOS / visionOS):

1. **Vidrio Esmerilado Translúcido Real (*Glassmorphism*):**
   - Reducción de la opacidad de superficie al `48% - 50%`.
   - Desenfoque de fondo profundo (`backdrop-filter: blur(28px) saturate(190%)`).
   - Resplandor especular interior biselado (`inset 0 1px 1px 0 rgba(255, 255, 255, 0.6)`).
   - De esta manera, el fondo fluido WebGL se trasluce sutilmente por detrás de la tarjeta y los inputs.

2. **Arquitectura Double-Bezel (Bisel Doble):**
   - En lugar de bordes simples grises de 1px, la tarjeta de login se encierra en un chasis exterior biselado (`rounded-[2.2rem] p-[1.5px]`) con degradado de luz blanca translúcida y desenfoque extremo `backdrop-blur-3xl`.

3. **Navbar con Scroll Inteligente:**
   - En reposo superior (`scrollY === 0`): 100% transparente sin corte visual.
   - En desplazamiento (`scrollY > 12`): Se materializa el vidrio esmerilado translúcido, dejando entrever el contenido que se desliza por debajo.

## Consecuencias
- La interfaz luce extremadamente sofisticada, limpia y de nivel de agencia de diseño de clase mundial.
- Se preserva el contraste óptimo y la accesibilidad de lectura del texto y los formularios.

---

## Enlaces Relacionados
- [[04.1 - Sistema de Diseño y Tokens]]
- [[04.2 - Componentes de Interfaz]]
- [[02.3 - Convenciones de Codigo y Clean Code]]
