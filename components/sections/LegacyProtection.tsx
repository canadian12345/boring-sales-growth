export default function LegacyProtection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black mb-4">
            BUILT FOR FAMILY BUSINESSES
          </h2>
          <p className="text-lg font-mono uppercase">
            Pass it on stronger than you found it
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="border-4 border-black bg-white p-8">
            <h3 className="font-black uppercase text-xl mb-6">WHAT MATTERS MOST</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold uppercase mb-2">YOUR REPUTATION</h4>
                  <p className="font-mono text-sm">
                    Three generations of trust. We help you serve more customers 
                    without changing how you earn their business.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold uppercase mb-2">VETERAN KNOWLEDGE</h4>
                  <p className="font-mono text-sm">
                    Your 30-year pros teach the system, not the other way around. 
                    Their wisdom scales to the whole team.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold uppercase mb-2">SUCCESSION READY</h4>
                  <p className="font-mono text-sm">
                    Make the business attractive to the next generation. 
                    Modern tools, timeless values, growing profits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-4 border-black bg-black text-white p-8">
            <h3 className="font-black uppercase text-xl mb-6">THE FAMILY BUSINESS ADVANTAGE</h3>
            
            <div className="space-y-6">
              <div>
                <p className="font-black uppercase mb-2">LONG-TERM THINKING</p>
                <p className="font-mono text-sm">
                  You think in generations, not quarters. AI helps you build for 
                  your grandchildren, not next month&apos;s numbers.
                </p>
              </div>
              
              <div>
                <p className="font-black uppercase mb-2">TRUST OVER TRANSACTIONS</p>
                <p className="font-mono text-sm">
                  Your customers buy from you because of who you are. 
                  We strengthen those bonds, never replace them.
                </p>
              </div>
              
              <div>
                <p className="font-black uppercase mb-2">VALUES OVER VALUATIONS</p>
                <p className="font-mono text-sm">
                  You measure success by more than money. Community standing, 
                  employee loyalty, family pride - all protected.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-100 border-4 border-black p-8 mb-12">
          <h3 className="text-2xl font-black uppercase mb-6 text-center">
            THE SUCCESSION ACCELERATOR
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-black mb-2">87%</div>
              <p className="font-mono text-sm">
                Of family businesses fail at 3rd generation. Not yours.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">2X</div>
              <p className="font-mono text-sm">
                Faster knowledge transfer from seniors to juniors
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">100%</div>
              <p className="font-mono text-sm">
                Culture preservation while doubling profitability
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-black bg-white p-8 mb-12">
          <h3 className="font-black uppercase text-xl mb-6">THE SUCCESSION STRATEGY</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="font-black text-2xl">1.</span>
              <div>
                <h4 className="font-bold uppercase mb-2">LEARN YOUR BUSINESS</h4>
                <p className="font-mono text-sm">
                  We study what works and what doesn&apos;t. Keep the competitive 
                  advantages, fix the inefficiencies.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="font-black text-2xl">2.</span>
              <div>
                <h4 className="font-bold uppercase mb-2">MODERNIZE SMARTLY</h4>
                <p className="font-mono text-sm">
                  Give your team tools they actually want to use. More time 
                  for customers, less time fighting spreadsheets.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="font-black text-2xl">3.</span>
              <div>
                <h4 className="font-bold uppercase mb-2">SCALE FOR SUCCESSION</h4>
                <p className="font-mono text-sm">
                  Create a business the next generation wants to run. 
                  Growing, profitable, and still true to its roots.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 text-center">
          <p className="text-2xl font-black uppercase mb-4">
            MAKE YOUR BUSINESS IRRESISTIBLE TO THE NEXT GENERATION
          </p>
          <p className="font-mono text-lg mb-6">
            Growing profits + modern tools + family values = A legacy worth inheriting
          </p>
          <a href="#discovery" className="inline-block px-8 py-4 bg-white text-black font-bold uppercase hover:bg-gray-100">
            BUILD YOUR SUCCESSION PLAN →
          </a>
        </div>
      </div>
    </section>
  );
}