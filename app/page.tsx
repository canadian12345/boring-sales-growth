import Hero from "@/components/sections/Hero";
import BusinessProblems from "@/components/sections/BusinessProblems";
import ExecutiveSolutions from "@/components/sections/ExecutiveSolutions";
import CaseStudies from "@/components/sections/CaseStudies";
import ROICalculator from "@/components/sections/ROICalculator";
import AboutNoah from "@/components/sections/AboutNoah";
import RiskMitigation from "@/components/sections/RiskMitigation";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <BusinessProblems />
      <ExecutiveSolutions />
      <CaseStudies />
      <ROICalculator />
      <AboutNoah />
      <RiskMitigation />
      <FinalCTA />
    </main>
  );
}