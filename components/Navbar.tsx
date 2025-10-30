const navigation = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Visit", href: "#visit" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/30 bg-black/85 backdrop-blur">
      <div className="section-container flex items-center justify-between py-6">
        <a
          href="#top"
          className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.4em] text-white transition hover:text-primary"
        >
          <span className="flex items-center gap-2 text-2xl font-black text-primary">
            R
            <span className="relative flex items-center text-white">
              <svg
                aria-hidden="true"
                className="h-6 w-6 -translate-y-[1px] text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.5 3a1.5 1.5 0 1 1 1.06 2.56l3.72 6.45a2 2 0 0 1 0 2l-2.07 3.59a1.5 1.5 0 1 1-1.3-.75l1.92-3.33-3.71-6.43A1.5 1.5 0 0 1 3.5 3Zm17 0a1.5 1.5 0 1 0-1.06 2.56l-3.72 6.45a2 2 0 0 0 0 2l2.07 3.59a1.5 1.5 0 1 0 1.3-.75l-1.92-3.33 3.71-6.43A1.5 1.5 0 0 0 20.5 3Zm-8.5 11.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
              </svg>
            </span>
            HA
          </span>
          <span className="text-sm font-medium tracking-[0.55em] text-slate-200">BARBERS</span>
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
