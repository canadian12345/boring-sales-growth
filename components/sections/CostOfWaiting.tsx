export default function CostOfWaiting() {
  return (
    <section id="competitive-reality" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold uppercase tracking-tight text-black mb-4">
            THE 18-MONTH AI ADOPTION WINDOW
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white border-4 border-black p-8">
            <h3 className="text-xl font-mono font-bold uppercase text-black mb-6 text-center">WHERE WE ARE TODAY:</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-mono font-bold text-black mb-2">15%</p>
                <p className="text-sm font-mono uppercase text-black">OF B2B COMPANIES USE SALES AI</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-mono font-bold text-black mb-2">40%</p>
                <p className="text-sm font-mono uppercase text-black">AVERAGE GROWTH FOR EARLY ADOPTERS</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-mono font-bold text-black mb-2">18MO</p>
                <p className="text-sm font-mono uppercase text-black">UNTIL AI BECOMES TABLE STAKES</p>
              </div>
            </div>
            
            <div className="bg-gray-100 border-4 border-black p-6">
              <h4 className="font-mono font-bold uppercase text-black mb-4">THE OPPORTUNITY:</h4>
              <p className="font-mono uppercase text-black mb-4">
                RIGHT NOW, AI IS YOUR COMPETITIVE EDGE. IN 18 MONTHS, IT&apos;S MANDATORY. 
                THE QUESTION ISN&apos;T WHETHER TO ADOPT AI—IT&apos;S WHETHER YOU&apos;LL LEAD THE 
                CHANGE OR SCRAMBLE TO CATCH UP.
              </p>
              <p className="text-lg font-mono font-bold uppercase text-black">
                EVERY DAY YOU WAIT, SOMEONE ELSE DISCOVERS THEY CAN 3X THEIR CUSTOMER 
                TOUCHPOINTS WITHOUT 3X THE HEADCOUNT. WHY LET THEM HAVE THAT ADVANTAGE?
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border-4 border-black p-8">
            <h3 className="text-xl font-mono font-bold uppercase text-black mb-4">EARLY MOVERS GET:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-black text-xl">✓</span>
                <span className="font-mono uppercase text-black">FIRST PICK OF AI-SAVVY TALENT</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-black text-xl">✓</span>
                <span className="font-mono uppercase text-black">TIME TO PERFECT THEIR APPROACH</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-black text-xl">✓</span>
                <span className="font-mono uppercase text-black">CUSTOMERS WHO SEE THEM AS INNOVATIVE</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-black text-xl">✓</span>
                <span className="font-mono uppercase text-black">18 MONTHS OF COMPOUND ADVANTAGE</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-100 border-4 border-black p-8">
            <h3 className="text-xl font-mono font-bold uppercase text-black mb-4">LATE ADOPTERS GET:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-black text-xl">✗</span>
                <span className="font-mono uppercase text-black">WHATEVER TALENT IS LEFT</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-black text-xl">✗</span>
                <span className="font-mono uppercase text-black">RUSHED IMPLEMENTATIONS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-black text-xl">✗</span>
                <span className="font-mono uppercase text-black">CUSTOMERS ASKING &quot;WHAT TOOK SO LONG?&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-black text-xl">✗</span>
                <span className="font-mono uppercase text-black">AN EXPENSIVE GAME OF CATCH-UP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-black text-white p-8 max-w-2xl mx-auto">
            <p className="text-2xl font-mono font-bold uppercase mb-6">
              YOU&apos;RE NOT BEHIND. BUT THE WINDOW IS CLOSING.
            </p>
            
            <a href="#discovery" className="inline-flex items-center justify-center px-8 py-4 text-lg font-mono font-bold uppercase bg-white text-black border-4 border-white hover:bg-black hover:text-white hover:border-white transition-colors">
              LOCK IN YOUR ADVANTAGE
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <p className="text-sm font-mono uppercase mt-4">
              JOIN THE 15% WHO WILL TEACH THE 85% HOW IT&apos;S DONE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}