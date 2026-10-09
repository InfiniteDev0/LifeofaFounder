import ProfileHeader from "@/components/sections/profile-header";
import ProjectsShowcase from "@/components/sections/projects-showcase";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ProfileHeader />
      <ProjectsShowcase />
    </main>
  );
}
