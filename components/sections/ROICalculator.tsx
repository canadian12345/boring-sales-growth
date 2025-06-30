'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [currentRevenue, setCurrentRevenue] = useState('');
  const [avgDealSize, setAvgDealSize] = useState('');
  const [salesTeamSize, setSalesTeamSize] = useState('');
  
  const calculateROI = () => {
    const revenue = parseFloat(currentRevenue) || 0;
    const dealSize = parseFloat(avgDealSize) || 0;
    const teamSize = parseFloat(salesTeamSize) || 1;
    
    const currentDealsPerYear = revenue / (dealSize || 1);
    const improvedDealsPerYear = currentDealsPerYear * 1.4; // 40% increase
    const additionalRevenue = (improvedDealsPerYear - currentDealsPerYear) * dealSize;
    const revenuePerRep = additionalRevenue / teamSize;
    
    return {
      additionalRevenue: additionalRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      revenuePerRep: revenuePerRep.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      additionalDeals: Math.round(improvedDealsPerYear - currentDealsPerYear)
    };
  };
  
  const roi = calculateROI();

  return (
    <section id="roi" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            Calculate Your Revenue Opportunity
          </h2>
          <p className="mt-4 text-xl text-navy-600">
            See what a 40% improvement in sales efficiency means for your bottom line
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
          
          <div className="border-t border-navy-200 pt-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm text-navy-600 mb-2">Additional Annual Revenue</p>
                <p className="text-3xl font-bold text-green-500">${roi.additionalRevenue}</p>
              </div>
              <div>
                <p className="text-sm text-navy-600 mb-2">Revenue per Sales Rep</p>
                <p className="text-3xl font-bold text-green-500">${roi.revenuePerRep}</p>
              </div>
              <div>
                <p className="text-sm text-navy-600 mb-2">Additional Deals Closed</p>
                <p className="text-3xl font-bold text-green-500">{roi.additionalDeals}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg text-navy-700 mb-6">
            These are conservative estimates based on our average client results
          </p>
          <a
            href="#opportunity"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors"
          >
            Let&apos;s Discuss Your Opportunity →
          </a>
        </div>
      </div>
    </section>
  );
}