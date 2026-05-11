import Image from "next/image";
import Hero from "./components/hero";
import MyStartUp from "./components/mystartup";
import MyWork from "./components/mywork";
import MyContent from "./components/mycontent";

export default function Home() {
  return (
    <div className="pt-25">
      <Hero />
      <MyStartUp />
      <MyWork />
      <MyContent/>
    </div>
  );
}
