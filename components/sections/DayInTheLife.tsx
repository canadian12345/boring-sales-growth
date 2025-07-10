export default function DayInTheLife() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black mb-4">
            THE BORING DAY THAT PRODUCES EXTRAORDINARY RESULTS
          </h2>
          <p className="text-lg font-mono uppercase">
            How your top rep's day changes (Spoiler: it gets better, not busier)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="border-4 border-black bg-red-50">
            <div className="bg-red-600 text-white p-4">
              <h3 className="font-black text-xl">BEFORE: DROWNING IN BUSY WORK</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-4">
                <span className="font-mono font-bold">7:00 AM</span>
                <div className="flex-1">
                  <p className="font-bold">Already at desk, updating spreadsheets</p>
                  <p className="font-mono text-sm text-gray-600">Yesterday's orders still not entered</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="font-mono font-bold">9:00 AM</span>
                <div className="flex-1">
                  <p className="font-bold">Searching for customer info</p>
                  <p className="font-mono text-sm text-gray-600">"I know we talked about this..."</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="font-mono font-bold">11:00 AM</span>
                <div className="flex-1">
                  <p className="font-bold">Finally making first call</p>
                  <p className="font-mono text-sm text-gray-600">Already behind schedule</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="font-mono font-bold">2:00 PM</span>
                <div className="flex-1">
                  <p className="font-bold">Manually creating quotes</p>
                  <p className="font-mono text-sm text-gray-600">Same products, different day</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="font-mono font-bold">6:00 PM</span>
                <div className="flex-1">
                  <p className="font-bold">Still at office, catching up</p>
                  <p className="font-mono text-sm text-gray-600">Missing another family dinner</p>
                </div>
              </div>
              
              <div className="bg-red-100 p-4 mt-6">
                <p className="font-black text-red-900">RESULT: 3 deals closed, exhausted</p>
              </div>
            </div>
          </div>

          <div className="border-4 border-black bg-green-50">
            <div className="bg-green-600 text-white p-4">
              <h3 className="font-black text-xl">AFTER: FOCUSED ON RELATIONSHIPS</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-4">
                <span className="font-mono font-bold">8:00 AM</span>
                <div className="flex-1">
                  <p className="font-bold">Coffee + AI-suggested follow-ups</p>
                  <p className="font-mono text-sm text-gray-600">"Johnson needs to reorder this week"</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="font-mono font-bold">9:00 AM</span>
                <div className="flex-1">
                  <p className="font-bold">Calling 3 flagged customers</p>
                  <p className="font-mono text-sm text-gray-600">AI knows their buying patterns</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="font-mono font-bold">10:00 AM</span>
                <div className="flex-1">
                  <p className="font-bold">Golf with key prospect</p>
                  <p className="font-mono text-sm text-gray-600">AI prepped talking points on phone</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="font-mono font-bold">2:00 PM</span>
                <div className="flex-1">
                  <p className="font-bold">Back to find quotes ready</p>
                  <p className="font-mono text-sm text-gray-600">AI generated while you were out</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="font-mono font-bold">3:00 PM</span>
                <div className="flex-1">
                  <p className="font-bold">Writing thank-you notes</p>
                  <p className="font-mono text-sm text-gray-600">Personal touch that wins loyalty</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="font-mono font-bold">4:00 PM</span>
                <div className="flex-1">
                  <p className="font-bold">Heading to coach baseball</p>
                  <p className="font-mono text-sm text-gray-600">Work-life balance restored</p>
                </div>
              </div>
              
              <div className="bg-green-100 p-4 mt-6">
                <p className="font-black text-green-900">RESULT: 5 deals closed, home for dinner</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 border-4 border-black p-8 text-center">
          <h3 className="text-2xl font-black uppercase mb-6">
            THE BORING SECRET
          </h3>
          <p className="font-mono text-lg mb-8 max-w-3xl mx-auto">
            No 5am wake-ups. No hustle culture. No "10x your productivity" nonsense. 
            Just smart tools that handle the boring stuff so you can focus on what matters: 
            relationships that drive revenue.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div>
              <p className="text-3xl font-black">67%</p>
              <p className="font-mono text-sm">More selling time</p>
            </div>
            <div>
              <p className="text-3xl font-black">40%</p>
              <p className="font-mono text-sm">More deals closed</p>
            </div>
            <div>
              <p className="text-3xl font-black">3hrs</p>
              <p className="font-mono text-sm">Daily time saved</p>
            </div>
            <div>
              <p className="text-3xl font-black">100%</p>
              <p className="font-mono text-sm">More family time</p>
            </div>
          </div>
          
          <a href="#discovery" className="btn-primary">
            GET YOUR TIME (AND LIFE) BACK →
          </a>
        </div>
      </div>
    </section>
  );
}