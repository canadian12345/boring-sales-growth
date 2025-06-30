export default function RiskMitigation() {
  const risks = [
    {
      concern: "What if it disrupts our existing relationships?",
      mitigation: "AI works behind the scenes. Your team maintains full control of all customer interactions. We enhance, never replace, the human touch.",
      icon: "🛡️"
    },
    {
      concern: "How do we implement without disrupting operations?",
      mitigation: "Gradual rollout starting with one team. Prove results, then scale. No 'big bang' implementations that risk your business.",
      icon: "📊"
    },
    {
      concern: "Will our sales team resist the change?",
      mitigation: "We make their jobs easier, not harder. Less admin work, more selling. Teams typically adopt within 2 weeks when they see the benefits.",
      icon: "👥"
    },
    {
      concern: "What if it doesn't work for our industry?",
      mitigation: "30-day pilot program with success metrics defined upfront. If we don't hit the targets, you don't pay. Zero risk to try.",
      icon: "✅"
    }
  ];

  return (
    <section id="risk" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            Addressing Your Concerns Head-On
          </h2>
          <p className="mt-4 text-xl text-navy-600 max-w-3xl mx-auto">
            We know change is risky. Here's how we protect your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {risks.map((risk, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{risk.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{risk.concern}</h3>
                  <p className="text-navy-700">{risk.mitigation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">
            Our Guarantee
          </h3>
          <p className="text-lg text-navy-700 mb-6">
            If we don't deliver measurable results in 90 days, we'll work for free until we do.
            <br />
            That's how confident we are in this approach.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-left">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-navy-700">No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-navy-700">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-navy-700">Your data stays yours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}