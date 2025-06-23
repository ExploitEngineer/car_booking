"use client";

import { Navigation } from "@/components/custom-ui/navbar";
import { Footer } from "@/components/custom-ui/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const paras = [
  {
    title: "Impeccable Vehicles, Impeccable Service:",
    content:
      "Turn heads with our diverse fleet of immaculate vehicles. From sleek Cadillac Escalades and luxurious limousines to spacious Chevrolet Suburbans and stylish Mercedes-Benzes, we have the perfect ride to complement your event theme and impress your guests.",
  },
  {
    title: "Seamless Logistics and Coordination:",
    content:
      "Leave the planning to us. Our experienced team works closely with event planners and organizers to create seamless transportation plans, ensuring every guest arrives on time and at the correct location.",
  },
  {
    title: "24/7 Availability and Unwavering Reliability:",
    content:
      "Rest assured, Pro Ride Limo is available 24/7 to handle any transportation needs with efficiency and courtesy, no matter the event schedule or last-minute changes.",
  },
  {
    title: "Stress-Free Booking and Management:",
    content:
      "Streamline your event planning with our user-friendly website and responsive team. Manage reservations, track arrivals, and coordinate changes on the fly all from the comfort of your fingertips.",
  },
  {
    title: "Tailored Solutions to Fit Your Budget and Vision:",
    content:
      "All events are unique. We craft bespoke transportation packages that perfectly match your guest list, timeline, and budget, ensuring an experience that transcends expectations.",
  },
];

const paras1 = [
  {
    title: "Wedding Transportation:",
    content:
      "Make your Houston wedding day truly magical. We transport brides, grooms, guests, and even the wedding party in opulent comfort, adding an unforgettable touch to your special day.",
  },
  {
    title: "Corporate Event Transportation:",
    content:
      "Impress clients and colleagues with our professional and reliable event transportation services. From conferences and gala dinners to product launches and team outings, we provide seamless transportation solutions that leave a lasting impression.",
  },
  {
    title: "Airport Transfers:",
    content:
      "Ensure guests arrive relaxed and ready to celebrate, even if they are flying in from around the globe. Our convenient airport transfers deliver them to your event venue quickly and efficiently.",
  },
  {
    title: "Point to Point Transfers:",
    content:
      "Keep your event running smoothly with punctual and efficient point to point transfers within Houston. Whether your guests need to reach a specific location or return to their hotels, Pro Ride Limo accommodates their needs.",
  },
  {
    title: "Group Transportation:",
    content:
      "Make sure everyone arrives and departs together. Our spacious SUVs and limousines comfortably accommodate larger groups, ensuring a fun and hassle-free experience for everyone on the guest list.",
  },
];

export function EventTransportationServices() {
  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />

      <section
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-top flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/service-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-5xl lg:text-7xl font-extralight text-white uppercase tracking-tight text-center leading-none">
          Event Transportation Services: <br /> Pro Ride Limo
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
            Whether planning a dazzling gala at the Houston Museum of Fine Arts
            or a vibrant festival in{" "}
            <span className="text-black">Discovery Green, Pro Ride Limo</span>
            ensures your guests arrive in style and depart with lasting
            memories. From intimate gatherings to large-scale extravaganzas,
            we’re your one-stop shop for sophisticated,
            <span className="text-black">
              stress-free event transportation services in Houston.
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
              src="/assets/images/service-6.jpg"
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
              src="/assets/images/service-7.jpg"
              alt="Cadillac Interior"
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Why Choose Pro Ride Limo: Event Transportation Services?
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
