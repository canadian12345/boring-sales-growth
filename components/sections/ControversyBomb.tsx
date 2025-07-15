export default function ControversyBomb() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container max-w-5xl mx-auto">
        <div className="border-4 border-red-600 bg-red-50 p-8 relative">
          <div className="absolute -top-4 left-8 bg-red-600 text-white px-4 py-1 font-black uppercase text-sm">
            ⚠️ WARNING: UNCOMFORTABLE TRUTH AHEAD
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase text-red-900">
            The Uncomfortable Truth About Your Sales Team
          </h3>
          
          <p className="text-lg sm:text-xl font-mono text-black leading-relaxed">
            Your best people are sabotaging your growth. Not maliciously—they just know you'll cave like you always do. 
            Last week, a client fired their entire sales team and rebuilt with AI-enforcement from day one. 
            Revenue up 67% in 6 months. Extreme? Maybe. Necessary? You tell me after reading this page.
          </p>
          
          <div className="mt-6 flex items-center justify-between border-t-4 border-red-300 pt-4">
            <p className="text-sm font-bold uppercase text-red-900">
              Choose discipline or choose decline
            </p>
            <p className="text-sm font-mono text-gray-700">
              Read time: 5 minutes. ROI: Millions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}