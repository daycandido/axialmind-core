import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">AXIALMIND™</h1>
          <p className="text-xl text-muted-foreground">
            Arquitetura Estrutural de Inteligência
          </p>
        </main>
      </div>
      <Analytics />
    </>
  )
}

export default App
