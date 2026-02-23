import Layout from "@/components/layout/Layout";

const ReadmeDocPage = () => (
  <Layout>
    <section className="museum-section max-w-3xl">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">README</span>
      <h1 className="font-display text-4xl font-semibold mt-2 mb-6">Čo je projekt a ako ho používať</h1>

      <div className="space-y-8 text-sm leading-7 text-foreground">
        <div>
          <h2 className="font-display text-2xl mb-3">O projekte</h2>
          <p className="text-muted-foreground">
            MUSKSO je komunitný digitálny archív slovenského softvéru. Cieľom je uchovať historické
            projekty, firmy a ľudí, ktorí formovali lokálnu IT scénu.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Lokálne spustenie</h2>
          <pre className="bg-card border border-border p-4 overflow-x-auto font-mono text-xs">
{`npm install
npm run dev`}
          </pre>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Užitočné príkazy</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li><code className="font-mono text-xs">npm run build</code> - produkčný build</li>
            <li><code className="font-mono text-xs">npm run preview</code> - lokálny náhľad buildu</li>
            <li><code className="font-mono text-xs">npm run lint</code> - statická kontrola kódu</li>
            <li><code className="font-mono text-xs">npm test</code> - spustenie testov</li>
            <li><code className="font-mono text-xs">npm run validate:content</code> - validácia názvov a referencií dát</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Ako pridať PR</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>vytvorte branch a pridajte JSON záznam do <code className="font-mono text-xs">src/content</code>,</li>
            <li>dodržte názov súboru <code className="font-mono text-xs">YYYY-slug.json</code> (alebo <code className="font-mono text-xs">YYYY-MM-slug.json</code>),</li>
            <li>slug v názve musí byť rovnaký ako pole <code className="font-mono text-xs">id</code> v súbore,</li>
            <li>spustite validáciu a testy pred otvorením pull requestu.</li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default ReadmeDocPage;
