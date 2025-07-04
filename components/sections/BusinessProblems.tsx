export default function BusinessProblems() {
  const timeTheft = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "3hrs Daily on Data Entry",
      description: "Time that should be spent building relationships",
      stat: "3hrs",
      color: "red"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "90min on Email Tag",
      description: "Just trying to schedule meetings",
      stat: "90min",
      color: "red"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "2hrs on Reports",
      description: "Internal reports nobody reads",
      stat: "2hrs",
      color: "red"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "65% Total Time Lost",
      description: "To tasks that don't close deals",
      stat: "65%",
      color: "red"
    }
  ];

  return (
    <section id="problems" className="section-padding bg-navy-50/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-navy-900 mb-4">
            The Problem Isn't Your Sales Process.
            <span className="block">It's That Your Best People Are Stuck in Spreadsheets.</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Your relationship-first approach works. But look at the reality:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {timeTheft.map((item, index) => (
            <div key={index} className="card p-6 hover:border-red-200 hover:shadow-lg">
              <div className={`w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">{item.stat}</div>
              <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-sm text-navy-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Meanwhile, What Happens to Those Lost Hours?
            </h3>
            <p className="text-lg text-navy-600">
              They turn into missed opportunities:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="font-bold text-red-900 mb-4">Without AI (Reality Now):</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-navy-700">Hot leads cool off waiting for responses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-navy-700">Great relationships die from missed follow-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-navy-700">Your best people burn out on busywork</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-navy-700">Competitors capture your "too busy" opportunities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-green-900 mb-4">With AI (Your Future):</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-navy-700">100% follow-up rate, perfect timing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-navy-700">Relationships deepen with consistent touch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-navy-700">Team energized, focused on what matters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-navy-700">You become the "always responsive" vendor</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-navy-900 text-white rounded-lg p-6 text-center">
            <p className="text-xl font-bold mb-2">
              You don't need new salespeople.
            </p>
            <p className="text-lg">
              You need to unleash the ones you have.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#solutions" className="btn-primary text-lg px-8 py-4">
            See The Solution
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}