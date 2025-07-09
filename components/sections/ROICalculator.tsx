'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [currentRevenue, setCurrentRevenue] = useState('5000000');
  const [avgDealSize, setAvgDealSize] = useState('50000');
  const [salesTeamSize, setSalesTeamSize] = useState('10');
  const [improvementRate, setImprovementRate] = useState(40);
  
  const calculateROI = () => {
    const revenue = parseFloat(currentRevenue) || 0;
    const dealSize = parseFloat(avgDealSize) || 0;
    const teamSize = parseFloat(salesTeamSize) || 1;
    
    const currentDealsPerYear = revenue / (dealSize || 1);
    const improvedDealsPerYear = currentDealsPerYear * (1 + improvementRate / 100);
    const additionalRevenue = (improvedDealsPerYear - currentDealsPerYear) * dealSize;
    const revenuePerRep = additionalRevenue / teamSize;
    
    // Calculate ROI based on typical implementation cost
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
    if (improvementRate <= 20) return "CONSERVATIVE";
    if (improvementRate <= 40) return "TYPICAL RESULTS";
    if (improvementRate <= 60) return "CULTURE INTACT";
    return "FULL POTENTIAL";
  };

  return (
    <section id="roi" className="section-padding bg-gray-100 border-t-4 border-black">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-black mb-4">
            CULTURE-PRESERVED GROWTH CALCULATOR
          </h2>
          <p className="text-xl font-mono uppercase">
            SEE HOW MUCH YOU CAN GROW WITHOUT CHANGING WHO YOU ARE
          </p>
        </div>
        
        <div className="border-4 border-black bg-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 border-r-4 border-black">
              <h3 className="text-2xl font-black uppercase mb-8">YOUR CURRENT SITUATION</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                    CURRENT ANNUAL REVENUE
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 font-mono">$</span>
                    <input
                      type="number"
                      value={currentRevenue}
                      onChange={(e) => setCurrentRevenue(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-lg font-mono border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                    AVERAGE DEAL SIZE
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 font-mono">$</span>
                    <input
                      type="number"
                      value={avgDealSize}
                      onChange={(e) => setAvgDealSize(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-lg font-mono border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                    SALES TEAM SIZE
                  </label>
                  <input
                    type="number"
                    value={salesTeamSize}
                    onChange={(e) => setSalesTeamSize(e.target.value)}
                    className="w-full px-4 py-3 text-lg font-mono border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                
                <div className="pt-4">
                  <label className="block text-xs font-bold uppercase tracking-wider mb-4">
                    GROWTH POTENTIAL: <span className="text-lg">{getSliderLabel()}</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    step="10"
                    value={improvementRate}
                    onChange={(e) => setImprovementRate(parseInt(e.target.value))}
                    className="w-full accent-black"
                  />
                  <div className="flex justify-between text-xs font-mono uppercase mt-2">
                    <span>10%</span>
                    <span className="font-bold text-lg">{improvementRate}%</span>
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-8 lg:p-12">
              <h3 className="text-2xl font-black uppercase mb-2">YOUR CULTURE-PRESERVED FUTURE</h3>
              <p className="text-sm font-mono uppercase mb-6">GROWTH WITHOUT LOSING YOUR IDENTITY</p>
              
              <div className="space-y-4">
                <div className="border-2 border-white p-4">
                  <p className="text-xs font-bold uppercase mb-1">ADDITIONAL REVENUE (CULTURE INTACT)</p>
                  <p className="text-5xl font-black">+${roi.additionalRevenue}</p>
                </div>
                
                <div className="border border-gray-600 p-3">
                  <p className="text-xs font-mono uppercase mb-1">MORE TIME FOR RELATIONSHIPS</p>
                  <p className="text-3xl font-bold">+${roi.revenuePerRep}/REP</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-gray-600 p-3">
                    <p className="text-xs font-mono uppercase mb-1">NEW RELATIONSHIPS</p>
                    <p className="text-2xl font-bold">+{roi.additionalDeals}/YR</p>
                  </div>
                  
                  <div className="border border-gray-600 p-3">
                    <p className="text-xs font-mono uppercase mb-1">CULTURE RISK</p>
                    <p className="text-2xl font-bold">ZERO</p>
                  </div>
                </div>
                
                <div className="bg-white text-black p-6 text-center">
                  <p className="text-xs font-bold uppercase mb-1">RETURN ON INVESTMENT</p>
                  <p className="text-7xl font-black">{roi.roiMultiple}X</p>
                  <p className="text-sm font-mono uppercase mt-2">WITHOUT CHANGING WHO YOU ARE</p>
                </div>
                
                <div className="border-t border-gray-600 pt-4">
                  <p className="text-xs font-mono uppercase">
                    * BASED ON 200+ COMPANIES WHO PRESERVED THEIR CULTURE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="border-4 border-black bg-white p-8 max-w-3xl mx-auto text-center">
            <div className="text-4xl font-black mb-2">
              THE COST OF WRONG AUTOMATION:
              <span className="block text-5xl mt-2">YOUR IDENTITY</span>
            </div>
            <p className="text-xl font-mono uppercase mt-4 mb-6">
              ONCE YOU LOSE YOUR CULTURE, YOU CAN&apos;T BUY IT BACK.
            </p>
            
            <div className="border-2 border-black p-6 mb-6">
              <p className="font-black uppercase mb-4">YOUR CHOICE:</p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="border border-black p-4">
                  <p className="font-bold uppercase">GENERIC AUTOMATION</p>
                  <p className="text-sm font-mono uppercase mt-2">LOSE WHAT MAKES YOU SPECIAL</p>
                </div>
                <div className="bg-black text-white p-4">
                  <p className="font-bold uppercase">CULTURE-FIRST GROWTH</p>
                  <p className="text-sm font-mono uppercase mt-2">BECOME MORE OF WHO YOU ARE</p>
                </div>
              </div>
            </div>
            
            <a href="#guide" className="inline-block px-8 py-4 bg-black text-white font-bold uppercase hover:bg-gray-900 border border-black">
              PROTECT YOUR CULTURE →
            </a>
            <p className="text-sm font-mono uppercase mt-4">
              LET&apos;S TALK ABOUT PRESERVING WHAT MATTERS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}