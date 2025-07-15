import DisciplineHero from "@/components/sections/DisciplineHero";
import ControversyBomb from "@/components/sections/ControversyBomb";
import ExecutionCrisis from "@/components/sections/ExecutionCrisis";
import CompoundGrowthSystem from "@/components/sections/CompoundGrowthSystem";
import DisciplineScorecard from "@/components/sections/DisciplineScorecard";
import TransformationStory from "@/components/sections/TransformationStory";
import Credibility from "@/components/sections/Credibility";
import ControversyBomb3 from "@/components/sections/ControversyBomb3";
import NextMove from "@/components/sections/NextMove";

export default function Home() {
  return (
    <main className="min-h-screen">
      <DisciplineHero />
      <ControversyBomb />
      <ExecutionCrisis />
      <CompoundGrowthSystem />
      <DisciplineScorecard />
      <TransformationStory />
      <Credibility />
      <ControversyBomb3 />
      <NextMove />
    </main>
  );
}