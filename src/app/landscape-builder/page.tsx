import type { Metadata } from 'next';
import { BuilderFormSection, BuilderHero } from '@/components/sections/BuilderPageSections';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { Navbar } from '@/components/sections/Navbar';
import { PromiseSection } from '@/components/sections/PromiseSection';

export const metadata: Metadata = {
  title: 'Already Have a Design? | Prestige Landscape San Jose',
  description:
    'Work with Prestige Landscape as your premium San Jose build partner when you already have a landscape design or plans in hand.',
  keywords: ['landscape builder San Jose', 'already have landscape plans', 'landscape construction San Jose'],
};

export default function LandscapeBuilderPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <BuilderHero />
        <BuilderFormSection />
        <PromiseSection />
        <FinalCta href="/contact" />
      </main>
      <Footer />
    </>
  );
}