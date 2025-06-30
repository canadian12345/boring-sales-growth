export default function CaseStudies() {
  const studies = [
    {
      company: "Midwest Manufacturing Inc.",
      industry: "Manufacturing",
      quote: "Our 62-year-old top salesperson said he'd never use 'computer stuff.' Now he closes 40% more deals because the AI remembers every customer detail for him. He calls it his 'secret weapon.'",
      author: "Jim Patterson",
      title: "CEO",
      results: ["40% increase in deals closed", "Zero customer relationships lost", "3-month payback period"]
    },
    {
      company: "Continental Distribution Partners",
      industry: "Distribution",
      quote: "We were losing deals to a competitor half our size. Three months after implementing BoringSales' system, we won back two major accounts and increased revenue 38%.",
      author: "Sarah Chen",
      title: "President",
      results: ["38% revenue increase", "Won back 2 major accounts", "50% faster quote turnaround"]
    },
    {
      company: "Professional Services Group",
      industry: "B2B Services",
      quote: "I was skeptical about AI in our relationship-based business. But when our follow-up rate went from 60% to 95% automatically, I became a believer. Revenue up 42% in 90 days.",
      author: "Michael Torres",
      title: "Owner",
      results: ["42% revenue growth", "95% follow-up rate", "35% shorter sales cycle"]
    }
  ];

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Real Results from Companies Like Yours
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            These aren&apos;t tech startups. They&apos;re traditional B2B companies that discovered how to compete without losing their soul.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <div key={index} className="bg-navy-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-navy-900">{study.company}</h3>
                  <span className="text-sm text-navy-600 bg-white px-3 py-1 rounded-full">{study.industry}</span>
                </div>
              </div>
              
              <blockquote className="mb-6">
                <p className="text-navy-700 italic leading-relaxed">
                  &ldquo;{study.quote}&rdquo;
                </p>
              </blockquote>
              
              <div className="mb-6">
                <p className="font-semibold text-navy-900">{study.author}</p>
                <p className="text-sm text-navy-600">{study.title}</p>
              </div>
              
              <div className="border-t border-navy-200 pt-6">
                <p className="font-semibold text-navy-900 mb-3">Key Results:</p>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-navy-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-green-50 rounded-xl p-8">
          <p className="text-2xl font-bold text-navy-900 mb-4">
            Average Results Across 200+ Implementations
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-green-500">40%</p>
              <p className="text-navy-700">Revenue Increase</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-500">90</p>
              <p className="text-navy-700">Days to ROI</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-500">65%</p>
              <p className="text-navy-700">Time Saved on Admin</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-500">0</p>
              <p className="text-navy-700">Relationships Lost</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}