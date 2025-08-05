"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import type { Paras } from "@/lib/services-interface";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const paras: Paras[] = [
  {
    title: "Unrivaled Fleet:",
    content:
      "Ditch the ordinary, choose the extraordinary. Our diverse fleet boasts sleek Cadillac Escalades, sophisticated Mercedes-Benzes, spacious Chevrolet Suburbans, and elegant limousines, accommodating your group size and exceeding your expectations.",
  },
  {
    title: "Impeccable Service:",
    content:
      "Sit back, relax, and let our professional chauffeurs handle the logistics. We navigate Houstons roads with finesse, delivering you to the Galveston Cruise Terminal on time and in style.",
  },
  {
    title: "24/7 Availability:",
    content:
      "Early morning flights? Last-minute changes? We are at your service around the clock. Enjoy peace of mind knowing Pro Ride Limo is always ready to adapt to your dynamic vacation plans.",
  },
  {
    title: "Seamless Booking and Management:",
    content:
      "Streamline your experience. Our user-friendly website and responsive team make booking your Houston cruise transportation a breeze, freeing up your time for packing and anticipation.",
  },
  {
    title: "Stress Free Returns:",
    content:
      "Your cruise may end, but the Pro Ride Limo experience does not. We all await you when you return, ensuring a smooth and comfortable journey back to the airport or your Houston destination.",
  },
];

const paras1: Paras[] = [
  {
    title: "Airport to Cruise Terminal Transfers:",
    content:
      "Glide easily from the arrivals hall to the cruise ship deck. Our punctual and efficient airport transfer service gets you to the Galveston Cruise Terminal relaxed and ready to embark on your adventure.",
  },
  {
    title: "Group Cruise Transportation:",
    content:
      "Traveling with family or friends? No problem! Our spacious Chevrolet Suburbans and GMC Yukon XL Denalis comfortably accommodate larger groups, ensuring everyone arrives together and ready to explore the world.",
  },
  {
    title: "Luggage Assistance:",
    content:
      "Let us handle the heavy lifting. Our professional chauffeurs will gladly assist with your luggage, making the start and end of your cruise vacation seamless and stress-free.",
  },
  {
    title: "Airport Transfers:",
    content:
      "Welcome out-of-town guests in style with our reliable airport transfer services. We all whisk them directly to your wedding venue, setting the tone for a seamless and celebratory weekend.",
  },
  {
    title: "Point to Point Transfers:",
    content:
      "Need to reach a specific hotel or location before or after your cruise? Our point-to-point transfers provide reliable and efficient transportation within Houston, ensuring your vacation itinerary flows smoothly.",
  },
  {
    title: "Special Occasions:",
    content:
      "Make your cruise even more memorable. Celebrate birthdays, anniversaries, or honeymoons with our luxurious limousine service, adding a touch of elegance and romance to your voyage.",
  },
];

export function CruiseTransportationServices() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-top flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/service-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl lg:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Cruise Transportation Services: <br /> Pro Ride Limo
        </h1>
        <div className="relative h-1 w-70 bg-sky-400 my-6"></div>
        <div className="relative flex items-center justify-center gap-10">
          <Button className="uppercase py-5 bg-white text-black cursor-pointer px-8 border">
            Call Us
          </Button>
          <Button className="uppercase text-black cursor-pointer bg-white py-5 px-8 border">
            Book Now
          </Button>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 md:px-10 lg:px-70 mb-20">
        <div className="space-y-10">
          <p className="text-neutral-600 text-justify text-lg">
            Trading Houston traffic for shimmering seas? Let Pro Ride Limo
            elevate your cruise vacation from the moment you set sail. From
            whisking you away from George Bush
            <span className="text-black">
              Intercontinental Airport (IAH) or William P. Hobby Airport (HOU)
            </span>
            to ensuring a smooth arrival at the
            <span className="text-black">Galveston Cruise Terminal,</span>
            we provide premium transportation you can rely on. Ditch the crowded
            shuttles and embark on your adventure in luxurious comfort and
            unwavering style. So, book our
            <span className="text-black">cruise transportation services!</span>
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="uppercase py-5 px-8 border">Call Us</Button>
            <Button className="uppercase py-5 px-8 border">Book Now</Button>
          </div>
        </div>

        {/* Left Text, Right Image */}
        <div className="w-full flex justify-center flex-wrap gap-14 mt-16">
          <div className="flex-1 space-y-4 mt-3">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Why Choose Pro Ride Limo: Cruise Transportation Services in
              Houston?
            </h2>
            {paras.map((para: Paras, _i: number) => (
              <p key={_i} className="text-neutral-600 text-justify text-lg">
                <span className="text-black">{para.title}</span> {para.content}
              </p>
            ))}
            <div className="flex items-center gap-4 mt-2">
              <Button className="uppercase py-5 px-8 border">Call Us</Button>
              <Button className="uppercase py-5 px-8 border">Book Now</Button>
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/service-10.jpg"
              alt="Luxury Cadillac"
              width={600}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Left Image, Right Text */}
        <div className="w-full flex flex-wrap gap-14 mt-16">
          <div className="order-last lg:order-first">
            <Image
              src="/assets/images/service-11.jpg"
              alt="Cadillac Interior"
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Your Gateway to Unforgettable Adventures:
            </h2>
            {paras1.map((para: Paras, _i: number) => (
              <p key={_i} className="text-neutral-600 text-justify text-lg">
                <span className="text-black">{para.title}</span> {para.content}
              </p>
            ))}
            <div className="flex items-center gap-4 mt-2">
              <Button className="uppercase py-5 px-8 border">Call Us</Button>
              <Button className="uppercase py-5 px-8 border">Book Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
