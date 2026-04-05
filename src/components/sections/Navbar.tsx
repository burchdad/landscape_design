import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/35 bg-[#0f1111]/78 text-white backdrop-blur-md">
      <nav className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Prestige Landscape
        </Link>

        <ul className="hidden items-center gap-8 text-sm tracking-wide md:flex">
          <li>
            <Link href="/" className="transition hover:text-[#d6dfcf]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/design" className="transition hover:text-[#d6dfcf]">
              Design
            </Link>
          </li>
          <li>
            <Link href="/projects" className="transition hover:text-[#d6dfcf]">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition hover:text-[#d6dfcf]">
              Contact
            </Link>
          </li>
        </ul>

        <Link
          href="/contact"
          className="rounded-full border border-white/60 px-4 py-2 text-sm font-semibold tracking-wide transition hover:bg-white hover:text-black"
        >
          Get Quote
        </Link>
      </nav>
    </header>
  );
}
