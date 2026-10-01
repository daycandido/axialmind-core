import { SkipToContent } from "../components/SkipToContent";

export default function App() {
  return (
    <>
      <SkipToContent />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <div />
      </main>
    </>
  );
}
