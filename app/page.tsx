import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ExperienceHighlights } from "@/components/ExperienceHighlights";
import { ServiceGrid } from "@/components/ServiceGrid";
import { BarberShowcase } from "@/components/BarberShowcase";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { GoogleReviews } from "@/components/GoogleReviews";

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#7f1d1d,transparent_70%)]" />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <ExperienceHighlights />
        <ServiceGrid />
        <BarberShowcase />
        <Gallery />
        <GoogleReviews />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
