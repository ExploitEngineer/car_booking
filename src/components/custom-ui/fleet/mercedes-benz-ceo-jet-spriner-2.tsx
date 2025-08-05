"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import Image from "next/image";

const paras: string[] = [
  "Do you want to Mercedes Sprinter Van limo service in Houston? Rely on us to get Brand New Exclusive VIP Mercedes Benz CEO/JET Sprinter! Mercedes Benz sprinter van in Houston to shuttle executives or a group!",
  "Our Brand New Exclusive VIP Mercedes Benz CEO/JET Sprinter is about safety and comfort.",
  "Shuttling a group of executives in Houston! Booking our Mercedes-Benz Sprinter Executive Van is the best.",
  "It has ample space, side step-in heights, a best-in-Class roof, and a wide entry.",
];

const paras1: string[] = [
  "Highly trained chauffeurs know the local area, streets, and venues.",
  "Ensure a smooth and comfortable ride to and from your destination.",
  "Brand new vehicle in top class condition having a pleasant interior.",
  "We are a reliable limo service provider in Houston with experience in handling the transportation of executives from Fortune 500 companies.",
  "You can get one of the best Mercedes Sprinter Van in Houston with us!",
  "We provide you a Brand New Exclusive VIP Mercedes Benz CEO/JET Sprinter with perfect commuting in a large group.",
  "You can get customized transportation solutions.",
  "Whether attending an event, seminar, or conference in Houston, consider our Mercedes Sprinter Van limo service in Houston to get the best. We ensure your guests or executives experience luxurious and first-class transportation in Houston.",
  "Our expert team is ready to provide you with 24/7 customer support and transportation service with utmost care. Consider booking our Brand New Exclusive VIP Mercedes Benz CEO/JET Sprinter for executive or group transportation.",
  "We never want you to compromise with the traveling comfort. Our Mercedes CEO Sprinter in Houston, TX, is to make commuting comfortable and hassle-free. Black Car or Mercedes Benz JET Sprinter is convenient for traveling across Houston.",
  "You get a completely customized and the best travel solution that ensures a luxurious commuting experience.",
  "Contact us for booking a Brand New Exclusive VIP Mercedes Benz CEO/JET Sprinter in Houston! Pro Ride Luxury Limousine & Executive Chauffeur Service is 24/7 available to handle your request!",
];

export function MercedesBenzCeoJetSprinter2() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/fleet-7.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl lg:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Exclusive VIP Mercedes <br /> Benz CEO/JET Sprinter
        </h1>
      </section>

      {/* Content Sections */}
      <section className="px-6 md:px-10 lg:px-70 mb-20">
        {/* Left Text, Right Image */}
        <div className="w-full flex justify-center flex-wrap gap-14">
          <div className="flex-1 space-y-4 mt-3">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              A Brand New Exclusive VIP Mercedes Benz CEO/JET Sprinter
            </h2>
            {paras.map((para: string, _i: number) => (
              <p key={_i} className="text-neutral-600 text-justify text-lg">
                {para}
              </p>
            ))}
          </div>
          <div className="">
            <Image
              src="/assets/images/fleet-8.jpg"
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
              src="/assets/images/fleet-9.jpg"
              alt="Cadillac Interior"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Luxury Sprinter Van Houston
            </h2>
            <p className="text-neutral-600 text-justify text-lg">
              Safety and comfort matter the most for the transportation of a
              group of business executives in Houston. Pro Ride Luxury Limousine
              & Executive Chauffeur Service provides the Brand New Exclusive VIP
              Mercedes Benz CEO/JET Sprinter for rent. It helps you get the best
              solution for the transportation of a group of business executives.
              Mercedes Sprinter in Houston and ensures the perfect combination
              of security, class, and comfort.
            </p>
          </div>
        </div>

        {/* Image with Text Below */}
        <div className="flex flex-col mt-16">
          <Image
            src="/assets/images/fleet-10.jpg"
            alt="Cadillac on Road"
            width={800}
            height={200}
            className="rounded-lg"
          />
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl font-semibold mt-4">
              Why Mercedes Sprinter Jet CEO in Houston from Pro Ride Limo?
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
