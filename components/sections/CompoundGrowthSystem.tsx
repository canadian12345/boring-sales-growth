'use client';

import { useState } from 'react';

export default function CompoundGrowthSystem() {
  const [activePhase, setActivePhase] = useState<1 | 2 | 3 | 4>(1);
  
  const phases = {
    1: {
      name: "ALIGN",
      title: "Create Total Visibility",
      timeline: "Weeks 1-2",
      color: "blue",
      activities: [
        "Install executive dashboard: See everything, no surprises",
        "Map your \"boring goldmine\": Which daily actions drive most revenue?",
        "Identify discipline gaps: Where does execution break down? (AI spots patterns, humans fix root causes)",
        "Set non-negotiables: These 5 things happen daily, period",
        "First thing we do? Show your veterans exactly how much money they're leaving on the table personally. Nothing changes behavior like seeing missed commission dollars next to your name."
      ]
    },
    2: {
      name: "ACTIVATE",
      title: "Systematize the Mundane",
      timeline: "Weeks 3-4",
      color: "green",
      activities: [
        "AI-powered follow-up enforcement: Never miss another touch (tech tracks, humans personalize)",
        "Smart introduction prompter: Perfect timing, every time",
        "Conversation intelligence: Every detail captured automatically, relationships stay human",
        "Quote acceleration: From days to minutes (AI speeds, humans close)"
      ]
    },
    3: {
      name: "ELEVATE",
      title: "Transform Service Into Revenue",
      timeline: "Weeks 5-8",
      color: "purple",
      activities: [
        "Every issue becomes an expansion opportunity",
        "AI identifies growth moments you're missing",
        "Proactive relationship touches before problems arise",
        "Service team becomes profit generator"
      ]
    },
    4: {
      name: "EXPAND",
      title: "Scale Through Consistency",
      timeline: "Ongoing",
      color: "orange",
      activities: [
        "Build loyalty loops that replace leaky funnels",
        "Predictable growth from predictable actions",
        "Amplify what works, eliminate what doesn't",
        "10X ROI from boring done brilliantly"
      ]
    }
  };
  
  return (
    <section id="system" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 uppercase">
            The Growth Protocol 2.0™
          </h2>
          <p className="text-xl sm:text-2xl font-black text-gray-700 uppercase">
            High-Tech, High-Touch System That Actually Works
          </p>
        </div>
        
        <div className="border-4 border-black bg-gray-50 p-8 mb-12">
          <h3 className="text-2xl sm:text-3xl font-black mb-6 text-center uppercase">
            The Boring Path to 30-45% Growth:
          </h3>
          <p className="text-center text-lg mb-8 font-mono">
            Not revolutionary. Not exciting. Just proven activities that compound into 
            massive growth when done daily. <span className="font-bold">Pure automation vendors miss this: multiplying trust beats replacing humans.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(phases).map(([key, phase]) => (
              <button
                key={key}
                onClick={() => setActivePhase(parseInt(key) as 1 | 2 | 3 | 4)}
                className={`px-6 py-3 font-black uppercase transition-all border-2 ${
                  activePhase === parseInt(key)
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                }`}
              >
                Phase {key}: {phase.name}
              </button>
            ))}
          </div>
          
          <div className="bg-white p-8 border-4 border-black">
            <div className="mb-6">
              <h4 className="text-2xl font-black mb-2 uppercase">
                Phase {activePhase}: {phases[activePhase].name} - {phases[activePhase].title}
              </h4>
              <p className="text-gray-600 font-bold font-mono">{phases[activePhase].timeline}</p>
            </div>
            
            <ul className="space-y-4">
              {phases[activePhase].activities.map((activity, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-600 font-black mr-3 text-xl">✓</span>
                  <span className="text-lg font-mono">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border-4 border-black p-6 text-center">
            <h4 className="font-black text-xl mb-3 uppercase text-red-600">Not Another CRM</h4>
            <p className="font-mono">This enforces action, not just tracks promises</p>
          </div>
          <div className="bg-white border-4 border-black p-6 text-center">
            <h4 className="font-black text-xl mb-3 uppercase text-red-600">Not More Training</h4>
            <p className="font-mono">Your team doesn't need education, they need execution</p>
          </div>
          <div className="bg-white border-4 border-black p-6 text-center">
            <h4 className="font-black text-xl mb-3 uppercase text-red-600">Not The Nuclear Option</h4>
            <p className="font-mono">We fix veterans, not fire them (though some CEOs wish we'd do both)</p>
          </div>
        </div>
        
        <div className="bg-black text-white p-8 border-4 border-black">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 text-center uppercase text-yellow-400">The Compound Effect:</h3>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div className="border-r border-gray-600 px-2">
              <p className="font-black text-green-400 mb-2 text-xl">DAY 1</p>
              <p className="font-mono text-sm">One extra follow-up</p>
            </div>
            <div className="border-r border-gray-600 px-2">
              <p className="font-black text-green-400 mb-2 text-xl">WEEK 1</p>
              <p className="font-mono text-sm">Five recovered deals</p>
            </div>
            <div className="border-r border-gray-600 px-2">
              <p className="font-black text-green-400 mb-2 text-xl">MONTH 1</p>
              <p className="font-mono text-sm">15% more pipeline</p>
            </div>
            <div className="border-r border-gray-600 px-2">
              <p className="font-black text-green-400 mb-2 text-xl">QUARTER 1</p>
              <p className="font-mono text-sm">30% revenue increase</p>
            </div>
            <div className="px-2">
              <p className="font-black text-green-400 mb-2 text-xl">YEAR 1</p>
              <p className="font-mono text-sm">Predictable growth machine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}