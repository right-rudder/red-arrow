import RedBirdImage from "../../public/img/our-fleet/red-bird.webp";
import SkittlesImage from "../../public/img/our-fleet/skittles.webp";
import EchoImage from "../../public/img/our-fleet/echo.webp";
import A5YXImage from "../../public/img/our-fleet/5yx.webp";
import WoodstockImage from "../../public/img/our-fleet/woodstock.webp";
import N242TWImage from "../../public/img/our-fleet/n242tw.webp";
import ChipImage from "../../public/img/our-fleet/chip.webp";
import DaleImage from "../../public/img/our-fleet/dale.webp";
import N318OUImage from "../../public/img/our-fleet/n318ou.webp";

export const fleet = [
  {
    name: "Red Bird",
    image: RedBirdImage,
    alt: "Red Bird Cessna 172N at Red Arrow Flight Academy",
    stats: {
      tailNumber: "N4909G",
      power: "180 HP",
      model: "Cessna 172N",
      maxSpeed: "124 Knots",
      year: "1979",
      equipment: "Garmin 430, Aspen Avionics PFD",
      rentalPrice: "$162 /hour wet",
    },
    imageAlignment: "right",
  },
  {
    name: "Skittles",
    image: SkittlesImage,
    alt: "Skittles Cessna 172M at Red Arrow Flight Academy",
    stats: {
      tailNumber: "N471PR",
      power: "160 HP",
      model: "172M",
      maxSpeed: "119 Knots",
      year: "1973",
      equipment: "G5, Garmin 430",
      rentalPrice: "$152 /hour wet",
    },
    imageAlignment: "center",
  },
  {
    name: "Echo",
    image: EchoImage,
    alt: "Echo Cessna 172N at Red Arrow Flight Academy",
    stats: {
      tailNumber: "N8182E",
      power: "160 HP",
      model: "Cessna 172N",
      maxSpeed: "119 Knots",
      year: "1978",
      equipment: "Garmin 430Was, Dual G5",
      rentalPrice: "$165 /hour wet",
    },
    imageAlignment: "right",
  },
  {
    name: "5YX",
    image: A5YXImage,
    alt: "5YX Cessna 172P at Red Arrow Flight Academy",
    stats: {
      tailNumber: "N5YX",
      power: "160 HP",
      model: "Cessna 172P",
      maxSpeed: "119 Knots",
      year: "1981",
      equipment: "Aspen, Garmin 650,Avionics, S-Tec Autopilot",
      rentalPrice: "$167 /hour wet",
    },
    imageAlignment: "left",
  },
  {
    name: "Woodstock",
    image: WoodstockImage,
    alt: "Woodstock Cessna 172K at Red Arrow Flight Academy",
    stats: {
      tailNumber: "N20HT",
      power: "180 HP",
      model: "Cessna 172K",
      maxSpeed: "Knots",
      year: "1969",
      equipment: "2 Garmin G5, Garming 650 GPS",
      rentalPrice: "$165 /hour wet",
    },
    imageAlignment: "right",
  },
  {
    name: "N242TW",
    image: N242TWImage,
    alt: "N242TW Cessna 172S at Red Arrow Flight Academy",
    stats: {
      tailNumber: "N242TW",
      power: "180 HP",
      model: "Cessna 172S",
      maxSpeed: "Knots",
      year: "2005",
      equipment: " 2 Garmin G1000, Airconditioning",
      rentalPrice: "$179 /hour wet",
    },
    imageAlignment: "center",
  },
  {
    name: "Chip",
    image: ChipImage,
    alt: "Chip Piper Archer II (PA-28-181) at Red Arrow Flight Academy",
    stats: {
      tailNumber: "N2680M",
      power: "180 HP",
      model: "Piper Archer II PA-28-181",
      maxSpeed: "125 Knots",
      year: "1978",
      equipment: "2 Garmin G5, Garming 650 GPS, S-Tec Autopilot",
      rentalPrice: "$171 /hour wet",
    },
    imageAlignment: "right",
  },
  {
    name: "Dale",
    image: DaleImage,
    alt: "Dale Piper Archer II (PA-28-181) at Red Arrow Flight Academy",
    stats: {
      tailNumber: "N7689F",
      power: "180 HP",
      model: "Piper Archer II (PA-28-181)",
      maxSpeed: "125 Knots",
      year: "1976",
      equipment: "Garming 650 GPS",
      rentalPrice: "$166 /hour wet",
    },
    imageAlignment: "right",
  },
  {
    name: "N318OU",
    image: N318OUImage,
    alt: "N318OU Cessna 182F at Red Arrow Flight Academy",
    stats: {
      tailNumber: "N318OU",
      power: "235 HP",
      model: "Cessna 182F",
      maxSpeed: "167 mph",
      year: "",
      equipment: "Garmin 496",
      rentalPrice: "$193 /hour wet",
    },
    imageAlignment: "left",
  },
];
