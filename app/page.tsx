import Hero from "@/components/sections/Hero";
import BusinessProblems from "@/components/sections/BusinessProblems";
import ExecutiveSolutions from "@/components/sections/ExecutiveSolutions";
import Testimonials from "@/components/sections/Testimonials";
import CostOfWaiting from "@/components/sections/CostOfWaiting";
import ROICalculator from "@/components/sections/ROICalculator";
import SimpleGuarantee from "@/components/sections/SimpleGuarantee";
import Discovery from "@/components/sections/Discovery";
import AboutNoah from "@/components/sections/AboutNoah";
import RiskMitigation from "@/components/sections/RiskMitigation";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <BusinessProblems />
      <ExecutiveSolutions />
      <Testimonials />
      <CostOfWaiting />
      <ROICalculator />
      <SimpleGuarantee />
      <Discovery />
      <AboutNoah />
      <RiskMitigation />
      <FinalCTA />
    </main>
  );
}