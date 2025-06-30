export default function FinalCTA() {
  return (
    <section id="opportunity" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-900">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Is This Strategic Move Right for Your Company?
        </h2>
        <p className="text-xl text-navy-200 mb-8">
          Let&apos;s have a frank 15-minute conversation about your revenue goals and whether AI-enabled sales makes sense for your business.
        </p>
        
        <div className="bg-navy-800 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            What You&apos;ll Get in 15 Minutes:
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-navy-100">Honest assessment of your readiness</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-navy-100">Specific ROI projections for your business</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-navy-100">Clear next steps (or reasons to wait)</p>
            </div>
          </div>
        </div>
        
        <a
          href="#schedule"
          className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-navy-900 bg-white rounded-md hover:bg-gray-100 transition-colors"
        >
          Schedule Executive Briefing →
        </a>
        
        <p className="mt-6 text-sm text-navy-300">
          No sales pitch. Just strategic discussion between executives.
        </p>
      </div>
    </section>
  );
}