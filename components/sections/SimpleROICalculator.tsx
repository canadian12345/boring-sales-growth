'use client';

import { useState } from 'react';

export default function SimpleROICalculator() {
  const [revenue, setRevenue] = useState('10000000');
  const [showResults, setShowResults] = useState(false);
  
  const calculateROI = () => {
    const currentRevenue = parseFloat(revenue) || 0;
    const additionalRevenue = currentRevenue * 0.4; // 40% growth
    const monthlyGrowth = additionalRevenue / 12;
    const typicalFee = currentRevenue < 15000000 ? 42000 : currentRevenue < 50000000 ? 78000 : 120000; // Annual fee estimate
    const roiMultiple = additionalRevenue / typicalFee;
    
    return {
      current: currentRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      additional: additionalRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      monthly: monthlyGrowth.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      roi: roiMultiple.toFixed(0)
    };
  };
  
  const roi = calculateROI();

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black mb-4">
            YOUR 40% GROWTH CALCULATOR
          </h2>
          <p className="text-lg font-mono uppercase">
            One number. Big results. No BS.
          </p>
        </div>

        <div className="border-4 border-black bg-white">
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black uppercase mb-4">
                What if your current team could close 40% more deals?
              </h3>
              <p className="font-mono text-gray-600">
                (This isn&apos;t fantasy. It&apos;s the average across 200+ clients.)
              </p>
            </div>

            <div className="max-w-md mx-auto mb-8">
              <label className="block text-sm font-black uppercase mb-3">
                YOUR ANNUAL REVENUE
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-mono">$</span>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => {
                    setRevenue(e.target.value);
                    setShowResults(false);
                  }}
                  className="w-full pl-12 pr-4 py-4 text-2xl font-mono border-4 border-black focus:outline-none focus:ring-4 focus:ring-gray-400"
                  placeholder="10,000,000"
                />
              </div>
              <div className="mt-4 text-center">
                <input
                  type="range"
                  min="1000000"
                  max="100000000"
                  step="1000000"
                  value={revenue}
                  onChange={(e) => {
                    setRevenue(e.target.value);
                    setShowResults(false);
                  }}
                  className="w-full accent-black"
                />
                <div className="flex justify-between text-xs font-mono mt-2">
                  <span>$1M</span>
                  <span>$100M</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={() => setShowResults(true)}
                className="px-12 py-4 bg-black text-white font-black uppercase text-lg hover:bg-gray-900 transition-colors"
              >
                CALCULATE MY GROWTH →
              </button>
            </div>

            {showResults && (
              <div className="border-4 border-black bg-yellow-50 p-8">
                <h4 className="font-black uppercase text-xl mb-6 text-center">
                  YOUR BORING (BUT BEAUTIFUL) RESULTS:
                </h4>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="font-mono">Your current revenue:</span>
                    <span className="text-2xl font-black">${roi.current}</span>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <span className="font-mono">Additional revenue (40%):</span>
                    <span className="text-3xl font-black text-green-600">+${roi.additional}</span>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <span className="font-mono">Monthly growth:</span>
                    <span className="text-xl font-black">${roi.monthly}/mo</span>
                  </div>
                  
                  <div className="border-t-4 border-black pt-4 flex justify-between items-end">
                    <span className="font-mono">ROI on our fee:</span>
                    <span className="text-4xl font-black">{roi.roi}X</span>
                  </div>
                </div>

                <div className="bg-black text-white p-6 text-center">
                  <p className="font-black uppercase mb-2">
                    Without hiring a single person.
                  </p>
                  <p className="font-mono text-sm">
                    Just your existing team, working smarter not harder.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-mono text-lg mb-6">
            &ldquo;But how?&rdquo; Simple. We fix what wastes time. Your team sells more.
          </p>
          <a href="#case-studies" className="btn-primary">
            SEE HOW 200+ COMPANIES DID IT →
          </a>
        </div>
      </div>
    </section>
  );
}