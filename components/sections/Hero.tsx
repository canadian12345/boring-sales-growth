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
              <p className="text-lg font-medium mt-2">Without losing a single handshake deal</p>
            </div>
            
            <h1 className="text-black mb-6">
              Keep Your Relationships.<br/>
              Amplify Your Results.
              <span className="block mt-2">Grow Without Losing Your Soul.</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-12 max-w-2xl">
              Your handshake deals still matter. The trust you&apos;ve built is sacred. We don&apos;t transform 
              relationship-driven businesses—we amplify them. 40% growth while staying 100% you.
            </p>
            
            {/* ASCII-style diagram */}
            <div className="bg-gray-50 border border-black p-6 mb-12 font-mono text-sm">
              <pre className="overflow-x-auto">
{`BEFORE                     AI HANDLES              RESULT
━━━━━━━━━━━━━             ━━━━━━━━━━━             ━━━━━━━━━━━━
Relationships dying   →    Admin busywork    →    Deeper connections
Personal touch lost   →    Data entry        →    More conversations  
Trust declining       →    Follow-up tasks   →    Soul preserved`}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#discovery" className="btn-primary">
                PRESERVE YOUR PERSONAL TOUCH →
              </a>
              <a href="#testimonials" className="btn-secondary">
                SEE WHO KEPT THEIR SOUL
              </a>
            </div>
            
            <p className="text-sm text-gray-600 mt-8 font-mono">
              * Your values stay intact
              * Relationships get stronger, not automated
              * Boring growth that actually lasts
            </p>
          </div>
          
          <div className="lg:col-span-4">
            {/* Stark black and white design */}
            <div className="border-2 border-black bg-white p-6">
              <h4 className="font-black text-lg mb-6">AI AMPLIFIES. HUMANS CONNECT.</h4>
              
              <div className="mb-6">
                <div className="bg-black text-white p-3 mb-3">
                  <h5 className="font-bold text-sm mb-2">ROBOTS DO:</h5>
                </div>
                <ul className="space-y-1 text-sm font-mono pl-4">
                  <li>→ The noise that drowns relationships</li>
                  <li>→ Tasks that steal connection time</li>
                  <li>→ Admin that kills momentum</li>
                  <li>→ Busywork that blocks growth</li>
                  <li>→ Everything that isn&apos;t human</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="border-2 border-black p-3 mb-3">
                  <h5 className="font-bold text-sm mb-2">HUMANS DO:</h5>
                </div>
                <ul className="space-y-1 text-sm font-mono pl-4">
                  <li>→ The handshake moments</li>
                  <li>→ Trust-building conversations</li>
                  <li>→ Reading between the lines</li>
                  <li>→ Understanding unspoken needs</li>
                  <li>→ Everything that makes you, you</li>
                </ul>
              </div>
              
              <div className="bg-black text-white p-4 text-center">
                <p className="font-black">RELATIONSHIPS AT SCALE</p>
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
                <text x="100" y="50" textAnchor="middle" className="font-bold text-sm">SOUL INTACT</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}