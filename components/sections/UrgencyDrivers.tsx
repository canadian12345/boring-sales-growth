export default function UrgencyDrivers() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600 text-white border-y-8 border-black">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            THE CLOCK IS TICKING ON YOUR COMPETITIVE ADVANTAGE
          </h2>
          <p className="text-lg font-mono uppercase">
            Every day you wait is a day your competitors get stronger
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white text-black border-4 border-black p-6">
            <div className="text-4xl font-black mb-2">38%</div>
            <p className="font-bold uppercase mb-2">Faster Growth</p>
            <p className="text-sm font-mono">
              Companies using AI in sales are growing 38% faster RIGHT NOW
            </p>
          </div>
          
          <div className="bg-white text-black border-4 border-black p-6">
            <div className="text-4xl font-black mb-2">Q1</div>
            <p className="font-bold uppercase mb-2">2025 Pricing</p>
            <p className="text-sm font-mono">
              Investment increases 30% after March 31st. Lock in now.
            </p>
          </div>
          
          <div className="bg-white text-black border-4 border-black p-6">
            <div className="text-4xl font-black mb-2">67%</div>
            <p className="font-bold uppercase mb-2">Already Moving</p>
            <p className="text-sm font-mono">
              Of your industry peers evaluating AI solutions this quarter
            </p>
          </div>
          
          <div className="bg-white text-black border-4 border-black p-6">
            <div className="text-4xl font-black mb-2">DEC</div>
            <p className="font-bold uppercase mb-2">Tax Benefits</p>
            <p className="text-sm font-mono">
              Section 179 deductions for AI investments expire Dec 2025
            </p>
          </div>
        </div>

        <div className="bg-black text-white p-8 mb-8">
          <h3 className="text-2xl font-black uppercase mb-6 text-center">
            THE COMPOUND EFFECT OF WAITING
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="font-mono text-sm mb-2">WAIT 3 MONTHS</p>
              <p className="text-2xl font-black">-10% MARKET SHARE</p>
              <p className="text-xs font-mono mt-1">To faster competitors</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-sm mb-2">WAIT 6 MONTHS</p>
              <p className="text-2xl font-black">-23% DEAL WINS</p>
              <p className="text-xs font-mono mt-1">Lost to AI-powered rivals</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-sm mb-2">WAIT 12 MONTHS</p>
              <p className="text-2xl font-black">-47% GROWTH</p>
              <p className="text-xs font-mono mt-1">Playing catch-up forever</p>
            </div>
          </div>
        </div>

        <div className="border-4 border-white p-6 text-center">
          <p className="text-xl font-black uppercase mb-4">
            YOUR COMPETITORS ARE BOOKING BRIEFINGS RIGHT NOW
          </p>
          <p className="font-mono mb-6">
            3 companies in your industry started with us this month.<br/>
            The first movers in each market are winning. Permanently.
          </p>
          <a
            href="#discovery"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold font-mono uppercase hover:bg-gray-100 transition-colors text-lg"
          >
            SECURE YOUR COMPETITIVE EDGE NOW →
          </a>
        </div>
      </div>
    </section>
  );
}