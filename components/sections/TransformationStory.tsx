export default function TransformationStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-12 text-center">
          From "This Too Shall Pass" to "This Changes Everything"
        </h2>
        
        <div className="bg-white border-4 border-gray-200 p-8 mb-8">
          <h3 className="text-2xl font-black mb-4">
            Midwest Manufacturing: 73-Year-Old Company, 30-Year Veterans
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 p-6">
              <h4 className="font-black text-lg mb-4 text-red-900">The Situation:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Sales team average tenure: 27 years</li>
                <li>• CRM adoption after 3 attempts: Zero</li>
                <li>• Follow-up rate: "When I remember"</li>
                <li>• President considering early retirement from frustration</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 text-white p-6">
              <h4 className="font-black text-lg mb-4 text-yellow-400">The Turning Point:</h4>
              <p className="text-sm">
                Started with ONE enforced discipline: Follow up within 24 hours, period. 
                AI made it automatic—draft ready, reminder persistent, no excuses.
              </p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-8 border-yellow-500 p-6 mb-8">
            <h4 className="font-black text-lg mb-4">The First 4 Weeks:</h4>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="font-black text-red-600">Week 1</p>
                <p className="text-sm">Grumbling and resistance</p>
              </div>
              <div>
                <p className="font-black text-yellow-600">Week 2</p>
                <p className="text-sm">First saved deal from fast follow-up</p>
              </div>
              <div>
                <p className="font-black text-green-600">Week 3</p>
                <p className="text-sm">Veteran rep: "Okay, what else can this thing do?"</p>
              </div>
              <div>
                <p className="font-black text-green-700">Week 4</p>
                <p className="text-sm">Team asking for MORE automation</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border-4 border-green-600 p-8 mb-8">
            <h4 className="font-black text-xl mb-6 text-green-900">Results After 90 Days:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Follow-up completion:</span>
                    <span className="font-black">97% (AI-enforced)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Revenue increase:</span>
                    <span className="font-black text-green-600">+42%</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Staff turnover:</span>
                    <span className="font-black">Zero</span>
                  </li>
                  <li className="flex justify-between">
                    <span>President's view:</span>
                    <span className="font-black">"I enjoy Mondays again"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 text-white p-8">
          <blockquote className="text-xl font-bold mb-6">
            "We didn't change what made us successful—relationships, expertise, trust. 
            We just made sure the basics that support those relationships actually happen. 
            Every. Single. Day."
          </blockquote>
          <p className="font-black text-yellow-400">
            — Jim Mitchell, President, Midwest Manufacturing
          </p>
          <p className="text-sm mt-2 text-gray-400">
            $15M distributor, 47 employees, competing against nationals
          </p>
        </div>
        
        <div className="mt-12 text-center bg-green-600 text-white p-8">
          <h3 className="text-2xl font-black mb-4">
            The Critical Insight:
          </h3>
          <p className="text-lg max-w-3xl mx-auto">
            The same veterans who resisted "another system" became the biggest advocates 
            once they saw AI handling the boring stuff so they could focus on relationships.
          </p>
        </div>
      </div>
    </section>
  );
}