"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Build", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Books", href: "/books" },
    { name: "Community", href: "/community" },
  ];

  return (
    <nav className="fixed w-full  z-50">
      <div className="flex items-center justify-between px-5  py-3">
        <h1 className="text-xl p-2 px-5 rounded-full bg-emerald-500 backdrop-blur-3xl font-bold">
          Founders Diary
        </h1>

        {/* Desktop Nav */}
        {/* <ul className="hidden md:flex items-center gap-1  backdrop-blur-3xl p-1 text-sm rounded-full">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li
                key={item.name}
                className="relative px-6 py-1.5 cursor-pointer outline-none zain text-[15px]"
              >
                <Link
                  href={item.href}
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive
                      ? "text-black font-medium"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {item.name}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-orange-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul> */}

        {/* Mobile Toggle Button */}
        {/* <button
          className="md:hidden text-orange-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      {/* Mobile Nav Dropdown */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/5"
          >
            <ul className="flex flex-col p-4 gap-2">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 zain text-lg ${
                        isActive
                          ? "bg-white text-black font-semibold"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence> */}
    </nav>
  );
};

export default Navbar;
