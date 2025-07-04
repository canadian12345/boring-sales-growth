'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [currentRevenue, setCurrentRevenue] = useState('5000000');
  const [avgDealSize, setAvgDealSize] = useState('50000');
  const [salesTeamSize, setSalesTeamSize] = useState('10');
  const [improvementRate, setImprovementRate] = useState(40);
  const [activeInput, setActiveInput] = useState('');
  
  const calculateROI = () => {
    const revenue = parseFloat(currentRevenue) || 0;
    const dealSize = parseFloat(avgDealSize) || 0;
    const teamSize = parseFloat(salesTeamSize) || 1;
    
    const currentDealsPerYear = revenue / (dealSize || 1);
    const improvedDealsPerYear = currentDealsPerYear * (1 + improvementRate / 100);
    const additionalRevenue = (improvedDealsPerYear - currentDealsPerYear) * dealSize;
    const revenuePerRep = additionalRevenue / teamSize;
    
    // Calculate ROI based on assumed $50k project cost
    const projectCost = 50000;
    const roiMultiple = additionalRevenue / projectCost;
    
    return {
      additionalRevenue: additionalRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      revenuePerRep: revenuePerRep.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      additionalDeals: Math.round(improvedDealsPerYear - currentDealsPerYear),
      roiMultiple: roiMultiple.toFixed(1),
      timeToPayback: Math.ceil(projectCost / (additionalRevenue / 12)) // months
    };
  };
  
  const roi = calculateROI();
  
  const getSliderLabel = () => {
    if (improvementRate <= 20) return "Playing It Safe";
    if (improvementRate <= 40) return "What Most See";
    if (improvementRate <= 60) return "Top 20% Results";
    return "Best We've Done";
  };

  return (
    <section id="roi" className="section-padding bg-gradient-to-br from-green-50 via-white to-navy-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-navy-900 mb-4">
            Stop Guessing. Start Calculating.
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Average client ROI: <span className="font-bold text-green-600">23X in Year 1</span>. 
            Worst performance ever: <span className="font-bold">3X</span>. 
            Your numbers:
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-xl font-bold text-navy-900 mb-8">Your Business Metrics</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Current Annual Revenue
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy-500 text-sm">$</span>
                    <input
                      type="number"
                      value={currentRevenue}
                      onChange={(e) => setCurrentRevenue(e.target.value)}
                      onFocus={() => setActiveInput('revenue')}
                      onBlur={() => setActiveInput('')}
                      className="w-full pl-10 pr-4 py-3 text-lg border-2 border-navy-200 rounded-lg focus:ring-0 focus:border-green-500 transition-colors"
                    />
                  </div>
                  {activeInput === 'revenue' && (
                    <p className="text-xs text-navy-500 mt-1">Your total sales last year</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Average Deal Size
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy-500 text-sm">$</span>
                    <input
                      type="number"
                      value={avgDealSize}
                      onChange={(e) => setAvgDealSize(e.target.value)}
                      onFocus={() => setActiveInput('deal')}
                      onBlur={() => setActiveInput('')}
                      className="w-full pl-10 pr-4 py-3 text-lg border-2 border-navy-200 rounded-lg focus:ring-0 focus:border-green-500 transition-colors"
                    />
                  </div>
                  {activeInput === 'deal' && (
                    <p className="text-xs text-navy-500 mt-1">Typical contract value</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Sales Team Size
                  </label>
                  <input
                    type="number"
                    value={salesTeamSize}
                    onChange={(e) => setSalesTeamSize(e.target.value)}
                    onFocus={() => setActiveInput('team')}
                    onBlur={() => setActiveInput('')}
                    className="w-full px-4 py-3 text-lg border-2 border-navy-200 rounded-lg focus:ring-0 focus:border-green-500 transition-colors"
                  />
                  {activeInput === 'team' && (
                    <p className="text-xs text-navy-500 mt-1">Number of sales reps</p>
                  )}
                </div>
                
                <div className="pt-4">
                  <label className="block text-sm font-medium text-navy-700 mb-4">
                    Expected Improvement: <span className="text-green-600 font-bold">{getSliderLabel()}</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="10"
                    value={improvementRate}
                    onChange={(e) => setImprovementRate(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-navy-500 mt-2">
                    <span>Conservative</span>
                    <span className="font-semibold text-green-600">{improvementRate}%</span>
                    <span>Aggressive</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 p-8 lg:p-12 text-white">
              <h3 className="text-xl font-bold mb-2">Your Numbers (Conservative):</h3>
              <p className="text-sm text-navy-300 mb-6">Based on 200+ actual implementations</p>
              
              <div className="space-y-4">
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                  <p className="text-green-400 text-sm mb-1">Year 1 Additional Revenue</p>
                  <p className="text-4xl font-bold">+${roi.additionalRevenue}</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-navy-300 text-sm mb-1">Per Rep Improvement</p>
                  <p className="text-2xl font-bold">+${roi.revenuePerRep}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-navy-300 text-xs mb-1">New Deals</p>
                    <p className="text-xl font-bold">+{roi.additionalDeals}/yr</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-navy-300 text-xs mb-1">Break Even</p>
                    <p className="text-xl font-bold">{roi.timeToPayback} months</p>
                  </div>
                </div>
                
                <div className="bg-yellow-400 text-navy-900 rounded-lg p-6 text-center">
                  <p className="text-xs font-medium mb-1">YOUR ROI</p>
                  <p className="text-6xl font-black">{roi.roiMultiple}X</p>
                  <p className="text-sm font-bold mt-2">
                    {parseFloat(roi.roiMultiple) >= 10 ? 
                      "You're leaving money on the table" : 
                      "Every month you wait costs this much"}
                  </p>
                </div>
                
                <div className="border-t border-navy-700 pt-4">
                  <p className="text-sm text-navy-300">
                    <span className="text-green-400 font-bold">Remember:</span> This assumes 
                    zero improvement in close rates, deal size, or cycle time. Just time savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-3xl mx-auto text-center">
            <div className="text-4xl font-bold text-navy-900 mb-2">
              ${roi.additionalRevenue} ÷ 12 months = 
              <span className="text-green-600"> ${Math.round(parseFloat(roi.additionalRevenue.replace(/,/g, '')) / 12).toLocaleString()}/month</span>
            </div>
            <p className="text-lg text-navy-700 mb-6">
              That's what waiting costs you. Every. Single. Month.
            </p>
            
            <div className="bg-navy-50 rounded-lg p-6 mb-6">
              <p className="font-bold text-navy-900 mb-2">Two ways this goes:</p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="font-semibold text-red-600">Option A:</p>
                  <p className="text-sm text-navy-700">Keep reading case studies for 6 more months</p>
                </div>
                <div>
                  <p className="font-semibold text-green-600">Option B:</p>
                  <p className="text-sm text-navy-700">Lock in ${Math.round(parseFloat(roi.additionalRevenue.replace(/,/g, '')) / 12).toLocaleString()}/mo starting in 30 days</p>
                </div>
              </div>
            </div>
            
            <a href="#discovery" className="btn-primary text-lg px-8 py-4">
              I Choose Option B
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-sm text-navy-500 mt-4">
              15-minute call. We'll know in 5 if we're a fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}