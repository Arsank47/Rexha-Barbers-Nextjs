import { BOOKING_LINK } from "@/lib/constants";

export function BookingCTA() {
  return (
    <section className="section-container">
      <div className="relative overflow-hidden rounded-[3rem] border border-primary/30 bg-gradient-to-br from-[#b91c1c] via-[#2b1114] to-[#0b0b0f] p-12 shadow-2xl shadow-black/50">
        <div className="absolute -top-16 right-16 h-44 w-44 rounded-full bg-primary/60 blur-3xl" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Secure your slot</p>
            <h3 className="font-heading text-4xl text-white md:text-5xl">
              Ready for a fresh trim?
            </h3>
            <p className="text-base text-zinc-200">
              Give us a quick call to lock in your preferred time. Walk-ins are always welcome, but phoning ahead guarantees your favourite barber and zero waiting around.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-white">
            <a className="btn-primary" href={BOOKING_LINK}>
              Call Now
            </a>
            <a className="btn-outline border-white/60 text-white hover:border-primary hover:text-primary" href="mailto:rexha-barbers@gmail.com">
              Email the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
