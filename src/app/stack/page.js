import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiShadcnui } from "react-icons/si";
import { Lightbulb } from "lucide-react";
import { StackList } from "./stack-list";

const stack = [
  {
    name: "Next.js",
    href: "https://nextjs.org",
    description: "The React framework I build this site with.",
    className: "bg-black text-white border-black",
    icon: <SiNextdotjs className="w-5 h-5" />,
  },
  {
    name: "React",
    href: "https://react.dev",
    description: "The library I build every UI with.",
    className: "bg-sky-500 text-white border-sky-500",
    icon: <FaReact className="w-5 h-5" />,
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com",
    description: "How I style everything, fast.",
    className: "bg-cyan-500 text-white border-cyan-500",
    icon: <SiTailwindcss className="w-5 h-5" />,
  },
  {
    name: "shadcn/ui",
    href: "https://ui.shadcn.com",
    description: "My go-to component library.",
    className: "bg-zinc-900 text-white border-zinc-900",
    icon: <SiShadcnui className="w-5 h-5" />,
  },
  {
    name: "Framer Motion",
    href: "https://motion.dev",
    description: "How I animate this site.",
    className: "bg-fuchsia-600 text-white border-fuchsia-600",
    icon: <SiFramer className="w-5 h-5" />,
  },
];

export default function StackPage() {
  return (
    <div className="pt-25 px-5 md:px-10 pb-20 max-w-2xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      <div className="mt-10 space-y-3">
        <h1 className="text-3xl font-semibold">My tech stack</h1>
        <p className="zain text-zinc-500">
          Here are the tools and frameworks I use to build my apps and this
          site.
        </p>
      </div>

      <div className="mt-10">
        <StackList items={stack} />
      </div>

      <div className="mt-10 flex items-start gap-2 rounded-lg border border-emerald-900/10 p-4 text-sm text-zinc-500 zain">
        <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
        More tools get added here as I start using them for hosting,
        backend, and everything else.
      </div>
    </div>
  );
}
