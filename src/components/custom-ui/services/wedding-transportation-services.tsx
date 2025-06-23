"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const paras = [
  {
    title: "Arrive in Style:",
    content:
      "Turn heads with our diverse fleet of immaculate vehicles. Glide down Houston streets in a sleek Cadillac Escalade, a classic Mercedes-Benz, or a spacious Chevrolet Suburban. Choose the perfect carriage for your dream entrance, and let the celebration begin.",
  },
  {
    title: "Stress-Free Planning and Coordination:",
    content:
      "Planning a wedding is enough to make your head spin. Leave the transportation logistics to us. Our experienced team works seamlessly with your wedding planner to craft a personalized transportation plan, ensuring everyone arrives on time and at the correct location.",
  },
  {
    title: "24/7 Availability and Unwavering Reliability:",
    content:
      "Anything can happen on your wedding day, from last-minute venue changes to unexpected weather. Rest assured, Pro Ride Limo is available 24/7 to handle any transportation need efficiently and courteously so you can focus on enjoying your special day.",
  },
  {
    title: "Seamless Booking and Management:",
    content:
      "Manage your wedding transportation stress-free with our user-friendly website and responsive team. Book vehicles, track arrivals, and make changes on the fly all from the comfort of your phone or laptop.",
  },
  {
    title: "Tailored Solutions to Fit Your Budget and Vision:",
    content:
      "No two weddings are alike. We create bespoke transportation packages that match your guest list, timeline, and budget, ensuring an experience that reflects your unique love story.",
  },
];

const paras1 = [
  {
    title: "Bride and Groom Transportation:",
    content:
      "Make your grand entrance unforgettable. Whether a romantic horse-drawn carriage ride or a glamorous limousine arrival, we transport you and your partner in opulent comfort.",
  },
  {
    title: "Wedding Party Transportation:",
    content:
      "Ensure your bridesmaids and groomsmen arrive stylishly. Our spacious SUVs and limousines comfortably accommodate the wedding party, creating a fun atmosphere for pre-wedding preparations and photo sessions.",
  },
  {
    title: "Guest Pick Up and Drop Off:",
    content:
      "Let your guests focus on celebrating, not navigating Houston traffic. We offer convenient pick-up and drop-off services from hotels, residences, or any desired location, ensuring everyone efficiently arrives and departs.",
  },
  {
    title: "Airport Transfers:",
    content:
      "Welcome out-of-town guests in style with our reliable airport transfer services. We all whisk them directly to your wedding venue, setting the tone for a seamless and celebratory weekend.",
  },
  {
    title: "Point to Point Transfers:",
    content:
      "Keep your wedding running smoothly with punctual and efficient point to point transfers within Houston. Whether your guests need to reach the ceremony, reception, or after-party location, Pro Ride Limo accommodates their needs.",
  },
];

export function WeddingTransportationServices() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-top flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/service-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl lg:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Wedding Transportation Services: Pro <br /> Ride Limo
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
            Your Houston wedding day deserves a fairytale entrance, and Pro Ride
            Limo makes it a reality.{" "}
            <span className="text-black">
              From saying &quot;I do&quot; at The Ballroom at Hermann Park
            </span>
            to celebrating under the stars at
            <span className="text-black">The Woodlands Resort,</span>
            we transport you and your loved ones in exquisite style and
            unwavering reliability. Let our luxurious vehicles and impeccable
            service set the stage for a magical memory that lasts a lifetime. So
            book our
            <span className="text-black">
              wedding Transportation services in advance!
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
              src="/assets/images/service-8.jpg"
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
              src="/assets/images/service-9.jpg"
              alt="Cadillac Interior"
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              From &quot;I Do&quot; to the Dance Floor:
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
