"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 4 });

      tl.fromTo(
        ".hero-title",
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power3.out",
        }
      )
        .fromTo(
          ".hero-subtitle",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
          },
          "-=1.2"
        )
        .fromTo(
          ".hero-button",
          { y: 40, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        )
        .fromTo(
          ".booking-form",
          { x: 80, opacity: 0, rotationY: 15 },
          {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1.4,
            ease: "power3.out",
          },
          "-=1"
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 py-4 lg:mt-3 mt-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] text-neutral-900 tracking-tight">
                Luxury
                <span className="block font-light">Redefined</span>
              </h1>

              <p className="hero-subtitle text-xl font-light text-neutral-600 max-w-lg leading-relaxed">
                Experience unparalleled elegance with our curated fleet of
                premium vehicles and white-glove service.
              </p>
            </div>

            <div className="hero-button">
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 text-base font-light rounded-none border-0 transition-all duration-500 group">
                Explore Collection
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right side - Complete Booking Form */}
          <div className="booking-form">
            <div className="bg-white border border-neutral-200 p-8 shadow-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-neutral-900 mb-2">
                  Reserve Your Experience
                </h3>
                <div className="w-12 h-px bg-neutral-900"></div>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="car-type"
                    className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                  >
                    Car Type
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light">
                      <SelectValue placeholder="Select car type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-neutral-200 rounded-none">
                      <SelectItem value="luxury-sedan">Luxury Sedan</SelectItem>
                      <SelectItem value="suv">Premium SUV</SelectItem>
                      <SelectItem value="limousine">Limousine</SelectItem>
                      <SelectItem value="sports-car">Sports Car</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="pickup-location"
                    className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                  >
                    Pickup Location
                  </Label>
                  <Input
                    id="pickup-location"
                    placeholder="Enter pickup address"
                    className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="pickup-datetime"
                    className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                  >
                    Pickup Date & Time
                  </Label>
                  <Input
                    id="pickup-datetime"
                    type="datetime-local"
                    className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="dropoff-location"
                    className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                  >
                    Drop-off Location
                  </Label>
                  <Input
                    id="dropoff-location"
                    placeholder="Enter drop-off address"
                    className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="dropoff-datetime"
                    className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                  >
                    Drop-off Date & Time
                  </Label>
                  <Input
                    id="dropoff-datetime"
                    type="datetime-local"
                    className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                  />
                </div>

                <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-4 text-base font-light rounded-none border-0 transition-all duration-300">
                  Book Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
