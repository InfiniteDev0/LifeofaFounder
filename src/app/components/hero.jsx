import { Button } from "../../components/ui/button";
import React from "react";
import { HeroVid } from "./herovid";
import { AuroraText } from "../../components/ui/aurora-text";
import { Check, CheckCircle, CheckCircle2Icon } from "lucide-react";
import { Highlighter } from "../../components/ui/highlighter";
import { FaDiscord, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  const services = [
    "Software Development from Zero To Hero",
    "Personal Improvement and Growth",
    "Build ideas with Teams and Collaborate with Others",
    "Be Part of Growing Dev Community",
  ];
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center   gap-5">
      <div className="px-7 flex flex-col items-center space-y-3">
        <img src="/me.jpeg" className="w-15 h-15 rounded-full" alt="" />
        {/* text container */}
        <div className="space-y-3 text-center">
          <h1 className="text-5xl caveat bg-clip-text text-transparent bg-gradient-to-r from-[#de4ac8] to-[#06b6d4]">
            Hey i'm Abdiaziz Mohamed
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
      <div>
        {/* <ul className="space-y-1 flex flex-col items-center py-5">
          {services.map((item, index) => {
            return (
              <li className="flex items-center gap-2 zain" key={index}>
                <span>
                  <CheckCircle2Icon className="" />
                </span>
                {item}
              </li>
            );
          })}
        </ul> */}
        <div className="space-y-2">
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://instagram.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://discord.com/invite/YOUR_INVITE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="w-5 h-5" />
              </Link>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://youtube.com/@YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="w-5 h-5" />
              </Link>
            </Button>
          </div>
          <Button className="rounded-sm w-full px-5 py-1  text-sm cursor-pointer transition">
            Join the Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
