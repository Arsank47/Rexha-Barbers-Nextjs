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
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
            Dudley · Since 2010
          </p>
          <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
            Sharp cuts, warm fades & friendly service in the heart of Dudley.
          </h1>
          <p className="text-lg text-slate-200 md:text-xl">
            Rexha Barbers blends traditional barbering with modern style. Walk in or give us a call for skin fades, beard work,
            hot shaves and more — open seven days a week.
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
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
              alt="Outside of Rexha Barbers in Dudley"
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
