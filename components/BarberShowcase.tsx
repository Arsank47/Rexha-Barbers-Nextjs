import { team } from "@/lib/data/team";
import { SectionHeading } from "./SectionHeading";

export function BarberShowcase() {
  return (
    <section id="barbers" className="section-container">
      <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
        <SectionHeading eyebrow="Our Barbers" title="Artists Behind the Craft" />
        <p className="max-w-xl text-sm text-slate-300 md:text-base">
          Each member of the Rexha team honed their craft in renowned grooming lounges around the world. We blend European
          tradition with modern New York energy to deliver a bespoke experience every session.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} className="card-surface flex flex-col gap-6">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <div className="h-full w-full bg-[radial-gradient(circle_at_top,#1f2937,transparent_60%)]" />
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">{member.role}</p>
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-slate-300">{member.bio}</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.3em] text-slate-300">
              {member.specialty}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
