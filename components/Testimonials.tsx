import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-container">
      <SectionHeading align="center" eyebrow="Testimonials" title="Trusted by New York's Creators & Leaders">
        We earn loyalty through consistency, craft, and an uncompromising standard for detail.
      </SectionHeading>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="card-surface flex flex-col gap-6">
            <p className="text-lg text-slate-200">“{testimonial.quote}”</p>
            <div>
              <p className="text-sm font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{testimonial.role}</p>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
