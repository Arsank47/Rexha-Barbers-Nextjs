import { team } from "@/lib/data/team";
import { SectionHeading } from "./SectionHeading";

export function BarberShowcase() {
  return (
    <section id="barbers" className="section-container">
      <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
        <SectionHeading eyebrow="Our Barbers" title="Meet the Rexha crew" />
        <p className="max-w-xl text-sm text-zinc-300 md:text-base">
          A close-knit Albanian team bringing passion, precision, and friendly banter to every appointment. Ask for product tips or style inspiration — we're here to help.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} className="card-surface flex flex-col gap-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black via-[rgba(185,28,28,0.35)] to-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ef444430,transparent_75%)]" />
              <div className="absolute bottom-6 left-6 text-5xl font-heading uppercase tracking-[0.4em] text-white/20">
                {member.name.split(" ").map((part) => part[0]).join("")}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">{member.role}</p>
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-zinc-300">{member.bio}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.3em] text-zinc-300">
              {member.specialty}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
