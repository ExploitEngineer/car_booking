"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import type { Paras } from "@/lib/services-interface";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const paras: Paras[] = [
  {
    title: "Impeccable Fleet:",
    content:
      "Step into luxury. Choose from our diverse fleet featuring sleek Cadillac Escalades, sophisticated Mercedes-Benzes, spacious Chevrolet Suburbans, and elegant limousines, each meticulously maintained and ready to impress.",
  },
  {
    title: "Discreet and Professional Chauffeurs:",
    content:
      "Our experienced chauffeurs are more than drivers; they are your local experts and confidantes. Expect exceptional service, local knowledge, and unwavering discretion your journey is yours.",
  },
  {
    title: "24/7 Availability:",
    content:
      "Early morning flights? Last-minute appointments? We are at your service around the clock. Let Pro Ride Limo be your flexible extension, adapting effortlessly to your dynamic schedule.",
  },
  {
    title: "Seamless Booking and Management:",
    content:
      "Time is precious. Manage your reservations, track arrivals, and easily customize your experience through our user-friendly platform. Focus on your priorities while we handle the logistics.",
  },
  {
    title: "Tailored Solutions:",
    content:
      "Your needs are unique, and so are our offerings. We craft bespoke chauffeur packages that perfectly match your itinerary, budget, and style, ensuring every ride is an extension of your refined taste.",
  },
];

const paras1: Paras[] = [
  {
    title: "Airport Transfers:",
    content:
      "Let us navigate the hustle and bustle of George Bush Intercontinental Airport (IAH) or William P. Hobby Airport (HOU). Glide through arrivals, avoid crowded shuttles, and arrive at your Houston destination effortlessly.",
  },
  {
    title: "Corporate Transportation:",
    content:
      "Impress clients and colleagues with our professional and reliable corporate car chauffeur services. Make a lasting impression at meetings, conferences, or business dinners, showcasing your attention to detail and commitment to excellence.",
  },
  {
    title: "Point to Point Transfers:",
    content:
      "Leave the map app behind. We handle any journey within Houston, whether a quick hop across town, a leisurely ride to The Galleria, or a late-night outing to Midtown.",
  },
  {
    title: "Airport Transfers:",
    content:
      "Welcome out-of-town guests in style with our reliable airport transfer services. We all whisk them directly to your wedding venue, setting the tone for a seamless and celebratory weekend.",
  },
  {
    title: "Hourly and Daylong Charters:",
    content:
      "Need a chauffeur for the day? Pro Ride Limo is your chariot. Explore Houstons hidden gems, enjoy a shopping spree at Sugar Land Town Square, or embark on a wine tour in the Texas Hill Country ndless possibilities.",
  },
  {
    title: "Special Occasions:",
    content:
      "Make your Houston events unforgettable. Celebrate birthdays, anniversaries, or graduations with our luxurious limousine service, adding a touch of elegance and sophistication to your special day.",
  },
];

export function CarChauffeurServices() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-top flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/service-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl lg:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Car Chauffeur Services: <br /> Pro Ride Limo
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
            Ditch the gridlock and let Pro Ride Limo elevate your Houston
            experience with
            <span className="text-black">bespoke car chauffeur services</span>
            crafted for ultimate comfort, convenience, and unrivaled style.
            Whether navigating bustling downtown meetings, enjoying a night on
            the town in
            <span className="text-black">
              Montrose, or exploring The Woodlands verdant landscape,
            </span>
            our dedicated chauffeurs and immaculate fleet ensure you arrive
            refreshed, relaxed, and ready to make the most of every moment.
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
              Why Choose Pro Ride Limo: Car Chauffeur Services in Houston?
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
              src="/assets/images/service-12.jpg"
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
              src="/assets/images/service-13.jpg"
              alt="Cadillac Interior"
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Your Concierge on Wheels:
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
