export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:p-4 focus:bg-background focus:text-foreground focus:z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:rounded-md"
      >
        Pular para o conteúdo principal
      </a>
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-background text-foreground flex flex-col focus:outline-none">
        {/* App content will go here */}
      </main>
    </>
  );
}
