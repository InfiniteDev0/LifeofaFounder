"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Classes = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    "all",
    "ui ux",
    "frontend",
    "backend",
    "devops",
    "mobile apps",
    "fullstack",
  ];

  return (
    <div className="relative min-h-screen">
      {/* Floating Bottom Pill */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <ul className="flex items-center gap-1 bg-black/50 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-2xl">
          {categories.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-5 py-2 cursor-pointer capitalize text-[13px] whitespace-nowrap transition-colors duration-300"
              >
                <span
                  className={`relative z-10 ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="floating-active-pill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Classes;
