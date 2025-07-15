export default function Credibility() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center uppercase">
          Why CEOs Trust BoringSalesGrowth
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-900 text-white p-6 text-center">
            <p className="text-4xl font-black text-green-400 mb-2">200+</p>
            <p className="font-bold uppercase">Implementations</p>
            <p className="text-sm font-mono mt-2">Without a single failure</p>
          </div>
          
          <div className="bg-gray-900 text-white p-6 text-center">
            <p className="text-4xl font-black text-green-400 mb-2">3.7</p>
            <p className="font-bold uppercase">Years Average</p>
            <p className="text-sm font-mono mt-2">Client relationship</p>
          </div>
          
          <div className="bg-gray-900 text-white p-6 text-center">
            <p className="text-4xl font-black text-green-400 mb-2">0</p>
            <p className="font-bold uppercase">Layoffs Required</p>
            <p className="text-sm font-mono mt-2">We fix people, not replace them</p>
          </div>
          
          <div className="bg-gray-900 text-white p-6 text-center">
            <p className="text-4xl font-black text-green-400 mb-2">100%</p>
            <p className="font-bold uppercase">Veteran Adoption</p>
            <p className="text-sm font-mono mt-2">Guaranteed or refund</p>
          </div>
        </div>
        
        <div className="bg-gray-100 border-4 border-black p-8">
          <h3 className="text-xl font-black mb-6 uppercase text-center">
            The Only AI Company That Gets It
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-black mb-4">What Others Do:</h4>
              <ul className="space-y-2 font-mono text-sm">
                <li className="text-red-600">✗ Replace humans with bots</li>
                <li className="text-red-600">✗ Disrupt your culture</li>
                <li className="text-red-600">✗ Create resistance</li>
                <li className="text-red-600">✗ Promise revolution</li>
                <li className="text-red-600">✗ Deliver chaos</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black mb-4">What We Do:</h4>
              <ul className="space-y-2 font-mono text-sm">
                <li className="text-green-600">✓ Amplify human relationships</li>
                <li className="text-green-600">✓ Preserve what works</li>
                <li className="text-green-600">✓ Create advocates</li>
                <li className="text-green-600">✓ Promise discipline</li>
                <li className="text-green-600">✓ Deliver growth</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}