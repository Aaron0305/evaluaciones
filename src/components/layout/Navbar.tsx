import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-transparent"
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
      }}
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
            className="hidden sm:inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]"
            style={{
              background: "rgba(0,62,126,0.06)",
              color: "var(--brand-blue)",
              border: "1px solid rgba(0,62,126,0.1)",
            }}
          >
            Portal Académico
          </span>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
