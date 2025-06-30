import Hero from "@/components/sections/Hero";
import BusinessProblems from "@/components/sections/BusinessProblems";
import ExecutiveSolutions from "@/components/sections/ExecutiveSolutions";
import ROICalculator from "@/components/sections/ROICalculator";
import RiskMitigation from "@/components/sections/RiskMitigation";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <BusinessProblems />
      <ExecutiveSolutions />
      <ROICalculator />
      <RiskMitigation />
      <FinalCTA />
    </main>
  );
}