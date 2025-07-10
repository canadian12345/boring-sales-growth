'use client';

import { useState } from 'react';

export default function DetailedROICalculator() {
  const [inputs, setInputs] = useState({
    salesReps: '10',
    avgDealSize: '50000',
    dealsPerRep: '4',
    closeRate: '20',
    hoursOnAdmin: '15'
  });
  
  const [showResults, setShowResults] = useState(false);
  
  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
    setShowResults(false);
  };
  
  const calculateROI = () => {
    const reps = parseFloat(inputs.salesReps) || 0;
    const dealSize = parseFloat(inputs.avgDealSize) || 0;
    const dealsPerMonth = parseFloat(inputs.dealsPerRep) || 0;
    const closeRate = parseFloat(inputs.closeRate) / 100 || 0;
    const adminHours = parseFloat(inputs.hoursOnAdmin) || 0;
    
    // Current state
    const currentMonthlyDeals = reps * dealsPerMonth * closeRate;
    const currentAnnualRevenue = currentMonthlyDeals * dealSize * 12;
    
    // With AI improvements - more conservative for credibility
    const improvedCloseRate = Math.min(closeRate * 1.25, 0.35); // 25% improvement, max 35%
    const hoursRecovered = adminHours * 0.5; // 50% admin reduction
    const additionalSellingTime = hoursRecovered / 40; // Convert to % of work week
    const improvedDealsPerRep = dealsPerMonth * (1 + additionalSellingTime * 0.7); // 70% of time recovered goes to selling
    
    const improvedMonthlyDeals = reps * improvedDealsPerRep * improvedCloseRate;
    const improvedAnnualRevenue = improvedMonthlyDeals * dealSize * 12;
    const additionalRevenue = improvedAnnualRevenue - currentAnnualRevenue;
    
    // Investment calculation - value-based pricing
    const annualRevenue = currentAnnualRevenue;
    // Rough estimate: investment is typically 3-5% of additional revenue generated
    const investmentRate = 0.04; // 4% of additional revenue
    const estimatedInvestment = additionalRevenue * investmentRate;
    const roi = additionalRevenue / estimatedInvestment;
    const paybackMonths = (estimatedInvestment / (additionalRevenue / 12));
    
    return {
      currentRevenue: currentAnnualRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      improvedRevenue: improvedAnnualRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      additionalRevenue: additionalRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      monthlyGrowth: (additionalRevenue / 12).toLocaleString('en-US', { maximumFractionDigits: 0 }),
      newCloseRate: (improvedCloseRate * 100).toFixed(0),
      hoursBack: hoursRecovered.toFixed(0),
      roi: Math.min(roi, 15).toFixed(0), // Cap at 15X for credibility
      payback: paybackMonths.toFixed(1),
      investment: estimatedInvestment.toLocaleString('en-US', { maximumFractionDigits: 0 })
    };
  };
  
  const results = calculateROI();

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black mb-4">
            YOUR PERSONALIZED GROWTH CALCULATOR
          </h2>
          <p className="text-lg font-mono uppercase">
            Real inputs. Real math. Real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input side */}
          <div className="border-4 border-black bg-gray-50 p-8">
            <h3 className="text-xl font-black uppercase mb-6">YOUR CURRENT SITUATION</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-black uppercase mb-2">
                  Number of Sales Reps
                </label>
                <input
                  type="number"
                  value={inputs.salesReps}
                  onChange={(e) => handleInputChange('salesReps', e.target.value)}
                  className="w-full px-4 py-3 text-lg font-mono border-2 border-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-black uppercase mb-2">
                  Average Deal Size
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 font-mono">$</span>
                  <input
                    type="number"
                    value={inputs.avgDealSize}
                    onChange={(e) => handleInputChange('avgDealSize', e.target.value)}
                    className="w-full pl-8 pr-4 py-3 text-lg font-mono border-2 border-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-black uppercase mb-2">
                  Deals Per Rep Per Month
                </label>
                <input
                  type="number"
                  value={inputs.dealsPerRep}
                  onChange={(e) => handleInputChange('dealsPerRep', e.target.value)}
                  className="w-full px-4 py-3 text-lg font-mono border-2 border-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-black uppercase mb-2">
                  Current Close Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.closeRate}
                  onChange={(e) => handleInputChange('closeRate', e.target.value)}
                  className="w-full px-4 py-3 text-lg font-mono border-2 border-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-black uppercase mb-2">
                  Hours Per Week on Admin/Paperwork
                </label>
                <input
                  type="number"
                  value={inputs.hoursOnAdmin}
                  onChange={(e) => handleInputChange('hoursOnAdmin', e.target.value)}
                  className="w-full px-4 py-3 text-lg font-mono border-2 border-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>
            
            <div className="mt-8">
              <button
                onClick={() => setShowResults(true)}
                className="w-full px-8 py-4 bg-black text-white font-black uppercase text-lg hover:bg-gray-900 transition-colors"
              >
                CALCULATE MY GROWTH →
              </button>
            </div>
          </div>

          {/* Results side */}
          <div>
            {!showResults ? (
              <div className="border-4 border-dashed border-gray-300 h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-400 mb-4">
                    YOUR RESULTS WILL APPEAR HERE
                  </p>
                  <p className="font-mono text-gray-500">
                    Fill in your numbers and click calculate
                  </p>
                </div>
              </div>
            ) : (
              <div className="border-4 border-black bg-yellow-50 p-8 h-full">
                <h3 className="text-xl font-black uppercase mb-6">YOUR GROWTH POTENTIAL</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="pb-4 border-b-2 border-gray-200">
                    <p className="font-mono text-sm text-gray-600">Current Annual Revenue</p>
                    <p className="text-2xl font-black">${results.currentRevenue}</p>
                  </div>
                  
                  <div className="pb-4 border-b-2 border-gray-200">
                    <p className="font-mono text-sm text-gray-600">Projected Annual Revenue</p>
                    <p className="text-3xl font-black text-green-600">${results.improvedRevenue}</p>
                  </div>
                  
                  <div className="pb-4 border-b-2 border-gray-200">
                    <p className="font-mono text-sm text-gray-600">Additional Revenue</p>
                    <p className="text-2xl font-black">+${results.additionalRevenue}</p>
                    <p className="font-mono text-xs text-gray-600 mt-1">That&apos;s ${results.monthlyGrowth}/month</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pb-4 border-b-2 border-gray-200">
                    <div>
                      <p className="font-mono text-sm text-gray-600">New Close Rate</p>
                      <p className="text-xl font-black">{results.newCloseRate}%</p>
                    </div>
                    <div>
                      <p className="font-mono text-sm text-gray-600">Hours Back/Week</p>
                      <p className="text-xl font-black">{results.hoursBack}</p>
                    </div>
                  </div>
                  
                  <div className="bg-black text-white p-6">
                    <div className="text-center">
                      <p className="font-mono text-sm mb-2">Return on Investment</p>
                      <p className="text-4xl font-black mb-4">{results.roi}X</p>
                      <p className="font-mono text-sm">
                        Your investment is a fraction of your growth.<br/>
                        Typical payback: {results.payback} months
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-4 text-center">
                  <p className="font-mono text-xs">
                    Based on 200+ client average results.<br/>
                    Conservative estimates. Most do better.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 border-4 border-black bg-white p-8">
          <h3 className="text-xl font-black uppercase mb-4 text-center">HOW WE GET THESE RESULTS</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-black mb-2">50%</div>
              <p className="font-mono text-sm">Less time on admin work</p>
              <p className="text-xs text-gray-600 mt-1">AI handles the paperwork</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black mb-2">25%</div>
              <p className="font-mono text-sm">Higher close rates</p>
              <p className="text-xs text-gray-600 mt-1">Better follow-up, perfect timing</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black mb-2">0</div>
              <p className="font-mono text-sm">New hires needed</p>
              <p className="text-xs text-gray-600 mt-1">Your existing team, amplified</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-mono uppercase mb-6">
            Ready to turn these numbers into reality?
          </p>
          <a href="#discovery" className="btn-primary">
            LET&apos;S DISCUSS YOUR SPECIFIC SITUATION →
          </a>
        </div>
      </div>
    </section>
  );
}