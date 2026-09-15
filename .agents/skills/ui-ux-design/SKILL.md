---
name: ui-ux-design
description: >-
  Use this skill whenever designing, styling, building, reviewing, or enhancing user interfaces (UI/UX), layouts, components, visual hierarchy, typography, color palettes, and micro-interactions in web applications.
---

# 🎨 Skill: Premium UI/UX & Frontend Design System

Esta skill proporciona los principios, estándares estéticos y directrices de diseño visual de nivel profesional para que las interfaces se sientan modernas, refinadas, fluidas y con acabado de producto digital de alta gama (estilo *Silicon Valley / Linear / Stripe / Apple*).

---

## 🏛️ Los 6 Pilares del Diseño UI/UX Moderno

### 1. Jerarquía Visual y Tipografía
* **Contraste de Pesos y Tamaños:**
  * Titulares: `text-2xl` a `text-4xl` con `font-bold` o `font-extrabold` y espaciado negativo sutil (`tracking-tight`).
  * Subtítulos y textos de soporte: `text-sm` o `text-base` en tonos atenuados (`text-zinc-600 dark:text-zinc-400`).
  * Micro-labels y badges: `text-xs` o `text-[11px]` con `font-semibold` o `uppercase tracking-wider`.
* **Legibilidad:** Alturas de línea cómodas (`leading-relaxed` para párrafos, `leading-tight` para titulares).

### 2. Sistema Cromático y Armonía (Regla 60-30-10)
* **60% Fondo / Base:** 
  * Modo Claro: Blanco roto o gris muy suave (`bg-slate-50`, `bg-zinc-50`).
  * Modo Oscuro: Fondos profundos refinados (`bg-zinc-950`, `bg-[#090d16]`), evitando el negro plano `#000000` que fatiga la vista.
* **30% Superficies / Tarjetas:**
  * Fondos de tarjeta con elevación sutil (`bg-white dark:bg-zinc-900/90`).
  * Bordes elegantes de baja opacidad (`border-zinc-200 dark:border-zinc-800/80`).
* **10% Acento de Marca (Brand Focus):**
  * Colores vibrantes y coherentes (como el Azul Marino Académico `#003E7E` y Rojo `#E11D2A` de What Time Is It?).
  * Reservados para botones principales, indicadores de estado, enlaces activos y badges de relevancia.

### 3. Sistema Espacial y Espaciado (Grid de 4px/8px)
* **Espaciado Consistente:** Usar múltiplos de 4 (Tailwind `p-1`, `p-2`, `p-4`, `p-6`, `p-8`).
* **Espacio en Blanco (*Breathing Room*):** No sobrecargar la pantalla; dejar suficiente separación entre grupos de información (`gap-4`, `gap-6`, `gap-8`).
* **Diseño Responsivo Intencional:** Pensar en móvil primero (`flex-col lg:flex-row`, paddings ajustables `px-4 sm:px-6 lg:px-8`).

### 4. Profundidad, Superficies y Glassmorphism
* **Sombras Multicapa:** Usar sombras suaves y difusas en lugar de sombras duras y oscuras (`shadow-sm`, `shadow-md` con opacidades controladas).
* **Efectos Translúcidos:** `backdrop-blur-md` combinado con fondos `bg-white/80` o `bg-zinc-900/80` en elementos flotantes o barras fijas.
* **Bordes Iluminados:** En modo oscuro, bordes sutiles con iluminación superior (`border-t-white/10`) para generar volumen.

### 5. Micro-Interacciones y Dinamismo
* **Transiciones Fluidas:** Toda interacción debe reaccionar de forma instantánea pero suave:
  * `transition-all duration-200 ease-out`
* **Estados Interactivos Completos:**
  * `:hover`: Elevación ligera (`hover:-translate-y-0.5`), realce de borde (`hover:border-zinc-400 dark:hover:border-zinc-700`) o cambio sutil de luminosidad.
  * `:active`: Efecto de presión táctil (`active:scale-95`).
  * `:focus-visible`: Anillo de enfoque accesible para teclado (`focus-visible:ring-2 focus-visible:ring-offset-2`).
  * `:disabled`: Opacidad reducida (`disabled:opacity-60 disabled:cursor-not-allowed`).
* **Feedback Inmediato:** Spinners de carga integrados, skeletons con pulso suave y alertas dinámicas.

### 6. Accesibilidad (a11y)
* Ratios de contraste WCAG AA (mínimo 4.5:1 para texto estándar).
* Textos descriptivos en atributos `aria-label` para botones que solo contienen iconos.
* Soporte nativo para lectores de pantalla y navegación por teclado (`Tab`).

---

## 📋 Checklist de Evaluación UI/UX (Quality Gate)

Antes de considerar listo un diseño, valida:

- [ ] ¿La interfaz produce una primera impresión moderna, profesional y memorable?
- [ ] ¿Los contrastes son perfectamente legibles tanto en **Modo Claro** como en **Modo Oscuro**?
- [ ] ¿Los botones, inputs y elementos interactivos tienen tamaño adecuado para pulsar con el dedo en pantallas táctiles (mínimo 40px de altura)?
- [ ] ¿Hay coherencia visual con la identidad de marca (logos, mascota y paleta cromática)?
- [ ] ¿Las imágenes están optimizadas en alta resolución y sin pixelación?
