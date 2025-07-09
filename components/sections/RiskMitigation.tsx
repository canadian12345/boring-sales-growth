export default function RiskMitigation() {
  const risks = [
    {
      concern: "WHAT IF WE LOSE OUR CULTURE IN THE PROCESS?",
      mitigation: "WE START BY UNDERSTANDING WHAT YOUR CULTURE MEANS TO YOU. THEN WE BUILD SOLUTIONS THAT ENHANCE IT, NOT REPLACE IT. YOUR INPUT GUIDES EVERY DECISION.",
      icon: "01"
    },
    {
      concern: "WILL THIS CHANGE WHO WE ARE?",
      mitigation: "THAT'S WHY WE DISCOVER FIRST. WE LEARN WHO YOU ARE, WHAT MATTERS TO YOU, AND BUILD AROUND THAT. CHANGE ONLY WHAT YOU WANT TO CHANGE.",
      icon: "02"
    },
    {
      concern: "WHAT IF OUR OLD-SCHOOL TEAM REJECTS IT?",
      mitigation: "WE INVOLVE YOUR TEAM FROM DAY ONE. THEIR INPUT SHAPES THE SOLUTION. WHEN THEY HELP BUILD IT, THEY'LL EMBRACE IT. IT'S THEIR TOOL, NOT OURS.",
      icon: "03"
    },
    {
      concern: "WHAT IF THE GROWTH ISN&apos;T WHAT WE NEED?",
      mitigation: "WE'LL DISCOVER WHAT GROWTH MEANS TO YOU. THEN BUILD TOWARD YOUR SPECIFIC GOALS. SUCCESS IS MEASURED BY YOUR STANDARDS, NOT INDUSTRY BENCHMARKS.",
      icon: "04"
    }
  ];

  return (
    <section id="risk" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold uppercase tracking-tight text-black">
            WE START BY UNDERSTANDING YOUR CONCERNS
          </h2>
          <p className="mt-4 text-xl font-mono uppercase text-black max-w-3xl mx-auto">
            EVERY BUSINESS HAS UNIQUE RISKS. WE DISCOVER AND ADDRESS YOURS.
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
            OUR DISCOVERY-FIRST PROMISE
          </h3>
          <p className="text-lg font-mono uppercase mb-6">
            WE DON&apos;T KNOW YOUR BUSINESS YET. THAT&apos;S THE POINT.
            <br />
            WE DISCOVER, YOU DECIDE, TOGETHER WE BUILD.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-left">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-mono uppercase">START WITH DISCOVERY</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-mono uppercase">YOUR PACE, YOUR TERMS</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-mono uppercase">CUSTOM TO YOUR NEEDS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}