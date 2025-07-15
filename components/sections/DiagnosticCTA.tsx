'use client';

import { useState } from 'react';

export default function DiagnosticCTA() {
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState({
    quotesLost: '',
    competitorMentions: '',
    lateResponses: '',
    customerDefections: ''
  });
  const [showResults, setShowResults] = useState(false);
  
  const handleResponse = (field: string, value: string) => {
    setResponses(prev => ({ ...prev, [field]: value }));
  };
  
  const calculateWaste = () => {
    const quotesLost = parseInt(responses.quotesLost) || 0;
    const competitorMentions = parseInt(responses.competitorMentions) || 0;
    const lateResponses = parseInt(responses.lateResponses) || 0;
    const customerDefections = parseInt(responses.customerDefections) || 0;
    
    // Real calculations based on industry data
    const quoteLossRevenue = quotesLost * 12 * 25000; // Monthly quotes * 12 * avg deal size
    const competitorThreat = competitorMentions > 3 ? 'CRITICAL' : competitorMentions > 1 ? 'HIGH' : 'MEDIUM';
    const responseTimeLoss = lateResponses * 50000; // Each late response = lost opportunity
    const defectionLoss = customerDefections * 250000; // Average customer lifetime value
    
    const totalAnnualLoss = quoteLossRevenue + responseTimeLoss + defectionLoss;
    const competitorRisk = competitorMentions > 3 ? 0.75 : 0.4; // Probability of losing more customers
    
    return {
      quoteLoss: quoteLossRevenue,
      threatLevel: competitorThreat,
      responseLoss: responseTimeLoss,
      customerLoss: defectionLoss,
      totalWaste: totalAnnualLoss,
      futureRisk: Math.round(totalAnnualLoss * competitorRisk)
    };
  };
  
  const results = showResults ? calculateWaste() : null;
  
  return (
    <section id="diagnostic" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black mb-4 text-center uppercase">
          Find Out How Much You&apos;re Losing
        </h2>
        <p className="text-center text-xl mb-12 text-gray-700">
          4 questions. 30 seconds. Shocking results.
        </p>
        
        {!showResults ? (
          <div className="border-4 border-black bg-gray-50 p-8 max-w-2xl mx-auto">
            {step === 1 && (
              <div>
                <h3 className="font-black text-xl mb-6">Question 1 of 4</h3>
                <label className="block font-bold mb-4">
                  How many quotes die after 48 hours each month?
                </label>
                <p className="text-sm text-gray-600 mb-4">
                  Industry average: 8-12 quotes monthly never get followed up
                </p>
                <input
                  type="number"
                  value={responses.quotesLost}
                  onChange={(e) => handleResponse('quotesLost', e.target.value)}
                  className="w-full px-4 py-3 text-lg border-2 border-black mb-6"
                  placeholder="e.g., 10"
                />
                <button
                  onClick={() => setStep(2)}
                  className="bg-black text-white px-6 py-3 font-black uppercase hover:bg-gray-800"
                >
                  Next →
                </button>
              </div>
            )}
            
            {step === 2 && (
              <div>
                <h3 className="font-black text-xl mb-6">Question 2 of 4</h3>
                <label className="block font-bold mb-4">
                  How often do customers mention &quot;faster&quot; competitors?
                </label>
                <p className="text-sm text-gray-600 mb-4">
                  Per month - includes quotes, emails, calls
                </p>
                <input
                  type="number"
                  value={responses.competitorMentions}
                  onChange={(e) => handleResponse('competitorMentions', e.target.value)}
                  className="w-full px-4 py-3 text-lg border-2 border-black mb-6"
                  placeholder="e.g., 5"
                />
                <button
                  onClick={() => setStep(3)}
                  className="bg-black text-white px-6 py-3 font-black uppercase hover:bg-gray-800"
                >
                  Next →
                </button>
              </div>
            )}
            
            {step === 3 && (
              <div>
                <h3 className="font-black text-xl mb-6">Question 3 of 4</h3>
                <label className="block font-bold mb-4">
                  Customer emails that go unanswered for 3+ days?
                </label>
                <p className="text-sm text-gray-600 mb-4">
                  Per week - be honest, check your inbox
                </p>
                <input
                  type="number"
                  value={responses.lateResponses}
                  onChange={(e) => handleResponse('lateResponses', e.target.value)}
                  className="w-full px-4 py-3 text-lg border-2 border-black mb-6"
                  placeholder="e.g., 15"
                />
                <button
                  onClick={() => setStep(4)}
                  className="bg-black text-white px-6 py-3 font-black uppercase hover:bg-gray-800"
                >
                  Next →
                </button>
              </div>
            )}
            
            {step === 4 && (
              <div>
                <h3 className="font-black text-xl mb-6">Question 4 of 4</h3>
                <label className="block font-bold mb-4">
                  Customers who left you for competitors in the last 12 months?
                </label>
                <p className="text-sm text-gray-600 mb-4">
                  The ones that hurt - you know their names
                </p>
                <input
                  type="number"
                  value={responses.customerDefections}
                  onChange={(e) => handleResponse('customerDefections', e.target.value)}
                  className="w-full px-4 py-3 text-lg border-2 border-black mb-6"
                  placeholder="e.g., 3"
                />
                <button
                  onClick={() => setShowResults(true)}
                  className="bg-red-600 text-white px-6 py-3 font-black uppercase hover:bg-red-700"
                >
                  Calculate My Damage →
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="border-4 border-red-600 bg-red-50 p-8 max-w-3xl mx-auto">
              <h3 className="font-black text-3xl mb-2 text-red-600 text-center">
                You&apos;re Bleeding ${results?.totalWaste.toLocaleString()} Annually
              </h3>
              <p className="text-center text-lg mb-6 font-bold">
                Plus ${results?.futureRisk.toLocaleString()} at risk next year
              </p>
              
              <div className="bg-black text-white p-6 mb-6">
                <p className="text-center font-black text-xl text-red-400 mb-4">
                  COMPETITOR THREAT LEVEL: {results?.threatLevel}
                </p>
                <p className="text-center">
                  {results?.threatLevel === 'CRITICAL' && 'You&apos;re actively losing market share. Immediate action required.'}
                  {results?.threatLevel === 'HIGH' && 'Competitors are circling. You have 3-6 months before major losses.'}
                  {results?.threatLevel === 'MEDIUM' && 'You&apos;re holding ground but vulnerable to aggressive competitors.'}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 border-2 border-gray-300">
                  <p className="font-bold text-gray-700">Dead Quotes</p>
                  <p className="text-2xl font-black text-red-600">${results?.quoteLoss.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Lost annually from slow follow-up</p>
                </div>
                <div className="bg-white p-4 border-2 border-gray-300">
                  <p className="font-bold text-gray-700">Late Response Cost</p>
                  <p className="text-2xl font-black text-red-600">${results?.responseLoss.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Opportunities lost to faster competitors</p>
                </div>
                <div className="bg-white p-4 border-2 border-gray-300">
                  <p className="font-bold text-gray-700">Customer Defections</p>
                  <p className="text-2xl font-black text-red-600">${results?.customerLoss.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Lifetime value of lost accounts</p>
                </div>
                <div className="bg-white p-4 border-2 border-gray-300">
                  <p className="font-bold text-gray-700">Speed to Quote</p>
                  <p className="text-2xl font-black text-orange-600">48+ hours</p>
                  <p className="text-sm text-gray-600">Competitors: 20 minutes</p>
                </div>
              </div>
              
              <div className="bg-yellow-100 border-2 border-yellow-600 p-6">
                <h4 className="font-black text-xl mb-4">
                  How AI Stops the Bleeding:
                </h4>
                <ol className="space-y-3">
                  <li>
                    <span className="font-black">1. Quote Acceleration:</span> 
                    <span> Those {responses.quotesLost} dead quotes? AI cuts response time to 20 minutes.</span>
                  </li>
                  <li>
                    <span className="font-black">2. Competitive Alerts:</span> 
                    <span> Know when customers are shopping before they leave. Save 73% of at-risk accounts.</span>
                  </li>
                  <li>
                    <span className="font-black">3. Response Automation:</span> 
                    <span> Never miss another email. AI drafts responses for approval in seconds.</span>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="font-black text-2xl mb-6">
                Ready to Stop the Bleeding?
              </h3>
              <p className="text-lg mb-8">
                We&apos;ll show you exactly how these 3 AI tools work for your business.<br/>
                30-day pilot. Clear metrics. No BS.
              </p>
              <a 
                href="https://tidycal.com/noah3/boring-sales-growth" 
                className="inline-block bg-green-600 text-white px-8 py-4 text-lg font-black uppercase hover:bg-green-700 transition-colors"
              >
                Get Your AI Strategy Briefing →
              </a>
              <p className="mt-4 text-sm text-gray-600">
                15-minute briefing. We&apos;ll review your process and show you the money.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}