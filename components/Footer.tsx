export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80">
      <div className="section-container flex flex-col gap-6 py-12 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-white font-semibold tracking-[0.3em] uppercase">Rexha Barbers</p>
          <p className="mt-2 max-w-md text-sm text-slate-400">
            187 Orchard Street, Suite 2B · Lower East Side · New York City
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:text-right">
          <a href="tel:+12125550121" className="transition hover:text-primary">
            (212) 555-0121
          </a>
          <a href="mailto:hello@rexhabarbers.com" className="transition hover:text-primary">
            hello@rexhabarbers.com
          </a>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Rexha Barbers. Crafted with precision.</p>
      </div>
    </footer>
  );
}
