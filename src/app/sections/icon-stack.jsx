import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";

const Z_INDEX_CLASSES = ["z-40", "z-30", "z-20", "z-10", "z-0"];

export const IconStack = ({ items }) => {
  return (
    <div className="group/stack flex w-full md:items-center md:justify-center pt-2">
      {items.map((item, index) => (
        <Tooltip key={item.label}>
          <TooltipTrigger asChild>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border shadow-sm transition-all duration-300 ease-out hover:!-translate-y-1.5 hover:scale-105 ${
                Z_INDEX_CLASSES[index] ?? "z-0"
              } ${item.className} ${
                index === 0 ? "" : "-ml-4 group-hover/stack:ml-1"
              }`}
            >
              {item.icon}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="top">{item.label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};
