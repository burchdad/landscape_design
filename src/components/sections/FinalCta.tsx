type FinalCtaProps = {
  href?: string;
};

export function FinalCta({ href = '/contact' }: FinalCtaProps) {
  return (
    <section className="pb-24 md:pb-32">
      <div className="section-shell">
        <div className="rounded-[2rem] bg-[#111513] px-8 py-16 text-center text-white shadow-luxe md:px-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9eb495]">Start Your Project</p>
          <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl font-semibold md:text-6xl">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
            Let&apos;s design something that fits your home, your lifestyle, and your vision.
          </p>
          <a
            href={href}
            className="mt-10 inline-flex rounded-full bg-[#98ad8b] px-9 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#aec1a3]"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
