import { BOOKING_LINK } from "@/lib/constants";

export function BookingCTA() {
  return (
    <section className="section-container">
      <div className="relative overflow-hidden rounded-[3rem] border border-primary/20 bg-gradient-to-br from-primary/20 via-slate-900 to-slate-950 p-12 shadow-2xl shadow-black/40">
        <div className="absolute -top-12 right-12 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-900/80">Book an Experience</p>
            <h3 className="font-heading text-3xl text-slate-950 md:text-4xl">
              Ready for your next appointment?
            </h3>
            <p className="text-base text-slate-900/80">
              Secure your preferred time and barber instantly through our booking partner. Walk-ins are welcome, but reservations
              ensure a private suite and zero wait time.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-900/80">
            <a className="btn-primary bg-slate-950 text-white hover:bg-transparent hover:text-slate-950" href={BOOKING_LINK} target="_blank" rel="noreferrer">
              Book Online
            </a>
            <a className="btn-outline border-slate-300 text-slate-900 hover:border-slate-900 hover:text-slate-900" href="tel:+12125550121">
              Call the Lounge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
