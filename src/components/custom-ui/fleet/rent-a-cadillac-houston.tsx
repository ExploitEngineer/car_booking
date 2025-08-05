"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import type { Paras } from "@/lib/services-interface";
import Image from "next/image";

const paras: string[] = [
  "Cadillac escalade ESV car Houston from Pro Ride Luxury Limousine & Executive Chauffeur Service! If you are looking for reliable and cost-effective Luxury Escalade car in Houston, rely on us to get the best solutions!",
  "Cadillac escalade in Houston helps you enjoy a luxurious and comfortable ride for your special event or airport transportation.",
  "We help you enjoy a stylish ride with our professional Cadillac Escalade transfer in Houston.",
  "With us, you can arrive in style and experience the luxurious comfort of the Cadillac Escalade ESV car that suits your budget and requirement.",
];

const paras1: string[] = [
  "You can find the best Cadillac car near Houston at Ride Luxury Limousine & Executive Chauffeur Service!",
  "We provide exclusive Cadillac Escalade ESV Rentals in Houston for weddings, executive transfers, or airport transportation. Our luxury Cadillac Escalade ESV for rent is equipped with modern technology, high-end style, and feature that provide ultimate comfort and high performance. Cadillac escalade Houston that ensures luxury, comfort, and safety.",
  "If you want to enjoy smooth navigation in the Cadillac Escalade ESV, rely on us!",
];

const paras2: string[] = [
  "A Cadillac Escalade is all about sophistication and luxury. Cadillac escalade in Houston to enjoy a stylish ride to impress everyone. We can help you book a luxury Cadillac for special events, airport transportation, or executive transfer.",
  "You can enjoy the high-tech entertainment features and comfort by booking from us the Cadillac Escalade ESV rental package in Houston.",
];

const paras3: Paras[] = [
  {
    title: "Top Performance-",
    content:
      "The Escalade ESV delivers top-performance and has striking features. If you want to enjoy a sleek and stylish ride, consider booking Escalade ESV!",
  },
  {
    title: "High-End Comfort-",
    content:
      "The spacious and sophisticated interior of the Escalade ESV offers utmost comfort and helps you enjoy a luxurious travel experience. There is ample room to relax during the transportation in an exclusive Cadillac Escalade ESV.",
  },
  {
    title: "Safe Transportation:",
    content:
      "The Cadillac Escalade ESV has innovative features to ensure safe transportation for passengers.",
  },
  {
    title: "Storage Solutions:",
    content:
      "There is enough seating for around seven passengers in Cadillac Escalade ESV. Passengers commuting with heavy baggage can get enough space and enjoy comfortable transportation.",
  },
  {
    title: "Modern Entertainment Options:",
    content:
      "The Cadillac Escalade rental from Pro Ride Luxury Limousine & Executive Chauffeur Service ensures high-end digital entertainment with a premium sound system.",
  },
];

export function RentACadillacHouston() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/fleet-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl uppercase lg:text-7xl font-extralight text-white tracking-tight text-center leading-none">
          Cadillac Escalade In <br /> Houston Tx
        </h1>
      </section>

      {/* Content Sections */}
      <section className="px-6 md:px-10 lg:px-70 mb-20">
        {/* Left Text, Right Image */}
        <div className="w-full flex justify-center flex-wrap gap-14">
          <div className="flex-1 space-y-4 mt-3">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Cadillac Escalade In Houston TX
            </h2>
            {paras.map((para: string, _i: number) => (
              <p key={_i} className="text-neutral-600 text-justify text-lg">
                {para}
              </p>
            ))}
          </div>
          <div>
            <Image
              src="/assets/images/fleet-2.jpg"
              alt="Luxury Cadillac"
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Image, Left Text */}
        <div className="w-full flex flex-wrap gap-14 mt-16">
          <div className="order-last lg:order-first">
            <Image
              src="/assets/images/fleet-3.jpg"
              alt="Cadillac Interior"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              The Best Cadillac Car Near Houston
            </h2>
            {paras1.map((para: string, _i: number) => (
              <p key={_i} className="text-neutral-600 text-justify text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Left Text, Right Image */}
        <div className="flex flex-wrap justify-end gap-14 mt-16">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Cadillac Escalade Houston
            </h2>
            {paras2.map((para: string, _i: number) => (
              <p key={_i} className="text-neutral-600 text-justify text-lg">
                {para}
              </p>
            ))}
          </div>
          <div>
            <Image
              src="/assets/images/fleet-4.jpg"
              alt="Cadillac Event"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Image with Text Below */}
        <div className="flex flex-col mt-16">
          <Image
            src="/assets/images/fleet-1.jpg"
            alt="Cadillac on Road"
            width={800}
            height={200}
            className="rounded-lg"
          />
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl font-semibold mt-4">
              Experience Ultimate Luxury and Style when you Book Cadillac
              Escalade ESV in Houston
            </h2>
            {paras3.map(function (para: Paras, _i: number) {
              return (
                <p key={_i} className="text-neutral-600 text-justify text-lg">
                  <span className="text-black">{para.title + " "}</span>
                  {para.content}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
