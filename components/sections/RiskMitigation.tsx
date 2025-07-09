export default function RiskMitigation() {
  const risks = [
    {
      concern: "WHAT IF IT DISRUPTS OUR EXISTING RELATIONSHIPS?",
      mitigation: "AI WORKS BEHIND THE SCENES. YOUR TEAM MAINTAINS FULL CONTROL OF ALL CUSTOMER INTERACTIONS. WE ENHANCE, NEVER REPLACE, THE HUMAN TOUCH.",
      icon: "01"
    },
    {
      concern: "HOW DO WE IMPLEMENT WITHOUT DISRUPTING OPERATIONS?",
      mitigation: "GRADUAL ROLLOUT STARTING WITH ONE TEAM. PROVE RESULTS, THEN SCALE. NO 'BIG BANG' IMPLEMENTATIONS THAT RISK YOUR BUSINESS.",
      icon: "02"
    },
    {
      concern: "WILL OUR SALES TEAM RESIST THE CHANGE?",
      mitigation: "WE MAKE THEIR JOBS EASIER, NOT HARDER. LESS ADMIN WORK, MORE SELLING. TEAMS TYPICALLY ADOPT WITHIN 2 WEEKS WHEN THEY SEE THE BENEFITS.",
      icon: "03"
    },
    {
      concern: "WHAT IF IT DOESN'T WORK FOR OUR INDUSTRY?",
      mitigation: "30-DAY PILOT PROGRAM WITH SUCCESS METRICS DEFINED UPFRONT. IF WE DON'T HIT THE TARGETS, YOU DON'T PAY. ZERO RISK TO TRY.",
      icon: "04"
    }
  ];

  return (
    <section id="risk" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold uppercase tracking-tight text-black">
            ADDRESSING YOUR CONCERNS HEAD-ON
          </h2>
          <p className="mt-4 text-xl font-mono uppercase text-black max-w-3xl mx-auto">
            WE KNOW CHANGE IS RISKY. HERE'S HOW WE PROTECT YOUR BUSINESS.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {risks.map((risk, index) => (
            <div key={index} className="bg-gray-100 border-4 border-black p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-mono font-bold flex-shrink-0 bg-black text-white w-16 h-16 flex items-center justify-center">{risk.icon}</div>
                <div>
                  <h3 className="text-lg font-mono font-bold uppercase text-black mb-2">{risk.concern}</h3>
                  <p className="font-mono uppercase text-black text-sm">{risk.mitigation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-black text-white p-8 text-center">
          <h3 className="text-2xl font-mono font-bold uppercase mb-4">
            OUR GUARANTEE
          </h3>
          <p className="text-lg font-mono uppercase mb-6">
            IF WE DON'T DELIVER MEASURABLE RESULTS IN 90 DAYS, WE'LL WORK FOR FREE UNTIL WE DO.
            <br />
            THAT'S HOW CONFIDENT WE ARE IN THIS APPROACH.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-left">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-mono uppercase">NO LONG-TERM CONTRACTS</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-mono uppercase">CANCEL ANYTIME</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-mono uppercase">YOUR DATA STAYS YOURS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}