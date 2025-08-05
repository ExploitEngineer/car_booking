"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import type { Paras } from "@/lib/services-interface";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const paras: Paras[] = [
  {
    title: "Unmatched Elegance:",
    content:
      "Step into luxury. Our meticulously maintained limousines boast spacious interiors, plush amenities, and cutting-edge technology, ensuring your journey is as glamorous as your destination.",
  },
  {
    title: "Impeccable Service:",
    content:
      "Experience the Pro Ride difference. Our professional chauffeurs are more than drivers; they are your local connoisseurs and trusted confidantes, offering expert navigation, unwavering discretion, and personalized attention to every detail.",
  },
  {
    title: "24/7 Availability:",
    content:
      "Houston never sleeps, neither do we. Pro Ride Limo is at your service around the clock, ready to cater to late-night outings, early-morning airport runs, or last-minute changes with flexibility and efficiency.",
  },
  {
    title: "Seamless Booking and Management:",
    content:
      "Time is precious. Manage your limousine reservations, track arrivals, and easily tailor your experience through our user-friendly website and responsive team. Focus on savoring the moment while we handle the logistics.",
  },
  {
    title: "Bespoke Experiences:",
    content:
      "All events are different. We craft personalized limousine packages that perfectly match your occasion, theme, and budget, ensuring every ride exceeds your expectations and reflects your unique style.",
  },
];

const paras1: Paras[] = [
  {
    title: "Weddings:",
    content:
      "Make your Houston wedding genuinely magical. Arrive in style with our stunning limousines, adding a touch of timeless elegance to your special day. From transporting the bride and groom to safely whisking away guests, we ensure every detail is flawless.",
  },
  {
    title: "Corporate Events:",
    content:
      "Impress clients and colleagues with our professional and reliable limousine services. Make a lasting impression at conferences, gala dinners, or business meetings, showcasing your attention to detail and commitment to excellence.",
  },
  {
    title: "Airport Transfers:",
    content:
      "Glide through the hustle and bustle of George Bush Intercontinental Airport (IAH) or William P. Hobby Airport (HOU). Avoid crowded shuttles and arrive at your Houston destination refreshed and ready to conquer your agenda.",
  },
  {
    title: "Nightlife Explorations:",
    content:
      "Experience Houstons vibrant nightlife in style. We all drop you off at trendy bars, bustling clubs, or exclusive events, ensuring a seamless and luxurious night on the town.",
  },
  {
    title: "Special Occasions:",
    content:
      "Celebrate birthdays, anniversaries, or graduations with an unforgettable limousine experience. Add a touch of glamour and sophistication to any special occasion, creating memories that last a lifetime.",
  },
];

export function LimousineTransportationServices() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-top flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/service-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl lg:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Limousine Transportation Services: <br /> Pro Ride Limo
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
            Turn any Houston occasion into an unforgettable event with Pro Ride
            Limo, your gateway to unparalleled luxury and impeccable service.
            <span className="text-black">
              Our diverse fleet of immaculate limousines, from sleek Cadillac
              Escalades to sophisticated Mercedes-Benzes,
            </span>
            sets the stage for every adventure, transforming ordinary
            transportation into extraordinary experiences. Let us whisk you away
            in exquisite comfort and undeniable style, whether you’re conquering
            the bustling downtown scene,
            <span className="text-black">
              dazzling at a Montrose gala, or celebrating a special occasion
              with loved ones.
            </span>
            So, book our
            <span className="text-black">
              limousine transportation services with ease!
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
              Why Choose Pro Ride Limo: Limousine Transportation Services?
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
              src="/assets/images/service-16.jpg"
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
              src="/assets/images/service-17.webp"
              alt="Cadillac Interior"
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Make Every Arrival an Entrance:
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
