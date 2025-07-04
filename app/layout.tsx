import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "BoringSalesGrowth - AI That Amplifies Your Sales Team, Not Replace Them",
  description: "Your competitors are using AI to steal your customers. We help traditional B2B companies increase sales 40% without losing relationships. Proven with 200+ manufacturers, distributors, and service companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <Script 
          src="https://asset-tidycal.b-cdn.net/js/embed.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-navy-100/50 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-navy-900">
              BoringSales<span className="text-gradient">Growth</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problems" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">
              Challenges
            </a>
            <a href="#solutions" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">
              Solutions
            </a>
            <a href="#roi" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">
              ROI Calculator
            </a>
            <a href="#cases" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">
              Results
            </a>
            <a
              href="#discovery"
              className="ml-4 px-5 py-2.5 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book a Demo
            </a>
          </nav>
          <button className="md:hidden p-2 text-navy-600 hover:text-navy-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">BoringSalesGrowth</h3>
            <p className="text-navy-200 mb-4">
              Strategic AI implementation for traditional B2B companies.
              No disruption. Just results.
            </p>
            <p className="text-sm text-navy-300">
              © 2024 BoringSalesGrowth. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-navy-200">
              <li><a href="#problems" className="hover:text-white transition-colors">Challenges</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#roi" className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#risk" className="hover:text-white transition-colors">Risk Mitigation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-navy-200 mb-2">Ready to explore?</p>
            <a
              href="#discovery"
              className="inline-block px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-semibold"
            >
              Schedule Briefing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
