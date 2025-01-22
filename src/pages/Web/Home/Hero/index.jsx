import { BPButton, Container } from "@/components";
import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="py-24 sm:py-32 bg-gradient-to-r from-primary to-primary-foreground">
        <Container>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Streamline Your Workflow
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10">
            Boost productivity and simplify your business processes
          </p>
          <BPButton
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Start Free Trial
          </BPButton>
        </Container>
      </div>
    </>
  );
};
