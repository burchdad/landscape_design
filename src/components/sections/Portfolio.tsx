const portfolioImages = [
  'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1560749003-f4b1e17e2a0f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="section-shell">
        <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Portfolio</p>
        <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#111413] md:text-5xl">
          Recent Outdoor Transformations
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioImages.map((imageUrl, index) => (
            <article
              key={imageUrl}
              className="group relative h-72 overflow-hidden rounded-2xl border border-white/50"
            >
              <div
                className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-95" />
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
