export function BuilderHero() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Already Have a Design?</p>
        <h1 className="mt-4 max-w-5xl font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-[#111413] md:text-7xl">
          Bring Your Plans to a Builder Who Knows How to Execute Premium Outdoor Work
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#373d38] md:text-xl">
          If you already have plans or concept drawings, Prestige Landscape can help translate them into a finished
          project with disciplined construction, high-end materials, and clear communication.
        </p>
      </div>
    </section>
  );
}

export function BuilderFormSection() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="section-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-[#111513] p-8 text-white shadow-luxe md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9eb495]">Why This Path Works</p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-semibold md:text-5xl">
            Keep the Design. Upgrade the Execution.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/78">
            This option is ideal for homeowners who already invested in a design package and now need a construction
            partner who can price, plan, and build it properly.
          </p>
          <ul className="mt-8 space-y-4 text-white/82">
            <li>Clear scope review before construction begins.</li>
            <li>Material guidance to protect durability and finish quality.</li>
            <li>Professional communication and site management throughout the build.</li>
          </ul>
        </div>

        <form className="glass-panel rounded-[2rem] p-8 shadow-luxe md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Send Us Your Design</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input className="rounded-xl border border-[#d4d9cf] bg-white px-4 py-3 text-[#111413] focus:border-[#90a285] focus:outline-none" placeholder="Name" />
            <input className="rounded-xl border border-[#d4d9cf] bg-white px-4 py-3 text-[#111413] focus:border-[#90a285] focus:outline-none" placeholder="Email" type="email" />
            <input className="rounded-xl border border-[#d4d9cf] bg-white px-4 py-3 text-[#111413] focus:border-[#90a285] focus:outline-none sm:col-span-2" placeholder="Phone" type="tel" />
            <input className="rounded-xl border border-[#d4d9cf] bg-white px-4 py-3 text-[#111413] focus:border-[#90a285] focus:outline-none sm:col-span-2" placeholder="Design PDF upload placeholder" type="text" />
            <input className="rounded-xl border border-[#d4d9cf] bg-white px-4 py-3 text-[#111413] focus:border-[#90a285] focus:outline-none sm:col-span-2" placeholder="Current yard photo upload placeholder" type="text" />
            <textarea className="min-h-36 rounded-xl border border-[#d4d9cf] bg-white px-4 py-3 text-[#111413] focus:border-[#90a285] focus:outline-none sm:col-span-2" placeholder="Tell us what stage your project is in and what support you need." />
          </div>
          <button className="mt-6 inline-flex rounded-full bg-[#98ad8b] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#aec1a3]" type="submit">
            Submit Your Project
          </button>
        </form>
      </div>
    </section>
  );
}

export function BuilderUpsellCard() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-[#d8ddd2] bg-white/75 p-8 shadow-luxe md:flex md:items-center md:justify-between md:gap-8 md:p-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Already Have a Design?</p>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#111413] md:text-5xl">
              We can step in as your construction partner.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#39403a]">
              If you already have plans, we can review the scope, refine build decisions, and help turn that design into a premium finished space.
            </p>
          </div>
          <a
            href="/landscape-builder"
            className="mt-6 inline-flex rounded-full border border-[#243022] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#1a2218] transition hover:bg-[#1a2218] hover:text-white md:mt-0"
          >
            Explore Builder Services
          </a>
        </div>
      </div>
    </section>
  );
}
