"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface LoginFormState {
  readonly email: string;
  readonly password: string;
  readonly rememberMe: boolean;
}

const INITIAL_FORM_STATE: LoginFormState = {
  email: "",
  password: "",
  rememberMe: false,
};

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginFormState>(INITIAL_FORM_STATE);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<{
    readonly type: "error" | "success";
    readonly text: string;
  } | null>(null);

  const togglePasswordVisibility = (): void => {
    setIsPasswordVisible((prev) => !prev);
  };

  const updateFormField = <K extends keyof LoginFormState>(
    field: K,
    value: LoginFormState[K]
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (feedbackMessage) setFeedbackMessage(null);
  };

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!formData.email.trim()) {
      setFeedbackMessage({
        type: "error",
        text: "Por favor ingresa tu correo electrónico.",
      });
      return;
    }

    if (formData.password.length < 6) {
      setFeedbackMessage({
        type: "error",
        text: "La contraseña debe tener al menos 6 caracteres.",
      });
      return;
    }

    setIsSubmitting(true);
    setFeedbackMessage(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setFeedbackMessage({
        type: "success",
        text: `¡Bienvenido! Sesión iniciada para: ${formData.email}`,
      });
    }, 900);
  };

  return (
    /* ── Double-Bezel Outer Shell ── */
    <div className="rounded-[2rem] p-[3px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 dark:from-white/[0.08] dark:via-white/[0.02] dark:to-white/[0.06]">
      {/* ── Inner Glass Card ── */}
      <div
        className="relative w-full overflow-hidden rounded-[calc(2rem-3px)] glass-card p-7 sm:p-9"
        style={{
          boxShadow:
            "var(--card-shadow), inset 0 1px 1px rgba(255,255,255,0.1)",
        }}
      >
        {/* Subtle shimmer effect across the top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

        {/* ── Header: Logo + Badge ── */}
        <div className="flex items-center justify-between mb-7 animate-fade-up stagger-2">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white/80 dark:bg-zinc-800/80 p-1.5 ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src="/image/logo_mensaje.png"
              alt="What Time Is It? Idiomas"
              fill
              className="object-contain p-1"
              priority
              unoptimized
            />
          </div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em]"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,62,126,0.08), rgba(14,86,168,0.12))",
              color: "var(--brand-blue)",
              border: "1px solid rgba(0,62,126,0.15)",
            }}
          >
            <Sparkles className="h-3 w-3 text-brand-gold" />
            Portal Académico
          </span>
        </div>

        {/* ── Title ── */}
        <div className="animate-fade-up stagger-3">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            Iniciar Sesión
          </h1>
          <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Ingresa tus credenciales para acceder a tus clases
          </p>
        </div>

        {/* ── Feedback Alert ── */}
        {feedbackMessage && (
          <div
            role="alert"
            className={`mt-5 flex items-center gap-2.5 rounded-xl p-4 text-xs font-medium animate-fade-scale ${
              feedbackMessage.type === "error"
                ? "bg-red-50/80 text-red-700 ring-1 ring-red-200/60 dark:bg-red-950/30 dark:text-red-300 dark:ring-red-900/40"
                : "bg-emerald-50/80 text-emerald-700 ring-1 ring-emerald-200/60 dark:bg-emerald-950/30 dark:text-emerald-300 dark:ring-emerald-900/40"
            }`}
            style={{
              backdropFilter: "blur(12px)",
            }}
          >
            {feedbackMessage.type === "error" ? (
              <AlertCircle className="h-4 w-4 shrink-0" />
            ) : (
              <CheckCircle2 className="h-4 w-4 shrink-0" />
            )}
            <span>{feedbackMessage.text}</span>
          </div>
        )}

        {/* ── Form ── */}
        <form onSubmit={handleFormSubmit} className="mt-7 space-y-5">
          {/* Email */}
          <div className="space-y-2 animate-fade-up stagger-4">
            <label
              htmlFor="email"
              className="block text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-600 dark:text-zinc-400"
            >
              Correo Electrónico
            </label>
            <div className="relative group">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400 dark:text-zinc-500 transition-colors duration-200 group-focus-within:text-brand-blue">
                <Mail className="h-4 w-4" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="estudiante@idiomas.com"
                value={formData.email}
                onChange={(e) => updateFormField("email", e.target.value)}
                className="input-premium w-full rounded-xl border border-zinc-200/80 bg-white/60 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-zinc-400 focus:border-brand-blue focus:outline-none dark:border-zinc-700/60 dark:bg-zinc-800/40 dark:placeholder:text-zinc-600"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2 animate-fade-up stagger-5">
            <label
              htmlFor="password"
              className="block text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-600 dark:text-zinc-400"
            >
              Contraseña
            </label>
            <div className="relative group">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400 dark:text-zinc-500 transition-colors duration-200 group-focus-within:text-brand-blue">
                <Lock className="h-4 w-4" />
              </div>
              <input
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                autoComplete="current-password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => updateFormField("password", e.target.value)}
                className="input-premium w-full rounded-xl border border-zinc-200/80 bg-white/60 py-3 pl-11 pr-12 text-sm text-foreground placeholder:text-zinc-400 focus:border-brand-blue focus:outline-none dark:border-zinc-700/60 dark:bg-zinc-800/40 dark:placeholder:text-zinc-600"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer btn-press"
                aria-label={
                  isPasswordVisible ? "Ocultar contraseña" : "Ver contraseña"
                }
              >
                {isPasswordVisible ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center pt-1 animate-fade-up stagger-6">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={(e) => updateFormField("rememberMe", e.target.checked)}
              className="h-4 w-4 rounded border-zinc-300 text-brand-blue focus:ring-brand-blue dark:border-zinc-700 dark:bg-zinc-800 cursor-pointer accent-brand-blue"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400 cursor-pointer select-none"
            >
              Recordar mi sesión en este equipo
            </label>
          </div>

          {/* Submit Button — Double-Bezel Button with press physics */}
          <div className="pt-2 animate-fade-up stagger-7">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative flex w-full items-center justify-center gap-2.5 rounded-xl py-3.5 px-6 text-sm font-bold text-white overflow-hidden disabled:opacity-50 cursor-pointer btn-press"
              style={{
                background: "linear-gradient(135deg, #003E7E, #0E56A8)",
                boxShadow:
                  "0 4px 20px rgba(0,62,126,0.3), 0 1px 3px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.15)",
                transition:
                  "transform 160ms var(--ease-out-expo), box-shadow 300ms var(--ease-out-expo)",
              }}
            >
              {/* Shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                  animation: "shimmer 2s ease-in-out infinite",
                  transition: "opacity 300ms var(--ease-out-expo)",
                }}
              />

              {isSubmitting ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <span className="relative z-10">Iniciar Sesión</span>
                  {/* Button-in-button trailing icon */}
                  <span
                    className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/15"
                    style={{
                      transition:
                        "transform 300ms var(--ease-out-expo), background 300ms var(--ease-out-expo)",
                    }}
                  >
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Bottom decorative line */}
        <div className="mt-7 h-px bg-gradient-to-r from-transparent via-zinc-200/60 to-transparent dark:via-zinc-700/40" />
        <p className="mt-4 text-center text-[11px] text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} What Time Is It? Idiomas
        </p>
      </div>
    </div>
  );
}
