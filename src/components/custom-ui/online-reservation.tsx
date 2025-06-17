"use client";

import { useState, useRef } from "react";
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
import { Plus, Minus, Users, Luggage } from "lucide-react";

const Cars = [
  {
    name: "Luxury Sedan",
    img: "/assets/images/car1.png",
    passengers: 3,
    luggage: 3,
    price: 591.19,
  },
  {
    name: "Mercedes Benz S500 S...",
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
    name: "Mercedes Benz Limo Sp...",
    img: "/assets/images/car1.png",
    passengers: 13,
    luggage: 10,
    price: 822.9,
  },
  {
    name: "Mercedes Benz CEO/JE...",
    img: "/assets/images/car1.png",
    passengers: 8,
    luggage: 12,
    price: 618.87,
  },
];

export default function OnlineReservation() {
  const [pickupLocation, setPickupLocation] = useState<string>("");
  const [dropoffLocation, setDropoffLocation] = useState<string>("");
  const [viaFields, setViaFields] = useState<string[]>([]);
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [luggageCount, setLuggageCount] = useState<number>(0);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const autocompleteInstances = useRef<google.maps.places.Autocomplete[]>([]);
  const [step, setStep] = useState<number>(1);
  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_CAR_BOOKING_APP_GOOGLEMAPS_API_KEY || "",
    libraries: ["places"],
  });

  const handlePlaceChanged = async (
    index: number,
    type: "pickup" | "dropoff" | "via"
  ) => {
    const autocomplete = autocompleteInstances.current[index];
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place && place.geometry) {
        const location = place.geometry.location;
        if (type === "pickup") {
          setPickupLocation(place.formatted_address || "");
          map?.panTo(location as google.maps.LatLng);
        } else if (type === "dropoff") {
          setDropoffLocation(place.formatted_address || "");
          map?.panTo(location as google.maps.LatLng);
        } else {
          setViaFields((prev) => {
            const updated = [...prev];
            updated[index] = place.formatted_address || "";
            return updated;
          });
        }
        if (pickupLocation && dropoffLocation) {
          calculateRoute();
        }
      }
    }
  };

  const calculateRoute = async () => {
    if (!pickupLocation || !dropoffLocation) return;

    const directionsService = new google.maps.DirectionsService();
    const waypoints = viaFields.map((via) => ({
      location: via,
      stopover: true,
    }));

    const result = await directionsService.route({
      origin: pickupLocation,
      destination: dropoffLocation,
      waypoints,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(result);
  };

  const addViaField = () => setViaFields((prev) => [...prev, ""]);
  const removeViaField = (index: number) =>
    setViaFields((prev) => prev.filter((_, i) => i !== index));

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!pickupLocation || !dropoffLocation) {
      alert("Please fill out all required fields.");
      return;
    }
    setStep(2); // Move to the next step
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "whoami") {
      setDiscount(25); // Apply 25% discount
      alert("Promo code applied! You get a 25% discount.");
    } else {
      alert("Invalid promo code.");
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-neutral-50 lg:p-10">
      {step === 1 ? (
        <>
          {/* Step 1: Form Section */}
          <div className="lg:w-1/2 bg-white p-8 shadow-md">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Book Your Ride
            </h2>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              {/* Service Type */}
              <div className="space-y-2">
                <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                  Service Type
                </Label>
                <Select required>
                  <SelectTrigger className="h-12 rounded-none bg-white border-neutral-300 hover:border-neutral-400 font-light">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one-way">One Way</SelectItem>
                    <SelectItem value="round-trip">Round Trip</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pickup Date & Time */}
              <div className="space-y-2">
                <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                  Pickup Date & Time
                </Label>
                <Input
                  type="datetime-local"
                  className="h-12 rounded-none"
                  required
                />
              </div>

              {/* Pickup Location */}
              <div className="space-y-2">
                <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                  Pickup Location
                </Label>
                <Autocomplete
                  onLoad={(autocomplete) =>
                    (autocompleteInstances.current[0] = autocomplete)
                  }
                  onPlaceChanged={() => handlePlaceChanged(0, "pickup")}
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
              {viaFields.map((via, index) => (
                <div key={index} className="space-y-2">
                  <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                    Add Stop
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Autocomplete
                      onLoad={(autocomplete) =>
                        (autocompleteInstances.current[index + 1] =
                          autocomplete)
                      }
                      onPlaceChanged={() =>
                        handlePlaceChanged(index + 1, "via")
                      }
                    >
                      <Input
                        value={via}
                        onChange={(e) =>
                          setViaFields((prev) => {
                            const updated = [...prev];
                            updated[index] = e.target.value;
                            return updated;
                          })
                        }
                        placeholder="Enter stop location"
                        className="h-12 rounded-none flex-grow"
                      />
                    </Autocomplete>
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
                type="button"
                onClick={addViaField}
                className="flex items-center space-x-2 text-neutral-700 hover:text-white bg-transparent"
              >
                <Plus className="h-5 w-5" />
                <span>Add Stop</span>
              </Button>

              {/* Dropoff Location */}
              <div className="space-y-2">
                <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                  Dropoff Location
                </Label>
                <Autocomplete
                  onLoad={(autocomplete) =>
                    (autocompleteInstances.current[viaFields.length + 1] =
                      autocomplete)
                  }
                  onPlaceChanged={() =>
                    handlePlaceChanged(viaFields.length + 1, "dropoff")
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

              {/* Passengers & Luggage */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                    Passengers
                  </Label>
                  <div className="flex items-center border border-neutral-300 px-2 py-1 rounded-none">
                    <Button
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
                      variant="ghost"
                      size="icon"
                      onClick={() => setPassengerCount((v) => v + 1)}
                    >
                      <Plus />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-light text-neutral-700 uppercase tracking-wider">
                    Luggage
                  </Label>
                  <div className="flex items-center border border-neutral-300 px-2 py-1 rounded-none">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setLuggageCount((v) => Math.max(0, v - 1))}
                    >
                      <Minus />
                    </Button>
                    <span className="flex-grow text-center text-neutral-900">
                      {luggageCount}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setLuggageCount((v) => v + 1)}
                    >
                      <Plus />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-4 font-light rounded-none transition-all duration-300"
              >
                Select Vehicle
              </Button>
            </form>
          </div>

          {/* Right Map Section */}
          <div className="lg:w-1/2 h-[500px] lg:h-[400px] p-4">
            <GoogleMap
              center={{ lat: 37.7749, lng: -122.4194 }}
              zoom={10}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              onLoad={(map) => setMap(map)}
            >
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </div>
        </>
      ) : (
        <div className="w-full">
          {/* Step 2: Car Cards */}
          <div className="w-full p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Cars.map((car, _i) => (
              <div
                key={_i}
                className="border border-neutral-300 rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <h3 className="text-lg font-medium text-neutral-900 mb-2">
                  {car.name}
                </h3>
                <div
                  className="w-full h-44 py-8 bg-gray-100 rounded-md mb-4"
                  style={{
                    backgroundImage: `url(${car.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="self-start ps-2 mt-6">
                  <p className="flex items-center gap-2 text-sm text-neutral-700 mb-2">
                    <Users size={17} color="gray" />
                    <span>Passengers: {car.passengers}</span>
                  </p>
                  <p className="flex items-center gap-2 text-sm text-neutral-700 mb-2">
                    <Luggage size={17} color="gray" />
                    <span>Luggage: {car.luggage}</span>
                  </p>
                  <p className="text-sm text-neutral-700 mb-4">
                    Price: ${(car.price * (1 - discount / 100)).toFixed(2)}
                  </p>
                </div>
                <a
                  className="w-full"
                  href="https://web.whatsapp.com"
                  target="_blank"
                >
                  <Button className="w-full cursor-pointer bg-neutral-900 hover:bg-neutral-800 text-white py-2 rounded-md">
                    Book Now
                  </Button>
                </a>
              </div>
            ))}
          </div>

          {/* Promo Code Section */}
          <div className="w-full p-8 bg-white shadow-md mt-6">
            <h3 className="text-lg font-medium text-neutral-900 mb-4">
              Promo Code
            </h3>
            <div className="flex items-center gap-4">
              <Input
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="h-12 rounded-none flex-grow"
              />
              <Button
                onClick={applyPromoCode}
                className="bg-neutral-900 hover:bg-neutral-800 text-white py-2 px-6 rounded-md"
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
