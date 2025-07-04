export default function CostOfWaiting() {
  return (
    <section id="competitive-reality" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-navy-900 mb-4">
            The 18-Month AI Adoption Window
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-navy-900 mb-6 text-center">Where We Are Today:</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">15%</p>
                <p className="text-sm text-navy-600">of B2B companies use sales AI</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">40%</p>
                <p className="text-sm text-navy-600">average growth for early adopters</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">18mo</p>
                <p className="text-sm text-navy-600">until AI becomes table stakes</p>
              </div>
            </div>
            
            <div className="bg-navy-50 rounded-lg p-6">
              <h4 className="font-bold text-navy-900 mb-4">The Opportunity:</h4>
              <p className="text-navy-700 mb-4">
                Right now, AI is your competitive edge. In 18 months, it&apos;s mandatory. 
                The question isn&apos;t whether to adopt AI—it&apos;s whether you&apos;ll lead the 
                change or scramble to catch up.
              </p>
              <p className="text-lg font-semibold text-green-600">
                Every day you wait, someone else discovers they can 3x their customer 
                touchpoints without 3x the headcount. Why let them have that advantage?
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-green-900 mb-4">Early Movers Get:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-navy-700">First pick of AI-savvy talent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-navy-700">Time to perfect their approach</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-navy-700">Customers who see them as innovative</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-navy-700">18 months of compound advantage</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-red-900 mb-4">Late Adopters Get:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">✗</span>
                <span className="text-navy-700">Whatever talent is left</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">✗</span>
                <span className="text-navy-700">Rushed implementations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">✗</span>
                <span className="text-navy-700">Customers asking &quot;what took so long?&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">✗</span>
                <span className="text-navy-700">An expensive game of catch-up</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-navy-50 rounded-xl p-8 max-w-2xl mx-auto">
            <p className="text-2xl font-bold text-navy-900 mb-6">
              You&apos;re not behind. But the window is closing.
            </p>
            
            <a href="#discovery" className="btn-primary text-lg px-8 py-4">
              Lock In Your Advantage
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <p className="text-sm text-navy-600 mt-4">
              Join the 15% who will teach the 85% how it&apos;s done
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}