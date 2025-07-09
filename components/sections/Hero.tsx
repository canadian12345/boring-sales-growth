export default function Hero() {
  return (
    <section className="relative bg-white pt-8 pb-16 px-4 sm:px-6 lg:px-8">

      <div className="container">
        {/* Asymmetric grid - 8/4 instead of 7/5 */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-8">
            {/* The proof */}
            <div className="mb-8">
              <p className="text-sm font-mono text-gray-600 mb-2">MIDWEST MANUFACTURER:</p>
              <p className="text-6xl lg:text-7xl font-black tracking-tighter">$2.4M</p>
              <p className="text-lg font-medium mt-2">40% revenue growth. Zero culture change.</p>
            </div>
            
            <h1 className="text-black mb-6">
              Your Competitors Are Using AI.<br/>
              You&apos;re Losing Deals.
              <span className="block mt-2">We Fix That. Quietly.</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-12 max-w-2xl">
              Traditional B2B companies come to us when they&apos;re tired of losing to AI-powered competitors. 
              We help them grow 40% by handling the repetitive work that&apos;s killing their sales momentum. 
              No disruption. No drama. Just results.
            </p>
            
            {/* The simple truth */}
            <div className="bg-gray-50 border border-black p-6 mb-12 font-mono text-sm">
              <pre className="overflow-x-auto">
{`YOUR TEAM NOW              AI HANDLES              THEY GET BACK
━━━━━━━━━━━━━             ━━━━━━━━━━━             ━━━━━━━━━━━━
3hrs/day on admin    →    Follow-ups         →    3hrs for selling
15 touchpoints       →    CRM updates        →    Real conversations  
50% lead response    →    Scheduling         →    95% response rate`}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#discovery" className="btn-primary">
                SEE IF YOU QUALIFY →
              </a>
              <a href="#roi" className="btn-secondary">
                CALCULATE YOUR GROWTH
              </a>
            </div>
            
            <p className="text-sm text-gray-600 mt-8 font-mono">
              * Average client: 40% growth in 12 months
              * Your team stays the same, just more effective
              * Month-to-month. Cancel anytime.
            </p>
          </div>
          
          <div className="lg:col-span-4">
            {/* The truth about AI */}
            <div className="border-2 border-black bg-white p-6">
              <h4 className="font-black text-lg mb-6">THE BORING TRUTH</h4>
              
              <div className="mb-6">
                <div className="bg-black text-white p-3 mb-3">
                  <h5 className="font-bold text-sm">AI DOES THE BORING:</h5>
                </div>
                <ul className="space-y-1 text-sm font-mono pl-4">
                  <li>→ Data entry nobody wants to do</li>
                  <li>→ Follow-ups that slip through cracks</li>
                  <li>→ Reports that waste Friday afternoons</li>
                  <li>→ Scheduling that takes 12 emails</li>
                  <li>→ Everything that isn&apos;t selling</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="border-2 border-black p-3 mb-3">
                  <h5 className="font-bold text-sm">HUMANS DO THE HUMAN:</h5>
                </div>
                <ul className="space-y-1 text-sm font-mono pl-4">
                  <li>→ Understanding customer problems</li>
                  <li>→ Building trust over time</li>
                  <li>→ Negotiating complex deals</li>
                  <li>→ Reading between the lines</li>
                  <li>→ Actually closing business</li>
                </ul>
              </div>
              
              <div className="bg-black text-white p-4 text-center">
                <p className="font-black">RESULT: 40% GROWTH</p>
              </div>
            </div>

            {/* Simple proof */}
            <div className="mt-8 text-center">
              <p className="text-sm font-bold uppercase">200+ B2B COMPANIES</p>
              <p className="text-xs font-mono uppercase mt-1">BORING GROWTH SINCE 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}