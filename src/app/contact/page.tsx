import type { Metadata } from 'next';
import { BuilderUpsellCard } from '@/components/sections/BuilderPageSections';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { Navbar } from '@/components/sections/Navbar';
import { PromiseSection } from '@/components/sections/PromiseSection';

export const metadata: Metadata = {
  title: 'Contact | Prestige Landscape San Jose',
  description:
    'Request a free quote from Prestige Landscape for premium landscaping and outdoor living projects in San Jose.',
  keywords: ['San Jose landscaping quote', 'contact landscaping contractor', 'Prestige Landscape'],
};

function ContactHero() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <p className="text-xs uppercase tracking-[0.28em] text-[#687560]">Contact</p>
        <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-[#111413] md:text-7xl">
          Get Your Free Quote
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[#3a403b] md:text-xl">
          Share your vision and timeline. Our team will follow up with next steps and tailored guidance.
        </p>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ContactHero />
        <ContactSection sectionId="contact-form" showContactInfo />
        <BuilderUpsellCard />
        <PromiseSection />
      </main>
      <Footer />
    </>
  );
}

