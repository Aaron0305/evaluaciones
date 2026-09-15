export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full py-5 text-center">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[11px] text-zinc-400 dark:text-zinc-600">
          © {currentYear} What Time Is It? Idiomas. Todos los derechos
          reservados.
        </p>
        <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-500">
          Portal de Acceso Académico
        </p>
      </div>
    </footer>
  );
}
