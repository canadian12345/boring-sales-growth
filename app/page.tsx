import DisciplineHero from "@/components/sections/DisciplineHero";
import ExecutionCrisis from "@/components/sections/ExecutionCrisis";
import CompoundGrowthSystem from "@/components/sections/CompoundGrowthSystem";
import DisciplineScorecard from "@/components/sections/DisciplineScorecard";
import TransformationStory from "@/components/sections/TransformationStory";
import NextMove from "@/components/sections/NextMove";

export default function Home() {
  return (
    <main className="min-h-screen">
      <DisciplineHero />
      <ExecutionCrisis />
      <CompoundGrowthSystem />
      <DisciplineScorecard />
      <TransformationStory />
      <NextMove />
    </main>
  );
}