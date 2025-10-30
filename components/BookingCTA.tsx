export function BookingCTA() {
  return (
    <section id="visit" className="section-container">
      <div className="relative overflow-hidden rounded-[3rem] border border-primary/30 bg-black/70 p-12 shadow-2xl shadow-black/60">
        <div className="absolute -top-12 right-12 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Visit us</p>
            <h3 className="font-heading text-3xl text-white md:text-4xl">Swing by or give us a shout</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold text-white">Contact</h4>
                <p className="mt-3 text-sm text-slate-300">83 High St, Dudley DY1 1QP</p>
                <div className="mt-4 space-y-2 text-sm">
                  <a className="block text-primary transition hover:text-white" href="tel:+447487596780">
                    07487 596780
                  </a>
                  <a className="block text-primary transition hover:text-white" href="mailto:rexha-barbers@gmail.com">
                    rexha-barbers@gmail.com
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold text-white">Opening hours</h4>
                <dl className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-300">
                  <div className="flex items-center justify-between gap-6">
                    <dt>Monday</dt>
                    <dd>09:30 - 16:00</dd>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <dt>Tuesday</dt>
                    <dd>09:30 - 20:00</dd>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <dt>Wednesday</dt>
                    <dd>09:30 - 20:00</dd>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <dt>Thursday</dt>
                    <dd>09:30 - 20:00</dd>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <dt>Friday</dt>
                    <dd>09:30 - 20:00</dd>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <dt>Saturday</dt>
                    <dd>09:30 - 20:00</dd>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <dt>Sunday</dt>
                    <dd>09:30 - 16:00</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-2xl border border-primary/40 bg-primary/10 p-6 text-sm text-slate-200">
              <p>Walk-ins are always welcome and we accept cash or card. Find us opposite Dudley Market Place.</p>
            </div>
            <a className="btn-primary justify-center" href="tel:+447487596780">
              Call to book now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
