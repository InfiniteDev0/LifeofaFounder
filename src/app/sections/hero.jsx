import { Button } from "../../components/ui/button";
import React from "react";
import { Highlighter } from "../../components/ui/highlighter";
import { FaDiscord, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { PawPrint, Sparkles, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { IconStack } from "./icon-stack";

const productivityApps = [
  {
    label: "Ellie - Your app description",
    href: "#",
    className: "bg-indigo-950 text-white border-indigo-950",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    label: "Luna - A better budgeting app",
    href: "#",
    className: "bg-violet-600 text-white border-violet-600",
    icon: <PawPrint className="w-5 h-5" />,
  },
  {
    label: "Muse - Your app description",
    href: "#",
    className: "bg-black text-white border-black",
    icon: <span className="font-semibold">M</span>,
  },
  {
    label: "Amy - Food Journal",
    href: "#",
    className: "bg-white text-black border-zinc-200",
    icon: <UtensilsCrossed className="w-5 h-5" />,
  },
];

const socialPlatforms = [
  {
    label: "GitHub",
    href: "https://github.com/infinitedev0",
    className: "bg-black text-white border-black",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/iam.abdiaziz",
    className:
      "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white border-transparent",
    icon: <FaInstagram className="w-5 h-5" />,
  },
  {
    label: "Discord",
    href: "https://discord.com/invite/YOUR_INVITE",
    className: "bg-indigo-600 text-white border-indigo-600",
    icon: <FaDiscord className="w-5 h-5" />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@YOUR_HANDLE",
    className: "bg-red-600 text-white border-red-600",
    icon: <FaYoutube className="w-5 h-5" />,
  },
];

const Hero = () => {
  const services = [
    "Software Development from Zero To Hero",
    "Personal Improvement and Growth",
    "Build ideas with Teams and Collaborate with Others",
    "Be Part of Growing Dev Community",
  ];
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center   gap-5 mb-10">
      <div className="px-7 flex flex-col items-center space-y-3">
        <img src="/me.jpeg" className="w-15 h-15 rounded-full" alt="" />
        {/* text container */}
        <div className="space-y-3 text-center">
          <h1 className="text-5xl caveat text-emerald-900">
            Hey i’m Abdiaziz Mohamed
          </h1>
          <p className="text-lg zain">
            I’m a{" "}
            <Highlighter action="underline" color="cyan">
              Software Engineer
            </Highlighter>{" "}
            who is rebuilding his life and I help others do the same <br />{" "}
            through code, ideas, and community.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:auto-rows-fr border-2 border-emerald-900/10  rounded-sm w-full p-2">
        <div className="p-3 h-fit  lg:min-h-40 flex flex-col">
          <h1 className="text-xl font-semibold">My productivity apps</h1>
          <div className="md:h-full  flex md:items-center md:justify-center">
            <IconStack items={productivityApps} />
          </div>
        </div>
        <div className="p-3 h-fit lg:border-x lg:min-h-40 flex flex-col ">
          <h1 className="text-xl font-semibold">I Post My progress Here</h1>
          <div className="md:h-full flex items-center justify-center">
            <IconStack items={socialPlatforms} />
          </div>
        </div>
        <div className="p-3 lg:border-r min-h-40 flex flex-col">
          <h1 className="text-xl font-semibold">Curious about my tech stack</h1>
          <p className="p-2 text-sm">
            “I use a different stack depending on the project’s requirements.
            Some projects share the same stack, but if you’re curious, take a
            look for yourself.”
          </p>
          <Button className={"w-full mt-auto"} asChild>
            <Link href="/stack">Click Here!</Link>
          </Button>
        </div>
        <div className="p-3 min-h-40 flex flex-col">
          <h1 className="text-xl font-semibold">Builder Notes</h1>
          <p className="p-2 text-sm">
            “Join the community where I share my journey — documenting what I’m
            building with you, whether it’s a new app or an ongoing one.”
          </p>
          <Button className={"w-full mt-auto"} asChild>
            <Link
              href="https://app.daily.dev/iam_abdiaziz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Journey
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
