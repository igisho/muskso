import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import PaginationControls from "@/components/common/PaginationControls";
import { companies } from "@/data/repository";

const CompaniesPage = () => {
  const pageSize = 12;
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() => {
    const rawPage = Number(searchParams.get("page") ?? "1");
    return Number.isFinite(rawPage) && rawPage > 0 ? Math.floor(rawPage) : 1;
  });
  const totalPages = Math.max(1, Math.ceil(companies.length / pageSize));

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
  const pagedCompanies = companies.slice(startIndex, endIndex);

  return (
    <Layout>
      <section className="museum-section">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Archív</span>
        <h1 className="font-display text-4xl font-semibold mt-2 mb-8">Firmy a štúdiá</h1>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Spoločnosti, ktoré formovali slovenský softvérový priemysel.
        </p>

        <p className="text-sm text-muted-foreground mb-6">
          Zobrazene {startIndex + 1}-{Math.min(endIndex, companies.length)} z {companies.length} firiem
        </p>

        <div className="museum-grid">
          {pagedCompanies.map((company) => (
            <Link
              key={company.id}
              to={`/company/${company.id}`}
              className="exhibit-card p-6 group block"
            >
              <span className="font-mono text-xs text-muted-foreground">{company.founded}</span>
              <h3 className="font-display text-xl font-medium mt-2 group-hover:text-primary transition-colors">{company.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{company.overview}</p>
              <p className="font-mono text-xs text-muted-foreground mt-4">{company.projects.length} projektov · {company.milestones.length} míľnikov</p>
            </Link>
          ))}
        </div>

        <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </section>
    </Layout>
  );
};

export default CompaniesPage;
