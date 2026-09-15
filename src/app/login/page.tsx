import LoginView from "@/components/auth/LoginView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión | What Time Is It? Idiomas",
  description: "Portal oficial de acceso para estudiantes y docentes de What Time Is It? Idiomas.",
};

export default function LoginPage() {
  return <LoginView />;
}
