import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/components/SchemaMarkup";
import LazySection from "@/components/LazySection";

export const metadata: Metadata = {
  title: "AI Sales Resources & Guides | BoringSalesGrowth",
  description: "Free resources to help traditional B2B companies implement AI sales automation. Guides, templates, and tools for manufacturers, distributors, and wholesalers.",
  keywords: "AI sales resources, B2B sales guides, sales automation templates, AI implementation guide",
  alternates: {
    canonical: "https://boringsalesgrowth.com/resources",
  },
};

export default function ResourcesPage() {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://boringsalesgrowth.com" },
    { name: "Resources" }
  ]);

  const resourcesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI Sales Implementation Resources",
    "description": "Educational resources for B2B companies implementing AI sales automation",
    "url": "https://boringsalesgrowth.com/resources"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesSchema) }}
      />
      <main className="pt-16">
        <section className="bg-white py-20 border-b-4 border-black">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Resources for<br/>
              <span className="text-gray-600">Practical AI Implementation</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              No fluff. No theory. Just practical guides and tools to help your sales team 
              embrace AI without disrupting what works.
            </p>
          </div>
        </section>

        <LazySection className="py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black mb-12">Implementation Guides</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border-2 border-black hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">
                  The Executive's Guide to AI Sales Implementation
                </h3>
                <p className="text-gray-700 mb-6">
                  A no-nonsense roadmap for C-suite leaders. Learn how to implement AI 
                  without disrupting your team or culture.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>90-day implementation timeline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Change management strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>ROI measurement framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Common pitfalls to avoid</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-black text-white font-bold hover:bg-gray-900">
                  DOWNLOAD GUIDE →
                </button>
              </div>

              <div className="bg-white p-8 border-2 border-black hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">
                  Overcoming Sales Team Resistance to AI
                </h3>
                <p className="text-gray-700 mb-6">
                  Practical psychology for managers. Turn your most resistant team members 
                  into AI champions.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Understanding resistance psychology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Building trust through pilots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Success story templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Team communication scripts</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-black text-white font-bold hover:bg-gray-900">
                  DOWNLOAD GUIDE →
                </button>
              </div>

              <div className="bg-white p-8 border-2 border-black hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">
                  AI ROI Calculator Template
                </h3>
                <p className="text-gray-700 mb-6">
                  Prove the value before you invest. Our Excel template helps you calculate 
                  exact ROI for your specific situation.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Customizable for your metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Time savings calculator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Revenue impact projections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Payback period analysis</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-black text-white font-bold hover:bg-gray-900">
                  DOWNLOAD TEMPLATE →
                </button>
              </div>

              <div className="bg-white p-8 border-2 border-black hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">
                  30-Day AI Pilot Playbook
                </h3>
                <p className="text-gray-700 mb-6">
                  Test AI with minimal risk. Our proven playbook for running successful 
                  pilot programs.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Day-by-day implementation plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Success metrics checklist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Team selection criteria</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Go/no-go decision framework</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-black text-white font-bold hover:bg-gray-900">
                  DOWNLOAD PLAYBOOK →
                </button>
              </div>
            </div>
          </div>
        </LazySection>

        <LazySection className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black mb-12">Industry-Specific Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-black mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
                <p className="text-gray-700 mb-4">
                  AI implementation guides tailored for complex products and long sales cycles
                </p>
                <a href="#" className="font-mono text-sm hover:underline">
                  VIEW RESOURCES →
                </a>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-black mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Distribution</h3>
                <p className="text-gray-700 mb-4">
                  Tools for managing dealer networks and multi-tier pricing with AI
                </p>
                <a href="#" className="font-mono text-sm hover:underline">
                  VIEW RESOURCES →
                </a>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-black mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <p className="text-gray-700 mb-4">
                  Compliance-focused AI guides for medical equipment and supply companies
                </p>
                <a href="#" className="font-mono text-sm hover:underline">
                  VIEW RESOURCES →
                </a>
              </div>
            </div>
          </div>
        </LazySection>

        <section className="py-20 bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black mb-6">Need Personalized Guidance?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Sometimes a conversation beats a download. Let's discuss your specific challenges.
            </p>
            <a
              href="https://tidycal.com/noah3/boring-sales-growth"
              className="inline-block px-8 py-4 bg-white text-black font-bold hover:bg-gray-100"
            >
              BOOK A CONSULTATION →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}