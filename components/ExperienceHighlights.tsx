const highlights = [
  {
    title: "Skin fades & classics",
    description: "Experienced barbers offering fresh fades, sharp tapers and traditional cuts tailored to you."
  },
  {
    title: "Family-friendly",
    description: "Kids, teens and gents all welcome – one price list for the whole household with loyalty discounts in shop."
  },
  {
    title: "Open daily",
    description: "We’re here 7 days a week with late nights Tuesday through Saturday to fit around work and school."
  }
];

export function ExperienceHighlights() {
  return (
    <section className="section-container">
      <div className="grid gap-8 rounded-[3rem] border border-primary/20 bg-black/60 p-12 shadow-2xl shadow-black/50 backdrop-blur md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Why locals choose us</p>
          <h2 className="font-heading text-3xl text-white md:text-4xl">Fresh looks, welcoming atmosphere.</h2>
          <p className="text-sm text-slate-300">
            We keep the music lively, the conversation easy and the fades crisp. Drop by for a trim, a beard tidy or a full
            restyle – we’ll make sure you leave feeling sharp.
          </p>
        </div>
        <div className="md:col-span-3 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
