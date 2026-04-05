import type { Metadata } from 'next';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { Navbar } from '@/components/sections/Navbar';
import { Portfolio } from '@/components/sections/Portfolio';

export const metadata: Metadata = {
  title: 'Projects | Prestige Landscape San Jose',
  description:
    'Explore luxury San Jose landscaping projects by Prestige Landscape, including patios, kitchens, and outdoor living transformations.',
  keywords: ['San Jose landscaping projects', 'luxury backyard design', 'hardscape portfolio'],
};

function ProjectsHero() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Portfolio</p>
        <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-[#111413] md:text-7xl">
          Our Work
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[#3a403b] md:text-xl">
          A selection of outdoor transformations designed for lifestyle, beauty, and long-term value.
        </p>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ProjectsHero />
        <Portfolio />
        <FinalCta href="/contact" />
      </main>
      <Footer />
    </>
  );
}
