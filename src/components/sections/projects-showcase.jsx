"use client";

import { useState } from "react";
import ProjectCard from "@/components/project-card";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "Popular", label: "Popular", sort: (a, b) => b.date.localeCompare(a.date) },
  { id: "New and Featured", label: "New and Featured", sort: (a, b) => b.views - a.views },
];

export default function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === activeTab);
  const projects = [...PROJECTS].sort(tab.sort);

  return (
    <section className="max-w-[120rem] mx-auto px-4 sm:px-5 mt-10 sm:mt-14 mb-20">
      {/* Tabs */}
      <div className="flex items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={cn(
              "pb-1 font-he text-md zain border-b-2 cursor-pointer transition-colors",
              activeTab === t.id
                ? "text-foreground border-foreground"
                : "text-muted-foreground border-transparent hover:text-foreground"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
