import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { timelineEvents } from "@/data/repository";
import { useEffect, useRef, useState } from "react";

const Timeline = () => {
  const batchSize = 12;
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const [supportsObserver, setSupportsObserver] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const hasMore = visibleCount < timelineEvents.length;

  const loadNextBatch = () => {
    setVisibleCount((prev) => Math.min(prev + batchSize, timelineEvents.length));
  };

  useEffect(() => {
    setVisibleCount(batchSize);
  }, [batchSize, timelineEvents.length]);

  useEffect(() => {
    setSupportsObserver(typeof window !== "undefined" && "IntersectionObserver" in window);
  }, []);

  useEffect(() => {
    if (!supportsObserver || !hasMore) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        loadNextBatch();
      },
      { rootMargin: "320px 0px", threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, supportsObserver, visibleCount]);

  const visibleEvents = timelineEvents.slice(0, visibleCount);

  return (
    <Layout>
      <section className="museum-section">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Prehľad</span>
        <h1 className="font-display text-4xl font-semibold mt-2 mb-4">Časová os</h1>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Kľúčové momenty v histórii slovenského softvéru od 80. rokov po súčasnosť.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {visibleEvents.map((event, i) => (
            <div key={event.id} className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-primary bg-background rounded-full z-10" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <span className="font-mono text-sm text-museum-gold font-medium">{event.year}</span>
                <Link
                  to={`/project/${event.id}`}
                  className="block group"
                >
                  <h3 className="font-display text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </div>
          ))}

          {hasMore && (
            <>
              {supportsObserver && <div ref={sentinelRef} className="h-12" aria-hidden="true" />}
              {!supportsObserver && (
                <div className="flex justify-center py-4">
                  <button
                    type="button"
                    onClick={loadNextBatch}
                    className="px-4 py-2 text-sm font-mono border border-border hover:bg-card transition-colors"
                  >
                    Načítať ďalšie udalosti
                  </button>
                </div>
              )}
            </>
          )}

          <p className="text-center text-xs font-mono text-muted-foreground mt-4">
            Zobrazené {visibleEvents.length} z {timelineEvents.length} udalostí
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Timeline;
