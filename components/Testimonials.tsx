import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-container">
      <SectionHeading align="center" eyebrow="Reviews" title="What clients say on Google">
        Rated five stars with glowing feedback about our fades, family-friendly service, and relaxing treatments.
      </SectionHeading>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="card-surface flex flex-col gap-6">
            <p className="text-lg text-zinc-100">“{testimonial.quote}”</p>
            <div>
              <p className="text-sm font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{testimonial.role}</p>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
