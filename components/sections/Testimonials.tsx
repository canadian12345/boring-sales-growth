'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      age: "34",
      title: "VP Sales, Tech Distribution",
      company: "Austin • 89 employees • $34M revenue",
      image: "/testimonials/sarah-chen.jpg",
      quote: "Our young team was tech-savvy but drowning in admin. AI freed up 20 hours per week per rep. They're building stronger relationships now because they actually have time to listen. Revenue up 47% with the same headcount.",
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
      quote: "I've built this business on handshakes for 30 years. AI doesn't change that - it just makes sure we never drop the ball on follow-through. My reps still build relationships, they just do it 3x more efficiently now.",
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
      quote: "My diverse team (ages 24-67) all adopted this in one week. Why? Because it makes their actual job easier, not harder. The 20-somethings love the efficiency, the veterans love keeping their process. Everyone wins.",
      results: {
        metric: "100% adoption",
        timeframe: "One week",
        specifics: "Ages 24-67 all on board"
      }
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-navy-900 mb-4">
            Works for Any Team That Values Relationships
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            From tech-savvy millennials to relationship veterans. If you believe business is personal, this is for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-navy-200 rounded-full flex items-center justify-center text-2xl font-bold text-navy-700">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-navy-900">{testimonial.name}, {testimonial.age}</h3>
                  <p className="text-sm text-navy-600">{testimonial.title}</p>
                  <p className="text-xs text-navy-500 mt-1">{testimonial.company}</p>
                </div>
              </div>

              <blockquote className="text-navy-700 mb-6">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {testimonial.results.metric}
                </div>
                <p className="text-sm text-green-700 font-medium">
                  {testimonial.results.timeframe}
                </p>
                <p className="text-xs text-navy-600 mt-2">
                  {testimonial.results.specifics}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-navy-700 mb-6">
            Want to verify these results? We&apos;ll connect you directly with any of these CEOs.
          </p>
          <div className="inline-flex items-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900">$4.2M</div>
              <p className="text-sm text-navy-600">Additional revenue last month</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900">16 min</div>
              <p className="text-sm text-navy-600">Average time to first win</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900">100%</div>
              <p className="text-sm text-navy-600">Money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}