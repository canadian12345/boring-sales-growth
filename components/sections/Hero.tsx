export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-navy-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
            Your Competitors Are Using AI to Steal Your Best Customers{" "}
            <span className="text-green-500">While You &ldquo;Wait for the Right Time&rdquo;</span>
          </h1>
          <p className="mt-6 text-xl text-navy-700 font-semibold max-w-4xl mx-auto lg:mx-0">
            The difference? They discovered how to amplify their sales team&apos;s strengths instead of replacing them. Here&apos;s the method 200+ traditional B2B companies are using to increase sales 40% without losing the human touch.
          </p>
          <p className="mt-6 text-lg text-navy-600 max-w-3xl mx-auto lg:mx-0">
            If you&apos;re the CEO of a successful B2B company, you&apos;ve built your business on relationships. Now you&apos;re watching digital-native competitors close deals faster while your sales team drowns in administrative work. You know AI is coming, but every vendor wants to &ldquo;revolutionize&rdquo; your business overnight. There&apos;s a better way.
          </p>
          
          <div className="mt-8 space-y-3 text-left max-w-3xl mx-auto lg:mx-0">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-navy-700"><strong>Keep what works:</strong> Your relationships stay intact while AI handles the grunt work</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-navy-700"><strong>Proven with companies like yours:</strong> 200+ manufacturers, distributors, and service companies seeing 40% growth</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-navy-700"><strong>Gradual implementation:</strong> Start small, prove ROI, scale at your pace—no disruption</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#assessment"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors shadow-lg"
            >
              Get Your 15-Minute AI Readiness Assessment →
            </a>
            <a
              href="#roi"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy-700 bg-white border-2 border-navy-200 rounded-md hover:bg-navy-50 transition-colors"
            >
              Calculate Your ROI
            </a>
          </div>
          <p className="mt-8 text-sm text-navy-500">
            Trusted by 200+ traditional B2B companies • Average 40% revenue increase in 90 days
          </p>
        </div>
      </div>
    </section>
  );
}