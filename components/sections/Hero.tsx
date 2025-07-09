export default function Hero() {
  return (
    <section className="relative bg-white py-8 sm:py-12 lg:pt-8 lg:pb-16 px-4 sm:px-6 lg:px-8">

      <div className="container">
        {/* Asymmetric grid - 8/4 instead of 7/5 */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-8">
            {/* The validation */}
            <div className="mb-8">
              <p className="text-xs sm:text-sm font-mono text-gray-600 mb-2">MIDWEST DISTRIBUTOR WHO KEPT THEIR CULTURE:</p>
              <p className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter">47% Growth</p>
              <p className="text-base sm:text-lg font-medium mt-2">Without losing a single family business value.</p>
            </div>
            
            <h1 className="text-black mb-6">
              Your Culture Built This Business.<br/>
              Don&apos;t Let AI Destroy It.
              <span className="block mt-2">Grow Revenue. Keep Your Soul.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 max-w-2xl">
              You&apos;re feeling pressure to automate everything. Everyone says you&apos;re behind if you don&apos;t. 
              But something feels wrong about losing the relationships that built your business. 
              That instinct is correct.
            </p>
            
            {/* The promise */}
            <div className="bg-gray-50 border border-black p-4 sm:p-6 mb-8 sm:mb-12 font-mono text-xs sm:text-sm">
              <p className="font-bold uppercase mb-4">YOU CAN HAVE BOTH:</p>
              <div className="space-y-2">
                <p>✓ Keep the personal touch that wins deals</p>
                <p>✓ Preserve the culture your team loves</p>
                <p>✓ Maintain relationships that built your reputation</p>
                <p>✓ AND grow 40%+ by automating only the right things</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#guide" className="btn-primary text-sm sm:text-base">
                SEE HOW TO PROTECT YOUR CULTURE →
              </a>
              <a href="#success" className="btn-secondary text-sm sm:text-base">
                COMPANIES THAT KEPT THEIR SOUL
              </a>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-600 mt-6 sm:mt-8 font-mono">
              * For 20 years, we&apos;ve helped relationship-driven companies
              * Resist pressure to automate their identity away
              * Your culture isn&apos;t the problem—it&apos;s the solution
            </p>
          </div>
          
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            {/* The choice */}
            <div className="border-2 border-black bg-white p-4 sm:p-6">
              <h4 className="font-black text-lg mb-6">THE PRESSURE IS REAL</h4>
              
              <div className="mb-6">
                <div className="bg-black text-white p-3 mb-3">
                  <h5 className="font-bold text-xs sm:text-sm">WHAT THEY&apos;RE TELLING YOU:</h5>
                </div>
                <ul className="space-y-1 text-xs sm:text-sm font-mono pl-4">
                  <li>→ &quot;Automate your sales process&quot;</li>
                  <li>→ &quot;Optimize customer interactions&quot;</li>
                  <li>→ &quot;Transform or fall behind&quot;</li>
                  <li>→ &quot;Everyone else is doing it&quot;</li>
                  <li>→ &quot;Relationships don&apos;t scale&quot;</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="border-2 border-black p-3 mb-3">
                  <h5 className="font-bold text-xs sm:text-sm">WHAT WE KNOW:</h5>
                </div>
                <ul className="space-y-1 text-xs sm:text-sm font-mono pl-4">
                  <li>→ Your culture IS your advantage</li>
                  <li>→ Relationships DO scale—differently</li>
                  <li>→ The right automation enhances culture</li>
                  <li>→ Wrong automation kills what&apos;s special</li>
                  <li>→ You can grow without changing</li>
                </ul>
              </div>
              
              <div className="bg-black text-white p-4 text-center">
                <p className="font-black">CULTURE FIRST. ALWAYS.</p>
              </div>
            </div>

            {/* The warning */}
            <div className="mt-8 border border-black p-4">
              <p className="text-xs font-bold uppercase">WARNING:</p>
              <p className="text-xs font-mono uppercase mt-1 break-words">ONCE YOU AUTOMATE AWAY YOUR CULTURE, YOU CAN&apos;T GET IT BACK</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}