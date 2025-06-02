"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function WeedingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        ".weeding-header",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".weeding-header",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        ".weeding-content",
        { y: 120, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".weeding-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="weeding" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 weeding-container">
        <div className="weeding-header mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight">
            Wedding Services
          </h2>
          <div className="w-16 h-px bg-neutral-900 mb-8"></div>
          <p className="text-xl font-light text-neutral-600 max-w-2xl">
            Celebrate your special day with our bespoke luxury transportation
            services tailored for weddings.
          </p>
        </div>

        <div className="space-y-24">
          <div className="weeding-content grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-neutral-900">
                  Elegant Arrival
                </h3>
                <p className="text-lg font-light text-neutral-600 leading-relaxed max-w-lg">
                  Make a grand entrance with our premium fleet of luxury
                  vehicles, ensuring style and sophistication.
                </p>
              </div>

              <button className="group flex items-center space-x-3 text-neutral-900 hover:text-neutral-700 transition-colors duration-300">
                <span className="text-sm font-light uppercase tracking-wider">
                  Learn More
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            <div>
              <div className="rounded-lg aspect-[4/3] bg-neutral-100 overflow-hidden group">
                <img
                  src="/assets/images/img1.jpeg"
                  alt="Wedding Car"
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
