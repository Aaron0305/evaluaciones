# Directrices de Clean Code & Buenas Prácticas

Estas reglas son de cumplimiento obligatorio para todo el código desarrollado en este proyecto (Next.js, React, TypeScript y Tailwind CSS).

---

## 1. Principios de Diseño
* **Single Responsibility Principle (SRP):** Cada archivo, componente o función debe tener una única razón para cambiar. Si un componente supera las ~120 líneas o maneja más de una responsabilidad, divídelo en subcomponentes modulares.
* **KISS (Keep It Simple, Stupid):** Prioriza soluciones sencillas y directas sobre abstracciones prematuras o sobreingeniería.
* **DRY (Don't Repeat Yourself):** Extrae lógica común a utilidades reutilizables (`src/lib/`) o custom hooks (`src/hooks/`).
* **YAGNI (You Aren't Gonna Need It):** No agregues funcionalidades, props o parámetros que no se requieran inmediatamente.

---

## 2. Estándares de TypeScript
* **Prohibido el uso de `any`:** Usa `unknown` con type guards, tipos genéricos o interfaces/tipos específicos.
* **Tipado de Props obligatorio:** Todo componente debe definir su interfaz de propiedades:
  ```tsx
  interface UserCardProps {
    readonly name: string;
    readonly email: string;
    readonly role?: "admin" | "user";
  }
  ```
* **Tipos de Retorno Claros:** Especifica tipos de retorno en funciones de negocio, Server Actions y Route Handlers.
* **Inmutabilidad:** Usa `readonly` para datos o arrays que no deban mutarse in-place.

---

## 3. Nomenclatura y Semántica
* **Autoexplicativa:** El código debe ser legible sin necesidad de comentarios obvios.
  * ❌ `const d = 5;` | `const flag = true;` | `function handle();`
  * ✅ `const daysUntilExpiration = 5;` | `const isSubmitting = true;` | `function handleUserAuthentication();`
* **Booleanos con prefijo:** Usa `is`, `has`, `should`, `can` (ej. `isLoading`, `hasPermission`).
* **Convención de Nombres de Archivos:**
  * Componentes React: `PascalCase.tsx` (ej. `LoginForm.tsx`, `Navbar.tsx`).
  * Utilidades y hooks: `camelCase.ts` (ej. `formatDate.ts`, `useAuth.ts`).
  * Rutas App Router: `kebab-case` en carpetas (ej. `src/app/recuperar-password/page.tsx`).

---

## 4. Control de Flujo y Estructura
* **Early Returns (Cláusulas de Guarda):** Evita anidamientos profundos de `if/else`. Sal de la función tan pronto como no se cumplan las condiciones previas:
  ```tsx
  // ✅ Recomendado
  if (!isAuthenticated) return <LoginRedirect />;
  if (isLoading) return <LoadingSpinner />;
  return <Dashboard data={data} />;
  ```
* **Manejo Seguro de Errores:** Captura errores con tipos seguros (`error instanceof Error`) y proporciona mensajes comprensibles al usuario.

---

## 5. Arquitectura en Next.js & React
* **Server Components por Defecto:** Los componentes dentro de `src/app/` son Server Components a menos que requieran explícitamente interactividad del navegador (`useState`, `useEffect`, eventos de formulario).
* **Desacoplamiento UI / Lógica:** Mantén la lógica de negocio y llamadas al servidor (Server Actions) separadas de los componentes puramente presentacionales.
* **Imports Limpios:** Utiliza el alias `@/...` en lugar de rutas relativas largas con `../../..`.
