import { BOOKING_LINK } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#b91c1c33,transparent_75%)]" />
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl gradient-ring opacity-60" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="section-container flex flex-col items-start gap-12 pb-24 pt-24 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-primaryDark/40 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-primary">
            Dudley's Red & Black Barbershop
          </p>
          <h1 className="font-heading text-5xl leading-tight text-white md:text-7xl">
            Sharp fades, bold colour, Rexha confidence.
          </h1>
          <p className="text-lg text-zinc-200 md:text-xl">
            Step into our High Street studio for precision skin fades, beard detailing, and steam facials. Walk-ins are welcome, and we're open seven days a week.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a className="btn-primary" href={BOOKING_LINK}>
              Call Now
            </a>
            <a className="btn-outline" href="#pricing">
              View Prices
            </a>
          </div>
          <div className="grid gap-4 text-sm text-zinc-300 sm:grid-cols-3 sm:gap-6">
            <div className="rounded-2xl border border-white/10 bg-charcoal/80 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Address</p>
              <p className="mt-2 font-medium text-white">83 High St, Dudley DY1 1QP</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-charcoal/80 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Open Hours</p>
              <p className="mt-2 font-medium text-white">Tue – Sat 09:30 – 20:00</p>
              <p className="text-xs text-zinc-400">Mon &amp; Sun 09:30 – 16:00</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-charcoal/80 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Rated 5 Stars</p>
              <p className="mt-2 font-medium text-white">15 Google reviews</p>
            </div>
          </div>
        </div>
        <div className="relative hidden w-full max-w-md overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-charcoal via-[rgba(31,27,29,0.85)] to-charcoal p-6 shadow-2xl shadow-black/50 lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ef444422,transparent_85%)]" />
          <div className="relative flex flex-1 flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-sm text-zinc-300">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Walk-in Highlights</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Skin fades with razor-sharp detailing from just £10.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Steam facials, colour, and relaxing head massages available daily.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Friendly team focused on fast service without cutting corners.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/40 bg-primary/10 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Hours</p>
              <p className="mt-3 text-3xl font-semibold">Open 7 Days</p>
              <p className="mt-2 text-sm text-zinc-200">Monday & Sunday 09:30 – 16:00 · Tue–Sat 09:30 – 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
