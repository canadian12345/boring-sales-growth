export default function Philosophy() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          The Boring Eat The Bold™
        </h2>
        <p className="text-xl text-navy-200 mb-12 leading-relaxed">
          While Silicon Valley startups burn through millions chasing the next shiny object, 
          established companies with proven business models are quietly dominating their markets. 
          <br /><br />
          <span className="text-white font-semibold">Your &ldquo;boring&rdquo; business has what they don&apos;t:</span> 
          Real customers. Real revenue. Real relationships.
          <br /><br />
          Now imagine adding AI to that foundation. Not to replace what works, 
          but to amplify it. That&apos;s how the boring eat the bold.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
          <div>
            <h3 className="text-green-400 font-bold mb-2">The Bold</h3>
            <ul className="text-navy-300 space-y-1 text-sm">
              <li>• Chasing trends</li>
              <li>• Burning cash</li>
              <li>• Breaking things</li>
              <li>• All hype, no profit</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 font-bold mb-2">The Boring</h3>
            <ul className="text-navy-300 space-y-1 text-sm">
              <li>• Building relationships</li>
              <li>• Growing steadily</li>
              <li>• Improving systems</li>
              <li>• Consistent profits</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 font-bold mb-2">The Winners</h3>
            <ul className="text-navy-300 space-y-1 text-sm">
              <li>• Boring + AI</li>
              <li>• Proven + Enhanced</li>
              <li>• Steady + Scalable</li>
              <li>• Traditional + Tech</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}