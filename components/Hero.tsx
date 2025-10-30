import { BOOKING_LINK } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b,transparent_60%)]" />
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl gradient-ring opacity-30" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="section-container flex flex-col items-start gap-12 pb-28 pt-24 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
            Modern Grooming Studio
          </p>
          <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
            Precision Cuts & Refined Grooming for the Modern Professional
          </h1>
          <p className="text-lg text-slate-300 md:text-xl">
            Experience a private lounge environment where classic craftsmanship meets contemporary style. Every appointment is
            tailored, unrushed, and designed to elevate your everyday look.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a className="btn-primary" href={BOOKING_LINK} target="_blank" rel="noreferrer">
              Reserve a Chair
            </a>
            <a className="btn-outline" href="#services">
              Explore Services
            </a>
          </div>
        </div>
        <div className="relative hidden aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[3rem] border border-white/5 bg-gradient-to-br from-slate-900/40 via-slate-900/10 to-slate-900/60 p-6 shadow-2xl shadow-black/50 md:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#334155,transparent_70%)]" />
          <div className="relative flex flex-1 flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">This Week</p>
              <p className="mt-3 text-3xl font-semibold text-white">Rexha Signature Fade</p>
              <p className="mt-2 text-sm text-slate-300">
                A complete grooming ritual with hot towel finish, scalp massage, and styling consultation.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/10 p-5">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Duration</span>
                <span className="font-semibold text-white">45 Minutes</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Barber</span>
                <span className="font-semibold text-white">Arben Rexha</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Rate</span>
                <span className="font-semibold text-gold text-lg">$45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
