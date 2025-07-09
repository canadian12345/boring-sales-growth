export default function FinalCTA() {
  return (
    <section id="assessment" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          You Have Three Options
        </h2>
        
        <div className="space-y-6 max-w-3xl mx-auto mb-12 text-left">
          <div className="bg-navy-700/50 rounded-lg p-6 border border-red-500/30">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-red-400">1.</span>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Do nothing</h3>
                <p className="text-navy-200">Hope your relationships are enough to compete against AI-powered competitors (they won&apos;t be)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-navy-700/50 rounded-lg p-6 border border-yellow-500/30">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-yellow-400">2.</span>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Try to figure it out yourself</h3>
                <p className="text-navy-200">Risk alienating your team and customers with the wrong approach</p>
              </div>
            </div>
          </div>
          
          <div className="bg-navy-700/50 rounded-lg p-6 border border-green-500/30">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-green-400">3.</span>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Get it right the first time</h3>
                <p className="text-navy-200">Use the proven &ldquo;Amplify Don&apos;t Replace&rdquo; method refined over decades of B2B experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 mb-8">
          <p className="text-xl font-semibold text-white mb-2">
            Limited Capacity Warning
          </p>
          <p className="text-lg text-navy-200 mb-6">
            We only work with 5 new companies per month to ensure proper implementation and support.
          </p>
          <p className="text-navy-300">
            If you&apos;re ready to grow revenue without sacrificing relationships, let&apos;s talk.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="https://tidycal.com/noah3/boring-sales-growth"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-navy-900 bg-white rounded-md hover:bg-gray-100 transition-colors shadow-xl"
          >
            Schedule Your Executive Briefing →
          </a>
          
          <p className="text-sm text-navy-300">
            Or download our executive guide first:
          </p>
          
          <a
            href="#download"
            className="inline-flex items-center justify-center px-8 py-3 text-md font-semibold text-white border-2 border-white/30 rounded-md hover:bg-white/10 transition-colors"
          >
            Download: 7 Signs You&apos;re Ready for Sales AI
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-navy-700">
          <p className="text-lg font-semibold text-green-400 mb-4">
            Our Guarantee
          </p>
          <p className="text-navy-200 max-w-2xl mx-auto">
            90-day revenue increase guarantee. If we don&apos;t deliver measurable results in 90 days, we&apos;ll work for free until we do. That&apos;s how confident we are in this approach.
          </p>
        </div>
      </div>
    </section>
  );
}