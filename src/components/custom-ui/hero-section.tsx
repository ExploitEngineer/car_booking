"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ArrowRight, Plus } from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const [viaFields, setViaFields] = useState<string[]>([]);

  const addViaField = () => {
    setViaFields((prev) => [...prev, ""]);
  };

  const removeViaField = (index: number) => {
    setViaFields((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const isValid = form.checkValidity();

    if (isValid) {
      router.push("/car-selection");
    } else {
      form.reportValidity();
    }
  };

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
                Your Journey.
                <span className="block font-light">Our Priority</span>
              </h1>

              <p className="hero-subtitle text-xl font-light text-neutral-600 max-w-lg ">
               Discover the ultimate in luxury and convenience with our premium car booking service. Whether it&apos;s a business trip, airport transfer, or a special ocassion, we redefine travel with elegance and comfort.
              </p>
            </div>

            <div className="hero-button">
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 text-base font-light rounded-none border-0 transition-all duration-500 group">
                Explore Collection
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right side - Booking Form */}
          <div className="booking-form">
            <div className="bg-white border border-neutral-200 p-8 shadow-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-neutral-900 mb-2">
                  Reserve Your Experience
                </h3>
                <div className="w-12 h-px bg-neutral-900"></div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="instant-quote">
                <TabsList className="flex space-x-4 mb-6">
                  <TabsTrigger className="cursor-pointer" value="instant-quote">
                    Instant Quote
                  </TabsTrigger>
                  <TabsTrigger className="cursor-pointer" value="hourly-rate">
                    Hourly Rate
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="instant-quote">
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="space-y-2">
                      <Label
                        htmlFor="car-type"
                        className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                      >
                        Car Type
                      </Label>
                      <Select required>
                        <SelectTrigger className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light">
                          <SelectValue placeholder="Select car type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="luxury-sedan">
                            Luxury Sedan
                          </SelectItem>
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
                        From
                      </Label>
                      <Input
                        required
                        id="pickup-location"
                        placeholder="Enter pickup post code, venue or place"
                        className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                      />
                    </div>

                    {/* Via Fields */}
                    {viaFields.map((_, index) => (
                      <div key={index} className="space-y-2">
                        <Label
                          htmlFor={`via-${index}`}
                          className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                        >
                          Via
                        </Label>
                        <div className="flex items-center space-x-2">
                          <Input
                            id={`via-${index}`}
                            placeholder="Enter stopover location"
                            className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light flex-grow"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeViaField(index)}
                            className="text-neutral-400 hover:text-neutral-900"
                          >
                            ✕
                          </Button>
                        </div>
                      </div>
                    ))}

                    <Button
                      onClick={(event) => {
                        event.preventDefault();
                        addViaField();
                      }}
                      className="text-neutral-700 hover:text-white cursor-pointer bg-transparent flex items-center space-x-2"
                    >
                      <Plus className="h-5 w-5" />
                      <span>Add Via</span>
                    </Button>

                    <div className="space-y-2">
                      <Label
                        htmlFor="dropof-location"
                        className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                      >
                        TO
                      </Label>
                      <Input
                        required
                        id="dropof-location"
                        placeholder="Enter pickup post code, venue or place"
                        className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                      />
                    </div>

                    <Tabs defaultValue="on-way">
                      <TabsList className="flex space-x-4 mb-6">
                        <TabsTrigger value="on-way">One Way</TabsTrigger>
                        <TabsTrigger value="return">Return</TabsTrigger>
                      </TabsList>

                      <TabsContent value="on-way">
                        <div className="space-y-2">
                          <Label
                            htmlFor="on-way"
                            className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                          >
                            One Way
                          </Label>
                          <Input
                            id="on-way"
                            type="datetime-local"
                            className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                          />
                        </div>
                      </TabsContent>

                      <TabsContent value="return">
                        <div className="space-y-3">
                          <Input
                            type="datetime-local"
                            className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                          />

                          <Input
                            type="datetime-local"
                            className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                          />
                        </div>
                      </TabsContent>
                    </Tabs>

                    <Button
                      type="submit"
                      className="w-full cursor-pointer bg-neutral-900 hover:bg-neutral-800 text-white py-4 text-base font-light rounded-none border-0 transition-all duration-300"
                    >
                      <span>Calculate Price</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="hourly-rate">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="pickup-location-hourly"
                        className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                      >
                        From
                      </Label>
                      <Input
                        required
                        id="pickup-location-hourly"
                        placeholder="Enter pickup post code, venue or place"
                        className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="date&time"
                        className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                      >
                        DATE & TIME
                      </Label>
                      <Input
                        required
                        id="date&time"
                        type="datetime-local"
                        className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                      />
                    </div>

                    <Link href="/car-selection">
                      <Button className="w-full cursor-pointer bg-neutral-900 hover:bg-neutral-800 text-white py-4 text-base font-light rounded-none border-0 transition-all duration-300">
                        <span>Calculate Price</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
