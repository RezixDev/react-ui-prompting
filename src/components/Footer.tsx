import { useState, useEffect } from 'react';
import { ChevronUp, Mail } from 'lucide-react';

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Tools', href: '#tools' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={handleBackToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg transition-all duration-300 transform ${
          showBackToTop 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            {/* Main Footer Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Navigation Links */}
              <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Contact Link */}
              <div className="flex items-center gap-4">
                <a
                  href="mailto:john.doe@example.com"
                  className="flex items-center gap-2 p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-105"
                  aria-label="Send me an email"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium">Contact</span>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {currentYear} John Doe. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};