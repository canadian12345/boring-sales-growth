export default function NextMove() {
  return (
    <section id="next-move" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Stop Hoping. Start Systematizing.
          </h2>
          <p className="text-xl text-gray-700">
            Three Ways Forward:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-green-50 border-4 border-green-600 p-6 relative">
            <div className="absolute -top-4 left-4 bg-green-600 text-white px-4 py-1 text-sm font-black uppercase">
              Recommended
            </div>
            <h3 className="text-xl font-black mb-4 mt-2">
              Option 1: Discipline Audit Call
            </h3>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li>• Review your 7 critical sales disciplines</li>
              <li>• Identify biggest execution gaps</li>
              <li>• See AI enforcement in action</li>
              <li>• Get 90-day implementation roadmap</li>
              <li>• 30 minutes, no fluff</li>
            </ul>
            <a 
              href="https://tidycal.com/noah3/boring-sales-growth" 
              className="block text-center bg-green-600 text-white px-6 py-3 font-black uppercase hover:bg-green-700 transition-colors"
            >
              Schedule Audit →
            </a>
          </div>
          
          <div className="bg-gray-50 border-4 border-gray-300 p-6">
            <h3 className="text-xl font-black mb-4">
              Option 2: Pilot Program
            </h3>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li>• Pick ONE discipline to systematize</li>
              <li>• 30-day proof of concept</li>
              <li>• Measure revenue impact</li>
              <li>• Scale what works</li>
              <li>• Low risk, high reward</li>
            </ul>
            <a 
              href="#contact" 
              className="block text-center bg-gray-700 text-white px-6 py-3 font-black uppercase hover:bg-gray-800 transition-colors"
            >
              Start Pilot →
            </a>
          </div>
          
          <div className="bg-gray-50 border-4 border-gray-300 p-6">
            <h3 className="text-xl font-black mb-4">
              Option 3: Executive Visibility
            </h3>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li>• See what's really happening in sales</li>
              <li>• Daily dashboard of critical activities</li>
              <li>• No more surprises or excuses</li>
              <li>• Leadership confidence restored</li>
              <li>• Truth over hope</li>
            </ul>
            <a 
              href="#contact" 
              className="block text-center bg-gray-700 text-white px-6 py-3 font-black uppercase hover:bg-gray-800 transition-colors"
            >
              Get Visibility →
            </a>
          </div>
        </div>
        
        <div className="bg-red-600 text-white p-8 text-center">
          <h3 className="text-2xl font-black mb-4">
            The Urgency Reality:
          </h3>
          <p className="text-xl max-w-3xl mx-auto">
            "Every day without systems, your competitors execute 24 hours worth of 
            basics better than you. Boring compounds. So does neglect."
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-8">
            Stop managing hope. Start managing discipline.<br/>
            Your veterans know what to do. AI-enforced excellence ensures they do it.<br/>
            <span className="font-black">The thinking CEO's choice for Growth Protocol 2.0™</span>
          </p>
          <a 
            href="https://tidycal.com/noah3/boring-sales-growth" 
            className="inline-block bg-green-600 text-white px-12 py-6 text-xl font-black uppercase hover:bg-green-700 transition-colors"
          >
            Schedule Your Sales Discipline Audit
          </a>
          <p className="mt-4 text-sm text-gray-600">
            30 minutes. No slides. Just truth about your execution gaps.
          </p>
        </div>
      </div>
    </section>
  );
}