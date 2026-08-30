export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border focus:rounded-md focus:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Pular para o conteúdo principal
      </a>
      <main id="main-content" className="flex min-h-screen flex-col items-center justify-center p-24">
        {/* Futuros componentes serão inseridos aqui */}
      </main>
    </>
  );
}
