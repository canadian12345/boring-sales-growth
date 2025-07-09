export default function Hero() {
  return (
    <section className="relative bg-white pt-8 pb-16 px-4 sm:px-6 lg:px-8">

      <div className="container">
        {/* Asymmetric grid - 8/4 instead of 7/5 */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-8">
            {/* The holy shit number */}
            <div className="mb-8">
              <p className="text-sm font-mono text-gray-600 mb-2">ACTUAL CLIENT RESULT:</p>
              <p className="text-6xl lg:text-7xl font-black tracking-tighter">$2.4M</p>
              <p className="text-lg font-medium mt-2">Additional revenue from 3 hours saved daily</p>
            </div>
            
            <h1 className="text-black mb-6">
              Stop Choosing Between<br/>
              Relationships and Efficiency.
              <span className="block mt-2">Have Both.</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-12 max-w-2xl">
              Every AI vendor wants to &quot;transform&quot; your sales process. We just want to give your 
              team their time back. No buzzwords. No disruption. Just 40% growth.
            </p>
            
            {/* ASCII-style diagram */}
            <div className="bg-gray-50 border border-black p-6 mb-12 font-mono text-sm">
              <pre className="overflow-x-auto">
{`CURRENT STATE              AI HANDLES              YOU GET BACK
━━━━━━━━━━━━━             ━━━━━━━━━━━             ━━━━━━━━━━━━
65% admin work     →      Follow-ups       →      3 hours/day
15 touches/deal    →      CRM updates      →      for selling
50% response rate  →      Scheduling       →      40% growth`}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#roi" className="btn-primary">
                CALCULATE YOUR ROI →
              </a>
              <a href="#solutions" className="btn-secondary">
                SEE HOW IT WORKS
              </a>
            </div>
            
            <p className="text-sm text-gray-600 mt-8 font-mono">
              * AI that amplifies what already works
              * 90 days to measurable results
              * No contracts, cancel anytime
            </p>
          </div>
          
          <div className="lg:col-span-4">
            {/* Stark black and white design */}
            <div className="border-2 border-black bg-white p-6">
              <h4 className="font-black text-lg mb-6">THE DIVISION OF LABOR</h4>
              
              <div className="mb-6">
                <div className="bg-black text-white p-3 mb-3">
                  <h5 className="font-bold text-sm mb-2">ROBOTS DO:</h5>
                </div>
                <ul className="space-y-1 text-sm font-mono pl-4">
                  <li>→ Follow-up sequences</li>
                  <li>→ CRM data entry</li>
                  <li>→ Meeting scheduling</li>
                  <li>→ Lead scoring</li>
                  <li>→ First drafts</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="border-2 border-black p-3 mb-3">
                  <h5 className="font-bold text-sm mb-2">HUMANS DO:</h5>
                </div>
                <ul className="space-y-1 text-sm font-mono pl-4">
                  <li>→ Listen & understand</li>
                  <li>→ Build trust</li>
                  <li>→ Read the room</li>
                  <li>→ Solve problems</li>
                  <li>→ Close deals</li>
                </ul>
              </div>
              
              <div className="bg-black text-white p-4 text-center">
                <p className="font-black">RESULT: 40% GROWTH</p>
              </div>
            </div>

            {/* Hand-drawn element */}
            <div className="mt-8 text-center">
              <svg width="200" height="60" className="inline-block">
                <path d="M 10 30 Q 50 10 100 30 T 190 30" 
                      stroke="black" 
                      strokeWidth="3" 
                      fill="none"
                      strokeDasharray="5,5"/>
                <text x="100" y="50" textAnchor="middle" className="font-bold text-sm">IT ACTUALLY WORKS</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}