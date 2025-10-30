export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-black/90">
      <div className="section-container flex flex-col gap-6 py-12 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold uppercase tracking-[0.4em] text-primary">Rexha Barbers</p>
          <p className="mt-2 max-w-md text-sm text-slate-300">83 High St, Dudley DY1 1QP · Open 7 days</p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:text-right">
          <a href="tel:+447487596780" className="transition hover:text-primary">
            07487 596780
          </a>
          <a href="mailto:rexha-barbers@gmail.com" className="transition hover:text-primary">
            rexha-barbers@gmail.com
          </a>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Rexha Barbers. Proudly serving Dudley.</p>
      </div>
    </footer>
  );
}
