"use client";
import React from "react";
import testiMonialData from "@/data/testimonial_data.json";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

const MusicSchoolTestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-5xl font-bold text-center mt-[3em] z-10">Hear our Harmony: Voices of Success</h2>
     <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <InfiniteMovingCards
            items={testiMonialData}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
  );
};

export default MusicSchoolTestimonialCards;
