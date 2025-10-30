import { team } from "@/lib/data/team";
import { SectionHeading } from "./SectionHeading";

export function BarberShowcase() {
  return (
    <section id="barbers" className="section-container">
      <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
        <SectionHeading eyebrow="Our Barbers" title="Meet the Rexha crew" />
        <p className="max-w-xl text-sm text-slate-300 md:text-base">
          Friendly faces, steady hands and serious attention to detail. Whether it’s a fresh fade for the weekend or a tidy-up
          before work, our team has you covered.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} className="flex flex-col gap-6 rounded-[2.5rem] border border-white/10 bg-black/50 p-8 shadow-2xl shadow-black/50">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-primary/30 bg-[radial-gradient(circle_at_top,#7f1d1d,transparent_70%)]" />
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">{member.role}</p>
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-slate-300">{member.bio}</p>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-xs uppercase tracking-[0.3em] text-primary">
              {member.specialty}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
