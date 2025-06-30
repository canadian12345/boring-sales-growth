export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-navy-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
            Help your sales team close{" "}
            <span className="text-green-500">40% more deals</span>
            <br />
            without hiring more people
          </h1>
          <p className="mt-6 text-xl text-navy-600 max-w-3xl mx-auto lg:mx-0">
            Strategic AI implementation that enhances your existing sales process. 
            No disruption. No job losses. Just measurable revenue growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#opportunity"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors"
            >
              See If This Makes Sense →
            </a>
            <a
              href="#roi"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy-700 bg-white border-2 border-navy-200 rounded-md hover:bg-navy-50 transition-colors"
            >
              Calculate Your ROI
            </a>
          </div>
          <p className="mt-8 text-sm text-navy-500">
            Trusted by 200+ business leaders seeing 40% revenue increases
          </p>
          <p className="mt-4 text-lg font-semibold text-navy-700">
            The Boring Eat The Bold™
          </p>
        </div>
      </div>
    </section>
  );
}