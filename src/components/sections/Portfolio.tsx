const portfolioImages = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1600607687644-c7f34b5f5a2f?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1600566752547-1647f4f8187b?auto=format&fit=crop&w=1600&q=80',
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-36">
      <div className="section-shell">
        <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Portfolio</p>
        <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-[#111413] md:text-6xl">
          Recent Outdoor Transformations
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioImages.map((imageUrl, index) => (
            <article
              key={imageUrl}
              className="group relative h-80 overflow-hidden rounded-2xl border border-white/50"
            >
              <div
                className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-70 transition duration-500 group-hover:from-black/80 group-hover:via-black/25 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs uppercase tracking-[0.22em] text-[#d9e5d0]">Project {index + 1}</p>
                <p className="font-semibold">Luxury Landscape Concept</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
