import { useState, useMemo, useEffect } from "react";
import { Search, Grid3X3, List, Shuffle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ExhibitCard from "@/components/museum/ExhibitCard";
import StatusBadge from "@/components/museum/StatusBadge";
import PaginationControls from "@/components/common/PaginationControls";
import { heritageItems } from "@/data/repository";
import type { Heritage } from "@/data/types";
import { Link, useSearchParams } from "react-router-dom";

const types = ["all", ...Array.from(new Set(heritageItems.map((item) => item.type)))];
const platforms = ["all", ...Array.from(new Set(heritageItems.map((item) => item.platform)))];
const statuses: ("all" | Heritage["status"])[] = ["all", "verified", "draft", "disputed"];
const sorts = [
  { label: "Najnovšie", fn: (a: Heritage, b: Heritage) => b.year_start - a.year_start },
  { label: "Najstaršie", fn: (a: Heritage, b: Heritage) => a.year_start - b.year_start },
  { label: "A–Z", fn: (a: Heritage, b: Heritage) => a.title.localeCompare(b.title) },
];

const Archive = () => {
  const pageSize = 12;
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState<"all" | Heritage["status"]>("all");
  const [sortIdx, setSortIdx] = useState(0);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(() => {
    const rawPage = Number(searchParams.get("page") ?? "1");
    return Number.isFinite(rawPage) && rawPage > 0 ? Math.floor(rawPage) : 1;
  });

  const filtered = useMemo(() => {
    let items = [...heritageItems];
    if (query) {
      const q = query.toLowerCase();
      items = items.filter(
        (h) =>
          h.title.toLowerCase().includes(q) ||
          h.summary.toLowerCase().includes(q) ||
          h.tags.some((t) => t.includes(q))
      );
    }
    if (typeFilter !== "all") items = items.filter((h) => h.type === typeFilter);
    if (platformFilter !== "all") items = items.filter((h) => h.platform === platformFilter);
    if (statusFilter !== "all") items = items.filter((h) => h.status === statusFilter);
    items.sort(sorts[sortIdx].fn);
    return items;
  }, [query, typeFilter, platformFilter, statusFilter, sortIdx]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, typeFilter, platformFilter, statusFilter, sortIdx]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
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
  const pagedItems = filtered.slice(startIndex, endIndex);

  const randomExhibit = () => {
    const item = heritageItems[Math.floor(Math.random() * heritageItems.length)];
    window.location.href = `/project/${item.id}`;
  };

  return (
    <Layout>
      <section className="museum-section">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Katalóg</span>
        <h1 className="font-display text-4xl font-semibold mt-2 mb-8">Archív</h1>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Hľadať podľa názvu, popisu alebo tagu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-card border border-border pl-12 pr-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Typ:</span>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="bg-card border border-border px-2 py-1 text-xs font-mono focus:outline-none">
              {types.map((t) => <option key={t} value={t}>{t === "all" ? "Všetky" : t}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Platforma:</span>
            <select value={platformFilter} onChange={(e) => setPlatformFilter(e.target.value)} className="bg-card border border-border px-2 py-1 text-xs font-mono focus:outline-none">
              {platforms.map((p) => <option key={p} value={p}>{p === "all" ? "Všetky" : p}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Status:</span>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as any)} className="bg-card border border-border px-2 py-1 text-xs font-mono focus:outline-none">
              {statuses.map((s) => <option key={s} value={s}>{s === "all" ? "Všetky" : s}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Zoradiť:</span>
            <select value={sortIdx} onChange={(e) => setSortIdx(Number(e.target.value))} className="bg-card border border-border px-2 py-1 text-xs font-mono focus:outline-none">
              {sorts.map((s, i) => <option key={i} value={i}>{s.label}</option>)}
            </select>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button onClick={randomExhibit} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 border border-border" title="Náhodný exponát">
              <Shuffle size={14} /> Náhodný
            </button>
            <button onClick={() => setView("grid")} className={`p-1.5 border ${view === "grid" ? "border-primary text-primary" : "border-border text-muted-foreground"}`}>
              <Grid3X3 size={14} />
            </button>
            <button onClick={() => setView("list")} className={`p-1.5 border ${view === "list" ? "border-primary text-primary" : "border-border text-muted-foreground"}`}>
              <List size={14} />
            </button>
          </div>
        </div>

        {/* Results */}
        <p className="text-sm text-muted-foreground mb-6">
          {filtered.length === 0
            ? "0 exponatov"
            : `Zobrazene ${startIndex + 1}-${Math.min(endIndex, filtered.length)} z ${filtered.length} exponatov`}
        </p>

        {view === "grid" ? (
          <div className="museum-grid">
            {pagedItems.map((item) => (
              <ExhibitCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="space-y-0">
            {pagedItems.map((item) => (
              <Link
                key={item.id}
                to={`/project/${item.id}`}
                className="flex items-center gap-6 py-4 border-b border-border hover:bg-card/50 transition-colors px-2 -mx-2 group"
              >
                <span className="font-mono text-xs text-muted-foreground w-12 shrink-0">{item.year_start}</span>
                <span className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors flex-1">{item.title}</span>
                <span className="font-mono text-xs text-muted-foreground hidden md:block">{item.platform}</span>
                <StatusBadge status={item.status} />
              </Link>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Žiadne výsledky pre dané filtre.</p>
          </div>
        )}

        <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </section>
    </Layout>
  );
};

export default Archive;
