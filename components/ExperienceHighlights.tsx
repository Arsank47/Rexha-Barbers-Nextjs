const highlights = [
  {
    title: "Private Suites",
    description: "Every service happens in a private grooming suite stocked with curated products and refreshments."
  },
  {
    title: "Premium Products",
    description: "We work exclusively with artisanal grooming labels to ensure lasting finish and scalp health."
  },
  {
    title: "Membership Perks",
    description: "Priority booking windows, quarterly style resets, and exclusive events for members."
  }
];

export function ExperienceHighlights() {
  return (
    <section className="section-container">
      <div className="grid gap-8 rounded-[3rem] border border-white/5 bg-white/5 p-12 shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">The Experience</p>
          <h2 className="font-heading text-3xl text-white md:text-4xl">Not just a haircut — a ritual.</h2>
          <p className="text-sm text-slate-300">
            From the music to the scent of the towels, every detail has been refined to create an environment where you can
            unwind while we work.
          </p>
        </div>
        <div className="md:col-span-3 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/5 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
