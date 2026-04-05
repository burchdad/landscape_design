type ContactSectionProps = {
  sectionId?: string;
  showContactInfo?: boolean;
};

export function ContactSection({ sectionId = 'contact', showContactInfo = false }: ContactSectionProps) {
  return (
    <section id={sectionId} className="bg-[#101312] py-20 text-white md:py-28">
      <div className="section-shell grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#9eb495]">Contact</p>
          <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold md:text-5xl">
            Request Your Free Quote
          </h2>
          <p className="mt-6 max-w-xl text-white/75">
            Tell us about your vision and timeline. We will reach out to schedule your consultation and
            provide a tailored project estimate.
          </p>

          {showContactInfo ? (
            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#afc3a2]">Office</p>
              <p className="mt-3 text-white/90">San Jose, CA</p>
              <p className="mt-2 text-white/90">(408) 000-0000</p>
              <p className="mt-2 text-white/90">hello@prestigelandscape.com</p>
            </div>
          ) : null}
        </div>

        <form className="space-y-4 rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/85">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#a8bc9e] focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/85">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#a8bc9e] focus:outline-none"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/85">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#a8bc9e] focus:outline-none"
                placeholder="(000) 000-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-white/85">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              className="w-full rounded-lg border border-white/20 bg-[#171a19] px-4 py-3 text-white focus:border-[#a8bc9e] focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select project type
              </option>
              <option value="landscape-design">Landscape Design</option>
              <option value="hardscaping">Hardscaping</option>
              <option value="outdoor-kitchen">Outdoor Kitchen</option>
              <option value="fire-features">Fire Features</option>
              <option value="pergolas-patios">Pergolas & Patios</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/85">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#a8bc9e] focus:outline-none"
              placeholder="Tell us about your project goals"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#9cb18f] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#b1c4a5]"
          >
            Request Your Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}
