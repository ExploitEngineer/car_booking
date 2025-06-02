"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Victoria Sterling",
    role: "CEO, Sterling Enterprises",
    content:
      "The epitome of luxury service. Every detail is meticulously crafted to perfection.",
    location: "New York",
  },
  {
    name: "Alexander Crown",
    role: "Event Director",
    content:
      "Unparalleled professionalism and attention to detail. They exceed expectations consistently.",
    location: "Los Angeles",
  },
  {
    name: "Isabella Rothschild",
    role: "Private Client",
    content:
      "A seamless experience from booking to arrival. True luxury transportation redefined.",
    location: "Miami",
  },
];

const stats = [
  { number: "25+", label: "Years of Excellence" },
  { number: "10K+", label: "Satisfied Clients" },
  { number: "50+", label: "Luxury Vehicles" },
  { number: "24/7", label: "Concierge Service" },
];

export function WhyChooseUsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      // Stats animation with counter effect
      gsap.fromTo(
        ".stats-item",
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Testimonial card animation
      gsap.fromTo(
        ".testimonial-card",
        { scale: 0.8, opacity: 0, rotationY: 15 },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Header animation
      gsap.fromTo(
        ".section-header",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section-header",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mb-32">
          <div className="section-header text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight">
              Why Elite
            </h2>
            <div className="w-16 h-px bg-neutral-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stats-item text-center">
                <div className="text-5xl md:text-6xl font-extralight text-neutral-900 mb-4">
                  {stat.number}
                </div>
                <div className="text-sm font-light text-neutral-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto testimonial-section">
          <div className="testimonial-card bg-white border border-neutral-200 p-12 md:p-16">
            <div className="flex justify-between items-center mb-12">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="text-neutral-400 hover:text-neutral-900 hover:bg-transparent"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index === currentTestimonial
                        ? "bg-neutral-900 w-8"
                        : "bg-neutral-300"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="text-neutral-400 hover:text-neutral-900 hover:bg-transparent"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="text-center">
              <Quote className="h-8 w-8 text-neutral-300 mx-auto mb-8" />

              <blockquote className="text-2xl md:text-3xl font-light text-neutral-900 mb-12 leading-relaxed">
                &quot;{testimonials[currentTestimonial].content}&quot;
              </blockquote>

              <div className="space-y-2">
                <p className="font-light text-neutral-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm font-light text-neutral-600">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-sm font-light text-neutral-400">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
