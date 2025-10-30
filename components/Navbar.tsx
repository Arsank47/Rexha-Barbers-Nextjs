import { BOOKING_LINK } from "@/lib/constants";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Barbers", href: "#barbers" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <div className="section-container flex items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-[0.4em] uppercase text-white">
          <span className="text-gold">Rexha</span> Barbers
        </a>
        <nav className="hidden items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-slate-300 lg:flex">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="transition hover:text-primary">
              {item.name}
            </a>
          ))}
        </nav>
        <a href={BOOKING_LINK} target="_blank" rel="noreferrer" className="btn-primary hidden lg:inline-flex">
          Book Now
        </a>
      </div>
    </header>
  );
}
