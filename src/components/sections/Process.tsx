import { ClipboardPen, Compass, Hammer, CheckCircle2 } from 'lucide-react';

const steps = [
  { title: 'Consultation', description: 'We define your goals, budget, and site vision.', icon: ClipboardPen },
  { title: 'Design', description: 'We map structure, materials, and style into one cohesive plan.', icon: Compass },
  { title: 'Build', description: 'Our team executes with craftsmanship and precise scheduling.', icon: Hammer },
  { title: 'Final Walkthrough', description: 'Every detail is refined before project handoff.', icon: CheckCircle2 },
];

export function Process() {
  return (
    <section className="bg-[#101312] py-20 text-white md:py-28">
      <div className="section-shell">
        <p className="text-xs uppercase tracking-[0.28em] text-[#9eb495]">Our Process</p>
        <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold md:text-5xl">
          A Refined Four-Step Experience
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <Icon className="h-8 w-8 text-[#afc3a2]" />
                  <span className="text-sm text-white/60">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
