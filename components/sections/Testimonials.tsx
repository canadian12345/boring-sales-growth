'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      age: "34",
      title: "VP Sales, Tech Distribution",
      company: "Austin • 89 employees • $34M revenue",
      image: "/testimonials/sarah-chen.jpg",
      quote: "Everyone said we'd have to become 'data-driven' to compete. Instead, we stayed relationship-driven and used AI to kill admin work. Our culture is stronger than ever. Young reps learn from veterans. Veterans have time to mentor. This is the company I wanted to build.",
      results: {
        metric: "47% revenue growth",
        timeframe: "Culture intact",
        specifics: "Zero identity crisis"
      }
    },
    {
      name: "Mike Williams",
      age: "58",
      title: "Owner, Industrial Supply Co",
      company: "Cleveland • 127 employees • $18M revenue",
      image: "/testimonials/mike-williams.jpg",
      quote: "We built this company on trust and handshakes. Other 'solutions' wanted us to become a tech company. You helped us become a better version of ourselves. Same values, same culture, just without the soul-crushing admin. My father would be proud.",
      results: {
        metric: "3rd generation thriving",
        timeframe: "Family culture preserved",
        specifics: "40% growth, 100% us"
      }
    },
    {
      name: "Jennifer Martinez",
      age: "41",
      title: "Sales Director, B2B Services",
      company: "Phoenix • 43 employees • $8.5M revenue",
      image: "/testimonials/jennifer-martinez.jpg",
      quote: "Consultants kept telling us to 'transform' our culture. Thank God we found you instead. We're still the company where deals happen over coffee and trust matters more than metrics. We just close twice as many now. Our identity is our edge.",
      results: {
        metric: "Culture score: Perfect",
        timeframe: "Employee retention: 98%",
        specifics: "Values unchanged, revenue doubled"
      }
    }
  ];

  return (
    <section id="success" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black uppercase tracking-tight text-black mb-4">
            COMPANIES THAT REFUSED TO LOSE THEIR IDENTITY
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-mono text-gray-600 max-w-3xl mx-auto">
            REAL STORIES OF PRESERVING CULTURE WHILE GROWING. NO COMPROMISES ON VALUES.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-4 border-black bg-white p-4 sm:p-6 lg:p-8 hover:bg-gray-50 transition-colors sm:col-span-1">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black flex items-center justify-center text-lg sm:text-2xl font-bold text-white font-mono flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-black uppercase font-mono text-sm sm:text-base">{testimonial.name}, {testimonial.age}</h3>
                  <p className="text-xs sm:text-sm font-mono text-gray-600">{testimonial.title}</p>
                  <p className="text-xs font-mono text-gray-500 mt-1 break-words">{testimonial.company}</p>
                </div>
              </div>

              <blockquote className="font-mono text-xs sm:text-sm text-black mb-4 sm:mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="border-4 border-black bg-gray-100 p-3 sm:p-4">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-black mb-1">
                  {testimonial.results.metric}
                </div>
                <p className="text-xs sm:text-sm font-mono font-bold text-black uppercase">
                  {testimonial.results.timeframe}
                </p>
                <p className="text-xs font-mono text-gray-600 mt-1 sm:mt-2">
                  {testimonial.results.specifics}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-16 text-center">
          <p className="text-sm sm:text-base lg:text-lg font-mono text-black mb-6 sm:mb-8 uppercase">
            Every client kept their culture. Every single one. That&apos;s the point.
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-black">100%</div>
              <p className="text-xs sm:text-sm font-mono text-gray-600 uppercase">Culture preservation rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-black">0</div>
              <p className="text-xs sm:text-sm font-mono text-gray-600 uppercase">Identity crises caused</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-black">47%</div>
              <p className="text-xs sm:text-sm font-mono text-gray-600 uppercase">Avg revenue growth anyway</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}