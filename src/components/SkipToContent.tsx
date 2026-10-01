export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:ring-2 focus:ring-primary focus:outline-none focus:top-0 focus:left-0"
    >
      Pular para o conteúdo principal
    </a>
  );
}
