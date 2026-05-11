import React from "react";
import {
  BookOpen,
  Code,
  Layers,
  Terminal,
  Database,
  Cloud,
  Settings,
  Smartphone,
  Monitor,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Button } from "@/components/ui/button";

const MyContent = () => {
  const content = [
    {
      name: "Software Development",
      des: "Learn how to go from beginner to building real-world projects. I share coding courses, resources, project breakdowns, assignments, and challenges designed to help you improve by building.",
      imgSrc: "/coding.png",
    },
    {
      name: "Productivity & Growth",
      des: "I'm learning how to become more disciplined, focused, and intentional with my life — and I share everything along the way. From journaling and habits to mindset and self-improvement, this is about building a better version of yourself.",
      imgSrc: "/productivity.png",
    },
    {
      name: "Life Systems",
      des: "Your life becomes easier when your systems become clearer. I share Notion setups, productivity systems planning methods, and frameworks that help organize your goals ideas, projects, and daily life.",
      imgSrc: "/notion.png",
    },
  ];
  return (
    <section className="p-10 px-5 flex flex-col gap-8 items-center  w-full">
      <div className="max-w-6xl w-full">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-medium zain">My Courses</h2>
          <p className="text-zinc-500 zain max-w-lg mx-auto">
            Insights on building software, from zero to production-grade
            applications.
          </p>
        </div>
      </div>
      {/* Top Courses List  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {content.map((item, index) => {
          return (
            <Card key={index} className={"h-fit bg-zinc-950 zain"}>
              <CardHeader>
                <img className="rounded-xl" src={item.imgSrc} alt="" />
              </CardHeader>
              <CardContent className={"flex items-center justify-between"}>
                <h2 className="text-xl">{item.name}</h2>
                <Button className={""}>
                  Open
                  <ArrowUpRight />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* cta */}
      <Button>Explore my Courses!</Button>
    </section>
  );
};

export default MyContent;
