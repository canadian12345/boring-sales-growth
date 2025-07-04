export default function SimpleGuarantee() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
      <div className="container max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Our Promise Is Simple
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-xl text-navy-700 mb-6">
              "If we can't show you a clear path to 3X ROI in our first conversation, 
              we'll tell you. If we don't deliver measurable results in 90 days, 
              we work for free until we do."
            </p>
            
            <div className="border-t border-navy-200 pt-6 mt-6">
              <p className="font-bold text-navy-900 mb-4">
                Why we can promise this:
              </p>
              <div className="space-y-2 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-navy-700">200+ successful implementations</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-navy-700">Same proven playbook every time</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-navy-700">We only take on sure wins</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="#discovery" className="btn-primary text-lg px-8 py-4">
              Let's See If You're A Fit
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}