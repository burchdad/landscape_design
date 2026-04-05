import { CheckCircle2 } from 'lucide-react';

const valuePoints = [
  'Built for long-term durability with premium materials and expert craftsmanship.',
  'Designed to increase property value through intentional outdoor architecture.',
  'Clean, professional project management with clear communication at every stage.',
  'Local expertise in San Jose homes, climate, and permitting expectations.',
];

export function WhyPrestige() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="section-shell">
        <div className="glass-panel rounded-[2rem] p-8 shadow-luxe md:p-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Why Prestige Landscape</p>
          <h2 className="mt-4 max-w-4xl font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-[#111413] md:text-6xl">
            Built for Homeowners Who Expect Lasting Quality
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {valuePoints.map((point) => (
              <div key={point} className="flex gap-3 rounded-2xl border border-[#dfe3d9] bg-white/60 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#617358]" />
                <p className="text-base leading-relaxed text-[#2f3530]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
