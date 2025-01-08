"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function Heroparallax() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "/",
    thumbnail:
      "/Images/robopic1.webp",
  },
  {
    title: "Finopoly",
    link: "/",
    thumbnail:
      "/Images/Finopoly.png",
  },
  {
    title: "Rogue",
    link: "",
    thumbnail:
      "/Images/robo3.jpg",
  },

  {
    title: "Editorially",
    link: "",
    thumbnail:
      "/Images/robopic2.webp",
  },
  {
    title: "Editrix AI",
    link: "/",
    thumbnail:
      "/Images/robo6.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "/",
    thumbnail:
      "/Images/robo7.jpg",
  },

  {
    title: "Algochurn",
    link: "/",
    thumbnail:
      "/Images/CodeGuru.png",
  },
  {
    title: "Aceternity UI",
    link: "/",
    thumbnail:
      "/Images/TalkyToon.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "/",
    thumbnail:
      "/Images/robo11.webp",
  },
  {
    title: "SmartBridge",
    link: "/",
    thumbnail:
      "/Images/robo14.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "/",
    thumbnail:
      "/Images/robo15.jpg",
  },

  {
    title: "Creme Digital",
    link: "/",
    thumbnail:
      "/Images/robo6.jpg",
  },
];

export default Heroparallax;