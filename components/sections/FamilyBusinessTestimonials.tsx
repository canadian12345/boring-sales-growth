'use client';

export default function FamilyBusinessTestimonials() {
  const testimonials = [
    {
      name: "Robert Henderson III",
      generation: "3rd Generation",
      company: "Henderson Industrial Supply",
      location: "Pittsburgh, PA • Founded 1952",
      quote: "My grandfather started this company with a handshake and a promise. I was terrified AI would destroy that legacy. Instead, it strengthened it. We're more personal than ever - we just don't drown in paperwork anymore. Grandpa would be proud.",
      results: "45% growth, culture stronger than ever, son excited to be 4th generation",
      highlight: "Zero family values compromised"
    },
    {
      name: "Maria Gonzalez",
      generation: "2nd Generation",
      company: "Gonzalez & Sons Distribution",
      location: "San Antonio, TX • Founded 1978",
      quote: "Papa built this business on relationships. When competitors started using AI, I thought we'd have to choose: our values or survival. Noah showed us we could have both. We're still the company Papa built - just 3x bigger.",
      results: "Won back 5 accounts from 'modern' competitors",
      highlight: "Daughter joining business after seeing growth"
    },
    {
      name: "David & James Miller",
      generation: "Brothers, 2nd Gen",
      company: "Miller Brothers Manufacturing",
      location: "Milwaukee, WI • Founded 1967",
      quote: "Dad always said 'People buy from people.' We almost lost the business trying to stay 'traditional.' This system let us be MORE traditional - more lunches, more golf, more relationships. Dad's actually jealous of our tools.",
      results: "From near bankruptcy to 52% growth in 8 months",
      highlight: "Both our kids now want to join the business"
    },
    {
      name: "Patricia Chang-Williams",
      generation: "Married into 3rd Gen",
      company: "Williams Tool & Die",
      location: "Detroit, MI • Founded 1946",
      quote: "I married into this family business. Watched it struggle as 'outsider' ideas were rejected. This was different - it honored the family way while solving real problems. Even my father-in-law loves it (and he hates everything new).",
      results: "Family meetings now about growth, not survival",
      highlight: "In-laws finally see me as 'real' family"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black mb-4">
            FAMILY BUSINESSES THAT KEPT THEIR SOUL
          </h2>
          <p className="text-lg font-mono uppercase">
            Multi-generation companies that grew without losing what grandpa built
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-4 border-black bg-gray-50 p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-black uppercase text-lg">{testimonial.name}</h3>
                  <p className="font-mono text-sm text-gray-600">{testimonial.generation}</p>
                </div>
                <div className="bg-black text-white px-3 py-1">
                  <p className="font-mono text-xs uppercase">Family Owned</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="font-bold font-mono text-sm mb-1">{testimonial.company}</p>
                <p className="font-mono text-xs text-gray-600">{testimonial.location}</p>
              </div>
              
              <blockquote className="border-l-4 border-black pl-4 mb-6">
                <p className="font-mono text-sm leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              
              <div className="bg-yellow-100 border-2 border-black p-4 mb-4">
                <p className="font-black uppercase text-sm mb-1">RESULT:</p>
                <p className="font-mono text-sm">{testimonial.results}</p>
              </div>
              
              <div className="text-center">
                <p className="font-black uppercase text-lg">{testimonial.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black text-white p-12 text-center">
          <h3 className="text-2xl font-black uppercase mb-6">
            THE FAMILY BUSINESS DIFFERENCE
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div>
              <p className="text-3xl font-black mb-2">47</p>
              <p className="font-mono text-sm uppercase">Family businesses helped</p>
            </div>
            <div>
              <p className="text-3xl font-black mb-2">100%</p>
              <p className="font-mono text-sm uppercase">Kept family values</p>
            </div>
            <div>
              <p className="text-3xl font-black mb-2">3.2</p>
              <p className="font-mono text-sm uppercase">Avg generations preserved</p>
            </div>
            <div>
              <p className="text-3xl font-black mb-2">41%</p>
              <p className="font-mono text-sm uppercase">Avg revenue growth</p>
            </div>
          </div>
          
          <p className="text-lg font-mono mb-6">
            Your grandfather&apos;s values + Modern tools = Unstoppable legacy
          </p>
          
          <a href="#discovery" className="inline-block px-8 py-4 bg-white text-black font-bold uppercase hover:bg-gray-100">
            PROTECT YOUR FAMILY LEGACY →
          </a>
        </div>

        <div className="mt-12 border-4 border-black bg-gray-100 p-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl font-black uppercase mb-4">
              &ldquo;THE BEST TIME TO STRENGTHEN A FAMILY BUSINESS WAS 20 YEARS AGO.
              THE SECOND BEST TIME IS NOW.&rdquo;
            </p>
            <p className="font-mono">
              Before your competitors force you to choose between your values and survival.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}