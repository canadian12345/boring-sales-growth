export default function ExecutiveSolutions() {
  const solutions = [
    {
      title: "Measurable Revenue Increase",
      description: "Track exact ROI with clear metrics: deals closed, cycle time reduced, revenue per rep increased.",
      icon: "📈",
      metric: "Average 40% increase in closed deals"
    },
    {
      title: "Competitive Advantage",
      description: "Move faster than competitors still using spreadsheets and manual follow-ups.",
      icon: "🏆",
      metric: "3x faster response times to opportunities"
    },
    {
      title: "Scalable Growth",
      description: "Grow revenue without proportionally growing headcount. Your team becomes force multipliers.",
      icon: "🚀",
      metric: "2x revenue per sales rep"
    },
    {
      title: "Protected Relationships",
      description: "AI enhances personal touch, never replaces it. Your team owns the relationships.",
      icon: "🤝",
      metric: "95% customer satisfaction maintained"
    }
  ];

  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            Strategic Solutions for Revenue Growth
          </h2>
          <p className="mt-4 text-xl text-navy-600 max-w-3xl mx-auto">
            Transform your sales operations into a competitive advantage
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{solution.title}</h3>
              <p className="text-navy-700 mb-4">{solution.description}</p>
              <p className="text-sm font-semibold text-green-600">{solution.metric}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-navy-700 mb-8">
            This isn&apos;t about technology. It&apos;s about giving your team superpowers.
          </p>
          <a
            href="#opportunity"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors"
          >
            Explore the Opportunity →
          </a>
        </div>
      </div>
    </section>
  );
}