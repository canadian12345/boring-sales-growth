'use client';

import { useState } from 'react';

export default function SpecificSolutions() {
  const [activeTab, setActiveTab] = useState('predict');
  
  const capabilities = {
    predict: {
      title: "Predictive Reordering",
      problem: "Missing reorders until it's too late",
      solution: "AI analyzes 3 years of order history to predict needs",
      specifics: [
        "Alerts 14 days before typical reorder point",
        "Factors in seasonality, growth trends, and market conditions",
        "92% accuracy in preventing stockouts",
        "Automated follow-up sequences trigger at optimal times"
      ],
      result: "Wilson Electric: 47% increase in repeat orders, zero stockouts in 6 months"
    },
    intelligence: {
      title: "Competitive Intelligence",
      problem: "Finding out you lost a customer after they're gone",
      solution: "AI detects defection signals 30-60 days before it happens",
      specifics: [
        "Order frequency drops 15%+ = 73% chance they're testing competitors",
        "SKU variety narrows = consolidating with another supplier",
        "Quote requests for regular items = price shopping (89% leave within 90 days)",
        "Response time increases = decision maker changed or unhappy",
        "New contacts requesting info = competitor's rep is working them"
      ],
      result: "Premier Supply: Saved 23 accounts worth $3.4M by catching early warning signs"
    },
    margin: {
      title: "Margin Optimization",
      problem: "Leaving money on every deal",
      solution: "AI analyzes pricing patterns to maximize profit",
      specifics: [
        "Identifies products where you're underpricing by 5-15%",
        "Spots unprofitable customers draining resources",
        "Suggests optimal discount levels by customer segment",
        "Alerts on below-margin quotes before approval"
      ],
      result: "ABC Distribution: 8% margin improvement without losing a single customer"
    },
    anomaly: {
      title: "Anomaly Detection",
      problem: "Catching errors after damage is done",
      solution: "AI flags unusual patterns before they cost you",
      specifics: [
        "Catches pricing errors before quotes go out",
        "Identifies unusual order patterns indicating problems",
        "Spots potential fraud or credit risks early",
        "Alerts on inventory discrepancies in real-time"
      ],
      result: "Premier Supply: Prevented $400K loss from pricing error in first month"
    }
  };
  
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-center uppercase">
          Exactly How AI Beats Your Competition
        </h2>
        <p className="text-center text-xl mb-12 text-gray-700">
          Not vague promises. Specific capabilities that print money.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(capabilities).map(([key, cap]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 font-black uppercase transition-all ${
                activeTab === key 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              {cap.title}
            </button>
          ))}
        </div>
        
        <div className="border-4 border-black bg-gray-50 p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-black mb-2 text-red-600">
              The Problem: {capabilities[activeTab as keyof typeof capabilities].problem}
            </h3>
            <p className="text-lg font-bold">
              {capabilities[activeTab as keyof typeof capabilities].solution}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-black text-lg mb-4 uppercase">How It Actually Works:</h4>
              <ul className="space-y-2">
                {capabilities[activeTab as keyof typeof capabilities].specifics.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-600 font-black mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black text-white p-6">
              <h4 className="font-black text-lg mb-4 text-yellow-400 uppercase">Real Result:</h4>
              <p className="font-mono">
                {capabilities[activeTab as keyof typeof capabilities].result}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 space-y-8">
          <div className="bg-green-100 border-4 border-green-600 p-6">
            <h3 className="font-black text-xl mb-4">The Truth About Integration:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold mb-2">Week 1-2: Data Audit</p>
                <ul className="text-sm space-y-1">
                  <li>• Connect your CRM/ERP (we support 47 systems)</li>
                  <li>• Clean duplicate customer records</li>
                  <li>• Map your product catalog</li>
                  <li>• Historical data import (3 years minimum)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Week 3-4: Go Live</p>
                <ul className="text-sm space-y-1">
                  <li>• Train your team (4 hours total)</li>
                  <li>• Configure alert thresholds</li>
                  <li>• Test with pilot customers</li>
                  <li>• First AI insights appear</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-black text-white p-6">
            <h3 className="font-black text-xl mb-4 text-yellow-400">Pricing That Makes Sense:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="border-2 border-gray-700 p-4">
                <p className="font-black text-2xl">$397</p>
                <p className="text-sm">per sales rep/month</p>
                <p className="text-xs mt-2 text-gray-400">5 rep minimum</p>
              </div>
              <div className="border-2 border-yellow-400 p-4">
                <p className="font-black text-2xl text-yellow-400">$297</p>
                <p className="text-sm">per rep at 10+ reps</p>
                <p className="text-xs mt-2 text-green-400">Most popular</p>
              </div>
              <div className="border-2 border-gray-700 p-4">
                <p className="font-black text-2xl">$197</p>
                <p className="text-sm">per rep at 25+ reps</p>
                <p className="text-xs mt-2 text-gray-400">Enterprise</p>
              </div>
            </div>
            <p className="text-center mt-6 font-mono">
              Average ROI: 4.3 months | Money back if no ROI in 6 months
            </p>
          </div>
          
          <div className="bg-red-100 border-4 border-red-600 p-6">
            <p className="font-black text-center">
              ⚠️ The Arms Race Reality: When competitors get this too, it becomes table stakes.<br/>
              <span className="text-red-700">First movers win market share. Late adopters just survive.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}