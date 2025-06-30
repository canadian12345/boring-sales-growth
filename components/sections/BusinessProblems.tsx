export default function BusinessProblems() {
  return (
    <section id="problems" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            The Hidden Crisis in Traditional B2B Sales
          </h2>
          <p className="text-xl text-navy-600">
            You built your business on relationships. Now those relationships might not be enough.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none text-navy-700">
          <p className="text-lg leading-relaxed mb-6">
            You&apos;ve been in business for years, maybe decades. Your sales team knows every customer by name. You&apos;ve weathered recessions, adapted to change, and built something solid. But lately, something feels different.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Your best salespeople spend <span className="font-bold text-navy-900">65% of their time on paperwork</span> instead of selling. New competitors—half your age with half your experience—are winning deals with &ldquo;AI-powered insights.&rdquo; Your growth has plateaued while costs keep rising. You tried hiring more salespeople, but good ones are impossible to find and expensive to train.
          </p>
          
          <p className="text-lg leading-relaxed mb-8">
            Meanwhile, you&apos;re getting bombarded by tech companies promising to &ldquo;transform&rdquo; your business with AI. But you&apos;ve seen what happens when companies chase the latest trend. Relationships get damaged. Customers feel like numbers. The human touch that built your business disappears. So you wait, hoping this AI thing will blow over. <span className="font-bold text-navy-900">But deep down, you know it won&apos;t.</span>
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="font-bold text-navy-900 mb-2">What You&apos;re Experiencing</h3>
            <ul className="space-y-2 text-navy-700">
              <li>• Revenue plateau despite working harder</li>
              <li>• Losing deals to younger competitors</li>
              <li>• Key knowledge trapped in heads</li>
              <li>• Sales team overwhelmed with admin</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="font-bold text-navy-900 mb-2">What&apos;s Actually Happening</h3>
            <ul className="space-y-2 text-navy-700">
              <li>• Competitors using AI to move 50% faster</li>
              <li>• Customer expectations have changed</li>
              <li>• Manual processes can&apos;t scale</li>
              <li>• The market is leaving you behind</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-navy-900 mb-6">
            You have three choices:
          </p>
          <div className="space-y-4 max-w-2xl mx-auto text-left">
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-red-500">1.</span>
              <p className="text-lg text-navy-700">Do nothing and hope relationships are enough (they won&apos;t be)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-yellow-500">2.</span>
              <p className="text-lg text-navy-700">Try the &ldquo;revolutionary&rdquo; approach and risk everything</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-green-500">3.</span>
              <p className="text-lg text-navy-700">Find a way to amplify what already works</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}