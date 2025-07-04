export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Top Promise Bar */}
      <div className="bg-navy-900 text-white py-3 -mx-4 sm:-mx-6 lg:-mx-8 mb-12">
        <div className="container text-center">
          <p className="font-medium">
            Join 200+ B2B companies using AI to strengthen relationships while automating everything else
          </p>
        </div>
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-navy-900 mb-6">
              Stop Choosing Between Relationships and Efficiency.
              <span className="block text-green-600">Have Both.</span>
            </h1>
            
            <p className="text-xl text-navy-700 mb-8">
              Every AI vendor wants to "transform" your sales process. We just want to give your 
              team their time back. Join 200+ B2B companies who chose amplification over 
              transformation—and grew 40% without losing their soul.
            </p>
            
            <div className="bg-navy-50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-navy-900 mb-4">The Simple Math:</h3>
              <div className="flex items-center gap-3 text-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">65%</p>
                  <p className="text-sm text-navy-600">time on admin</p>
                </div>
                <span className="text-2xl text-navy-400">→</span>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">3hrs</p>
                  <p className="text-sm text-navy-600">back daily</p>
                </div>
                <span className="text-2xl text-navy-400">→</span>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">40%</p>
                  <p className="text-sm text-navy-600">growth</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#roi" className="btn-primary">
                Calculate Your ROI
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#solutions" className="btn-secondary">
                See How It Works
              </a>
            </div>
            
            <p className="text-sm text-navy-600 mt-6 font-medium">
              AI that amplifies what already works • 90 days to measurable results
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-100/20 to-green-100/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-6 space-y-6">
                <h4 className="font-bold text-navy-900 text-center mb-4">Keep What Works. Automate What Doesn't.</h4>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-900 mb-3">What AI Handles:</h5>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Follow-up sequences (never miss another)</li>
                    <li>• CRM updates (automatic and accurate)</li>
                    <li>• Meeting scheduling (no more email tag)</li>
                    <li>• Lead prioritization (focus on hot ones)</li>
                    <li>• Proposal generation (first drafts in minutes)</li>
                  </ul>
                </div>
                
                <div className="bg-navy-50 border border-navy-200 rounded-lg p-4">
                  <h5 className="font-semibold text-navy-900 mb-3">What Humans Handle:</h5>
                  <ul className="space-y-2 text-sm text-navy-800">
                    <li>• Understanding customer needs</li>
                    <li>• Building trust over time</li>
                    <li>• Reading the room</li>
                    <li>• Creative problem-solving</li>
                    <li>• Closing the deal</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-400 text-navy-900 rounded-lg p-4 text-center">
                  <p className="font-bold text-lg">The Result:</p>
                  <p className="text-sm">Relationships at Scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}