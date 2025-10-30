const highlights = [
  {
    title: "Albanian Craftsmanship",
    description: "Family-run team delivering skin fades, beard work, and colour techniques passed down through generations."
  },
  {
    title: "Walk-Ins Welcome",
    description: "Grab a seat any day of the week. Our barbers keep the queue moving without sacrificing detail."
  },
  {
    title: "Relax & Reset",
    description: "Steam facials, hot towel shaves, and head massages to help you unwind after a long day."
  }
];

export function ExperienceHighlights() {
  return (
    <section className="section-container">
      <div className="grid gap-8 rounded-[3rem] border border-white/10 bg-white/5 p-12 shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">Why Rexha</p>
          <h2 className="font-heading text-3xl text-white md:text-4xl">Red and black energy from the moment you walk in.</h2>
          <p className="text-sm text-zinc-300">
            Brick walls, neon glow, and friendly barbers who know how to make every cut sharp. Drop in for a quick tidy or stay for the full treatment.
          </p>
        </div>
        <div className="grid gap-6 md:col-span-3 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-black/50 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
