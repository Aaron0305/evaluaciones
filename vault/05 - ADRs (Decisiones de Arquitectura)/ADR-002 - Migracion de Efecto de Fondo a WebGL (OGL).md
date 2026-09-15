---
title: "ADR-002 - Migración de Efecto de Fondo a WebGL (OGL)"
date: "2026-09-15"
tags: [adr, webgl, ogl, shaders, rendimiento]
status: "Aceptado"
---

# 🏛️ ADR-002 — Migración de Efecto de Fondo a WebGL (OGL)

## Estado
**Aceptado**

## Contexto
El diseño original del portal intentó renderizar ondas boreales mediante elementos `div` de CSS con degradados lineales, animaciones `@keyframes` y filtros `blur(30px)`. 

### Problemas encontrados con CSS:
1. **Pérdida de Visibilidad:** El desenfoque CSS sobre fondo claro dispersaba tanto la luz que las ondas se volvían invisibles o parecían manchas estáticas.
2. **Incapacidad de Recrear Pliegues y Telas:** CSS no puede calcular las fórmulas trigonométricas de deformación fluida continua sin provocar repintados pesados en el hilo principal (*main thread*).
3. **Cortes Horizontales:** Los intentos con trazados simples producían franjas duras y líneas que cortaban la composición.

## Decisión
Se decidió instalar **OGL** (`pnpm add ogl`) y adoptar el shader WebGL **`Iridescence`**, compilando el cálculo de ondas líquidas directamente en la GPU mediante shaders GLSL de vértices y fragmentos.

## Consecuencias

### Positivas
- **60 FPS Constantes:** La GPU procesa cada píxel en paralelo sin consumir recursos del hilo principal de la CPU.
- **Fluidez Matemática:** 8 octavas armónicas trigonométricas (`cos`, `sin`) generan pliegues orgánicos y continuos.
- **Control Preciso del Color:** El vector `uColor` permite inyectar con exactitud matemática los tonos de azul, cian y esmeralda de la escuela.
- **Ligereza:** OGL pesa menos de 30KB minificado, en comparación con los 600KB+ de alternativas como Three.js.

---

## Enlaces Relacionados
- [[02.1 - Stack Tecnologico]]
- [[04.3 - Shaders y Efectos Visuales (Iridescence)]]
- [[ADR-001 - Eleccion de Next.js y React 19]]
