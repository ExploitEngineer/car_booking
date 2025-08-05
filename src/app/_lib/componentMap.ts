{
  /* services components imports */
}
import { AirportTransportationServices } from "@/components/custom-ui/services/airport-transportation-services";
import { CarChauffeurServices } from "@/components/custom-ui/services/car-chauffeur-services";
import { CorporateTransportationServices } from "@/components/custom-ui/services/corporate-transportation-services";
import { CruiseTransportationServices } from "@/components/custom-ui/services/cruise-transportation-services";
import { EventTransportationServices } from "@/components/custom-ui/services/event-transportation-services";
import { HourlyDropOffTransportationServices } from "@/components/custom-ui/services/hourly-drop-off-transportation-services";
import { PrivateFboTransportationServices } from "@/components/custom-ui/services/private-fbo-transportation-services";
import { PrivateJetTransportationServices } from "@/components/custom-ui/services/private-jet-transportation-services";
import { WeddingTransportationServices } from "@/components/custom-ui/services/wedding-transportation-services";
import { LimousineTransportationServices } from "@/components/custom-ui/services/limousine-transportation-services";

{
  /* fleet components imports */
}
import { ChevroletSuburbanInHouston } from "@/components/custom-ui/fleet/chevrolet-suburban-in-houston";
import { MercedesBenzCeoJetSprinter2 } from "@/components/custom-ui/fleet/mercedes-benz-ceo-jet-spriner-2";
import { MercedesBenzSClass3 } from "@/components/custom-ui/fleet/mercedes-benz-s-class-3";
import { RentACadillacHouston } from "@/components/custom-ui/fleet/rent-a-cadillac-houston";

export const ComponentMap: { [key: string]: React.FC } = {
  "airport-transportation-services": AirportTransportationServices,
  "car-chauffeur-services": CarChauffeurServices,
  "corporate-transportation-services": CorporateTransportationServices,
  "cruise-transportation-services": CruiseTransportationServices,
  "event-transportation-services": EventTransportationServices,
  "hourly-drop-off-transportation-services":
    HourlyDropOffTransportationServices,
  "private-fbo-transportation-services": PrivateFboTransportationServices,
  "private-jet-transportation-services": PrivateJetTransportationServices,
  "limousine-transportation-services": LimousineTransportationServices,
  "wedding-transportation-services": WeddingTransportationServices,
  "chevrolet-suburban-in-houston": ChevroletSuburbanInHouston,
  "mercedes-benz-ceo-jet-spriner-2": MercedesBenzCeoJetSprinter2,
  "mercedes-benz-s-class-3": MercedesBenzSClass3,
  "rent-a-cadillac-houston": RentACadillacHouston,
};
