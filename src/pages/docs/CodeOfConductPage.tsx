import Layout from "@/components/layout/Layout";

const CodeOfConductPage = () => (
  <Layout>
    <section className="museum-section max-w-3xl">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Komunita</span>
      <h1 className="font-display text-4xl font-semibold mt-2 mb-6">Code of Conduct</h1>

      <div className="space-y-8 text-sm leading-7 text-foreground">
        <p className="text-muted-foreground">
          Projekt je otvorený pre všetkých, ktorí komunikujú rešpektujúco a konštruktívne.
        </p>

        <div>
          <h2 className="font-display text-2xl mb-3">Očakávané správanie</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>vecná a slušná komunikácia, aj pri nesúhlase,</li>
            <li>rešpekt voči autorom, recenzentom a návštevníkom,</li>
            <li>spätná väzba zameraná na obsah, nie na osobu,</li>
            <li>dodržiavanie autorských práv a citovanie zdrojov.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Neprípustné správanie</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>útoky, urážky, diskriminácia a obťažovanie,</li>
            <li>spam, trolling alebo vedomé zavádzanie,</li>
            <li>publikovanie citlivých údajov bez súhlasu.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Vynucovanie pravidiel</h2>
          <p className="text-muted-foreground">
            Moderátori môžu porušenia riešiť upozornením, zamietnutím príspevku alebo obmedzením
            možnosti prispievania podľa závažnosti situácie.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default CodeOfConductPage;
