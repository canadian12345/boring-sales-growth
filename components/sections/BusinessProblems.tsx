export default function BusinessProblems() {
  const timeTheft = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "3HRS DAILY ON DATA ENTRY",
      description: "TIME THAT SHOULD BE SPENT BUILDING RELATIONSHIPS",
      stat: "3HRS"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "90MIN ON EMAIL TAG",
      description: "JUST TRYING TO SCHEDULE MEETINGS",
      stat: "90MIN"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "2HRS ON REPORTS",
      description: "INTERNAL REPORTS NOBODY READS",
      stat: "2HRS"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "65% TOTAL TIME LOST",
      description: "TO TASKS THAT DON'T CLOSE DEALS",
      stat: "65%"
    }
  ];

  return (
    <section id="problems" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold uppercase tracking-tight text-black mb-4">
            THE PROBLEM ISN&apos;T YOUR SALES PROCESS.
            <span className="block">IT&apos;S THAT YOUR BEST PEOPLE ARE STUCK IN SPREADSHEETS.</span>
          </h2>
          <p className="text-lg font-mono uppercase text-black max-w-3xl mx-auto">
            YOUR RELATIONSHIP-FIRST APPROACH WORKS. BUT LOOK AT THE REALITY:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {timeTheft.map((item, index) => (
            <div key={index} className="bg-white border-4 border-black p-6 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <div className="text-3xl font-mono font-bold text-black mb-2">{item.stat}</div>
              <h3 className="font-mono font-bold text-black text-sm mb-2">{item.title}</h3>
              <p className="text-xs font-mono uppercase text-black">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border-4 border-black p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-mono font-bold uppercase text-black mb-4">
              MEANWHILE, WHAT HAPPENS TO THOSE LOST HOURS?
            </h3>
            <p className="text-lg font-mono uppercase text-black">
              THEY TURN INTO MISSED OPPORTUNITIES:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-100 border-4 border-black p-6">
              <h4 className="font-mono font-bold uppercase text-black mb-4">WITHOUT AI (REALITY NOW):</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-black mt-1">✗</span>
                  <span className="font-mono uppercase text-black">HOT LEADS COOL OFF WAITING FOR RESPONSES</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-black mt-1">✗</span>
                  <span className="font-mono uppercase text-black">GREAT RELATIONSHIPS DIE FROM MISSED FOLLOW-UPS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-black mt-1">✗</span>
                  <span className="font-mono uppercase text-black">YOUR BEST PEOPLE BURN OUT ON BUSYWORK</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-black mt-1">✗</span>
                  <span className="font-mono uppercase text-black">COMPETITORS CAPTURE YOUR &quot;TOO BUSY&quot; OPPORTUNITIES</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border-4 border-black p-6">
              <h4 className="font-mono font-bold uppercase text-black mb-4">WITH AI (YOUR FUTURE):</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-black mt-1">✓</span>
                  <span className="font-mono uppercase text-black">100% FOLLOW-UP RATE, PERFECT TIMING</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-black mt-1">✓</span>
                  <span className="font-mono uppercase text-black">RELATIONSHIPS DEEPEN WITH CONSISTENT TOUCH</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-black mt-1">✓</span>
                  <span className="font-mono uppercase text-black">TEAM ENERGIZED, FOCUSED ON WHAT MATTERS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-black mt-1">✓</span>
                  <span className="font-mono uppercase text-black">YOU BECOME THE &quot;ALWAYS RESPONSIVE&quot; VENDOR</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-black text-white p-6 text-center">
            <p className="text-xl font-mono font-bold uppercase mb-2">
              YOU DON&apos;T NEED NEW SALESPEOPLE.
            </p>
            <p className="text-lg font-mono uppercase">
              YOU NEED TO UNLEASH THE ONES YOU HAVE.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#solutions" className="inline-flex items-center justify-center px-8 py-4 text-lg font-mono font-bold uppercase bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-colors">
            SEE THE SOLUTION
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}