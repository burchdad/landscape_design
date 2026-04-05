export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-28 pt-40 text-white md:pb-36 md:pt-52"
      style={{
        backgroundImage:
          'linear-gradient(110deg, rgba(7, 8, 8, 0.92), rgba(7, 8, 8, 0.65)), url(https://images.unsplash.com/photo-1600585154205-0e4f4b0c3a1f?auto=format&fit=crop&w=1800&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="section-shell">
        <div className="max-w-5xl animate-rise">
          <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-[#dbe4d4]">
            San Jose Luxury Landscaping
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-6xl font-semibold leading-[0.95] tracking-[0.01em] md:text-8xl">
            Luxury Outdoor Living, Designed & Built to Last
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
            Custom landscaping and outdoor transformations for homeowners in San Jose who want more
            than just a yard.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#8c9f81] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#9db291]"
            >
              Get a Free Quote
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-white/70 px-7 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-white hover:text-black"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
