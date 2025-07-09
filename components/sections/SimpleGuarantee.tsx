export default function SimpleGuarantee() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-8">
            A HANDSHAKE GUARANTEE
          </h2>
          
          <div className="bg-white text-black border-4 border-white p-8">
            <p className="text-xl font-mono mb-6">
              &quot;If I can&apos;t show you how to grow without losing your soul, 
              I&apos;ll tell you straight. If we don&apos;t preserve what makes you special 
              while growing revenue, I work for free until we do.&quot;
            </p>
            
            <div className="border-t-4 border-black pt-6 mt-6">
              <p className="font-bold font-mono uppercase mb-4">
                Why I can promise this:
              </p>
              <div className="space-y-2 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3">
                  <span className="font-mono">→</span>
                  <span className="font-mono text-sm">20 years keeping souls intact</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono">→</span>
                  <span className="font-mono text-sm">Boring growth that actually lasts</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono">→</span>
                  <span className="font-mono text-sm">I only work with kindred souls</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="#discovery" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold font-mono uppercase text-black bg-white hover:bg-gray-100 transition-colors">
              LET&apos;S TALK SOUL TO SOUL
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}