import { SectionHeading } from "./SectionHeading";

const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Rexha%20Barbers%20Dudley&t=&z=15&ie=UTF8&iwloc=&output=embed";

export function GoogleReviews() {
  return (
    <section id="reviews" className="section-container">
      <SectionHeading align="center" eyebrow="Google Reviews" title="What our clients are saying">
        We’re proud of our five-star reputation – explore the latest Google feedback without leaving the site.
      </SectionHeading>
      <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-primary/30 bg-black/60 shadow-2xl shadow-black/60">
        <iframe
          title="Google reviews for Rexha Barbers"
          src={GOOGLE_MAPS_EMBED_URL}
          allowFullScreen
          loading="lazy"
          className="h-[600px] w-full"
        />
      </div>
    </section>
  );
}
