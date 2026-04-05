export function AboutValue() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="section-shell grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Why Prestige</p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-[#111413] md:text-6xl">
            Crafted Spaces That Elevate Home Value and Daily Living
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#383c38]">
            Prestige Landscape brings design precision, premium materials, and disciplined execution to
            every transformation. From first concept to final detailing, we build outdoor environments
            that feel intentional, timeless, and deeply personal.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#383c38]">
            The result is more than a beautiful yard. It is a lasting investment that increases property
            value while creating an elevated lifestyle for hosting, relaxing, and everyday enjoyment.
          </p>
        </div>

        <div
          className="h-[460px] rounded-3xl border border-white/60 bg-cover bg-center shadow-luxe"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(15,17,17,0.14), rgba(15,17,17,0.32)), url(https://images.unsplash.com/photo-1613545325268-9265e1609167?auto=format&fit=crop&w=1200&q=80)',
          }}
        />
      </div>
    </section>
  );
}
