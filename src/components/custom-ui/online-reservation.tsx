"use client";

import Link from "next/link";
import { useRef, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  Users,
  Luggage,
  X,
  Loader2,
} from "lucide-react";
import { Navigation } from "@/components/custom-ui/navbar";
import { Libraries } from "@react-google-maps/api";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Cars = [
  {
    name: "Luxury Sedan",
    img: "/assets/images/m-car1.png",
    passengers: 3,
    luggage: 3,
  },
  {
    name: "Mercedes Benz CEO/JET...",
    img: "/assets/images/m-car2.png",
    passengers: 8,
    luggage: 12,
  },
  {
    name: "Cadillac Escalade ESV",
    img: "/assets/images/m-car3.png",
    passengers: 7,
    luggage: 8,
  },
  {
    name: "Chevrolet Suburban",
    img: "/assets/images/m-car4.png",
    passengers: 6,
    luggage: 8,
  },
  {
    name: "Luxury SUV",
    img: "/assets/images/m-car5.png",
    passengers: 6,
    luggage: 8,
  },
  {
    name: "Mercedes Benz S Class",
    img: "/assets/images/m-car6.png",
    passengers: 3,
    luggage: 3,
  },
  {
    name: "Mercedes Benz Limo Spri...",
    img: "/assets/images/m-car7.png",
    passengers: 13,
    luggage: 10,
  },
  {
    name: "Mercedes Benz E Class",
    img: "/assets/images/m-car8.png",
    passengers: 8,
    luggage: 12,
  },
];

function OnlineReservation() {
  const searchParams = useSearchParams();
  const stepFromUrl = parseInt(searchParams.get("step") || "1", 10);

  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<number>(stepFromUrl);
  const [carType, setCarType] = useState<string>("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [viaFields, setViaFields] = useState<string[]>([]);
  const [passengerCount, setPassengerCount] = useState(1);
  const [luggageCount, setLuggageCount] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const autocompleteRefs = useRef<google.maps.places.Autocomplete[]>([]);

  const GOOGLE_MAPS_LIBRARIES: Libraries = ["places"];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_CAR_BOOKING_APP_GOOGLEMAPS_API_KEY ?? "",
    libraries: GOOGLE_MAPS_LIBRARIES,
  });

  const handlePlace = (i: number, type: "pickup" | "via" | "dropoff") => {
    const ac = autocompleteRefs.current[i];
    if (!ac) return;
    const place = ac.getPlace();
    if (place?.formatted_address && place.geometry?.location) {
      const addr = place.formatted_address;
      const loc = place.geometry.location;
      if (type === "pickup") setPickupLocation(addr);
      else if (type === "dropoff") setDropoffLocation(addr);
      else
        setViaFields((prev) =>
          prev.map((v, idx) => (idx === i - 1 ? addr : v))
        );
      map?.panTo(loc);
      if (pickupLocation && dropoffLocation) calculateRoute();
    }
  };

  const calculateRoute = async () => {
    if (!pickupLocation || !dropoffLocation) return;
    const ds = new google.maps.DirectionsService();
    const wps = viaFields.map((v) => ({ location: v, stopover: true }));
    const res = await ds.route({
      origin: pickupLocation,
      destination: dropoffLocation,
      travelMode: google.maps.TravelMode.DRIVING,
      waypoints: wps,
    });
    setDirections(res);
  };

  const addVia = () => setViaFields((prev) => [...prev, ""]);
  const removeVia = (i: number) =>
    setViaFields((prev) => prev.filter((_, idx) => idx !== i));

  const goToStep = (target: number) => {
    if (target === 2) {
      const form = formRef.current;
      if (form && !form.checkValidity()) {
        form.reportValidity();
        return;
      }
    }
    setStep(target);
  };

  if (!isClient || !isLoaded)
    return (
      <div className="w-full cursor-progress h-screen flex items-center justify-center">
        <Loader2
          color="skyblue"
          className="w-10 h-10 animate-spin text-primary-foreground"
        />
      </div>
    );

  return (
    <div className="flex flex-col bg-neutral-50 min-h-screen">
      <Navigation animate={false} />
      <div
        className="relative w-full lg:min-h-[60vh] min-h-[50vh] my-20 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/limousine.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-40" />
        <h1 className="relative text-4xl md:text-7xl font-extralight text-white tracking-tight">
          Instant Online Booking
        </h1>
      </div>

      {/* Stepper */}
      <div className="flex justify-center items-center space-x-8 mt-6">
        {["Details", "Choose Vehicle"].map((label: string, i: number) => (
          <button
            key={i}
            onClick={() => goToStep(i + 1)}
            className={`flex flex-col items-center cursor-pointer ${
              step === i + 1 ? "text-neutral-900" : "text-neutral-500"
            }`}
          >
            <span
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step === i + 1 ? "bg-neutral-900 text-white" : "bg-neutral-200"
              }`}
            >
              {i + 1}
            </span>
            <span className="text-xs font-light mt-2">{label}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center flex-grow p-8 lg:p-12 gap-8">
        {step === 1 ? (
          <>
            <div className="lg:w-1/2 bg-white border border-neutral-200 shadow-sm p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-neutral-900 mb-2">
                  Book Your Ride
                </h3>
                <div className="w-12 h-px bg-neutral-900" />
              </div>

              <Tabs defaultValue="instant-quote">
                <TabsList className="flex space-x-4 mb-6">
                  <TabsTrigger className="cursor-pointer" value="instant-quote">
                    Instant Quote
                  </TabsTrigger>
                  <TabsTrigger className="cursor-pointer" value="hourly-rate">
                    Hourly Rate
                  </TabsTrigger>
                </TabsList>

                {/* INSTANT QUOTE FORM */}
                <TabsContent value="instant-quote">
                  <form ref={formRef} className="space-y-6">
                    {/* Car Type */}
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                        Car Type
                      </Label>
                      <Select
                        required
                        value={carType}
                        onValueChange={setCarType}
                      >
                        <SelectTrigger className="h-12 cursor-pointer rounded-none bg-white border-neutral-300 hover:border-neutral-400 font-light">
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
                      <Autocomplete
                        onLoad={(ac) => (autocompleteRefs.current[0] = ac)}
                        onPlaceChanged={() => handlePlace(0, "pickup")}
                      >
                        <Input
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          placeholder="Enter pickup location"
                          className="h-12 rounded-none"
                          required
                        />
                      </Autocomplete>
                    </div>

                    {/* Via Fields */}
                    {viaFields.map((via, i) => (
                      <div key={i} className="space-y-2">
                        <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                          Via
                        </Label>
                        <div className="flex items-center space-x-2">
                          <Autocomplete
                            onLoad={(ac) =>
                              (autocompleteRefs.current[i + 1] = ac)
                            }
                            onPlaceChanged={() => handlePlace(i + 1, "via")}
                          >
                            <Input
                              value={via}
                              onChange={(e) => {
                                const tmp = [...viaFields];
                                tmp[i] = e.target.value;
                                setViaFields(tmp);
                              }}
                              placeholder="Enter stopover location"
                              className="h-12 rounded-none flex-grow"
                            />
                          </Autocomplete>
                          <Button
                            variant="ghost"
                            size="icon"
                            type="button"
                            onClick={() => removeVia(i)}
                            className="text-neutral-400 cursor-pointer hover:text-neutral-900"
                          >
                            <X />
                          </Button>
                        </div>
                      </div>
                    ))}

                    <Button
                      type="button"
                      onClick={addVia}
                      className="flex cursor-pointer items-center space-x-2 text-neutral-700 hover:text-white bg-transparent"
                    >
                      <Plus className="h-5 w-5" />
                      <span>Add Via</span>
                    </Button>

                    {/* Dropoff */}
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                        To
                      </Label>
                      <Autocomplete
                        onLoad={(ac) =>
                          (autocompleteRefs.current[viaFields.length + 1] = ac)
                        }
                        onPlaceChanged={() =>
                          handlePlace(viaFields.length + 1, "dropoff")
                        }
                      >
                        <Input
                          value={dropoffLocation}
                          onChange={(e) => setDropoffLocation(e.target.value)}
                          placeholder="Enter dropoff location"
                          className="h-12 rounded-none"
                          required
                        />
                      </Autocomplete>
                    </div>

                    {/* Passengers + Luggage */}
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        {
                          label: "Passengers",
                          count: passengerCount,
                          setter: setPassengerCount,
                          min: 1,
                        },
                        {
                          label: "Luggage",
                          count: luggageCount,
                          setter: setLuggageCount,
                          min: 0,
                        },
                      ].map(({ label, count, setter, min }, i) => (
                        <div key={i} className="space-y-2">
                          <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                            {label}
                          </Label>
                          <div className="flex items-center border border-neutral-300 px-2 py-1 rounded-none">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="cursor-pointer"
                              onClick={() =>
                                setter((v) => Math.max(min, v - 1))
                              }
                            >
                              <Minus />
                            </Button>
                            <span className="flex-grow text-center text-neutral-900">
                              {count}
                            </span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="cursor-pointer"
                              onClick={() => setter((v) => v + 1)}
                            >
                              <Plus />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Time Tabs */}
                    <Tabs defaultValue="on-way">
                      <TabsList className="flex space-x-4 mb-6">
                        <TabsTrigger className="cursor-pointer" value="on-way">
                          One Way
                        </TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="return">
                          Return
                        </TabsTrigger>
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
                      className="w-full bg-neutral-900 hover:bg-neutral-800 cursor-pointer text-white py-4 font-light rounded-none transition-all duration-300"
                      onClick={() => goToStep(2)}
                    >
                      Calculate Price
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </TabsContent>

                {/* HOURLY RATE FORM */}
                <TabsContent value="hourly-rate">
                  <form className="space-y-6">
                    {/* Pickup Location */}
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                        From
                      </Label>
                      <Autocomplete
                        onLoad={(ac) => (autocompleteRefs.current[0] = ac)}
                        onPlaceChanged={() => handlePlace(0, "pickup")}
                      >
                        <Input
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          placeholder="Enter pickup location"
                          className="h-12 rounded-none"
                          required
                        />
                      </Autocomplete>
                    </div>

                    {/* Date & Time */}
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

            <div className="lg:w-1/2 h-96 flex items-center lg:min-h-[500px] rounded-md">
              <div className="w-full h-full lg:w-[80%] lg:h-[80%]">
                <GoogleMap
                  center={{ lat: 37.7749, lng: -122.4194 }}
                  zoom={10}
                  mapContainerStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.375rem",
                  }}
                  onLoad={setMap}
                >
                  {directions && <DirectionsRenderer directions={directions} />}
                </GoogleMap>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full p-4 bg-[#F8F8F8]">
            <div className="flex justify-between items-center mb-4">
              <Button
                className="transition-all duration-300 cursor-pointer"
                variant="ghost"
                onClick={() => goToStep(1)}
              >
                <ArrowLeft /> Back to Details
              </Button>
              <h2 className="text-2xl font-light">Choose Your Car</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {Cars.map((car, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-200 rounded-md hover:shadow-md transition-all duration-300 cursor-pointer p-4 flex flex-col items-center"
                >
                  <h3 className="text-lg font-medium mb-2">{car.name}</h3>
                  <div className="w-full flex items-center justify-center h-40 bg-gray-100 mb-4 overflow-hidden">
                    <Image
                      objectFit="cover"
                      src={car.img}
                      width={200}
                      height={200}
                      alt="car Image"
                    />
                  </div>
                  <div className="self-start ps-2">
                    <p className="flex items-center gap-2 text-sm">
                      <Users size={17} color="gray" />
                      {car.passengers} Passengers
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <Luggage size={17} color="gray" />
                      {car.luggage} Luggage
                    </p>
                  </div>
                  <a
                    href="https://web.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4"
                  >
                    <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-2 rounded-none">
                      Book Now
                    </Button>
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-white border lg:w-1/3 border-neutral-200 shadow-sm px-8 py-5 ronded-md">
              <h3 className="text-lg font-light mb-2">Apply Promo Code</h3>
              <div className="flex items-center gap-4">
                <Input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="h-11 rounded-md"
                />
                <Button
                  className="bg-neutral-900 hover:bg-neutral-800 text-white py-5 rounded-md px-8"
                  onClick={() => {
                    if (promoCode.trim().toLowerCase() === "whoami") {
                      setDiscount(25);
                      alert("Promo code applied: 25% off!");
                    } else {
                      alert("Invalid promo code");
                    }
                  }}
                >
                  Apply
                </Button>
              </div>
              {discount > 0 && (
                <p className="mt-4 text-green-600 text-sm">
                  Discount Applied: {discount}% off!
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Wrap OnlineReservation in a Suspense boundary
export default function OnlineReservationWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnlineReservation />
    </Suspense>
  );
}
