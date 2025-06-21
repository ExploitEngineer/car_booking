"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const paras = [
  {
    title: "Impeccable Impressions:",
    content:
      "Ditch the ordinary; choose extraordinarily. Our fleet boasts sleek Cadillac Escalades, sophisticated Mercedes-Benzes, spacious Chevrolet Suburbans, and luxurious limousines, guaranteeing an impactful arrival for every occasion.",
  },
  {
    title: "Unwavering Reliability:",
    content:
      "Punctuality is paramount. Our professional chauffeurs prioritize timeliness, navigating Houston’s traffic with finesse to ensure your team meets deadlines and never misses a beat.",
  },
  {
    title: "24/7 Availability:",
    content:
      "Last-minute meetings? Early morning flights? We’re at your service around the clock. Enjoy peace of mind knowing Pro Ride Limo is always ready to cater to your dynamic business needs.",
  },
  {
    title: "Seamless Online Booking:",
    content:
      "Streamline your experience. Our user-friendly website and responsive team make booking corporate transportation in Houston a breeze, freeing up your valuable time for what matters most.",
  },
  {
    title: "Tailored Solutions:",
    content:
      "Businesses are all different. We create bespoke transportation plans that perfectly fit your needs, budget, and schedule, ensuring every ride is an extension of your professional brand.",
  },
];

const paras1 = [
  {
    title: "Airport Transfers:",
    content:
      "Arrive and depart Houston’s George Bush Intercontinental Airport (IAH) and William P. Hobby Airport (HOU) in style and comfort. Greet incoming clients or ensure your team’s swift departures with our reliable airport transportation services.",
  },
  {
    title: "Meeting and Event Transportation:",
    content:
      "Make a lasting impression on clients and colleagues. We provide punctual and professional transportation for conferences, business meetings, and company events, ensuring every detail is flawlessly executed.",
  },
  {
    title: "Executive Road Show Management:",
    content:
      "Coordinate seamless multi-city business trips with ease. Pro Ride Limo handles all logistics, from airport transfers to point-to-point transportation, allowing your team to focus on securing deals and closing partnerships.",
  },
  {
    title: "Point to Point Transfers:",
    content:
      "Need to navigate Houston between meetings or appointments? Our efficient point-to-point transfers ensure your team gets where they need to be with ease and productivity.",
  },
  {
    title: "Luxury Group Transportation:",
    content:
      "Treat your team to a touch of luxury. Our spacious Chevrolet Suburbans and GMC Yukon XL Denalis comfortably accommodate larger groups, providing a relaxed and productive environment for travel and collaboration.",
  },
];

export function CorporateTransportationServices() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-top flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/service-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-4xl md:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Corporate Transportation Services: <br /> Pro Ride Limo
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
            In the fast-paced world of Houston business, every minute counts.
            Let Pro Ride Limo take the wheel and elevate your corporate travel
            experience with seamless, sophisticated, and{" "}
            <span className="text-black">stress-free solutions.</span>From
            high-profile client meetings to airport transfers, our diverse fleet
            of immaculate
            <span className="text-black">vehicles and 24/7 service</span> ensure
            your team arrives on time, in style, and ready to make a lasting
            impression. So, avail our{" "}
            <span className="text-black">
              corporate transportation service!
            </span>
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
              Your Executive Travel Concierge:
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
              src="/assets/images/service-4.webp"
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
              src="/assets/images/service-5.jpg"
              alt="Cadillac Interior"
              width={600}
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
