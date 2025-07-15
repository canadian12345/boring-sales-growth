import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BoringSalesGrowth - AI for Traditional B2B Companies",
  description: "Grow 40% without disrupting what works. We help relationship-driven B2B companies compete with AI-powered competitors by handling the repetitive work that kills sales momentum. No transformation. Just results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b-2 border-black z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div>
              <span className="text-2xl font-black tracking-tight">
                BORING<span className="text-gray-500">SALES</span>
              </span>
              <p className="text-xs font-mono uppercase hidden lg:block">AI THAT PRESERVES WHAT WORKS</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#system" className="font-mono text-sm hover:underline">
              METHOD
            </a>
            <a href="#scorecard" className="font-mono text-sm hover:underline">
              CALCULATOR
            </a>
            <a href="#transformation" className="font-mono text-sm hover:underline">
              RESULTS
            </a>
            <a href="#next-move" className="font-mono text-sm hover:underline">
              GET STARTED
            </a>
            <a
              href="https://tidycal.com/noah3/boring-sales-growth"
              className="ml-4 px-6 py-3 text-sm font-bold text-white bg-black border border-black hover:bg-gray-900"
            >
              BOOK DEMO →
            </a>
          </nav>
          <button className="md:hidden p-2">
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
    <footer className="bg-black text-white py-16 border-t-8 border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-3xl font-black mb-4">BORINGSALESGROWTH</h3>
            <p className="text-gray-300 mb-4 font-mono text-sm">
              STRATEGIC AI FOR B2B COMPANIES.
              NO DISRUPTION. JUST RESULTS.
            </p>
            <p className="text-xs text-gray-400 font-mono">
              © 2024 BORINGSALESGROWTH. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><a href="#system" className="text-gray-300 hover:text-white font-mono text-sm">METHOD</a></li>
              <li><a href="#scorecard" className="text-gray-300 hover:text-white font-mono text-sm">CALCULATOR</a></li>
              <li><a href="#transformation" className="text-gray-300 hover:text-white font-mono text-sm">RESULTS</a></li>
              <li><a href="#next-move" className="text-gray-300 hover:text-white font-mono text-sm">GET STARTED</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">READY TO START?</h4>
            <p className="text-gray-300 mb-4 font-mono text-sm">NO BS. NO PRESSURE.</p>
            <a
              href="https://tidycal.com/noah3/boring-sales-growth"
              className="inline-block px-6 py-3 bg-white text-black font-bold hover:bg-gray-100 border border-white"
            >
              SCHEDULE BRIEFING
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
