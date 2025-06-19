"use client";

import { Button } from "@/components/ui/button";
import { Users, Briefcase, Luggage } from "lucide-react";

const cars = [
  {
    image: "/assets/images/mercedes.jpg",
    name: "Mercedes Class E",
    passengers: 4,
    luggage: 2,
    handLuggage: 2,
    features: [
      "First class chauffeur",
      "Free 45 mins airport parking & waiting",
      "Free 15 mins waiting for other journeys",
      "Includes meet & greet",
      "Free cancellation policy: 6 hours for transfers & 12 hours for hourly jobs",
    ],
    price: 120,
  },
  {
    image: "/assets/images/limousine.jpg",
    name: "Luxury Limousine",
    passengers: 10,
    luggage: 4,
    handLuggage: 4,
    features: [
      "First class chauffeur",
      "Free 45 mins airport parking & waiting",
      "Free 15 mins waiting for other journeys",
      "Includes meet & greet",
      "Free cancellation policy: 6 hours for transfers & 12 hours for hourly jobs",
    ],
    price: 100,
  },
];

export function CarSelection() {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight">
            Select Your Car
          </h2>
          <div className="w-16 h-px bg-neutral-900 mx-auto mb-8"></div>
          <p className="text-xl font-light text-neutral-600 max-w-2xl mx-auto">
            Choose from our premium fleet of luxury vehicles tailored to your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <h3 className="text-3xl font-light text-neutral-900">{car.name}</h3>

                {/* Icons and Details */}
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-neutral-600">
                    <Users className="h-5 w-5 text-neutral-900" />
                    <span className="text-sm font-light">{car.passengers} Passengers</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-600">
                    <Luggage className="h-5 w-5 text-neutral-900" />
                    <span className="text-sm font-light">{car.luggage} Luggage</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-600">
                    <Briefcase className="h-5 w-5 text-neutral-900" />
                    <span className="text-sm font-light">{car.handLuggage} Hand Luggage</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 text-sm text-neutral-600">
                  {car.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-neutral-900 rounded-full mt-1"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and Button */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-light text-neutral-900">${car.price}</span>
                  <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2 text-sm font-light cursor-pointer rounded-none border-0 transition-all duration-300">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
