export default function ProblemReality() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center uppercase">
          The Brutal Truth About Your Sales Process
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-4 border-black p-6">
            <h3 className="font-black text-xl mb-4 text-red-600">What You&apos;re Losing Daily</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 font-black mr-2">→</span>
                <span><strong>3-5 deals per month</strong> lost to slow follow-up</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-black mr-2">→</span>
                <span><strong>$50K-200K annually</strong> in margin leaks you can&apos;t see</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-black mr-2">→</span>
                <span><strong>15-20 hours weekly</strong> per rep on data entry</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-black mr-2">→</span>
                <span><strong>40% of quotes</strong> die from slow turnaround</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-black text-white border-4 border-black p-6">
            <h3 className="font-black text-xl mb-4 text-yellow-400">While Competitors Gain</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 font-black mr-2">✓</span>
                <span>Quote-to-delivery in <strong>half the time</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-black mr-2">✓</span>
                <span>Identifying <strong>30% more upsells</strong> per account</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-black mr-2">✓</span>
                <span>Preventing stockouts with <strong>92% accuracy</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-black mr-2">✓</span>
                <span>Converting <strong>50% more quotes</strong> to orders</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-yellow-100 border-4 border-yellow-600 p-6">
          <p className="text-center font-black text-lg">
            Every month you wait = $125,000 in lost opportunity cost.<br/>
            <span className="text-yellow-700">Your competitors thank you for the head start.</span>
          </p>
        </div>
      </div>
    </section>
  );
}