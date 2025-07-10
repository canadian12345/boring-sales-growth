export default function Hero() {
  return (
    <section className="relative bg-white py-8 sm:py-12 lg:pt-8 lg:pb-16 px-4 sm:px-6 lg:px-8">

      <div className="container">
        {/* Urgency banner */}
        <div className="bg-red-600 text-white p-3 mb-8 border-4 border-black">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-black uppercase text-sm sm:text-base">
              ⚡ WHILE YOU READ THIS, YOUR COMPETITORS ARE CLOSING AI-POWERED DEALS
            </p>
            <p className="font-mono text-xs sm:text-sm mt-1">
              3 companies in your industry started with us this month. Don&apos;t be #4 playing catch-up.
            </p>
          </div>
        </div>
        
        {/* Main hero block - clear value prop */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 leading-tight uppercase">
            FINALLY. AI THAT WORKS<br/>
            THE WAY YOU DO.
          </h1>
          
          <p className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 text-gray-700">
            MORE DEALS. LESS PAPERWORK. SAME VALUES.
          </p>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto">
            Most companies aren&apos;t ready for AI transformation<br className="hidden sm:inline"/>
            because they haven&apos;t even mastered consistent follow-up.<br className="hidden sm:inline"/>
            <span className="font-black">We fix the basics first, then amplify what works.</span><br className="hidden sm:inline"/>
            Because great isn&apos;t good enough if you&apos;re not even consistently good yet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#discovery" className="btn-primary text-sm sm:text-base lg:text-lg">
              SEE HOW IT WORKS FOR YOUR BUSINESS →
            </a>
            <a href="#case-studies" className="btn-secondary text-sm sm:text-base lg:text-lg">
              47% GROWTH IN 6 MONTHS - SEE PROOF
            </a>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-600 font-mono">
            No contracts. Cancel anytime. 100% money back in 6 months.
          </p>
        </div>

        {/* The immediate value prop */}
        <div className="border-t-4 border-black pt-16">
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border-4 border-black bg-white p-6">
              <h3 className="font-black text-lg mb-4">WHAT YOU GET</h3>
              <ul className="space-y-2 font-mono text-sm">
                <li>✓ 40% more deals closed</li>
                <li>✓ 65% less admin time</li>
                <li>✓ Same handshake culture</li>
                <li>✓ Zero new hires needed</li>
              </ul>
            </div>
            
            <div className="border-4 border-black bg-black text-white p-6">
              <h3 className="font-black text-lg mb-4">HOW IT WORKS</h3>
              <ul className="space-y-2 font-mono text-sm">
                <li>→ Week 1-2: We listen</li>
                <li>→ Week 3-4: We build</li>
                <li>→ Month 2: You grow</li>
                <li>→ Month 6: 40% more revenue</li>
              </ul>
            </div>
            
            <div className="border-4 border-black bg-yellow-100 p-6">
              <h3 className="font-black text-lg mb-4">THE GUARANTEE</h3>
              <p className="font-mono text-sm mb-2">
                40% growth in 6 months or your money back.
              </p>
              <p className="font-mono text-xs">
                No contracts. Cancel anytime. We only win when you win.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}