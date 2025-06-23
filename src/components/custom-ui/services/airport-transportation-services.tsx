"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const paras = [
  {
    title: "Unmatched Fleet:",
    content:
      "Ditch the ordinary; choose the extraordinary. From sleek Cadillac Escalades and refined Mercedes-Benzes to spacious Chevrolet Suburbans and elegant limousines, we have the perfect vehicle to match your style and group size.",
  },
  {
    title: "Impeccable Service:",
    content:
      "Unwind and let us handle the details. Our professional chauffeurs prioritize your comfort and safety, delivering you to your Houston destination punctually and in style.",
  },
  {
    title: "24/7 Availability:",
    content:
      "Early morning flight? Last-minute arrival? We&nbsp;re at your service, day or night. Our 24/7 operations ensure you are never stranded, providing peace of mind for every travel plan.",
  },
  {
    title: "Stress Free Booking:",
    content:
      "Skip the long lines and booking hassles. Our user-friendly website and responsive team make booking your Houston airport transportation a breeze.",
  },
  {
    title: "Competitive Rates:",
    content:
      "Experience luxury without breaking the bank. We offer competitive rates for all our services, ensuring your grand entrance does not come at a grand cost.",
  },
];

const paras1 = [
  {
    title: "Luxury Airport Arrivals:",
    content:
      "Glide into Houston in ultimate comfort. Sink into the plush leather seats of your chosen vehicle as our chauffeur navigates the cities traffic, making your arrival as smooth as your luggage.",
  },
  {
    title: "Corporate Travel Excellence:",
    content:
      "Impress clients and colleagues with our professional and reliable corporate transportation services. We cater to business travelers arriving at IAH or HOU, ensuring timely and efficient transfers to hotels, meetings, or any Houston destination.",
  },
  {
    title: "Special Event Transportation:",
    content:
      "Our luxurious limousine service will make your Houston event unforgettable. Celebrate weddings, proms, or a night on the town in style and comfort.",
  },
  {
    title: "Group Transportation:",
    content:
      "Traveling with family or friends? Our spacious Chevrolet Suburbans and GMC Yukon XL Denalis comfortably accommodate larger groups, ensuring everyone arrives relaxed and ready to explore Houston together.",
  },
  {
    title: "Point to Point Transfers:",
    content:
      "Need a reliable ride across town? We offer point-to-point transfers throughout Houston, taking you from the airport to your hotel, office, or any desired destination efficiently and courteously.",
  },
];

export function AirportTransportationServices() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-top flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/service-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl lg:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Airport Transportation Services: Pro <br /> Ride Limo
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
            Escape the Houston airport hustle and arrive at your destination in
            effortless luxury with Pro Ride Limo, your gateway to a stress-free
            travel experience. Whether you’re jetting off from{" "}
            <span className="text-black">
              George Bush Intercontinental Airport (IAH) or William P. Hobby
              Airport (HOU),
            </span>{" "}
            our diverse fleet of immaculate vehicles and{" "}
            <span className="text-black">24/7 service</span> ensures a seamless{" "}
            <span className="text-black">from tarmac to Texas charm.</span>{" "}
            Let’s avail our
            <span className="text-black">airport transportation services!</span>
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
              Why Choose Pro Ride Limo: Airport Transportation Services?
            </h2>
            {paras.map(
              (para: { title: string; content: string }, _i: number) => (
                <p key={_i} className="text-neutral-600 text-justify text-lg">
                  <span className="text-black">{para.title}</span>{" "}
                  {para.content}
                </p>
              )
            )}
            <div className="flex items-center gap-4 mt-2">
              <Button className="uppercase py-5 px-8 border">Call Us</Button>
              <Button className="uppercase py-5 px-8 border">Book Now</Button>
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/service-2.jpg"
              alt="Luxury Cadillac"
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Left Image, Right Text */}
        <div className="w-full flex flex-wrap gap-14 mt-16">
          <div className="order-last lg:order-first">
            <Image
              src="/assets/images/service-3.jpg"
              alt="Cadillac Interior"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Your Gateway to Houston Awaits:
            </h2>
            {paras1.map(
              (para: { title: string; content: string }, _i: number) => (
                <p key={_i} className="text-neutral-600 text-justify text-lg">
                  <span className="text-black">{para.title}</span>{" "}
                  {para.content}
                </p>
              )
            )}
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
