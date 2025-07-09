export default function Discovery() {
  return (
    <section id="discovery" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4">
            LET&apos;S SEE IF THIS MAKES SENSE
          </h2>
          <p className="text-lg font-mono text-gray-600 uppercase">
            No high-pressure sales tactics. Just an honest conversation.
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
                  <p className="font-bold font-mono text-black uppercase">Your Current Sales Process</p>
                  <p className="text-sm font-mono text-gray-700 mt-1">
                    What&apos;s working, what&apos;s not, and where AI could help without disrupting what works
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-white">2</span>
                </div>
                <div>
                  <p className="font-bold font-mono text-black uppercase">Your Competition</p>
                  <p className="text-sm font-mono text-gray-700 mt-1">
                    Who you&apos;re losing deals to and whether they&apos;re using AI (spoiler: they probably are)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-white">3</span>
                </div>
                <div>
                  <p className="font-bold font-mono text-black uppercase">Realistic Next Steps</p>
                  <p className="text-sm font-mono text-gray-700 mt-1">
                    If it makes sense, we&apos;ll outline a pilot program. If not, we&apos;ll tell you straight
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-black text-white">
              <p className="text-sm font-mono">
                <strong>OUR PROMISE:</strong> If we don&apos;t think we can deliver at least 3X ROI 
                within 90 days, we&apos;ll tell you not to hire us.
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
                SCHEDULE YOUR DISCOVERY CALL →
              </a>
              
              <p className="text-center text-sm font-mono text-gray-600">
                Opens in a new window. You&apos;ll see available times immediately.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="border-4 border-black p-6">
            <div className="text-3xl font-black text-black mb-2">20+</div>
            <p className="text-sm font-mono text-gray-600 uppercase">Years helping B2B grow</p>
          </div>
          <div className="border-4 border-black p-6">
            <div className="text-3xl font-black text-black mb-2">92%</div>
            <p className="text-sm font-mono text-gray-600 uppercase">Move forward after discovery</p>
          </div>
          <div className="border-4 border-black p-6">
            <div className="text-3xl font-black text-black mb-2">$0</div>
            <p className="text-sm font-mono text-gray-600 uppercase">Cost for this consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
}