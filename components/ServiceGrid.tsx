import { services } from "@/lib/data/services";
import { SectionHeading } from "./SectionHeading";

export function ServiceGrid() {
  return (
    <section id="services" className="section-container">
      <SectionHeading eyebrow="Services" title="Everything you need under one roof">
        From classic cuts to modern colour, our team keeps Dudley looking sharp with fast, friendly service and premium products.
      </SectionHeading>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="card-surface">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-zinc-300">{service.description}</p>
              </div>
              <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
                {service.duration}
              </span>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-zinc-300">
              <span>From</span>
              <span className="text-lg font-semibold text-primary">{service.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
