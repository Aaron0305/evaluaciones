"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  // Prevent SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-zinc-800/60 cursor-pointer btn-press"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "all 200ms var(--ease-out-expo)",
      }}
      title={isDark ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
      aria-label={isDark ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
    >
      {isDark ? (
        <Sun
          className="h-3.5 w-3.5 text-amber-400"
          style={{
            transition: "transform 300ms var(--ease-out-expo)",
          }}
        />
      ) : (
        <Moon
          className="h-3.5 w-3.5 text-brand-blue"
          style={{
            transition: "transform 300ms var(--ease-out-expo)",
          }}
        />
      )}
    </button>
  );
}
