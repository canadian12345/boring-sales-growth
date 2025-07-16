import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Automation for Manufacturing Companies | BoringSalesGrowth",
  description: "Manufacturing sales automation that preserves relationships while handling quotes, follow-ups, and order tracking. Built for companies that sell through relationships.",
  keywords: "manufacturing sales automation, CRM for manufacturers, industrial sales software, B2B manufacturing sales, quote automation",
  alternates: {
    canonical: "https://boringsalesgrowth.com/sales-automation-manufacturing",
  },
};

export default function ManufacturingSalesAutomationPage() {
  return (
    <main className="pt-16">
      <section className="bg-white py-20 border-b-4 border-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Sales Automation for<br/>
            <span className="text-gray-600">Manufacturing Companies</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl">
            Your sales process took decades to perfect. We automate the paperwork, not the relationships.
            Built specifically for manufacturers, distributors, and industrial suppliers.
          </p>
          <div className="flex gap-4">
            <a
              href="/get-started"
              className="inline-block px-8 py-4 bg-black text-white font-bold hover:bg-gray-900"
            >
              GET A DEMO →
            </a>
            <a
              href="#case-study"
              className="inline-block px-8 py-4 border-2 border-black font-bold hover:bg-gray-100"
            >
              SEE RESULTS
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-12">Manufacturing Sales Challenges We Solve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-l-4 border-black">
              <h3 className="text-2xl font-bold mb-4">Complex Quote Management</h3>
              <p className="text-gray-700 mb-4">
                Custom products, volume pricing, special terms—our AI handles your complexity. 
                Generate accurate quotes in minutes while maintaining your pricing rules.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Multi-tier pricing automation</li>
                <li>✓ Custom product configurations</li>
                <li>✓ Instant revision tracking</li>
              </ul>
            </div>
            <div className="bg-white p-8 border-l-4 border-black">
              <h3 className="text-2xl font-bold mb-4">Long Sales Cycle Tracking</h3>
              <p className="text-gray-700 mb-4">
                Manufacturing deals take months. Our system ensures nothing falls through 
                the cracks during your extended sales cycles.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Automated follow-up sequences</li>
                <li>✓ Deal stage reminders</li>
                <li>✓ Relationship continuity tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="case-study">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-12 text-center">Real Manufacturing Success Story</h2>
          <div className="bg-gray-100 p-12 border-2 border-black max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-black mb-2">42%</div>
                <p className="font-mono text-sm">FASTER QUOTE TURNAROUND</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">38%</div>
                <p className="font-mono text-sm">MORE DEALS CLOSED</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">3.2x</div>
                <p className="font-mono text-sm">ROI IN YEAR ONE</p>
              </div>
            </div>
            <blockquote className="text-lg italic mb-4">
              "We've been in business 47 years. Relationships are everything to us. 
              This system handles the administrative burden so our salespeople can 
              focus on what they do best—building trust and solving customer problems."
            </blockquote>
            <p className="font-bold">- President, Midwest Industrial Distributor ($78M Revenue)</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-12">Built for How Manufacturing Sales Really Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Relationship-First Design</h3>
              <p className="text-gray-700">
                AI never contacts customers directly. Your team maintains full control 
                of all customer communications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Industry-Specific Features</h3>
              <p className="text-gray-700">
                Handles minimum order quantities, lead times, freight calculations, 
                and complex product specifications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legacy System Compatible</h3>
              <p className="text-gray-700">
                Works with your existing ERP, CRM, and inventory systems. 
                No painful migrations required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">See How It Works for Your Business</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a personalized demo showing exactly how we'll automate your sales process 
            without disrupting what makes you successful.
          </p>
          <a
            href="https://tidycal.com/noah3/boring-sales-growth"
            className="inline-block px-8 py-4 bg-white text-black font-bold hover:bg-gray-100"
          >
            SCHEDULE YOUR DEMO →
          </a>
          <p className="mt-4 text-gray-400">No pressure. No contracts. Just results.</p>
        </div>
      </section>
    </main>
  );
}