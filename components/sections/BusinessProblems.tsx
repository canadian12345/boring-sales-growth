export default function BusinessProblems() {
  const problems = [
    {
      title: "Revenue Plateau",
      description: "Your sales have hit a ceiling and traditional methods aren't moving the needle anymore.",
      stat: "87%",
      statLabel: "of companies plateau without process innovation"
    },
    {
      title: "Competitors Getting Ahead",
      description: "Modern competitors are closing deals faster while you're stuck with manual processes.",
      stat: "3x",
      statLabel: "faster sales cycles with AI-enabled teams"
    },
    {
      title: "Sales Team Overwhelmed",
      description: "Your best performers are drowning in admin work instead of selling.",
      stat: "65%",
      statLabel: "of sales time wasted on non-selling activities"
    },
    {
      title: "Manual Processes Limiting Growth",
      description: "Scaling means hiring more people, but quality talent is expensive and scarce.",
      stat: "$1.2M",
      statLabel: "average cost of scaling a 10-person sales team"
    }
  ];

  return (
    <section id="problems" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            The Revenue Growth Challenge
          </h2>
          <p className="mt-4 text-xl text-navy-600 max-w-3xl mx-auto">
            You know these problems are holding your company back
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-navy-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-navy-900">{problem.title}</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-500">{problem.stat}</div>
                  <div className="text-sm text-navy-600">{problem.statLabel}</div>
                </div>
              </div>
              <p className="text-navy-700">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}