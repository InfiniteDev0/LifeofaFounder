"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  return (
    <nav className="fixed w-full  z-50">
      <div className="flex items-center justify-between px-5  py-3">
        <h1 className="text-xl p-2 px-5 rounded-full bg-emerald-500 backdrop-blur-3xl font-bold">
          Founders Diary
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
