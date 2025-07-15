'use client';

import { useState } from 'react';

export default function DisciplineScorecard() {
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
    const monthlyLoss = Math.round((100 - totalScore) * 2500);
    
    const topIssues = questions
      .filter(q => scores[q.id] < 50)
      .slice(0, 3)
      .map(q => q.title);
    
    return { totalScore: Math.round(totalScore), monthlyLoss, topIssues };
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
        
        {!showResults ? (
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
              <p className="text-xl">
                Monthly revenue left on table:{' '}
                <span className="font-black text-red-400">
                  ${results.monthlyLoss.toLocaleString()}
                </span>
              </p>
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
                        Implementing this discipline alone could recover 
                        ${Math.round(results.monthlyLoss / 3).toLocaleString()}/month
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="bg-green-50 border-4 border-green-600 p-8">
              <h4 className="text-xl font-black mb-4">Expected ROI:</h4>
              <p className="text-lg">
                Fixing just these three disciplines with AI enforcement:
              </p>
              <ul className="mt-4 space-y-2">
                <li>• Month 1: Break even on investment</li>
                <li>• Month 2: ${Math.round(results.monthlyLoss * 0.5).toLocaleString()} recovered</li>
                <li>• Month 3: ${results.monthlyLoss.toLocaleString()} monthly increase</li>
                <li>• Year 1: ${(results.monthlyLoss * 12).toLocaleString()} additional revenue</li>
              </ul>
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