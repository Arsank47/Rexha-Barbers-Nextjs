import { hours } from "@/lib/data/hours";
import { SectionHeading } from "./SectionHeading";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=rexha+barbers+dudley&hl=en&sxsrf=AE3TifM-vRPt_UmwysMbZKQvIobSwm_A_g%3A1761839820853#";

export function VisitSection() {
  return (
    <section id="contact" className="section-container">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="space-y-8">
          <SectionHeading eyebrow="Visit" title="Find us in the heart of Dudley" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Address</p>
              <p className="mt-3 text-lg font-medium text-white">83 High St, Dudley DY1 1QP</p>
              <p className="mt-4 text-sm text-zinc-300">
                Right opposite the Dudley theory test centre. Paid parking is available on the surrounding streets.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Contact</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-zinc-200">
                <a className="transition hover:text-primary" href="tel:+447487596780">
                  Phone: 07487 596780
                </a>
                <a className="transition hover:text-primary" href="mailto:rexha-barbers@gmail.com">
                  Email: rexha-barbers@gmail.com
                </a>
              </div>
              <p className="mt-4 text-sm text-zinc-300">Walk-ins welcome or call ahead to secure your slot.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">Opening Hours</p>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-200 md:grid-cols-2">
              {hours.map((item) => (
                <li key={item.day} className="flex items-center justify-between rounded-xl border border-white/5 bg-black/40 px-4 py-3">
                  <span>{item.day}</span>
                  <span className="text-primary">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/50 shadow-xl shadow-black/40">
            <iframe
              title="Rexha Barbers Google Map"
              src="https://maps.google.com/maps?q=Rexha%20Barbers%20Dudley&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div id="reviews" className="rounded-[2.5rem] border border-primary/40 bg-primary/10 p-6 shadow-xl shadow-black/30">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-primary">Google Reviews</p>
                <p className="mt-2 text-3xl font-heading text-white">5.0 rating · 15 reviews</p>
                <p className="mt-2 text-sm text-zinc-200">
                  See what locals are saying about their fades, beard trims, and relaxing treatments at Rexha Barbers.
                </p>
              </div>
              <a className="btn-outline border-primary text-white hover:bg-primary hover:text-white" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                View on Google
              </a>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Rexha Barbers Google Reviews"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.6634097575735!2d-2.089287223999844!3d52.51122957198606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bff8fdd390b7%3A0x2e79a87bb32d548e!2sRexha%20Barbers!5e0!3m2!1sen!2suk!4v1730582400000!5m2!1sen!2suk"
                className="h-[260px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
