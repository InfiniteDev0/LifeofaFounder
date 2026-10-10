import { Tabs, TabsList, TabsTrigger } from "@/@components/motion/tabs";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/data/profile";

export default function ProfileHeader() {
  return (
    <section>
      {/* Cover image */}
      <div className="relative w-full h-40 sm:h-56 lg:h-[30vh] overflow-hidden">
        <img
          src={PROFILE.cover}
          alt="Background cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Mobile: tabs sit on the cover */}
        <div className="absolute top-3 right-3 md:hidden">
          <ViewTabs />
        </div>
      </div>

      <div className="px-4 sm:px-5">
        <div className="flex flex-row items-start md:items-end gap-3 sm:gap-5 md:gap-10">
          {/* Avatar card */}
          <div className="relative z-10 -mt-12 sm:-mt-20 lg:-mt-24 bg-white/10 backdrop-blur-xl p-1.5 sm:p-2.5 rounded-[30px] sm:rounded-[52px] flex-shrink-0">
            <div className="size-24 sm:w-[170px] sm:h-[162px] md:w-[220px] md:h-[210px] lg:w-[230px] lg:h-[220px] overflow-hidden rounded-[24px] sm:rounded-[44px]">
              <img
                src={PROFILE.avatar}
                className="w-full h-full object-cover"
                alt="Profile photo"
              />
            </div>
          </div>

          {/* Name, tagline, desktop CTA */}
          <div className="flex-1 min-w-0 pt-3 md:pt-0 md:pb-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight text-foreground">
              {PROFILE.name}
              {PROFILE.verified && (
                <img
                  src="/icons/blue.svg"
                  className="inline-block size-4 sm:size-6 ml-1.5 sm:ml-2 align-middle"
                  alt="Verified"
                />
              )}
            </h1>
            <p className="mt-1 text-sm sm:text-base zain text-muted-foreground">
              {PROFILE.tagline}
            </p>
            <Button className="hidden md:inline-flex mt-4 h-10 text-md cursor-pointer rounded-md px-6">
              Get in Touch
            </Button>
          </div>

          {/* Desktop: tabs on the right */}
          <div className="hidden md:block self-end pb-2">
            <ViewTabs />
          </div>
        </div>

        {/* Mobile: full-width CTA */}
        <Button className="md:hidden w-full mt-5 h-11 text-md cursor-pointer rounded-md">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}

function ViewTabs() {
  return (
    <Tabs defaultValue="web" variant="segment">
      <TabsList>
        <TabsTrigger value="web">Web</TabsTrigger>
        <TabsTrigger value="mobile">Mobile</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
