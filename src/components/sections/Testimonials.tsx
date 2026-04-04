import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Prestige transformed our backyard into a true resort experience. The materials, detail, and finish quality are exceptional.',
    name: 'Rachel M.',
  },
  {
    quote:
      'From design through build, communication was flawless. They delivered exactly what they promised and more.',
    name: 'Daniel K.',
  },
  {
    quote:
      'Our home value jumped immediately and the new outdoor kitchen has become the heart of every gathering.',
    name: 'Sophia T.',
  },
  {
    quote:
      'This team is premium in every sense. Professional process, stunning craftsmanship, and a polished result.',
    name: 'James L.',
  },
];

export function Testimonials() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="section-shell">
        <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Testimonials</p>
        <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#111413] md:text-5xl">
          Trusted by San Jose Homeowners
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.name} className="glass-panel rounded-2xl p-6 shadow-luxe">
              <div className="mb-4 flex gap-1 text-[#7f9374]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-[#2f3330]">“{item.quote}”</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-[#505a4b]">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
