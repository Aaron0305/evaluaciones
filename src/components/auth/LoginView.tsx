"use client";

import Image from "next/image";
import { Star, Sparkles } from "lucide-react";
import LoginForm from "@/components/auth/LoginForm";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function LoginView() {
  return (
    <div className="relative flex flex-1 items-center justify-center min-h-[calc(100dvh-3.5rem)] py-6 sm:py-10 px-3.5 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium animated background layer */}
      <AnimatedBackground />

      {/* Main content — layered above background */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">

        {/* ────────────────────────────────────────
            LEFT: Mascot & Branding Section (Desktop only)
            ──────────────────────────────────────── */}
        <div className="hidden lg:flex flex-col items-center text-center max-w-sm animate-fade-up stagger-1">

          {/* Speech bubble with brand accent */}
          <div
            className="relative mb-6 rounded-2xl glass-card px-6 py-4 animate-fade-scale stagger-2"
            style={{
              transition: "transform 300ms var(--ease-out-expo)",
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                Daily English
              </span>
              <Sparkles className="h-3.5 w-3.5 text-brand-red" />
            </div>
            <p className="text-base font-extrabold text-brand-blue dark:text-blue-300">
              ¡Welcome! <span className="text-brand-red">It&apos;s time to learn!</span>
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              ¿Listo para tu clase interactiva de hoy?
            </p>
            {/* Bubble tail */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-white/85 dark:border-t-[rgba(15,17,25,0.75)]" />
          </div>

          {/* Mascot with LED glow ring */}
          <div className="relative animate-fade-scale stagger-3">
            {/* Animated glow aura behind mascot */}
            <div
              className="absolute inset-0 m-auto h-56 w-56 rounded-full will-change-transform glow-ring-animated"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(0,62,126,0.25), rgba(255,183,3,0.2), rgba(225,29,42,0.2), rgba(0,62,126,0.25))",
                filter: "blur(40px)",
                animation: "rotate-slow 12s linear infinite, glow-ring 4s ease-in-out infinite",
              }}
            />

            <div
              className="relative h-64 w-64 sm:h-72 sm:w-72 drop-shadow-2xl"
              style={{
                transition: "transform 700ms var(--ease-out-expo)",
              }}
            >
              <Image
                src="/image/mascota_hde.png"
                alt="Mascota What Time Is It? Idiomas"
                fill
                priority
                unoptimized
                className="object-contain"
              />
            </div>
          </div>

          {/* Brand title */}
          <div className="mt-5 animate-fade-up stagger-4">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-blue dark:text-white">
              What Time Is It?{" "}
              <span className="text-brand-red">Idiomas</span>
            </h2>
            <p className="mt-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
              Aprende inglés de forma dinámica, práctica y divertida.
            </p>
          </div>
        </div>

        {/* ────────────────────────────────────────
            RIGHT: Login Form Card
            ──────────────────────────────────────── */}
        <div className="w-full max-w-md animate-fade-up stagger-3">
          <LoginForm />
        </div>

      </div>
    </div>
  );
}
