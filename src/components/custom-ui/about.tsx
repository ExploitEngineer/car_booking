"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const paras = [
  "Welcome to Pro Ride Luxury Limousine & Executive Chauffeur Service, the best Limousine service in the Houston area! When it comes to your Executive or Personal Transportation, Pro Ride Limousine provides only the most ideal and efficient service. With the late model only fleet in town, we are only a phone call away.",
  "We will take you to any destination you desire, and it will be done in style and comfort. We carry an assortment of vehicles, including Luxury SUV’s, Stretch Limousines, Luxury Sedan’s, and more in order to accommodate you and your clientele with what you need at affordable limousine rates and with the most professional level of service. Prompt, Discreet, Reliable & Safe.",
  "Expect the best of everything. We are dedicated to getting you there on time with an outstanding service that makes any special event truly memorable! With an unmatched scope of capability.",
];

const cards = [
  {
    title: "Our Staff",
    content:
      "All our staff members and Chauffeurs are highly professional & experienced, we take pride in our services.",
  },
  {
    title: "Our Mission",
    content:
      "Our aim is to provide exceptional experience to the clients at a competitive rates. We proudly offer a late model & exclusive fleet and tend to focus on value being delivered.",
  },
  {
    title: "Values",
    content:
      "Exclusive Late Model Fleet Professional Certified Chauffeurs Permitted & Commercially Insured",
  },
];

export function AboutUs() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/fleet-16.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl lg:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          About Pro Ride Limo <br /> Houston
        </h1>
      </section>

      {/* Content Sections */}
      <section className="px-6 md:px-10 lg:px-70 mb-20">
        {/* Left Image, Right Text */}
        <div className="w-full flex flex-wrap gap-14 mt-16">
          <div className="order-last lg:order-first">
            <Image
              src="/assets/images/fleet-17.jpeg"
              alt="Cadillac Interior"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              About Pro Ride Limo Houston
            </h2>
            {paras.map((para: string, _i: number) => (
              <p key={_i} className="text-neutral-600 text-justify text-lg">
                {para}
              </p>
            ))}
            <Button className="uppercase bg-transparent mt-6 text-black px-6 py-5 cursor-pointer border">
              Get Quote / Book Now
            </Button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full flex justify-between flex-wrap mt-60 gap-16">
          {cards.map((card: { title: string; content: string }, _i: number) => (
            <div key={_i} className="xl:flex-1 lg:flex-1/2 md:flex-1/3 py-5 px-10 bg-gray-100 rounded-lg">
              <h1 className="mb-4 lg:text-4xl text-2xl">{card.title}</h1>
              <p className="text-justify text-neutral-600 text-lg">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
