import { LayoutTemplate } from "lucide-react";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-background text-foreground">
      <div className="flex flex-col items-center max-w-md space-y-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <LayoutTemplate className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Welcome to AxialMind
        </h1>
        <p className="text-muted-foreground">
          The application is currently empty. Start building your architecture here.
        </p>
      </div>
    </main>
  );
}
