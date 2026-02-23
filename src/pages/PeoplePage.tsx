import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import PaginationControls from "@/components/common/PaginationControls";
import { people } from "@/data/repository";

const PeoplePage = () => {
  const pageSize = 12;
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() => {
    const rawPage = Number(searchParams.get("page") ?? "1");
    return Number.isFinite(rawPage) && rawPage > 0 ? Math.floor(rawPage) : 1;
  });
  const totalPages = Math.max(1, Math.ceil(people.length / pageSize));

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  useEffect(() => {
    const rawPage = Number(searchParams.get("page") ?? "1");
    const pageFromUrl = Number.isFinite(rawPage) && rawPage > 0 ? Math.floor(rawPage) : 1;
    if (pageFromUrl !== currentPage) {
      setCurrentPage(pageFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    const nextParams = new URLSearchParams(searchParams);
    const currentInUrl = nextParams.get("page");

    if (currentPage <= 1) {
      if (!currentInUrl) return;
      nextParams.delete("page");
      setSearchParams(nextParams, { replace: true });
      return;
    }

    const nextValue = String(currentPage);
    if (currentInUrl === nextValue) return;

    nextParams.set("page", nextValue);
    setSearchParams(nextParams, { replace: true });
  }, [currentPage, searchParams, setSearchParams]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pagedPeople = people.slice(startIndex, endIndex);

  return (
    <Layout>
      <section className="museum-section">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Archív</span>
        <h1 className="font-display text-4xl font-semibold mt-2 mb-8">Ľudia</h1>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Tvorcovia, vývojári a vizionári stojaci za slovenským softvérovým dedičstvom.
        </p>

        <p className="text-sm text-muted-foreground mb-6">
          Zobrazene {startIndex + 1}-{Math.min(endIndex, people.length)} z {people.length} ludi
        </p>

        <div className="space-y-0">
          {pagedPeople.map((person) => (
            <Link
              key={person.id}
              to={`/person/${person.id}`}
              className="flex items-start gap-6 py-6 border-b border-border hover:bg-card/50 transition-colors group px-2 -mx-2"
            >
              <div className="w-16 h-16 bg-muted border border-border shrink-0 flex items-center justify-center">
                <span className="font-display text-xl font-semibold text-muted-foreground">{person.name[0]}</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium group-hover:text-primary transition-colors">{person.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{person.roles.join(" · ")}</p>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{person.bio}</p>
              </div>
            </Link>
          ))}
        </div>

        <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </section>
    </Layout>
  );
};

export default PeoplePage;
