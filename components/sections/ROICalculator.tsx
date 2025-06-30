'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [currentRevenue, setCurrentRevenue] = useState('');
  const [avgDealSize, setAvgDealSize] = useState('');
  const [salesTeamSize, setSalesTeamSize] = useState('');
  const [improvementRate, setImprovementRate] = useState(40);
  
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
      roiMultiple: roiMultiple.toFixed(1)
    };
  };
  
  const roi = calculateROI();
  
  const getSliderLabel = () => {
    if (improvementRate <= 20) return "Conservative";
    if (improvementRate <= 40) return "Typical Results";
    if (improvementRate <= 60) return "High Performer";
    return "Industry Leader";
  };
  
  const getSliderColor = () => {
    if (improvementRate <= 20) return "text-navy-600";
    if (improvementRate <= 40) return "text-green-600";
    if (improvementRate <= 60) return "text-green-700";
    return "text-green-800";
  };

  return (
    <section id="roi" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            Calculate Your Revenue Opportunity
          </h2>
          <p className="mt-4 text-xl text-navy-600">
            We aim for a 10X ROI on every engagement. See what&apos;s possible for your business.
          </p>
        </div>
        
        <div className="bg-navy-50 rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                Current Annual Revenue
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-600">$</span>
                <input
                  type="number"
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(e.target.value)}
                  placeholder="5000000"
                  className="w-full pl-8 pr-3 py-3 border border-navy-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                Average Deal Size
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-600">$</span>
                <input
                  type="number"
                  value={avgDealSize}
                  onChange={(e) => setAvgDealSize(e.target.value)}
                  placeholder="50000"
                  className="w-full pl-8 pr-3 py-3 border border-navy-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                Sales Team Size
              </label>
              <input
                type="number"
                value={salesTeamSize}
                onChange={(e) => setSalesTeamSize(e.target.value)}
                placeholder="10"
                className="w-full px-3 py-3 border border-navy-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="border-t border-navy-200 pt-8 mb-8">
            <div className="mb-8">
              <label className="block text-sm font-semibold text-navy-700 mb-4">
                Improvement Scenario: <span className={`${getSliderColor()} font-bold`}>{getSliderLabel()}</span>
              </label>
              <div className="space-y-4">
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="10"
                  value={improvementRate}
                  onChange={(e) => setImprovementRate(parseInt(e.target.value))}
                  className="w-full h-3 bg-navy-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${(improvementRate - 10) / 90 * 100}%, #e5e7eb ${(improvementRate - 10) / 90 * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-navy-600">
                  <span>10%</span>
                  <span className="font-bold text-green-600">{improvementRate}% Growth</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-navy-200 pt-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-sm text-navy-600 mb-2">Additional Annual Revenue</p>
                <p className="text-3xl font-bold text-green-500">${roi.additionalRevenue}</p>
              </div>
              <div>
                <p className="text-sm text-navy-600 mb-2">Revenue per Sales Rep</p>
                <p className="text-3xl font-bold text-green-500">${roi.revenuePerRep}</p>
              </div>
              <div>
                <p className="text-sm text-navy-600 mb-2">Additional Deals</p>
                <p className="text-3xl font-bold text-green-500">{roi.additionalDeals}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-navy-600 mb-2">ROI Multiple</p>
                <p className="text-3xl font-bold text-green-600">{roi.roiMultiple}X</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg text-navy-700 mb-2">
            {improvementRate >= 40 ? 
              "These results are typical for companies who commit to the process." : 
              improvementRate >= 60 ? 
              "High performers see these results by fully embracing AI amplification." :
              improvementRate >= 80 ?
              "Industry leaders achieve this through complete sales transformation." :
              "Even conservative implementations deliver significant ROI."}
          </p>
          <p className="text-sm text-navy-600 mb-6">
            Most clients achieve 40% growth. Your results depend on current processes and commitment level.
          </p>
          <a
            href="#opportunity"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors"
          >
            Let&apos;s Discuss Your {roi.roiMultiple}X ROI Opportunity →
          </a>
        </div>
      </div>
    </section>
  );
}