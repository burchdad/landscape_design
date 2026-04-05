export function PromiseSection() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="section-shell">
        <div className="rounded-[2rem] bg-[#111513] px-8 py-12 text-white shadow-luxe md:px-12 md:py-14">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9eb495]">Our Promise</p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1.8fr_1fr] md:items-end">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold md:text-6xl">
                Prestige Landscape helps you plan, design, and build with clarity.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/78">
                We lead every project with disciplined communication, premium materials, and a process
                built to keep expectations aligned from first conversation through final walkthrough.
              </p>
            </div>

            <div className="rounded-3xl border border-white/12 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#a9bf9d]">Prestige Landscape</p>
              <p className="mt-3 text-white/90">San Jose, CA</p>
              <p className="mt-2 text-white/90">(408) 000-0000</p>
              <p className="mt-2 text-white/90">hello@prestigelandscape.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
