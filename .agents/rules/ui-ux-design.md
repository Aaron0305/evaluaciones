# Reglas de Diseño UI/UX y Estética Visual

Estas directrices son de cumplimiento continuo para todo el diseño frontend, maquetación y estilizado de la aplicación.

---

## 1. Estándares Visuales Obligatorios
* **Acabado Premium:** Prohibido crear interfaces planas, anticuadas o genéricas. Todo componente debe lucir moderno, con bordes redondeados armónicos (`rounded-xl` o `rounded-2xl`), sombras suaves y contrastes refinados.
* **Soporte Dual Completo:** Todo componente debe verse impecable tanto en **Modo Claro** como en **Modo Oscuro**, usando las clases `dark:` correspondientes.
* **Paleta 60-30-10:**
  * 60% Fondos neutros (`bg-slate-50` / `bg-zinc-950`).
  * 30% Superficies de tarjetas (`bg-white` / `bg-zinc-900`).
  * 10% Color de acento de marca (Azul `#003E7E`, Rojo `#E11D2A`).

---

## 2. Interactividad y Estados
* **Botones e Inputs:** Deben incluir siempre estilos para:
  * `:hover` (cambio de brillo o elevación sutil).
  * `:focus-visible` (anillo de enfoque visible para accesibilidad).
  * `:disabled` (opacidad y cursor no permitido).
  * `:active` (micro-presión).
* **Transiciones Suaves:** Añadir `transition-all duration-200` a elementos interactivos para evitar cambios bruscos.

---

## 3. Coherencia de Marca
* Respetar las dimensiones y proporciones de los logotipos oficiales y la mascota, utilizando siempre renderizado nítido (`unoptimized` y `priority` cuando corresponda).
* Mantener alineados los tonos azules y rojos representativos de **What Time Is It? Idiomas**.
