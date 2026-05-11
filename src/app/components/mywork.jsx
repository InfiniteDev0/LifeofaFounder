"use client";

import React, { useState } from "react";
import { projects } from "../../lib/projects";
import { Button } from "../../components/ui/button";
import { ArrowUpRight } from "lucide-react";

/**
 * Individual Project Card Component
 * Extracted for better readability and reusability
 */
const ProjectCard = ({ project }) => {
  return (
    <div className="card h-[40vh] group relative p-3 border border-black hover:border-white/20 transition-all duration-300 bg-zinc-950 rounded-xl flex flex-col gap-15">
      {/* Header Section: Logo and Type Badge */}
      <div className="w-full flex items-center justify-between">
        <div className="bg-zinc-800 w-13 h-13 rounded-xl">
          <img
            src={project.logo}
            className="w-full border border-zinc-900 rounded-xl h-full"
            alt={`${project.projectName} logo`}
          />
        </div>
        <span className="bg-zinc-900/70 backdrop-blur-2xl text-sm zain px-3 py-1 rounded-full">
          {project.type}
        </span>
      </div>

      {/* Content Section: Title and Description */}
      <div>
        <h1 className="uppercase text-2xl zain">{project.projectName}</h1>
        <p className="text-sm group-hover:blur-sm text-zinc-500 zain transition-all duration-300">
          {project.description}
        </p>
      </div>

      {/* Action Button: Hidden until hover */}
      <Button className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        Visit Project <ArrowUpRight />
      </Button>
    </div>
  );
};

/**
 * Main MyWork Component
 */
const MyWork = () => {
  // State to manage active filter ("Ongoing" or "Finished")
  const [status, setStatus] = useState("Ongoing");

  // Filter projects based on selected status
  const projectsFiltered = projects.filter((item) => item.status === status);

  return (
    <div className="p-5 md:p-10 flex flex-col gap-5 items-center">
      {/* Title Section */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl">My Work</h1>
        <p className="zain text-zinc-500">
          These are my projects as a software developer
        </p>
      </div>

      <div className="w-full flex flex-col gap-8 items-center">
        {/* Filter Switcher */}
        <div className="flex relative outline-none items-center gap-5 bg-zinc-900/50 p-1 zain rounded-full">
          {["Ongoing", "Finished"].map((item) => (
            <button
              key={item}
              onClick={() => setStatus(item)}
              className={`relative z-10 px-4 py-1 rounded-full transition-colors duration-300 ${
                status === item
                  ? "text-black bg-white font-medium"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsFiltered.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* cta */}
        <Button>Lets do a project together!</Button>
      </div>
    </div>
  );
};

export default MyWork;
