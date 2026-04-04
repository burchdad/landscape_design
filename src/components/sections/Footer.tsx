import { Flame, Hammer, Shovel, Trees } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#232826] bg-[#0a0c0b] py-10 text-white/70">
      <div className="section-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-xl font-semibold text-white">Prestige Landscape</p>
          <p className="mt-2 text-sm">San Jose, CA</p>
          <p className="text-sm">(408) 000-0000</p>
          <p className="text-sm">hello@prestigelandscape.com</p>
        </div>

        <div className="flex items-center gap-4 text-white/70">
          <a href="#" aria-label="Design" className="transition hover:text-white">
            <Trees className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Build" className="transition hover:text-white">
            <Hammer className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Outdoor Kitchens" className="transition hover:text-white">
            <Shovel className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Fire Features" className="transition hover:text-white">
            <Flame className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
