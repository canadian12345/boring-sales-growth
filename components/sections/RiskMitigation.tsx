export default function RiskMitigation() {
  const risks = [
    {
      concern: "WHAT IF WE LOSE OUR SOUL IN THE PROCESS?",
      mitigation: "AI NEVER TOUCHES YOUR HANDSHAKE MOMENTS. IT HANDLES SPREADSHEETS WHILE YOU HANDLE SOULS. YOUR PERSONAL TOUCH STAYS PERSONAL, JUST REACHES MORE PEOPLE.",
      icon: "01"
    },
    {
      concern: "WILL THIS CHANGE WHO WE ARE?",
      mitigation: "ZERO DISRUPTION TO YOUR CULTURE. WE ADD TOOLS THAT FIT YOUR WAY, NOT FORCE NEW WAYS. BORING IMPLEMENTATION FOR BORING GROWTH.",
      icon: "02"
    },
    {
      concern: "WHAT IF OUR OLD-SCHOOL TEAM REJECTS IT?",
      mitigation: "THEY WON'T. BECAUSE WE'RE GIVING THEM BACK WHAT THEY JOINED FOR - TIME WITH PEOPLE. EVEN YOUR 67-YEAR-OLD REP WILL LOVE MORE COFFEE MEETINGS.",
      icon: "03"
    },
    {
      concern: "WHAT IF BORING GROWTH ISN&apos;T ENOUGH?",
      mitigation: "BORING GROWTH COMPOUNDS. WHILE OTHERS DISRUPT AND FAIL, YOU'LL GROW STEADILY WITH SOUL INTACT. THAT'S HOW GENERATIONAL BUSINESSES ARE BUILT.",
      icon: "04"
    }
  ];

  return (
    <section id="risk" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold uppercase tracking-tight text-black">
            PROTECTING WHAT MATTERS MOST: YOUR SOUL
          </h2>
          <p className="mt-4 text-xl font-mono uppercase text-black max-w-3xl mx-auto">
            EVERY FEAR IS VALID. HERE&apos;S HOW WE KEEP YOUR SOUL INTACT.
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
            MY SOUL-KEEPING PROMISE
          </h3>
          <p className="text-lg font-mono uppercase mb-6">
            IF YOU LOSE EVEN A PIECE OF YOUR SOUL, I&apos;VE FAILED.
            <br />
            GROWTH WITHOUT SOUL ISN&apos;T GROWTH - IT&apos;S DEATH BY A THOUSAND CUTS.
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