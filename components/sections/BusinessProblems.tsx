export default function BusinessProblems() {
  return (
    <section id="problems" className="section-padding bg-white border-t-4 border-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16">
          <h2 className="text-black mb-4">
            THE AI INDUSTRY WANTS TO &apos;FIX&apos; WHAT MADE YOU SUCCESSFUL
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-mono uppercase">
            EVERY CONSULTANT PROMISES TO TRANSFORM YOUR BUSINESS.<br className="hidden sm:inline"/>
            BUT YOUR RELATIONSHIPS AREN&apos;T BROKEN. YOUR CULTURE ISN&apos;T OUTDATED.<br className="hidden sm:inline"/>
            THE PRESSURE TO AUTOMATE EVERYTHING? THAT&apos;S THE REAL PROBLEM.
          </p>
        </div>
        
        {/* The pressure points */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16">
          <div className="border-4 border-black p-4 sm:p-6 lg:p-8 bg-gray-100">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-4 uppercase">THE PRESSURE IS EVERYWHERE:</h3>
            <ul className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>&quot;You need to automate your entire sales process&quot;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>&quot;Optimize all customer interactions with AI&quot;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>&quot;Transform your business or become obsolete&quot;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>&quot;Everyone else is doing it—you&apos;re falling behind&quot;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>&quot;Personal relationships don&apos;t scale anymore&quot;</span>
              </li>
            </ul>
          </div>
          
          <div className="border-4 border-black p-4 sm:p-6 lg:p-8 bg-white">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-4 uppercase">THE REAL RISKS:</h3>
            <ul className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
              <li className="flex items-start">
                <span className="mr-2">✗</span>
                <span>Lose the personal touch that built this business</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✗</span>
                <span>Become just another vendor in a crowded market</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✗</span>
                <span>Watch your best people leave for meaningful work</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✗</span>
                <span>Sacrifice competitive advantage for efficiency</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✗</span>
                <span>Lose the culture that made you who you are</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The hidden truth */}
        <div className="bg-black text-white p-6 sm:p-8 lg:p-12 mb-8 sm:mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 sm:mb-6">YOUR INSTINCT TO RESIST IS RIGHT</h3>
            <p className="text-sm sm:text-base lg:text-lg font-mono mb-4 sm:mb-8">
              THE RELATIONSHIPS THAT BUILT YOUR SUCCESS AREN&apos;T PROBLEMS TO BE SOLVED.<br className="hidden sm:inline"/>
              THEY&apos;RE ADVANTAGES TO BE PRESERVED.
            </p>
            <p className="text-xs sm:text-sm font-mono uppercase">
              THE REAL RISK ISN&apos;T FALLING BEHIND.<br className="hidden sm:inline"/>
              IT&apos;S LOSING WHAT MADE YOU SPECIAL IN THE FIRST PLACE.
            </p>
          </div>
        </div>

        {/* What they're not telling you */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="border-2 border-black p-4 sm:p-6">
            <h4 className="font-black mb-2 sm:mb-3 uppercase text-sm sm:text-base">THEY WON&apos;T TELL YOU:</h4>
            <p className="text-xs sm:text-sm font-mono">
              Most companies that &quot;transform&quot; with AI lose what made customers choose them. 
              They become efficient but forgettable.
            </p>
          </div>
          <div className="border-2 border-black p-4 sm:p-6">
            <h4 className="font-black mb-2 sm:mb-3 uppercase text-sm sm:text-base">THEY WON&apos;T ADMIT:</h4>
            <p className="text-xs sm:text-sm font-mono">
              The best performing B2B companies still win on relationships. 
              They just automate the right things.
            </p>
          </div>
          <div className="border-2 border-black p-4 sm:p-6 sm:col-span-2 md:col-span-1">
            <h4 className="font-black mb-2 sm:mb-3 uppercase text-sm sm:text-base">THEY WON&apos;T DISCUSS:</h4>
            <p className="text-xs sm:text-sm font-mono">
              Your culture and relationships are competitive moats. 
              Once automated away, competitors can&apos;t copy them.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-16">
          <p className="text-base sm:text-lg font-mono mb-4 sm:mb-6 uppercase">
            YOU DON&apos;T NEED TRANSFORMATION. YOU NEED PRESERVATION.
          </p>
          <a href="#guide" className="btn-primary text-sm sm:text-base">
            SEE A BETTER WAY →
          </a>
        </div>
      </div>
    </section>
  );
}