export default function FinalCTA() {
  return (
    <section id="assessment" className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-8">
          YOU HAVE THREE OPTIONS
        </h2>
        
        <div className="space-y-6 max-w-3xl mx-auto mb-12 text-left">
          <div className="border-4 border-white p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-black">1.</span>
              <div>
                <h3 className="font-bold text-lg mb-2 uppercase font-mono">Do nothing</h3>
                <p className="font-mono text-sm">Hope your relationships are enough to compete against AI-powered competitors (they won&apos;t be)</p>
              </div>
            </div>
          </div>
          
          <div className="border-4 border-white p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-black">2.</span>
              <div>
                <h3 className="font-bold text-lg mb-2 uppercase font-mono">Try to figure it out yourself</h3>
                <p className="font-mono text-sm">Risk alienating your team and customers with the wrong approach</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-black border-4 border-white p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-black">3.</span>
              <div>
                <h3 className="font-bold text-lg mb-2 uppercase font-mono">Get it right the first time</h3>
                <p className="font-mono text-sm">Use the proven &ldquo;Amplify Don&apos;t Replace&rdquo; method refined over decades of B2B experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-4 border-white p-8 mb-8">
          <p className="text-xl font-black uppercase mb-2">
            LIMITED CAPACITY WARNING
          </p>
          <p className="text-lg font-mono mb-6">
            We only work with 5 new companies per month to ensure proper implementation and support.
          </p>
          <p className="font-mono text-sm">
            If you&apos;re ready to grow revenue without sacrificing relationships, let&apos;s talk.
          </p>
        </div>

        <div className="space-y-6">
          <a
            href="https://tidycal.com/noah3/boring-sales-growth"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold font-mono uppercase text-black bg-white hover:bg-gray-100 transition-colors"
          >
            SCHEDULE YOUR EXECUTIVE BRIEFING →
          </a>
          
          <p className="text-sm font-mono uppercase">
            Or download our executive guide first:
          </p>
          
          <a
            href="#download"
            className="inline-flex items-center justify-center px-8 py-3 font-bold font-mono uppercase text-white border-4 border-white hover:bg-white hover:text-black transition-colors"
          >
            DOWNLOAD: 7 SIGNS YOU&apos;RE READY FOR SALES AI
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t-4 border-white">
          <p className="text-lg font-black uppercase mb-4">
            OUR GUARANTEE
          </p>
          <p className="font-mono text-sm max-w-2xl mx-auto">
            90-day revenue increase guarantee. If we don&apos;t deliver measurable results in 90 days, we&apos;ll work for free until we do. That&apos;s how confident we are in this approach.
          </p>
        </div>
      </div>
    </section>
  );
}