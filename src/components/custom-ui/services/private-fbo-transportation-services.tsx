"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import type { Paras } from "@/lib/services-interface";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const paras: Paras[] = [
  {
    title: "Discreet and Elevated Fleet:",
    content:
      "Ditch the ordinary; choose the extraordinary. Our diverse fleet boasts sleek Cadillac Escalades, sophisticated Mercedes-Benzes, spacious Chevrolet Suburbans, and elegant limousines, catering to your group size and exceeding your expectations.",
  },
  {
    title: "Impeccable Service and Local Expertise:",
    content:
      "Our experienced chauffeurs are more than drivers; they are your local aviation and logistics navigators. Expect seamless FBO navigation, unwavering discretion, and expert handling of every detail, ensuring a stress-free journey.",
  },
  {
    title: "24/7 Availability and Unmatched Flexibility:",
    content:
      "Early morning departures? Last-minute schedule changes? We are at your service around the clock, adapting effortlessly to your dynamic itinerary and ensuring you always reach your private jet on time.",
  },
  {
    title: "Seamless Booking and Real Time Tracking:",
    content:
      "Manage your FBO transportation needs with ease. Our user-friendly platform allows you to book reservations, track arrivals in real-time, and adjust on the fly, freeing you to focus on your travel plans.",
  },
  {
    title: "Customizable Solutions:",
    content:
      "Your needs are unique, and so are our offerings. We craft bespoke FBO transportation packages that perfectly match your arrival or departure schedule, group size, and budget, exceeding expectations at every turn.",
  },
];

const paras1: Paras[] = [
  {
    title: "Private Jet Arrivals:",
    content:
      "Step off your private jet and into instant luxury. Our chauffeurs will be waiting for you at your Houston FBO of choice, whisking you away to your city destination in comfort and style.",
  },
  {
    title: "Private Jet Departures:",
    content:
      "Say goodbye to airport stress. We all arrive at your Houston FBO promptly, handling luggage assistance and ensuring a smooth and efficient transition to your private jet.",
  },
  {
    title: "Point to Point Transfers:",
    content:
      "Need to reach your hotel, office, or any other Houston location before or after your flight? Our point-to-point transfers provide reliable and efficient transportation within the city, ensuring your entire journey is seamless.",
  },
  {
    title: "Corporate and Executive Travel:",
    content:
      "Impress clients and colleagues with our professional and reliable FBO transportation services. Make a lasting impression with prompt arrivals, expert navigation, and unwavering discretion.",
  },
  {
    title: "Special Occasions:",
    content:
      "Celebrate milestones and indulge in luxury. Elevate your birthday, anniversary, or business retreat with our luxurious limousine FBO transfers, adding a touch of elegance to your special occasion.",
  },
];

export function PrivateFboTransportationServices() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-top flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/service-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl lg:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Private FBO Transportation Services: <br /> Pro Ride Limo
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
            Are Houston’s bustling commercial airports simply different from
            your style? Pro Ride Limo elevates your
            <span className="text-black">private aviation experience</span>
            with seamless and luxurious
            <span className="text-black">
              FBO (Fixed Base Operator) transportation services.
            </span>
            Bypass crowded terminals and long security lines, glide past the
            city traffic, and arrive at your private jet hangar refreshed and
            ready to embark on your journey in unparalleled comfort.
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
              Why Choose Pro Ride Limo: Private FBO Transportation Services?
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
              src="/assets/images/service-17.jpg"
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
              src="/assets/images/service-18.jpg"
              alt="Cadillac Interior"
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Your Bridge Between Land and Sky:
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
