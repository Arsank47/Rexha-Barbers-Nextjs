import { BOOKING_LINK } from "@/lib/constants";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Visit", href: "#contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3 text-2xl font-heading uppercase tracking-[0.35em] text-white">
          <span className="text-primary">Rexha</span>
          <span>Barbers</span>
        </a>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-300 lg:flex">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="transition hover:text-primary">
              {item.name}
            </a>
          ))}
        </nav>
        <a href={BOOKING_LINK} className="btn-primary hidden lg:inline-flex">
          Call Now
        </a>
      </div>
    </header>
  );
}
