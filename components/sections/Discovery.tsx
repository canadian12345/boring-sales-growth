export default function Discovery() {
  return (
    <section id="discovery" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4">
            LET&apos;S TALK GROWTH
          </h2>
          <p className="text-lg font-mono text-gray-600 uppercase">
            30 minutes. Your challenges. Real solutions. No BS.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 border-4 border-black p-8">
            <h3 className="text-xl font-black uppercase text-black mb-6">WHAT WE&apos;LL DISCUSS</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-white">1</span>
                </div>
                <div>
                  <p className="font-bold font-mono text-black uppercase">Your Growth Blockers</p>
                  <p className="text-sm font-mono text-gray-700 mt-1">
                    What&apos;s stopping you from closing 40% more deals
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-white">2</span>
                </div>
                <div>
                  <p className="font-bold font-mono text-black uppercase">Quick Wins Available</p>
                  <p className="text-sm font-mono text-gray-700 mt-1">
                    Immediate improvements we can make in week one
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-white">3</span>
                </div>
                <div>
                  <p className="font-bold font-mono text-black uppercase">Your Custom Roadmap</p>
                  <p className="text-sm font-mono text-gray-700 mt-1">
                    Exactly how to get 40% growth in your specific situation
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-black text-white">
              <p className="text-sm font-mono">
                <strong>MY PROMISE:</strong> If I can&apos;t show you a clear path to 40% growth 
                in 30 minutes, I&apos;ll tell you straight. No BS.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-100 border-4 border-black p-8">
            <h3 className="text-xl font-black uppercase text-black mb-6">SCHEDULE YOUR CALL</h3>
            
            <div className="space-y-4 mb-8">
              <p className="font-mono text-black">
                <strong>WITH:</strong> Noah Fleming, Founder
              </p>
              <p className="font-mono text-black">
                <strong>DURATION:</strong> 30 minutes
              </p>
              <p className="font-mono text-black">
                <strong>FORMAT:</strong> Video call (or phone if you prefer)
              </p>
            </div>
            
            {/* Book a Call Button */}
            <div className="space-y-4">
              <a
                href="https://tidycal.com/noah3/boring-sales-growth"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-4 bg-black text-white font-bold font-mono uppercase hover:bg-gray-900 transition-colors"
              >
                CLAIM YOUR GROWTH ASSESSMENT (5 SPOTS LEFT) →
              </a>
              
              <p className="text-center text-sm font-mono text-gray-600">
                Opens in a new window. You&apos;ll see available times immediately.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="border-4 border-black p-6">
            <div className="text-3xl font-black text-black mb-2">100%</div>
            <p className="text-sm font-mono text-gray-600 uppercase">Cultures preserved</p>
          </div>
          <div className="border-4 border-black p-6">
            <div className="text-3xl font-black text-black mb-2">0</div>
            <p className="text-sm font-mono text-gray-600 uppercase">Forced transformations</p>
          </div>
          <div className="border-4 border-black p-6">
            <div className="text-3xl font-black text-black mb-2">∞</div>
            <p className="text-sm font-mono text-gray-600 uppercase">Handshakes preserved</p>
          </div>
        </div>
        
        <div className="mt-12 text-center border-4 border-black bg-gray-100 p-8">
          <div className="bg-red-600 text-white p-2 mb-4 font-mono uppercase text-sm">
            ⚡ MARKET SHIFT: AI adoption in traditional B2B accelerating 400% YoY
          </div>
          <p className="text-lg font-black uppercase mb-4">LIMITED AVAILABILITY: Q3 2025</p>
          <p className="text-sm font-mono mb-2">I work with 5 companies at a time. 2 spots filled this quarter.</p>
          <p className="text-xs font-mono mb-6 text-gray-700">
            Your competitors are booking calls. The first movers in each industry are winning.
          </p>
          <a
            href="https://tidycal.com/noah3/boring-sales-growth"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm sm:text-base"
          >
            RESERVE YOUR SPOT BEFORE THEY&apos;RE GONE →
          </a>
        </div>
      </div>
    </section>
  );
}