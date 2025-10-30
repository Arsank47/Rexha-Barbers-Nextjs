export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal/90">
      <div className="section-container flex flex-col gap-8 py-12 text-sm text-zinc-400 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <p className="text-white font-heading text-2xl tracking-[0.3em] uppercase">Rexha Barbers</p>
          <p className="max-w-md text-sm text-zinc-300">
            83 High St, Dudley DY1 1QP · Open 7 days a week
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <a href="tel:+447487596780" className="transition hover:text-primary">
            07487 596780
          </a>
          <a href="mailto:rexha-barbers@gmail.com" className="transition hover:text-primary">
            rexha-barbers@gmail.com
          </a>
        </div>
        <div className="space-y-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
          <p>Monday & Sunday 09:30 – 16:00</p>
          <p>Tue – Sat 09:30 – 20:00</p>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-zinc-600">© {new Date().getFullYear()} Rexha Barbers Dudley. All rights reserved.</p>
    </footer>
  );
}
