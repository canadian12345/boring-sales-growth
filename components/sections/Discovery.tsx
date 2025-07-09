export default function Discovery() {
  return (
    <section id="discovery" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4">
            LET&apos;S SEE IF OUR SOULS ALIGN
          </h2>
          <p className="text-lg font-mono text-gray-600 uppercase">
            No sales pitch. Just two people who believe business has a soul.
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
                  <p className="font-bold font-mono text-black uppercase">What Makes You Special</p>
                  <p className="text-sm font-mono text-gray-700 mt-1">
                    The handshake moments we&apos;ll protect while amplifying your reach
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-white">2</span>
                </div>
                <div>
                  <p className="font-bold font-mono text-black uppercase">Your Soul&apos;s Health</p>
                  <p className="text-sm font-mono text-gray-700 mt-1">
                    Where admin is killing relationships and how we&apos;ll fix it without disruption
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-white">3</span>
                </div>
                <div>
                  <p className="font-bold font-mono text-black uppercase">A Handshake Deal</p>
                  <p className="text-sm font-mono text-gray-700 mt-1">
                    If we&apos;re kindred souls, we&apos;ll start small. If not, we&apos;ll stay friends
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-black text-white">
              <p className="text-sm font-mono">
                <strong>MY PROMISE:</strong> If I can&apos;t help you grow with soul intact, 
                I&apos;ll tell you straight. No BS, just truth.
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
            <div className="text-3xl font-black text-black mb-2">100%</div>
            <p className="text-sm font-mono text-gray-600 uppercase">Souls kept intact</p>
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
      </div>
    </section>
  );
}