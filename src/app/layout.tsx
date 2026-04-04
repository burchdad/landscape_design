import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Prestige Landscape | San Jose, CA',
  description:
    'Premium landscaping, hardscaping, and outdoor living transformations in San Jose, California.',
  openGraph: {
    title: 'Prestige Landscape',
    description:
      'Luxury outdoor transformations with custom landscaping and hardscaping expertise in San Jose, CA.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="font-[family-name:var(--font-manrope)] antialiased">{children}</body>
    </html>
  );
}
