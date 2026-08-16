"use client";

import React, { useState } from "react";
import { Bookmark } from "lucide-react";
import { buildChapters } from "@/assets/assets";

const BookChapters = ({ book }) => {
  const chapters = buildChapters(book);
  const lastRead = book?.lastRead ?? 0;

  // Which chapters the reader has bookmarked (UI-only state).
  const [bookmarks, setBookmarks] = useState(() => new Set());

  const toggleBookmark = (n) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      next.has(n) ? next.delete(n) : next.add(n);
      return next;
    });
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-800">
        <h2 className="text-lg font-semibold">Chapters</h2>
        <span className="text-xs text-zinc-500 zain">
          {chapters.length} chapters
        </span>
      </div>

      <div className="max-h-130 overflow-y-auto scrollbar-pill divide-y divide-zinc-900">
        {chapters.map((chapter) => {
          const isLastRead = chapter.n === lastRead;
          const isBookmarked = bookmarks.has(chapter.n);
          return (
            <div
              key={chapter.n}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-zinc-900/60 ${
                isLastRead ? "bg-zinc-900/40" : ""
              }`}
            >
              <span className="w-6 shrink-0 text-sm font-semibold text-zinc-600 tabular-nums">
                {String(chapter.n).padStart(2, "0")}
              </span>

              <div className="flex-1 min-w-0">
                <p className="truncate font-medium text-white">
                  {chapter.title}
                </p>
                <p className="text-xs text-zinc-500 zain">
                  {isLastRead ? "Last read · " : ""}
                  {chapter.minutes} min read
                </p>
              </div>

              <button
                type="button"
                onClick={() => toggleBookmark(chapter.n)}
                aria-label={isBookmarked ? "Remove bookmark" : "Bookmark chapter"}
                aria-pressed={isBookmarked}
                className={`shrink-0 rounded-md p-1.5 transition-colors ${
                  isBookmarked
                    ? "text-amber-400"
                    : "text-zinc-600 hover:text-white hover:bg-zinc-800"
                }`}
              >
                <Bookmark
                  className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookChapters;
