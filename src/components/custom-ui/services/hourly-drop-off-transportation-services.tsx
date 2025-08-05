"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import type { Paras } from "@/lib/services-interface";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const paras: Paras[] = [
  {
    title: "Unmatched Flexibility:",
    content:
      "Ditch the clock-watching. Our hourly drop-off service adapts to your dynamic schedule, ensuring pre-set timelines never limit you. Need an extra stop? No problem! We make adjustments on the fly, prioritizing your convenience and maximizing your productivity.",
  },
  {
    title: "Impeccable Fleet:",
    content:
      "Choose your chariot from sleek Cadillac Escalades and sophisticated Mercedes-Benzes to spacious Chevrolet Suburbans and elegant limousines; our diverse fleet caters to your style and group size, guaranteeing a comfortable and luxurious ride.",
  },
  {
    title: "Professional and Discreet Chauffeurs:",
    content:
      "City that never sleeps, transportation that does not either. Pro Ride Limo is at your service around the clock, whether its an early morning appointment in Sugar Land or a late-night dinner in The Woodlands.",
  },
  {
    title: "24/7 Availability:",
    content:
      "City that never sleeps, transportation that doesn&ansp;t either. Pro Ride Limo is at your service around the clock, whether it&ansp;s an early morning appointment in Sugar Land or a late-night dinner in The Woodlands.",
  },
  {
    title: "Seamless Booking and Management:",
    content:
      "Time is precious. Manage reservations, track drop-offs, and customize your experience effortlessly through our user-friendly platform. Focus on what matters while we handle the logistics.",
  },
];

const paras1: Paras[] = [
  {
    title: "Business Meetings and Events:",
    content:
      "Make a lasting impression at conferences, client lunches, or networking events. Arrive on time, refreshed, and ready to conquer your business goals in style and comfort.",
  },
  {
    title: "Shopping Extravaganzas:",
    content:
      "From The Galleria to Highland Village, conquer Houstons vibrant shopping scene without the hassle of parking or navigation. Let Pro Ride Limo be your shopping bag concierge.",
  },
  {
    title: "Restaurant Hopping and Nightlife Explorations:",
    content:
      "Experience Houstons diverse culinary scene and vibrant nightlife in style. We all drop you off at trendy restaurants, bustling bars, or exclusive clubs, ensuring a seamless night on the town.",
  },
  {
    title: "Personal Errands and Appointments:",
    content:
      "Run errands efficiently, whether dropping off documents downtown, attending doctors appointments, or picking up groceries. We all handle the driving, freeing you to focus on your to-do list.",
  },
  {
    title: "Airport and Train Station Transfers:",
    content:
      "Avoid stressful public transportation and easily navigate airport terminals. We offer convenient drop-offs to George Bush Intercontinental Airport (IAH), William P. Hobby Airport (HOU), and major train stations, ensuring a smooth transition to your travel plans.",
  },
];

export function HourlyDropOffTransportationServices() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-top flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/service-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl lg:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Hourly Drop Off Transportation Services: <br /> Pro Ride Limo
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
            Tired of rigid transportation schedules and frustrating detours? Pro
            Ride Limo redefines on-demand mobility in Houston with our
            <span className="text-black">
              premium hourly drop off transportation services.
            </span>
            Ditch the stress of driving and embrace seamless point to point
            transfers whenever needed, day or night. Whether you are conquering
            business meetings
            <span className="text-black">
              Downtown, indulging in retail therapy at The Galleria, or
              exploring trendy hotspots in Montrose,
            </span>
            Pro Ride Limo is your chariot, ready to whisk you effortlessly
            wherever you need to be.
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
              Why Choose Pro Ride Limo: Hourly Drop Off Transportation Services?
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
              src="/assets/images/service-14.webp"
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
              src="/assets/images/service-15.jpg"
              alt="Cadillac Interior"
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Your Personal City Navigator:
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
