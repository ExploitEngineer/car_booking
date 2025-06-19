"use client";

import { useRef, useState, useEffect } from "react";
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
  Loader2
} from "lucide-react";
import { Navigation } from "@/components/custom-ui/navbar";
import { Libraries } from "@react-google-maps/api";

const Cars = [
  {
    name: "Luxury Sedan",
    img: "/assets/images/car1.png",
    passengers: 3,
    luggage: 3,
    price: 591.19,
  },
  {
    name: "Mercedes Benz S500",
    img: "/assets/images/car1.png",
    passengers: 8,
    luggage: 12,
    price: 618.87,
  },
  {
    name: "Chevrolet Suburban",
    img: "/assets/images/car1.png",
    passengers: 7,
    luggage: 8,
    price: 818.47,
  },
  {
    name: "Luxury SUV",
    img: "/assets/images/car1.png",
    passengers: 6,
    luggage: 8,
    price: 926.35,
  },
  {
    name: "Cadillac Escalade ESV",
    img: "/assets/images/car1.png",
    passengers: 6,
    luggage: 8,
    price: 972.35,
  },
  {
    name: "Mercedes Benz S Class",
    img: "/assets/images/car1.png",
    passengers: 3,
    luggage: 3,
    price: 1193.87,
  },
  {
    name: "Mercedes Benz Limo",
    img: "/assets/images/car1.png",
    passengers: 13,
    luggage: 10,
    price: 822.9,
  },
  {
    name: "Mercedes Benz CEO/JET",
    img: "/assets/images/car1.png",
    passengers: 8,
    luggage: 12,
    price: 618.87,
  },
];

export default function OnlineReservation() {
  const formRef = useRef<HTMLFormElement>(null);

  const [step, setStep] = useState(1);
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
      <div className="w-full h-screen flex items-center justify-center">
        <Loader2 color="skyblue" className="w-10 h-10 animate-spin text-primary-foreground" />
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
            <div className="lg:w-1/2 bg-white border rounded-md border-neutral-200 shadow-sm p-8">
              <h2 className="text-2xl font-light text-neutral-900 mb-4">
                Book Your Ride
              </h2>
              <form ref={formRef} className="space-y-6">
                <div className="space-y-2">
                  <Label>Car Type</Label>
                  <Select required value={carType} onValueChange={setCarType}>
                    <SelectTrigger className="h-12 rounded-none bg-white border-neutral-300 hover:border-neutral-400 font-light">
                      <SelectValue placeholder="Select car type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="luxury-sedan">Luxury Sedan</SelectItem>
                      <SelectItem value="suv">Premium SUV</SelectItem>
                      <SelectItem value="limousine">Limousine</SelectItem>
                      <SelectItem value="sports-car">Sports Car</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Pickup Location</Label>
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

                {viaFields.map((via, i) => (
                  <div key={i} className="space-y-2">
                    <Label>Via</Label>
                    <div className="flex items-center gap-2">
                      <Autocomplete
                        onLoad={(ac) => (autocompleteRefs.current[i + 1] = ac)}
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
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="cursor-pointer"
                        onClick={() => removeVia(i)}
                      >
                        <X />
                      </Button>
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={addVia}
                >
                  <Plus />
                  <span>Add Via</span>
                </Button>

                <div className="space-y-2">
                  <Label>Dropoff Location</Label>
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

                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      label: "Passengers",
                      count: passengerCount,
                      setter: setPassengerCount,
                      min: 1,
                      icon: Users,
                    },
                    {
                      label: "Luggage",
                      count: luggageCount,
                      setter: setLuggageCount,
                      min: 0,
                      icon: Luggage,
                    },
                  ].map(({ label, count, setter, min, icon: Icon }, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex gap-2 ps-1 items-center">
                        <Icon size={17} />
                        <Label>{label}</Label>
                      </div>
                      <div className="flex items-center border border-neutral-300 px-2 py-1 rounded-none">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => setter((v) => Math.max(min, v - 1))}
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
                          onClick={() => setter((v) => v + 1)}
                        >
                          <Plus />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={() => goToStep(2)}
                    className="flex items-center bg-neutral-900 hover:bg-neutral-800 transition-all duration-300 cursor-pointer text-white py-4 rounded-none w-full lg:w-auto"
                  >
                    Continue
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </form>
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
                  <div
                    className="w-full h-40 bg-gray-100 bg-center bg-cover mb-4"
                    style={{ backgroundImage: `url(${car.img})` }}
                  />
                  <div className="self-start ps-2">
                    <p className="flex items-center gap-2 text-sm">
                      <Users size={17} color="gray" />
                      {car.passengers} Passengers
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <Luggage size={17} color="gray" />
                      {car.luggage} Luggage
                    </p>
                    <p className="text-sm mt-2">
                      Price: ${(car.price * (1 - discount / 100)).toFixed(2)}
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
