"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  ArrowLeft,
  BookOpen,
  History,
  Layers,
  Heart,
  MoreHorizontal,
  Share2,
  Bookmark,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getBookById, prettyBookCategory } from "@/assets/assets";
import BookChapters from "./book-chapters";

const BookDetail = ({ params }) => {
  // In this Next.js version `params` is a promise — unwrap it with React.use()
  const { id } = use(params);
  const book = getBookById(id);

  // Favorite is UI-only state for now.
  const [isFavorite, setIsFavorite] = useState(false);

  if (!book) {
    return (
      <div className="min-h-screen pt-24 px-5 bg-black text-white flex flex-col items-center gap-4">
        <p className="zain text-zinc-400">Book not found.</p>
        <Link href="/books">
          <Button variant="ghost" className="text-white hover:bg-zinc-800">
            <ArrowLeft className="h-4 w-4" /> Back to books
          </Button>
        </Link>
      </div>
    );
  }

  const status =
    book.status === "locked"
      ? "Coming soon"
      : book.release === "new"
      ? "Ongoing"
      : "Coming soon";

  const stats = [
    { label: "Category", value: prettyBookCategory(book.category), icon: Layers },
    { label: "Chapters", value: book.chapters, icon: BookOpen },
    {
      label: "Last Read",
      value: book.lastRead ? `Ch. ${book.lastRead}` : "Not started",
      icon: History,
    },
    { label: "Status", value: status, icon: Sparkles },
  ];

  const isStarted = book.lastRead > 0;

  return (
    <div className="min-h-screen pt-20 px-5 bg-black text-white">
      <div className="">
        {/* back link */}
        <Link
          href="/books"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-white transition-colors zain mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> All books
        </Link>

        {/* cover + title */}
        <div className="flex flex-col gap-5">
          <img
            src={book.image}
            onError={(e) => {
              e.currentTarget.src = "/subtle.png";
            }}
            alt={book.name}
            className="h-15 w-15 rounded-2xl object-cover border border-zinc-800 bg-zinc-900"
          />
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            {book.name}
          </h1>
        </div>

        {/* stats: Category / Chapters / Last Read / Status */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <p className="text-sm text-zinc-500 zain">{stat.label}</p>
              <div className="flex items-center gap-1.5">
                <stat.icon className="h-4 w-4 text-zinc-400" />
                <p className="text-base font-medium text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* actions */}
        <div className="mt-10 flex items-center gap-3">
          <Button className="zain rounded-full px-6">
            <BookOpen className="h-4 w-4" />
            {isStarted ? `Continue Ch. ${book.lastRead}` : "Start Reading"}
          </Button>

          <Button
            variant="outline"
            onClick={() => setIsFavorite((v) => !v)}
            aria-pressed={isFavorite}
            className={`zain rounded-full px-6 border-zinc-700 bg-transparent hover:bg-zinc-900 ${
              isFavorite ? "text-rose-400 hover:text-rose-400" : "text-white hover:text-white"
            }`}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
            {isFavorite ? "In Favorites" : "Add to Favorites"}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="More options"
                className="rounded-full border-zinc-700 bg-transparent text-white hover:bg-zinc-900 hover:text-white"
              >
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="top"
              className="w-56 bg-zinc-950 border-zinc-800 text-white"
            >
              <DropdownMenuItem className="zain focus:bg-zinc-800 focus:text-white">
                <Bookmark className="h-4 w-4" /> Bookmark this book
              </DropdownMenuItem>
              <DropdownMenuItem className="zain focus:bg-zinc-800 focus:text-white">
                <Share2 className="h-4 w-4" /> Share
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* about the story + chapters */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 pb-20">
          {/* left: what the story is about */}
          <div>
            <h2 className="text-2xl font-semibold">What the story is about</h2>
            <div className="mt-4 space-y-4 text-zinc-400 zain leading-relaxed">
              <p>{book.about ?? book.description}</p>
            </div>
          </div>

          {/* right: chapters */}
          <BookChapters book={book} />
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
