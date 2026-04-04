export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-36 text-white md:pb-28 md:pt-44"
      style={{
        backgroundImage:
          'linear-gradient(110deg, rgba(9, 10, 11, 0.85), rgba(9, 10, 11, 0.52)), url(https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="section-shell">
        <div className="max-w-4xl animate-rise">
          <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-[#dbe4d4]">
            San Jose Luxury Landscaping
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold leading-tight md:text-7xl">
            Transform Your Outdoor Space Into Something Extraordinary
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Custom landscaping, hardscaping, and outdoor living design in San Jose, CA.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#8c9f81] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#9db291]"
            >
              Get a Free Quote
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/70 px-7 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-white hover:text-black"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
