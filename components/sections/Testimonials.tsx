'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      age: "34",
      title: "VP Sales, Tech Distribution",
      company: "Austin • 89 employees • $34M revenue",
      image: "/testimonials/sarah-chen.jpg",
      quote: "I was losing my soul in spreadsheets. Now I'm back to what I love - actually talking to people. AI handles the boring stuff while I have real conversations. My wife says I'm myself again. Revenue's up too, but that's not why this matters.",
      results: {
        metric: "47% revenue growth",
        timeframe: "Same headcount",
        specifics: "20hrs/week back per rep"
      }
    },
    {
      name: "Mike Williams",
      age: "58",
      title: "Owner, Industrial Supply Co",
      company: "Cleveland • 127 employees • $18M revenue",
      image: "/testimonials/mike-williams.jpg",
      quote: "30 years of handshake deals. Was terrified AI would kill that. Instead, it gave us more time for handshakes. My old-school reps love it because they're back to doing what made us special - building relationships that last generations.",
      results: {
        metric: "3x more customer touches",
        timeframe: "Per rep per day",
        specifics: "Zero relationship quality loss"
      }
    },
    {
      name: "Jennifer Martinez",
      age: "41",
      title: "Sales Director, B2B Services",
      company: "Phoenix • 43 employees • $8.5M revenue",
      image: "/testimonials/jennifer-martinez.jpg",
      quote: "My 67-year-old top rep said 'Finally, I can sell like it's 1985 again - all relationships, no paperwork.' My millennials are having coffee meetings instead of updating CRMs. We're all doing business with soul again.",
      results: {
        metric: "100% adoption",
        timeframe: "One week",
        specifics: "Ages 24-67 all on board"
      }
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4">
            PEOPLE WHO KEPT THEIR SOULS
          </h2>
          <p className="text-lg font-mono text-gray-600 max-w-3xl mx-auto">
            REAL STORIES FROM BUSINESSES THAT CHOSE BORING GROWTH OVER DISRUPTION. RELATIONSHIPS INTACT.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-4 border-black bg-white p-8 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-black flex items-center justify-center text-2xl font-bold text-white font-mono">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-black uppercase font-mono">{testimonial.name}, {testimonial.age}</h3>
                  <p className="text-sm font-mono text-gray-600">{testimonial.title}</p>
                  <p className="text-xs font-mono text-gray-500 mt-1">{testimonial.company}</p>
                </div>
              </div>

              <blockquote className="font-mono text-sm text-black mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="border-4 border-black bg-gray-100 p-4">
                <div className="text-3xl font-black uppercase text-black mb-1">
                  {testimonial.results.metric}
                </div>
                <p className="text-sm font-mono font-bold text-black uppercase">
                  {testimonial.results.timeframe}
                </p>
                <p className="text-xs font-mono text-gray-600 mt-2">
                  {testimonial.results.specifics}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-mono text-black mb-8 uppercase">
            These aren&apos;t just clients. They&apos;re friends. Happy to introduce you.
          </p>
          <div className="inline-flex items-center gap-12">
            <div className="text-center">
              <div className="text-4xl font-black uppercase text-black">$4.2M</div>
              <p className="text-sm font-mono text-gray-600 uppercase">Additional revenue last month</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black uppercase text-black">16 MIN</div>
              <p className="text-sm font-mono text-gray-600 uppercase">Average time to first win</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black uppercase text-black">100%</div>
              <p className="text-sm font-mono text-gray-600 uppercase">Money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}