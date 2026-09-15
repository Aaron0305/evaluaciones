---
name: clean-code
description: >-
  Use this skill when auditing, analyzing, reviewing, writing, or refactoring code to enforce Clean Code standards, SOLID design principles, modular architecture, and strict TypeScript patterns in Next.js and React projects.
---

# 🧹 Skill: Clean Code & Refactoring Guide

Esta skill proporciona los protocolos de auditoría, patrones de refactorización y listas de verificación para mantener la base de código limpia, modular y mantenible.

---

## 🔍 Protocolo de Auditoría de Código (Paso a Paso)

Al revisar o refactorizar un archivo o módulo, sigue este procedimiento ordenado:

### 1. Detección de "Code Smells"
* **Componentes Monolíticos (God Components):** ¿El archivo supera las ~120 líneas o realiza más de una tarea? -> *Extraer subcomponentes a `components/`*.
* **Prop Drilling:** ¿Se pasan props a través de más de 2 niveles sin ser usadas directamente? -> *Usar composición (`children`) o Context/Store*.
* **Anidación Excesiva:** ¿Hay más de 2 niveles de anidamiento en `if`, `for` o ternarios? -> *Aplicar Early Returns*.
* **Valores Mágicos:** ¿Existen cadenas o números repetidos sin nombre? -> *Extraer a constantes descriptivas*.
* **Duplicación de Lógica:** ¿Hay fragmentos similares en múltiples archivos? -> *Extraer a utilidades en `src/lib/` o hooks en `src/hooks/`*.

### 2. Validación de Tipos (TypeScript)
* Verificar que no exista ningún `any` explícito ni implícito.
* Asegurar que todas las interfaces y types comiencen con nombres descriptivos en `PascalCase`.
* Validar que los estados de carga, error y éxito estén tipados de forma exhaustiva (discriminated unions).

### 3. Optimización en Next.js (App Router)
* Comprobar que `'use client'` esté presente **únicamente** en componentes que utilicen hooks o listeners del navegador.
* Verificar que los componentes de layout (`Navbar`, `Footer`, contenedores estáticos) permanezcan como Server Components para optimizar el bundle.

---

## ✅ Checklist de Aprobación de Clean Code

Antes de dar por completado cualquier archivo o feature, valida:

- [ ] **Legibilidad:** ¿Cualquier desarrollador nuevo puede entender qué hace el código en menos de 1 minuto?
- [ ] **Nombres Semánticos:** ¿Las funciones describen acciones (`validateEmail`, `submitOrder`) y las variables describen su contenido (`usersList`, `isActive`)?
- [ ] **Responsabilidad Única:** ¿Cada componente hace exactamente una cosa?
- [ ] **Manejo de Errores:** ¿Se manejan escenarios de fallo sin romper la interfaz?
- [ ] **Formato y Consistencia:** ¿Imports organizados (primero paquetes externos, luego alias `@/...`, luego estilos)?

---

## 🛠️ Patrones de Refactorización Frecuentes

### A. Refactorización a Early Returns
```tsx
// ❌ Antes (Anidamiento complejo)
function handleLogin(email: string, pass: string) {
  if (email) {
    if (pass.length >= 6) {
      authenticate(email, pass);
    } else {
      setError("Contraseña corta");
    }
  } else {
    setError("Email requerido");
  }
}

// ✅ Después (Clean Code)
function handleLogin(email: string, pass: string) {
  if (!email) {
    return setError("Email requerido");
  }
  if (pass.length < 6) {
    return setError("Contraseña muy corta");
  }
  return authenticate(email, pass);
}
```

### B. Extracción de Subcomponentes
Si un formulario incluye campos complejos, extraerlos a componentes reutilizables como `InputField.tsx` o `PasswordInput.tsx` manteniendo el componente padre enfocado en la orquestación del submit.
