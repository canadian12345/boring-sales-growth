'use client';

import { useState } from 'react';

export default function DisciplineScorecard() {
  const [showMetricsForm, setShowMetricsForm] = useState(true);
  const [priorityAnswer, setPriorityAnswer] = useState<'speed' | 'relationships' | null>(null);
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [avgDealSize, setAvgDealSize] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [scores, setScores] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  
  const questions = [
    {
      id: 1,
      title: "The Follow-Up Test",
      question: "What % of quotes get touched in 48 hours?",
      options: [
        { value: 100, label: "90-100%", status: "Growth machine" },
        { value: 75, label: "70-89%", status: "Money on table" },
        { value: 50, label: "50-69%", status: "Bleeding opportunities" },
        { value: 25, label: "<50%", status: "Crisis mode" }
      ]
    },
    {
      id: 2,
      title: "The Introduction Engine",
      question: "How often do you ask satisfied customers for introductions?",
      options: [
        { value: 100, label: "Systematically", status: "10X pipeline" },
        { value: 50, label: "Sometimes", status: "5X missed opportunity" },
        { value: 25, label: "Rarely", status: "Competitors thank you" },
        { value: 0, label: "Never", status: "Criminal negligence" }
      ]
    },
    {
      id: 3,
      title: "The Relationship Pulse",
      question: "When did leadership last call top accounts?",
      options: [
        { value: 100, label: "Monthly", status: "Locked in" },
        { value: 75, label: "Quarterly", status: "At risk" },
        { value: 25, label: "Annually", status: "Already shopping" },
        { value: 0, label: "Can't remember", status: "Gone soon" }
      ]
    },
    {
      id: 4,
      title: "The Knowledge Test",
      question: "How much customer intel lives only in heads?",
      options: [
        { value: 100, label: "<10%", status: "Scalable" },
        { value: 75, label: "25%", status: "Vulnerable" },
        { value: 25, label: "50%", status: "Dangerous" },
        { value: 0, label: ">75%", status: "Ticking time bomb" }
      ]
    },
    {
      id: 5,
      title: "The Service Signal",
      question: "How often does service identify expansion opportunities?",
      options: [
        { value: 100, label: "Always", status: "Profit center" },
        { value: 75, label: "Often", status: "Good foundation" },
        { value: 50, label: "Sometimes", status: "Missing revenue" },
        { value: 0, label: "Never", status: "Cost center only" }
      ]
    },
    {
      id: 6,
      title: "The Speed Score",
      question: "Average first response time?",
      options: [
        { value: 100, label: "<1 hour", status: "Market leader" },
        { value: 75, label: "2-4 hours", status: "Competitive" },
        { value: 25, label: "Next day", status: "Losing ground" },
        { value: 0, label: "2+ days", status: "Death spiral" }
      ]
    },
    {
      id: 7,
      title: "The Trust Tracker",
      question: "Customer complaints about \"feeling like a number\"?",
      options: [
        { value: 100, label: "Never", status: "High-touch working" },
        { value: 75, label: "Occasionally", status: "Warning signs" },
        { value: 25, label: "Regularly", status: "Trust eroding" },
        { value: 0, label: "Constantly", status: "Relationship crisis" }
      ]
    }
  ];
  
  const handleAnswer = (value: number) => {
    setScores({ ...scores, [currentQuestion]: value });
    if (currentQuestion < 7) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const calculateResults = () => {
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0) / 7;
    
    // Calculate based on actual business metrics
    const monthlyRevenue = annualRevenue / 12;
    const scoreGap = 100 - totalScore;
    
    // Industry benchmark: Each 10-point improvement = 3-5% revenue increase
    const revenueImprovementPercent = (scoreGap / 10) * 0.04; // 4% per 10 points
    const monthlyLoss = Math.round(monthlyRevenue * revenueImprovementPercent);
    
    const topIssues = questions
      .filter(q => scores[q.id] < 50)
      .slice(0, 3)
      .map(q => q.title);
    
    return { 
      totalScore: Math.round(totalScore), 
      monthlyLoss, 
      topIssues,
      monthlyRevenue,
      avgDealSize,
      improvementPercent: Math.round(revenueImprovementPercent * 100)
    };
  };
  
  const results = showResults ? calculateResults() : null;
  
  return (
    <section id="scorecard" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 uppercase">
            The Sales Discipline Scorecard
          </h2>
          <p className="text-xl sm:text-2xl font-black uppercase">
            The Boring Activities That Build Fortunes
          </p>
        </div>
        
        {showMetricsForm ? (
          <div className="bg-white border-4 border-black p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black uppercase mb-6">
              Let's Start With What Really Matters...
            </h3>
            <p className="text-lg mb-8">
              Skip the revenue question for a second. First, tell us this:
            </p>
            
            <div className="space-y-6">
              {!priorityAnswer ? (
                <div className="border-4 border-gray-300 p-6 bg-gray-50">
                  <p className="font-black text-lg mb-3 uppercase">Quick Question:</p>
                  <p className="text-base mb-4">What matters more to your business?</p>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="priority" 
                        className="mr-3 w-4 h-4" 
                        onChange={() => setPriorityAnswer('speed')}
                      />
                      <span className="font-mono">Being 10x faster than competitors</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="priority" 
                        className="mr-3 w-4 h-4" 
                        onChange={() => setPriorityAnswer('relationships')}
                      />
                      <span className="font-mono">Keeping customers 10x longer</span>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    (Hint: The thinking CEO's choice is customer intimacy at scale)
                  </p>
                </div>
              ) : (
                <>
                  <div className="bg-green-50 border-2 border-green-600 p-4 mb-6">
                    <p className="font-bold text-green-900">
                      Interesting. 87% of sustainable B2B companies chose the same answer you did. 
                      Now let's see where you're leaving money on the table...
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">
                      Annual Revenue
                    </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold">$</span>
                  <input
                    type="number"
                    placeholder="5000000"
                    className="w-full pl-10 pr-4 py-4 text-lg font-mono border-4 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                    onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">Example: 5000000 for $5M</p>
              </div>
              
              <div>
                <label className="block text-sm font-bold uppercase mb-2">
                  Average Deal Size
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold">$</span>
                  <input
                    type="number"
                    placeholder="25000"
                    className="w-full pl-10 pr-4 py-4 text-lg font-mono border-4 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                    onChange={(e) => setAvgDealSize(Number(e.target.value))}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">Your typical contract value</p>
              </div>
              
                </>
              )}
              
              {priorityAnswer && (
                <button
                  onClick={() => {
                    if (annualRevenue > 0 && avgDealSize > 0) {
                      setShowMetricsForm(false);
                    }
                  }}
                  disabled={annualRevenue === 0 || avgDealSize === 0}
                className={`w-full py-4 text-lg font-black uppercase transition-colors ${
                  annualRevenue > 0 && avgDealSize > 0
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Start Assessment →
              </button>
              )}
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 border-2 border-gray-200">
              <p className="text-sm font-bold uppercase mb-2">Industry Benchmarks:</p>
              <ul className="text-sm space-y-1">
                <li>• Top 10% of B2B companies score 85+</li>
                <li>• Average B2B company scores 45-60</li>
                <li>• 10-point improvement = 3-5% revenue increase</li>
              </ul>
            </div>
          </div>
        ) : !showResults ? (
          <div className="bg-white border-4 border-black p-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-black uppercase">
                  Question {currentQuestion} of 7
                </h3>
                <div className="flex gap-1">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-2 ${
                        i < currentQuestion ? 'bg-black' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-gray-700 mb-2">
                {questions[currentQuestion - 1].title}
              </h4>
              <p className="text-lg mb-6">
                {questions[currentQuestion - 1].question}
              </p>
            </div>
            
            <div className="space-y-4">
              {questions[currentQuestion - 1].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-6 bg-white border-4 border-black hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-black text-lg uppercase">{option.label}</span>
                    <span className={`font-mono text-sm ${
                      option.value >= 75 ? 'text-green-600' : 
                      option.value >= 50 ? 'text-yellow-600' : 'text-red-600'
                    } font-bold`}>
                      {option.status}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : results ? (
          <div className="space-y-8">
            <div className="bg-gray-900 text-white p-8 text-center">
              <h3 className="text-3xl font-black mb-4">
                Your Sales Discipline Score
              </h3>
              <p className={`text-6xl font-black mb-6 ${
                results.totalScore >= 75 ? 'text-green-400' :
                results.totalScore >= 50 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {results.totalScore}/100
              </p>
              <div className="space-y-2">
                <p className="text-xl">
                  Potential revenue improvement:{' '}
                  <span className="font-black text-yellow-400">
                    {results.improvementPercent}%
                  </span>
                </p>
                <p className="text-xl">
                  Monthly opportunity:{' '}
                  <span className="font-black text-red-400">
                    ${results.monthlyLoss.toLocaleString()}
                  </span>
                </p>
                <p className="text-sm text-gray-400">
                  Based on ${(annualRevenue/1000000).toFixed(1)}M annual revenue
                </p>
              </div>
            </div>
            
            <div className="bg-red-50 border-4 border-red-200 p-8">
              <h4 className="text-xl font-black mb-4">
                Three Disciplines to Fix Immediately:
              </h4>
              <ol className="space-y-4">
                {results.topIssues.map((issue, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="font-black text-red-600 mr-3 text-xl">
                      {idx + 1}.
                    </span>
                    <div>
                      <p className="font-bold">{issue}</p>
                      <p className="text-gray-700">
                        Could add {Math.round(results.monthlyLoss / 3 / results.avgDealSize)} 
                        more deals/month at your ${(results.avgDealSize/1000).toFixed(0)}K average
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="bg-green-50 border-4 border-green-600 p-8">
              <h4 className="text-xl font-black mb-4">Realistic Implementation Timeline:</h4>
              <p className="text-lg mb-4">
                Based on companies your size (${(annualRevenue/1000000).toFixed(0)}M revenue):
              </p>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>• Month 1-2: Implementation & training</span>
                  <span className="font-mono">Break even</span>
                </li>
                <li className="flex justify-between">
                  <span>• Month 3-4: Early adoption (25% improvement)</span>
                  <span className="font-mono text-green-600">+${Math.round(results.monthlyLoss * 0.25).toLocaleString()}/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>• Month 5-6: Full adoption (50% improvement)</span>
                  <span className="font-mono text-green-600">+${Math.round(results.monthlyLoss * 0.5).toLocaleString()}/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>• Month 7+: Optimized (75% improvement)</span>
                  <span className="font-mono text-green-600 font-bold">+${Math.round(results.monthlyLoss * 0.75).toLocaleString()}/mo</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t-2 border-green-600">
                <p className="text-sm text-gray-700">
                  <strong>Industry context:</strong> Top quartile B2B companies in your 
                  revenue range maintain discipline scores of 80+. Moving from {results.totalScore} 
                  to 80 typically takes 6-9 months with proper systems.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="#next-move" 
                className="inline-block bg-green-600 text-white px-8 py-4 text-lg font-black uppercase hover:bg-green-700 transition-colors"
              >
                See Your Implementation Plan →
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}