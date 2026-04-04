import { Flame, Hammer, LayoutGrid, Shovel, Trees } from 'lucide-react';

const services = [
  {
    title: 'Landscape Design',
    description: 'Curated master plans that blend architecture, flow, and seasonal texture.',
    icon: LayoutGrid,
  },
  {
    title: 'Hardscaping',
    description: 'Premium stone, pavers, and retaining systems built for beauty and longevity.',
    icon: Hammer,
  },
  {
    title: 'Outdoor Kitchens',
    description: 'Chef-inspired outdoor kitchens designed for elevated entertaining.',
    icon: Shovel,
  },
  {
    title: 'Fire Features',
    description: 'Bespoke fireplaces and fire pits that add warmth and focal-point drama.',
    icon: Flame,
  },
  {
    title: 'Pergolas & Patios',
    description: 'Architectural shade and luxury gathering areas that extend living space.',
    icon: Trees,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Services</p>
          <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#141716] md:text-5xl">
            Signature Work for Distinguished Outdoor Living
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="glass-panel group h-full p-6 shadow-luxe transition duration-300 hover:-translate-y-1"
              >
                <Icon className="h-9 w-9 text-[#4b5a44] transition group-hover:scale-105" />
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
