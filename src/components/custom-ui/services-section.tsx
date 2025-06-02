"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Executive Chauffeur",
    description:
      "Professional drivers with extensive training in luxury service protocols and discretion.",
    image: "/assets/images/limousine.jpg",
  },
  {
    number: "02",
    title: "Airport Transfers",
    description:
      "Seamless transportation with flight monitoring and personalized meet & greet service.",
    image: "/assets/images/blackcar.jpg",
  },
  {
    number: "03",
    title: "Corporate Events",
    description:
      "Tailored transportation solutions for business meetings and executive travel needs.",
    image: "/assets/images/mercedes1.avif",
  },
  {
    number: "04",
    title: "Special Occasions",
    description:
      "Bespoke luxury experiences for weddings, galas, and milestone celebrations.",
    image: "/assets/images/bmw.webp",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        ".services-header",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-header",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Service items animation
      gsap.fromTo(
        ".service-item",
        { y: 120, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image hover animations
      const serviceItems = document.querySelectorAll(".service-item");
      serviceItems.forEach((item) => {
        const image = item.querySelector(".service-image");
        const number = item.querySelector(".service-number");

        item.addEventListener("mouseenter", () => {
          gsap.to(image, { scale: 1.1, duration: 0.6, ease: "power2.out" });
          gsap.to(number, {
            scale: 1.1,
            color: "#000",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(image, { scale: 1, duration: 0.6, ease: "power2.out" });
          gsap.to(number, {
            scale: 1,
            color: "#d1d5db",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 services-container">
        <div className="services-header mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight">
            Our Services
          </h2>
          <div className="w-16 h-px bg-neutral-900 mb-8"></div>
          <p className="text-xl font-light text-neutral-600 max-w-2xl">
            Curated experiences designed for the most discerning clientele
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`space-y-8 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-center space-x-6">
                  <span className="service-number text-6xl font-extralight text-neutral-300">
                    {service.number}
                  </span>
                  <div className="w-16 h-px bg-neutral-300"></div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="text-lg font-light text-neutral-600 leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </div>

                <button className="group flex items-center space-x-3 text-neutral-900 hover:text-neutral-700 transition-colors duration-300">
                  <span className="text-sm font-light uppercase tracking-wider">
                    Learn More
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="aspect-[4/3] bg-neutral-100 overflow-hidden group">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="service-image w-full h-full object-cover transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
