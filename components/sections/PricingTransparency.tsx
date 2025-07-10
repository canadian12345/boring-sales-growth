export default function PricingTransparency() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black mb-4">
            STRAIGHT TALK ABOUT YOUR INVESTMENT
          </h2>
          <p className="text-lg font-mono uppercase">
            We don&apos;t charge monthly fees. We charge based on the value we create together.
          </p>
        </div>

        <div className="border-4 border-black bg-white p-12">
          <h3 className="text-2xl font-black uppercase mb-8 text-center">
            HOW VALUE-BASED PRICING WORKS
          </h3>
          <p className="text-xl font-mono text-center mb-12">
            Your investment is proportional to your growth.<br/>
            We succeed when you succeed.<br/>
            Simple as that.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-4 border-black bg-gray-50 p-8">
              <h4 className="font-black uppercase mb-4">WHAT THIS MEANS FOR YOU</h4>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>No arbitrary monthly fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Investment scales with your business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>We&apos;re motivated by YOUR results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Complete alignment of interests</span>
                </li>
              </ul>
            </div>

            <div className="border-4 border-black bg-black text-white p-8">
              <h4 className="font-black uppercase mb-4">WHAT NEVER CHANGES</h4>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>100% money-back guarantee if no growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>You own everything we build</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>6-8 week average to see first results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>No surprises, no hidden costs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-100 border-4 border-black p-8 text-center">
            <h4 className="font-black uppercase text-xl mb-4">THE PRINCIPLE</h4>
            <p className="font-mono mb-4">
              If we help you grow $2M, your investment will be a fraction of that.<br/>
              If we don&apos;t deliver growth, you pay nothing.
            </p>
            <p className="font-black text-lg">
              Fair. Transparent. Boring.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-black text-white p-12">
          <h3 className="text-2xl font-black uppercase text-center mb-8">
            THE ONLY QUESTION THAT MATTERS
          </h3>
          <p className="text-xl font-mono text-center mb-12">
            What would 40% more revenue mean for your business?
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="font-mono text-sm mb-2">$5M COMPANY</p>
              <p className="text-3xl font-black mb-2">→ $7M</p>
              <p className="font-mono text-sm">That&apos;s $2M in new revenue</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-sm mb-2">$25M COMPANY</p>
              <p className="text-3xl font-black mb-2">→ $35M</p>
              <p className="font-mono text-sm">That&apos;s $10M in new revenue</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-sm mb-2">$50M COMPANY</p>
              <p className="text-3xl font-black mb-2">→ $70M</p>
              <p className="font-mono text-sm">That&apos;s $20M in new revenue</p>
            </div>
          </div>

          <p className="text-center font-mono mt-12 text-lg">
            Same team. Same culture. Better tools.<br/>
            Your investment? A small fraction of your growth.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-mono uppercase mb-6">
            Let&apos;s discuss your growth potential
          </p>
          <a href="#discovery" className="btn-primary">
            SEE HOW IT WORKS →
          </a>
        </div>
      </div>
    </section>
  );
}