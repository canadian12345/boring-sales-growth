export default function TheChoice() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black mb-4">
            THE CHOICE IS YOURS
          </h2>
          <p className="text-lg font-mono uppercase">
            Two paths. Two outcomes. One decision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Bold Transformation */}
          <div className="border-4 border-red-600 bg-white">
            <div className="bg-red-600 text-white p-6">
              <h3 className="text-2xl font-black uppercase">BOLD TRANSFORMATION</h3>
              <p className="font-mono mt-2">&ldquo;Disrupt or Die&rdquo; They Say</p>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-black text-xl">✗</span>
                <div>
                  <p className="font-black uppercase">87% FAILURE RATE</p>
                  <p className="font-mono text-sm">Most transformations fail spectacularly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-black text-xl">✗</span>
                <div>
                  <p className="font-black uppercase">TEAM CONFUSION</p>
                  <p className="font-mono text-sm">&ldquo;This isn&apos;t the company I joined&rdquo;</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-black text-xl">✗</span>
                <div>
                  <p className="font-black uppercase">CUSTOMER ALIENATION</p>
                  <p className="font-mono text-sm">&ldquo;What happened to the people I trust?&rdquo;</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-black text-xl">✗</span>
                <div>
                  <p className="font-black uppercase">MASSIVE DISRUPTION</p>
                  <p className="font-mono text-sm">6-18 months of chaos and confusion</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-black text-xl">✗</span>
                <div>
                  <p className="font-black uppercase">MAYBE GREAT SOMEDAY</p>
                  <p className="font-mono text-sm">If you survive the transformation</p>
                </div>
              </div>
              
              <div className="border-t-4 border-gray-200 pt-6 mt-6">
                <p className="font-mono text-sm text-gray-600">
                  &ldquo;We transformed our entire sales process with AI. Lost 60% of our clients and our best reps quit. But hey, we&apos;re innovative now.&rdquo; - Anonymous CEO
                </p>
              </div>
            </div>
          </div>

          {/* Boring Growth */}
          <div className="border-4 border-green-600 bg-white">
            <div className="bg-green-600 text-white p-6">
              <h3 className="text-2xl font-black uppercase">BORING GROWTH</h3>
              <p className="font-mono mt-2">&ldquo;Consistency Compounds&rdquo; We Know</p>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-black text-xl">✓</span>
                <div>
                  <p className="font-black uppercase">100% SUCCESS RATE</p>
                  <p className="font-mono text-sm">Every client grows 20-47% year one</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-black text-xl">✓</span>
                <div>
                  <p className="font-black uppercase">TEAM BUYS IN NATURALLY</p>
                  <p className="font-mono text-sm">&ldquo;Finally, tools that actually help&rdquo;</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-black text-xl">✓</span>
                <div>
                  <p className="font-black uppercase">CUSTOMERS LOVE CONSISTENCY</p>
                  <p className="font-mono text-sm">&ldquo;Same great people, better service&rdquo;</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-black text-xl">✓</span>
                <div>
                  <p className="font-black uppercase">STEADY IMPROVEMENT</p>
                  <p className="font-mono text-sm">1% better daily = 37x better yearly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-black text-xl">✓</span>
                <div>
                  <p className="font-black uppercase">CONSISTENTLY GOOD TODAY</p>
                  <p className="font-mono text-sm">Results start in week one</p>
                </div>
              </div>
              
              <div className="border-t-4 border-gray-200 pt-6 mt-6">
                <p className="font-mono text-sm text-gray-600">
                  &ldquo;We chose boring growth over bold promises. 40% revenue increase, zero drama, same culture. Best decision ever.&rdquo; - Mike, Johnson Supply
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Math */}
        <div className="bg-black text-white p-12 mb-12">
          <h3 className="text-2xl font-black uppercase text-center mb-8">THE BORING MATH THAT WINS</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="font-mono text-sm mb-2">YEAR 1</p>
              <p className="text-4xl font-black">+40%</p>
              <p className="font-mono text-xs mt-2">Just from fixing basics</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-sm mb-2">YEAR 3</p>
              <p className="text-4xl font-black">+218%</p>
              <p className="font-mono text-xs mt-2">Compound growth kicks in</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-sm mb-2">YEAR 5</p>
              <p className="text-4xl font-black">+537%</p>
              <p className="font-mono text-xs mt-2">While &ldquo;bold&rdquo; is still transforming</p>
            </div>
          </div>
          <p className="text-center font-mono mt-8">
            BORING EATS THE BOLD. EVERY. SINGLE. TIME.
          </p>
        </div>

        <div className="text-center">
          <p className="text-xl font-black mb-6">
            READY TO CHOOSE BORING GROWTH THAT ACTUALLY WORKS?
          </p>
          <a href="#discovery" className="btn-primary">
            LET&apos;S BUILD YOUR BORING SUCCESS STORY →
          </a>
        </div>
      </div>
    </section>
  );
}