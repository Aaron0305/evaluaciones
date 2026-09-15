"use client";

import { useEffect, useRef } from "react";

/**
 * Realistic Aurora Borealis background using brand palette colors.
 * Creates curtain-like ribbons that undulate like real northern lights.
 * GPU-composited: only transform + opacity are animated.
 */
export default function AnimatedBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const count = 15;

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      const size = Math.random() * 3 + 1.5;
      const delay = Math.random() * 20;
      const duration = Math.random() * 12 + 16;
      const x = Math.random() * 100;
      const colors = [
        "rgba(0,62,126,0.5)",
        "rgba(225,29,42,0.4)",
        "rgba(255,183,3,0.45)",
        "rgba(14,86,168,0.4)",
      ];

      el.style.cssText = `
        position:absolute;bottom:-5px;left:${x}%;
        width:${size}px;height:${size}px;border-radius:50%;
        background:${colors[i % 4]};
        animation:particle-rise ${duration}s ease-in-out ${delay}s infinite;
        pointer-events:none;will-change:transform,opacity;
      `;
      container.appendChild(el);
      particles.push(el);
    }

    return () => particles.forEach((p) => p.remove());
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SVG FILTER — Turbulence for wave distortion
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="aurora-wave">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.003"
              numOctaves="3"
              seed="2"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.015 0.003;0.02 0.005;0.012 0.004;0.015 0.003"
                dur="20s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="80"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="aurora-wave-2">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.004"
              numOctaves="2"
              seed="8"
              result="noise2"
            >
              <animate
                attributeName="baseFrequency"
                values="0.012 0.004;0.018 0.006;0.010 0.003;0.012 0.004"
                dur="25s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise2"
              scale="60"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          AURORA CURTAIN 1 — Brand Blue (#003E7E)
          Primary ribbon, left-center, tall curtain
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        className="absolute aurora-curtain-1"
        style={{
          top: "-10%",
          left: "5%",
          width: "55%",
          height: "120%",
          background: `linear-gradient(
            180deg,
            transparent 0%,
            rgba(0,62,126,0.03) 10%,
            rgba(0,62,126,0.18) 25%,
            rgba(14,86,168,0.22) 40%,
            rgba(0,62,126,0.15) 55%,
            rgba(14,86,168,0.08) 70%,
            transparent 85%
          )`,
          filter: "url(#aurora-wave) blur(30px)",
          animation: "aurora-sway-1 14s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          AURORA CURTAIN 2 — Brand Red (#E11D2A)
          Secondary ribbon, right area
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        className="absolute aurora-curtain-2"
        style={{
          top: "-5%",
          right: "0%",
          width: "50%",
          height: "110%",
          background: `linear-gradient(
            180deg,
            transparent 0%,
            rgba(225,29,42,0.02) 15%,
            rgba(225,29,42,0.12) 30%,
            rgba(225,29,42,0.16) 45%,
            rgba(225,29,42,0.10) 60%,
            rgba(225,29,42,0.04) 75%,
            transparent 90%
          )`,
          filter: "url(#aurora-wave-2) blur(35px)",
          animation: "aurora-sway-2 18s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          AURORA CURTAIN 3 — Brand Gold (#FFB703)
          Accent ribbon, center-bottom
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        className="absolute aurora-curtain-3"
        style={{
          top: "5%",
          left: "20%",
          width: "60%",
          height: "100%",
          background: `linear-gradient(
            180deg,
            transparent 0%,
            rgba(255,183,3,0.02) 20%,
            rgba(255,183,3,0.10) 35%,
            rgba(255,183,3,0.14) 50%,
            rgba(255,183,3,0.08) 65%,
            rgba(255,183,3,0.03) 80%,
            transparent 95%
          )`,
          filter: "url(#aurora-wave) blur(40px)",
          animation: "aurora-sway-3 22s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          AURORA CURTAIN 4 — Blue-Vibrant blend
          Deep secondary layer for depth
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        className="absolute"
        style={{
          top: "0%",
          left: "30%",
          width: "45%",
          height: "115%",
          background: `linear-gradient(
            180deg,
            transparent 0%,
            rgba(0,62,126,0.02) 10%,
            rgba(14,86,168,0.10) 30%,
            rgba(0,62,126,0.14) 50%,
            rgba(14,86,168,0.06) 70%,
            transparent 90%
          )`,
          filter: "url(#aurora-wave-2) blur(45px)",
          animation: "aurora-sway-1 26s ease-in-out 3s infinite reverse",
          willChange: "transform",
        }}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          AURORA GLOW — bottom-edge light reflection
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        style={{
          background: `linear-gradient(
            to top,
            rgba(0,62,126,0.06) 0%,
            rgba(255,183,3,0.03) 30%,
            transparent 100%
          )`,
          animation: "aurora-glow-pulse 10s ease-in-out infinite",
        }}
      />

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0" />

      {/* Noise overlay */}
      <div className="noise-overlay" />
    </div>
  );
}
