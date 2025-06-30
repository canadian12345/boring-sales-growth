import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BoringSalesGrowth - The Boring Eat The Bold | AI Sales for Traditional B2B",
  description: "Help your sales team close 40% more deals without hiring more people. Strategic AI implementation for manufacturing, distribution, and wholesale companies. The boring eat the bold.",
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
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-navy-100 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-navy-900">BoringSalesGrowth</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problems" className="text-navy-600 hover:text-navy-900 transition-colors">
              Challenges
            </a>
            <a href="#solutions" className="text-navy-600 hover:text-navy-900 transition-colors">
              Solutions
            </a>
            <a href="#roi" className="text-navy-600 hover:text-navy-900 transition-colors">
              ROI Calculator
            </a>
            <a
              href="#opportunity"
              className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors font-semibold"
            >
              Explore Opportunity
            </a>
          </nav>
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
              href="#opportunity"
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
