import React from "react";
import { HeroVid } from "./herovid";
import Startup from "./startup";

const MyStartUp = () => {
  return (
    <div className="p-5 md:p-10 flex flex-col gap-5 items-center">
      {/* text div */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl">
          My Ongoing Startup Lenzro <br />
        </h1>
        <p className="zain text-zinc-500">
          The OS of Modern Business and startups
        </p>
      </div>
      <Startup />
    </div>
  );
};

export default MyStartUp;
