import Image from "next/image";
import { galleryImages } from "@/lib/data/gallery";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  return (
    <section id="gallery" className="section-container">
      <SectionHeading align="center" eyebrow="Gallery" title="Red & black vibes from every angle">
        A glimpse at our service board, interior setup, and street presence. Pop in to feel the atmosphere for yourself.
      </SectionHeading>
      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/30 backdrop-blur ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
