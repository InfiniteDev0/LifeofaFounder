"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Search } from "lucide-react";
import Link from "next/link";
import { books } from "@/assets/assets";

const Books = () => {
  // Fixed: Unified the state so the indicator and filter logic use the same value
  const [filterStatus, setStatus] = useState("Ongoing");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "manga",
    "novel",
    "self-help",
    "philosophy",
    "reflections",
  ];

  // Normalize labels/values so "self-help" matches "self-help", etc.
  const norm = (s) => s.toLowerCase().replace(/[^a-z]/g, "");

  // Filter logic to match the selected tab, category and search query
  const filteredBooks = books.filter((book) => {
    const matchesStatus =
      filterStatus === "Ongoing"
        ? book.release === "new"
        : book.release === "upcoming";

    const c = norm(book.category);
    const s = norm(selectedCategory);
    const matchesCategory =
      selectedCategory === "all" || c.includes(s) || s.includes(c);

    const q = search.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      book.name.toLowerCase().includes(q) ||
      book.description.toLowerCase().includes(q);

    return matchesStatus && matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-20 px-5">
      {/* banner */}
      <div className={""}>
        <div className={"p-0 flex flex-col items-center gap-2"}>
          <h1 className="text-3xl text-center">
            Stories, ideas, and lessons from the journey of becoming
          </h1>
          <p className="zain text-sm text-zinc-400">
            Manga, novels, self-growth, philosophy, and reflections on life.
          </p>
        </div>
      </div>

      {/* filter options */}
      <div className="py-7 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {["Ongoing", "Coming Soon"].map((item, index) => {
            return (
              <div key={index} className="space-y-2 cursor-pointer">
                <p
                  onClick={() => setStatus(item)}
                  className={`mb-1 zain transition-colors ${
                    filterStatus === item ? "" : "text-zinc-500"
                  }`}
                >
                  {item}
                </p>
                <div
                  className={`transition-all duration-300 ${
                    filterStatus === item
                      ? "w-full h-[1px] bg-foreground"
                      : "w-0 h-[1px] bg-transparent"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className={
                "zain rounded-full px-3 cursor-pointer text-md  hover:bg-zinc-200"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M1 6L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                ></path>
                <circle
                  cx="15"
                  cy="6"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                ></circle>
                <path
                  d="M19 14L11 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                ></path>
                <path
                  d="M2 14C2 12.3431 3.34315 11 5 11C6.65685 11 8 12.3431 8 14C8 15.6569 6.65685 17 5 17C3.34315 17 2 15.6569 2 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
              <span className="ml-2">Filter</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-zinc-950 border-zinc-800 text-white flex flex-col gap-0 p-0"
          >
            <SheetHeader className="border-b border-zinc-800">
              <SheetTitle className="text-white zain text-xl">
                Filter Books
              </SheetTitle>
              <SheetDescription className="text-zinc-500 zain">
                Search and narrow down books by category.
              </SheetDescription>
            </SheetHeader>

            {/* search */}
            <div className="px-4 pt-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search books..."
                  className="pl-8 h-9 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 zain"
                />
              </div>
            </div>

            {/* categories */}
            <div className="px-4 py-5 space-y-3 overflow-y-auto flex-1">
              <p className="text-xs uppercase tracking-wide text-zinc-500 zain">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(cat)}
                    className={`zain capitalize rounded-full px-3 py-1 text-sm transition-colors ${
                      selectedCategory === cat
                        ? "bg-white text-black"
                        : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <SheetFooter className="border-t border-zinc-800 flex-row gap-2">
              <Button
                variant="ghost"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("all");
                }}
                className="zain flex-1 text-white hover:bg-zinc-800"
              >
                Reset
              </Button>
              <SheetClose asChild>
                <Button className="zain flex-1">Show Results</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* book cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 mb-10">
        {filteredBooks.map((item, index) => {
          return (
            <div key={index} className="space-y-4">
              <Card className={"bg-zinc-200 h-90 w-70 p-5 border-zinc-800"}>
                <div className="p-0">
                  <img src="/subtle.png" alt={item.name} />
                </div>
              </Card>
              <div className="space-y-2">
                <h1 className="text-xl font-medium">{item.name}</h1>
                <p className="text-sm text-zinc-500 zain leading-snug">
                  {item.description}
                </p>
              </div>
              <Link href={`/books/${item.id}`}>
                <Button>Read for Free</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
