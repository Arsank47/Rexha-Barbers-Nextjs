import { pricing } from "@/lib/data/pricing";
import { SectionHeading } from "./SectionHeading";

export function PricingTable() {
  return (
    <section id="pricing" className="section-container">
      <SectionHeading align="center" eyebrow="Prices" title="Transparent pricing, no surprises">
        Every service on our board is listed below. Ask in store about combination packages and loyalty offers.
      </SectionHeading>
      <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/50 shadow-2xl shadow-black/40">
        <div className="grid grid-cols-1 divide-y divide-white/5">
          {pricing.map((item) => (
            <div
              key={item.service}
              className="flex flex-col gap-3 px-6 py-5 text-sm text-zinc-200 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-6"
            >
              <p className="text-base font-medium text-white sm:text-lg">{item.service}</p>
              <span className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
