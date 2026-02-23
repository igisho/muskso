import Layout from "@/components/layout/Layout";

const LicensePage = () => (
  <Layout>
    <section className="museum-section max-w-3xl">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Právne info</span>
      <h1 className="font-display text-4xl font-semibold mt-2 mb-6">Licencia</h1>

      <div className="space-y-8 text-sm leading-7 text-foreground">
        <div>
          <h2 className="font-display text-2xl mb-3">Kód projektu</h2>
          <p className="text-muted-foreground">
            Zdrojový kód repozitára je určený na otvorenú spoluprácu. Pri ďalšom použití zachovajte
            informácie o autorstve a históriu zmien.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Obsah archívu</h2>
          <p className="text-muted-foreground">
            Texty, obrázky a metadáta o historických projektoch môžu mať odlišné licenčné podmienky
            podľa pôvodu materiálu. Pri každom zázname uvádzajte zdroje a práva na použitie.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Príspevky komunity</h2>
          <p className="text-muted-foreground">
            Odoslaním pull requestu potvrdzujete, že máte právo príspevok zverejniť a že jeho
            zahrnutie do projektu neporušuje autorské práva tretích strán.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default LicensePage;
