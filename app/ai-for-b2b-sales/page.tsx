import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI for B2B Sales Teams | Automate Follow-ups & Close More Deals",
  description: "Discover how AI helps B2B sales teams automate repetitive tasks, improve follow-up timing, and close 40% more deals. Perfect for manufacturing and traditional industries.",
  keywords: "AI for B2B sales, B2B sales automation, AI sales tools, sales productivity, manufacturing sales AI",
  alternates: {
    canonical: "https://boringsalesgrowth.com/ai-for-b2b-sales",
  },
};

export default function AIForB2BSalesPage() {
  return (
    <main className="pt-16">
      <section className="bg-white py-20 border-b-4 border-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            AI for B2B Sales Teams:<br/>
            <span className="text-gray-600">Close 40% More Deals</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl">
            Your sales team knows how to sell. AI handles the repetitive work that kills momentum.
            No disruption to your proven process—just more closed deals.
          </p>
          <div className="flex gap-4">
            <a
              href="/get-started"
              className="inline-block px-8 py-4 bg-black text-white font-bold hover:bg-gray-900"
            >
              SEE HOW IT WORKS →
            </a>
            <a
              href="#roi-calculator"
              className="inline-block px-8 py-4 border-2 border-black font-bold hover:bg-gray-100"
            >
              CALCULATE YOUR ROI
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-12">Why B2B Companies Choose AI Sales Automation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-black">
              <h3 className="text-2xl font-bold mb-4">Never Miss Follow-ups</h3>
              <p className="text-gray-700 mb-4">
                AI tracks every lead and reminds your team exactly when to follow up. 
                No more deals dying from forgotten emails.
              </p>
              <p className="font-mono text-sm">AVG: +32% RESPONSE RATE</p>
            </div>
            <div className="bg-white p-8 border-2 border-black">
              <h3 className="text-2xl font-bold mb-4">Instant Quote Generation</h3>
              <p className="text-gray-700 mb-4">
                Turn RFQs into professional quotes in minutes, not hours. 
                AI pulls from your pricing rules automatically.
              </p>
              <p className="font-mono text-sm">AVG: 3HR → 15MIN</p>
            </div>
            <div className="bg-white p-8 border-2 border-black">
              <h3 className="text-2xl font-bold mb-4">Qualify Leads Faster</h3>
              <p className="text-gray-700 mb-4">
                AI pre-qualifies incoming leads based on your criteria. 
                Your team focuses on hot prospects only.
              </p>
              <p className="font-mono text-sm">AVG: +45% EFFICIENCY</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="how-it-works">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-12">How AI Transforms B2B Sales (Without Disruption)</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-3xl font-black">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Connect Your Existing Systems</h3>
                    <p className="text-gray-700">Works with your current CRM, email, and tools. No migration needed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl font-black">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI Learns Your Process</h3>
                    <p className="text-gray-700">Understands your products, pricing, and sales approach in days.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl font-black">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Automate the Boring Stuff</h3>
                    <p className="text-gray-700">Follow-ups, data entry, quote generation—all handled automatically.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 border-2 border-black">
              <h3 className="text-2xl font-bold mb-4">Real Results from Real Companies</h3>
              <blockquote className="italic mb-4">
                "Our sales team was drowning in follow-ups. Now AI handles the timing while 
                our reps focus on relationships. Close rate up 38% in 6 months."
              </blockquote>
              <p className="font-bold">- VP Sales, Industrial Equipment Distributor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Close More Deals?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 150+ B2B companies using AI to win more business without changing what works.
          </p>
          <a
            href="https://tidycal.com/noah3/boring-sales-growth"
            className="inline-block px-8 py-4 bg-white text-black font-bold hover:bg-gray-100"
          >
            BOOK YOUR STRATEGY CALL →
          </a>
        </div>
      </section>
    </main>
  );
}