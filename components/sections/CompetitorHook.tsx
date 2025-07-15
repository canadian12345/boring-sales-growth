export default function CompetitorHook() {
  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-5xl mx-auto">
        <div className="border-4 border-red-600 bg-red-900 p-6 mb-12">
          <p className="text-center font-black text-lg sm:text-xl">
            🚨 Your biggest customer just asked for a quote on products they&apos;ve been auto-ordering for 5 years.
          </p>
          <p className="text-center text-sm mt-2 font-mono">
            They&apos;re shopping competitors. You&apos;re about to lose them.
          </p>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-center">
          That Competitor Who Stole Your Client?<br/>
          <span className="text-red-500">They Knew They Needed Inventory 10 Days Before You Did</span>
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p className="font-bold text-xl">
            Here&apos;s what happened:
          </p>
          
          <div className="bg-gray-900 border-2 border-yellow-600 p-6">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-400 font-black mr-3">1.</span>
                <span>Their AI noticed your customer&apos;s order pattern changed - 23% less volume, 5 days later than usual</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 font-black mr-3">2.</span>
                <span>System flagged it: &quot;Customer shopping competitors - 87% probability&quot;</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 font-black mr-3">3.</span>
                <span>Rep called with a &quot;loyalty discount&quot; before your customer even decided to switch</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 font-black mr-3">4.</span>
                <span>Customer stayed. You never knew you almost lost them.</span>
              </li>
            </ol>
          </div>
          
          <p className="font-black text-xl text-red-400">
            Meanwhile, you&apos;re still using Excel to track orders.
          </p>
          
          <div className="bg-white text-black p-6 border-4 border-white">
            <p className="font-black text-center text-lg">
              Answer these honestly:
            </p>
            <ul className="mt-4 space-y-2">
              <li>• How many quotes die after 48 hours? <span className="text-red-600 font-black">(Industry average: 67%)</span></li>
              <li>• What percentage of reorders do you miss? <span className="text-red-600 font-black">(You&apos;re losing 3-5 monthly)</span></li>
              <li>• How often do customers mention &quot;faster&quot; competitors? <span className="text-red-600 font-black">(It&apos;s not about speed)</span></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl mb-6 font-bold">
            Your competitors aren&apos;t smarter. They just have better weapons.
          </p>
          <a href="#solutions" className="inline-block bg-red-600 text-white px-8 py-4 text-lg font-black uppercase hover:bg-red-700 transition-colors">
            See Their Exact Playbook →
          </a>
        </div>
      </div>
    </section>
  );
}