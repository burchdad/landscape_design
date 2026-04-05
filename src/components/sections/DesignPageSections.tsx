import { CheckCircle2, ClipboardPen, Compass, Hammer, Sparkles } from 'lucide-react';

const detailedSteps = [
  {
    title: 'Consultation',
    description:
      'We review your property, goals, and budget to align on scope, style, and performance needs.',
    icon: ClipboardPen,
  },
  {
    title: 'Concept Design',
    description:
      'We develop a cohesive concept with materials, flow, and focal elements tailored to your home.',
    icon: Compass,
  },
  {
    title: 'Construction',
    description:
      'Our build team executes with precision, premium materials, and disciplined project management.',
    icon: Hammer,
  },
  {
    title: 'Final Walkthrough',
    description:
      'We review every finish and detail together to ensure your outdoor space exceeds expectations.',
    icon: Sparkles,
  },
];

const reasons = ['Custom designs', 'High-end materials', 'Experienced team'];

const deliverables = [
  'Clear project direction before construction begins',
  'Material and layout decisions aligned to your home',
  'A smoother handoff from concept into build',
];

export function DesignIntro() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Design & Build</p>
          <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-[#111413] md:text-7xl">
            Our Design & Build Process
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#353a35] md:text-xl">
            Every Prestige project follows a clear framework from discovery through delivery. You get
            strategic planning, transparent communication, and refined execution from one dedicated team.
          </p>
        </div>
      </div>
    </section>
  );
}

export function DesignDetailedProcess() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="section-shell grid gap-6 md:grid-cols-2">
        {detailedSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article key={step.title} className="glass-panel rounded-3xl p-7 shadow-luxe">
              <div className="mb-6 flex items-center justify-between">
                <Icon className="h-9 w-9 text-[#52634a]" />
                <span className="text-sm text-[#596255]">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#111413]">{step.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-[#3e433f]">{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function DesignConsultationFlow() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="section-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-[#111513] p-8 text-white shadow-luxe md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9eb495]">What Happens Next</p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-semibold md:text-5xl">
            A Design Consultation Built to Reduce Guesswork
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/78">
            We begin by understanding how you want the space to function, what visual direction fits your home,
            and what investment range makes sense. From there we shape the project into a buildable plan.
          </p>
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Discovery & Site Review</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                We walk the property, discuss constraints, and identify where design can create the most value.
              </p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Concept Direction</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                We align on layout, mood, materials, and the focal features that will define the space.
              </p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Refinement & Build Readiness</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                We refine the plan so the transition into pricing, scheduling, and construction is clean.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-8 shadow-luxe md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">What You Leave With</p>
          <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#111413] md:text-5xl">
            Confidence Before the Build Starts
          </h3>
          <div className="mt-8 space-y-4">
            {deliverables.map((item) => (
              <div key={item} className="rounded-2xl border border-[#d9ddd3] bg-[#f5f6f1] p-4">
                <p className="text-base text-[#313732]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-[#d7dcd0] bg-white/75 p-8 shadow-luxe md:p-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Why Choose Us</p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-[#111413] md:text-6xl">
            Precision, Craft, and Premium Outcomes
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3 rounded-2xl bg-[#f3f5ef] p-4">
                <CheckCircle2 className="h-5 w-5 text-[#5f7155]" />
                <p className="text-[#283026]">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
