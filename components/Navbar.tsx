const navigation = [
  { name: "Services", href: "#services" },
  { name: "Team", href: "#barbers" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Visit", href: "#visit" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-black/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.35em] text-white">
          <span className="text-primary">Rexha</span> Barbers
        </a>
        <nav className="hidden items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-slate-300 lg:flex">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="transition hover:text-primary">
              {item.name}
            </a>
          ))}
        </nav>
        <a href="tel:+447487596780" className="btn-primary hidden lg:inline-flex">
          Call 07487 596780
        </a>
      </div>
    </header>
  );
}
