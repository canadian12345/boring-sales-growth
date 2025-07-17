import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/components/SchemaMarkup";
import LazySection from "@/components/LazySection";

export const metadata: Metadata = {
  title: "Results & Case Studies | 40% Close Rate Improvement | BoringSalesGrowth",
  description: "See how traditional B2B companies achieve 40% close rate improvements with AI sales automation. Real results from manufacturing, distribution, and wholesale clients.",
  keywords: "AI sales results, B2B case studies, sales automation ROI, manufacturing sales improvement",
  alternates: {
    canonical: "https://boringsalesgrowth.com/results",
  },
};

export default function ResultsPage() {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://boringsalesgrowth.com" },
    { name: "Results" }
  ]);

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI Sales Implementation Results",
    "description": "Case studies and results from B2B companies using AI sales automation",
    "url": "https://boringsalesgrowth.com/results",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "position": 1,
          "name": "Midwest Manufacturing: 43% Close Rate Improvement",
          "description": "How a $45M manufacturer increased close rates from 18% to 26% in 90 days"
        },
        {
          "@type": "CreativeWork",
          "position": 2,
          "name": "Industrial Distributor: $2.8M Additional Revenue",
          "description": "AI-powered follow-ups generated $2.8M in previously lost opportunities"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <main className="pt-16">
        <section className="bg-white py-20 border-b-4 border-black">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Real Results from<br/>
              <span className="text-gray-600">Real Companies Like Yours</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              No hypotheticals. No projections. Just verified results from traditional B2B companies 
              who took the leap and saw immediate returns.
            </p>
          </div>
        </section>

        <LazySection className="py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black mb-4">ROI Calculator</h2>
            <p className="text-xl mb-12 text-gray-600">See your potential improvement in 30 seconds</p>
            
            <div className="bg-white p-8 border-4 border-black max-w-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Current Monthly Leads</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-200"
                    placeholder="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Current Close Rate (%)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-200"
                    placeholder="20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Average Deal Size ($)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-200"
                    placeholder="25000"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white font-bold hover:bg-gray-900"
                >
                  CALCULATE MY IMPROVEMENT →
                </button>
              </form>
            </div>
          </div>
        </LazySection>

        <LazySection className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black mb-12">Success Stories</h2>
            
            <div className="space-y-12">
              <div className="bg-white p-8 border-l-8 border-black">
                <h3 className="text-2xl font-bold mb-4">
                  Midwest Manufacturing Co.
                  <span className="text-gray-500 text-lg ml-2">$45M Revenue</span>
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-mono text-gray-600">BEFORE</p>
                    <p className="text-3xl font-black">18%</p>
                    <p className="text-sm">Close Rate</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-gray-600">AFTER</p>
                    <p className="text-3xl font-black text-green-600">26%</p>
                    <p className="text-sm">Close Rate</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-gray-600">RESULT</p>
                    <p className="text-3xl font-black">+43%</p>
                    <p className="text-sm">Improvement</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Our veteran sales team was skeptical at first. But when they saw AI handling 
                  follow-ups and quote generation, they became believers. Now they close more 
                  deals in less time."
                </p>
                <p className="font-bold">- John Mitchell, VP Sales</p>
              </div>

              <div className="bg-white p-8 border-l-8 border-black">
                <h3 className="text-2xl font-bold mb-4">
                  Industrial Distribution Partners
                  <span className="text-gray-500 text-lg ml-2">$78M Revenue</span>
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-mono text-gray-600">LOST DEALS</p>
                    <p className="text-3xl font-black">$7.2M</p>
                    <p className="text-sm">Annual</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-gray-600">RECOVERED</p>
                    <p className="text-3xl font-black text-green-600">$2.8M</p>
                    <p className="text-sm">In 6 Months</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-gray-600">ROI</p>
                    <p className="text-3xl font-black">780%</p>
                    <p className="text-sm">First Year</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "We were losing deals simply because follow-ups fell through the cracks. 
                  AI fixed that overnight. The $2.8M we recovered paid for the system 20 times over."
                </p>
                <p className="font-bold">- Sarah Chen, President</p>
              </div>

              <div className="bg-white p-8 border-l-8 border-black">
                <h3 className="text-2xl font-bold mb-4">
                  Regional Medical Supplier
                  <span className="text-gray-500 text-lg ml-2">$32M Revenue</span>
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-mono text-gray-600">QUOTE TIME</p>
                    <p className="text-3xl font-black">3 Days</p>
                    <p className="text-sm">Average</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-gray-600">NOW</p>
                    <p className="text-3xl font-black text-green-600">2 Hours</p>
                    <p className="text-sm">With AI</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-gray-600">WIN RATE</p>
                    <p className="text-3xl font-black">+35%</p>
                    <p className="text-sm">Improvement</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Speed matters in our industry. Being first with accurate quotes wins deals. 
                  AI gave us that edge without sacrificing our personal touch."
                </p>
                <p className="font-bold">- Mike Thompson, Sales Director</p>
              </div>
            </div>
          </div>
        </LazySection>

        <section className="py-20 bg-black text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black mb-6">Ready for Results Like These?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Every day you wait is money left on the table. Let's discuss your specific situation.
            </p>
            <a
              href="https://tidycal.com/noah3/boring-sales-growth"
              className="inline-block px-8 py-4 bg-white text-black font-bold hover:bg-gray-100"
            >
              SCHEDULE YOUR ASSESSMENT →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}