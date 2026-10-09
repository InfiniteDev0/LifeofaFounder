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
      </div>

      <div className="flex items-center justify-between w-full">
        {/* Avatar + info */}
        <div className=" px-4 sm:px-5 -mt-14 sm:-mt-20 lg:-mt-24 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-10">
            {/* Avatar card */}
            <div className="bg-white/10 backdrop-blur-xl p-2 sm:p-2.5 rounded-[40px] sm:rounded-[52px] flex-shrink-0">
              <div className="w-[150px] h-[142px] sm:w-[200px] sm:h-[190px] md:w-[220px] md:h-[210px] lg:w-[230px] lg:h-[220px] overflow-hidden rounded-[34px] sm:rounded-[48px]">
                <img
                  src={PROFILE.avatar}
                  className="w-full h-full object-cover"
                  alt="Profile photo"
                />
              </div>
            </div>

            {/* Name, tagline, actions */}
            <div className="flex-1 min-w-0 pb-2">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl  text-foreground">{PROFILE.name}</h1>
                {PROFILE.verified && (
                  <img
                    src="/icons/blue.svg"
                    className="size-5 sm:size-6 flex-shrink-0"
                    alt="Verified"
                  />
                )}
              </div>
              <p className="mt-1 text-base sm:text-md zain text-muted-foreground">
                {PROFILE.tagline}
              </p>
              <div className="flex items-center mt-4 gap-2">
                <Button className="h-10 text-md cursor-pointer rounded-md px-6">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Segment Tabs */}
        <Section>
          <Tabs defaultValue="day" variant="segment">
            <TabsList>
              <TabsTrigger value="day">Web</TabsTrigger>
              <TabsTrigger value="week">Mobile</TabsTrigger>
            </TabsList>
          </Tabs>
        </Section>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div className="flex flex-col mr-5 gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </span>
      {children}
    </div>
  );
}
