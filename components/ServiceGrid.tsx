import Image from "next/image";

import { services } from "@/lib/data/services";
import { SectionHeading } from "./SectionHeading";

export function ServiceGrid() {
  return (
    <section id="services" className="section-container">
      <SectionHeading eyebrow="Services & Prices" title="Everyday value, premium finishes">
        From sharp skin fades to relaxing facials, our full menu keeps you looking fresh without breaking the bank.
      </SectionHeading>
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-[2.5rem] border border-white/10 bg-black/50 p-8 shadow-2xl shadow-black/40">
          <dl className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-white/5 p-5">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-base font-semibold text-white">{service.title}</dt>
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    {service.price}
                  </span>
                </div>
                <dd className="text-sm text-slate-300">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <aside className="hidden h-full flex-col justify-between gap-6 lg:flex">
          <div className="relative flex-1 min-h-[360px] overflow-hidden rounded-[2.5rem] border border-primary/30 bg-black/60 shadow-2xl shadow-black/60">
            <Image
              src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=720&q=80"
              alt="Service price board at Rexha Barbers"
              fill
              className="object-cover"
              sizes="360px"
            />
          </div>
          <p className="text-sm text-slate-300">
            Pop in any day of the week – we keep the same honest prices whether you book ahead or walk in.
          </p>
        </aside>
      </div>
    </section>
  );
}
