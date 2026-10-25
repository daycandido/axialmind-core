export default function App() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Pular para o conteúdo principal
      </a>
      <main id="conteudo-principal">
        <div />
      </main>
    </>
  );
}
