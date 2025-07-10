export default function DataSecurity() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            YOUR DATA IS YOUR BUSINESS
          </h2>
          <p className="text-lg font-mono uppercase">
            We protect it like our reputation depends on it. Because it does.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="border-4 border-white p-8">
            <h3 className="text-xl font-black uppercase mb-6">BANK-LEVEL SECURITY</h3>
            
            <div className="space-y-4">
              <div className="bg-white text-black p-4">
                <h4 className="font-bold uppercase mb-2">YOUR DATA STAYS YOURS</h4>
                <p className="font-mono text-sm">
                  • Hosted on YOUR servers or private cloud<br/>
                  • You control all access permissions<br/>
                  • We NEVER see customer details<br/>
                  • Complete data isolation guaranteed
                </p>
              </div>

              <div className="bg-white text-black p-4">
                <h4 className="font-bold uppercase mb-2">MILITARY-GRADE ENCRYPTION</h4>
                <p className="font-mono text-sm">
                  • 256-bit AES encryption at rest<br/>
                  • TLS 1.3 for all data in transit<br/>
                  • Zero-knowledge architecture<br/>
                  • Regular security audits by third parties
                </p>
              </div>

              <div className="bg-white text-black p-4">
                <h4 className="font-bold uppercase mb-2">COMPLIANCE READY</h4>
                <p className="font-mono text-sm">
                  • SOC 2 Type II certified<br/>
                  • GDPR compliant<br/>
                  • CCPA compliant<br/>
                  • Industry-specific compliance available
                </p>
              </div>
            </div>
          </div>

          <div className="border-4 border-white p-8">
            <h3 className="text-xl font-black uppercase mb-6">AI SAFETY MEASURES</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-900 p-4">
                <h4 className="font-bold uppercase mb-2 text-yellow-400">
                  HUMAN APPROVAL REQUIRED
                </h4>
                <p className="font-mono text-sm">
                  AI suggests. Humans decide. Always.<br/>
                  • Every customer communication reviewed<br/>
                  • No automatic sending ever<br/>
                  • Full audit trail of all decisions
                </p>
              </div>

              <div className="bg-gray-900 p-4">
                <h4 className="font-bold uppercase mb-2 text-yellow-400">
                  MISTAKE PREVENTION
                </h4>
                <p className="font-mono text-sm">
                  Multiple safeguards prevent errors:<br/>
                  • Confidence scoring on all suggestions<br/>
                  • Red flags for unusual patterns<br/>
                  • Instant rollback capabilities<br/>
                  • 24/7 monitoring for anomalies
                </p>
              </div>

              <div className="bg-gray-900 p-4">
                <h4 className="font-bold uppercase mb-2 text-yellow-400">
                  TRANSPARENCY FIRST
                </h4>
                <p className="font-mono text-sm">
                  You see exactly what AI is doing:<br/>
                  • Real-time activity dashboard<br/>
                  • Detailed reasoning for suggestions<br/>
                  • Complete control to override<br/>
                  • Weekly security reports
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-black p-8 mb-12">
          <h3 className="text-2xl font-black uppercase mb-6 text-center">
            WHAT HAPPENS IF SOMETHING GOES WRONG?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-4 border-black p-4">
              <h4 className="font-bold uppercase mb-2">IMMEDIATE RESPONSE</h4>
              <p className="font-mono text-sm">
                • 15-minute response time<br/>
                • Direct line to security team<br/>
                • Instant system shutdown option<br/>
                • Full incident investigation
              </p>
            </div>
            
            <div className="border-4 border-black p-4">
              <h4 className="font-bold uppercase mb-2">FULL LIABILITY</h4>
              <p className="font-mono text-sm">
                • $5M cyber insurance policy<br/>
                • We cover any breach costs<br/>
                • Legal support included<br/>
                • No fine print exceptions
              </p>
            </div>
            
            <div className="border-4 border-black p-4">
              <h4 className="font-bold uppercase mb-2">COMPLETE TRANSPARENCY</h4>
              <p className="font-mono text-sm">
                • Full disclosure within 1 hour<br/>
                • Detailed incident report<br/>
                • Action plan to prevent repeat<br/>
                • Third-party verification
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-white p-8 text-center">
          <p className="text-xl font-black uppercase mb-4">
            20 YEARS. ZERO BREACHES. ZERO EXCUSES.
          </p>
          <p className="font-mono mb-6">
            Your customer relationships are sacred. We protect them accordingly.
          </p>
          <a href="#discovery" className="inline-block px-8 py-4 bg-white text-black font-bold uppercase hover:bg-gray-100">
            DISCUSS YOUR SECURITY REQUIREMENTS →
          </a>
        </div>
      </div>
    </section>
  );
}