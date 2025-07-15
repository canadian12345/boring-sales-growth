export default function ProofCase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center uppercase">
          How Wilson Electric Went From Defense to Offense
        </h2>
        
        <div className="bg-white text-black p-6 mb-8">
          <p className="font-bold text-lg">
            &quot;We lost Precision Manufacturing to a competitor who quoted in 2 hours. 
            They&apos;d been our customer for 11 years. That&apos;s when I knew we had to change.&quot;
          </p>
          <p className="text-sm mt-2">— Mike Wilson, watching his family business get picked apart</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border-4 border-red-600 bg-red-900 p-6">
            <h3 className="font-black text-xl mb-4 text-red-300">March 2023 (Rock Bottom)</h3>
            <ul className="space-y-3 font-mono text-sm">
              <li>• Quote time: 72-96 hours average</li>
              <li>• Monthly revenue: $1.24M (down 8% YoY)</li>
              <li>• Customer reorders: 61% on-time</li>
              <li>• Rep admin time: 22 hrs/week</li>
              <li>• Lost: Precision Mfg ($180K/yr)</li>
              <li>• Lost: Coastal Logistics ($140K/yr)</li>
              <li>• Gross margin: 24.3%</li>
            </ul>
          </div>
          
          <div className="border-4 border-green-600 bg-green-900 p-6">
            <h3 className="font-black text-xl mb-4 text-green-300">September 2023 (6 Months Later)</h3>
            <ul className="space-y-3 font-mono text-sm">
              <li>• Quote time: 18 minutes (common items)</li>
              <li>• Monthly revenue: $1.63M (+31.5%)</li>
              <li>• Customer reorders: 91% automated</li>
              <li>• Rep admin time: 3.5 hrs/week</li>
              <li>• Won back: Precision Mfg</li>
              <li>• New wins: 4 competitor accounts</li>
              <li>• Gross margin: 27.8%</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-black border-4 border-gray-700 p-8 mb-12">
          <h3 className="font-black text-xl mb-4 text-yellow-400">Exactly How They Won Back Precision Manufacturing:</h3>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 border-l-4 border-yellow-400">
              <p className="font-mono text-sm mb-2">Day 47 after implementation:</p>
              <p className="text-gray-300">
                AI flagged: &quot;Precision Mfg searching your website - 3 visits this week, pricing pages.&quot;
                Mike called personally with a win-back offer: guaranteed 2-hour quotes, dedicated inventory.
              </p>
            </div>
            
            <div>
              <h4 className="font-black text-green-400 mb-2">The Competitive Intelligence That Saved Them:</h4>
              <div className="bg-gray-800 p-4 space-y-2 text-sm">
                <p>• <span className="text-yellow-400">Alert:</span> &quot;Johnson Industrial order volume down 32% - competitor likely&quot;</p>
                <p>• <span className="text-yellow-400">Action:</span> Rep called, found they were testing ABC Supply</p>
                <p>• <span className="text-yellow-400">Counter:</span> Matched price, added same-day emergency delivery</p>
                <p>• <span className="text-yellow-400">Result:</span> Kept the account, expanded wallet share 20%</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-green-400 mb-2">The Numbers That Matter:</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Stockout incidents: 14 per quarter → 1 (damaged shipment)</li>
                <li>• Quote abandonment: 67% → 19%</li>
                <li>• Customer emails missed: 40+ weekly → 0</li>
                <li>• Time to identify at-risk accounts: 90 days → Same day</li>
              </ul>
            </div>
            
            <div className="bg-red-900 p-4 border-2 border-red-600">
              <p className="font-black text-red-300 mb-2">The Reality Check:</p>
              <p className="text-sm">
                Integration wasn&apos;t smooth. Data cleanup took 3 weeks. Two reps resisted the change. 
                One customer complained about &quot;too many follow-ups&quot; at first. But the results spoke louder than the complaints.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white text-black p-8">
          <blockquote className="text-lg font-bold mb-4">
            &quot;We went from playing defense to playing offense. Our competitors can&apos;t match our response time. 
            The AI paid for itself in 8 weeks. Should have done this years ago.&quot;
          </blockquote>
          <p className="font-black">
            — Mike Wilson, President, Wilson Electric Supply
          </p>
          <p className="text-sm text-gray-700 mt-2">
            $15M distributor, 47 employees, competing against nationals
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-black text-yellow-400 mb-4">
            Wilson&apos;s competitors are now scrambling to catch up.
          </p>
          <p className="text-lg">
            Which side of this race do you want to be on?
          </p>
        </div>
      </div>
    </section>
  );
}