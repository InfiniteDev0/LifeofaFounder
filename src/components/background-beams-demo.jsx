"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export default function BackgroundBeamsDemo() {
  return (
    <div
      className="h-[40rem] w-full rounded-md absolute top-0 z-10 flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
    </div>
  );
}
