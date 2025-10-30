import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-container">
      <SectionHeading align="center" eyebrow="Testimonials" title="Loved by locals">
        Word of mouth keeps our chairs full — here’s what clients are saying after their visits.
      </SectionHeading>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="flex flex-col gap-6 rounded-[2.5rem] border border-primary/30 bg-black/50 p-8 shadow-2xl shadow-black/50">
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
