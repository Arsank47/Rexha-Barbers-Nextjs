import { services } from "@/lib/data/services";
import { SectionHeading } from "./SectionHeading";

export function ServiceGrid() {
  return (
    <section id="services" className="section-container">
      <SectionHeading eyebrow="Services" title="Tailored Grooming Experiences">
        Select from our curated menu designed for discerning professionals. Each service pairs meticulous technique with premium
        products to deliver lasting style.
      </SectionHeading>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="card-surface">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{service.description}</p>
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
                {service.duration}
              </span>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
              <span>Investment</span>
              <span className="text-lg font-semibold text-gold">{service.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
