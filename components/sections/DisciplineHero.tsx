export default function DisciplineHero() {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        {/* Urgency banner */}
        <div className="bg-black text-white p-4 mb-8 border-4 border-black">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-black uppercase text-sm sm:text-base">
              ⚠️ WHILE YOUR TEAM "REMEMBERS" TO FOLLOW UP, COMPETITORS EXECUTE 100% AUTOMATICALLY
            </p>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 uppercase leading-tight">
            Your 30-Year Veterans<br/>
            Know What Works.<br/>
            <span className="text-red-600">They Just Won't Do It.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-black mb-6 text-gray-700">
            THE DIFFERENCE BETWEEN GROWING AND DYING ISN'T STRATEGY.
          </p>
          <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto">
            It's execution. While your legacy team dismisses "another system," 
            competitors are using AI to guarantee the boring stuff that builds revenue 
            actually gets done.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white border-4 border-black p-8">
              <h3 className="font-black text-xl mb-6 uppercase">Your Reality</h3>
              <ul className="space-y-3 text-left font-mono">
                <li className="text-red-600 font-bold">✗ Sticky notes everywhere</li>
                <li className="text-red-600 font-bold">✗ "I'll remember to follow up"</li>
                <li className="text-red-600 font-bold">✗ Missed opportunities daily</li>
                <li className="text-red-600 font-bold">✗ No visibility into activities</li>
              </ul>
            </div>
            
            <div className="bg-black text-white border-4 border-black p-8">
              <h3 className="font-black text-xl mb-6 uppercase text-green-400">Their Advantage</h3>
              <ul className="space-y-3 text-left font-mono">
                <li className="font-bold">✓ Daily disciplines: 100% complete</li>
                <li className="font-bold">✓ Every follow-up automatic</li>
                <li className="font-bold">✓ Zero dropped balls</li>
                <li className="font-bold">✓ Full execution visibility</li>
              </ul>
            </div>
          </div>
          
          <div className="border-4 border-black bg-gray-100 p-12 mb-12">
            <p className="text-2xl sm:text-3xl font-black mb-8 uppercase text-center">
              Turn resistant teams into revenue machines
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-black text-xl mb-3 uppercase">Enforce What Works</h4>
                <p className="font-mono">AI ensures profitable actions happen daily</p>
              </div>
              <div className="text-center border-l-4 border-r-4 border-gray-400 px-4">
                <h4 className="font-black text-xl mb-3 uppercase">Preserve What Matters</h4>
                <p className="font-mono">Relationships stay human, tasks go automatic</p>
              </div>
              <div className="text-center">
                <h4 className="font-black text-xl mb-3 uppercase">See What's Hidden</h4>
                <p className="font-mono">Full visibility into what's actually happening</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#scorecard" className="btn-primary text-lg">
              AUDIT YOUR SALES DISCIPLINE →
            </a>
            <a href="#system" className="btn-secondary text-lg">
              SEE THE SYSTEM IN ACTION
            </a>
          </div>
          
          <p className="text-sm font-mono text-gray-600 mt-6">
            No contracts. 30-day pilot. ROI guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}