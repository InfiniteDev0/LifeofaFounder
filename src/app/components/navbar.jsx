"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import this
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname(); // Get current URL path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Classes", href: "/classes" },
    { name: "Books", href: "/books" },
    { name: "Community", href: "/community" },
  ];

  return (
    <nav className="flex items-center justify-between px-7 py-3 fixed w-full z-50">
      <h1 className="text-2xl font-bold text-white">Life of a founder</h1>

      <ul className="flex items-center gap-1 bg-zinc-800/50 backdrop-blur-3xl border border-white/10 p-1 text-sm rounded-full">
        {navLinks.map((item) => {
          // Check if this specific link is the current active path
          const isActive = pathname === item.href;

          return (
            <li
              key={item.name}
              className="relative px-6 py-1 cursor-pointer outline-none"
            >
              <Link
                href={item.href}
                className={`relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-black font-medium"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>

              {/* The pill now follows the URL, not a local state click */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          );
        })}
      </ul>

      <button className="rounded-full px-5 py-1 bg-white text-sm text-black hover:bg-zinc-200 transition">
        Start Here
      </button>
    </nav>
  );
};

export default Navbar;
