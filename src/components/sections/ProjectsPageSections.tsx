const projects = [
  {
    title: 'Willow Glen Resort Yard',
    label: 'Poolside Entertaining',
    description:
      'A layered backyard transformation with lounge zones, refined hardscaping, and lighting designed for evening hosting.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Los Gatos Outdoor Kitchen',
    label: 'Indoor-Outdoor Living',
    description:
      'A warm contemporary patio with custom kitchen integration, architectural shade, and durable finish selections.',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Silver Creek Modern Garden',
    label: 'Low-Maintenance Luxury',
    description:
      'Clean planting geometry, crisp stonework, and quiet transitions that elevate curb appeal and long-term usability.',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Almaden Family Courtyard',
    label: 'Gathering Space',
    description:
      'A family-first layout built around movement, shade, and durable entertainment areas that feel polished year-round.',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7f34b5f5a2f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Saratoga Fire Lounge',
    label: 'Evening Ambience',
    description:
      'A hospitality-inspired backyard centered on a fire feature, soft lighting, and high-contrast material pairings.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Cambrian Garden Retreat',
    label: 'Custom Landscape Build',
    description:
      'A complete front-and-back transformation balancing privacy planting, circulation, and architectural hardscape.',
    image:
      'https://images.unsplash.com/photo-1600566752547-1647f4f8187b?auto=format&fit=crop&w=1600&q=80',
  },
];

export function ProjectsProofGrid() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="section-shell">
        <div className="mb-12 max-w-4xl">
          <p className="text-sm leading-relaxed text-[#353b36] md:text-lg">
            Each project is designed around the way a homeowner wants to live outdoors. We focus on
            layout, material discipline, and finished details that feel elevated long after the install is complete.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[1.7rem] border border-white/50 bg-white/70 shadow-luxe">
              <div
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.18)), url(${project.image})` }}
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#67725f]">{project.label}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#111413]">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#3d433f]">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjectStory() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="section-shell grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-stretch">
        <div
          className="min-h-[420px] rounded-[2rem] bg-cover bg-center shadow-luxe"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.32)), url(https://images.unsplash.com/photo-1600585154205-0e4f4b0c3a1f?auto=format&fit=crop&w=1800&q=80)',
          }}
        />
        <div className="rounded-[2rem] bg-[#111513] p-8 text-white shadow-luxe md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9eb495]">Project Recap</p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-semibold md:text-5xl">
            Built Around Entertaining, Family Time, and Quiet Luxury
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">Approx. Scope</p>
              <p className="mt-2 text-lg text-white/90">Full backyard transformation</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">Project Focus</p>
              <p className="mt-2 text-lg text-white/90">Outdoor kitchen + fire lounge</p>
            </div>
          </div>
          <p className="mt-8 text-base leading-relaxed text-white/78">
            The goal was to create a backyard that felt composed and resort-like without losing warmth.
            We used strong circulation lines, layered seating zones, and durable finish selections to make the space
            beautiful in the day and atmospheric at night.
          </p>
        </div>
      </div>
    </section>
  );
}
