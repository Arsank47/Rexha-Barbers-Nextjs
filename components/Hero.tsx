import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7f1d1d,transparent_60%)]" />
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl gradient-ring opacity-30" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="section-container flex flex-col items-start gap-12 pb-28 pt-24 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
            Dudley · Open 7 Days
          </p>
          <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
            Sharp cuts, warm fades & a bold welcome in the heart of Dudley.
          </h1>
          <p className="text-lg text-slate-200 md:text-xl">
            Step inside Rexha Barbers for precision skin fades, beard work and relaxing treatments — all delivered with the same
            red-and-black energy as our High Street shopfront.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a className="btn-primary" href="tel:+447487596780">
              Call to Book
            </a>
            <a className="btn-outline" href="#services">
              View Prices
            </a>
          </div>
        </div>
        <div className="relative hidden w-full max-w-sm overflow-hidden rounded-[3rem] border border-primary/30 bg-black/60 p-6 shadow-2xl shadow-black/70 md:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7f1d1d,transparent_70%)]" />
          <div className="relative h-full min-h-[420px] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/shop-interior-hero.jpg"
              alt="Inside Rexha Barbers with styling chairs and mirrors"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
