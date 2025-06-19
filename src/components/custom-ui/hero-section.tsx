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
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const [viaFields, setViaFields] = useState<string[]>([]);
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [luggageCount, setLuggageCount] = useState<number>(0);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_CAR_BOOKING_APP_GOOGLEMAPS_API_KEY || "",
    libraries: ["places"],
  });

  const addViaField = () => setViaFields((p) => [...p, ""]);
  const removeViaField = (i: number) =>
    setViaFields((p) => p.filter((_, idx) => idx !== i));

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) router.push("/car-selection");
    else form.reportValidity();
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 4 });
      tl.fromTo(
        ".hero-title",
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.8, ease: "power3.out" }
      )
        .fromTo(
          ".hero-subtitle",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
          "-=1.2"
        )
        .fromTo(
          ".hero-button",
          { y: 40, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)" },
          "-=0.8"
        )
        .fromTo(
          ".booking-form",
          { x: 80, opacity: 0, rotationY: 15 },
          { x: 0, opacity: 1, rotationY: 0, duration: 1.4, ease: "power3.out" },
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
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 py-4 lg:mt-3 mt-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="space-y-12">
            <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] text-neutral-900 tracking-tight">
              Your Journey.
              <span className="block font-light">Our Priority</span>
            </h1>
            <p className="hero-subtitle text-xl font-light text-neutral-600 max-w-lg">
              Discover the ultimate in luxury and convenience with our premium
              car booking service...
            </p>
            <div className="hero-button">
              <Button
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 cursor-pointer font-light rounded-none transition-all duration-500 group"
                onClick={() => router.push("/online-reservation")}
              >
                Book now
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Booking Form */}
          <div className="booking-form">
            <div className="bg-white border border-neutral-200 p-8 shadow-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-neutral-900 mb-2">
                  Reserve Your Experience
                </h3>
                <div className="w-12 h-px bg-neutral-900" />
              </div>

              <Tabs defaultValue="instant-quote">
                <TabsList className="flex space-x-4 mb-6">
                  <TabsTrigger value="instant-quote">Instant Quote</TabsTrigger>
                  <TabsTrigger value="hourly-rate">Hourly Rate</TabsTrigger>
                </TabsList>

                <TabsContent value="instant-quote">
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    {/* Car Type */}
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                        Car Type
                      </Label>
                      <Select required>
                        <SelectTrigger className="h-12 rounded-none bg-white border-neutral-300 hover:border-neutral-400 font-light">
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

                    {/* Pickup Location */}
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                        From
                      </Label>
                      {isLoaded ? (
                        <StandaloneSearchBox onLoad={() => null}>
                          <Input
                            id="pickup-location"
                            placeholder="Enter pickup location"
                            className="h-12 rounded-none"
                            required
                          />
                        </StandaloneSearchBox>
                      ) : (
                        <Input
                          id="pickup-location"
                          placeholder="Loading map..."
                          className="h-12 rounded-none"
                          disabled
                        />
                      )}
                    </div>

                    {/* Via Fields */}
                    {viaFields.map((_, idx) => (
                      <div key={idx} className="space-y-2">
                        <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                          Via
                        </Label>
                        <div className="flex items-center space-x-2">
                          <StandaloneSearchBox key={idx} onLoad={() => null}>
                            <Input
                              className="h-12 rounded-none flex-grow"
                              placeholder="Enter stopover location"
                            />
                          </StandaloneSearchBox>
                          <Button
                            variant="ghost"
                            size="icon"
                            type="button"
                            onClick={() => removeViaField(idx)}
                            className="text-neutral-400 hover:text-neutral-900"
                          >
                            ✕
                          </Button>
                        </div>
                      </div>
                    ))}

                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        addViaField();
                      }}
                      className="flex items-center space-x-2 text-neutral-700 hover:text-white bg-transparent"
                    >
                      <Plus className="h-5 w-5" />
                      <span>Add Via</span>
                    </Button>

                    {/* Dropoff */}
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                        To
                      </Label>
                      {isLoaded ? (
                        <StandaloneSearchBox onLoad={() => null}>
                          <Input
                            id="dropoff-location"
                            placeholder="Enter destination"
                            className="h-12 rounded-none"
                            required
                          />
                        </StandaloneSearchBox>
                      ) : (
                        <Input
                          id="dropoff-location"
                          placeholder="Loading map..."
                          className="h-12 rounded-none"
                          disabled
                        />
                      )}
                    </div>

                    {/* Passengers + Luggage */}
                    <div className="grid grid-cols-2 gap-6">
                      {/* Passengers */}
                      <div className="space-y-2">
                        <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                          Passengers
                        </Label>
                        <div className="flex items-center border border-neutral-300 px-2 py-1 rounded-none">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              setPassengerCount((v) => Math.max(1, v - 1))
                            }
                          >
                            <Minus />
                          </Button>
                          <span className="flex-grow text-center text-neutral-900">
                            {passengerCount}
                          </span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => setPassengerCount((v) => v + 1)}
                          >
                            <Plus />
                          </Button>
                        </div>
                      </div>

                      {/* Luggage */}
                      <div className="space-y-2">
                        <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                          Luggage
                        </Label>
                        <div className="flex items-center border border-neutral-300 px-2 py-1 rounded-none">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              setLuggageCount((v) => Math.max(0, v - 1))
                            }
                          >
                            <Minus />
                          </Button>
                          <span className="flex-grow text-center text-neutral-900">
                            {luggageCount}
                          </span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => setLuggageCount((v) => v + 1)}
                          >
                            <Plus />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Time */}
                    <Tabs defaultValue="on-way">
                      <TabsList className="flex space-x-4 mb-6">
                        <TabsTrigger value="on-way">One Way</TabsTrigger>
                        <TabsTrigger value="return">Return</TabsTrigger>
                      </TabsList>

                      <TabsContent value="on-way">
                        <div className="space-y-2">
                          <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                            One Way
                          </Label>
                          <Input
                            type="datetime-local"
                            className="h-12 rounded-none"
                          />
                        </div>
                      </TabsContent>

                      <TabsContent value="return">
                        <div className="space-y-3">
                          <Input
                            type="datetime-local"
                            className="h-12 rounded-none"
                          />
                          <Input
                            type="datetime-local"
                            className="h-12 rounded-none"
                          />
                        </div>
                      </TabsContent>
                    </Tabs>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-neutral-900 hover:bg-neutral-800 cursor-pointer text-white py-4 font-light rounded-none transition-all duration-300"
                    >
                      Calculate Price
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </TabsContent>

                {/* Hourly Rate tab */}
                <TabsContent value="hourly-rate">
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                        From
                      </Label>
                      {isLoaded ? (
                        <StandaloneSearchBox onLoad={() => null}>
                          <Input
                            placeholder="Enter pickup location"
                            className="h-12 rounded-none"
                            required
                          />
                        </StandaloneSearchBox>
                      ) : (
                        <Input
                          placeholder="Loading map..."
                          className="h-12 rounded-none"
                          disabled
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                        Date & Time
                      </Label>
                      <Input
                        type="datetime-local"
                        className="h-12 rounded-none"
                        required
                      />
                    </div>
                    <Link href="/car-selection">
                      <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-4 font-light rounded-none transition-all duration-300">
                        Calculate Price
                        <ArrowRight className="ml-2 h-5 w-5" />
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
