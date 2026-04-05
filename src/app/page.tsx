import type { Metadata } from 'next';
import { AboutValue } from '@/components/sections/AboutValue';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/sections/Navbar';
import { Portfolio } from '@/components/sections/Portfolio';
import { Process } from '@/components/sections/Process';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { WhyPrestige } from '@/components/sections/WhyPrestige';

export const metadata: Metadata = {
  title: 'Prestige Landscape | San Jose Landscaping',
  description:
    'Premium San Jose landscaping, hardscaping, and outdoor living design for homeowners seeking luxury results.',
  keywords: ['San Jose landscaping', 'premium landscaper', 'outdoor living San Jose'],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutValue />
        <WhyPrestige />
        <Process showDesignLink />
        <Portfolio preview />
        <Testimonials />
        <FinalCta href="/contact" />
      </main>
      <Footer />
    </>
  );
}
