import React from "react";
import { Hero } from "./Hero";
import { CTA } from "./CTA";
import { FAQ } from "./FAQ";

export const Home = () => {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <FAQ />
      <CTA />
    </>
  );
};
