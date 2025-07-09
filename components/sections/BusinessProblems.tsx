export default function BusinessProblems() {
  return (
    <section id="problems" className="section-padding bg-white border-t-4 border-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-black mb-4">
            THE AI INDUSTRY WANTS TO &apos;FIX&apos; WHAT MADE YOU SUCCESSFUL
          </h2>
          <p className="text-xl font-mono uppercase">
            EVERY CONSULTANT PROMISES TO TRANSFORM YOUR BUSINESS.<br/>
            BUT YOUR RELATIONSHIPS AREN&apos;T BROKEN. YOUR CULTURE ISN&apos;T OUTDATED.<br/>
            THE PRESSURE TO AUTOMATE EVERYTHING? THAT&apos;S THE REAL PROBLEM.
          </p>
        </div>
        
        {/* The pressure points */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border-4 border-black p-8 bg-gray-100">
            <h3 className="text-2xl font-black mb-4 uppercase">THE PRESSURE IS EVERYWHERE:</h3>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>"You need to automate your entire sales process"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>"Optimize all customer interactions with AI"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>"Transform your business or become obsolete"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>"Everyone else is doing it—you&apos;re falling behind"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>"Personal relationships don&apos;t scale anymore"</span>
              </li>
            </ul>
          </div>
          
          <div className="border-4 border-black p-8 bg-white">
            <h3 className="text-2xl font-black mb-4 uppercase">THE REAL RISKS:</h3>
            <ul className="space-y-3 font-mono text-sm">
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
        <div className="bg-black text-white p-12 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">YOUR INSTINCT TO RESIST IS RIGHT</h3>
            <p className="text-lg font-mono mb-8">
              THE RELATIONSHIPS THAT BUILT YOUR SUCCESS AREN&apos;T PROBLEMS TO BE SOLVED.<br/>
              THEY&apos;RE ADVANTAGES TO BE PRESERVED.
            </p>
            <p className="text-sm font-mono uppercase">
              THE REAL RISK ISN&apos;T FALLING BEHIND.<br/>
              IT&apos;S LOSING WHAT MADE YOU SPECIAL IN THE FIRST PLACE.
            </p>
          </div>
        </div>

        {/* What they're not telling you */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-black p-6">
            <h4 className="font-black mb-3 uppercase">THEY WON&apos;T TELL YOU:</h4>
            <p className="text-sm font-mono">
              Most companies that "transform" with AI lose what made customers choose them. 
              They become efficient but forgettable.
            </p>
          </div>
          <div className="border-2 border-black p-6">
            <h4 className="font-black mb-3 uppercase">THEY WON&apos;T ADMIT:</h4>
            <p className="text-sm font-mono">
              The best performing B2B companies still win on relationships. 
              They just automate the right things.
            </p>
          </div>
          <div className="border-2 border-black p-6">
            <h4 className="font-black mb-3 uppercase">THEY WON&apos;T DISCUSS:</h4>
            <p className="text-sm font-mono">
              Your culture and relationships are competitive moats. 
              Once automated away, competitors can&apos;t copy them.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg font-mono mb-6 uppercase">
            YOU DON&apos;T NEED TRANSFORMATION. YOU NEED PRESERVATION.
          </p>
          <a href="#guide" className="btn-primary">
            SEE A BETTER WAY →
          </a>
        </div>
      </div>
    </section>
  );
}