"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

/**
 * Adaptive Frosted Glass Navbar
 * - At top (scrollY === 0): 100% transparent, seamlessly blending into the animated background
 * - On scroll (scrollY > 12): Activates ultra-crisp frosted glassmorphism (backdrop-blur-xl)
 *   so content scrolling underneath remains visible with luxurious transparency.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/40 dark:bg-slate-950/45 backdrop-blur-xl border-b border-white/40 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center btn-press"
        >
          <Image
            src="/image/logo.png"
            alt="What Time Is It? Idiomas"
            width={260}
            height={60}
            priority
            unoptimized
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <span
            className={`hidden sm:inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
              isScrolled
                ? "bg-brand-blue/10 dark:bg-sky-400/10 text-brand-blue dark:text-sky-300 border border-brand-blue/20 dark:border-sky-400/20"
                : "bg-white/40 dark:bg-white/10 text-brand-blue dark:text-sky-300 border border-white/50 dark:border-white/15 backdrop-blur-md"
            }`}
          >
            Portal Académico
          </span>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
