"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import type { Paras } from "@/lib/services-interface";
import Image from "next/image";

const paras: string[] = [
  "Experience the epitome of luxury with the Chevrolet Suburban from Pro Ride Luxury Limousine & Executive Chauffeur Service in Houston! For those seeking reliability and cost-effectiveness in their luxury transportation, look no further than our exquisite SUV solutions. Trust us to deliver the finest experiences on Houston&nbsp;s roads, get the best solutions!",
  "Chevrolet Suburban in Houston helps you enjoy a luxurious and comfortable ride for your special event or airport transportation.",
  "We help you enjoy a stylish ride with our professional Chevrolet Suburban transfer in Houston.",
  "With us, you can arrive in style and experience the luxurious comfort of the Chevrolet Suburban SUV that suits your budget and requirement.",
];

const paras1: string[] = [
  "You can find the best Chevrolet Suburban car near Houston at Ride Luxury Limousine & Executive Chauffeur Service!",
  "We provide exclusive Chevrolet Suburban ESV Rentals in Houston for weddings, executive transfers, or airport transportation. Our luxury Chevrolet Suburban ESV for rent is equipped with modern technology, high-end style, and feature that provide ultimate comfort and high performance. Chevrolet Suburban Houston that ensures luxury, comfort, and safety.",
  "If you want to enjoy smooth navigation in the Chevrolet Suburban ESV, rely on us!",
];

const paras2: string[] = [
  "A Chevrolet Suburban is all about sophistication and luxury. Chevrolet Suburban in Houston to enjoy a stylish ride to impress everyone. We can help you book a luxury Chevrolet Suburban for special events, airport transportation, or executive transfer.",
  "You can enjoy the high-tech entertainment features and comfort by booking from us the Chevrolet Suburban rental package in Houston.",
];

const paras3: Paras[] = [
  {
    title: "Top Performance-",
    content:
      "The Chevrolet Suburban delivers top-performance and has striking features. If you want to enjoy a sleek and stylish ride, consider booking Chevrolet Suburban!",
  },
  {
    title: "High-End Comfort-",
    content:
      "The spacious and sophisticated interior of the Chevrolet Suburban offers utmost comfort and helps you enjoy a luxurious travel experience. There is ample room to relax during the transportation in an exclusive Chevrolet Suburban.",
  },
  {
    title: "Safe Transportation:",
    content:
      "There is enough seating for around seven passengers in Chevrolet Suburban. Passengers commuting with heavy baggage can get enough space and enjoy comfortable transportation.",
  },
  {
    title: "Modern Entertainment Options:",
    content:
      "The Chevrolet Suburban rental from Pro Ride Luxury Limousine & Executive Chauffeur Service ensures high-end digital entertainment with a premium sound system.",
  },
];

export function ChevroletSuburbanInHouston() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/fleet-11.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl lg:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Chevrolet Suburban In <br /> Houston
        </h1>
      </section>

      {/* Content Sections */}
      <section className="px-6 md:px-10 lg:px-70 mb-20">
        {/* Left Text, Right Image */}
        <div className="w-full flex justify-center flex-wrap gap-14">
          <div className="flex-1 space-y-4 mt-3">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Chevrolet Suburban in Houston
            </h2>
            {paras.map((para: string, _i: number) => (
              <p key={_i} className="text-neutral-600 text-justify text-lg">
                {para}
              </p>
            ))}
          </div>
          <div>
            <Image
              src="/assets/images/fleet-12.jpg"
              alt="Luxury Cadillac"
              width={550}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Left Image, Right Text */}
        <div className="w-full flex flex-wrap gap-14 mt-16">
          <div className="order-last lg:order-first">
            <Image
              src="/assets/images/fleet-13.jpg"
              alt="Cadillac Interior"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              The Best Chevrolet Suburban Near Houston
            </h2>
            {paras1.map(function (para: string, _i: number) {
              return (
                <p key={_i} className="text-neutral-600 text-justify text-lg">
                  {para}
                </p>
              );
            })}
          </div>
        </div>

        {/* Left Text, Right Image */}
        <div className="w-full flex justify-center flex-wrap gap-14 mt-16">
          <div className="flex-1 space-y-4 mt-3">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Chevrolet Suburban in Houston
            </h2>
            {paras2.map(function (para: string, _i: number) {
              return (
                <p key={_i} className="text-neutral-600 text-justify text-lg">
                  {para}
                </p>
              );
            })}
          </div>
          <div>
            <Image
              src="/assets/images/fleet-14.jpg"
              className="object-cover rounded-lg"
              width={600}
              height={300}
              alt="Mercedes limo"
            />
          </div>
        </div>

        {/* Image with Text Below */}
        <div className="flex flex-col mt-16">
          <Image
            src="/assets/images/fleet-15.jpg"
            alt="Cadillac on Road"
            width={800}
            height={200}
            className="rounded-lg"
          />
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl font-semibold mt-4">
              Experience Ultimate Luxury and Style when you Book Chevrolet
              Suburban in Houston
            </h2>
            {paras3.map(function (para: Paras, _i: number) {
              return (
                <p key={_i} className="text-neutral-600 text-justify text-lg">
                  <span className="text-black">{para.title}</span>
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
