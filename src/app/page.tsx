import { AboutValue } from '@/components/sections/AboutValue';
import { ContactSection } from '@/components/sections/ContactSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/sections/Navbar';
import { Portfolio } from '@/components/sections/Portfolio';
import { Process } from '@/components/sections/Process';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { WhyPrestige } from '@/components/sections/WhyPrestige';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutValue />
        <WhyPrestige />
        <Process />
        <Portfolio />
        <Testimonials />
        <FinalCta />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
