export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
      >
        Skip to main content
      </a>
      <main id="main-content" className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">AxialMind</h1>
      </main>
    </>
  );
}
