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
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4">
            REAL RESULTS
          </h2>
          <p className="text-lg font-mono text-gray-700 max-w-3xl mx-auto uppercase">
            These aren&apos;t tech startups. They&apos;re traditional B2B companies that discovered how to compete.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <div key={index} className="bg-white border-4 border-black p-8 hover:bg-gray-50 transition-colors">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-black text-lg uppercase text-black">{study.company}</h3>
                  <span className="text-xs font-mono font-bold text-white bg-black px-3 py-1 uppercase">{study.industry}</span>
                </div>
              </div>
              
              <blockquote className="mb-6 border-l-4 border-black pl-4">
                <p className="font-mono text-sm text-black leading-relaxed">
                  &ldquo;{study.quote}&rdquo;
                </p>
              </blockquote>
              
              <div className="mb-6">
                <p className="font-bold font-mono text-black uppercase">{study.author}</p>
                <p className="text-sm font-mono text-gray-600">{study.title}</p>
              </div>
              
              <div className="border-t-4 border-black pt-6">
                <p className="font-bold font-mono text-black mb-3 uppercase">Key Results:</p>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono font-bold text-black">→</span>
                      <span className="text-sm font-mono text-black">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-black text-white p-8">
          <p className="text-2xl font-black uppercase mb-8">
            TYPICAL RESULTS FROM OUR PROVEN APPROACH
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-black">40%</p>
              <p className="font-mono text-sm uppercase">Revenue Increase</p>
            </div>
            <div>
              <p className="text-4xl font-black">90</p>
              <p className="font-mono text-sm uppercase">Days to ROI</p>
            </div>
            <div>
              <p className="text-4xl font-black">65%</p>
              <p className="font-mono text-sm uppercase">Time Saved</p>
            </div>
            <div>
              <p className="text-4xl font-black">0</p>
              <p className="font-mono text-sm uppercase">Relationships Lost</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}