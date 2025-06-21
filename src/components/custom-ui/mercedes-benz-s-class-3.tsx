"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import Image from "next/image";

const paras = [
  "Are you looking for a Black Car service or executive transportation in Houston? Mercedes Benz s class Houston from Pro Ride Luxury Limousine & Executive Chauffeur Service! We provide Brand New Mercedes Benz S Class for rent with professional chauffeur services in Houston.",
  "Book Luxury Brand New Mercedes Benz S Class from us to enjoy a celebrity-style commuting experience. Whether a business meeting or an event, you can enjoy stylish transportation with our Mercedes s class Car in Houston.",
];

const paras1 = [
  "Our Brand New Mercedes Benz S-CLASS has the most sophisticated automotive safety systems, powerful V-8 engine, and luxurious interior. We provide you with reliable, prompt, and comfortable transportation. Whether it is about airport service, business transportation, or a leisure trip, we can meet your travel requirements.",
  "Our Brand New Mercedes Benz S Class radiates luxury and elegance! Mercedes is one of the top names; its S Class models are the favorite among the executive class.",
  "Do you want to travel in a top-class vehicle? Book our Houston luxury Mercedes Benz rental that reflects your sophisticated style and taste! Book Mercedes s class Houston for enjoying comfort and luxury.",
];

const paras2 = [
  "Our Mercedes Benz S Class in Houston ensures the most prominent transportation. You enjoy nothing less than comfort and class with our Mercedes Benz car book service in Houston.",
  "Customer service and support are available 24 hours- 7 days a week.",
  "You can book a luxury Brand New Mercedes Benz S Class at your convenience.",
  "We provide the best Houston luxury Mercedes Benz car according to your travel preference and requirements.",
  "Do you want to make a stylish entry for your corporate meeting or glamorous event in Houston? Make an impressive entrance with elegance and panache by hiring our Houston luxury Brand New Mercedes Benz S Class! ",
  "The elegant Brand New Mercedes Benz S Class boasts comfort, luxury, and safety to enhance your style. Brand New Mercedes Benz S Class with a robust V-8 engine and industry-leading technology is one of the best luxury sedans. The vehicle accommodates three individuals and has enough room for luggage.",
  "We maintain the Brand New Mercedes Benz S Class in its best condition. Mercedes s class for wedding in Houston and get the best for experienced chauffeurs.",
];

export function MercedesBenzSClass3() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-top flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/fleet-5.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-4xl md:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Mercedes Benz S Class
        </h1>
      </section>

      {/* Content Sections */}
      <section className="px-6 md:px-10 lg:px-70 mb-20">
        {/* Left Text, Right Image */}
        <div className="w-full flex justify-center flex-wrap gap-14">
          <div className="flex-1 space-y-4 mt-3">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Brand New Mercedes Benz S Class
            </h2>
            {paras.map((para: string, _i: number) => (
              <p key={_i} className="text-neutral-600 text-justify text-lg">
                {para}
              </p>
            ))}
          </div>
          <div>
            <Image
              src="/assets/images/fleet-6.jpg"
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
              src="/assets/images/fleet-3.jpg"
              alt="Cadillac Interior"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Mercedes Car Houston
            </h2>
            {paras1.map((para: string, _i: number) => (
              <p key={_i} className="text-neutral-600 text-justify text-lg">
                {para}
              </p>
            ))}
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
              Why Book Luxury Brand New Mercedes Benz S Class?
            </h2>
            {paras2.map(function (
              para: string,
              _i: number
            ) {
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
