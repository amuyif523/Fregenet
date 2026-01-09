import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { StoryScroll } from "@/components/sections/StoryScroll";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <Hero />
      <StoryScroll />
      <ImpactStats />
    </div>
  );
}
