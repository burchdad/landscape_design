import { Flame, Hammer, LayoutGrid, Shovel, Trees } from 'lucide-react';

const services = [
  {
    title: 'Landscape Design',
    description: 'Thoughtfully planned outdoor environments tailored to your home and lifestyle.',
    icon: LayoutGrid,
  },
  {
    title: 'Hardscaping',
    description: 'Custom patios, walkways, and structural elements built for durability and beauty.',
    icon: Hammer,
  },
  {
    title: 'Outdoor Kitchens',
    description: 'Fully integrated cooking and entertainment spaces designed for year-round use.',
    icon: Shovel,
  },
  {
    title: 'Fire Features',
    description: 'Elegant fire pits and fireplaces that create warmth and atmosphere.',
    icon: Flame,
  },
  {
    title: 'Pergolas & Patios',
    description: 'Covered outdoor spaces that extend your home into the outdoors.',
    icon: Trees,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Services</p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-[#141716] md:text-6xl">
            Signature Work for Distinguished Outdoor Living
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="glass-panel group h-full p-7 shadow-luxe transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,0.28)]"
              >
                <Icon className="h-9 w-9 text-[#4b5a44] transition duration-500 group-hover:scale-110 group-hover:text-[#2f3a2a]" />
                <h3 className="mt-6 text-xl font-semibold text-[#101312]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4b4f4a]">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
