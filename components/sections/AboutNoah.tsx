export default function AboutNoah() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Listen to Me About AI?
          </h2>
        </div>
        
        <div className="bg-navy-800 rounded-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed text-navy-100">
                I&apos;m Noah Fleming, and I&apos;ve spent 20 years helping traditional businesses grow through customer relationships. I wrote the book on customer loyalty (literally—&ldquo;The Customer Loyalty Loop&rdquo;). When AI exploded onto the scene, I saw most companies making the same mistake—trying to replace relationships with technology.
              </p>
              
              <p className="text-lg leading-relaxed text-navy-100">
                That&apos;s backwards. After implementing AI solutions for 200+ traditional B2B companies, I discovered the secret: <span className="font-bold text-white">AI should amplify human relationships, not replace them.</span> My clients aren&apos;t tech companies. They&apos;re manufacturers, distributors, and service providers who built their success on trust. They need AI that respects that foundation while driving growth.
              </p>
              
              <div className="border-l-4 border-green-500 pl-6 py-2">
                <p className="text-xl font-semibold text-white italic">
                  &ldquo;Your technology should make your humanity more scalable, not less relevant.&rdquo;
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-navy-700 rounded-lg p-6 space-y-4">
                <h3 className="font-bold text-white text-lg mb-4">Track Record</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-navy-100">200+ B2B implementations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-navy-100">Author of 3 business books</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-navy-100">100,000+ books sold</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-navy-100">20 years in B2B growth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-navy-100">Focus on relationships + AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-navy-700 rounded-lg p-6">
              <p className="text-3xl font-bold text-green-400 mb-2">$5M-$500M</p>
              <p className="text-navy-200">Company Size Sweet Spot</p>
            </div>
            <div className="bg-navy-700 rounded-lg p-6">
              <p className="text-3xl font-bold text-green-400 mb-2">40%</p>
              <p className="text-navy-200">Average Revenue Increase</p>
            </div>
            <div className="bg-navy-700 rounded-lg p-6">
              <p className="text-3xl font-bold text-green-400 mb-2">90 Days</p>
              <p className="text-navy-200">To Measurable ROI</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-navy-200 mb-6">
            Ready to explore if AI makes sense for your business?
          </p>
          <a
            href="#assessment"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy-900 bg-white rounded-md hover:bg-gray-100 transition-colors shadow-lg"
          >
            Let&apos;s Have a Strategic Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}