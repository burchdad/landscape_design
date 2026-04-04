export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/35 bg-[#0f1111]/78 text-white backdrop-blur-md">
      <nav className="section-shell flex items-center justify-between py-4">
        <a href="#home" className="text-lg font-semibold tracking-wide">
          Prestige Landscape
        </a>

        <ul className="hidden items-center gap-8 text-sm tracking-wide md:flex">
          <li>
            <a href="#home" className="transition hover:text-[#d6dfcf]">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="transition hover:text-[#d6dfcf]">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="transition hover:text-[#d6dfcf]">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-[#d6dfcf]">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-white/60 px-4 py-2 text-sm font-semibold tracking-wide transition hover:bg-white hover:text-black"
        >
          Get Quote
        </a>
      </nav>
    </header>
  );
}
