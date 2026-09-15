"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Iridescence from "./Iridescence";

/**
 * AnimatedBackground with OGL Iridescence Shader
 *
 * Uses the WebGL Iridescence shader requested by the user,
 * configured with the school's brand palette (Deep Royal Blue, Aurora Cyan, and Emerald Teal),
 * avoiding default greys/yellows while responding gracefully to mouse interactions.
 */
export default function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  // Refined palette: deeper contrast and luminous highlights
  // (Deep Brand Blue, Royal Blue, Aurora Cyan, Emerald Teal - strictly NO yellow)
  const color: [number, number, number] = isDark
    ? [0.10, 0.68, 1.0]
    : [0.05, 0.48, 0.92];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 
        WebGL Iridescence Liquid Waves Engine (OGL)
        Refined presence: impactful yet discreet and harmonious
      */}
      <Iridescence
        color={color}
        mouseReact={false}
        amplitude={0.1}
        speed={0.85}
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: isDark ? 0.95 : 0.56,
          transition: "opacity 400ms ease",
        }}
      />

      {/* Analog film grain overlay for anti-banding */}
      <div className="noise-overlay" />
    </div>
  );
}
