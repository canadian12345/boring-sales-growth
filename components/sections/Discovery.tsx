export default function Discovery() {
  return (
    <section id="discovery" className="section-padding bg-navy-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-navy-900 mb-4">
            Let&apos;s See If This Makes Sense For You
          </h2>
          <p className="text-xl text-navy-600">
            No high-pressure sales tactics. Just an honest conversation about your challenges and whether we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy-900 mb-6">What We&apos;ll Discuss</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">1</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Your Current Sales Process</p>
                  <p className="text-sm text-navy-600">
                    What&apos;s working, what&apos;s not, and where AI could help without disrupting what works
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">2</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Your Competition</p>
                  <p className="text-sm text-navy-600">
                    Who you&apos;re losing deals to and whether they&apos;re using AI (spoiler: they probably are)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">3</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Realistic Next Steps</p>
                  <p className="text-sm text-navy-600">
                    If it makes sense, we&apos;ll outline a pilot program. If not, we&apos;ll tell you straight
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-900">
                <strong>Our Promise:</strong> If we don&apos;t think we can deliver at least 3X ROI 
                within 90 days, we&apos;ll tell you not to hire us.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Schedule Your Call</h3>
            
            <div className="space-y-4 mb-6">
              <p className="text-navy-700">
                <strong>With:</strong> Noah Fleming, Founder
              </p>
              <p className="text-navy-700">
                <strong>Duration:</strong> 30 minutes
              </p>
              <p className="text-navy-700">
                <strong>Format:</strong> Video call (or phone if you prefer)
              </p>
            </div>
            
            {/* Book a Call Button */}
            <div className="space-y-4">
              <a
                href="https://tidycal.com/noah3/boring-sales-growth"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
              >
                Schedule Your Discovery Call →
              </a>
              
              <p className="text-center text-sm text-navy-600">
                Opens in a new window. You&apos;ll see available times immediately.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-navy-900 mb-2">20+</div>
            <p className="text-sm text-navy-600">Years helping B2B grow</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy-900 mb-2">92%</div>
            <p className="text-sm text-navy-600">Move forward after discovery</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy-900 mb-2">$0</div>
            <p className="text-sm text-navy-600">Cost for this consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
}