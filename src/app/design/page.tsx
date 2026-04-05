import type { Metadata } from 'next';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { Navbar } from '@/components/sections/Navbar';
import { BuilderUpsellCard } from '@/components/sections/BuilderPageSections';
import {
  DesignConsultationFlow,
  DesignDetailedProcess,
  DesignIntro,
  WhyChooseUs,
} from '@/components/sections/DesignPageSections';
import { PromiseSection } from '@/components/sections/PromiseSection';

export const metadata: Metadata = {
  title: 'Design Process | Prestige Landscape San Jose',
  description:
    'Discover the Prestige Landscape design and build process for premium San Jose landscaping projects.',
  keywords: ['San Jose landscaping', 'landscape design San Jose', 'outdoor living design'],
};

export default function DesignPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <DesignIntro />
        <DesignConsultationFlow />
        <DesignDetailedProcess />
        <WhyChooseUs />
        <BuilderUpsellCard />
        <PromiseSection />
        <FinalCta href="/contact" />
      </main>
      <Footer />
    </>
  );
}
